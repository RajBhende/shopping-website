import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <TopNav />
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-[180px] md:pt-[170px] pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Email Address */}
          <div className="text-left mb-10">
            <p className="text-gray-900">
              <span className="font-semibold">Email:</span>{" "}
              <a 
                href="mailto:shraddhabhende9@gmail.com" 
                className="text-gray-700 hover:text-gray-900 hover:underline transition-colors"
              >
                shraddhabhende9@gmail.com
              </a>
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

