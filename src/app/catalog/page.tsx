import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Navbar />
      
      {/* Catalog Hero Section */}
      <section className="relative w-full bg-[#FFFEF7] py-24 md:py-32 pt-[120px]">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">Catalog</h1>
            <p className="text-base md:text-lg text-gray-600">Homepage {'>'} Catalog</p>
            
            <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap pt-4">
              <button className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors px-4 py-2 border-b-2 border-transparent hover:border-gray-900">
                T-SHIRT
              </button>
              <button className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors px-4 py-2 border-b-2 border-transparent hover:border-gray-900">
                DRESS
              </button>
              <button className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors px-4 py-2 border-b-2 border-transparent hover:border-gray-900">
                TOP
              </button>
              <button className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors px-4 py-2 border-b-2 border-transparent hover:border-gray-900">
                SWIMWEAR
              </button>
              <button className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors px-4 py-2 border-b-2 border-transparent hover:border-gray-900">
                SHIRT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-8 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder product cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Product {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">Description</p>
                  <p className="font-bold text-gray-900">$99.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

