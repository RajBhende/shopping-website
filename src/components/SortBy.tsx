"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortByProps {
  value?: string;
  onValueChange?: (value: string) => void;
  totalProducts?: number;
  visibleProducts?: number;
}

export default function SortBy({
  value = "alphabetically-az",
  onValueChange,
  totalProducts = 16,
  visibleProducts = 16,
}: SortByProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-gray-900 font-medium">Sort by:</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px] border-gray-300">
          <SelectValue placeholder="Select sorting" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alphabetically-az">Alphabetically, A-Z</SelectItem>
          <SelectItem value="alphabetically-za">Alphabetically, Z-A</SelectItem>
          <SelectItem value="price-low-high">Price: Low to High</SelectItem>
          <SelectItem value="price-high-low">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
      <span className="text-gray-600">
        {visibleProducts} products
      </span>
    </div>
  );
}

