import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axios';
import { Product } from '@/store/slices/productsSlice';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/api/products');
  return response.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5분
  });
};