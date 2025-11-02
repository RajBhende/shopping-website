"use client";

import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import SortBy from "@/components/SortBy";

interface FilterState {
  inStock: boolean;
  outOfStock: boolean;
  minPrice?: string;
  maxPrice?: string;
}

interface ProductFilterProps {
  totalProducts?: number;
  onFilterChange?: (filters: FilterState, visibleCount: number) => void;
}

export default function ProductFilter({ 
  totalProducts = 16,
  onFilterChange 
}: ProductFilterProps) {
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("alphabetically-az");
  
  const highestPrice = 1499.00;

  const selectedCount = (inStock ? 1 : 0) + (outOfStock ? 1 : 0);

  // Calculate visible products count based on filters
  // For now, show all products since filtering logic can be added later
  // The actual displayed products count comes from the catalog page
  const visibleProducts = totalProducts;

  // Notify parent component of filter changes
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(
        { inStock, outOfStock, minPrice, maxPrice },
        visibleProducts
      );
    }
  }, [inStock, outOfStock, minPrice, maxPrice, visibleProducts, onFilterChange]);

  const handleReset = () => {
    setInStock(false);
    setOutOfStock(false);
    setMinPrice("");
    setMaxPrice("");
  };
  
  const handleResetPrice = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  const handleRemoveFilter = (type: "inStock" | "outOfStock" | "price") => {
    if (type === "inStock") {
      setInStock(false);
    } else if (type === "outOfStock") {
      setOutOfStock(false);
    } else if (type === "price") {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  const activeFilters: Array<{ type: "inStock" | "outOfStock" | "price"; label: string }> = [];
  if (inStock) activeFilters.push({ type: "inStock", label: "In stock" });
  if (outOfStock) activeFilters.push({ type: "outOfStock", label: "Out of stock" });
  if (minPrice || maxPrice) {
    const priceLabel = minPrice && maxPrice 
      ? `₹${minPrice} - ₹${maxPrice}`
      : minPrice 
      ? `From ₹${minPrice}`
      : `Up to ₹${maxPrice}`;
    activeFilters.push({ type: "price", label: priceLabel });
  }

  return (
    <>
      {/* Filter and Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Filter Section - Left */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-gray-900 font-medium">Filter:</span>

          {/* Availability Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors">
                <span>Availability</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0" align="start">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-700">{selectedCount} selected</span>
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  Reset
                </button>
              </div>
              <div className="p-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                  />
                  <span className="text-sm text-gray-900">In stock (14)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={outOfStock}
                    onChange={(e) => setOutOfStock(e.target.checked)}
                    className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                  />
                  <span className="text-sm text-gray-900">Out of stock (4)</span>
                </label>
              </div>
            </PopoverContent>
          </Popover>

          {/* Price Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors">
                <span>Price</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="start">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  The highest price is Rs. {highestPrice.toFixed(2)}
                </span>
                <button
                  onClick={handleResetPrice}
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  Reset
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-gray-900 font-medium">
                    <span>₹</span>
                  </div>
                  <Input
                    type="number"
                    placeholder="From"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-gray-900 font-medium">
                    <span>₹</span>
                  </div>
                  <Input
                    type="number"
                    placeholder="To"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Sort Section - Right */}
        <SortBy
          value={sortBy}
          onValueChange={setSortBy}
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
        />
      </div>

      {/* Active Filter Tags */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {activeFilters.map((filter) => (
            <div
              key={filter.type}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-200"
            >
              <span className="text-sm text-gray-900">
                {filter.type === "price" ? "Price: " : "Availability: "}
                {filter.label}
              </span>
              <button
                onClick={() => handleRemoveFilter(filter.type)}
                className="ml-1 hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                aria-label={`Remove ${filter.label} filter`}
              >
                <X className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={handleReset}
              className="text-sm text-gray-900 underline hover:text-gray-700 transition-colors"
            >
              Remove all
            </button>
          )}
        </div>
      )}
    </>
  );
}

