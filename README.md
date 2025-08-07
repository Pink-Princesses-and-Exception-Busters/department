# MyShop - Next.js 쇼핑몰

Next.js, TypeScript, Tailwind CSS, TanStack Query, Redux를 사용한 현대적인 쇼핑몰 웹사이트입니다.

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **상태 관리**: Redux Toolkit
- **데이터 페칭**: TanStack Query (React Query)
- **HTTP 클라이언트**: Axios
- **아이콘**: React Icons
- **백엔드**: Node.js, Express (개발용)

## 주요 기능

- 상품 목록 조회
- 장바구니 기능
- 반응형 디자인
- 상태 관리 (Redux)
- 데이터 캐싱 (React Query)

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
# Next.js 개발 서버
npm run dev

# Express API 서버 (별도 터미널)
npm run server
```

### 3. 브라우저에서 확인
- Frontend: http://localhost:3000
- API Server: http://localhost:5000

## 프로젝트 구조

```
/
├── components/          # 재사용 가능한 컴포넌트
├── hooks/              # 커스텀 훅
├── pages/              # Next.js 페이지
├── store/              # Redux 스토어 및 슬라이스
├── styles/             # 스타일 파일
├── utils/              # 유틸리티 함수
└── server.js           # Express API 서버
```

## 개발 가이드

### 새로운 상품 추가
`pages/api/products.ts` 또는 `server.js`의 `mockProducts` 배열에 새로운 상품 객체를 추가하세요.

### 새로운 페이지 추가
`pages/` 디렉토리에 새로운 `.tsx` 파일을 생성하면 자동으로 라우팅됩니다.

### 상태 관리
Redux Toolkit을 사용하여 전역 상태를 관리합니다. 새로운 상태가 필요한 경우 `store/slices/`에 새로운 슬라이스를 생성하세요.

## 배포

### Vercel 배포
```bash
npm run build
```

프로젝트를 Vercel에 연결하여 자동 배포를 설정할 수 있습니다.

## 라이선스

MIT License