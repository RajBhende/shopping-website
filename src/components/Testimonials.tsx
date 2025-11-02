"use client";

import { Star } from "lucide-react";
import MarqueeComponent from "@/components/Marquee";

interface Testimonial {
  rating: number;
  title: string;
  review: string;
  name: string;
  date: string;
}

export default function Testimonials() {
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

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What People Are Saying</h2>
          <p className="text-gray-600">Real reviews from our happy customers</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <MarqueeComponent speed={30} pauseOnHover={true} gradient={true} gradientColor="#f9fafb">
            <div className="flex gap-6 px-4">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.name} 
                  className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group min-w-[320px] md:min-w-[380px] max-w-[380px] flex-shrink-0"
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
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {testimonial.title}
                  </h3>

                  {/* Review */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
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
          </MarqueeComponent>
        </div>
      </div>
    </section>
  );
}

