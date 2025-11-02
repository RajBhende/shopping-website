import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-gray-900 w-full">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        {/* Top Section - Policies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-10 tracking-wide" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic' }}>Policies</h3>
          <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap text-gray-600 text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-4">Search</a>
            <a href="/policies/privacy-policy" className="hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-4">Privacy Policy</a>
            <a href="/policies/refund-policy" className="hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-4">Refund Policy</a>
            <a href="/policies/shipping-policy" className="hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-4">Shipping Policy</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center mt-8">
            <a href="https://www.instagram.com/bs_custom12/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-600 order-2 md:order-1">
              © 2025, BS (Bramha & Shraddha) Powered by BS
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 order-1 md:order-2">
              <a href="/policies/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy policy</a>
              <span className="text-gray-400">•</span>
              <a href="/policies/refund-policy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Refund policy</a>
              <span className="text-gray-400">•</span>
              <a href="/policies/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms of service</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact information</a>
              <span className="text-gray-400">•</span>
              <a href="/policies/shipping-policy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shipping policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

