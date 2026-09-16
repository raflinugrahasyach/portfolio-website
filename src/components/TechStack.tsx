import { motion } from "framer-motion";
import { techCategories } from "@/data/techstack";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" } },
});

const sectionCopy = {
  en: { label: "CAPABILITIES", heading: "Technical Stack" },
  id: { label: "KEMAMPUAN", heading: "Tumpukan Teknologi" },
};

export const TechStack = () => {
  const { lang, t } = useLanguage();
  const c = sectionCopy[lang];

  return (
    <section id="techstack" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-3">{c.label}</p>
          <h2 className="text-3xl font-bold text-foreground">{c.heading}</h2>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title.en}
              variants={fadeUp(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-3"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.06em]">
                {t(cat.title)}
              </p>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-foreground font-medium py-1 px-2 rounded bg-muted border border-border/60 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
