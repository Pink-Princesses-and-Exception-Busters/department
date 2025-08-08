import React from 'react';
import Link from 'next/link';
import { FiUser, FiStar, FiHome, FiSmartphone, FiCoffee, FiGift } from 'react-icons/fi';

const categories = [
  {
    id: 'fashion',
    name: '패션',
    icon: FiUser,
    description: '최신 트렌드 패션',
    color: 'bg-pink-500',
  },
  {
    id: 'beauty',
    name: '뷰티',
    icon: FiStar,
    description: '프리미엄 화장품',
    color: 'bg-purple-500',
  },
  {
    id: 'lifestyle',
    name: '리빙',
    icon: FiHome,
    description: '홈 & 리빙',
    color: 'bg-green-500',
  },
  {
    id: 'electronics',
    name: '전자제품',
    icon: FiSmartphone,
    description: '최신 전자기기',
    color: 'bg-blue-500',
  },
  {
    id: 'food',
    name: '식품',
    icon: FiCoffee,
    description: '프리미엄 식품',
    color: 'bg-orange-500',
  },
  {
    id: 'gift',
    name: '선물',
    icon: FiGift,
    description: '특별한 선물',
    color: 'bg-red-500',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">카테고리</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            다양한 카테고리에서 원하는 상품을 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group"
              >
                <div className="text-center">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;