import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaHeart, FaShare, FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: products } = useProducts();
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products?.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">상품을 찾을 수 없습니다.</div>
      </div>
    );
  }

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    alert('장바구니에 추가되었습니다!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>홈</span> &gt; <span>{product.category}</span> &gt; <span className="text-black">{product.name}</span>
      </nav>

      {/* Brand Banner */}
      <div className="bg-black text-white text-center py-4 mb-8">
        <h1 className="text-3xl font-bold tracking-wider">{product.category.toUpperCase()}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <Image
              src={productImages[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 border-2 overflow-hidden ${
                  selectedImage === index ? 'border-black' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand & Product Name */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">브랜드</span>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <FaHeart className="text-gray-400" />
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <FaShare className="text-gray-400" />
                </button>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-500">
              {product.price.toLocaleString()}원
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div>💳 H.Point Pay 적립혜택최대 5% 적 {Math.round(product.price * 0.05).toLocaleString()}원</div>
              <div>💳 H.Point 150만원 이상 무이자할부 가능 최대 12개 + 적립</div>
              <div>💳 신세계 L.POINT 적립 최대 1% 적립</div>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">옵션선택</label>
              <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black">
                <option>옵션을 선택해주세요</option>
                <option>기본형</option>
                <option>프리미엄</option>
                <option>디럭스</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">수량</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <FaMinus className="text-sm" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <FaPlus className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>총 상품금액</span>
              <span className="text-red-500">{(product.price * quantity).toLocaleString()}원</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex space-x-3">
              <button className="flex-1 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50">
                장바구니
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-3 bg-black text-white rounded font-medium hover:bg-gray-800"
              >
                바로구매
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span>평점</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span>4.9점</span>
            </div>
            <div>
              <span>후기</span>
              <span className="ml-1 text-blue-600">2,655개</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-black font-medium text-black">
              상품정보
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
              상품후기 (2,655)
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
              상품문의
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
              배송/교환/반품
            </button>
          </nav>
        </div>

        <div className="py-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold mb-4">상품 상세정보</h3>
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            <div className="bg-gray-50 p-6 rounded">
              <h4 className="font-bold mb-2">제품 특징</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 고품질 소재로 제작된 프리미엄 제품</li>
                <li>• 뛰어난 내구성과 실용성</li>
                <li>• 세련된 디자인과 완벽한 마감</li>
                <li>• 다양한 용도로 활용 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">관련 상품</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.slice(0, 4).map((relatedProduct) => (
            <div key={relatedProduct.id} className="border border-gray-200 overflow-hidden group cursor-pointer">
              <div className="relative aspect-square">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-sm mb-2 line-clamp-2">{relatedProduct.name}</h4>
                <p className="text-lg font-bold">{relatedProduct.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;