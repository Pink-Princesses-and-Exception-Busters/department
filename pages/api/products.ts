import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/store/slices/productsSlice';

const mockProducts: Product[] = [
  {
    id: '1',
    name: '무선 이어폰',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
    description: '고품질 무선 이어폰으로 뛰어난 음질을 제공합니다.',
    category: '전자제품',
  },
  {
    id: '2',
    name: '스마트워치',
    price: 299000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: '건강 관리와 편의성을 동시에 제공하는 스마트워치입니다.',
    category: '전자제품',
  },
  {
    id: '3',
    name: '백팩',
    price: 59000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    description: '일상과 여행에 완벽한 다용도 백팩입니다.',
    category: '패션',
  },
  {
    id: '4',
    name: '운동화',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    description: '편안하고 스타일리시한 운동화입니다.',
    category: '신발',
  },
  {
    id: '5',
    name: '노트북 스탠드',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: '인체공학적 설계로 편안한 작업 환경을 제공합니다.',
    category: '사무용품',
  },
  {
    id: '6',
    name: '블루투스 스피커',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    description: '휴대용 블루투스 스피커로 어디서나 음악을 즐기세요.',
    category: '전자제품',
  },
  {
    id: '7',
    name: '텀블러',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
    description: '보온보냉 기능이 뛰어난 스테인리스 텀블러입니다.',
    category: '생활용품',
  },
  {
    id: '8',
    name: '키보드',
    price: 159000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
    description: '기계식 키보드로 타이핑의 즐거움을 느껴보세요.',
    category: '전자제품',
  },
  {
    id: '9',
    name: '마우스',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
    description: '정밀한 게이밍 마우스입니다.',
    category: '전자제품',
  },
  {
    id: '10',
    name: '모니터',
    price: 399000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop',
    description: '27인치 4K 모니터로 선명한 화질을 제공합니다.',
    category: '전자제품',
  },
  {
    id: '11',
    name: '책상',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
    description: '심플하고 실용적인 사무용 책상입니다.',
    category: '가구',
  },
  {
    id: '12',
    name: '의자',
    price: 299000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
    description: '인체공학적 사무용 의자입니다.',
    category: '가구',
  },
  {
    id: '13',
    name: '스마트폰',
    price: 899000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
    description: '최신 스마트폰으로 뛰어난 성능을 자랑합니다.',
    category: '전자제품',
  },
  {
    id: '14',
    name: '태블릿',
    price: 599000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop',
    description: '휴대성과 성능을 겸비한 태블릿입니다.',
    category: '전자제품',
  },
  {
    id: '15',
    name: '카메라',
    price: 1299000,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop',
    description: '전문가용 디지털 카메라입니다.',
    category: '전자제품',
  },
  {
    id: '16',
    name: '헤드폰',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: '노이즈 캔슬링 헤드폰입니다.',
    category: '전자제품',
  },
  {
    id: '17',
    name: '노트북',
    price: 1599000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
    description: '고성능 노트북으로 업무와 게임을 동시에.',
    category: '전자제품',
  },
  {
    id: '18',
    name: '선글라스',
    price: 159000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
    description: '스타일리시한 선글라스로 자외선 차단.',
    category: '패션',
  },
  {
    id: '19',
    name: '향수',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
    description: '고급스러운 향수로 매력을 더하세요.',
    category: '뷰티',
  },
  {
    id: '20',
    name: '지갑',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop',
    description: '고급 가죽 지갑으로 실용성과 스타일을 겸비.',
    category: '패션',
  },
  {
    id: '21',
    name: '커피머신',
    price: 299000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
    description: '집에서 즐기는 카페 품질의 커피.',
    category: '가전제품',
  },
  {
    id: '22',
    name: '식물',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
    description: '공기정화 효과가 뛰어난 실내 식물.',
    category: '인테리어',
  },
  {
    id: '23',
    name: '요가매트',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    description: '홈트레이닝을 위한 고품질 요가매트.',
    category: '스포츠',
  },
  {
    id: '24',
    name: '책',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
    description: '지식과 감동을 주는 베스트셀러 도서.',
    category: '도서',
  },
];

interface PaginatedResponse {
  products: Product[];
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | PaginatedResponse>
) {
  if (req.method === 'GET') {
    const { page, limit } = req.query;
    
    // 페이지네이션이 요청된 경우
    if (page && limit) {
      const pageNum = parseInt(page as string, 10) || 1;
      const limitNum = parseInt(limit as string, 10) || 6;
      const startIndex = (pageNum - 1) * limitNum;
      const endIndex = startIndex + limitNum;
      
      const paginatedProducts = mockProducts.slice(startIndex, endIndex);
      const hasMore = endIndex < mockProducts.length;
      const totalPages = Math.ceil(mockProducts.length / limitNum);
      
      res.status(200).json({
        products: paginatedProducts,
        hasMore,
        currentPage: pageNum,
        totalPages,
      });
    } else {
      // 기존 방식: 모든 상품 반환
      res.status(200).json(mockProducts);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}