import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S. N. Bose Summer School",
  description:
    "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",

  openGraph: {
    title: "S. N. Bose Summer School",
    description:
      "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",
    url: "https://bose-summer-school.vercel.app",
    siteName: "S. N. Bose Summer School",
    images: [
      {
        url: "/SNBose_Web.png",
        width: 1200,
        height: 630,
        alt: "S. N. Bose Summer School",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "S. N. Bose Summer School",
    description:
      "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",
    images: ["/SNBose_Web.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
