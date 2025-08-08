import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiUser, FiHeart, FiLogOut } from 'react-icons/fi';

const Header: React.FC = () => {
  // TODO: 나중에 실제 훅들로 교체
  const totalQuantity = 0;
  const isAuthenticated = false;
  const user = null;
  const logout = () => {};

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex space-x-4">
              <span>무료배송</span>
              <span>|</span>
              <span>당일배송</span>
              <span>|</span>
              <span>고객센터: 1588-1234</span>
            </div>
            <div className="flex space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-600">안녕하세요, {user?.name}님</span>
                  <Link to="/mypage" className="hover:text-gray-900">마이페이지</Link>
                  <button onClick={logout} className="hover:text-gray-900 flex items-center space-x-1">
                    <FiLogOut className="w-4 h-4" />
                    <span>로그아웃</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-gray-900">로그인</Link>
                  <Link to="/signup" className="hover:text-gray-900">회원가입</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              DPT MALL
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="상품을 검색해보세요"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="text-gray-600 hover:text-gray-900">
              <FiHeart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-gray-900">
              <FiShoppingBag className="h-6 w-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link to="/mypage" className="text-gray-600 hover:text-gray-900">
              <FiUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12 items-center">
            <Link to="/products" className="text-gray-700 hover:text-primary-600 font-medium">
              전체상품
            </Link>
            <Link to="/category/fashion" className="text-gray-700 hover:text-primary-600 font-medium">
              패션
            </Link>
            <Link to="/category/beauty" className="text-gray-700 hover:text-primary-600 font-medium">
              뷰티
            </Link>
            <Link to="/category/electronics" className="text-gray-700 hover:text-primary-600 font-medium">
              전자제품
            </Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 font-medium">
              세일
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;