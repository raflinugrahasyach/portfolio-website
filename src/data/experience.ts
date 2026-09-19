// ============================================================
// src/data/experience.ts - Work, Education, Certifications, Organizations
// Bilingual (EN/ID) schema
// ============================================================
import type { Bilingual } from "@/context/LanguageContext";

export interface WorkExperience {
  role: Bilingual;
  company: string;
  period: string;
  details: Bilingual<string[]>;
}

export interface Education {
  school: string;
  degree: Bilingual;
  period: string;
  details: Bilingual;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Organization {
  role: Bilingual;
  org: string;
  period: string;
  details: Bilingual<string[]>;
}

export const workExperience: WorkExperience[] = [
  {
    role: {
      en: "Data Scientist Intern",
      id: "Magang Data Scientist",
    },
    company: "Center for Resilient Data Analytics and Computational Systems (CERDAS), Universiti Teknologi PETRONAS, Malaysia",
    period: "Mar 2026 - Jul 2026",
    details: {
      en: [
        "Stress-tested and evaluated the performance of local Large Language Models (LLMs) on an NVIDIA Jetson AGX Orin edge-AI device, scaling concurrent request loads (1, 4, and 8 users) to pinpoint the exact point of performance degradation, using model- and system-level performance metrics.",
        "Built a pipeline to transform raw HTML data into structured JSON, and a Local Inference Layer to support on-device model processing.",
        "Developed an analytics dashboard (React, Vite, Tailwind CSS) to visualize LLM testing results and performance analysis.",
        "Designed scientific infographics to support the center's research publication output.",
      ],
      id: [
        "Menguji stres dan mengevaluasi kinerja Large Language Models (LLM) lokal pada perangkat edge-AI NVIDIA Jetson AGX Orin, menskalakan beban permintaan konkuren (1, 4, dan 8 pengguna) untuk menentukan titik pasti degradasi kinerja, menggunakan metrik performa tingkat model dan sistem.",
        "Membangun pipeline untuk mentransformasi data HTML mentah menjadi JSON terstruktur, dan Lapisan Inferensi Lokal untuk mendukung pemrosesan model on-device.",
        "Mengembangkan dashboard analitik (React, Vite, Tailwind CSS) untuk memvisualisasikan hasil pengujian LLM dan analisis performa.",
        "Merancang infografis ilmiah untuk mendukung keluaran publikasi riset pusat penelitian.",
      ],
    },
  },
  {
    role: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    company: "PT Automasi Visi Analitika Optima (Avalon AI Group)",
    period: "Mar 2024 - Jul 2025",
    details: {
      en: [
        "Developed an AI-powered Android learning application (Kotlin) integrating Speech-to-Text, Text-to-Speech, and Speech-to-Speech capabilities for voice-based interaction, as part of the Software Engineering and Operations division.",
        "Organized and led AI-themed webinars and seminars attended by 100+ participants.",
        "Contributed to internal R&D on transformer-based NLP pipelines for Indonesian language understanding.",
      ],
      id: [
        "Mengembangkan aplikasi pembelajaran Android bertenaga AI (Kotlin) yang mengintegrasikan kemampuan Speech-to-Text, Text-to-Speech, dan Speech-to-Speech untuk interaksi berbasis suara, sebagai bagian dari divisi Rekayasa Perangkat Lunak dan Operasional.",
        "Mengorganisir dan memimpin webinar serta seminar bertema AI yang dihadiri 100+ peserta.",
        "Berkontribusi pada R&D internal untuk pipeline NLP berbasis transformer untuk pemahaman bahasa Indonesia.",
      ],
    },
  },
  {
    role: {
      en: "Co-Founder & Chief Analytics Officer (CAO)",
      id: "Co-Founder & Chief Analytics Officer (CAO)",
    },
    company: "Upgrade UMKM, PT Digital Nusantara Innovations",
    period: "Jan 2024 - Jan 2026",
    details: {
      en: [
        "Co-founded Upgrade UMKM (5-person founding team) and served as Chief Analytics Officer, leading the development of BizTrack Monitor, an AI-powered business analytics platform for SMEs.",
        "Built BizTrack Monitor's chat-based AI consultant feature, which analyzes uploaded business data (customer demographics, product sales) and generates natural-language executive reports with actionable business recommendations.",
        "Designed data-collection schemas to aggregate sales data from multiple sources, improving data consistency for analytics.",
        "Contributed to website development, SEO, and digital marketing to grow clients' online sales presence.",
      ],
      id: [
        "Co-founder Upgrade UMKM (tim pendiri 5 orang) dan menjabat sebagai Chief Analytics Officer, memimpin pengembangan BizTrack Monitor, platform analitik bisnis bertenaga AI untuk UMKM.",
        "Membangun fitur konsultan AI berbasis chat BizTrack Monitor, yang menganalisis data bisnis yang diunggah (demografi pelanggan, penjualan produk) dan menghasilkan laporan eksekutif bahasa alami dengan rekomendasi bisnis yang dapat ditindaklanjuti.",
        "Merancang skema pengumpulan data untuk mengagregasi data penjualan dari berbagai sumber, meningkatkan konsistensi data untuk analitik.",
        "Berkontribusi pada pengembangan website, SEO, dan pemasaran digital untuk menumbuhkan kehadiran penjualan daring klien.",
      ],
    },
  },
  {
    role: {
      en: "Freelance Digital Business Analyst",
      id: "Analis Bisnis Digital Freelance",
    },
    company: "CV Putra Terbaik",
    period: "Jun 2023 - Feb 2026",
    details: {
      en: [
        "Managed full-stack website development and technical SEO, contributing to up to a 25% improvement in advertising effectiveness.",
        "Analyzed digital-marketing performance (keyword analysis, content tracking, Google Analytics).",
        "Designed marketing collateral (brochures, Instagram feed content, posters, company profile) to support brand presence.",
      ],
      id: [
        "Mengelola pengembangan website full-stack dan SEO teknis, berkontribusi pada peningkatan efektivitas periklanan hingga 25%.",
        "Menganalisis kinerja pemasaran digital (analisis kata kunci, pelacakan konten, Google Analytics).",
        "Merancang materi pemasaran (brosur, konten feed Instagram, poster, profil perusahaan) untuk mendukung kehadiran merek.",
      ],
    },
  },
];

export const education: Education[] = [
  {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: {
      en: "Bachelor of Applied Science (D4), Business Statistics",
      id: "Sarjana Sains Terapan (D4), Statistika Bisnis",
    },
    period: "Aug 2022 - Aug 2026",
    details: {
      en: "Focus: Machine Learning, Deep Learning, NLP, Time-Series Forecasting, Statistical Modeling. GPA: 3.51/4.00. Relevant coursework: Text Mining, Deep Learning, Big Data Analytics.",
      id: "Fokus: Machine Learning, Deep Learning, NLP, Peramalan Deret Waktu, Pemodelan Statistik. IPK: 3,51/4,00. Mata kuliah relevan: Text Mining, Deep Learning, Analitik Big Data.",
    },
  },
  {
    school: "Binar Academy (BINAR x Diskominfo Kota Tangerang Selatan)",
    degree: {
      en: "Data Science Bootcamp",
      id: "Bootcamp Data Science",
    },
    period: "Jun 2024 - Sep 2024",
    details: {
      en: "Best Performance Team; overall score 87/100. Built a neural network / LSTM-based sentiment analysis model; handled data cleansing, model evaluation, and REST API development (Flask, Swagger UI).",
      id: "Tim Performa Terbaik; skor keseluruhan 87/100. Membangun model analisis sentimen berbasis neural network / LSTM; menangani pembersihan data, evaluasi model, dan pengembangan REST API (Flask, Swagger UI).",
    },
  },
  {
    school: "Avalon AI Community",
    degree: {
      en: "Senior Member, Data Scientist Division",
      id: "Anggota Senior, Divisi Data Scientist",
    },
    period: "Nov 2024 - Nov 2025",
    details: {
      en: "Delivered Deep Learning and data visualization training materials to new members. Participated in multiple external data science competitions as a community representative.",
      id: "Menyampaikan materi pelatihan Deep Learning dan visualisasi data kepada anggota baru. Berpartisipasi dalam berbagai kompetisi data science eksternal sebagai perwakilan komunitas.",
    },
  },
];

export const certifications: Certification[] = [
  { title: "Junior/Associate Data Scientist", issuer: "BNSP / LSP ITS", year: "2025" },
  { title: "Data Science Bootcamp Graduate", issuer: "ISE! Academy Python Programming for Data Science, ITS", year: "2024" },
  { title: "Machine Learning & Data Visualization Track", issuer: "Dicoding Indonesia", year: "2023-2024" },
  { title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding Indonesia", year: "2024" },
  { title: "Belajar Dasar Visualisasi Data", issuer: "Dicoding Indonesia", year: "2024" },
  { title: "Memulai Pemrograman dengan Python", issuer: "Dicoding Indonesia", year: "2023" },
  { title: "Belajar Dasar Data Science & SQL", issuer: "Dicoding Indonesia", year: "2023" },
  { title: "Basic Student Management Skills (LKMM-TD)", issuer: "Institut Teknologi Sepuluh Nopember (ITS)", year: "2023" },
  { title: "Basic Entrepreneurial Management Skills (LKMW-TD)", issuer: "Institut Teknologi Sepuluh Nopember (ITS)", year: "2022" },
];

export const organization: Organization[] = [
  {
    role: { en: "Senior Member, Data Scientist Division", id: "Anggota Senior, Divisi Data Scientist" },
    org: "Avalon AI Community",
    period: "Nov 2024 - Nov 2025",
    details: {
      en: [
        "Delivered Deep Learning and data visualization training materials to new division members.",
        "Participated in multiple external data science competitions, including a 3rd-place finish at OLIVIA X (2025).",
      ],
      id: [
        "Menyampaikan materi pelatihan Deep Learning dan visualisasi data kepada anggota divisi baru.",
        "Berpartisipasi dalam berbagai kompetisi data science eksternal, termasuk juara 3 di OLIVIA X (2025).",
      ],
    },
  },
  {
    role: { en: "Head of Kopma E-Sport", id: "Ketua Kopma E-Sport" },
    org: "Kopma dr. Angka ITS Diesnatalis",
    period: "Mar 2023 - Jun 2024",
    details: {
      en: [
        "Led the E-Sports Division (6 members), organizing 2 tournaments with 100+ participants.",
        "Managed logistics, sponsorships, and audience engagement to increase community outreach.",
        "Built partnerships with external sponsors, improving division credibility and funding.",
      ],
      id: [
        "Memimpin Divisi E-Sport (6 anggota), menyelenggarakan 2 turnamen dengan 100+ peserta.",
        "Mengelola logistik, sponsor, dan keterlibatan audiens untuk meningkatkan jangkauan komunitas.",
        "Membangun kemitraan dengan sponsor eksternal, meningkatkan kredibilitas dan pendanaan divisi.",
      ],
    },
  },
  {
    role: { en: "Business E-Commerce Staff", id: "Staf E-Commerce Bisnis" },
    org: "Kopma dr. Angka ITS",
    period: "Feb 2023 - Jan 2024",
    details: {
      en: [
        "Managed and optimized product listings on Shopee and Tokopedia, improving search discoverability.",
        "Handled customer inquiries and order processing for smooth end-to-end transactions.",
      ],
      id: [
        "Mengelola dan mengoptimalkan daftar produk di Shopee dan Tokopedia, meningkatkan visibilitas pencarian.",
        "Menangani pertanyaan pelanggan dan pemrosesan pesanan untuk transaksi end-to-end yang lancar.",
      ],
    },
  },
  {
    role: { en: "Data Management Staff", id: "Staf Manajemen Data" },
    org: "GERIGI ITS 2023",
    period: "July 2023 - Aug 2023",
    details: {
      en: [
        "Managed and organized new student intake data, ensuring 100% accuracy in record-keeping.",
        "Assisted and guided 10+ students per group, collaborating with mentors on data documentation.",
      ],
      id: [
        "Mengelola dan mengorganisir data penerimaan mahasiswa baru, memastikan akurasi 100% dalam pencatatan.",
        "Membantu dan membimbing 10+ mahasiswa per kelompok, berkolaborasi dengan mentor dalam dokumentasi data.",
      ],
    },
  },
  {
    role: { en: "Infographics Staff", id: "Staf Infografis" },
    org: "Ramadhan di Kampus (RDK) ITS",
    period: "Jan 2023 - Apr 2023",
    details: {
      en: [
        "Designed 10+ infographic campaigns for Instagram, increasing audience engagement by 30%.",
        "Created visual content accessible to 4,000+ ITS students and developed a consistent visual branding strategy.",
      ],
      id: [
        "Merancang 10+ kampanye infografis untuk Instagram, meningkatkan keterlibatan audiens sebesar 30%.",
        "Membuat konten visual yang dapat diakses oleh 4.000+ mahasiswa ITS dan mengembangkan strategi branding visual yang konsisten.",
      ],
    },
  },
];
