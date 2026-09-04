import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-black px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[.25em] text-neutral-600">404</p>
        <h1 className="mt-3 text-4xl font-bold">Portfolio not found</h1>
        <p className="mt-3 text-neutral-500">That developer page does not exist yet.</p>
        <Link href="/" className="mt-7 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">
          Back home
        </Link>
      </div>
    </main>
  );
}