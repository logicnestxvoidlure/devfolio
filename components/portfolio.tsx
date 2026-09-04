import { Portfolio as PortfolioType } from "@/lib/types";
import { ProjectCard } from "./project-card";

export function Portfolio({ data }: { data: PortfolioType }) {
  return (
    <main>
      <section className="grid-bg border-b border-neutral-900">
        <div className="container py-24 md:py-32">
          <div className="fade-up flex flex-col items-start gap-7">
            <img
              src={data.avatar}
              alt={data.displayName}
              className="h-24 w-24 rounded-3xl border border-neutral-700 object-cover"
            />
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[.2em] text-neutral-500">
                {data.headline}
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                {data.displayName}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
                {data.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.socials.roblox && <a className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:border-white" href={data.socials.roblox}>Roblox</a>}
              {data.socials.github && <a className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:border-white" href={data.socials.github}>GitHub</a>}
              {data.socials.discord && <a className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:border-white" href={data.socials.discord}>Discord</a>}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[.2em] text-neutral-500">Work</p>
          <h2 className="mt-2 text-3xl font-bold">Selected projects</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section id="about" className="border-y border-neutral-900 bg-[#0a0a0a]">
        <div className="container grid gap-10 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[.2em] text-neutral-500">About</p>
            <h2 className="mt-2 text-3xl font-bold">Skills & focus</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-300">
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-7 text-neutral-400">
              Available for Roblox development, systems scripting, environment work, and web tooling.
            </p>
          </div>
        </div>
      </section>

      <footer className="container py-10 text-sm text-neutral-600">
        © {new Date().getFullYear()} {data.displayName}. Built with Devfolio.
      </footer>
    </main>
  );
}