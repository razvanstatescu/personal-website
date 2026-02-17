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
  metadataBase: new URL("https://razvanstatescu.com"),
  title: {
    default: "Razvan Statescu — Founder & Builder",
    template: "%s | Razvan Statescu",
  },
  description:
    "Building at the intersection of Web2 and Web3. Mobile apps, SaaS products, and decentralized protocols on Sui.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razvan Statescu — Founder & Builder",
    description:
      "Founder building mobile apps, SaaS, and Web3 protocols on Sui.",
    url: "https://razvanstatescu.com",
    siteName: "Razvan Statescu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razvan Statescu — Founder & Builder",
    description:
      "Founder building mobile apps, SaaS, and Web3 protocols on Sui.",
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
  jobTitle: "Founder & Builder",
  description:
    "Founder building mobile apps, SaaS products, and decentralized protocols on Sui.",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
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
