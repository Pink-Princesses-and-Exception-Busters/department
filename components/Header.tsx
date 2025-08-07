import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '@/hooks/useCart';

const Header: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-4 text-sm text-gray-600">
            <span className="hover:text-black cursor-pointer transition-colors duration-200">로그인/회원가입</span>
            <span className="hover:text-black cursor-pointer transition-colors duration-200">고객센터</span>
            <span className="hover:text-black cursor-pointer transition-colors duration-200">장바구니</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 cursor-pointer md:hidden hover:text-black transition-colors duration-200"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <Link href="/" className="text-2xl md:text-4xl font-bold text-black tracking-wider hover:scale-105 transition-transform duration-300">
              THE <span className="font-light text-gray-600">MYSHOP</span>
            </Link>
          </div>
          
          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="flex w-full group">
              <input
                type="text"
                placeholder="브랜드 검색, 온라인 OPEN"
                className="flex-1 px-4 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all duration-200"
              />
              <button className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 flex items-center justify-center transition-colors duration-200 group-hover:scale-105">
                <FaSearch />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Mobile Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden text-xl text-gray-600 hover:text-black transition-colors duration-200"
            >
              <FaSearch />
            </button>
            
            <Link href="/cart" className="relative group">
              <FaShoppingCart className="text-xl text-gray-600 hover:text-black transition-all duration-200 group-hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>
            <FaUser className="text-xl text-gray-600 hover:text-black cursor-pointer transition-all duration-200 hover:scale-110" />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={`lg:hidden mt-4 transition-all duration-300 ease-in-out ${isSearchOpen ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="브랜드 검색, 온라인 OPEN"
              className="flex-1 px-4 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:border-black"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 flex items-center justify-center">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 py-3">
            <Link href="/gift" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Gift
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Show
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/best" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Best
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/new" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              New
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/brand" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Brand
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/regreen" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Re.Green
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/event" className="text-gray-700 hover:text-black font-medium transition-all duration-200 hover:scale-105 relative group">
              Event
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <nav className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 max-h-96 py-4' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="flex flex-col space-y-4">
              <Link href="/gift" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Gift</Link>
              <Link href="/products" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Show</Link>
              <Link href="/best" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Best</Link>
              <Link href="/new" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">New</Link>
              <Link href="/brand" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Brand</Link>
              <Link href="/regreen" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Re.Green</Link>
              <Link href="/event" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2">Event</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;