// ============================================================
// src/components/Experience.tsx
// Hybrid Quantum Bento — Upgraded timeline with bento-style framing
// Linear Git-Log inspired timeline for Work/Orgs, clean tables for Edu/Certs
// No glass, no large radii. Full bilingual i18n preserved.
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import { workExperience, education, certifications, organization } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";


const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" } },
});

const TABS = [
  { key: "work",  en: "Work",            id: "Pengalaman" },
  { key: "edu",   en: "Education",       id: "Pendidikan" },
  { key: "certs", en: "Certifications",  id: "Sertifikasi" },
  { key: "orgs",  en: "Organizations",   id: "Organisasi" },
] as const;

type TabKey = typeof TABS[number]["key"];

export const Experience = () => {
  const { lang, t, tArr } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("work");

  const sectionCopy = {
    en: { label: "BACKGROUND", heading: "Experience & Qualifications" },
    id: { label: "LATAR BELAKANG", heading: "Pengalaman & Kualifikasi" },
  }[lang];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-3">
            {sectionCopy.label}
          </p>
          <h2 className="text-3xl font-bold text-foreground">{sectionCopy.heading}</h2>
        </div>

        {/* Tab bar */}
        <div
          className="flex gap-1 mb-10 border-b border-border overflow-x-auto"
          role="tablist"
          aria-label={lang === "en" ? "Experience tabs" : "Tab pengalaman"}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.key
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {tab[lang]}
            </button>
          ))}
        </div>

        {/* WORK — vertical timeline with bento-accented cards */}
        {activeTab === "work" && (
          <div className="space-y-0">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0 ring-2 ring-accent/20" />
                  {idx < workExperience.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content bento-card */}
                <div className="flex-1 border border-border rounded-sm bg-card p-5 mb-2 hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t(exp.role)}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
  
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-0.5 sm:mt-0 sm:text-right shrink-0 bg-muted px-2 py-0.5 rounded-sm self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {tArr(exp.details).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "edu" && (
          <div className="space-y-0">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0 ring-2 ring-accent/20" />
                  {idx < education.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 border border-border rounded-sm bg-card p-5 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t(edu.degree)}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.school}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-0.5 sm:mt-0 shrink-0 bg-muted px-2 py-0.5 rounded-sm self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(edu.details)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CERTIFICATIONS — compact clinical table */}
        {activeTab === "certs" && (
          <div className="border border-border rounded-sm overflow-hidden">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="py-3.5 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-border last:border-b-0 hover:bg-muted/40 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground sm:text-right whitespace-nowrap shrink-0 bg-muted px-2 py-0.5 rounded-sm self-start sm:self-center">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* ORGANIZATIONS */}
        {activeTab === "orgs" && (
          <div className="space-y-0">
            {organization.map((org, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                  {idx < organization.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 border border-border rounded-sm bg-card p-5 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t(org.role)}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{org.org}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-0.5 sm:mt-0 shrink-0 bg-muted px-2 py-0.5 rounded-sm self-start">
                      {org.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {tArr(org.details).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

