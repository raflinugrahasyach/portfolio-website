import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 md:pt-20 md:pb-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm font-medium">Available for Internship / Projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hello, I am <br/>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Muhammad Rafli Nugrahasyach
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Business Statistics Undergraduate & Data Scientist specializing in <b>NLP, LLM, and Computer Vision</b>. 
              I bridge the gap between raw data and strategic decision-making with impactful AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90"
                >
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full"
                >
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/raflinugrahasyach/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/raflinugrahasyach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:raflinugrahasyach26@gmail.com"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
               <a
                href="/CV_Muhammad Rafli Nugrahasyach_GOTO Intern.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
                title="Download Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl p-2 shadow-lg">
                <img
                  src="/profile.png" 
                  alt="Muhammad Rafli Nugrahasyach"
                  className="w-full rounded-2xl aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};