import { Instagram } from "lucide-react";

export default function TopNav() {
  return (
    <header className="top-nav md:h-[44px] h-[30px] style-one bg-[#2F2725] fixed top-0 left-0 right-0 w-full z-50 text-white">
      {/* Thin dark brown line at the top */}
      <div className="h-[2px] bg-[#5d4037]"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-full flex items-center justify-between relative">
        {/* Left side - Language/Currency dropdowns (empty for now) */}
        <div className="flex items-center gap-4">
          {/* Can add language and currency dropdowns here later */}
        </div>

        {/* Center - Promotional Message */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-center text-[11px] md:text-[12px] text-white font-[var(--font-poppins)] font-medium uppercase tracking-wide">
          NEW CUSTOMERS SAVE 10% WITH THE CODE GET10
        </div>

        {/* Right side - Social Media Icons */}
        <div className="right-content flex items-center gap-5 md:gap-6 max-md:hidden flex-shrink-0">
          {/* Invisible placeholder to match Search icon position */}
          <div className="w-4 h-4 md:w-5 md:h-5 opacity-0 pointer-events-none">
            <div className="w-full h-full"></div>
          </div>
          
          {/* Instagram - aligned with Profile icon */}
          <a href="https://www.instagram.com/bs_custom12/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          
          {/* Invisible placeholder to match ShoppingBag icon position */}
          <div className="w-4 h-4 md:w-5 md:h-5 opacity-0 pointer-events-none">
            <div className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

