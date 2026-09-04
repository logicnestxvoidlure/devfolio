import { notFound } from "next/navigation";
import { demoPortfolio } from "@/lib/demo-data";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";

export default async function PublicPortfolio({
  params
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  if (username.toLowerCase() !== demoPortfolio.username.toLowerCase()) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <Portfolio data={demoPortfolio} />
    </>
  );
}