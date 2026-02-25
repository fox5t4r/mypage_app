export type ProjectCategory = "web" | "mobile" | "opensource";

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  role: string;
  roleEn: string;
  stack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    id: "cve-chain",
    title: "CVE 체이닝 익스플로잇 연구",
    titleEn: "CVE Chaining Exploit Research",
    summary: "다중 CVE 체이닝으로 RCE 달성 — 실제 금융 시스템 대상",
    summaryEn: "Achieved RCE via multi-CVE chaining on a real-world financial system",
    description:
      "금융 시스템의 웹 애플리케이션에서 SSRF + XXE + Deserialization 취약점을 체이닝하여 원격 코드 실행(RCE)을 달성한 연구입니다. CVE 2건이 등재되었으며, 벤더사와의 책임 공개(Responsible Disclosure) 프로세스를 거쳐 패치가 완료되었습니다.",
    descriptionEn:
      "Research achieving Remote Code Execution on a financial web application by chaining SSRF + XXE + Deserialization vulnerabilities. Resulted in 2 CVE credits, with patches completed through responsible disclosure with the vendor.",
    role: "수석 연구원 — 취약점 발견, 익스플로잇 개발, CVE 등재, 패치 검증",
    roleEn: "Principal Researcher — Discovery, exploit development, CVE filing, patch verification",
    stack: ["SSRF", "XXE", "Deserialization", "Python", "Burp Suite", "Java"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r",
    color: "#6c63ff",
  },
  {
    id: "csp-bypass",
    title: "CSP Bypass 연구 및 오픈소스",
    titleEn: "CSP Bypass Research & Open Source",
    summary: "CSP 우회 기법 체계화 및 자동화 도구 공개 (GitHub Star 800+)",
    summaryEn: "Systematized CSP bypass techniques and released automation tool (800+ GitHub Stars)",
    description:
      "다양한 CSP 설정에서의 우회 기법을 체계적으로 연구하고 자동화 스캐너를 개발해 오픈소스로 공개했습니다. JSONP 엔드포인트 악용, nonce 예측, script gadget 활용, DOM Clobbering 등 20+ 우회 시나리오를 정리했으며, 보안 커뮤니티에서 널리 참조되고 있습니다.",
    descriptionEn:
      "Systematically researched CSP bypass techniques and developed an open-source automation scanner. Documented 20+ bypass scenarios including JSONP abuse, nonce prediction, script gadgets, and DOM Clobbering. Widely referenced in the security community.",
    role: "단독 연구 — 취약점 연구, 도구 개발, 오픈소스 메인테이너",
    roleEn: "Solo Research — Vulnerability research, tool development, open-source maintainer",
    stack: ["JavaScript", "CSP Bypass", "XSS", "Python", "Burp Suite"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r/CSPbypass",
    color: "#22d3ee",
  },
  {
    id: "ai-prompt-injection",
    title: "LLM Prompt Injection 연구",
    titleEn: "LLM Prompt Injection Research",
    summary: "실서비스 AI 챗봇 대상 Prompt Injection 취약점 발견 및 보고",
    summaryEn: "Discovered and reported Prompt Injection vulnerabilities in production AI chatbots",
    description:
      "국내 주요 서비스에 탑재된 LLM 기반 챗봇을 대상으로 Prompt Injection, Jailbreak, 시스템 프롬프트 탈취 취약점을 연구했습니다. 3개 서비스에서 민감 정보 노출 취약점을 발견하고 책임 공개를 통해 패치를 유도했습니다.",
    descriptionEn:
      "Researched Prompt Injection, Jailbreak, and system prompt extraction vulnerabilities in LLM-based chatbots deployed in major Korean services. Discovered sensitive information exposure in 3 services and facilitated patches through responsible disclosure.",
    role: "단독 연구 — 취약점 발견, PoC 개발, 책임 공개",
    roleEn: "Solo Research — Discovery, PoC development, responsible disclosure",
    stack: ["Python", "LLM", "Prompt Injection", "AI Security", "Burp Suite"],
    category: "mobile",
    githubUrl: "https://github.com/fox5t4r",
    color: "#fb923c",
  },
  {
    id: "redteam-framework",
    title: "레드팀 자동화 프레임워크",
    titleEn: "Red Team Automation Framework",
    summary: "웹 취약점 스캐닝 + 익스플로잇 자동화 내부 도구",
    summaryEn: "Internal tool for automated web vulnerability scanning and exploitation",
    description:
      "모의해킹 업무 효율화를 위해 개발한 Python 기반 레드팀 자동화 프레임워크입니다. Burp Suite API 연동, 커스텀 페이로드 생성, 취약점 자동 검증, 보고서 자동 생성 기능을 포함합니다. 팀 내 모의해킹 소요 시간을 평균 40% 단축했습니다.",
    descriptionEn:
      "A Python-based red team automation framework developed to streamline penetration testing workflows. Features Burp Suite API integration, custom payload generation, automated vulnerability verification, and report generation. Reduced average pentest time by 40%.",
    role: "설계 및 개발 — 아키텍처 설계, 핵심 모듈 구현, 팀 내 배포",
    roleEn: "Design & Development — Architecture, core module implementation, team deployment",
    stack: ["Python", "Burp Suite API", "SQLi", "XSS", "SSRF", "Jinja2"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r",
    color: "#34d399",
  },
  {
    id: "defcon-ctf",
    title: "DEF CON CTF 참가 및 웹 출제",
    titleEn: "DEF CON CTF & Web Challenge Authoring",
    summary: "DEF CON 예선 웹 카테고리 입상 + 국내 CTF 출제위원",
    summaryEn: "DEF CON qualifier web category placement + Korean CTF challenge author",
    description:
      "DEF CON CTF 예선에서 웹 카테고리 상위 입상 경험을 보유하고 있습니다. 국내 주요 CTF(CODEGATE, SECCON Korea 등)에서 웹 문제 출제위원으로 활동했으며, 실전 취약점 기반의 고난도 문제를 다수 출제했습니다.",
    descriptionEn:
      "Top placement in the DEF CON CTF qualifier web category. Served as web challenge author for major Korean CTFs (CODEGATE, SECCON Korea, etc.), creating high-difficulty challenges based on real-world vulnerabilities.",
    role: "참가자 및 출제위원 — 웹 익스플로잇, 문제 설계",
    roleEn: "Competitor & Challenge Author — Web exploitation, challenge design",
    stack: ["CTF", "Web Hacking", "XSS", "SQLi", "SSRF", "Python"],
    category: "opensource",
    color: "#f59e0b",
  },
  {
    id: "bug-bounty",
    title: "버그바운티 Hall of Fame",
    titleEn: "Bug Bounty Hall of Fame",
    summary: "Google, Meta, Kakao 등 Hall of Fame 3회 수상",
    summaryEn: "Hall of Fame recognition ×3 — Google, Meta, Kakao",
    description:
      "Google, Meta, Kakao 등 글로벌·국내 주요 기업의 버그바운티 프로그램에 참여하여 Hall of Fame에 3회 등재되었습니다. XSS, IDOR, OAuth 취약점 등을 발견하여 보고했으며, 총 $45,000+ 리워드를 수령했습니다.",
    descriptionEn:
      "Participated in bug bounty programs at Google, Meta, Kakao, and others, earning Hall of Fame recognition 3 times. Reported XSS, IDOR, and OAuth vulnerabilities, receiving $45,000+ in total rewards.",
    role: "단독 연구 — 취약점 발견, 보고, 책임 공개",
    roleEn: "Solo Research — Discovery, reporting, responsible disclosure",
    stack: ["XSS", "IDOR", "OAuth", "Burp Suite", "JavaScript"],
    category: "opensource",
    color: "#e879f9",
  },
];
