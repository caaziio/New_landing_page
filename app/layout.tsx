import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Acafo — Get Hired in Korea as a Foreigner",
  description:
    "Acafo aligns your skills with real market demand so you stop guessing and start getting interviews. AI-powered platform for foreign talent in Korea.",
  keywords: [
    "jobs in Korea for foreigners",
    "Korean resume",
    "foreign talent Korea",
    "resume audit Korea",
    "expat job search Korea",
  ],
  openGraph: {
    title: "Acafo — Get Hired in Korea as a Foreigner",
    description:
      "AI-powered platform that aligns your skills with real Korean market demand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
