import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Navbar />
      <div className="container mx-auto px-8 pt-[120px] pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Home className="size-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <div className="mx-1 rounded-full size-1 bg-zinc-400 dark:bg-zinc-600" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Shipping Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
            <p className="text-gray-600">Last updated: March 15, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none space-y-8">
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. General Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to process and ship all orders promptly. Orders are processed Monday through Friday, excluding holidays. Any orders placed after 3:00 PM will be processed on the next business day.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Shipping Rates and Options</h2>
              <p className="text-gray-700 leading-relaxed">
                Shipping costs are calculated at checkout based on the destination and shipping method selected.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Free Shipping</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide free standard shipping.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. International Shipping</h2>
              <p className="text-gray-700 leading-relaxed">
                We currently don&apos;t ship internationally.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Order Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                Once your order is shipped, you will receive a tracking number in couple of days via email. You can use this tracking number to check the status of your shipment on the carrier&apos;s website.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Shipping Delays</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to meet our delivery estimates, delays may occur due to unforeseen circumstances, such as weather conditions, carrier delays, or customs processing for international shipments. We are not liable for such delays but will assist you in tracking your shipment.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Address Errors</h2>
              <p className="text-gray-700 leading-relaxed">
                Please ensure your shipping address is correct at checkout. We are not responsible for orders delivered to incorrect addresses provided by the customer. If an order is returned to us due to an incorrect address, additional shipping charges may apply to resend the order.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Damaged or Missing Items</h2>
              <p className="text-gray-700 leading-relaxed">
                If your order arrives damaged or items are missing, please contact our customer support team within 7 days of receiving your shipment. Provide your order number and photos of the damage for prompt resolution.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any shipping-related inquiries, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Email: <a href="mailto:supp.altf4@gmail.com" className="text-blue-600 hover:text-blue-800 underline">supp.altf4@gmail.com</a>
              </p>
            </section>

            <section className="mt-12">
              <p className="text-gray-700 leading-relaxed">
                We are committed to ensuring a smooth and satisfactory shipping experience for all our customers.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

