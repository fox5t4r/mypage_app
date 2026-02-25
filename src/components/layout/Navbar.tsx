"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

interface NavbarProps {
  lang: "ko" | "en";
  onToggleLang: () => void;
  navLabels: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
}

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar({ lang, onToggleLang, navLabels }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(12, 12, 15, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* 로고 */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-mono text-sm font-medium tracking-widest transition-colors duration-200"
            style={{ color: "var(--accent-light)" }}
            aria-label="맨 위로 이동"
          >
            &lt;WS /&gt;
          </button>

          {/* 데스크톱 메뉴 */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map(({ id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{
                    color: activeSection === id
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {navLabels[id as keyof typeof navLabels]}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* 우측 컨트롤 */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className="hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent-light)] md:flex"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              aria-label="언어 전환"
            >
              <span>{lang === "ko" ? "KO" : "EN"}</span>
              <span style={{ color: "var(--text-muted)" }}>/</span>
              <span>{lang === "ko" ? "EN" : "KO"}</span>
            </button>

            {/* 햄버거 버튼 */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 md:hidden"
              style={{ color: "var(--text-secondary)" }}
              aria-label="메뉴 열기"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "var(--bg-primary)" }}
          >
            <ul className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map(({ id }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(id);
                      setMenuOpen(false);
                    }}
                    className="text-2xl font-semibold transition-colors duration-200"
                    style={{
                      color: activeSection === id
                        ? "var(--accent-light)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {navLabels[id as keyof typeof navLabels]}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.07 }}
              >
                <button
                  onClick={() => { onToggleLang(); setMenuOpen(false); }}
                  className="mt-4 rounded-full border px-6 py-2 text-sm font-medium"
                  style={{
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent-light)",
                  }}
                >
                  {lang === "ko" ? "English" : "한국어"}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
