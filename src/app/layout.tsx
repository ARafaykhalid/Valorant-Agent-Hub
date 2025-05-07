import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Valorant Agent Hub",
  description:
    "Explore the Valorant Agent Hub — a custom-built portfolio project showcasing all Valorant agents with detailed visuals and smooth UI, inspired by Zentry Design and powered by Riot Games assets. Designed and coded entirely from scratch using Next.js and hosted on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
