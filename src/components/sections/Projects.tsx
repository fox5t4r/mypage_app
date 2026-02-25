"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { PROJECTS, type Project, type ProjectCategory } from "@/data/projects";
import { fadeUp } from "@/lib/motion";

interface ProjectsProps {
  lang: "ko" | "en";
  t: {
    label: string;
    title: string;
    filters: { all: string; web: string; mobile: string; opensource: string };
    modal: {
      role: string;
      stack: string;
      github: string;
      demo: string;
      close: string;
    };
  };
}

type FilterKey = "all" | ProjectCategory;

const FILTERS: { key: FilterKey; label: keyof ProjectsProps["t"]["filters"] }[] = [
  { key: "all", label: "all" },
  { key: "web", label: "web" },
  { key: "mobile", label: "mobile" },
  { key: "opensource", label: "opensource" },
];

function ProjectModal({
  project,
  lang,
  t,
  onClose,
}: {
  project: Project;
  lang: "ko" | "en";
  t: ProjectsProps["t"]["modal"];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={lang === "ko" ? project.title : project.titleEn}
      >
        {/* 컬러 헤더 바 */}
        <div
          className="h-1.5 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        <div className="p-8">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200"
            style={{ color: "var(--text-muted)", background: "var(--bg-card-hover)" }}
            aria-label={t.close}
          >
            <X size={16} />
          </button>

          {/* 제목 */}
          <h3 className="mb-2 text-xl font-bold pr-10" style={{ color: "var(--text-primary)" }}>
            {lang === "ko" ? project.title : project.titleEn}
          </h3>
          <p className="mb-6 text-sm" style={{ color: "var(--accent-light)" }}>
            {lang === "ko" ? project.summary : project.summaryEn}
          </p>

          {/* 설명 */}
          <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {lang === "ko" ? project.description : project.descriptionEn}
          </p>

          {/* 역할 */}
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold tracking-widest" style={{ color: "var(--text-muted)" }}>
              {t.role.toUpperCase()}
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {lang === "ko" ? project.role : project.roleEn}
            </p>
          </div>

          {/* 스택 */}
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold tracking-widest" style={{ color: "var(--text-muted)" }}>
              {t.stack.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-3 py-1 font-mono text-xs"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent-light)",
                    border: "1px solid var(--border-accent)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200"
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
                <Github size={15} />
                {t.github}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <ExternalLink size={15} />
                {t.demo}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  lang,
  onClick,
}: {
  project: Project;
  lang: "ko" | "en";
  onClick: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      aria-label={`${lang === "ko" ? project.title : project.titleEn} 상세 보기`}
    >
      {/* 컬러 상단 바 */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-6">
        {/* 카테고리 뱃지 */}
        <span
          className="mb-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-xs"
          style={{
            background: "var(--bg-primary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}
        >
          {project.category}
        </span>

        <h3
          className="mb-2 text-base font-bold leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {lang === "ko" ? project.title : project.titleEn}
        </h3>

        <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {lang === "ko" ? project.summary : project.summaryEn}
        </p>

        {/* 스택 태그 */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md px-2 py-0.5 font-mono text-xs"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="rounded-md px-2 py-0.5 font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* 링크 아이콘 */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <span style={{ color: "var(--text-muted)" }}>
              <Github size={15} />
            </span>
          )}
          {project.demoUrl && (
            <span style={{ color: "var(--text-muted)" }}>
              <ExternalLink size={15} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ lang, t }: ProjectsProps) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
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
          className="mb-10 text-3xl font-bold sm:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.title}
        </motion.h2>

        {/* 필터 탭 */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
              style={{
                color: filter === key ? "#fff" : "var(--text-secondary)",
                background: filter === key ? "var(--accent)" : "transparent",
                border: filter === key ? "none" : "1px solid var(--border)",
              }}
            >
              {t.filters[label]}
            </button>
          ))}
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            t={t.modal}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
