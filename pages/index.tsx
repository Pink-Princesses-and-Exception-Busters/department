import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useProducts } from '@/hooks/useProducts';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
      title: "READY SET, ROBLOX",
      subtitle: "더 편리하게 만나는 글로벌 라이프 스타일"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop",
      title: "FASHION WEEK",
      subtitle: "최신 트렌드를 만나보세요"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=400&fit=crop",
      title: "LIFESTYLE",
      subtitle: "당신의 라이프스타일을 완성하세요"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">상품을 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-500">상품을 불러오는데 실패했습니다.</div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Banner Slider */}
      <section className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-700 ease-in-out h-full"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg text-white animate-fade-in-up">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 transform transition-all duration-1000 delay-300">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg mb-6 md:mb-8 opacity-90 transform transition-all duration-1000 delay-500">
                      {slide.subtitle}
                    </p>
                    <Link 
                      href="/products" 
                      className="inline-block bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform delay-700 shadow-lg hover:shadow-xl"
                    >
                      지금 쇼핑하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaChevronLeft className="text-sm md:text-base" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaChevronRight className="text-sm md:text-base" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 text-white text-sm">
          {currentSlide + 1} / {heroSlides.length}
        </div>
      </section>

      {/* Exclusives Section */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center md:text-left">Exclusives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="relative h-64 md:h-80 bg-red-100 overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop"
              alt="ARKET"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:text-red-300 transition-colors duration-300">ARKET</h3>
              <p className="text-sm md:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">PRE FALL 2025</p>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 bg-black overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"
              alt="GLOBAL EDITION"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-xl md:text-3xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">GLOBAL</h3>
              <h3 className="text-xl md:text-3xl font-bold group-hover:text-blue-300 transition-colors duration-300">EDITION</h3>
              <p className="text-sm md:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">2025 s/s season</p>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
              alt="COS"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">COS</h3>
              <p className="text-sm md:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">PRE FALL 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Focus Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Weekly Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96 bg-gray-50 overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=400&fit=crop"
              alt="Sleep Well, Cool Night"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-8 left-8 bg-white/90 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sleep Well, Cool Night</h3>
              <p className="text-sm text-gray-600">쾌적한 밤을 위한 쿨링 아이템 제안</p>
            </div>
          </div>
          
          <div className="relative h-96 bg-yellow-50 overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop"
              alt="Kitchen & Dining"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Top Picks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products && products.slice(0, 4).map((product, index) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white border border-gray-200 overflow-hidden group cursor-pointer">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-lg font-bold">{product.price.toLocaleString()}원</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-black text-white rounded text-sm">1</button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">2</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
          </div>
        </div>
      </section>

      {/* New & Fresh Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">New&Fresh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 bg-black overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop"
              alt="New Collection"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          </div>
          
          <div className="relative h-64 bg-orange-100 overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop"
              alt="Fresh Items"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">
              신상
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;