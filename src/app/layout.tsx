import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://razvanstatescu.com"),
  title: {
    default: "Razvan Statescu — Founder & Builder",
    template: "%s | Razvan Statescu",
  },
  description:
    "Founder and indie hacker building in public. Shipping AI-powered mobile apps, SaaS products, and Web3 protocols.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razvan Statescu — Founder & Builder",
    description:
      "Founder & indie hacker shipping AI-powered apps, SaaS, and Web3 protocols. Building in public.",
    url: "https://razvanstatescu.com",
    siteName: "Razvan Statescu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razvan Statescu — Founder & Builder",
    description:
      "Founder & indie hacker shipping AI-powered apps, SaaS, and Web3 protocols. Building in public.",
    creator: "@StatescuRazvan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Razvan Statescu", url: "https://razvanstatescu.com" }],
  creator: "Razvan Statescu",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Razvan Statescu",
  url: "https://razvanstatescu.com",
  image: "https://razvanstatescu.com/headshot.jpg",
  jobTitle: "Founder & Indie Hacker",
  description:
    "Founder and indie hacker shipping AI-powered apps, SaaS products, and Web3 protocols. Building in public.",
  sameAs: [
    "https://x.com/StatescuRazvan",
    "https://www.linkedin.com/in/razvanstatescu/",
  ],
  knowsAbout: [
    "Web Development",
    "Blockchain",
    "Sui",
    "SaaS",
    "Mobile Apps",
    "DeFi",
    "AI",
    "Build in Public",
    "Full Stack Development",
    "Move",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.io/js/pa-NE6LFvZVlZsSUaAcOXmnB.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
