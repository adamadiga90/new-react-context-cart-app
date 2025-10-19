import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Test() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Acme Drawstring Bag",
      price: "$12.00",
      category: "Accessories",
    },
    {
      id: 2,
      name: "Acme Circles T-Shirt",
      price: "$20.00",
      category: "Apparel",
    },
    { id: 3, name: "Acme Cup", price: "$15.00", category: "Accessories" },
    { id: 4, name: "Acme Mug", price: "$15.00", category: "Accessories" },
    { id: 5, name: "Acme Sticker", price: "$5.00", category: "Accessories" },
    { id: 6, name: "Acme Baby Cap", price: "$10.00", category: "Apparel" },
  ];

  const collections = ["All", "Apparel", "Accessories", "New Arrivals"];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                className="md:hidden mr-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-bold">ACME</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {collections.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className={`absolute right-10 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-black transition-all duration-500 ease-out transform ${
                    searchOpen
                      ? "w-64 opacity-100 scale-100 translate-x-0"
                      : "w-0 opacity-0 scale-95 translate-x-4 pointer-events-none"
                  }`}
                  autoFocus={searchOpen}
                />
                <button
                  className="hover:text-gray-600 transition-colors relative z-10"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search size={20} />
                </button>
              </div>
              <button className="relative hover:text-gray-600 transition-colors">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              {collections.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="px-8 py-32 md:py-48">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Acme Apparel
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                High-performance apparel for the modern lifestyle. Shop our
                latest collection.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">Featured Products</h3>
          <button className="flex items-center text-sm text-gray-600 hover:text-black">
            Sort by <ChevronDown size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-black rounded-lg overflow-hidden mb-3 aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm group-hover:underline">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="px-8 py-24">
              <h3 className="text-white text-3xl font-bold mb-3">
                Summer Collection
              </h3>
              <p className="text-gray-300 mb-6">Lightweight and breathable</p>
              <button className="text-white underline hover:text-gray-300">
                Shop Collection
              </button>
            </div>
          </div>
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="px-8 py-24">
              <h3 className="text-white text-3xl font-bold mb-3">
                Accessories
              </h3>
              <p className="text-gray-300 mb-6">Complete your look</p>
              <button className="text-white underline hover:text-gray-300">
                Shop Accessories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">ACME</h4>
              <p className="text-sm text-gray-600">
                High-performance apparel for the modern lifestyle.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Shop</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Apparel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            © 2025 ACME, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
