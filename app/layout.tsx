import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shiba Prasad — Frontend Engineer",
  description:
    "Frontend Engineer and Web Designer, currently based in India. Focused on interfaces and experiences.",
  generator: "Next.js",
  applicationName: "Shiba Prasad",
  verification: {
    google: "NssvxIZAkrKLHJ4WKoDtDemBImwkN-GFhUB8cqtbPKw",
  },
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Shiba Prasad — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently based in India. Focused on interfaces and experiences.",
    url: "https://www.shibaprasad.me/",
    siteName: "www.shibaprasad.me",
    images: [
      {
        url: "https://portfolio-mocha-rho-94.vercel.app/hero_section_Images/ezgif-frame-001.jpg",
        width: 1200,
        height: 630,
        alt: "Shiba Prasad — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiba Prasad — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently based in India. Focused on interfaces and experiences.",
    creator: "@theshibaprasad",
    creatorId: "1243720976552144897",
    images: [
      "https://portfolio-mocha-rho-94.vercel.app/hero_section_Images/ezgif-frame-001.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
