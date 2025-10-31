import { Facebook, Instagram, Youtube, Twitter, } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  // Sample slides data - you can modify this or fetch from an API
  const slides = [
    {
      id: 1,
      badge: "SALE! UP TO 50% OFF!",
      title: "Fashion For",
      subtitle: "Every Occasion",
      imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      badge: "SALE! UP TO 50% OFF!",
      title: "Winter Sale",
      subtitle: "Collections",
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
      buttonText: "Shop Now"
    },
   
    {
      id: 3,
      badge: "SALE! UP TO 50% OFF!",
      title: "Summer Sale",
      subtitle: "Collections",
      imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
      buttonText: "Shop Now"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Header Bar */}
      <header className="top-nav md:h-[44px] h-[30px] style-one bg-[#2F2725] relative text-white">
        {/* Thin dark brown line at the top */}
        <div className="h-[2px] bg-[#5d4037]"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
          {/* Left side - Language/Currency dropdowns (empty for now) */}
          <div className="flex items-center gap-4">
            {/* Can add language and currency dropdowns here later */}
          </div>

          {/* Center - Promotional Message */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-center text-[11px] md:text-[12px] text-white font-[var(--font-poppins)] font-medium uppercase tracking-wide">
            NEW CUSTOMERS SAVE 10% WITH THE CODE GET10
          </div>

          {/* Right side - Social Media Icons */}
          <div className="right-content flex items-center gap-3 max-md:hidden pr-4">
            {/* Facebook */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            {/* Instagram */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            {/* YouTube */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            {/* Twitter/X */}
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            {/* Pinterest */}
          
          </div>
        </div>
      </header>

      {/* Hero Slider Component */}
      <HeroSlider slides={slides} autoSlideInterval={5000} />
    </div>
  );
}
