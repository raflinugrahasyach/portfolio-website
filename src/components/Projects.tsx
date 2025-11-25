import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, GitBranch } from "lucide-react";

const categories = ["All", "NLP & LLM", "Computer Vision", "Analytics"];

const projects = [
  {
    id: 1,
    title: "Shopee App Review Analysis",
    description: "Scraped 3,000+ reviews and built a Topic Modeling (LDA) & Sentiment Analysis system. Identified key user pain points in shipping and app features using SVM.",
    category: "NLP & LLM",
    tags: ["Python", "LDA", "IndoBERT", "SVM"],
    metric: "87.3% Accuracy",
    featured: true,
    image: "/project-shopee.jpg", 
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 2,
    title: "Diabetic Retinopathy Classification",
    description: "Utilized Transfer Learning with ResNet34 to classify the severity of diabetic retinopathy from retinal images. Implemented augmentation to handle class imbalance.",
    category: "Computer Vision",
    tags: ["PyTorch", "ResNet34", "CNN", "Medical AI"],
    metric: "80.6% Accuracy",
    featured: true,
    image: "/project-retinopathy.png",
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 3,
    title: "BizTrack: SME Analytics Dashboard",
    description: "Spearheaded the development of an AI-powered analytics dashboard for SMEs to track financial performance, sales trends, and operational metrics (Upgrade UMKM).",
    category: "Analytics",
    tags: ["AI Dashboard", "Data Analytics", "Business Intel"],
    metric: "Live Production",
    featured: true,
    image: "/project-biztrack.png", // Jangan lupa siapkan gambar ini!
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 4,
    title: "Sentiment Analysis: Indo Social Media",
    description: "Compared LSTM and MLP models to classify sentiments in 11,000+ Indonesian social media comments. Deployed the best model via Flask API with Swagger UI.",
    category: "NLP & LLM",
    tags: ["Python", "LSTM", "Flask API", "Deep Learning"],
    metric: "85% Accuracy (LSTM)",
    featured: false,
    image: "/project-lstm.png", 
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 5,
    title: "EV Perception Analysis (Mobil Listrik)",
    description: "Analyzed public perception of Electric Vehicles from YouTube comments using TF-IDF and Machine Learning. Logistic Regression emerged as the best model.",
    category: "NLP & LLM",
    tags: ["Python", "Logistic Regression", "TF-IDF", "Sastrawi"],
    metric: "65.1% Accuracy",
    featured: false,
    image: "/project-ev.png", 
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 6,
    title: "Rock-Paper-Scissors Classifier",
    description: "Built a CNN model to classify hand gestures for Rock-Paper-Scissors game. Optimized using Adam optimizer and categorical crossentropy loss.",
    category: "Computer Vision",
    tags: ["TensorFlow", "Keras", "CNN", "Image Proc"],
    metric: "91% Val Accuracy",
    featured: false,
    image: "/project-rps.png", 
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 7,
    title: "Vehicle CO2 Emission Prediction",
    description: "Developed a predictive model using XGBoost Regressor to estimate vehicle CO2 emissions based on engine features for environmental sustainability.",
    category: "Analytics",
    tags: ["Python", "XGBoost", "Regression"],
    metric: "RMSE 20.34",
    featured: false,
    image: "/project-emission.png",
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 8,
    title: "Kuningan Socio-Economic Dashboard",
    description: "Interactive Power BI dashboard visualizing poverty depth, HDI, and regional revenue to support government decision-making in Kuningan Regency.",
    category: "Analytics",
    tags: ["Power BI", "Data Viz", "Public Policy"],
    metric: "Gov Insights",
    featured: false,
    image: "/project-kuningan.png",
    link: "https://github.com/raflinugrahasyach",
  },
  {
    id: 9,
    title: "Bike Sharing Exploratory Analysis",
    description: "Comprehensive EDA on bike-sharing datasets to uncover trends related to weather, seasons, and time, visualizing peak rental periods.",
    category: "Analytics",
    tags: ["Python", "Data Analysis", "Visualization"],
    metric: "Trend Discovery",
    featured: false,
    image: "/project-bike.webp", 
    link: "https://github.com/raflinugrahasyach",
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
                  ? "bg-primary text-primary-foreground shadow-md"
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
              className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-default ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden bg-muted">
                {/* Placeholder Image Logic */}
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"; // Fallback jika gambar belum ada
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
                  {project.metric}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-1 block">{project.category}</span>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors">
                            <GitBranch className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal px-2 py-1 bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};