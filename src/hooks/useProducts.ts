import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';
import { Product } from '../store/slices/productsSlice';

// Mock data for when server is not running
const mockProducts: Product[] = [
  {
    id: '1',
    name: '프리미엄 캐시미어 코트',
    price: 890000,
    originalPrice: 1200000,
    category: 'fashion',
    brand: 'LUXURY BRAND',
    image: 'https://via.placeholder.com/400x400?text=Cashmere+Coat',
    description: '최고급 캐시미어 소재로 제작된 프리미엄 코트입니다.',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    discount: 26
  },
  {
    id: '2',
    name: '다이아몬드 목걸이',
    price: 2500000,
    category: 'jewelry',
    brand: 'DIAMOND HOUSE',
    image: 'https://via.placeholder.com/400x400?text=Diamond+Necklace',
    description: '1캐럿 다이아몬드가 세팅된 고급 목걸이입니다.',
    rating: 4.9,
    reviewCount: 89,
    inStock: true
  },
  {
    id: '3',
    name: '프리미엄 스킨케어 세트',
    price: 450000,
    originalPrice: 520000,
    category: 'beauty',
    brand: 'BEAUTY PREMIUM',
    image: 'https://via.placeholder.com/400x400?text=Skincare+Set',
    description: '안티에이징 효과가 뛰어난 프리미엄 스킨케어 세트입니다.',
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    discount: 13
  },
  {
    id: '4',
    name: '이탈리아 가죽 핸드백',
    price: 1200000,
    category: 'fashion',
    brand: 'ITALIAN LEATHER',
    image: 'https://via.placeholder.com/400x400?text=Leather+Handbag',
    description: '이탈리아 최고급 가죽으로 제작된 핸드백입니다.',
    rating: 4.6,
    reviewCount: 78,
    inStock: true
  },
  {
    id: '5',
    name: '스위스 명품 시계',
    price: 3500000,
    category: 'accessories',
    brand: 'SWISS WATCH',
    image: 'https://via.placeholder.com/400x400?text=Swiss+Watch',
    description: '스위스 전통 기법으로 제작된 명품 시계입니다.',
    rating: 4.9,
    reviewCount: 45,
    inStock: true
  },
  {
    id: '6',
    name: '프리미엄 향수',
    price: 280000,
    originalPrice: 350000,
    category: 'beauty',
    brand: 'FRAGRANCE HOUSE',
    image: 'https://via.placeholder.com/400x400?text=Premium+Perfume',
    description: '프랑스 조향사가 만든 프리미엄 향수입니다.',
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
    discount: 20
  },
  {
    id: '7',
    name: '실크 스카프',
    price: 320000,
    category: 'fashion',
    brand: 'SILK LUXURY',
    image: 'https://via.placeholder.com/400x400?text=Silk+Scarf',
    description: '100% 실크 소재의 고급 스카프입니다.',
    rating: 4.4,
    reviewCount: 67,
    inStock: true
  },
  {
    id: '8',
    name: '프리미엄 선글라스',
    price: 650000,
    category: 'accessories',
    brand: 'EYEWEAR PREMIUM',
    image: 'https://via.placeholder.com/400x400?text=Premium+Sunglasses',
    description: '이탈리아 디자인의 프리미엄 선글라스입니다.',
    rating: 4.7,
    reviewCount: 134,
    inStock: false
  }
];

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.warn('API server not available, using mock data');
    return mockProducts;
  }
};

const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.warn('API server not available, using mock data');
    return mockProducts.filter(p => p.category === category);
  }
};

const fetchProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.warn('API server not available, using mock data');
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
};