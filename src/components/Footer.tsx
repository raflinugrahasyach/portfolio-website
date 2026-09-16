// ============================================================
// src/components/Footer.tsx — Minimal enterprise footer
// ============================================================
import { Linkedin, Github, Mail, MessageCircle, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

export const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhammad Rafli Nugrahasyach.{" "}
            {lang === "en" ? "All rights reserved." : "Semua hak dilindungi."}
          </p>
          <div className="flex items-center gap-1">
            {footerLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
