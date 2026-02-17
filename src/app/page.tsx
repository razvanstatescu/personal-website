import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FeaturedProjects } from "@/components/featured-projects";
import { OtherProjects } from "@/components/other-projects";
import { TechStack } from "@/components/tech-stack";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <OtherProjects />
        <TechStack />
        <Community />
        <Contact />
      </main>
    </>
  );
}
