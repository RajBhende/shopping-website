import { auth } from "@/lib/firebase";
import { 
  signInWithPhoneNumber, 
  RecaptchaVerifier,
  ConfirmationResult,
  User,
  getIdToken,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "firebase/auth";

/**
 * Firebase Authentication helper functions (Client-side)
 */

// Store token in localStorage (client-side)
function setAuthToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth-token", token);
  }
}

// Get auth token from localStorage
export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth-token");
  }
  return null;
}

// Clear auth token
export function clearAuthToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth-token");
  }
}

/**
 * Initialize Recaptcha for phone authentication
 * This should be called on the client side
 */
export function initializeRecaptcha(elementId: string = "recaptcha-container"): RecaptchaVerifier | null {
  if (typeof window === "undefined") return null;

  // Check if recaptcha already exists
  if (window.recaptchaVerifier) {
    return window.recaptchaVerifier;
  }

  const verifier = new RecaptchaVerifier(auth, elementId, {
    size: "invisible",
    callback: () => {
      // reCAPTCHA solved, allow signInWithPhoneNumber
    },
    "expired-callback": () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      console.error("reCAPTCHA expired");
    },
  });

  window.recaptchaVerifier = verifier;
  return verifier;
}

/**
 * Send OTP to phone number
 */
export async function sendOTP(phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) {
  try {
    const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;
    const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
    return {
      success: true,
      confirmationResult,
    };
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return {
      success: false,
      error: error.message || "Failed to send OTP",
    };
  }
}

/**
 * Verify OTP and sign in user
 */
export async function verifyOTP(
  confirmationResult: ConfirmationResult,
  otp: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const result = await confirmationResult.confirm(otp);
    const user = result.user;

    // Get ID token
    const idToken = await getIdToken(user);

    // Store token in localStorage
    setAuthToken(idToken);

    return {
      success: true,
      user,
    };
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return {
      success: false,
      error: error.message || "Invalid OTP",
    };
  }
}

/**
 * Check if user is authenticated (client-side)
 */
export function requireAuth(): { authenticated: boolean; token: string | null; error?: string } {
  const token = getAuthToken();
  
  if (!token) {
    return {
      authenticated: false,
      token: null,
      error: "Unauthorized access: Missing or invalid token",
    };
  }

  return {
    authenticated: true,
    token,
  };
}

/**
 * Get current user
 */
export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !auth) {
      resolve(null);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

/**
 * Sign out user
 */
export async function signOut(): Promise<{ success: boolean; error?: string }> {
  try {
    if (auth) {
      await firebaseSignOut(auth);
    }
    clearAuthToken();
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to sign out",
    };
  }
}

// Extend Window interface for recaptcha verifier
declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

