import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FeaturedProjects } from "@/components/featured-projects";
import { TechStack } from "@/components/tech-stack";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Glow } from "@/components/glow";
import { Divider } from "@/components/divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-hidden">
        <Hero />

        {/* Ambient glow between hero and about */}
        <div className="relative">
          <Glow
            color="amber"
            className="-top-40 left-1/2 -translate-x-1/2 h-80 w-[600px]"
          />
        </div>

        <About />
        <Divider />

        {/* Projects sit on a surface band */}
        <FeaturedProjects />

        {/* Glow between projects and stack */}
        <div className="relative">
          <Glow
            color="neutral"
            className="-top-32 right-0 h-64 w-[500px]"
          />
        </div>

        <TechStack />

        <Divider />
        <Community />

        {/* Ambient glow above contact */}
        <div className="relative">
          <Glow
            color="amber"
            className="-top-24 left-1/4 h-64 w-[400px]"
          />
        </div>

        <Contact />
      </main>
    </>
  );
}
