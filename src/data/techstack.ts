// ============================================================
// src/data/techstack.ts - Tech stack (bilingual)
// ============================================================
import type { Bilingual } from "@/context/LanguageContext";

export interface TechCategory {
  title: Bilingual;
  items: string[];
}

export const techCategories: TechCategory[] = [
  { title:{ en:"Languages", id:"Bahasa Pemrograman" }, items:["Python","SQL","R","JavaScript","PHP"] },
  { title:{ en:"Core AI & ML", id:"AI & ML Utama" }, items:["TensorFlow","PyTorch","Scikit-learn","Pandas","NumPy","XGBoost","LightGBM"] },
  { title:{ en:"NLP & LLMs", id:"NLP & LLM" }, items:["HuggingFace","BERT","IndoBERT","Transformers","VADER","NLTK","LSTM"] },
  { title:{ en:"Data & Visualization", id:"Data & Visualisasi" }, items:["Streamlit","Tableau","Gephi","Matplotlib","Seaborn","Power BI"] },
  { title:{ en:"Web & APIs", id:"Web & API" }, items:["FastAPI","Flask","React","Vite","CodeIgniter","Gradio"] },
  { title:{ en:"Tools & Infra", id:"Tools & Infrastruktur" }, items:["Git/GitHub","Jupyter","Docker","NVIDIA Jetson","Shiny","Swagger UI"] },
];
