import { Portfolio } from "./types";

export const demoPortfolio: Portfolio = {
  username: "logicnest",
  displayName: "LogicNest",
  headline: "Roblox Developer",
  bio: "I build polished Roblox experiences with a focus on gameplay systems, UI, and reliable server-side architecture.",
  avatar: "https://i.ibb.co/1VtYzN6/builder.png",
  location: "Pakistan",
  skills: ["Luau", "Roblox Studio", "UI/UX", "Systems", "Web Development"],
  socials: {
    roblox: "https://www.roblox.com/",
    discord: "https://discord.com/",
    github: "https://github.com/"
  },
  projects: [
    {
      id: "1",
      title: "Survival Queue System",
      description: "A secure server-side matchmaking queue with independent countdowns and player validation.",
      role: "Scripter",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      tags: ["Luau", "Matchmaking", "Server"],
      featured: true
    },
    {
      id: "2",
      title: "City Roleplay",
      description: "A large-scale city roleplay environment with roads, commercial areas, hotels, and skyscrapers.",
      role: "Builder",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
      tags: ["Building", "Environment", "Roblox"],
      featured: true
    },
    {
      id: "3",
      title: "Developer Dashboard",
      description: "A clean web dashboard concept for managing Roblox projects and developer profiles.",
      role: "Full Stack",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "TypeScript", "Web"]
    }
  ]
};