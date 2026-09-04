# Devfolio

A modern, minimal portfolio builder for Roblox developers, creators, scripters, builders, UI designers, and other developers.

Devfolio is built to be **forked, customized, and deployed**. Use it as a starting point for your own developer portfolio, modify the design, add your projects, connect a database, or turn it into your own portfolio platform.

Built with **Next.js, TypeScript, and Tailwind CSS**.

## ✨ Features

* Modern developer-focused UI
* Dark, minimal design
* Fully responsive
* Roblox developer focused
* Public username-based portfolio pages
* Portfolio dashboard starter
* Project showcase
* Skills section
* Social links
* Customizable portfolio data
* Next.js App Router
* TypeScript
* Tailwind CSS
* Easy local development
* Vercel-ready
* Open source

## 🖥️ Routes

| Route           | Description               |
| --------------- | ------------------------- |
| `/`             | Demo public portfolio     |
| `/dashboard`    | Starter portfolio editor  |
| `/u/[username]` | Public username portfolio |

Example:

```text
/u/logicnest
```

The `/u/[username]` route is currently powered by demo data and can be connected to a database for a production portfolio system.

## 🚀 Getting Started

### Requirements

Make sure you have:

* Node.js 18.18+
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/logicnestxvoidlure/devfolio.git
cd devfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🛠️ Customize Your Portfolio

The starter portfolio currently uses demo data located in:

```text
lib/demo-data.ts
```

You can customize:

* Display name
* Username
* Headline
* Bio
* Avatar
* Location
* Skills
* Social links
* Projects
* Project descriptions
* Project images
* Project tags
* Project links
* Featured projects

### Example

```ts
export const demoPortfolio: Portfolio = {
  username: "yourusername",
  displayName: "Your Name",
  headline: "Roblox Developer",
  bio: "I create Roblox experiences and systems.",
  avatar: "YOUR_AVATAR_URL",

  skills: [
    "Luau",
    "Roblox Studio",
    "UI/UX",
    "Building"
  ],

  socials: {
    roblox: "YOUR_ROBLOX_URL",
    discord: "YOUR_DISCORD_URL",
    github: "YOUR_GITHUB_URL"
  },

  projects: [
    {
      id: "1",
      title: "My Roblox Game",
      description: "A Roblox project I worked on.",
      role: "Scripter",
      image: "YOUR_IMAGE_URL",
      tags: ["Luau", "Roblox"],
      link: "YOUR_GAME_URL",
      featured: true
    }
  ]
};
```

## 🎨 Customize the Design

Global styling is located in:

```text
app/globals.css
```

Main UI components are located in:

```text
components/
├── navbar.tsx
├── portfolio.tsx
└── project-card.tsx
```

You can modify the entire visual system, including:

* Colors
* Fonts
* Layout
* Spacing
* Animations
* Cards
* Navigation
* Portfolio sections
* Backgrounds
* Responsive behavior

Devfolio is intentionally easy to modify, so you can turn the starter into your own design.

## 📁 Project Structure

```text
devfolio/
│
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── u/
│   │   └── [username]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── navbar.tsx
│   ├── portfolio.tsx
│   └── project-card.tsx
│
├── lib/
│   ├── demo-data.ts
│   └── types.ts
│
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Public Portfolio Pages

Devfolio includes username-based public portfolio routes.

For example:

```text
/u/logicnest
```

You can replace the username with any username supported by your future backend.

### Production implementation

The current implementation uses demo data.

For a production version, you can connect the route to a database:

```text
/u/[username]
       ↓
Database lookup
       ↓
Portfolio data
       ↓
Public portfolio
```

This allows every developer to have their own public portfolio.

## 🗄️ Turning Devfolio Into a Portfolio Platform

Devfolio is designed to be extended beyond a static portfolio.

A possible production architecture could look like:

```text
User
 │
 ├── Account
 │
 ├── Profile
 │
 ├── Skills
 │
 ├── Projects
 │
 ├── Social Links
 │
 └── Theme
        │
        ▼
     Database
        │
        ▼
 /u/[username]
        │
        ▼
 Public Portfolio
```

You can add authentication, database storage, project management, image uploads, themes, and other features on top of the existing starter.

## ☁️ Deployment

Devfolio works well with platforms such as Vercel.

### Production build

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Deploy with Vercel

1. Fork the repository.
2. Import your fork into Vercel.
3. Configure your environment variables if needed.
4. Deploy.
5. Your portfolio will be live.

## 🔧 Environment Variables

If your version of Devfolio requires environment variables, copy:

```text
.env.example
```

to:

```text
.env.local
```

Then add your required values.

**Never commit private API keys, passwords, tokens, or other secrets to GitHub.**

## 🧩 Roadmap

Devfolio is intentionally built as a starter and can be expanded into a complete portfolio platform.

### Planned

* [ ] User authentication
* [ ] Database support
* [ ] Portfolio creation system
* [ ] Project creation and editing
* [ ] Image uploads
* [ ] Multiple portfolio themes
* [ ] Live theme preview
* [ ] Custom colors
* [ ] Custom fonts
* [ ] Drag-and-drop sections
* [ ] Developer profiles
* [ ] Custom domains
* [ ] Roblox profile integration
* [ ] GitHub integration
* [ ] Discord integration
* [ ] Portfolio analytics
* [ ] SEO controls

## 🤝 Contributing

Contributions are welcome.

### Fork the repository

Fork Devfolio on GitHub and clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/devfolio.git
cd devfolio
npm install
```

### Create a branch

```bash
git checkout -b feature/my-feature
```

### Make your changes

Test your changes locally:

```bash
npm run dev
```

### Commit your changes

```bash
git add .
git commit -m "Add my feature"
```

### Push your branch

```bash
git push origin feature/my-feature
```

Then open a Pull Request.

When contributing, try to keep changes focused, clean, and consistent with the existing project structure.

## 💡 What Can You Build With Devfolio?

Devfolio can be used as a starting point for:

* Roblox developer portfolios
* Scripting portfolios
* Building portfolios
* UI/UX portfolios
* Game development portfolios
* General developer portfolios
* Personal websites
* Studio/team websites
* Developer profile platforms
* Portfolio SaaS projects

You are free to modify the design and functionality for your own projects, subject to the project's license.

## ⭐ Support

If you find Devfolio useful, consider:

* ⭐ Starring the repository
* 🍴 Forking the project
* 🐛 Opening an issue
* 💡 Suggesting features
* 🔧 Contributing improvements

## 📜 License

Devfolio is released under the **MIT License**.

See [`LICENSE`](./LICENSE) for the full license text.

---

Made for developers who want a simple way to showcase what they build.
