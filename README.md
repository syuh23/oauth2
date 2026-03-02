# 취준생 올인원 집중 플랫폼

NestJS(백엔드) + React(프론트엔드) 기반의 **취업 준비 + 집중 학습** 통합 플랫폼입니다.  
혼자서 풀스택 개발을 진행하는 상황을 기준으로, MVP부터 확장 기능까지 단계적으로 구현할 수 있도록 설계한 프로젝트입니다.

---

## 1) 프로젝트 목표

- 취업 준비 과정에서 필요한 정보를 한곳에서 관리
- 공부 집중/기록/랭킹 기능으로 꾸준한 학습 루틴 형성
- 커뮤니티 기반 정보 공유로 실질적인 취업 인사이트 확보
- OAuth2 + JWT + 권한 분리 + 결제 플랜을 통한 서비스 확장성 확보

---

## 2) 기술 스택

### Frontend
- React (Vite)
- TypeScript
- 배포: Vercel (무료 플랜)

### Backend
- Node.js + NestJS
- TypeScript
- Auth: OAuth2, JWT (Access/Refresh)
- 실시간: WebSocket (예정)

### Database / Infra
- PostgreSQL (로컬 Docker → Supabase Postgres)
- 백엔드 배포: Render Free Web Service

---

## 3) 핵심 기능

### 3.1 인증 / 인가
- Social Login (OAuth2)
  - Google (1차 우선)
  - GitHub, Kakao, Apple (확장)
- JWT 인증
  - Access Token 발급
  - Refresh Token 발급
- 권한(Role/Plan)
  - Basic / Premium 기능 분리
- GitHub 연동 시 잔디(기여 기록) 표시 (확장)

### 3.2 취업 정보 기능
- 개인 취업 정보 저장 공간
  - 지원 회사
  - 전형 단계
  - 합격/불합격 여부
- CRUD 중심 관리
- 리스트 형태로 빠르게 조회/정리

### 3.3 커뮤니티
- 게시판 CRUD
  - 전형 후기
  - 이력서/포트폴리오 꿀팁
  - 공고 공유 (링크 필수)
- 향후 외부 채용 플랫폼 연동(사람인/잡코리아 등) 검토

### 3.4 온라인 스터디 카페
- 집중 타이머
- 공부 시간 저장
- 실시간 랭킹
- 스터디룸 생성/신청/수락/퇴장/권한 관리
- 목표 태그 기반 스터디룸 추천

### 3.5 결제 / 플랜
- 월 구독 결제(PG)
- 프리미엄 기능
  - 프리미엄 스터디룸
  - 심화 통계 리포트
  - 광고 제거(추후)

### 3.6 통계
- 총 공부 시간 집계
- 연속 학습 일수
- 주/월 단위 통계
- 목표 달성률 리포트(확장)

---

## 4) 개발 로드맵

### 설계 단계
- [ ] RDBMS 테이블 설계
- [ ] API 설계

### 1단계: 기본 서비스 틀
- [ ] OAuth Login (Google)
- [ ] JWT (Access/Refresh)
- [ ] 취업 정보 CRUD (회사 리스트 중심)
- [ ] 타이머 + 공부 시간 저장

### 2단계: 커뮤니티 + 스터디 핵심
- [ ] 커뮤니티 CRUD
- [ ] 스터디룸 CRUD (생성/신청/수락/퇴장/권한)
- [ ] 통계(연속 일수, 주/월 집계)

### 3단계: 실시간 + 결제
- [ ] WebSocket 실시간 반영
  - 방 접속자
  - 실시간 공부 시간
  - 방 단위 랭킹
- [ ] PG 결제 + 플랜 적용
  - Premium 스터디룸 제한 해제
  - 심화 통계 리포트

### 마무리 단계
- [ ] GitHub OAuth + 잔디 표시
- [ ] 목표(Todo) 기능
- [ ] 목표 달성률 통계 리포트

---

## 5) 모노레포 구조

```bash
.
├── backend/   # NestJS API 서버
├── frontend/  # React(Vite) 클라이언트
└── README.md
```

---

## 6) 로컬 개발

### 사전 준비
- Node.js LTS
- npm
- Docker / Docker Compose
- VSCode

### 실행 예시

```bash
# 루트 의존성 설치
npm install

# 백엔드
cd backend
npm install
npm run start:dev

# 프론트엔드 (새 터미널)
cd frontend
npm install
npm run dev
```

> DB(PostgreSQL)는 로컬 Docker로 시작 후, 운영 환경에서 Supabase Postgres로 이전/연동하는 흐름을 권장합니다.

---

## 7) 배포 계획

- **DB**: Supabase PostgreSQL
- **Frontend**: Vercel
- **Backend**: Render Free Web Service

---

## 8) 프로젝트 방향성

이 프로젝트는 단순한 CRUD 앱이 아니라,  
**취업 준비(정보 관리) + 학습 습관(집중/통계) + 커뮤니티(공유/동기부여)**를 하나의 흐름으로 연결하는 것을 목표로 합니다.

초기에는 빠른 MVP 구축에 집중하고, 이후 실시간 기능/결제/심화 통계를 통해 서비스 완성도를 높입니다.
