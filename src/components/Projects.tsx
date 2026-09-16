// ============================================================
// src/components/Projects.tsx
// Hybrid Quantum Bento -- Uniform filterable grid for all 37 projects.
// Spotlight section removed (UX tax). Category filter always visible.
// Real GitHub deep-links from projects.ts data.
// Full bilingual i18n preserved.
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { projects, featuredProjects, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const sectionCopy = {
  en: {
    label: "PORTFOLIO",
    heading: "Projects",
    featuredLabel: "Featured Work",
    viewAll: `View All ${projects.length} Projects`,
    collapse: "Show Featured Only",
    allProjects: "All Projects",
  },
  id: {
    label: "PORTOFOLIO",
    heading: "Proyek",
    featuredLabel: "Proyek Unggulan",
    viewAll: `Lihat Semua ${projects.length} Proyek`,
    collapse: "Tampilkan Unggulan",
    allProjects: "Semua Proyek",
  },
};

const categoryColors: Record<string, string> = {
  "Deep Learning":      "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  "Machine Learning":   "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
  "NLP & LLM":          "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  "Data Visualization": "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  "R & Statistics":     "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  "Web & Apps":         "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",
  "Dicoding":           "bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400",
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.32, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-32 overflow-hidden border-b border-border bg-muted/40 relative flex flex-col justify-between p-3.5 select-none font-mono bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-[length:20px_20px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between text-muted-foreground/60 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground/70">
            <Terminal className="w-3 h-3 text-muted-foreground/70" />
            <span>src/preview.py</span>
          </div>
        </div>

        {/* Code / Terminal Skeleton */}
        <div className="space-y-1.5 my-auto">
          <div className="flex items-center gap-2">
            <span className="text-accent text-[11px] font-mono font-semibold">$</span>
            <div className="h-2 w-32 bg-muted-foreground/20 rounded animate-pulse" />
          </div>
          <div className="h-1.5 w-44 bg-muted-foreground/15 rounded ml-3" />
          <div className="h-1.5 w-24 bg-muted-foreground/10 rounded ml-3" />
        </div>

        {/* Terminal Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/50 border-t border-border/40 pt-1.5">
          <span className="text-emerald-500/80 font-medium">READY</span>
          <span className="truncate max-w-[150px]">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-32 overflow-hidden border-b border-border bg-muted/50 relative">
      <img
        src={src}
        alt={alt}
        width={400}
        height={128}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
};

export const Projects = () => {
  const { lang, t } = useLanguage();
  const c = sectionCopy[lang];
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredAll = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filteredAll : featuredProjects;

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-3">
            {c.label}
          </p>
          <h2 className="text-3xl font-bold text-foreground">{c.heading}</h2>
        </div>

        {/* Category filter -- always visible */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (!showAll) setShowAll(true);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors border ${
                activeCategory === cat && showAll
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured label when in featured mode */}
        {!showAll && (
          <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
            {c.featuredLabel}
          </p>
        )}

        {/* Project grid -- 3-col, uniform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                className="group flex flex-col rounded-sm border border-border bg-card hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <ProjectImage src={project.image} alt={t(project.title)} />

                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-sm ${categoryColors[project.category] || "bg-muted text-muted-foreground"}`}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{project.metric}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {t(project.title)}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1 line-clamp-3">
                    {t(project.description)}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs font-mono px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <GitBranch className="w-3 h-3" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* View all / show featured toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) setActiveCategory("All");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm border border-border text-foreground hover:bg-muted transition-colors"
          >
            {showAll ? (
              <><ChevronUp className="w-4 h-4" />{c.collapse}</>
            ) : (
              <><ChevronDown className="w-4 h-4" />{c.viewAll}</>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};