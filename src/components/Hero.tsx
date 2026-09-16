// ============================================================
// src/components/Hero.tsx
// Hybrid Quantum Bento -- Concept 3 grid + Concept 1 typography
// Fix: name clamp(+sm:nowrap) | p-5 sm:p-7 lg:p-10 | px-4 sm:px-6
//      magnetic CTA buttons via Framer Motion useMotionValue+useSpring
// ============================================================
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Linkedin, Github, Mail, FileText, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, CV_PATH } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    eyebrow: "BNSP-Certified - Edge AI - NLP - Time-Series",
    name: "Muhammad Rafli N.",
    role: "Data Scientist & Machine Learning Engineer",
    sub: "Specializing in NLP, Edge AI, and Time-Series Forecasting. Previously evaluated LLMs on NVIDIA Jetson hardware at CERDAS UTP Malaysia.",
    cta1: "Explore Projects",
    cta2: "Download CV",
    stat1v: "12+",
    stat1l: "Competitions",
    stat1s: "Including 3x 1st Place Wins",
    stat2v: "IDR 87M",
    stat2l: "Research Grants",
    stat2s: "ITS Fund - HETI - Youth Technopreneur",
    stat3v: "37+",
    stat3l: "Projects",
    stat3s: "Across 7 ML/DL Domains",
    location: "Surabaya, Indonesia",
    affiliation: "Previously @ CERDAS UTP Malaysia",
  },
  id: {
    eyebrow: "Bersertifikasi BNSP - Edge AI - NLP - Time-Series",
    name: "Muhammad Rafli N.",
    role: "Data Scientist & Machine Learning Engineer",
    sub: "Spesialisasi NLP, Edge AI, dan Time-Series Forecasting. Sebelumnya mengevaluasi LLM pada perangkat NVIDIA Jetson di CERDAS UTP Malaysia.",
    cta1: "Lihat Proyek",
    cta2: "Unduh CV",
    stat1v: "12+",
    stat1l: "Kompetisi",
    stat1s: "Termasuk 3x Juara 1",
    stat2v: "IDR 87M",
    stat2l: "Hibah Riset",
    stat2s: "ITS Fund - HETI - Youth Technopreneur",
    stat3v: "37+",
    stat3l: "Proyek",
    stat3s: "Dalam 7 Domain ML/DL",
    location: "Surabaya, Indonesia",
    affiliation: "Previously @ CERDAS UTP Malaysia",
  },
};

const socials = [
  { icon: Linkedin,       href: SOCIAL_LINKS.linkedin,              label: "LinkedIn" },
  { icon: Github,         href: SOCIAL_LINKS.github,                label: "GitHub" },
  { icon: Mail,           href: `mailto:${SOCIAL_LINKS.email}`,     label: "Email" },
  { icon: MessageCircle,  href: SOCIAL_LINKS.whatsapp,              label: "WhatsApp" },
  { icon: Instagram,      href: SOCIAL_LINKS.instagram,             label: "Instagram" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const bentoVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

// Magnetic button wrapper: slightly attracts to cursor on hover
const MagneticButton = ({ children, className, href, onClick, target, rel }: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 25 });
  const springY = useSpring(y, { stiffness: 350, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export const Hero = () => {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16"
    >
      <div className="container mx-auto max-w-6xl">

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

          {/* CELL A: Identity (7/12 cols) */}
          <motion.div
            custom={0}
            variants={bentoVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col justify-between border border-border rounded-sm bg-card p-4 sm:p-7 lg:p-10 min-h-[460px]"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-0"
            >
              {/* Eyebrow — ASCII separators, no unicode dots */}
              <motion.p
                variants={itemVariants}
                className="text-xs font-mono font-medium tracking-[0.1em] uppercase text-muted-foreground mb-5"
              >
                {c.eyebrow}
              </motion.p>

              {/* Name — clamp prevents overflow on all viewports */}
              <motion.h1
                variants={itemVariants}
                className="font-bold leading-tight tracking-tight text-foreground mb-4 break-words"
                style={{ fontSize: "clamp(1.4rem, 5.5vw, 3.8rem)" }}
              >
                {c.name}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-semibold text-accent mb-5 leading-tight"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
              >
                {c.role}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed"
              >
                {c.sub}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                <MagneticButton
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {c.cta1}
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  href={CV_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-5 text-sm font-medium rounded-sm border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  {c.cta2}
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Social links at bottom of Cell A */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 pt-4 border-t border-border"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="ml-auto text-xs font-mono text-muted-foreground hidden sm:block">
                {c.location}
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Portrait + Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-3">

            {/* CELL B: Portrait -- zero floating cards */}
            <motion.div
              custom={1}
              variants={bentoVariants}
              initial="hidden"
              animate="show"
              className="relative border border-border rounded-sm overflow-hidden bg-muted flex-1"
              style={{ minHeight: "300px" }}
            >
              <img
                src="/profile_square.png"
                alt="Muhammad Rafli Nugrahasyach - Data Scientist and ML Engineer"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top"
              />
              {/* Minimal caption -- bottom only, not floating over subject */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/55 to-transparent">
                <p className="text-[11px] font-mono text-white/80">{c.affiliation}</p>
              </div>
            </motion.div>

            {/* CELL C: 3 Metric Tiles -- separated from portrait */}
            <motion.div
              custom={2}
              variants={bentoVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {/* Stat 1: 12+ National Competitions */}
              <div className="border border-border rounded-sm bg-card p-3 sm:p-4 flex flex-col justify-between min-h-[100px]">
                <p className="text-2xl font-bold font-mono text-amber-500 dark:text-amber-400 leading-none">
                  {c.stat1v}
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground mt-2">{c.stat1l}</p>
                  <p className="text-[10px] font-mono text-muted-foreground leading-tight mt-0.5">
                    {c.stat1s}
                  </p>
                </div>
              </div>

              {/* Stat 2: Research grants */}
              <div className="border border-border rounded-sm bg-card p-3 sm:p-4 flex flex-col justify-between min-h-[100px]">
                <p className="text-base sm:text-lg font-bold font-mono text-emerald-500 dark:text-emerald-400 leading-none">
                  {c.stat2v}
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground mt-2">{c.stat2l}</p>
                  <p className="text-[10px] font-mono text-muted-foreground leading-tight mt-0.5">
                    {c.stat2s}
                  </p>
                </div>
              </div>

              {/* Stat 3: Projects */}
              <div className="border border-border rounded-sm bg-card p-3 sm:p-4 flex flex-col justify-between min-h-[100px]">
                <p className="text-2xl font-bold font-mono text-accent leading-none">
                  {c.stat3v}
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground mt-2">{c.stat3l}</p>
                  <p className="text-[10px] font-mono text-muted-foreground leading-tight mt-0.5">
                    {c.stat3s}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-center gap-3 mt-8 text-muted-foreground"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] font-mono tracking-[0.12em] uppercase opacity-50">
            {lang === "en" ? "scroll to explore" : "gulir untuk menjelajahi"}
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

      </div>
    </section>
  );
};
