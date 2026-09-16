// ============================================================
// src/components/Navigation.tsx
// Adopted from competitor: top announcement bar
// Superior execution: no globe emoji, proper EN/ID segmented control
// + Scroll Progress Rail (Framer Motion useScroll + useSpring)
// ============================================================
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu, Sun, Moon, MapPin } from "lucide-react";
import { CV_PATH } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { en: "About",      id: "Tentang",     href: "#home" },
  { en: "Projects",   id: "Portofolio",  href: "#projects" },
  { en: "Stack",      id: "Teknologi",   href: "#techstack" },
  { en: "Experience", id: "Pengalaman",  href: "#experience" },
  { en: "Awards",     id: "Penghargaan", href: "#awards" },
  { en: "Contact",    id: "Kontak",      href: "#contact" },
];

const announcementCopy = {
  en: "Currently in Surabaya, Indonesia - Open to opportunities globally",
  id: "Saat ini di Surabaya, Indonesia - Terbuka untuk peluang global",
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;
  return (
    <button
      className="w-8 h-8 flex items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="flex items-center border border-border rounded overflow-hidden"
      role="group"
      aria-label="Language toggle"
    >
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >EN</button>
      <button
        onClick={() => setLang("id")}
        className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
          lang === "id" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "id"}
      >ID</button>
    </div>
  );
};

export const Navigation = () => {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll progress rail
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(section); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll Progress Rail — sits at the very top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        style={{
          scaleX,
          background: "hsl(213 85% 48%)",
        }}
      />

      {/* Announcement bar */}
      <div className="bg-accent text-accent-foreground text-xs font-medium py-2 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <MapPin className="w-3 h-3 shrink-0" />
        <span className="hidden sm:inline">{announcementCopy[lang]}</span>
        <span className="sm:hidden">Surabaya, Indonesia</span>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-200 ${isScrolled ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-base tracking-tight text-foreground"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            Rafli<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link[lang]}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="h-8 px-3 text-xs rounded font-medium">
                <Download className="w-3.5 h-3.5 mr-1.5" />
                {lang === "en" ? "Resume" : "Unduh CV"}
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground" aria-label="Open menu">
                  <Menu className="w-4 h-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-14">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                        activeSection === link.href.substring(1)
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link[lang]}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border">
                    <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full h-9 text-sm font-medium rounded">
                        <Download className="w-4 h-4 mr-2" />
                        {lang === "en" ? "Download Resume" : "Unduh CV"}
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
