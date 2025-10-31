import { Facebook, Instagram, Youtube, Twitter, } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Header Bar */}
      <header className="top-nav md:h-[44px] h-[30px] style-one bg-black relative text-white">
        {/* Thin dark brown line at the top */}
        <div className="h-[2px] bg-[#5d4037]"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          {/* Center - Promotional Message */}
          <div className="hidden md:block text-center text-button-uppercase text-white flex items-center font-[var(--font-poppins)] font-semibold">
            NEW CUSTOMERS SAVE 10% WITH THE CODE GET10
          </div>

          {/* Right side - Social Media Icons */}
          <div className="right-content flex items-center gap-5 max-md:hidden absolute right-4">
            {/* Facebook */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            {/* Instagram */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            {/* YouTube */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            {/* Twitter/X */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            {/* Pinterest */}
          
          </div>
        </div>
      </header>
    </div>
  );
}
