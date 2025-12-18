
import { Project, Skill, Experience, Publication, Achievement, Certification } from './types';

export const USER_INFO = {
  name: "Sumudu Ratnayake",
  title: "Aspiring AI/ML Engineer & Researcher",
  tagline: "Architecting Intelligent AI/ML Agents & Immersive Game Dev Realities",
  about: "I am a 4th-year Computer Science Undergraduate with a deep focus in Artificial Intelligence and Machine Learning. My core expertise is in cognitive AI system design, specifically building intelligent backends using Multi-Agent Systems, Ontologies, and Knowledge Graphs. I possess strong skills in ML model optimization and Data Science. I am currently exploring Extended Reality, including VR/AR for Game Development. My goal is to merge cognitive AI architectures with immersive environments.",
  email: "ishadi.leoni@gmail.com",
  phone: "+94 76 645 4318",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/sumudu-ratnayake-782b90235",
  github: "https://github.com/Lilvamp237",
  avatar: "https://github.com/Lilvamp237.png",
  resume: "/cv/Sumudu Ratnayake_CV.pdf"
};

// High-level competencies (Concepts)
export const SKILLS: Skill[] = [
  // AI/ML
  { name: "Classical Machine Learning", level: 50, category: "AI/ML" },
  { name: "Deep Learning & Neural Networks", level: 45, category: "AI/ML" },
  { name: "Retrieval-Augmented Generation (RAG)", level: 10, category: "AI/ML" },
  { name: "Ensemble Methods & Random Forests", level: 45, category: "AI/ML" },
  { name: "Multi-Agent Systems", level: 35, category: "AI/ML" },
  { name: "Model Deployment (Streamlit)", level: 60, category: "AI/ML" },
  { name: "Natural Language Processing", level: 40, category: "AI/ML" },
  { name: "Computer Vision", level: 40, category: "AI/ML" },
  
  // Data & Core
  { name: "Graph Data Modeling", level: 40, category: "Data" },
  { name: "Predictive Analytics", level: 50, category: "Data" },
  { name: "Full-Stack Engineering", level: 55, category: "Dev" },
  
  // Design & XR
  { name: "XR/Spatial Computing", level: 20, category: "XR" },
  { name: "UI/UX Design", level: 40, category: "Design" }
];

// Soft Skills / System Drivers
export const SOFT_SKILLS = [
  { name: "Algorithmic Problem Solving", description: "Decomposing complex, ambiguous challenges into executable, logical sub-routines." },
  { name: "Collaborative Synergy", description: "Effective synchronization and operation within cross-functional human squads." },
  { name: "Adaptive Plasticity", description: "Rapid runtime assimilation of emerging technologies, frameworks, and paradigms." },
  { name: "Technical Communication", description: "Lossless translation of complex high-level logic into stakeholder-friendly formats." }
];

// Specific Tools & Technologies
export const TECH_STACK = {
  "Languages": [
    "Python", "Java", "C++", "Dart", "TypeScript", "SQL", "C#"
  ],
  "AI Frameworks": [
    "TensorFlow", "Keras", "Scikit-Learn", "DeepFace", "RASA"//, "LangChain", "LangGraph"
  ],
  "Web & Mobile": [
    "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Flutter"//, "Android Studio", "Node.js"
  ],
  "Data & Databases": [
    "Pandas", "Matplotlib", "Neo4j", "PostgreSQL", "MySQL", "Firebase", "Supabase"//, "Qdrant"
  ],
  "Cloud & DevOps": [
    "Git", "Docker", "Azure ML", "Postman", "Oracle Cloud"
  ],
  "XR & Hardware": [
    "Arduino", "Unity", "VR Foundation", "IoT Sensors"//, "Meta Quest SDK"
  ]
};

