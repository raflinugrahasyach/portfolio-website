// ============================================================
// src/data/awards.ts - Competitions, grants, delegations, publications
// Bilingual (EN/ID) schema
// ============================================================
import type { Bilingual } from "@/context/LanguageContext";

export const competitions: Bilingual[] = [
  {
    en: "1st Place, Hasanuddin Statistics Event I, Universitas Hasanuddin (2026)",
    id: "Juara 1, Hasanuddin Statistics Event I, Universitas Hasanuddin (2026)",
  },
  {
    en: "1st Place, National Statistics Challenge, Universitas Brawijaya (2025)",
    id: "Juara 1, National Statistics Challenge, Universitas Brawijaya (2025)",
  },
  {
    en: "1st Place, Scientific Paper Competition (EXASTI 1.0), Universitas Negeri Jakarta (2025)",
    id: "Juara 1, Lomba Karya Ilmiah (EXASTI 1.0), Universitas Negeri Jakarta (2025)",
  },
  {
    en: "2nd Place, Airlangga Statistics Essay Competition (ASEC), Universitas Airlangga (2025)",
    id: "Juara 2, Airlangga Statistics Essay Competition (ASEC), Universitas Airlangga (2025)",
  },
  {
    en: "2nd Place, Statistics Analysis Week - Jambore Statistika XIII, Universitas Mulawarman (2024)",
    id: "Juara 2, Statistics Analysis Week - Jambore Statistika XIII, Universitas Mulawarman (2024)",
  },
  {
    en: "2nd Place, Statistics Essay Competition (Dokter Data), Universitas Diponegoro (2024)",
    id: "Juara 2, Lomba Essay Statistika (Dokter Data), Universitas Diponegoro (2024)",
  },
  {
    en: "3rd Place, Indonesian Vocational Olympiad (OLIVIA) X, FPTVI (2025)",
    id: "Juara 3, Olimpiade Vokasi Indonesia (OLIVIA) X, FPTVI (2025)",
  },
  {
    en: "2nd Best Team, ISE! Academy Python Programming for Data Science (Intermediate Class), ITS (2024)",
    id: "Tim Terbaik 2, ISE! Academy Pemrograman Python untuk Data Science (Kelas Menengah), ITS (2024)",
  },
  {
    en: "Top 5 Finalist, Jatim Datathon, East Java Communication & Informatics Office (2025)",
    id: "Top 5 Finalis, Jatim Datathon, Dinas Kominfo Jawa Timur (2025)",
  },
  {
    en: "Top 5 Finalist, National Statistics Challenge, Universitas Brawijaya (2024)",
    id: "Top 5 Finalis, National Statistics Challenge, Universitas Brawijaya (2024)",
  },
  {
    en: "Top 7 Finalist, Airlangga Statistics Essay Competition (ASEC), Universitas Airlangga (2024)",
    id: "Top 7 Finalis, Airlangga Statistics Essay Competition (ASEC), Universitas Airlangga (2024)",
  },
  {
    en: "Top 10 Finalist, Data Competition - Information System Expo, Universitas Multimedia Nusantara (2024)",
    id: "Top 10 Finalis, Kompetisi Data - Information System Expo, Universitas Multimedia Nusantara (2024)",
  },
];

export const grants: Bilingual[] = [
  {
    en: "Student Researcher, ITS Research Fund (PI: Dr. Noviyanti Santoso) - IDR 50,000,000 institutionally funded project (2025)",
    id: "Peneliti Mahasiswa, Dana Riset ITS (PI: Dr. Noviyanti Santoso) - Proyek didanai institusi IDR 50.000.000 (2025)",
  },
  {
    en: "Growth Stage Funding, HETI Student Youngpreneurship (Upgrade UMKM), ITS & Partners - IDR 25,000,000 (2025)",
    id: "Pendanaan Growth Stage, HETI Student Youngpreneurship (Upgrade UMKM), ITS & Mitra - IDR 25.000.000 (2025)",
  },
  {
    en: "Early Stage Funding, ITS Youth Technopreneur (Upgrade UMKM), ITS & Partners - IDR 12,500,000 (2024)",
    id: "Pendanaan Early Stage, ITS Youth Technopreneur (Upgrade UMKM), ITS & Mitra - IDR 12.500.000 (2024)",
  },
];

