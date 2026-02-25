# 프론트엔드 개발자 포트폴리오 홈페이지 — 기능 명세서

## 1. 프로젝트 개요

- **형식:** 싱글 페이지 애플리케이션 (SPA), 수직 스크롤
- **대상:** B2B (기업 채용 담당자, 프로젝트 발주처)
- **스택:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion
- **다국어:** 한국어 / 영어 전환 (i18n)

---

## 2. 섹션 구성 (스크롤 순서)

```
[1] Hero
[2] About
[3] Skills
[4] Experience
[5] Projects
[6] Contact
```

---

## 3. 공통 기능

### 3-1. 네비게이션 바 (Sticky Header)
- 스크롤 시 상단 고정, 배경 반투명 blur 처리
- 섹션 링크 클릭 시 해당 섹션으로 부드러운 스크롤 이동 (`scroll-behavior: smooth`)
- 현재 뷰포트에 보이는 섹션 링크 활성화 표시 (Intersection Observer)
- 한/영 전환 토글 버튼 (우측 상단)
- 모바일: 햄버거 메뉴 → 풀스크린 드로어

### 3-2. 한/영 언어 전환
- 전환 버튼 클릭 시 전체 텍스트 즉시 전환 (페이지 리로드 없음)
- 선택 언어 `localStorage` 저장 (재방문 시 유지)
- 번역 데이터: `src/locales/ko.json`, `src/locales/en.json`

### 3-3. 스크롤 진행 표시
- 페이지 최상단에 얇은 프로그레스 바 (스크롤 % 반영)

### 3-4. 반응형
- 모바일 (`< 768px`) / 태블릿 (`768–1023px`) / 데스크톱 (`≥ 1024px`) 3단계 대응

---

## 4. 섹션별 기능 명세

### [1] Hero 섹션
| 항목 | 내용 |
|---|---|
| 타이핑 애니메이션 | 직함/슬로건 텍스트 타이핑 효과 (Typewriter) |
| CTA 버튼 | "프로젝트 보기" → Projects 섹션 스크롤, "이력서 다운로드" → PDF 다운로드 |
| 배경 | 다크 계열 그라디언트 + 파티클 또는 코드 라인 모션 |
| 소셜 링크 | GitHub, LinkedIn 아이콘 링크 |

### [2] About 섹션
| 항목 | 내용 |
|---|---|
| 프로필 이미지 | 원형 크롭, 호버 시 테두리 애니메이션 |
| 자기소개 | 2–3문단 텍스트 (한/영 전환) |
| 핵심 수치 | 경력 N년, 완료 프로젝트 수, 기술 스택 수 — 스크롤 진입 시 카운트업 애니메이션 |

### [3] Skills 섹션
| 항목 | 내용 |
|---|---|
| 카테고리 탭 | Frontend / Backend / Tools & DevOps |
| 스킬 카드 | 아이콘 + 기술명 + 숙련도 바 (진입 시 애니메이션) |
| 데이터 구조 | `src/data/skills.ts` 에서 관리 |

### [4] Experience 섹션
| 항목 | 내용 |
|---|---|
| 타임라인 UI | 세로 타임라인, 좌우 교차 배치 (데스크톱) / 단일 컬럼 (모바일) |
| 항목 내용 | 회사명, 직책, 재직 기간, 주요 업무 (불릿 리스트) |
| 진입 애니메이션 | 스크롤 진입 시 fade-in + slide-up |

### [5] Projects 섹션
| 항목 | 내용 |
|---|---|
| 필터 탭 | 전체 / 카테고리별 (Web, Mobile, Open Source 등) |
| 프로젝트 카드 | 썸네일, 프로젝트명, 기술 스택 태그, 한 줄 설명 |
| 카드 호버 | 오버레이로 GitHub / 라이브 데모 링크 노출 |
| 상세 모달 | 클릭 시 모달 팝업 — 상세 설명, 스크린샷 슬라이더, 역할, 성과 |
| 데이터 구조 | `src/data/projects.ts` 에서 관리 |

### [6] Contact 섹션
| 항목 | 내용 |
|---|---|
| 이메일 폼 | 이름, 이메일, 제목, 메시지 입력 → 실제 메일 발송 (EmailJS 또는 Resend API) |
| 유효성 검사 | 필수 항목 미입력 / 이메일 형식 오류 시 인라인 에러 메시지 |
| 발송 상태 | 로딩 스피너 → 성공/실패 토스트 알림 |
| 외부 링크 | GitHub, LinkedIn, 카카오톡 오픈채팅 아이콘 버튼 |

---

## 5. 비기능 요구사항

| 항목 | 기준 |
|---|---|
| 성능 | LCP < 2.5s, Lighthouse 점수 90+ |
| 접근성 | WCAG AA, 키보드 탐색, 스크린리더 대응 |
| SEO | `<title>`, `<meta description>`, OG 태그, `robots.txt`, `sitemap.xml` |
| 보안 | 이메일 API 키 환경변수 처리, 폼 스팸 방지 (honeypot 또는 reCAPTCHA) |
| 배포 | Vercel (자동 CI/CD, GitHub 연동) |

---

## 6. 파일 구조 (핵심)

```
src/
├── app/
│   ├── layout.tsx          # 메타태그, 폰트
│   └── page.tsx            # 섹션 조합
├── components/
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Hero, About, Skills, Experience, Projects, Contact
├── data/
│   ├── projects.ts
│   └── skills.ts
├── locales/
│   ├── ko.json
│   └── en.json
└── hooks/
    ├── useActiveSection.ts  # Intersection Observer
    └── useLanguage.ts       # 한/영 전환
```

---

## 7. 개발 우선순위 (Phase)

- **Phase 1 (핵심):** 섹션 레이아웃 + 정적 콘텐츠 + 반응형
- **Phase 2 (인터랙션):** 애니메이션, 타이핑 효과, 카운트업, 필터
- **Phase 3 (기능):** 한/영 전환, 이메일 폼 연동, 모달
- **Phase 4 (마무리):** SEO, Lighthouse 최적화, Vercel 배포
