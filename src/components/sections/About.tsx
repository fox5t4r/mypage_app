"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp } from "@/lib/motion";

interface AboutProps {
  t: {
    label: string;
    title: string;
    bio1: string;
    bio2: string;
    stats: {
      experience: { value: number; label: string };
      projects: { value: number; label: string };
      stacks: { value: number; label: string };
    };
  };
}

function StatCard({
  value,
  label,
  shouldStart,
}: {
  value: number;
  label: string;
  shouldStart: boolean;
}) {
  const { count } = useCountUp(value, 1500, shouldStart);
  return (
    <div
      className="flex flex-col items-center gap-1 rounded-2xl p-6 text-center"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      <span
        className="text-4xl font-extrabold tabular-nums"
        style={{ color: "var(--accent-light)" }}
      >
        {count}
        <span className="text-2xl">+</span>
      </span>
      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {label}
      </span>
    </div>
  );
}

export default function About({ t }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const statsArray = [
    t.stats.experience,
    t.stats.projects,
    t.stats.stacks,
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-6"
    >
      {/* 섹션 구분선 */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        {/* 섹션 레이블 */}
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

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* 좌측: 텍스트 */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-8 text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: "var(--text-primary)", whiteSpace: "pre-line" }}
            >
              {t.title}
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-5 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.bio1}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.bio2}
            </motion.p>

            {/* 아바타 + 이름 */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold transition-all duration-300"
                style={{
                  background: "var(--accent-dim)",
                  border: "2px solid var(--accent)",
                  color: "var(--accent-light)",
                }}
              >
                WS
                              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  유원상
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Web Hacking Expert
                </p>
              </div>
            </motion.div>
          </div>

          {/* 우측: 스탯 카드 */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-center gap-4"
          >
            <div className="grid grid-cols-3 gap-4">
              {statsArray.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  shouldStart={inView}
                />
              ))}
            </div>

            {/* 기술 키워드 태그 */}
            <div
              className="mt-4 rounded-2xl p-6"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: "var(--text-muted)" }}>
                CORE EXPERTISE
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Hacking", "CVE Research", "Red Team", "Burp Suite", "Prompt Injection", "Bug Bounty", "CTF"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "var(--accent-dim)",
                        color: "var(--accent-light)",
                        border: "1px solid var(--border-accent)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
