import { motion } from "framer-motion";
import { Trophy, FileText, Medal, Flag, Coins } from "lucide-react";

const competitions = [
  "1st Place, National Statistics Challenge 2025, Universitas Brawijaya",
  "1st Place, Scientific Paper Competition (EXASTI 1.0), BEMP STI (2025)",
  "2nd Place, Airlangga Statistics Essay Competition (ASEC), Universitas Airlangga (2025)",
  "2nd Place, Statistics Analysis Week, Universitas Mulawarman (2024)",
  "2nd Place, Statistics Essay Competition (Dokter Data), Universitas Diponegoro (2024)",
  "2nd Best Team, ISE! Academy Data Science Bootcamp, ITS (2024)",
  "3rd Place, Indonesian Vocational Olympiad (OLIVIA) X, Universitas Brawijaya (2025)",
  "Top 5 Finalist, Jatim Datathon, Communication and Informatics Office East Java (2025)",
  "Top 5 Finalist, National Statistics Challenge 2024, Universitas Brawijaya",
  "Top 7 Finalist, Airlangga Statistics Essay Competition (ASEC), Unair (2024)",
  "Top 10 Finalist, Data Competition - ISE, UMN (2024)",
  "Semifinalist, Business Plan Competition - Karya Salemba Empat (2024)"
];

const grants = [
  "Research Grant Recipient (IDR 50M), ITS Research Fund (2025)",
  "Growth Stage Qualifier (IDR 25M), HETI Student Youngpreneurship (2025)",
  "Early Stage Qualifier (IDR 12.5M), ITS Youth Technopreneur (2024)"
];

const delegations = [
  "ITS Delegate, Statistics Essay Competition (SEC) - Satria Data (2024 & 2025)",
  "ITS Delegate, ICT Business Development - GemasTIK (2024)",
  "ITS Delegate, Student Creativity Program (PKM-K) (2024)",
  "Invited Participant (FGD), Ministry of Cooperatives & SMEs (2024)"
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
            Recognition of excellence in Data Science, Statistics, and Entrepreneurship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Competitions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Trophy className="w-6 h-6" />
                Competitions
              </h3>
              <div className="space-y-4">
                {competitions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
                  >
                    <Medal className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Grants, Delegations, Research */}
          <div className="space-y-10">
            {/* Grants */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Coins className="w-6 h-6" />
                Grants & Funding
              </h3>
              <div className="space-y-4">
                {grants.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-success mt-2 shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Delegations */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Flag className="w-6 h-6" />
                Delegations
              </h3>
              <div className="space-y-4">
                {delegations.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-1 bg-secondary rounded-full shrink-0">
                        <Flag className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div id="research">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <FileText className="w-6 h-6" />
                Publications
              </h3>
              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-base mb-2 leading-snug">{pub.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{pub.desc}</p>
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
      </div>
    </section>
  );
};