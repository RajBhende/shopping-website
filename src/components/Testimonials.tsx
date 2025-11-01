"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  rating: number;
  title: string;
  review: string;
  name: string;
  date: string;
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      rating: 5,
      title: "Best Shopping Experience!",
      review: "Mujhe BS se shopping bahut pasand hai! Unke kapde quality mein bilkul perfect hai aur delivery bhi time par hoti hai. Main recommend karti hu sabko.",
      name: "Priya Sharma",
      date: "December 15, 2024"
    },
    {
      rating: 5,
      title: "Amazing Quality!",
      review: "Main bahut impressed huin inke products se. Design kafi unique hai aur material bhi excellent quality ka hai. Price bhi competitive hai. Must try!",
      name: "Rajesh Kumar",
      date: "December 12, 2024"
    },
    {
      rating: 4,
      title: "Great Collection!",
      review: "BS ka collection bahut varied hai. Har occasion ke liye perfect outfit mil jata hai. Customer service bhi bahut acchi hai. Highly satisfied!",
      name: "Ananya Patel",
      date: "December 18, 2024"
    },
    {
      rating: 5,
      title: "Superb Fashion Sense!",
      review: "BS ki latest collection dekh kar main bahut khush hui. Unke designs modern aur trendy hain. Size fitting bhi perfect thi. Ek dam value for money!",
      name: "Sneha Reddy",
      date: "December 20, 2024"
    },
    {
      rating: 5,
      title: "Quick Delivery!",
      review: "My order from BS arrived earlier than expected! Packing excellent hai aur product bilkul photo jaisa mila. Next time zaroor order karungi.",
      name: "Meera Desai",
      date: "December 19, 2024"
    },
    {
      rating: 4,
      title: "Affordable Luxury!",
      review: "BS ke kapde aise lagte hain jaise designer brand se ho. Quality top-notch hai aur price range reasonable hai. Ekdam satisfied customer hoon main!",
      name: "Aarav Joshi",
      date: "December 17, 2024"
    },
    {
      rating: 5,
      title: "Perfect for Parties!",
      review: "Party ke liye BS se dress liya tha. Bahut sari compliments mili! Fabric comfortable hai aur fitting perfect. Will definitely shop again!",
      name: "Isha Gupta",
      date: "December 16, 2024"
    },
    {
      rating: 5,
      title: "Trending Styles!",
      review: "BS har time latest trends provide karta hai. Main regularly yahan se shopping karti hoon. Har baar kuch naya aur amazing milta hai!",
      name: "Karan Singh",
      date: "December 14, 2024"
    },
    {
      rating: 4,
      title: "Excellent Service!",
      review: "Customer support bahut helpful hai. Humein product select karne mein madad mili aur return policy bhi clear hai. Trusted brand hai BS!",
      name: "Riya Nair",
      date: "December 13, 2024"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get the 3 testimonials to display for current slide
  const getDisplayedTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What People Are Saying</h2>
          <p className="text-gray-600">Real reviews from our happy customers</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getDisplayedTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-200 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-none text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {testimonial.title}
                </h3>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.review}"
                </p>

                {/* Bottom Section */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-base font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gray-900 w-10 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

