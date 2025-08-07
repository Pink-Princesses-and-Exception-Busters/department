import React from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import CartItem from '@/components/CartItem';

const CartPage: React.FC = () => {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">장바구니</h1>
        <p className="text-gray-600 mb-8">장바구니가 비어있습니다.</p>
        <Link href="/" className="btn-primary">
          쇼핑 계속하기
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">장바구니</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">주문 요약</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>상품 금액</span>
                <span>₩{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>배송비</span>
                <span>₩3,000</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>총 금액</span>
                <span>₩{(total + 3000).toLocaleString()}</span>
              </div>
            </div>
            
            <button className="w-full btn-primary text-lg py-3">
              주문하기
            </button>
            
            <Link href="/" className="block text-center mt-4 text-primary hover:underline">
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;