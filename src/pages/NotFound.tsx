import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background coordinate grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg border border-border bg-card p-8 md:p-10 rounded-md shadow-sm"
      >
        {/* Telemetry Header */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
              ANOMALY DETECTED // HTTP 404
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            CONFIDENCE: 0.00%
          </span>
        </div>

        {/* Main Content */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-destructive/10 text-destructive text-xs font-mono font-medium">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>UNRESOLVED_ROUTE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            404: Dataset Not Found
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The predictive model failed to find the URL you requested. The data point might be an outlier.
          </p>

          {/* Path Inspector Telemetry Box */}
          <div className="mt-4 p-3 bg-muted/50 border border-border rounded font-mono text-xs text-muted-foreground flex items-center gap-2 overflow-x-auto">
            <Terminal className="w-4 h-4 text-accent shrink-0" />
            <span className="text-foreground/70 truncate">TARGET: {location.pathname}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button asChild className="w-full sm:w-auto font-mono text-xs tracking-wide">
            <Link to="/" className="inline-flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Main Pipeline
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
