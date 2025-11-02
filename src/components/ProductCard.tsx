"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number | string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  showAddToCart?: boolean;
  onAddToCart?: (id: number | string) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  showAddToCart = false,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white group cursor-pointer">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 underline">{name}</h3>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
        <p className="font-bold text-gray-900 text-lg">{price}</p>
        {showAddToCart && (
          <Button
            variant="default"
            size="sm"
            className="w-full bg-gray-900 text-white hover:bg-gray-800 mt-2"
            onClick={() => onAddToCart?.(id)}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

