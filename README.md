# DPT - Modern Shopping Mall

React + Vite + TypeScript + Supabase를 사용한 현대적인 쇼핑몰 웹사이트입니다.

## 🛠 기술 스택

### 프론트엔드
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + react-icons
- **Data Fetching**: TanStack Query (React Query)
- **State Management**: Redux Toolkit
- **Build Tool**: Vite (빠른 번들링)

### 백엔드/데이터베이스
- **Backend as a Service**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (Supabase)
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### 배포 & DevOps
- **Hosting**: Render (Static Site)
- **CI/CD**: Render GitHub 연동 (자동 빌드·배포)
- **Version Control**: Git + GitHub Flow

## 🚀 주요 기능

- 상품 목록 조회 및 검색
- 장바구니 기능
- 사용자 인증 (회원가입/로그인)
- 주문 관리
- 실시간 알림
- 반응형 디자인
- 타입 안정성 (TypeScript)

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 Supabase 설정을 추가하세요:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 브라우저에서 확인
- Frontend: http://localhost:5173

## 📁 프로젝트 구조

```
dpt/
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── ui/            # 기본 UI 컴포넌트
│   │   ├── layout/        # 레이아웃 컴포넌트
│   │   └── features/      # 기능별 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── pages/             # 페이지 컴포넌트
│   ├── store/             # Redux 스토어 및 슬라이스
│   ├── services/          # API 서비스 (Supabase)
│   ├── types/             # TypeScript 타입 정의
│   ├── utils/             # 유틸리티 함수
│   ├── styles/            # 글로벌 스타일
│   ├── App.tsx            # 메인 앱 컴포넌트
│   └── main.tsx           # 애플리케이션 진입점
├── public/                # 정적 파일
├── dist/                  # 빌드 결과물
├── vite.config.ts         # Vite 설정
├── tailwind.config.js     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
└── package.json           # 프로젝트 설정
```

## 🔧 개발 가이드

### 새로운 컴포넌트 추가
```bash
# UI 컴포넌트
src/components/ui/Button.tsx

# 기능별 컴포넌트
src/components/features/ProductCard.tsx
```

### 상태 관리
Redux Toolkit을 사용하여 전역 상태를 관리합니다:
```typescript
// store/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})
```

### 데이터 페칭
TanStack Query를 사용하여 서버 상태를 관리합니다:
```typescript
// hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../services/supabase'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await supabase.from('products').select('*')
      return data
    }
  })
}
```

### Supabase 연동
```typescript
// services/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

## 🚀 배포

### Render 배포
1. GitHub 저장소를 Render에 연결
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. 환경 변수 설정 (Supabase URL, Key)

### 자동 배포
- `main` 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다
- Pull Request 시 Preview 배포가 생성됩니다

## 📋 사용 가능한 스크립트

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
npm run lint         # ESLint 실행
npm run type-check   # TypeScript 타입 체크
```

## 🌟 주요 특징

- ⚡ **빠른 개발**: Vite의 HMR로 즉시 반영
- 🔒 **타입 안정성**: TypeScript로 런타임 에러 방지
- 🎨 **모던 UI**: Tailwind CSS로 빠른 스타일링
- 🔄 **실시간**: Supabase Realtime으로 실시간 업데이트
- 📱 **반응형**: 모바일 퍼스트 디자인
- 🚀 **자동 배포**: GitHub 푸시 시 자동 배포

## 📝 라이선스

MIT License