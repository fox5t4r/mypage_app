"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const { lang, toggleLang, t } = useLanguage();
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* 스크롤 프로그레스 바 */}
      <div
        className="fixed left-0 top-0 z-[60] h-[2px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
          boxShadow: "0 0 8px var(--accent)",
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="페이지 스크롤 진행률"
      />

      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        navLabels={t.nav}
      />

      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Skills t={t.skills} />
        <Experience lang={lang} t={t.experience} />
        <Projects lang={lang} t={t.projects} />
        <Contact t={t.contact} />
      </main>
    </>
  );
}