export const EDUCATION: Experience[] = [
  {
    title: "BSc (Hons) in Computer Science",
    role: "Undergraduate",
    date: "2023 - Present",
    description: "Focusing in AI/ML, Data Science, and Game Development. Thesis focus: Loading..."
  },
  {
    title: "Secondary Education",
    role: "GCE Advanced Level",
    date: "2019 - 2021",
    description: "Physical Science Stream. Combined Mathematics (C), Physics (C), Information Communication Technology (B)."
  },
  {
    title: "Secondary Education",
    role: "GCE Ordinary Level",
    date: "2018",
    description: "Passed with 5 Distinctions (A) including Mathematics, Information Technology, and English, and 4 Very Good Passes (B)."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c1",
    name: "GitHub Copilot",
    provider: "Microsoft",
    date: "Dec 2025",
    badgeUrl: "/badges/copilot.png",
    verificationLink: "https://learn.microsoft.com/api/credentials/share/en-us/Sumudu05-1888/7E05411E38180AC0?sharingId"
  },
  {
    id: "c2",
    name: "Neo4j Certified Professional",
    provider: "Neo4j",
    date: "Dec 2025",
    badgeUrl: "/badges/neo4j_logo.jpeg",
    verificationLink: "https://graphacademy.neo4j.com/c/1cf2e865-fa34-4ab9-be28-d889e67dbbb9/"
  },
  {
    id: "c3",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    provider: "Oracle",
    date: "Sep 2025",
    badgeUrl: "/badges/OCI25AICFA.jpeg",
    verificationLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BCA92DFDF1EE5C98047C5CD7EF1090710F40E633B651CD271D84425D0981BF90"
  },
  {
    id: "c4",
    name: "Intro to Machine Learning",
    provider: "Kaggle",
    date: "Aug 2025",
    badgeUrl: "/badges/kaggle.jpeg",
    verificationLink: "https://www.kaggle.com/learn/certification/sumuu237/intro-to-machine-learning"
  },
  {
    id: "c5",
    name: "Unity Essentials Pathway",
    provider: "Unity",
    date: "Jul 2025",
    badgeUrl: "/badges/unity-essentials-pathway.png",
    verificationLink: "https://www.credly.com/badges/20d7c767-4e53-460c-8d4c-192b02759373/linked_in_profile"
  },
  {
    id: "c6",
    name: "Postman API Fundamentals Student Expert",
    provider: "Postmanapi",
    date: "Feb 2025",
    badgeUrl: "badges/postman.jpeg",
    verificationLink: "https://api.badgr.io/public/assertions/yKS5WPrYQJC1nIIOwBfPUw"    
  },
  {
    id: "c7",
    name: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    date: "Feb 2023",
    badgeUrl: "/badges/microsoft-certified-azure-ai-fundamentals.png",
    verificationLink: "https://www.credly.com/badges/e41626c1-8082-491c-a89e-391a0294e5dc/public_url"
  },
  {
    id: "c8",
    name: "CCNA: Introduction to Networks",
    provider: "Cisco",
    date: "Nov 2023",
    badgeUrl: "/badges/cisco_logo.jpeg",
  }
  //{
    //id: "c8",
    //name: "LangChain & LLM App Dev",
    //provider: "DeepLearning.AI",
    //date: "2023",
    //badgeUrl: "https://ui-avatars.com/api/?name=L+C&background=16a34a&color=fff&size=128&bold=true",
    //verificationLink: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/"
  //}
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Intelligent Bookstore Management with Ontology & Multi-Agent Simulation",
    description: "An autonomous bookstore simulation integrating OWL ontologies, SWRL reasoning, multi-agent systems, and graph databases with real-time visualization.",
    longDescription: "This project explores the fusion of semantic web technologies and agent-based modeling to simulate an intelligent, self-managing bookstore. An OWL ontology defines the domain knowledge and business rules, while SWRL rules and a Pellet reasoner enable automated inference such as low-stock detection. Customer and employee agents, built using the Mesa framework, act autonomously based on inferred knowledge, coordinating purchases and inventory restocking. A Neo4j graph database captures complex relationships and transaction histories, while a Streamlit dashboard provides real-time monitoring, control, and visualization of the entire system.",
    skillsEarned: [
      "Knowledge Representation & Reasoning",
      "Multi-Agent Systems",
      "Semantic Web Technologies",
      "Graph Databases",
      "Agent-Based Simulation",
      "System Architecture Design"
    ],
    techStack: [
      "Python",
      "OWL / SWRL",
      "owlready2",
      "Mesa",
      "Neo4j",
      "Streamlit",
      "Pandas",
      "Plotly"
    ],
    categories: ["AI/ML", "Agent Systems"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=5"
  },
  {
    id: "p2",
    title: "Sup_Audio - Deep Learning Audio Denoising System",
    description: "A deep learning-powered audio denoising application that uses a U-Net neural network and a PyQt5 interface to remove background noise from audio recordings.",
    longDescription: "Sup_Audio is an end-to-end audio denoising system that combines deep learning–based signal enhancement with an interactive desktop interface. A U-Net convolutional neural network is trained on noisy audio samples to learn spectrogram-level noise suppression. The system processes audio through STFT-based feature extraction, performs inference on fixed-length spectrogram chunks, and reconstructs clean audio using inverse STFT. A PyQt5 GUI enables real-time recording, waveform visualization, playback, and automatic saving of denoised outputs, making the model accessible for practical, user-facing use cases.",
    skillsEarned: [
      "Audio Signal Processing",
      "Deep Learning Model Design",
      "Spectrogram-Based Learning",
      "Desktop Application Development",
      "Model Inference Pipelines"
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyQt5",
      "librosa",
      "NumPy",
      "SciPy",
      "matplotlib"
    ],
    categories: ["AI/ML", "Mobile & Desktop"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=6"
  },
  {
    id: "p3",
    title: "Telecom Customer Churn Prediction with Genetic Algorithm Optimization",
    description: "A machine learning system for telecom churn prediction that compares a baseline Logistic Regression model with a Genetic Algorithm-optimized feature selection approach.",
    longDescription: "This project addresses customer churn prediction in the telecommunications domain using historical multi-month usage data. A baseline Logistic Regression model is developed using extensive feature engineering over revenue, usage, behavioral, and trend-based attributes. To enhance performance and efficiency, a Genetic Algorithm implemented with the DEAP framework is used to optimize feature selection by maximizing the F1-score. An interactive Streamlit dashboard enables side-by-side model comparison, performance visualization, feature importance analysis, and inspection of the genetic algorithm’s evolutionary process.",
    skillsEarned: [
      "Customer Churn Modeling",
      "Feature Engineering",
      "Evolutionary Algorithms",
      "Model Evaluation & Comparison",
      "Applied Business Analytics"
    ],
    techStack: [
      "Python",
      "scikit-learn",
      "DEAP",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Pickle"
    ],
    categories: ["Data Science", "AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=9"
  },
  {
    id: "p4",
    title: "Smart Home Energy Tracker & Optimization Platform",
    description: "A full-stack web application that monitors household energy consumption, predicts future usage with machine learning, and optimizes costs using semantic web technologies.",
    longDescription: "This project implements a three-phase intelligent energy management platform combining data analytics, machine learning, and semantic optimization. A Flask-based backend with SQLite tracks historical energy usage and exposes filterable REST APIs, while a React frontend provides real-time dashboards and interactive visualizations. A Linear Regression model predicts 24-hour energy consumption using engineered temporal, lag, and rolling statistical features. An RDF-based ontology with SPARQL rules enables semantic reasoning over time-of-use pricing to generate actionable energy-saving recommendations and simulate alternative usage scenarios.",
    skillsEarned: [
      "Full-Stack Web Development",
      "Time-Series Feature Engineering",
      "Energy Consumption Forecasting",
      "Semantic Web Reasoning",
      "REST API Design",
      "Data-Driven Optimization"
    ],
    techStack: [
      "React",
      "Flask",
      "SQLite",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "RDF / SPARQL",
      "rdflib",
      "Recharts"
    ],
    categories: ["Web & Full-Stack", "Data Science", "AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=8"
  },
  {
    id: "p5",
    title: "Athena",
    description: "An AI-powered platform supporting cognitive wellness and dementia care management for patients and caregivers.",
    longDescription: "Athena is a comprehensive web application designed to assist caregivers in monitoring and supporting individuals with dementia. It provides tools for daily activity logging, patient analytics, AI-powered sentiment tracking, medication management, and motivational guidance. The platform also facilitates team collaboration among caregivers and healthcare professionals and includes an interactive AI assistant for support and insights. Built with React frontend and Python/Node.js backend scripts for AI-powered features, Athena combines cognitive wellness management with modern web technologies.",
    skillsEarned: [
      "Full-Stack Web Development",
      "AI & Sentiment Analysis",
      "Data Visualization",
      "Healthcare Tech",
      "Team Collaboration Tools",
      "React & Python Integration"
    ],
    techStack: [
      "React",
      "React Router",
      "Chart.js",
      "React-ChartJS-2",
      "Python",
      "Node.js",
      "CSS3",
      "Jest",
      "React Testing Library"
    ],
    categories: ["Healthcare Tech", "Web & Full-Stack", "AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=16"
  },
  {
    id: "p6",
    title: "CareSync 🏥",
    description: "Healthcare team coordination and burnout management platform for medical professionals, featuring smart scheduling, wellness tracking, and secure team collaboration.",
    longDescription: "CareSync helps medical professionals manage demanding shifts, personal wellness, and team collaboration. Built with Next.js, React, TypeScript, and Supabase, it offers a unified calendar for work/personal schedules, shift swap management, priority-based team announcements, and wellness tracking with habit logs. Row Level Security ensures data privacy, while responsive design supports desktop, tablet, and mobile devices. The platform won 1st Runner-Up at Code with WIE 2025.",
    skillsEarned: [
      "Full-Stack Web Development",
      "Healthcare Software Design",
      "Team Collaboration Tools",
      "Database Security (RLS)",
      "Responsive UI/UX"
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
      "Recharts",
      "PostgreSQL"
    ],
    categories: ["Healthcare Tech", "Web & Full-Stack"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=13"
  },
  {
    id: "p7",
    title: "Cinnamon Hotels - Agentic Guest Experience Optimizer",
    description: "An AI-powered system that combines customer segmentation, predictive modeling, and agentic workflows to deliver hyper-personalized hotel guest experiences.",
    longDescription: "Developed for the Mini Hackathon Semi-Finals organized by the Statistics Circle, University of Colombo, this project implements a multi-stage AI pipeline for intelligent guest experience optimization in the hospitality domain. Unsupervised learning (K-Means) is used to discover behavioral customer segments, while a supervised Random Forest model predicts guest segments in real time using over 19 behavioral, demographic, and psychographic features. An agentic workflow enhanced with Retrieval-Augmented Generation (RAG) integrates hotel data, weather forecasts, and local events to automatically generate context-aware, segment-specific guest communications via a Streamlit-based interactive dashboard.",
    skillsEarned: [
      "Customer Segmentation",
      "Predictive Modeling",
      "Agentic Workflows",
      "Retrieval-Augmented Generation (RAG)",
      "Feature Engineering",
      "Applied Machine Learning"
    ],
    techStack: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Streamlit",
      "matplotlib",
      "pickle"
    ],
    categories: ["AI/ML", "Data Science", "Agent Systems"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: "p8",
    title: "Mental Health-Driven Drug Category Prediction",
    description: "A machine learning system that predicts drug categories based on mental health conditions and usage patterns using XGBoost with PSO-based feature selection.",
    longDescription: "Developed for the preliminary round of the ICDS 2025 Mini-Hackathon organized by the University of Colombo in collaboration with OCTAVE (JKH Group), this project focuses on multi-class drug category prediction from mental health–related data. The solution integrates a robust preprocessing pipeline with scaling, imputation, and Particle Swarm Optimization (PSO) for feature selection, followed by an XGBoost classifier for high-performance prediction. The complete inference pipeline supports automated encoding/decoding, model serialization, and reproducible submission generation.",
    skillsEarned: [
      "Feature Selection Optimization",
      "Gradient Boosting",
      "Healthcare Data Modeling",
      "Machine Learning Pipelines",
      "Model Deployment & Serialization"
    ],
    techStack: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "pandas",
      "NumPy",
      "joblib"
    ],
    categories: ["Data Science", "Healthcare Tech", "AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    id: "p9",
    title: "AI-Powered Face Recognition Attendance System",
    description: "A Python-based system that uses face recognition to automatically mark attendance, eliminating manual input and proxy attendance.",
    longDescription: "This project implements a real-time face recognition attendance system using OpenCV and DeepFace. Users can register with multiple facial images, and the system verifies identities during daily attendance marking. The multi-page PyQt5 GUI provides intuitive workflows for registration, attendance tracking, and weekly statistics visualization. The system ensures high accuracy through augmentation and embedding-based matching, storing attendance records locally for auditing and analysis.",
    skillsEarned: [
      "Computer Vision",
      "Face Recognition",
      "Real-Time AI Systems",
      "PyQt5 GUI Development",
      "Data Handling & Visualization"
    ],
    techStack: [
      "Python",
      "OpenCV",
      "DeepFace",
      "PyQt5",
      "NumPy",
      "SciPy",
      "Matplotlib"
    ],
    categories: ["AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: "p10",
    title: "Smart Study Companion",
    description: "A full-stack web application that helps students manage study sessions, take notes, and leverage AI-powered tools for personalized learning assistance.",
    longDescription: "Smart Study Companion is designed to enhance students' productivity and learning outcomes. It features session tracking, organized note-taking, and a suite of AI tools including text summarization, study plan generation, flashcard creation, question answering, sentiment analysis, keyword extraction, and quiz generation. The platform also provides progress analytics and personalized recommendations. Built with Django REST Framework backend and React frontend, it integrates Hugging Face models like BART and DistilBERT for intelligent study assistance.",
    skillsEarned: [
      "Full-Stack Web Development",
      "AI Integration",
      "Natural Language Processing",
      "Progress Analytics",
      "JWT Authentication",
      "REST API Design"
    ],
    techStack: [
      "Django",
      "Django REST Framework",
      "React",
      "React Router",
      "SQLite / PostgreSQL",
      "JWT",
      "Hugging Face Transformers",
      "PyTorch",
      "CSS3",
      "Vite"
    ],
    categories: ["Web & Full-Stack", "AI/ML"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=15"
  },
  {
    id: "p11",
    title: "Moot Society of Sri Lanka Law College - Official Website",
    description: "A modern, responsive full-stack website built with Next.js and Strapi CMS to showcase events, achievements, news, and gallery for the Moot Society.",
    longDescription: "This project delivers a dynamic, fully-responsive website for the Moot Society of Sri Lanka Law College, integrating a Next.js frontend with a Strapi CMS backend. The platform provides sections for events, achievements, news, gallery, FAQ, and contact information. Advanced UI features include scroll animations, lightbox galleries, and call-to-action components. Strapi enables content management with PostgreSQL/SQLite, media uploads via Cloudinary, and role-based authentication. The site is SEO-optimized, production-ready, and provides a seamless user experience across devices.",
    skillsEarned: [
      "Full-Stack Web Development",
      "Headless CMS Integration",
      "Responsive UI Design",
      "SEO Optimization",
      "Dynamic Content Management"
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Strapi CMS",
      "PostgreSQL / SQLite",
      "Cloudinary",
      "Axios"
    ],
    categories: ["Web & Full-Stack"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: "p12",
    title: "eGOV Monorepo - Runbook and Config",
    description: "A monorepo containing multiple Next.js apps for citizen services, admin management, and analytics, integrated with Supabase and Docker for full-stack development and deployment.",
    longDescription: "This project provides a comprehensive e-Government platform with a Citizen Portal, Admin Portal, and Analytics Dashboard. Built as a Next.js monorepo with shared packages and Supabase Postgres backend (RLS-enabled), it supports secure, multi-role access. The repository includes local development guides, environment setup, Docker Compose for containerized dev, and database management with SQL scripts. It demonstrates large-scale full-stack architecture, multi-app coordination, and modern web deployment practices.",
    skillsEarned: [
      "Full-Stack Web Development",
      "Monorepo Management",
      "Supabase & PostgreSQL",
      "Role-Based Access Control",
      "Docker & DevOps Practices"
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Node.js",
      "npm"
    ],
    categories: ["Web & Full-Stack"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=14"
  },
  {
    id: "p13",
    title: "Sumudu's ToDo List - Smart Android Task Manager",
    description: "A modern Android ToDo application built with Jetpack Compose and Kotlin, featuring offline support, Firebase sync, and exact alarm-based reminders.",
    longDescription: "Sumudu's ToDo List is a full-featured Android task management application designed with a clean MVVM architecture and modern Android development practices. The app supports multiple task lists, secure authentication via Firebase, and seamless cloud synchronization with Firestore. Local persistence is handled using Room to ensure offline functionality, while an exact alarm–based reminder system built with AlarmManager and BroadcastReceivers guarantees timely notifications that persist across device reboots. The UI is implemented using Jetpack Compose and Material Design 3, with adaptive light and dark theming.",
    skillsEarned: [
      "Android App Development",
      "MVVM Architecture",
      "Local & Cloud Data Synchronization",
      "Exact Alarm Scheduling",
      "Modern UI Design with Jetpack Compose"
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Firebase Authentication",
      "Firebase Firestore",
      "Hilt",
      "Coroutines & Flow",
      "AlarmManager"
    ],
    categories: ["Mobile & Desktop"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=7"
  },
  {
    id: "p14",
    title: "Green AI — Sustainable AI Dashboard",
    description: "A web platform built with Vue 3 and Django that visualizes AI model carbon emissions and cloud data center energy use to promote sustainable AI practices.",
    longDescription: "Green AI is a full-stack application designed to raise awareness of AI's environmental impact. The Vue 3 frontend provides interactive maps and dashboards showing real-time carbon intensity, cloud data center sustainability metrics, and AI model emission estimates. The Django backend processes CSV datasets, generates server-side visualizations, and supports decision-making tools for low-carbon AI practices. Users can explore historical and real-time data, compare providers, and receive actionable recommendations to reduce AI-related carbon emissions.",
    skillsEarned: [
      "Full-Stack Web Development",
      "Sustainability Analytics",
      "Data Visualization",
      "Carbon Footprint Estimation",
      "API Integration"
    ],
    techStack: [
      "Vue 3",
      "Django",
      "Python",
      "Node.js",
      "Pandas",
      "Matplotlib",
      "REST APIs"
    ],
    categories: ["Web & Full-Stack", "Data Science"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=12"
  },
  {
    id: "p15",
    title: "Budget Buddy - Desktop Personal Finance Manager",
    description: "A Java Swing-based desktop application for tracking income, expenses, and budgets through an intuitive graphical interface.",
    longDescription: "Budget Buddy was developed as a second-year Object-Oriented Programming group assignment to apply core OOP concepts in a real-world context. Built entirely using Java and Swing, the application enables users to manage income and expense records, automatically calculate balances, and visualize budget summaries. The project follows an MVC-inspired modular structure and demonstrates event-driven programming, reusable GUI components, and local data handling with a foundation for future database integration.",
    skillsEarned: [
      "Object-Oriented Programming",
      "Event-Driven Programming",
      "GUI Design",
      "MVC Architecture",
      "Desktop Application Development"
    ],
    techStack: [
      "Java",
      "Swing",
      "File I/O",
      "MVC Pattern"
    ],
    categories: ["Mobile & Desktop"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "p16",
    title: "Localloop - Full-Stack Service Integration Platform",
    description: "A full-stack application demonstrating seamless REST-based communication between a Ballerina backend and a Vite-powered frontend.",
    longDescription: "Localloop was developed for the Innovate with Ballerina 2025 competition to showcase modern service orchestration using Ballerina. The backend exposes RESTful APIs responsible for data processing and service logic, while the Vite frontend consumes these APIs to deliver a fast, responsive user interface. The project emphasizes clean separation between frontend and backend layers, real-time data flow, and practical API integration patterns using Ballerina.",
    skillsEarned: [
      "Service-Oriented Architecture",
      "REST API Design",
      "Full-Stack Integration",
      "Backend-Frontend Communication"
    ],
    techStack: [
      "Ballerina",
      "Vite",
      "JavaScript",
      "REST APIs",
      "Node.js"
    ],
    categories: ["Web & Full-Stack"],
    github: "https://github.com/<your-repo-link>",
    image: "https://picsum.photos/600/400?random=1"
  },

  
  



















];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Designing Sleepzy: A Mobile Interface for Lucid Dream Induction via Smart Pillow Technology",
    conference: "18th International Research Conference - General Sir John Kotelawala Defence University",
    date: "Oct 2025",
    description: "Proposed a data-driven, user-centered mobile application design (Sleepzy) with a Personalized Adaptive Sleep Intervention (PASI) framework to non-invasively detect REM sleep and customize sensory cues for lucid dream induction and sleep disorder management.",
    link: "https://irc.kdu.ac.lk/2025/documents/2025/abstracts/irc25_abstract_book_foc.pdf",
    status: "Published"
  },
  {
    title: "A Unified Framework for SLA-Aware and Carbon-Conscious Green Cloud Computing: A Holistic Approach to Sustainable",
    conference: "18th International Research Conference - General Sir John Kotelawala Defence University",
    date: "Oct 2025", //"Submitted Aug 2024"
    description: "Developed the Unified Green Cloud Computing Optimization Framework (UGCCOF) to holistically balance energy efficiency, carbon emissions, and Service Level Agreements (SLAs) using a multi-objective decision-making model to overcome the limitations of fragmented single-metric solutions.",
    link: "https://irc.kdu.ac.lk/2025/documents/2025/abstracts/irc25_abstract_book_foc.pdf",
    //status: "Under Review"
    status: "Published"
  },
  {
    title: "Enhancing Sustainability Awareness Through Mobile Applications: A Comparative Case Study and Analysis",
    conference: "18th International Research Conference - General Sir John Kotelawala Defence University",
    date: "Oct 2025", //"Est. Completion May 2025"
    description: "Comprehensive qualitative analysis of mobile applications (SDG and non-SDG based) to identify critical technical and UI/UX gaps hindering user retention and real-world impact on environmental sustainability",
    link: "https://irc.kdu.ac.lk/2025/documents/2025/abstracts/irc25_abstract_book_fmsh.pdf",
    //status: "Ongoing"
    status: "Published"
  }
  /*{
    title: "Enhancing RAG Accuracy with Domain-Specific Ontologies",
    conference: "18th International Research Conference - General Sir John Kotelawala Defence University",
    date: "Oct 2025",
    description: "A comparative study on how Knowledge Graphs outperform vector-only retrieval for complex reasoning tasks in medical datasets.",
    link: "https://example.com/publication/rag-ontologies" // Placeholder
  },
  {
    title: "Haptic Feedback in Virtual Reality: A Review of AI-Driven Adaptive Response",
    conference: "IEEE Student Conference (Pending Review)",
    date: "Aug 2024",
    description: "Survey paper analyzing the integration of machine learning models to predict and adapt haptic feedback intensity based on user immersion levels.",
    link: "https://example.com/publication/haptic-feedback" // Placeholder
  }*/
];

export const ACHIEVEMENTS: Achievement[] = [
  /*{
    id: "a1",
    title: "Best Paper Award: Undergraduate AI Symposium 2024",
    description: "Received the highest honor for the research paper on Ontology-Guided RAG, selected from over 50 submissions for its novelty and practical application.",
    date: "Dec 2024"
  },
  {
    id: "a2",
    title: "Finalist in National AI Hackathon 2023",
    description: "Competed in the Agentic Workflow track, developing a multi-agent system that autonomously optimized supply chain routes. Placed in the top 5 nationwide.",
    date: "Oct 2023"
  },*/
  {
    id: "a1",
    title: "ICDS 2025 Mini-Hackathon - Top 15 Finalists",
    description: "Selected as a Top 15 Finalist at the ICDS 2025 Mini-Hackathon, a national-level data science competition organized by the Stat Circle, Faculty of Science, University of Colombo, in collaboration with OCTAVE - John Keells Group.",
    date: "Nov 2025"
  },
  {
    id: "a2",
    title: "Code with WIE 2025 - 1st Runner-Up",
    description: "Achieved 1st Runner-Up at Code with WIE 2025, the 7th annual innovation challenge organized by IEEE WIE Affinity Group Sri Lanka. Competing among top university teams, we developed CareSync, a solution that empowers healthcare professionals to manage burnout effectively through intelligent workload balancing and wellness insights.",
    date: "Oct 2025"
  },
  {
    id: "a3",
    title: "Data Odyssey 2025 - Best Use of Technology",
    description: "Recognized with the Best Use of Technology award at the inter-university software innovation competition organized by the AI & Data Science Club of General Sir John Kotelawala Defence University (KDU). This year’s challenge brought together innovative minds to design impactful, AI-driven solutions addressing societal needs. Our project, “Athena: The AI Journal for Cognitive Wellness,” was honored for its use of technology to support individuals with dementia and promote cognitive well-being.",
    date: "Oct 2025"
  },
  {
    id: "a4",
    title: "InnovateX University Edition 2025 - 1st Runner-Up",
    description: "Achieved 1st Runner-Up at InnovateX University Edition 2025, a national-level hackathon organized by Zebra Technologies. Competing among 17 top university teams, we designed a real-time AI-powered Retail Analytics & Optimization Platform addressing challenges like inventory shrinkage, checkout security, and operational efficiency, all within the 4-hour final challenge.",
    date: "Oct 2025"
  },
  {
    id: "a5",
    title: "CodeRally 6.0 - Advanced Tier Finalists",
    description: "Team F4Version2 was among the top 15 teams in the Advanced Tier of CodeRally 6.0, a national-level hackathon organized by the IEEE Computer Society of IIT. After ranking 8th in the selection rounds, we advanced to the final 24-hour hackathon, showcasing innovative problem-solving and technical expertise against leading university teams.",
    date: "Sep 2025"
  },
  {
    id: "a6",
    title: "Tech-Triathlon 2025 - Finalists",
    description: "Team Mental Breakdowns was selected among the top 8 finalists out of 170+ teams in Tech-Triathlon 2025, a three-phase national-level competition consisted of a hackathon, designathon, and datathon, organized by Rootcode.",
    date: "Sep 2025"
  },
  {
    id: "a7",
    title: "Vice Chancellor's List - 2024",
    description: "Was placed in the Vice Chancellor's List for achieving a Year Grade Point Average (YGPA) of 3.82/4.0.",
    date: "Dec 2024"
  },
  {
    id: "a8",
    title: "Data Odyssey 2024 - Champion",
    description: "Secured first place in the inter-university software innovation competition hosted by the AI & Data Science Club at General Sir John Kotelawala Defence University (KDU). Each year, Data Odyssey invites participants to design and develop groundbreaking AI-powered and data-driven solutions that address real-world challenges. Our project \"GreenAI\", won the first place among 100+ participants.",
    date: "Oct 2023"
  },
  {
    id: "a9",
    title: "Dean's List - 2023",
    description: "Was placed in the Dean's List for achieving a Year Grade Point Average (YGPA) of 3.78/4.0.",
    date: "Dec 2023"
  }
];
