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

export default function RefundPolicyPage() {
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
                  <BreadcrumbPage>Refund Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-gray-600">Last updated: March 15, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none space-y-8">
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">No Return Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                At AltF4, we take pride in the quality of our products and ensure each item is crafted with care. As such, all sales are final, and we do not accept returns or exchanges.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Damaged Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you receive a product that is damaged, we sincerely apologize for the inconvenience. In such cases, we will gladly assist you in resolving the issue. Please contact our support team at <a href="mailto:supp.altf4@gmail.com" className="text-blue-600 hover:text-blue-800 underline">supp.altf4@gmail.com</a> within 7 days of receiving the product.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                When reaching out to us, kindly include the following:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Your order number.</li>
                <li>Clear photos of the damaged item.</li>
                <li>A brief description of the issue.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Our team will review your request promptly and guide you through the next steps.
              </p>
            </section>

            <section className="mt-12">
              <p className="text-gray-700 leading-relaxed">
                Thank you for your understanding and support!
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

