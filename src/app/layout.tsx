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
  metadataBase: new URL("https://statescu.net"),
  title: {
    default: "Razvan Statescu — Product Engineer",
    template: "%s | Razvan Statescu",
  },
  description:
    "Product engineer building in public. Shipping AI-powered apps and SaaS products end to end. Winner of RevenueCat's Shipyard Creator Contest 2026. Seeking founding engineer roles.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razvan Statescu — Product Engineer",
    description:
      "Product engineer shipping AI-powered apps and SaaS products end to end. Building in public.",
    url: "https://statescu.net",
    siteName: "Razvan Statescu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razvan Statescu — Product Engineer",
    description:
      "Product engineer shipping AI-powered apps and SaaS products end to end. Building in public.",
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
  authors: [{ name: "Razvan Statescu", url: "https://statescu.net" }],
  creator: "Razvan Statescu",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Razvan Statescu",
  url: "https://statescu.net",
  image: "https://statescu.net/headshot.jpg",
  jobTitle: "Product Engineer",
  description:
    "Product engineer shipping AI-powered apps and SaaS products end to end. Building in public. Winner of RevenueCat's Shipyard Creator Contest 2026. Seeking founding engineer roles.",
  sameAs: [
    "https://x.com/StatescuRazvan",
    "https://www.linkedin.com/in/razvanstatescu/",
  ],
  knowsAbout: [
    "Product Engineering",
    "React",
    "React Native",
    "TypeScript",
    "NestJS",
    "AI",
    "SaaS",
    "Mobile Apps",
    "Full Stack Development",
    "Build in Public",
    "Startups",
    "Product Management",
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
