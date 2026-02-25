# 유원상 포트폴리오 — 웹 해킹 전문가

웹 해킹 전문가 유원상의 1페이지 스크롤 포트폴리오 웹사이트입니다.

> **데모 페이지입니다.** 경력 및 프로젝트 내용은 실제와 다를 수 있습니다.
> https://fox5t4r.vercel.app/

---

## 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Icons:** Lucide React

---

## 섹션 구성

| 섹션 | 내용 |
|---|---|
| Hero | 타이핑 애니메이션, CTA 버튼, 소셜 링크 |
| About | 자기소개, 핵심 수치 카운트업 |
| Skills | 카테고리 탭 전환, 숙련도 바 애니메이션 |
| Experience | 세로 타임라인, 좌우 교차 레이아웃 |
| Projects | 카테고리 필터, 카드 그리드, 상세 모달 |
| Contact | 이메일 폼 + 소셜 링크 |

---

## 주요 기능

- **한/영 전환** — 버튼 클릭으로 전체 텍스트 즉시 전환, `localStorage` 유지
- **스크롤 프로그레스 바** — 상단 고정, 스크롤 진행률 표시
- **Sticky Navbar** — 현재 섹션 활성화 표시 (Intersection Observer)
- **모바일 대응** — 햄버거 메뉴 드로어, 3단계 반응형 레이아웃
- **접근성** — 시맨틱 HTML, 키보드 탐색, WCAG AA 색상 대비

---

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:3000

# 프로덕션 빌드
npm run build
npm run start
```

---

## 환경 변수

현재 이메일 폼은 시뮬레이션 모드입니다. 실제 메일 발송을 위해 아래 설정이 필요합니다.

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx        # 메타태그, 폰트
│   └── page.tsx          # 섹션 조합, 스크롤 프로그레스
├── components/
│   ├── layout/           # Navbar
│   └── sections/         # Hero, About, Skills, Experience, Projects, Contact
├── data/
│   ├── skills.ts         # 기술 스택 데이터
│   ├── projects.ts       # 프로젝트 데이터
│   └── experience.ts     # 경력 데이터
├── hooks/
│   ├── useLanguage.ts    # 한/영 전환
│   ├── useActiveSection.ts
│   ├── useScrollProgress.ts
│   └── useCountUp.ts
├── lib/
│   └── motion.ts         # Framer Motion 공통 variants
└── locales/
    ├── ko.json           # 한국어 번역
    └── en.json           # 영어 번역
```

---

## 링크

- GitHub: [github.com/fox5t4r](https://github.com/fox5t4r)
- LinkedIn: [linkedin.com/in/wonsang-yoo-a781133b0](https://www.linkedin.com/in/wonsang-yoo-a781133b0/)
