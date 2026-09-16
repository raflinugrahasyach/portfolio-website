// ============================================================
// src/components/Awards.tsx
// Hybrid Quantum Bento -- Hall of Fame Architecture
// Fix: Removed getRankStyle conditional coloring -- uniform monochrome
//      competition record below Hall of Fame. Full-card publication anchors.
//      UNAIR link wired in for Smart Sentiment.
// ============================================================
import { motion } from "framer-motion";
import { competitions, grants, delegations, publications } from "@/data/awards";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Trophy, ArrowUpRight } from "lucide-react";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" } },
});

const badgeColors: Record<string, string> = {
  Springer:      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800",
  "ITS Grant":   "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800",
  Collaboration: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800",
};

export const Awards = () => {
  const { lang, t } = useLanguage();

  const copy = {
    en: {
      label: "HONORS & RESEARCH",
      heading: "Awards & Publications",
      publications: "Research Publications",
      hallOfFame: "HALL OF FAME",
      hallHeading: "National 1st Place Championships",
      competitions: "Competition Record",
      grants: "Research Funding",
      delegations: "Delegations & Appointments",
      viewDoi: "DOI",
      viewArticle: "View Article",
    },
    id: {
      label: "PENGHARGAAN & RISET",
      heading: "Penghargaan & Publikasi",
      publications: "Publikasi Riset",
      hallOfFame: "HALL OF FAME",
      hallHeading: "Juara 1 Kompetisi Nasional",
      competitions: "Rekam Kompetisi",
      grants: "Pendanaan Riset",
      delegations: "Delegasi & Penunjukan",
      viewDoi: "DOI",
      viewArticle: "Lihat Artikel",
    },
  }[lang];

  // Extract 1st place entries for Hall of Fame; rest goes to clinical grid
  const firstPlaceEntries = competitions.filter((item) => t(item).startsWith("1st"));
  const otherCompetitions = competitions.filter((item) => !t(item).startsWith("1st"));

  return (
    <section id="awards" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-3">
            {copy.label}
          </p>
          <h2 className="text-3xl font-bold text-foreground">{copy.heading}</h2>
        </div>

        {/* PUBLICATIONS: Full-card interactive anchors */}
        <div className="mb-14">
          <h3 className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-5">
            {copy.publications}
          </h3>
          <div className="space-y-3">
            {publications.map((pub, idx) => {
              const href = pub.link ?? (pub.doi ? `https://doi.org/${pub.doi}` : undefined);
              const Wrapper = href ? "a" : "div";
              const wrapperProps = href
                ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp(idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`group block p-5 border border-border rounded-sm bg-card transition-all duration-200 ${
                      href ? "hover:border-accent/40 hover:-translate-y-0.5 cursor-pointer" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {pub.badge && (
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-sm ${badgeColors[pub.badge] || "bg-muted text-muted-foreground"}`}>
                            {pub.badge}
                          </span>
                        )}
                        <span className="text-xs font-mono text-muted-foreground">{pub.year}</span>
                      </div>
                      {href && (
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1 leading-snug group-hover:text-accent transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-accent mb-2">{pub.journal}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(pub.desc)}</p>
                    {href && (
                      <div className="flex items-center gap-1 mt-3 text-xs text-accent font-medium">
                        <ExternalLink className="w-3 h-3" />
                        <span>{pub.doi ? copy.viewDoi : copy.viewArticle}</span>
                      </div>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* HALL OF FAME: 3x 1st Place dominant amber bento cards */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <Trophy className="w-4 h-4 text-amber-500" />
            <p className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground">
              {copy.hallOfFame} -- {copy.hallHeading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {firstPlaceEntries.map((item, idx) => {
              const text = t(item);
              const parts = text.split(",");
              const rank = parts[0];
              const rest = parts.slice(1).join(",").trim();
              const contestName = rest.split(",")[0].trim();
              const institution = rest.split(",").slice(1).join(",").trim();
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp(idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="border border-amber-200 dark:border-amber-800/50 rounded-sm bg-amber-50/50 dark:bg-amber-950/10 p-5"
                >
                  <p className="text-3xl font-mono font-bold text-amber-500 dark:text-amber-400 leading-none mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mb-1">{rank}</p>
                  <p className="text-sm font-semibold text-foreground leading-snug mb-1">{contestName}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{institution}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* LOWER TIER: 3-column clinical monochrome grid (NO rank coloring) */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-10">
          {/* Competition Record -- uniform monochrome, no rank color */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
              {copy.competitions}
            </h3>
            <div className="divide-y divide-border">
              {otherCompetitions.map((item, idx) => {
                const text = t(item);
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp(idx)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="py-3 first:pt-0"
                  >
                    <p className="text-xs font-semibold text-foreground">{text.split(",")[0]}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                      {text.split(",").slice(1).join(",").trim()}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Grants */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
              {copy.grants}
            </h3>
            <div className="divide-y divide-border">
              {grants.map((item, idx) => {
                const text = t(item);
                const parts = text.split(" - ");
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp(idx)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="py-3 first:pt-0"
                  >
                    <p className="text-xs font-semibold font-mono text-emerald-600 dark:text-emerald-400">
                      {parts[parts.length - 1]}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                      {parts.slice(0, parts.length - 1).join(" - ")}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Delegations */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
              {copy.delegations}
            </h3>
            <div className="divide-y divide-border">
              {delegations.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp(idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="py-3 first:pt-0"
                >
                  <p className="text-xs text-foreground leading-snug">{t(item)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};