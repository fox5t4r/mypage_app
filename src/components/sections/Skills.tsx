"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS, type SkillCategory } from "@/data/skills";
import { fadeUp } from "@/lib/motion";

interface SkillsProps {
  t: {
    label: string;
    title: string;
    tabs: {
      frontend: string;
      backend: string;
      tools: string;
    };
  };
}

const TABS: { key: SkillCategory; label: keyof SkillsProps["t"]["tabs"] }[] = [
  { key: "frontend", label: "frontend" },
  { key: "backend", label: "backend" },
  { key: "tools", label: "tools" },
];

function SkillBar({
  name,
  level,
  index,
  animate,
}: {
  name: string;
  level: number;
  index: number;
  animate: boolean;
}) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--accent-light)" }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full"
        style={{ background: "var(--bg-card-hover)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--accent), var(--accent-light))`,
          }}
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.06, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ t }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<SkillCategory>("frontend");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = SKILLS.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-3 font-mono text-xs tracking-[0.25em]"
          style={{ color: "var(--accent)" }}
        >
          {t.label}
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-3xl font-bold sm:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.title}
        </motion.h2>

        {/* 탭 */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 flex gap-2"
          role="tablist"
        >
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              onClick={() => setActiveTab(key)}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
              style={{
                color: activeTab === key ? "#fff" : "var(--text-secondary)",
                background: activeTab === key ? "var(--accent)" : "transparent",
                border: activeTab === key ? "none" : "1px solid var(--border)",
              }}
            >
              {t.tabs[label]}
            </button>
          ))}
        </motion.div>

        {/* 스킬 그리드 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filtered.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={i}
              animate={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
