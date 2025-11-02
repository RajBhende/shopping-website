"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowLeft, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { initializeRecaptcha, sendOTP, verifyOTP, getCurrentUser } from "@/lib/auth";
import type { ConfirmationResult } from "firebase/auth";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const recaptchaVerifierRef = useRef<any>(null);

  // Initialize reCAPTCHA when dialog opens
  useEffect(() => {
    if (open && step === "phone" && !recaptchaVerifierRef.current) {
      try {
        const verifier = initializeRecaptcha("recaptcha-container");
        recaptchaVerifierRef.current = verifier;
      } catch (error) {
        console.error("Error initializing reCAPTCHA:", error);
      }
    }
  }, [open, step]);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate phone number (should be 10 digits)
    const cleanedPhone = phoneNumber.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);

    try {
      // Initialize reCAPTCHA if not already done
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = initializeRecaptcha("recaptcha-container");
      }

      // Send OTP using Firebase
      const result = await sendOTP(cleanedPhone, recaptchaVerifierRef.current);

      if (result.success && result.confirmationResult) {
        setConfirmationResult(result.confirmationResult);
        setStep("otp");
        setIsLoading(false);
      } else {
        setError(result.error || "Failed to send OTP");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      setError(error.message || "Failed to send OTP. Please try again.");
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    if (!confirmationResult) {
      setError("Session expired. Please start again.");
      return;
    }

    setIsLoading(true);

    try {
      // Verify OTP using Firebase
      const result = await verifyOTP(confirmationResult, otp);

      if (result.success && result.user) {
        // Successfully logged in
        setIsLoading(false);
        onOpenChange(false);
        
        // Reset form
        setTimeout(() => {
          setStep("phone");
          setPhoneNumber("");
          setOtp("");
          setConfirmationResult(null);
          // Optionally redirect to profile or home
          // router.push("/pages/profile");
        }, 200);
      } else {
        setError(result.error || "Invalid OTP. Please try again.");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      setError(error.message || "Failed to verify OTP. Please try again.");
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep("phone");
    setOtp("");
    setError("");
    setConfirmationResult(null);
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      const cleanedPhone = phoneNumber.replace(/\D/g, "");
      
      // Re-initialize reCAPTCHA
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = initializeRecaptcha("recaptcha-container");
      }

      const result = await sendOTP(cleanedPhone, recaptchaVerifierRef.current);

      if (result.success && result.confirmationResult) {
        setConfirmationResult(result.confirmationResult);
        setIsLoading(false);
      } else {
        setError(result.error || "Failed to resend OTP");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Error resending OTP:", error);
      setError(error.message || "Failed to resend OTP. Please try again.");
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form when closing
    setTimeout(() => {
      setStep("phone");
      setPhoneNumber("");
      setOtp("");
      setError("");
      setConfirmationResult(null);
      // Clean up reCAPTCHA
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      }
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {step === "phone" ? "Login" : "Verify OTP"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {step === "phone"
              ? "Enter your mobile number to continue"
              : `We've sent an OTP to ${phoneNumber}`}
          </DialogDescription>
        </DialogHeader>

        <Card className="bg-white border-0 shadow-none">
          <CardContent className="pt-6">
            {step === "phone" ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          setPhoneNumber(value);
                          setError("");
                        }
                      }}
                      className="pl-10 h-12"
                      required
                      maxLength={10}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={isLoading || phoneNumber.length !== 10}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOTPSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 6) {
                        setOtp(value);
                        setError("");
                      }
                    }}
                    className="text-center text-2xl tracking-widest h-16"
                    required
                    maxLength={6}
                    autoFocus
                  />
                  {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                  )}
                  <div className="flex items-center justify-between text-sm pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Change number
                    </button>
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Resend OTP"}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Login"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Hidden reCAPTCHA container */}
        <div id="recaptcha-container" className="hidden"></div>
      </DialogContent>
    </Dialog>
  );
}

