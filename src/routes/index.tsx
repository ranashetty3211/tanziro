import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Breathing } from "@/components/sections/Breathing";
import { Gallery } from "@/components/sections/Gallery";
import { Quotes } from "@/components/sections/Quotes";
import { Battles } from "@/components/sections/Battles";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanjiro Kamado — Bearer of the Hinokami Flame" },
      { name: "description", content: "A cinematic tribute to Tanjiro Kamado — water-breathing, sun-breathing, and the quiet courage of a demon slayer of the Taisho era." },
      { property: "og:title", content: "Tanjiro Kamado — Bearer of the Hinokami Flame" },
      { property: "og:description", content: "A cinematic tribute to Tanjiro Kamado." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Story />
      <Breathing />
      <Gallery />
      <Quotes />
      <Battles />
      <Footer />
    </main>
  );
}
