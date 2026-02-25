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
    id: "cms-vuln",
    title: "IFF CMS 취약점 분석",
    titleEn: "IFF CMS Vulnerability Analysis",
    summary: "오픈소스 CMS 플랫폼 취약점 분석 프로젝트",
    summaryEn: "Vulnerability analysis project for open-source CMS platforms",
    description:
      "IFF Security 연합 프로젝트로, 다수의 오픈소스 CMS 플랫폼을 대상으로 XSS, SQL Injection, 파일 업로드 취약점 등을 분석했습니다. 프로젝트 리더로서 팀 구성, 분석 방법론 수립, PoC 코드 작성, 최종 보고서 작성을 총괄했습니다.",
    descriptionEn:
      "An IFF Security Alliance project analyzing multiple open-source CMS platforms for XSS, SQL Injection, file upload vulnerabilities, and more. As project leader, oversaw team formation, methodology, PoC development, and final reporting.",
    role: "프로젝트 리더 — 취약점 분석, PoC 작성, 보고서 총괄",
    roleEn: "Project Leader — Vulnerability analysis, PoC development, report writing",
    stack: ["Python", "Burp Suite", "XSS", "SQLi", "PHP", "Linux"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r",
    color: "#6c63ff",
  },
  {
    id: "csp-bypass",
    title: "CSP Bypass 연구",
    titleEn: "CSP Bypass Research",
    summary: "Content Security Policy 우회 기법 연구 및 PoC",
    summaryEn: "Research and PoC on Content Security Policy bypass techniques",
    description:
      "다양한 CSP 설정에서의 우회 기법을 연구하고 JavaScript PoC를 작성했습니다. JSONP 엔드포인트 악용, nonce 예측, script gadget 활용 등 여러 우회 시나리오를 분석하고 실제 환경에서 검증했습니다.",
    descriptionEn:
      "Researched bypass techniques for various CSP configurations and wrote JavaScript PoCs. Analyzed multiple bypass scenarios including JSONP endpoint abuse, nonce prediction, and script gadget exploitation, verified in real environments.",
    role: "단독 연구 — 취약점 연구, PoC 개발",
    roleEn: "Solo Research — Vulnerability research, PoC development",
    stack: ["JavaScript", "CSP Bypass", "XSS", "Burp Suite"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r/CSPbypass",
    color: "#22d3ee",
  },
  {
    id: "ctf-2025-yearend",
    title: "SecurityFirst 연말 해킹 대회",
    titleEn: "SecurityFirst Year-End CTF",
    summary: "순천향대 정보보호학과 교내 해킹 대회 운영 및 출제",
    summaryEn: "Operated and created challenges for SCH Dept. CTF competition",
    description:
      "2025년 순천향대학교 정보보호학과 연말 해킹 대회를 운영하고 웹 분야 문제를 출제했습니다. 하 난이도 1문제, 상 난이도 1문제를 출제하여 참가자들이 실전 웹 취약점을 경험할 수 있도록 설계했습니다.",
    descriptionEn:
      "Operated the 2025 SCH Information Security year-end CTF and created web challenges. Designed 1 easy and 1 hard web challenge to give participants hands-on experience with real-world vulnerabilities.",
    role: "운영진 및 문제 출제자 — 웹 하 1, 상 1",
    roleEn: "Organizer & Challenge Author — Web Easy×1, Hard×1",
    stack: ["CTF", "Web Hacking", "XSS", "SQLi", "PHP"],
    category: "opensource",
    color: "#34d399",
  },
  {
    id: "ctf-2026-yearstart",
    title: "SecurityFirst 연초 해킹 대회",
    titleEn: "SecurityFirst Year-Start CTF",
    summary: "2026년 연초 해킹 대회 운영 및 다분야 문제 출제",
    summaryEn: "Operated 2026 year-start CTF with multi-category challenge creation",
    description:
      "2026년 연초 해킹 대회에서 웹 분야 4문제(하 2, 중 1, 상 1)와 MISC 분야 1문제를 출제했습니다. 다양한 난이도와 기법을 활용해 참가자들의 실력 향상을 도모하는 문제를 설계했습니다.",
    descriptionEn:
      "Created 4 web challenges (Easy×2, Medium×1, Hard×1) and 1 MISC challenge for the 2026 year-start CTF. Designed challenges across varying difficulties to help participants improve their skills.",
    role: "운영진 및 문제 출제자 — 웹 4문제, MISC 1문제",
    roleEn: "Organizer & Challenge Author — Web×4, MISC×1",
    stack: ["CTF", "Web Hacking", "Python", "MISC"],
    category: "opensource",
    color: "#f59e0b",
  },
  {
    id: "git-ctf",
    title: "HSPACE Git-Based CTF",
    titleEn: "HSPACE Git-Based CTF",
    summary: "Git 저장소 기반 CTF 플랫폼 구축 및 참여",
    summaryEn: "Built and participated in a Git repository-based CTF platform",
    description:
      "HSPACE Knights Frontier 1기 활동으로 Git 기반 CTF 플랫폼을 구축했습니다. 문제를 Git 저장소로 배포하고 플래그 제출 시스템을 구현하는 새로운 형식의 CTF 플랫폼입니다.",
    descriptionEn:
      "As part of HSPACE Knights Frontier 1st cohort, built a Git-based CTF platform. A novel CTF format where challenges are distributed via Git repositories with a flag submission system.",
    role: "플랫폼 구축 참여 및 문제 개발",
    roleEn: "Platform development participant and challenge creator",
    stack: ["Git", "Python", "Web Hacking", "Linux"],
    category: "web",
    githubUrl: "https://github.com/fox5t4r",
    color: "#e879f9",
  },
  {
    id: "ai-security",
    title: "AI 보안 연구",
    titleEn: "AI Security Research",
    summary: "AI 모델 취약점 및 보안 위협 분석 연구",
    summaryEn: "Research on AI model vulnerabilities and security threats",
    description:
      "AI 시스템에 대한 보안 위협을 연구합니다. Prompt Injection, 모델 탈취, 데이터 포이즈닝 등 AI 특화 공격 기법을 분석하고, 방어 전략을 탐구합니다. AI 보안 분야의 최신 논문과 실제 사례를 지속적으로 연구 중입니다.",
    descriptionEn:
      "Researching security threats against AI systems. Analyzing AI-specific attack techniques including Prompt Injection, model extraction, and data poisoning, while exploring defensive strategies. Continuously studying the latest papers and real-world cases in AI security.",
    role: "단독 연구 — AI 취약점 분석 및 방어 전략 탐구",
    roleEn: "Solo Research — AI vulnerability analysis and defense strategy exploration",
    stack: ["Python", "AI Security", "Prompt Injection", "ML"],
    category: "mobile",
    color: "#fb923c",
  },
];
