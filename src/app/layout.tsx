import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./utils/font";

export const metadata: Metadata = {
  title: "Mishbahul Munir | MyPortfolio",
  description:
    "I am a fullstack web developer focused on building modern, responsive, and functional web applications. Explore my portfolio to see the innovative solutions I offer.",
  keywords: [
    "Fullstack Web Developer",
    "Web Developer Portfolio",
    "Modern Web Development",
    "Responsive Web Design",
    "Frontend and Backend Development",
    "Fullstack Developer Services",
    "JavaScript Developer",
    "Fullstack Developer Projects",
    "Custom Web Solutions",
    "Web Development for Businesses",
    "Frontend Developer Skills",
    "Backend Developer Skills",
    "MERN Stack Developer",
    "Fullstack Application Development",
    "UI/UX Web Development",
    "Next.js Developer",
    "React Developer Portfolio",
    "Tailwind CSS Developer",
    "API Integration for Web Apps",
    "Web Application Optimization",
    "Freelance Web Developer",
    "Interactive Web Design",
    "User-Friendly Web Apps",
    "Scalable Web Development",
    "SEO-Friendly Web Development",
    "Creative Web Solutions",
    "Fullstack Developer Experience",
    "Web Project Showcase",
    "Software Development Portfolio",
    "Custom Web Application Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
