import React, { memo, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import { Product } from '@/store/slices/productsSlice';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const { addItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingToCart(true);
    addItem(product);
    
    // 애니메이션을 위한 딜레이
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  }, [addItem, product]);

  const handleLike = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  }, [isLiked]);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 rounded-lg overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={false}
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button 
              onClick={handleLike}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                isLiked 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
              }`}
            >
              <FaHeart className={`text-sm transition-all duration-300 ${isLiked ? 'animate-pulse' : ''}`} />
            </button>
            
            <Link href={`/products/${product.id}`}>
              <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300">
                <FaEye className="text-gray-600 text-sm" />
              </button>
            </Link>
          </div>

          {/* Quick Add Button */}
          <button 
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`absolute bottom-4 left-4 right-4 py-3 px-4 rounded-lg font-medium transition-all duration-500 transform ${
              isAddingToCart 
                ? 'bg-green-500 text-white translate-y-0 opacity-100' 
                : 'bg-black text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gray-800'
            }`}
          >
            {isAddingToCart ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>추가됨!</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <FaShoppingCart />
                <span>장바구니 담기</span>
              </div>
            )}
          </button>

          {/* Sale Badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
            한정특가 5%
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-medium text-gray-900 line-clamp-2 text-sm group-hover:text-black transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500">
              품목 {product.id}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-black group-hover:text-red-500 transition-colors duration-300">
                {product.price.toLocaleString()}원
              </span>
              <span className="text-sm text-gray-400 line-through">
                {Math.round(product.price * 1.2).toLocaleString()}원
              </span>
            </div>
            
            {/* Rating with Animation */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`transition-all duration-300 delay-${i * 100} group-hover:scale-110 ${
                        i < 4 ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>4.5점</span>
              </div>
              <span className="group-hover:text-red-500 transition-colors duration-300">♡ 27개</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;