import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R"],
  },
  {
    title: "Core",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
  },
  {
    title: "NLP/LLM",
    items: ["HuggingFace", "BERT", "Transformers", "LangChain"],
  },
  {
    title: "Visualization",
    items: ["Streamlit", "Tableau", "Power BI", "Gephi"],
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground">
            Technologies and tools I use to build data-driven solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
