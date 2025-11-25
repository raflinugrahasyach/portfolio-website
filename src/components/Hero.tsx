import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm font-medium">Available for Internship / Projects</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Turning Complex Data into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business Impact
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Data Scientist specializing in NLP, LLM, and Predictive Analytics. 
              Bridging the gap between raw data and strategic decision-making.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl p-2 shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Muhammad Rafli Nugrahasyach"
                  className="w-full max-w-md rounded-2xl aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
