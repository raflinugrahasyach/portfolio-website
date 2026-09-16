// ============================================================
// src/components/Contact.tsx
// Hybrid Quantum Bento -- Split-bento contact. Web3Forms intact.
// Fix: Removed "Typical response 24-48 hours" bot text.
//      Secondary bento: clean location + status + social links.
// Full bilingual i18n preserved.
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Mail, MessageCircle, Instagram, Send, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

const WEB3FORMS_ACCESS_KEY = "8a94e8b8-e21a-4365-9f19-38aa90ba8caf";

const copy = {
  en: {
    label: "CONTACT",
    heading: "Let's Work Together",
    sub: "Open to research collaborations, data science roles, and AI/ML consulting projects.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePh: "Your name",
    emailPh: "your@email.com",
    messagePh: "Tell me about your project, research collaboration, or opportunity...",
    send: "Send Message",
    sending: "Sending...",
    successTitle: "Message received",
    successDesc: "Thank you for reaching out. I will get back to you shortly.",
    errorTitle: "Failed to send",
    errorDesc: "Something went wrong. Please email me directly.",
    connect: "Connect",
    location: "Surabaya, Indonesia (UTC+7)",
    status: "Available for new opportunities",
  },
  id: {
    label: "KONTAK",
    heading: "Mari Berkolaborasi",
    sub: "Terbuka untuk kolaborasi riset, peran data science, dan proyek konsultasi AI/ML.",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    namePh: "Nama Anda",
    emailPh: "email@anda.com",
    messagePh: "Ceritakan tentang proyek, kolaborasi riset, atau peluang Anda...",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    successTitle: "Pesan diterima",
    successDesc: "Terima kasih telah menghubungi. Saya akan segera merespons.",
    errorTitle: "Gagal mengirim",
    errorDesc: "Terjadi kesalahan. Silakan email saya langsung.",
    connect: "Hubungi",
    location: "Surabaya, Indonesia (UTC+7)",
    status: "Tersedia untuk peluang baru",
  },
};

const socialLinks = [
  { href: SOCIAL_LINKS.linkedin,              icon: Linkedin,       label: "LinkedIn" },
  { href: SOCIAL_LINKS.github,                icon: Github,         label: "GitHub" },
  { href: `mailto:${SOCIAL_LINKS.email}`,     icon: Mail,           label: "Email" },
  { href: SOCIAL_LINKS.whatsapp,              icon: MessageCircle,  label: "WhatsApp" },
  { href: SOCIAL_LINKS.instagram,             icon: Instagram,      label: "Instagram" },
];

const inputClass =
  "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-colors";

export const Contact = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const c = copy[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multi-click spam / duplicate keyboard submission

    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Contact Form Submission - Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast({ title: c.successTitle, description: c.successDesc });
        form.reset(); // Fires ONLY on success
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      toast({ title: c.errorTitle, description: c.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-3">
            {c.label}
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-3">{c.heading}</h2>
          <p className="text-sm text-muted-foreground max-w-lg">{c.sub}</p>
        </div>

        {/* Bento split: 3/5 form + 2/5 info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

          {/* Form bento card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:col-span-3 border border-border rounded-sm bg-card p-6 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-foreground mb-1.5">
                {c.name}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder={c.namePh}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-foreground mb-1.5">
                {c.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder={c.emailPh}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-foreground mb-1.5">
                {c.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={c.messagePh}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  {c.sending}
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  {c.send}
                </>
              )}
            </button>
          </motion.form>

          {/* Info + Social sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-3"
          >
            {/* Location + status -- no bot copy */}
            <div className="border border-border rounded-sm bg-card p-5">
              <p className="text-xs font-mono font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
                {c.connect}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <p className="text-xs font-mono text-muted-foreground">{c.location}</p>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-mono text-muted-foreground">{c.status}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="border border-border rounded-sm bg-card p-5 flex flex-col gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-sm border border-border text-sm text-foreground hover:bg-muted hover:border-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};