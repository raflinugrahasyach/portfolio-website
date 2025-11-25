import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
