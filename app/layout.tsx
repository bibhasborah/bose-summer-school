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

export const metadata: Metadata = {
  metadataBase: new URL("https://bose-summer-school.vercel.app"),

  title: "S. N. Bose Summer School",
  description:
    "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",

  openGraph: {
    title: "S. N. Bose Summer School",
    description:
      "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",
    url: "https://bose-summer-school.vercel.app",
    siteName: "S. N. Bose Summer School",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "https://bose-summer-school.vercel.app/SNBose_Web.png",
        width: 1200,
        height: 630,
        alt: "S. N. Bose Summer School",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "S. N. Bose Summer School",
    description:
      "Annual online summer school introducing undergraduate students to cutting-edge research in Physics and Chemistry.",

    images: [
      "https://bose-summer-school.vercel.app/SNBose_Web.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
