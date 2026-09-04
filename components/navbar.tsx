import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          DEV<span className="text-neutral-500">FOLIO</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
          <Link className="transition hover:text-white" href="/#projects">Projects</Link>
          <Link className="transition hover:text-white" href="/#about">About</Link>
          <Link className="transition hover:text-white" href="/dashboard">Dashboard</Link>
        </nav>

        <Link
          href="/dashboard"
          className="rounded-lg border border-white bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          Build yours
        </Link>
      </div>
    </header>
  );
}