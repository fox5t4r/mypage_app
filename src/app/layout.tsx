import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "유원상 | 보안 전문가",
  description:
    "웹 해킹과 AI 보안을 연구하는 보안 전문가 유원상의 포트폴리오입니다. 취약점 분석, CTF, AI Security 전문.",
  keywords: ["보안", "웹해킹", "취약점분석", "CTF", "AI보안", "포트폴리오", "유원상"],
  authors: [{ name: "유원상" }],
  openGraph: {
    title: "유원상 | 보안 전문가",
    description: "웹 해킹과 AI 보안을 연구하는 보안 전문가 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
