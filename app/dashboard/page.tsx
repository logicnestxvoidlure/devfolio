import Link from "next/link";

const fields = [
  ["Display name", "LogicNest"],
  ["Headline", "Roblox Developer"],
  ["Username", "logicnest"],
  ["Location", "Pakistan"],
  ["Bio", "I build polished Roblox experiences with a focus on gameplay systems, UI, and reliable server-side architecture."]
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-neutral-900">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">DEVFOLIO</Link>
          <Link href="/" className="text-sm text-neutral-400 hover:text-white">View portfolio</Link>
        </div>
      </header>

      <div className="container py-12">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[.2em] text-neutral-500">Dashboard</p>
          <h1 className="mt-2 text-4xl font-bold">Edit your portfolio</h1>
          <p className="mt-3 text-neutral-500">This starter uses local demo data. Add authentication and a database next.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <section className="rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-6">
            <h2 className="mb-6 text-lg font-semibold">Profile</h2>
            <div className="space-y-5">
              {fields.map(([label, value]) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm text-neutral-400">{label}</span>
                  {label === "Bio" ? (
                    <textarea defaultValue={value} rows={5} className="w-full resize-none rounded-xl border border-neutral-800 bg-black p-3 text-sm outline-none focus:border-neutral-500" />
                  ) : (
                    <input defaultValue={value} className="w-full rounded-xl border border-neutral-800 bg-black p-3 text-sm outline-none focus:border-neutral-500" />
                  )}
                </label>
              ))}
            </div>
            <button className="mt-7 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-neutral-200">
              Save changes
            </button>
          </section>

          <aside className="h-fit rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-6">
            <h2 className="font-semibold">Next steps</h2>
            <ul className="mt-5 space-y-4 text-sm text-neutral-400">
              <li>01 — Connect PostgreSQL + Prisma</li>
              <li>02 — Add Discord/Roblox authentication</li>
              <li>03 — Add image uploads</li>
              <li>04 — Create public /u/[username] pages</li>
              <li>05 — Add custom portfolio themes</li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
