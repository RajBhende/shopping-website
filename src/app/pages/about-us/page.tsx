import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <TopNav />
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-[120px] pb-16">
        <div className="w-full">
          <p className="text-gray-900 leading-relaxed text-left">
            Legal Name - shraddha hanumantrao bhende
          </p>
          <p className="text-gray-900 leading-relaxed mt-2 text-left">
            <a 
              href="https://www.instagram.com/bs_custom12/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 hover:underline transition-colors"
            >
              https://www.instagram.com/bs_custom12/
            </a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

