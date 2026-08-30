import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lahiru Asiri — Associate Software Engineer",
  description:
    "Portfolio of Lahiru Asiri — full-stack software engineer building web, mobile and AI-driven products with React, Next.js, Node, NestJS and Spring Boot, plus DevOps/CI-CD, RAG systems and n8n automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${saira.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
