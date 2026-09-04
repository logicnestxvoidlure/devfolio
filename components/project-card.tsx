import { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c0c] transition duration-300 hover:-translate-y-1 hover:border-neutral-600">
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-semibold">{project.title}</h3>
          <span className="text-xs text-neutral-500">{project.role}</span>
        </div>
        <p className="min-h-12 text-sm leading-6 text-neutral-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-neutral-800 px-2 py-1 text-xs text-neutral-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}