import { motion } from "framer-motion";
import { Trophy, FileText, Medal } from "lucide-react";

const awards = [
  {
    title: "1st Place National Statistics Challenge",
    organization: "Universitas Brawijaya",
    year: "2025",
  },
  {
    title: "1st Place Scientific Paper Competition (EXASTI 1.0)",
    organization: "BEMP STI",
    year: "2025",
  },
  {
    title: "Research Grant Recipient (IDR 50M)",
    organization: "ITS Research Fund - Type A Partnership",
    year: "2025",
  },
  {
    title: "2nd Place Airlangga Statistics Essay Competition",
    organization: "Universitas Airlangga",
    year: "2025",
  },
  {
    title: "2nd Place Statistics Analysis Week",
    organization: "Universitas Mulawarman",
    year: "2024",
  },
];

const publications = [
  {
    title: "Analysis of E-Commerce Adoption Factors in Indonesian Provinces Using Factor Analysis",
    journal: "Socius: Jurnal Penelitian Ilmu-Ilmu Sosial",
    year: "2024",
    desc: "Statistical modeling to identify key drivers of digital adoption across provinces."
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Honors & Research</h2>
          <p className="text-muted-foreground text-lg">
            Recognition of excellence in Data Science and Statistics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Selected Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                    <div className="mt-1 p-2 bg-accent/10 rounded-full">
                        <Medal className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">{award.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>{award.organization}</span>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <span className="font-medium text-primary">{award.year}</span>
                        </div>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div id="research">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-lg mb-2 leading-snug">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{pub.desc}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    <span className="italic mr-2">{pub.journal}</span>
                    <span className="font-bold border-l border-border pl-2">{pub.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};