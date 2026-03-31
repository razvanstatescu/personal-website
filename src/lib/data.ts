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
  appStoreUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    name: "Preplo",
    tagline: "AI-powered cooking companion",
    description:
      "Converts cooking videos from YouTube, TikTok, and Instagram into structured recipes with AI customization, hands-free cook mode, and smart shopping lists. Built solo, end to end — React Native, NestJS, AI pipeline.",
    url: "https://preplo.app",
    status: "live",
    category: "Mobile App / AI",
    icon: "/preplo.jpg",
    appStoreUrl:
      "https://apps.apple.com/us/app/preplo-recipes-from-videos/id6758678654",
    highlight: "RevenueCat Shipyard 2026 Winner",
    features: [
      "Video-to-recipe extraction from any platform",
      "AI recipe customization and adaptation",
      "Hands-free cook mode with step-by-step guidance",
      "Smart shopping lists with ingredient grouping",
    ],
  },
];

export const otherProjects: Project[] = [
  {
    name: "Inkray",
    tagline: "Decentralized publishing platform",
    description:
      "A publishing platform giving creators true digital ownership through on-chain Vaults and decentralized storage.",
    url: "https://inkray.xyz",
    status: "testnet",
    category: "Web3 / Publishing",
    icon: "/inkray.png",
    iconClassName: "h-auto w-24 object-contain lg:w-32",
  },
  {
    name: "CoinDrip",
    tagline: "Real-time token streaming protocol",
    description:
      "DeFi protocol for continuous token streaming — payroll, vesting, airdrops, and subscriptions.",
    url: "https://coindrip.finance",
    status: "live",
    category: "Web3 / DeFi",
  },
  {
    name: "CoinFever",
    tagline: "Multiplayer crypto prediction game",
    description:
      "Predict crypto prices in solo, 1v1, or Master's Arena modes.",
    url: "https://coinfever.app",
    status: "live",
    category: "Web3 / Gaming",
  },
];

export const techStack = [
  "React",
  "React Native",
  "Node.js",
  "AI",
  "TypeScript",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "n8n",
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