export const delegations: Bilingual[] = [
  {
    en: "ITS Delegate, Statistics Essay Competition (SEC) - Satria Data (2024 & 2025)",
    id: "Delegasi ITS, Lomba Essay Statistika (SEC) - Satria Data (2024 & 2025)",
  },
  {
    en: "ITS Delegate, ICT Business Development - GemasTIK (2024)",
    id: "Delegasi ITS, Pengembangan Bisnis TIK - GemasTIK (2024)",
  },
  {
    en: "ITS Delegate, Student Creativity Program (PKM-K) (2024)",
    id: "Delegasi ITS, Program Kreativitas Mahasiswa (PKM-K) (2024)",
  },
  {
    en: "Invited Participant (FGD), Ministry of Cooperatives & SMEs (2024)",
    id: "Peserta Undangan (FGD), Kementerian Koperasi & UMKM (2024)",
  },
];

export interface Publication {
  title: string;
  journal: string;
  year: string;
  desc: Bilingual;
  link?: string;
  badge?: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    title: "Explainable AI and Gated Recurrent Units for Predicting Stock Movements in the IDX ESG Leaders Index",
    journal: "Springer Lecture Notes on Data Engineering and Communications Technologies (LNDECT), Vol. 302",
    year: "2026",
    desc: {
      en: "Presented at the 4th International Conference on Data Science and Emerging Technologies (DaSET 2025), UNITAR International University. Applied Explainable AI (SHAP) with GRU-based architectures for stock price prediction in the Indonesian ESG market.",
      id: "Dipresentasikan di Konferensi Internasional ke-4 tentang Data Science dan Teknologi Berkembang (DaSET 2025), UNITAR International University. Menerapkan Explainable AI (SHAP) dengan arsitektur berbasis GRU untuk prediksi harga saham di pasar ESG Indonesia.",
    },
    badge: "Springer",
    doi: "10.1007/978-3-032-23407-0_29",
  },
  {
    title: "Multi-Modal Stock Price Prediction: Time-Series Forecasting, Sentiment Analysis, and Data Fusion in the Indonesian Market",
    journal: "ITS Research Fund - Student Researcher (IDR 50M Grant)",
    year: "2025-2026",
    desc: {
      en: "Developed an LSTM with Attention Mechanism model for 8 LQ45-listed technology and financial stocks. Combined historical price data with news sentiment (IndoSBERT, IndoRoBERTa) via multimodal data fusion. Applied SHAP for explainability.",
      id: "Mengembangkan model LSTM dengan Attention Mechanism untuk 8 saham teknologi dan keuangan yang terdaftar di LQ45. Menggabungkan data harga historis dengan sentimen berita (IndoSBERT, IndoRoBERTa) melalui fusi data multimodal. Menerapkan SHAP untuk explainability.",
    },
    badge: "ITS Grant",
  },
  {
    title: "Smart Sentiment Monitoring System - SVM-Based Digital Reputation Monitoring for Universities",
    journal: "Cross-Institution Research Collaboration (ITS & Universitas Airlangga)",
    year: "2026",
    desc: {
      en: "Contributed to data collection (web scraping from Google Maps and YouTube, 2,716 final data points) and text preprocessing for an SVM-based sentiment classification system monitoring university digital reputation.",
      id: "Berkontribusi pada pengumpulan data (web scraping dari Google Maps dan YouTube, 2.716 titik data akhir) dan pra-pemrosesan teks untuk sistem klasifikasi sentimen berbasis SVM yang memantau reputasi digital universitas.",
    },
    badge: "Collaboration",
    link: "https://vokasi.unair.ac.id/smart-sentiment-monitoring-system-solusi-pemantauan-reputasi-digital-perguruan-tinggi-berbasis-machine-learning/",
  },
  {
    title: "Analisis Faktor-Faktor Tingkat Penggunaan E-Commerce di Setiap Provinsi Indonesia Menggunakan Analisis Faktor",
    journal: "Socius: Jurnal Penelitian Ilmu-Ilmu Sosial, Vol. 2, No. 4, pp. 147-158",
    year: "2024",
    desc: {
      en: "Statistical modeling using Factor Analysis / PCA to identify key drivers of e-commerce adoption across Indonesian provinces. Co-authored with F.M. Rizqi and S.P. Wulandari. DOI: 10.5281/zenodo.14187265.",
      id: "Pemodelan statistik menggunakan Analisis Faktor / PCA untuk mengidentifikasi pendorong utama adopsi e-commerce di seluruh provinsi Indonesia. Ditulis bersama F.M. Rizqi dan S.P. Wulandari. DOI: 10.5281/zenodo.14187265.",
    },
    doi: "10.5281/zenodo.14187265",
  },
];

