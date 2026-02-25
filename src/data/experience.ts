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
    company: "SecurityFirst",
    companyEn: "SecurityFirst",
    role: "웹 팀 리더",
    roleEn: "Web Team Leader",
    period: "2025.12 — 현재",
    current: true,
    tasks: [
      "순천향대학교 정보보호학과 보안 동아리 웹 팀 리딩",
      "웹 해킹 스터디 운영 및 신입 멤버 교육",
      "연말·연초 해킹 대회 운영 및 웹 문제 출제 (하·중·상 난이도)",
      "CSP Bypass, SSRF 등 고급 웹 취약점 연구 및 공유",
    ],
    tasksEn: [
      "Leading the Web team of Soonchunhyang University security club",
      "Running web hacking study sessions and training new members",
      "Operating year-end/year-start CTF competitions and creating web challenges",
      "Researching and sharing advanced web vulnerabilities (CSP Bypass, SSRF, etc.)",
    ],
    stack: ["Web Hacking", "CTF", "XSS", "SQLi", "CSP Bypass"],
  },
  {
    company: "HSPACE Knights Frontier 1기",
    companyEn: "HSPACE Knights Frontier 1st",
    role: "보안 연구원",
    roleEn: "Security Researcher",
    period: "2025.10 — 현재",
    current: true,
    tasks: [
      "Git 기반 CTF 플랫폼 구축 및 운영 참여",
      "웹 취약점 시나리오 설계 및 문제 개발",
      "팀 내 웹 해킹 기술 공유 및 협업",
    ],
    tasksEn: [
      "Participated in building and operating a Git-based CTF platform",
      "Designed web vulnerability scenarios and developed challenges",
      "Shared web hacking techniques and collaborated within the team",
    ],
    stack: ["CTF", "Git", "Web Hacking", "Python"],
  },
  {
    company: "IFF Security 연합",
    companyEn: "IFF Security Alliance",
    role: "프로젝트 리더 — CMS 취약점 분석",
    roleEn: "Project Leader — CMS Vulnerability Analysis",
    period: "2025.07 — 2025.09",
    current: false,
    tasks: [
      "오픈소스 CMS 플랫폼 취약점 분석 프로젝트 리딩",
      "XSS, SQLi, 파일 업로드 취약점 등 다수 발견 및 보고서 작성",
      "팀원 역할 분배 및 분석 방법론 수립",
      "취약점 PoC 코드 작성 및 패치 제안",
    ],
    tasksEn: [
      "Led vulnerability analysis project for open-source CMS platforms",
      "Discovered and reported multiple vulnerabilities (XSS, SQLi, file upload, etc.)",
      "Assigned team roles and established analysis methodology",
      "Wrote PoC code and proposed patches for discovered vulnerabilities",
    ],
    stack: ["Python", "Burp Suite", "XSS", "SQLi", "PHP"],
  },
  {
    company: "순천향대학교 정보보호학과",
    companyEn: "Soonchunhyang Univ. — Information Security",
    role: "재학생 (24학번)",
    roleEn: "Student (Class of 2024)",
    period: "2024.03 — 현재",
    current: true,
    tasks: [
      "정보보호학과 전공 과정 이수",
      "네트워크관리사 2급 취득",
      "정보처리기능사 취득",
      "SecurityFirst 동아리 YB → 웹 팀 리더로 성장",
    ],
    tasksEn: [
      "Pursuing a degree in Information Security",
      "Obtained Network Administrator Level 2 certification",
      "Obtained Information Processing Technician certification",
      "Grew from SecurityFirst new member to Web Team Leader",
    ],
    stack: ["Network", "Security", "Python", "Linux"],
  },
];
