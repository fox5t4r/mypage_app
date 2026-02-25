export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export const SKILLS: Skill[] = [
  // Web Hacking
  { name: "XSS / CSRF", level: 88, category: "frontend" },
  { name: "SQL Injection", level: 85, category: "frontend" },
  { name: "CSP Bypass", level: 82, category: "frontend" },
  { name: "SSRF / XXE", level: 75, category: "frontend" },
  { name: "Web Fuzzing", level: 78, category: "frontend" },
  { name: "Burp Suite", level: 85, category: "frontend" },

  // Development
  { name: "Python", level: 85, category: "backend" },
  { name: "JavaScript", level: 78, category: "backend" },
  { name: "HTML / CSS", level: 80, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Node.js", level: 65, category: "backend" },
  { name: "Next.js", level: 60, category: "backend" },

  // Tools & AI
  { name: "Git / GitHub", level: 88, category: "tools" },
  { name: "Linux / Bash", level: 80, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "AI Security Research", level: 75, category: "tools" },
  { name: "CTF Platforms", level: 85, category: "tools" },
  { name: "Wireshark / nmap", level: 72, category: "tools" },
];
