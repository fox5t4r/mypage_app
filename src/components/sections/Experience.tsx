"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { MapPin } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface ExperienceProps {
  lang: "ko" | "en";
  t: {
    label: string;
    title: string;
    present: string;
  };
}

export default function Experience({ lang, t }: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6">
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-4xl">
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
          className="mb-16 text-3xl font-bold sm:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.title}
        </motion.h2>

        {/* 타임라인 */}
        <div className="relative">
          {/* 세로 라인 */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: "var(--border)" }}
            aria-hidden
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="relative flex items-start gap-8 pl-16 md:pl-0"
                >
                  {/* 타임라인 도트 */}
                  <div
                    className="absolute left-[18px] top-5 z-10 flex h-4 w-4 items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: exp.current ? "var(--accent)" : "var(--bg-card)",
                      border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                      boxShadow: exp.current ? "0 0 12px var(--accent)" : "none",
                    }}
                    aria-hidden
                  />

                  {/* 데스크톱: 좌우 교차 레이아웃 */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isEven ? "md:ml-auto md:pl-8" : "md:pr-8 md:text-right"
                    }`}
                  >
                    <div
                      className="rounded-2xl p-6 transition-all duration-300"
                      style={{
                        background: "var(--bg-card)",
                        border: `1px solid ${exp.current ? "var(--border-accent)" : "var(--border)"}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = "var(--bg-card-hover)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = "var(--bg-card)";
                      }}
                    >
                      {/* 헤더 */}
                      <div className={`mb-4 flex flex-wrap items-start gap-3 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3
                              className="text-base font-bold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {lang === "ko" ? exp.role : exp.roleEn}
                            </h3>
                            {exp.current && (
                              <span
                                className="rounded-full px-2 py-0.5 text-xs font-medium"
                                style={{
                                  background: "var(--accent-dim)",
                                  color: "var(--accent-light)",
                                  border: "1px solid var(--border-accent)",
                                }}
                              >
                                {t.present}
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent-light)" }}>
                            {lang === "ko" ? exp.company : exp.companyEn}
                          </p>
                        </div>
                        <span
                          className="flex items-center gap-1 font-mono text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <MapPin size={11} />
                          {exp.period}
                        </span>
                      </div>

                      {/* 업무 목록 */}
                      <ul className={`mb-4 flex flex-col gap-1.5 ${!isEven ? "md:items-end" : ""}`}>
                        {(lang === "ko" ? exp.tasks : exp.tasksEn).map((task) => (
                          <li
                            key={task}
                            className={`flex items-start gap-2 text-sm leading-relaxed ${!isEven ? "md:flex-row-reverse" : ""}`}
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full"
                              style={{ background: "var(--accent)" }}
                              aria-hidden
                            />
                            {task}
                          </li>
                        ))}
                      </ul>

                      {/* 스택 태그 */}
                      <div className={`flex flex-wrap gap-1.5 ${!isEven ? "md:justify-end" : ""}`}>
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md px-2 py-0.5 font-mono text-xs"
                            style={{
                              background: "var(--bg-primary)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
