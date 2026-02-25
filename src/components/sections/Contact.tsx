"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface ContactProps {
  t: {
    label: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      name_placeholder: string;
      email_placeholder: string;
      subject_placeholder: string;
      message_placeholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    links: {
      email: string;
      github: string;
      linkedin: string;
      kakao: string;
    };
  };
}

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormData, t: ContactProps["t"]["form"]): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = `${t.name}을(를) 입력해주세요`;
  if (!data.email.trim()) {
    errors.email = `${t.email}을(를) 입력해주세요`;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다";
  }
  if (!data.subject.trim()) errors.subject = `${t.subject}을(를) 입력해주세요`;
  if (!data.message.trim()) errors.message = `${t.message}을(를) 입력해주세요`;
  return errors;
}

const SOCIAL_LINKS = [
  { key: "email", icon: Mail, href: "mailto:zxckg2005@gmail.com", color: "#6c63ff" },
  { key: "github", icon: Github, href: "https://github.com/fox5t4r", color: "#e2e8f0" },
  { key: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/wonsang-yoo-a781133b0/", color: "#0a66c2" },
  { key: "kakao", icon: MessageCircle, href: "https://open.kakao.com", color: "#fee500" },
] as const;

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "var(--text-primary)",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

export default function Contact({ t }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, t.form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    // EmailJS 또는 Resend 연동 전 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6">
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        aria-hidden
      />

      {/* 배경 글로우 */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
        style={{
          width: "500px",
          height: "300px",
          background: "var(--accent)",
        }}
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
          className="mb-4 text-3xl font-bold sm:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.title}
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14 max-w-lg text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.description}
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* 폼 */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">
                {/* 이름 */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.name_placeholder}
                    style={{
                      ...inputBase,
                      borderColor: errors.name ? "#f87171" : "var(--border)",
                    }}
                    onFocus={(e) => {
                      if (!errors.name) (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.name) (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    }}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.name}</p>
                  )}
                </div>

                {/* 이메일 */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.email_placeholder}
                    style={{
                      ...inputBase,
                      borderColor: errors.email ? "#f87171" : "var(--border)",
                    }}
                    onFocus={(e) => {
                      if (!errors.email) (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.email) (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    }}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.email}</p>
                  )}
                </div>

                {/* 제목 */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.form.subject}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.form.subject_placeholder}
                    style={{
                      ...inputBase,
                      borderColor: errors.subject ? "#f87171" : "var(--border)",
                    }}
                    onFocus={(e) => {
                      if (!errors.subject) (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.subject) (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    }}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.subject}</p>
                  )}
                </div>

                {/* 메시지 */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.form.message_placeholder}
                    style={{
                      ...inputBase,
                      resize: "vertical",
                      borderColor: errors.message ? "#f87171" : "var(--border)",
                    }}
                    onFocus={(e) => {
                      if (!errors.message) (e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.message) (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)";
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.message}</p>
                  )}
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 disabled:opacity-60"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {t.form.submit}
                    </>
                  )}
                </button>

                {/* 상태 메시지 */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl p-4 text-sm"
                    style={{ background: "rgba(52, 211, 153, 0.1)", color: "#34d399", border: "1px solid rgba(52, 211, 153, 0.3)" }}
                  >
                    <CheckCircle size={16} />
                    {t.form.success}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl p-4 text-sm"
                    style={{ background: "rgba(248, 113, 113, 0.1)", color: "#f87171", border: "1px solid rgba(248, 113, 113, 0.3)" }}
                  >
                    <AlertCircle size={16} />
                    {t.form.error}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-center gap-4"
          >
            {SOCIAL_LINKS.map(({ key, icon: Icon, href, color }) => (
              <a
                key={key}
                href={href}
                target={key !== "email" ? "_blank" : undefined}
                rel={key !== "email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-accent)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold capitalize" style={{ color: "var(--text-primary)" }}>
                    {t.links[key as keyof typeof t.links]}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {href.replace("mailto:", "")}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="mx-auto mt-20 max-w-6xl border-t pt-8" style={{ borderColor: "var(--border)" }}>
        <p className="text-center text-sm" style={{ color: "var(--text-muted)" }}>
          © 2025 유원상. All rights reserved.
        </p>
      </div>
    </section>
  );
}
