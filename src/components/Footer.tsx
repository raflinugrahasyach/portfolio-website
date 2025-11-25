import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-1">Muhammad Rafli Nugrahasyach</h3>
            <p className="text-sm text-muted-foreground">
              © 2025. Built with React, Tailwind, and Data Science passion.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/raflinugrahasyach/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/raflinugrahasyach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:raflinugrahasyach26@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};