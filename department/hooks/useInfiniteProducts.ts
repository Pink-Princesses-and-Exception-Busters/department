import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axios';
import { Product } from '@/store/slices/productsSlice';

interface PaginatedResponse {
  products: Product[];
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
}

export const useInfiniteProducts = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['products', 'page', page],
    queryFn: async (): Promise<PaginatedResponse> => {
      console.log(`Fetching page ${page}...`);
      const response = await axiosInstance.get(`/api/products?page=${page}&limit=6`);
      return response.data;
    },
    enabled: true,
    staleTime: 1000, // 1초만 캐시 유지 (테스트용)
  });

  useEffect(() => {
    if (data) {
      console.log(`Received data for page ${page}:`, data);
      
      if (page === 1) {
        setAllProducts(data.products);
      } else {
        setAllProducts(prev => [...prev, ...data.products]);
      }
      
      setHasMore(data.hasMore);
      setIsLoadingMore(false);
    }
  }, [data, page]);

  const fetchNextPage = useCallback(() => {
    console.log('fetchNextPage called', { hasMore, isFetching, isLoadingMore });
    
    if (hasMore && !isFetching && !isLoadingMore) {
      console.log('Loading next page...');
      setIsLoadingMore(true);
      setPage(prev => prev + 1);
    }
  }, [hasMore, isFetching, isLoadingMore]);

  return {
    data: { pages: [{ products: allProducts }] },
    fetchNextPage,
    hasNextPage: hasMore,
    isFetchingNextPage: isLoadingMore || (isFetching && page > 1),
    isLoading: isLoading && page === 1,
    error,
  };
};