import { Portfolio } from "./types";

export const demoPortfolio: Portfolio = {
  username: "yourusername",
  displayName: "Your Name",
  headline: "Your Role",
  bio: "Write a short introduction about yourself, your skills, and the type of work you create.",
  avatar: "https://placehold.co/400x400",
  location: "Your Location",
  skills: ["Skill One", "Skill Two", "Skill Three", "Skill Four"],
  socials: {
    roblox: "https://www.roblox.com/",
    discord: "https://discord.com/",
    github: "https://github.com/"
  },
  projects: [
    {
      id: "1",
      title: "Project One",
      description: "A short description of your first project. Explain what you created and what you worked on.",
      role: "Developer",
      image: "https://placehold.co/1200x700",
      tags: ["Development", "Project"],
      featured: true
    },
    {
      id: "2",
      title: "Project Two",
      description: "A short description of another project. Highlight the main features, technologies, or responsibilities.",
      role: "Designer",
      image: "https://placehold.co/1200x700",
      tags: ["Design", "Creative"],
      featured: true
    },
    {
      id: "3",
      title: "Project Three",
      description: "Add another project here with a brief explanation of what it is and what you contributed.",
      role: "Full Stack",
      image: "https://placehold.co/1200x700",
      tags: ["Web", "Development"]
    }
  ]
};
