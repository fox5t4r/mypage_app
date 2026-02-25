export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  period: string;
  current: boolean;
  tasks: string[];
  tasksEn: string[];
  stack: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "시큐어넷 코리아",
    companyEn: "SecureNet Korea",
    role: "수석 보안 연구원 / 레드팀 리드",
    roleEn: "Principal Security Researcher / Red Team Lead",
    period: "2021.03 — 현재",
    current: true,
    tasks: [
      "금융·핀테크 기업 대상 레드팀 운영 및 APT 시뮬레이션 총괄",
      "제로데이 취약점 연구 및 CVE 7건 등재 (2021–2024)",
      "웹 애플리케이션 모의해킹 연간 40+ 프로젝트 수행",
      "내부 취약점 연구팀(5명) 리딩 및 기술 방향 수립",
      "OWASP Top 10 기반 시큐어 코딩 가이드라인 수립 및 교육",
    ],
    tasksEn: [
      "Led red team operations and APT simulations for financial and fintech enterprises",
      "Zero-day vulnerability research with 7 CVE credits (2021–2024)",
      "Conducted 40+ web application penetration testing projects annually",
      "Led internal vulnerability research team of 5 and set technical direction",
      "Established and delivered OWASP Top 10-based secure coding guidelines",
    ],
    stack: ["Web Hacking", "Red Team", "CVE Research", "Burp Suite", "Python"],
  },
  {
    company: "크립토가드 시큐리티",
    companyEn: "CryptoGuard Security",
    role: "시니어 취약점 분석가",
    roleEn: "Senior Vulnerability Analyst",
    period: "2018.06 — 2021.02",
    current: false,
    tasks: [
      "공공기관·대기업 웹 서비스 취약점 진단 및 보고서 작성",
      "SSRF, XXE, Deserialization 취약점 연구 및 익스플로잇 개발",
      "Bug Bounty 프로그램 참여 — Hall of Fame 3회 수상 (Google, Meta, Kakao)",
      "내부 보안 교육 프로그램 개발 및 강의",
    ],
    tasksEn: [
      "Web service vulnerability assessment and reporting for public agencies and enterprises",
      "Research and exploit development for SSRF, XXE, and Deserialization vulnerabilities",
      "Bug Bounty participation — Hall of Fame ×3 (Google, Meta, Kakao)",
      "Developed and delivered internal security training programs",
    ],
    stack: ["SSRF", "XXE", "Deserialization", "Python", "Burp Suite", "Go"],
  },
  {
    company: "펜테스트랩",
    companyEn: "PentestLab",
    role: "보안 엔지니어",
    roleEn: "Security Engineer",
    period: "2016.01 — 2018.05",
    current: false,
    tasks: [
      "웹·모바일 애플리케이션 모의해킹 수행 (연 30+ 프로젝트)",
      "XSS, SQL Injection, CSRF, IDOR 취약점 분석 및 PoC 개발",
      "자동화 취약점 스캐너 Python 기반 개발",
      "CVE-2017-XXXX 등 초기 CVE 등재 경험 축적",
    ],
    tasksEn: [
      "Web and mobile application penetration testing (30+ projects/year)",
      "Vulnerability analysis and PoC development for XSS, SQLi, CSRF, IDOR",
      "Developed Python-based automated vulnerability scanner",
      "Accumulated early CVE filing experience including CVE-2017-XXXX",
    ],
    stack: ["XSS", "SQLi", "CSRF", "IDOR", "Python", "Metasploit"],
  },
  {
    company: "해킹 컨퍼런스 & 커뮤니티",
    companyEn: "Security Conferences & Community",
    role: "발표자 / CTF 출제위원",
    roleEn: "Speaker / CTF Challenge Author",
    period: "2017 — 현재",
    current: true,
    tasks: [
      "CODEGATE, SECCON, HackCon 등 국내외 컨퍼런스 발표 8회",
      "DEF CON CTF 예선 참가 및 웹 카테고리 입상",
      "국내 주요 CTF 웹 문제 출제위원 다수 역임",
      "오픈소스 보안 도구 개발 및 GitHub 공개 (Star 1.2k+)",
    ],
    tasksEn: [
      "8 conference talks at CODEGATE, SECCON, HackCon, and more",
      "DEF CON CTF qualifier participation and web category placement",
      "Served as web challenge author for multiple major Korean CTFs",
      "Developed and open-sourced security tools on GitHub (1.2k+ stars)",
    ],
    stack: ["CTF", "Public Speaking", "Open Source", "Web Hacking"],
  },
];
