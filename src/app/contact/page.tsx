import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <TopNav />
      <Navbar />
      <div className="container mx-auto px-8 pt-[120px] pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Contact</h1>
        <p className="text-center text-gray-600 mb-12">Homepage {'>'} Contact</p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 h-32 resize-none"
                placeholder="Your Message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

