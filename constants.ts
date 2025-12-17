
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
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    provider: "Oracle",
    date: "Sep 2025",
    badgeUrl: "/badges/OCI25AICFA.jpeg",
    verificationLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BCA92DFDF1EE5C98047C5CD7EF1090710F40E633B651CD271D84425D0981BF90"
  },
  {
    id: "c3",
    name: "Intro to Machine Learning",
    provider: "Kaggle",
    date: "Aug 2025",
    badgeUrl: "/badges/kaggle.jpeg",
    verificationLink: "https://www.kaggle.com/learn/certification/sumuu237/intro-to-machine-learning"
  },
  {
    id: "c4",
    name: "Unity Essentials Pathway",
    provider: "Unity",
    date: "Jul 2025",
    badgeUrl: "/badges/unity-essentials-pathway.png",
    verificationLink: "https://www.credly.com/badges/20d7c767-4e53-460c-8d4c-192b02759373/linked_in_profile"
  },
  {
    id: "c5",
    name: "Postman API Fundamentals Student Expert",
    provider: "Postmanapi",
    date: "Feb 2025",
    badgeUrl: "badges/postman.jpeg",
    verificationLink: "https://api.badgr.io/public/assertions/yKS5WPrYQJC1nIIOwBfPUw"    
  },
  {
    id: "c6",
    name: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    date: "Feb 2023",
    badgeUrl: "/badges/microsoft-certified-azure-ai-fundamentals.png",
    verificationLink: "https://www.credly.com/badges/e41626c1-8082-491c-a89e-391a0294e5dc/public_url"
  },
  {
    id: "c7",
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
    title: "Ontology-Guided RAG System",
    description: "A Retrieval-Augmented Generation system that uses a custom Knowledge Graph (Neo4j) to improve hallucination rates in technical domain queries.",
    longDescription: "This project tackles the 'Lost in the Middle' phenomenon in RAG by structuring document chunks into a Neo4j graph. By extracting entities and relationships, the LLM can traverse the graph to find contextually relevant information rather than relying solely on vector similarity. The system achieved a 15% improvement in answer accuracy for complex, multi-hop queries compared to a baseline vector store approach.",
    skillsEarned: ["Graph Database Design", "Prompt Engineering", "RAG Optimization", "Neo4j Cypher"],
    techStack: ["Python", "LangChain", "Neo4j", "OpenAI API"],
    category: "AI/ML",
    github: "https://github.com/Lilvamp237/ontology-rag",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: "p2",
    title: "Multi-Agent Research Swarm",
    description: "An autonomous swarm of agents (Researcher, Writer, Reviewer) built with LangGraph that collaborates to generate comprehensive technical reports.",
    longDescription: "Utilizing the LangGraph framework, I orchestrated a team of specialized AI agents. The 'Researcher' scrapes web data, the 'Analyst' synthesizes key points, the 'Writer' drafts the content, and the 'Reviewer' provides critique loops. State management was critical to ensure agents didn't hallucinate or loop indefinitely.",
    skillsEarned: ["Agentic Workflows", "State Management", "Async Python", "System Design"],
    techStack: ["LangGraph", "Python", "Docker"],
    category: "AI/ML",
    github: "https://github.com/Lilvamp237/research-swarm",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: "p3",
    title: "Neural Network 3D Visualizer",
    description: "Bridging my AI and XR interests: An interactive Unity application that visualizes live weights and biases of a training neural network.",
    longDescription: "I created a WebSocket bridge between a PyTorch training script and a Unity client. As the model trains in Python, the weights are streamed in real-time to Unity, where they are rendered as glowing 3D connections. The thickness and color of the connections update live, providing an intuitive understanding of how the network learns.",
    skillsEarned: ["Network Sockets", "Unity Shader Graph", "C# Interop", "Data Visualization"],
    techStack: ["Unity", "C#", "PyTorch", "WebSockets"],
    category: "Game Dev",
    github: "https://github.com/Lilvamp237/neural-viz",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "p4",
    title: "Reinforcement Learning FPS Bot",
    description: "A PPO-based agent trained to play first-person shooters, utilizing computer vision for target acquisition and navigation.",
    longDescription: "Using Unity ML-Agents and Stable Baselines3, I trained a bot to navigate a 3D maze and shoot moving targets. The agent uses a Convolutional Neural Network (CNN) to process the raw pixel feed from the game engine. Curriculum learning was used to gradually increase the difficulty of the tasks.",
    skillsEarned: ["Reinforcement Learning (PPO)", "Computer Vision", "Unity ML-Agents", "Hyperparameter Tuning"],
    techStack: ["Stable Baselines3", "PyTorch", "Unity ML-Agents"],
    category: "AI/ML",
    github: "https://github.com/Lilvamp237/fps-rl-agent",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: "p5",
    title: "Semantic Document Search Engine",
    description: "A vector-search engine optimized for legal documents, utilizing hybrid search (sparse + dense) and re-ranking algorithms.",
    longDescription: "Legal documents require precise keyword matching alongside semantic understanding. I implemented a hybrid search using Qdrant (Dense vectors) and BM25 (Sparse vectors). A Cross-Encoder was then used to re-rank the retrieved results, ensuring high relevance for domain-specific legal queries.",
    skillsEarned: ["Vector Databases", "Hybrid Search", "NLP Pipelines", "API Development"],
    techStack: ["Qdrant", "Sentence-Transformers", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/Lilvamp237/semantic-search",
    image: "https://picsum.photos/600/400?random=12"
  },
   {
    id: "p6",
    title: "AR Knowledge Overlay Prototype",
    description: "Early prototype for visualizing Knowledge Graph nodes in AR space, allowing users to 'walk' through data connections.",
    longDescription: "Developed using AR Foundation, this app detects horizontal planes and spawns 3D nodes representing data points. Users can tap nodes to expand their relationships, effectively creating a spatial mind-map. This explores the potential of 'Spatial Computing' for data analysis.",
    skillsEarned: ["AR Foundation", "Spatial Mapping", "UI/UX for XR", "Mobile Optimization"],
    techStack: ["AR Foundation", "Unity", "C#"],
    category: "XR",
    github: "https://github.com/Lilvamp237/ar-knowledge-graph",
    image: "https://picsum.photos/600/400?random=2"
  }
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
