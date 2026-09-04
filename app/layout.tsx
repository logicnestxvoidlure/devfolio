import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devfolio — Roblox Developer Portfolio",
  description: "Build and publish a professional Roblox developer portfolio."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}