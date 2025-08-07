import React, { useMemo, useState } from 'react';
import { useInfiniteProducts } from '@/hooks/useInfiniteProducts';
import ProductGrid from '@/components/ProductGrid';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { FaThLarge, FaList, FaFilter } from 'react-icons/fa';

const ProductsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('latest');
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteProducts();

  const allProducts = useMemo(() => {
    const products = data?.pages.flatMap(page => page.products) || [];
    return products;
  }, [data]);

  useInfiniteScroll(fetchNextPage, hasNextPage, isFetchingNextPage);

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
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <span>홈</span> &gt; <span>쇼핑 카테고리</span> &gt; <span>전체</span> &gt; <span className="text-black">가방/지갑</span>
      </nav>

      {/* Page Title */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold mb-4">가방/지갑</h1>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <span className="font-semibold">전체상품</span>
            <span className="text-gray-500 ml-1">({allProducts.length})</span>
          </div>
          <div className="text-gray-500">여성가방 (5379)</div>
          <div className="text-gray-500">남성가방 (1367)</div>
          <div className="text-gray-500">여성지갑 (79)</div>
          <div className="text-gray-500">지갑 (7791)</div>
        </div>

        {/* Brand Filters */}
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-semibold">브랜드별</span>
            <span className="text-gray-500">119명 (3)</span>
            <span className="text-gray-500">Disney디즈니 (1)</span>
            <span className="text-gray-500">제스ACC (88)</span>
            <span className="text-gray-500">그린 (1)</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>더보기 -</span>
            <span>프라다 (1)</span>
            <span>버즈컬렉션 (544)</span>
            <span>오스 젤리백 (2855)</span>
            <span>몰디 (14)</span>
          </div>
        </div>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center py-4 border-b border-gray-200">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            당일배송순
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            최근등록순
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            MD추천순
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            높은가격순
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            낮은가격순
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            상품후기순
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="latest">상품순 40개</option>
            <option value="price">가격순</option>
            <option value="popular">인기순</option>
          </select>
          
          <div className="flex border border-gray-300 rounded">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              <FaList />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {allProducts.length > 0 ? (
        <>
          <ProductGrid products={allProducts} />
          
          {isFetchingNextPage && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="ml-2 text-lg">더 많은 상품을 불러오는 중...</span>
            </div>
          )}
          
          {!hasNextPage && allProducts.length > 6 && (
            <div className="text-center py-8 text-gray-500">
              모든 상품을 불러왔습니다.
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 py-16">표시할 상품이 없습니다.</div>
      )}
    </div>
  );
};

export default ProductsPage;