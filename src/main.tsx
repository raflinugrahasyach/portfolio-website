import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The "Nerd Trap" Console Easter Egg
console.log(
  "%c🚀 Ah, looking under the hood? The architecture is clean, the models are trained. Let's talk data and engineering: raflinugrahasyach26@gmail.com",
  "color: #1d6fee; font-weight: 800; font-size: 13px; padding: 8px 12px; background: #0f172a; border-left: 4px solid #1d6fee; border-radius: 4px; font-family: 'JetBrains Mono', monospace;"
);

createRoot(document.getElementById("root")!).render(<App />);
