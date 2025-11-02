"use client";

import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("TOP");
  
  const categories = ["TOP", "T-SHIRT", "DRESS", "SETS", "SHIRT"];
  const collections = ["T-SHIRT", "HOODIES"];
  
  const products = {
    "TOP": [
      { id: 1, name: "Casual Top", description: "Comfortable everyday wear", price: "Rs. 499.00", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop" },
      { id: 2, name: "Elegant Blouse", description: "Perfect for any occasion", price: "Rs. 599.00", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop" },
      { id: 3, name: "Summer Top", description: "Light and breezy", price: "Rs. 399.00", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop" },
      { id: 4, name: "Designer Top", description: "Premium quality", price: "Rs. 799.00", image: "https://images.unsplash.com/photo-1603424697798-e6e0d6c5c19f?w=600&h=600&fit=crop" }
    ],
    "T-SHIRT": [
      { id: 5, name: "Clutch Master Oversized T-shirt", description: "Essential wardrobe piece", price: "Rs. 599.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop" },
      { id: 6, name: "Graphic Tee", description: "Express your style", price: "Rs. 349.00", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop" },
      { id: 7, name: "Premium Tee", description: "Super soft cotton", price: "Rs. 399.00", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop" },
      { id: 8, name: "V-Neck Tee", description: "Comfortable fit", price: "Rs. 329.00", image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&h=600&fit=crop" }
    ],
    "DRESS": [
      { id: 9, name: "Summer Dress", description: "Flowy and feminine", price: "Rs. 899.00", image: "https://images.unsplash.com/photo-1566479179817-6a6debf55c8c?w=600&h=600&fit=crop" },
      { id: 10, name: "Evening Dress", description: "Elegant and sophisticated", price: "Rs. 1299.00", image: "https://images.unsplash.com/photo-1566393029567-cce23b8ee9bc?w=600&h=600&fit=crop" },
      { id: 11, name: "Casual Dress", description: "Perfect for any day", price: "Rs. 699.00", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=600&fit=crop" },
      { id: 12, name: "Maxi Dress", description: "Long and luxurious", price: "Rs. 999.00", image: "https://images.unsplash.com/photo-1564257571346-7b05a5e88e13?w=600&h=600&fit=crop" }
    ],
    "SETS": [
      { id: 13, name: "Sport Set", description: "Comfortable workout wear", price: "Rs. 799.00", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=600&fit=crop" },
      { id: 14, name: "Pajama Set", description: "Cozy nightwear", price: "Rs. 499.00", image: "https://images.unsplash.com/photo-1588270660678-6bd02ce4da86?w=600&h=600&fit=crop" },
      { id: 15, name: "Matching Set", description: "Coordinated style", price: "Rs. 899.00", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop" },
      { id: 16, name: "Designer Set", description: "Premium matching", price: "Rs. 1199.00", image: "https://images.unsplash.com/photo-1594978578938-585f26cbcd06?w=600&h=600&fit=crop" }
    ],
    "SHIRT": [
      { id: 17, name: "Classic Shirt", description: "Timeless style", price: "Rs. 649.00", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop" },
      { id: 18, name: "Oversized Shirt", description: "Relaxed fit", price: "Rs. 549.00", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop" },
      { id: 19, name: "Denim Shirt", description: "Versatile wear", price: "Rs. 699.00", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop" },
      { id: 20, name: "Formal Shirt", description: "Professional look", price: "Rs. 599.00", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop" }
    ]
  };

  const currentProducts = products[selectedCategory as keyof typeof products] || [];
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
      {/* Hero Slider Component */}
      <HeroSlider slides={slides} autoSlideInterval={5000} />

      {/* What's New Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">What&apos;s New</h2>
          
          {/* Category Filter */}
          <div className="bg-gray-100 rounded-lg p-2 mb-12 max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md font-semibold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                showAddToCart={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Collections Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Explore Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + index * 20000000}?w=1200&h=675&fit=crop`}
                    alt={collection}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">{collection}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
