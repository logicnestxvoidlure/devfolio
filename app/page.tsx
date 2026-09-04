import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { demoPortfolio } from "@/lib/demo-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <Portfolio data={demoPortfolio} />
    </>
  );
}