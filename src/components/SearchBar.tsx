"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import { useDebounce } from "use-debounce";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useMounted } from "@/hooks/useMounted";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface SearchBarProps {
  isScrolled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export default function SearchBar({ isScrolled = false, onOpenChange }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchInput, 300); // 300ms delay
  const mounted = useMounted();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const searchIconRef = useRef<HTMLButtonElement>(null);

  // Sample products for search
  const products = [
    { id: 1, name: "Clutch Master Oversized T-shirt", category: "T-SHIRT" },
    { id: 2, name: "Casual Top", category: "TOP" },
    { id: 3, name: "Elegant Blouse", category: "TOP" },
    { id: 4, name: "Summer Top", category: "TOP" },
    { id: 5, name: "Designer Top", category: "TOP" },
    { id: 6, name: "Classic Tee", category: "T-SHIRT" },
    { id: 7, name: "Graphic Tee", category: "T-SHIRT" },
    { id: 8, name: "Premium Tee", category: "T-SHIRT" },
  ];

  // Use debounced value for filtering
  const filteredProducts = debouncedSearchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      )
    : [];

  // Focus input when opened - Command component handles focus automatically
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const commandInput = document.querySelector('[data-slot="command-input"]') as HTMLInputElement;
        if (commandInput) {
          commandInput.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  // Close on Escape key - Using useKeyPress hook
  useKeyPress(
    "Escape",
    () => {
      if (isOpen) {
        handleClose();
      }
    },
    isOpen
  );

  // Close when clicking outside the search bar - Using reusable hook
  useClickOutside(
    searchBarRef,
    () => {
      if (isOpen) {
        handleClose();
      }
    },
    [searchIconRef] // Exclude search icon button from outside detection
  );

  const handleClose = () => {
    setIsOpen(false);
    setSearchInput("");
    onOpenChange?.(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    onOpenChange?.(true);
  };

  const handleProductClick = (productName: string) => {
    handleClose();
    window.location.href = `/collections/all?search=${productName}`;
  };

  const searchOverlay = isOpen && mounted ? (
    <div 
      ref={searchBarRef}
      className="fixed top-[44px] md:top-[44px] left-0 right-0 w-full h-[56px] md:h-[74px] flex items-center justify-center z-[60] bg-white md:bg-white/95 backdrop-blur-sm shadow-sm animate-in fade-in-0 duration-300"
      style={{ zIndex: 60 }}
    >
      <div className="w-full max-w-2xl mx-auto px-4 md:px-8 relative">
        <div className="relative flex items-center w-full animate-in slide-in-from-top-5 duration-300">
          {/* Command Component - shadcn latest component */}
          <Command className="w-full rounded-lg border border-gray-200 shadow-sm bg-white" shouldFilter={false}>
            <div className="relative flex items-center">
              <CommandInput
                placeholder="Search products..."
                value={searchInput}
                onValueChange={setSearchInput}
                className="h-12 text-base pr-12"
              />
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-3 z-10 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Search Results - Using Command components */}
            {debouncedSearchQuery && (
              <CommandList className="max-h-96">
                {filteredProducts.length > 0 ? (
                  <CommandGroup heading={`Products (${filteredProducts.length})`}>
                    {filteredProducts.map((product) => (
                      <CommandItem
                        key={product.id}
                        value={product.name}
                        onSelect={() => handleProductClick(product.name)}
                        className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                          <Search className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-medium text-gray-900 truncate">{product.name}</span>
                          <span className="text-xs text-gray-500">{product.category}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : (
                  <CommandEmpty>
                    <div className="py-8 text-center">
                      <Search className="mx-auto h-10 w-10 text-gray-300 mb-3 opacity-50" />
                      <p className="text-gray-500 font-medium">No products found</p>
                      <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
                    </div>
                  </CommandEmpty>
                )}
              </CommandList>
            )}
          </Command>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Search Icon Button */}
      <button
        ref={searchIconRef}
        onClick={handleOpen}
        className={`group relative transition-all duration-300 ${
          isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
        }`}
        aria-label="Search"
      >
        <Search className="w-4 h-4 md:w-5 md:h-5 stroke-2 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </button>

      {/* Search Overlay - Rendered via Portal */}
      {mounted && searchOverlay && createPortal(searchOverlay, document.body)}
    </>
  );
}
