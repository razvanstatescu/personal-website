export type ProjectStatus = "live" | "coming-soon" | "testnet";

export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: ProjectStatus;
  category: string;
  features?: string[];
  highlight?: string;
  icon?: string;
  iconClassName?: string;
}

export const featuredProjects: Project[] = [
  {
    name: "Preplo",
    tagline: "AI-powered cooking companion",
    description:
      "Converts cooking videos from YouTube, TikTok, and Instagram into structured recipes with AI customization, hands-free cook mode, and smart shopping lists.",
    url: "https://preplo.app",
    status: "coming-soon",
    category: "Web2 / Mobile App / SaaS",
    icon: "/preplo.jpg",
    features: [
      "Video-to-recipe extraction from any platform",
      "AI recipe customization and adaptation",
      "Hands-free cook mode with step-by-step guidance",
      "Smart shopping lists with ingredient grouping",
    ],
  },
  {
    name: "Inkray",
    tagline: "Decentralized publishing on Sui",
    description:
      "A publishing platform giving creators true digital ownership through on-chain Vaults and Walrus decentralized storage.",
    url: "https://inkray.xyz",
    status: "testnet",
    category: "Web3 / Sui",
    icon: "/inkray.png",
    iconClassName: "h-auto w-24 object-contain lg:w-32",
    features: [
      "On-chain content Vaults for true ownership",
      "Walrus decentralized storage integration",
      "Creator-first monetization model",
      "Full censorship resistance",
    ],
    highlight: "Walrus Grant Recipient",
  },
];

export const otherProjects: Project[] = [
  {
    name: "CoinFever",
    tagline: "Multiplayer on-chain crypto prediction game",
    description:
      "Predict crypto prices in solo, 1v1, or Master's Arena modes. Powered by Fever Maniacs NFTs on Sui.",
    url: "https://coinfever.app",
    status: "live",
    category: "Web3 / Gaming / Sui",
  },
  {
    name: "CoinDrip",
    tagline: "Real-time token streaming protocol",
    description:
      "DeFi protocol for continuous token streaming — payroll, vesting, airdrops, and subscriptions on Sui.",
    url: "https://coindrip.finance",
    status: "live",
    category: "Web3 / DeFi / Sui",
  },
];

export const techStack = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "NestJS",
  "Sui",
  "Move",
  "PostgreSQL",
  "Redis",
  "AWS",
  "n8n",
  "Node.js",
  "Tailwind CSS",
  "Docker",
];

export interface Tool {
  name: string;
  url: string;
  icon: string; // URL to favicon or logo
}

export const tools: Tool[] = [
  {
    name: "Plausible",
    url: "https://plausible.io",
    icon: "https://plausible.io/favicon-32x32.png",
  },
];

export const socials = {
  twitter: "https://x.com/StatescuRazvan",
  linkedin: "https://www.linkedin.com/in/razvanstatescu/",
};
