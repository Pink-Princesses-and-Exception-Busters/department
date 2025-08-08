import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DPT MALL</h3>
            <p className="text-gray-300 mb-4">
              프리미엄 라이프스타일을 위한 최고의 온라인 백화점
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">고객서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/help" className="hover:text-white">고객센터</Link></li>
              <li><Link to="/faq" className="hover:text-white">자주묻는질문</Link></li>
              <li><Link to="/shipping" className="hover:text-white">배송안내</Link></li>
              <li><Link to="/returns" className="hover:text-white">교환/반품</Link></li>
              <li><Link to="/size-guide" className="hover:text-white">사이즈가이드</Link></li>
            </ul>
          </div>

          {/* Shopping Info */}
          <div>
            <h4 className="font-semibold mb-4">쇼핑정보</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/membership" className="hover:text-white">멤버십</Link></li>
              <li><Link to="/coupons" className="hover:text-white">쿠폰</Link></li>
              <li><Link to="/events" className="hover:text-white">이벤트</Link></li>
              <li><Link to="/gift-cards" className="hover:text-white">상품권</Link></li>
              <li><Link to="/brands" className="hover:text-white">브랜드</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">회사정보</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">회사소개</Link></li>
              <li><Link to="/careers" className="hover:text-white">채용정보</Link></li>
              <li><Link to="/press" className="hover:text-white">보도자료</Link></li>
              <li><Link to="/terms" className="hover:text-white">이용약관</Link></li>
              <li><Link to="/privacy" className="hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>© 2024 DPT MALL. All rights reserved.</p>
              <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 제2024-서울강남-1234호</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p>고객센터: 1588-1234 (평일 09:00-18:00)</p>
              <p>이메일: help@luxurymall.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;