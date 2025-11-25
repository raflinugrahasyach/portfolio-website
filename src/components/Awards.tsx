import { motion } from "framer-motion";
import { Trophy, FileText } from "lucide-react";

const awards = [
  {
    title: "1st Place National Statistics Challenge",
    organization: "National Statistics Association",
    year: "2024",
    type: "award",
  },
  {
    title: "Research Grant Recipient",
    organization: "Data Science Foundation",
    year: "2023",
    type: "award",
  },
  {
    title: "Best Data Visualization Award",
    organization: "Analytics Summit Conference",
    year: "2023",
    type: "award",
  },
];

const publications = [
  {
    title: "Analysis of E-Commerce Adoption Factors in Emerging Markets",
    journal: "Socius: Sociological Research for a Dynamic World",
    year: "2024",
    type: "research",
  },
  {
    title: "Predictive Modeling Techniques for Customer Behavior Analysis",
    journal: "Journal of Data Science Applications",
    year: "2023",
    type: "research",
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="py-20 px-6">
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
            Recognition and contributions to the field of data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold mb-2">{award.title}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{award.organization}</span>
                    <span className="font-medium text-primary">{award.year}</span>
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
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold mb-2">{pub.title}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="italic">{pub.journal}</span>
                    <span className="font-medium text-primary">{pub.year}</span>
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
