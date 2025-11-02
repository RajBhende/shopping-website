"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShoppingBag, User } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/SearchBar";
import LoginDialog from "@/components/LoginDialog";
import { getCurrentUser, signOut } from "@/lib/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Catalog", path: "/collections/all" },
    { name: "Contact", path: "/pages/contact" },
    { name: "About Us", path: "/pages/about-us" }
  ];
  const pathname = usePathname();
  const isScrolled = useScroll(50);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // Check authentication state
  useEffect(() => {
    const checkAuth = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    checkAuth();
  }, []);

  // Listen for auth state changes (when user logs in/out)
  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
        setUser(user);
      });
      return () => unsubscribe();
    }
  }, []);

  return (
    <nav className={`header-menu style-one fixed top-[44px] md:top-[44px] left-0 right-0 w-full md:h-[74px] h-[56px] transition-all duration-300 z-40 ${
      isScrolled
        ? "bg-white shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-full flex items-center justify-between relative">
        {/* Left side - Logo */}
        <div className={`flex items-center flex-shrink-0 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="/" className={`text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            isScrolled ? "text-gray-900" : "text-gray-900"
          }`} style={{ 
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: 'italic',
            letterSpacing: '0.1em'
          }}>
            BS
          </a>
        </div>

        {/* Center - Navigation Links */}
        <div className={`hidden md:flex items-center justify-center gap-10 md:gap-12 flex-1 px-8 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-200 relative ${
                isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
              } ${
                pathname === link.path ? "border-b-2 border-gray-900" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side - Icons */}
        <div className={`flex items-center gap-5 md:gap-6 flex-shrink-0 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Search Bar */}
          <SearchBar isScrolled={isScrolled} onOpenChange={setIsSearchOpen} />

          {/* Avatar */}
          {user ? (
            <div className="relative group">
              <button
                className={`transition-all duration-200 cursor-pointer ${
                  isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
                }`}
                aria-label="User Account"
              >
                <Avatar className="w-6 h-6 md:w-7 md:h-7 border border-gray-300 hover:border-gray-400 transition-colors">
                  <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                  <AvatarFallback className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    {user.phoneNumber ? user.phoneNumber.slice(-2) : <User className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-2" />}
                  </AvatarFallback>
                </Avatar>
              </button>
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                    <p className="font-medium">{user.phoneNumber}</p>
                  </div>
                  <button
                    onClick={async () => {
                      await signOut();
                      setUser(null);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className={`transition-all duration-200 cursor-pointer ${
                isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
              }`}
              aria-label="User Account"
            >
              <Avatar className="w-6 h-6 md:w-7 md:h-7 border border-gray-300 hover:border-gray-400 transition-colors">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                  <User className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-2" />
                </AvatarFallback>
              </Avatar>
            </button>
          )}

          {/* Shopping Bag Icon */}
          <a
            href="#"
            className={`transition-all duration-200 relative ${
              isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
            }`}
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 stroke-2" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
              0
            </span>
          </a>
        </div>
      </div>

      {/* Login Dialog */}
      <LoginDialog 
        open={isLoginOpen} 
        onOpenChange={(open) => {
          setIsLoginOpen(open);
          // Check auth state after login dialog closes
          if (!open) {
            getCurrentUser().then(setUser);
          }
        }} 
      />
    </nav>
  );
}

