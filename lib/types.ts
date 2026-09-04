export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

export type Portfolio = {
  username: string;
  displayName: string;
  headline: string;
  bio: string;
  avatar: string;
  location: string;
  skills: string[];
  socials: {
    roblox?: string;
    discord?: string;
    github?: string;
  };
  projects: Project[];
};