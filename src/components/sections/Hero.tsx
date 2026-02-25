"use client";

import { useEffect, useReducer } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

interface HeroProps {
  t: {
    greeting: string;
    name: string;
    roles: string[];
    description: string;
    cta_projects: string;
    cta_resume: string;
  };
}

interface TypewriterState {
  textIndex: number;
  charIndex: number;
  deleting: boolean;
}

type TypewriterAction = { type: "TICK"; totalTexts: number; currentLength: number };

function typewriterReducer(state: TypewriterState, action: TypewriterAction): TypewriterState {
  const { textIndex, charIndex, deleting } = state;
  const { totalTexts, currentLength } = action;

  if (!deleting && charIndex < currentLength) {
    return { ...state, charIndex: charIndex + 1 };
  }
  if (!deleting && charIndex === currentLength) {
    return { ...state, deleting: true };
  }
  if (deleting && charIndex > 0) {
    return { ...state, charIndex: charIndex - 1 };
  }
  return { textIndex: (textIndex + 1) % totalTexts, charIndex: 0, deleting: false };
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [state, dispatch] = useReducer(typewriterReducer, {
    textIndex: 0,
    charIndex: 0,
    deleting: false,
  });

  const current = texts[state.textIndex];
  const displayText = current.slice(0, state.charIndex);

  useEffect(() => {
    const isFullyTyped = !state.deleting && state.charIndex === current.length;
    const delay = isFullyTyped ? 2000 : state.deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      dispatch({ type: "TICK", totalTexts: texts.length, currentLength: current.length });
    }, delay);

    return () => clearTimeout(timeout);
  }, [state, current, texts.length]);

  return (
    <span>
      {displayText}
      <span
        className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse align-middle"
        style={{ background: "var(--accent)" }}
      />
    </span>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* 배경 그라디언트 오브 */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 rounded-full opacity-10 blur-[100px]"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* 그리드 패턴 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl"
      >
        {/* 레이블 */}
        <motion.p
          variants={itemVariants}
          className="mb-4 font-mono text-sm tracking-[0.2em]"
          style={{ color: "var(--accent-light)" }}
        >
          {t.greeting}
        </motion.p>

        {/* 이름 */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.name}
        </motion.h1>

        {/* 타이핑 직함 */}
        <motion.div
          variants={itemVariants}
          className="mb-6 text-3xl font-semibold sm:text-4xl lg:text-5xl"
          style={{ color: "var(--text-secondary)" }}
        >
          <TypewriterText texts={t.roles} />
        </motion.div>

        {/* 설명 */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.description}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(108, 99, 255, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(108, 99, 255, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(108, 99, 255, 0.4)";
            }}
          >
            {t.cta_projects}
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-300"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
            }}
          >
            <Download size={16} />
            {t.cta_resume}
          </a>
        </motion.div>

        {/* 소셜 링크 */}
        <motion.div variants={itemVariants} className="mt-12 flex items-center gap-5">
          <span className="text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
            FOLLOW
          </span>
          <div className="h-px w-8" style={{ background: "var(--border)" }} />
          {[
            { href: "https://github.com/fox5t4r", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/wonsang-yoo-a781133b0/", icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* 스크롤 다운 힌트 */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
        aria-label="아래로 스크롤"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
