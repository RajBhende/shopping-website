import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductFilter from "@/components/ProductFilter";
import ProductCard from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

export default function CatalogPage() {
  // Actual products array with proper structure
  const products = [
    { id: 1, name: "Clutch Master Oversized T-shirt", price: "Rs. 599.00" },
    { id: 2, name: "Casual Top", price: "Rs. 499.00" },
    { id: 3, name: "Elegant Blouse", price: "Rs. 599.00" },
    { id: 4, name: "Summer Top", price: "Rs. 399.00" },
    { id: 5, name: "Designer Top", price: "Rs. 799.00" },
    { id: 6, name: "Classic Tee", price: "Rs. 299.00" },
    { id: 7, name: "Graphic Tee", price: "Rs. 349.00" },
    { id: 8, name: "Premium Tee", price: "Rs. 399.00" },
  ];
  const actualProductCount = products.length;

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <TopNav />
      <Navbar />
      
      {/* Catalog Section */}
      <section className="relative w-full bg-[#FFFEF7] py-12 md:py-16 pt-[140px] md:pt-[130px]">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="w-full space-y-6">
            {/* Breadcrumb */}
            <div className="mb-4">
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
                    <BreadcrumbPage>Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-normal text-left mb-6" style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>Products</h1>
            
            {/* Filter Component */}
            <ProductFilter totalProducts={actualProductCount} />
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                showAddToCart={true}
              />
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

