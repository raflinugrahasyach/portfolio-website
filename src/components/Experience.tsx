import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist Intern",
    company: "Tech Innovation Labs",
    period: "Jan 2024 - Present",
    achievements: [
      "Achieved 95% accuracy in sentiment analysis model, improving customer insights by 40%",
      "Developed automated data pipeline processing 100K+ records daily",
      "Led team of 3 interns in building predictive analytics dashboard",
    ],
  },
  {
    role: "Lead Data Analyst",
    company: "Digital Solutions Inc",
    period: "Jun 2023 - Dec 2023",
    achievements: [
      "Increased forecast accuracy by 28% using advanced time series models",
      "Created executive dashboards reducing reporting time by 60%",
      "Implemented A/B testing framework used across 5 product teams",
    ],
  },
  {
    role: "Data Analytics Associate",
    company: "StartUp Analytics Co",
    period: "Jan 2023 - May 2023",
    achievements: [
      "Built customer segmentation model identifying 3 key revenue opportunities",
      "Automated weekly reporting, saving 15 hours per week",
      "Mentored 2 junior analysts in statistical analysis techniques",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            Building data-driven solutions across diverse industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20 bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, aidx) => (
                      <div key={aidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
