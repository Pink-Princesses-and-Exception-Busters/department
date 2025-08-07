import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MyShop</h3>
            <p className="text-gray-300">
              최고의 상품을 합리적인 가격에 제공하는 온라인 쇼핑몰입니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 서비스</h3>
            <ul className="space-y-2 text-gray-300">
              <li>배송 정보</li>
              <li>반품/교환</li>
              <li>고객 지원</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="text-gray-300">
              <p>이메일: support@myshop.com</p>
              <p>전화: 1588-0000</p>
              <p>주소: 서울시 강남구 테헤란로 123</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 MyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;