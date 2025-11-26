import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
        isScrolled ? "top-3 md:top-4" : "top-5 md:top-6"
      }`}
    >
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-sm shadow-black/5 flex items-center justify-between md:justify-center">
        
        {/* Mobile Brand - Hanya muncul di HP agar Navbar tidak kosong */}
        <a href="#" className="md:hidden font-bold text-lg tracking-tight mr-auto" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Rafli<span className="text-primary">.</span>
        </a>

        {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="/CV_Muhammad Rafli Nugrahasyach_General.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Download Resume"
          >
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>

        {/* MOBILE NAVIGATION TRIGGER (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 rounded-b-2xl border-b border-border/50 bg-card/95 backdrop-blur-xl">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4 w-full">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        activeSection === link.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                
                <a 
                  href="/CV_Muhammad Rafli Nugrahasyach_General.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-xs"
                >
                  <Button size="lg" className="w-full rounded-full bg-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};