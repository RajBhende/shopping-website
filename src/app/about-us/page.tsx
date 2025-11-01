import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <TopNav />
      <Navbar />
      <div className="container mx-auto px-8 pt-[120px] pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">About Us</h1>
        <p className="text-center text-gray-600 mb-12">Homepage {'>'} About Us</p>
        
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to BS (Bramha & Shraddha), where fashion meets elegance. We are a premier fashion brand dedicated to 
              providing high-quality clothing and accessories for every occasion. Since our inception, we have 
              been committed to creating timeless pieces that blend contemporary style with classic sophistication.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower individuals to express their unique style through carefully curated 
              fashion collections. We believe that fashion is not just about clothing—it's about confidence, 
              self-expression, and making a statement.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Style</h3>
                <p className="text-sm text-gray-600">Trend-setting designs for every season</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Value</h3>
                <p className="text-sm text-gray-600">Competitive prices with exceptional quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

