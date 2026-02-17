import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Razvan Statescu — Founder & Builder",
  description:
    "Building at the intersection of Web2 and Web3. Mobile apps, SaaS products, and decentralized protocols on Sui.",
  openGraph: {
    title: "Razvan Statescu",
    description:
      "Founder building mobile apps, SaaS, and Web3 protocols on Sui.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
