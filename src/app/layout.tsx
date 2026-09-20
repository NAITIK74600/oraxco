import type { Metadata } from "next";
import { Sora, Inter, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

const sora = Sora({
  variable: "--font-sora-var",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oraxco — Creative Studio",
    template: "%s — Oraxco",
  },
  description:
    "Oraxco is a creative studio that designs and builds launch-ready digital experiences.",
  keywords: ["Oraxco", "creative studio", "web design", "frontend development", "next.js"],
  openGraph: {
    title: "Oraxco — Creative Studio",
    description: "Launch-ready digital experiences that command attention.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${geistMono.variable} ${dancingScript.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
