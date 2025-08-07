const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// 미들웨어
app.use(cors());
app.use(express.json());

// 목업 상품 데이터
const mockProducts = [
  {
    id: '1',
    name: '무선 이어폰',
    price: 89000,
    image: 'https://via.placeholder.com/300x300?text=무선+이어폰',
    description: '고품질 무선 이어폰으로 뛰어난 음질을 제공합니다.',
    category: '전자제품',
  },
  {
    id: '2',
    name: '스마트워치',
    price: 299000,
    image: 'https://via.placeholder.com/300x300?text=스마트워치',
    description: '건강 관리와 편의성을 동시에 제공하는 스마트워치입니다.',
    category: '전자제품',
  },
  {
    id: '3',
    name: '백팩',
    price: 59000,
    image: 'https://via.placeholder.com/300x300?text=백팩',
    description: '일상과 여행에 완벽한 다용도 백팩입니다.',
    category: '패션',
  },
  {
    id: '4',
    name: '운동화',
    price: 129000,
    image: 'https://via.placeholder.com/300x300?text=운동화',
    description: '편안하고 스타일리시한 운동화입니다.',
    category: '신발',
  },
  {
    id: '5',
    name: '노트북 스탠드',
    price: 45000,
    image: 'https://via.placeholder.com/300x300?text=노트북+스탠드',
    description: '인체공학적 설계로 편안한 작업 환경을 제공합니다.',
    category: '사무용품',
  },
  {
    id: '6',
    name: '블루투스 스피커',
    price: 79000,
    image: 'https://via.placeholder.com/300x300?text=블루투스+스피커',
    description: '휴대용 블루투스 스피커로 어디서나 음악을 즐기세요.',
    category: '전자제품',
  },
  {
    id: '7',
    name: '텀블러',
    price: 25000,
    image: 'https://via.placeholder.com/300x300?text=텀블러',
    description: '보온보냉 기능이 뛰어난 스테인리스 텀블러입니다.',
    category: '생활용품',
  },
  {
    id: '8',
    name: '키보드',
    price: 159000,
    image: 'https://via.placeholder.com/300x300?text=키보드',
    description: '기계식 키보드로 타이핑의 즐거움을 느껴보세요.',
    category: '전자제품',
  },
];

// API 라우트
app.get('/api/products', (req, res) => {
  res.json(mockProducts);
});

app.get('/api/products/:id', (req, res) => {
  const product = mockProducts.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Express 서버가 포트 ${port}에서 실행 중입니다.`);
});