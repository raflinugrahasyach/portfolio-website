import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist Intern",
    company: "Avalon AI Group (PT Automasi Visi Analitika Optima)",
    period: "Mar 2024 – July 2025",
    achievements: [
      "Developed an AI-powered learning app integrating Speech-to-Text (STT) and Text-to-Speech (TTS) models.",
      "Managed end-to-end data pipeline: collected raw voice samples, performed error analysis, and validated transcriptions.",
      "Conducted rigorous dataset cleaning & labeling to reduce noise, directly ensuring high-quality input for model training.",
    ],
  },
  {
    role: "Lead Data Analyst",
    company: "Upgrade UMKM (PT Digital Nusantara Innovations)",
    period: "Jan 2024 – Present",
    achievements: [
      "Spearheaded the development of 'BizTrack Monitor', an AI-powered analytics dashboard for SMEs.",
      "Designed robust data collection schemas to aggregate sales data from multiple sources, ensuring consistency.",
      "Analyzed digital marketing trends to optimize SEO strategies, driving data-backed decision making.",
    ],
  },
  {
    role: "Freelance Data Scientist",
    company: "Independent Consultant",
    period: "Dec 2023 – Present",
    achievements: [
      "Engineered a dual-labeling pipeline (VADER & BERT) for Stunting Program sentiment analysis with 95.25% accuracy.",
      "Fine-tuned ResNet34 for Diabetic Retinopathy classification, improving accuracy to 81% via augmentation.",
      "Built NLP Sentiment Analysis models for e-commerce (Shopee), handling slang normalization and text cleaning.",
    ],
  },
  {
    role: "IT Business Analyst",
    company: "Putra Terbaik Agency",
    period: "Jun 2023 – Present",
    achievements: [
      "Analyzed user traffic data using Google Analytics, providing actionable insights that increased ad campaign effectiveness.",
      "Managed website SEO strategies through keyword analysis and technical optimization.",
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
            Building data-driven solutions across AI, Analytics, and Business Intelligence
          </p>
        </motion.div>

        <div className="relative">
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
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20 bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-muted-foreground">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, aidx) => (
                      <div key={aidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm md:text-base">{achievement}</p>
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