import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Users, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const workExperience = [
  {
    role: "Data Scientist Intern",
    company: "Avalon AI Group (PT Automasi Visi Analitika Optima)",
    period: "Mar 2024 – July 2025",
    details: [
      "Developed an AI-powered learning app integrating Speech-to-Text (STT) and Text-to-Speech (TTS) models.",
      "Presented AI workshops to 100+ attendees; collaborated with data & engineering teams."
    ],
  },
  {
    role: "Chief Analytics Officer",
    company: "Upgrade UMKM (PT Digital Nusantara Innovations)",
    period: "Jan 2024 – Present",
    details: [
      "Spearheaded the development of 'BizTrack Monitor', an AI-powered analytics dashboard for SMEs to track financial performance.",
      "Designed robust data collection schemas to aggregate sales data from multiple sources, ensuring data consistency for analytics.",
      "Managed end-to-end web solutions and SEO optimization to boost digital sales channels."
    ],
  },
  {
    role: "Freelance Data Scientist",
    company: "Independent Consultant",
    period: "Dec 2023 – Present",
    details: [
      "Developed 3+ AI & machine learning models for various clients, improving automation and decision-making.",
      "Engineered a dual-labeling pipeline using VADER & BERT for sentiment analysis with 95.25% accuracy.",
      "Fine-tuned ResNet34 for Diabetic Retinopathy classification (81% accuracy) and built NLP models for Shopee reviews.",
      "Debugged and optimized portfolio allocation models in R using MST & MIS for LQ45 index."
    ],
  },
  {
    role: "IT Business Analyst",
    company: "CV Putra Terbaik",
    period: "Jun 2023 – Present",
    details: [
      "Analyzed user traffic data using Google Analytics, increasing ad campaign effectiveness by 25%.",
      "Managed website SEO strategies through keyword analysis and technical optimization.",
      "Designed and managed responsive websites, improving page speed and user retention."
    ],
  },
];

const education = [
  {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Applied Bachelor's Degree in Business Statistics",
    period: "Aug 2022 – Present",
    details: "Specialization: ML, NLP, Deep Learning. GPA: 3.38/4.00. Relevant Coursework: Text Mining, Big Data Analytics.",
  },
  {
    school: "Binar Academy",
    degree: "Data Science Bootcamp",
    period: "Jun 2024 – Aug 2024",
    details: "Top-performing team. Built ANN-based NLP model (85% accuracy) with focus on text preprocessing.",
  },
  {
    school: "Avalon AI Community",
    degree: "Data Scientist Member",
    period: "Nov 2024 – Present",
    details: "Weekly studies on transformers, ML/DL, and competition strategy. Active in dataset preparation discussions.",
  },
];

const certifications = [
  {
    title: "Junior/Associate Data Scientist",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
  },
  {
    title: "Data Science Bootcamp Graduate",
    issuer: "ISE! Data Science Academy, ITS",
    year: "2024",
  },
  {
    title: "Machine Learning & Data Visualization Track",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
  {
    title: "Belajar Dasar Data Science & SQL",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
  {
    title: "Basic Student Management Skills (LKMM-TD)",
    issuer: "Institut Teknologi Sepuluh Nopember (ITS)",
    year: "2023",
  },
  {
    title: "Basic Entrepreneurial Management Skills (LKMW-TD)",
    issuer: "Institut Teknologi Sepuluh Nopember (ITS)",
    year: "2022",
  }
];

const organization = [
  {
    role: "Head of Kopma E-Sport",
    org: "Kopma dr. Angka ITS Diesnatalis",
    period: "Mar 2023 – Jun 2024",
    details: [
      "Led the E-Sports Division (6 members), organizing 2 tournaments with 100+ participants.",
      "Managed logistics, sponsorships, and audience engagement to increase outreach.",
      "Built partnerships with external sponsors, improving division credibility."
    ],
  },
  {
    role: "Business E-Commerce Staff",
    org: "Kopma dr. Angka ITS",
    period: "Feb 2023 – Jan 2024",
    details: [
      "Managed and optimized product listings on Shopee and Tokopedia, improving discoverability.",
      "Handled customer inquiries and order processing for smooth transactions.",
      "Coordinated shipping and logistics operations."
    ],
  },
  {
    role: "Data Management Staff",
    org: "GERIGI ITS 2023",
    period: "July 2023 – Aug 2023",
    details: [
      "Managed and organized new student data, ensuring 100% accuracy in record-keeping.",
      "Assisted and guided 10+ students per group, collaborating with mentors on data documentation."
    ],
  },
  {
    role: "Infographics Staff",
    org: "Ramadhan di Kampus (RDK) ITS",
    period: "Jan 2023 – Apr 2023",
    details: [
      "Designed 10+ infographic campaigns for Instagram, increasing engagement by 30%.",
      "Created visual content to simplify Ramadan studies, accessible to 4,000+ students.",
      "Developed a consistent visual branding strategy."
    ],
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Qualifications</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey, education, and certifications
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto p-1 bg-muted rounded-xl">
              <TabsTrigger value="work" className="px-4 py-2 rounded-lg">Work</TabsTrigger>
              <TabsTrigger value="education" className="px-4 py-2 rounded-lg">Education</TabsTrigger>
              <TabsTrigger value="certifications" className="px-4 py-2 rounded-lg">Certification</TabsTrigger>
              <TabsTrigger value="organization" className="px-4 py-2 rounded-lg">Organization & Commitee</TabsTrigger>
            </TabsList>
          </div>

          {/* WORK TAB - TIMELINE STYLE */}
          <TabsContent value="work" className="animate-in fade-in-50">
            <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-8 pb-2">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 md:pl-12">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
                  
                  <div className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-muted rounded-lg shrink-0 mt-1 hidden md:block">
                            <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold">{exp.role}</h3>
                            <p className="text-muted-foreground font-medium text-sm md:text-base">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs md:text-sm font-medium bg-secondary px-3 py-1 rounded-full w-fit h-fit whitespace-nowrap mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      {exp.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-success mt-1 shrink-0" />
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {detail}
                            </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* EDUCATION TAB */}
          <TabsContent value="education" className="space-y-6 animate-in fade-in-50">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.school}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">{edu.degree}</p>
                  </div>
                  <span className="text-xs md:text-sm bg-secondary px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{edu.details}</p>
              </div>
            ))}
          </TabsContent>

          {/* CERTIFICATIONS TAB */}
          <TabsContent value="certifications" className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in-50">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <span className="text-xs font-medium text-primary mt-1 block">{cert.year}</span>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* ORGANIZATION TAB */}
          <TabsContent value="organization" className="space-y-6 animate-in fade-in-50">
            {organization.map((org, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {org.role}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">{org.org}</p>
                  </div>
                  <span className="text-xs md:text-sm bg-secondary px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{org.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm md:text-base ml-1">
                  {org.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};