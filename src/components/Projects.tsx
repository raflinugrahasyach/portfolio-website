import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "NLP & LLM", "Computer Vision", "Analytics"];

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis Engine",
    description: "Real-time sentiment analysis using BERT transformers for social media monitoring and brand reputation management.",
    category: "NLP & LLM",
    tags: ["Python", "BERT", "PyTorch", "Streamlit"],
    metric: "95% Accuracy",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.",
    category: "Analytics",
    tags: ["Python", "Scikit-learn", "XGBoost"],
    metric: "92% Accuracy",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Document Classification System",
    description: "Automated document classification using transformer models, processing 10K+ documents daily.",
    category: "NLP & LLM",
    tags: ["HuggingFace", "Transformers", "LangChain"],
    metric: "10K+ Daily",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Object Detection Pipeline",
    description: "Real-time object detection system using YOLO for inventory management and quality control.",
    category: "Computer Vision",
    tags: ["TensorFlow", "YOLO", "OpenCV"],
    metric: "30 FPS",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Sales Forecasting Dashboard",
    description: "Interactive Tableau dashboard with time series forecasting for strategic business planning.",
    category: "Analytics",
    tags: ["Python", "Tableau", "Prophet"],
    metric: "98% Forecast Accuracy",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Chatbot with LLM Integration",
    description: "Intelligent customer service chatbot powered by GPT-4, handling 1000+ queries daily with high satisfaction.",
    category: "NLP & LLM",
    tags: ["GPT-4", "LangChain", "Python"],
    metric: "4.8/5 Rating",
    featured: true,
    image: "/placeholder.svg",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-muted-foreground text-lg">
            Data science solutions that drive measurable business impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {project.metric}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
