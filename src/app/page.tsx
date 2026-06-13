import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { ClientWork } from "@/components/sections/client-work";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { PersonalProjects } from "@/components/sections/personal-projects";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";
import { WhoIHelp } from "@/components/sections/who-i-help";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <ClientWork />
        <Services />
        <Packages />
        <WhoIHelp />
        <PersonalProjects />
        <Process />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
