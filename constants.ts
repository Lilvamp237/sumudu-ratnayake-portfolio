
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
  avatar: "https://github.com/Lilvamp237.png"
};

export const SKILLS: Skill[] = [
  { name: "Python / PyTorch", level: 92, category: "AI/ML" },
  { name: "LLMs & RAG", level: 88, category: "AI/ML" },
  { name: "LangChain / LangGraph", level: 85, category: "AI/ML" },
  { name: "Knowledge Graphs (Neo4j)", level: 80, category: "Data" },
  { name: "Multi-Agent Systems", level: 78, category: "AI/ML" },
  { name: "Unity / C#", level: 65, category: "XR" },
  { name: "React / TypeScript", level: 70, category: "Web" },
  { name: "FastAPI / Docker", level: 75, category: "Core" },
];

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
    badgeUrl: "https://ui-avatars.com/api/?name=D+L&background=0284c7&color=fff&size=128&bold=true",
    verificationLink: "https://learn.microsoft.com/api/credentials/share/en-us/Sumudu05-1888/7E05411E38180AC0?sharingId"
  },
  {
    id: "c2",
    name: "LangChain & LLM App Dev",
    provider: "DeepLearning.AI",
    date: "2023",
    badgeUrl: "https://ui-avatars.com/api/?name=L+C&background=16a34a&color=fff&size=128&bold=true",
    verificationLink: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/"
  },
  {
    id: "c3",
    name: "Unity Certified Associate",
    provider: "Unity Technologies",
    date: "2022",
    badgeUrl: "https://ui-avatars.com/api/?name=U+T&background=000000&color=fff&size=128&bold=true",
    verificationLink: "https://unity.com/products/unity-certifications"
  },
  {
    id: "c4",
    name: "Machine Learning Specialization",
    provider: "Coursera (Stanford)",
    date: "2022",
    badgeUrl: "https://ui-avatars.com/api/?name=S+U&background=ca8a04&color=fff&size=128&bold=true"
    // No verification link for this one (example case)
  }
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
    title: "Enhancing RAG Accuracy with Domain-Specific Ontologies",
    conference: "National Undergraduate Research Symposium 2024",
    date: "Dec 2024",
    description: "A comparative study on how Knowledge Graphs outperform vector-only retrieval for complex reasoning tasks in medical datasets.",
    link: "https://example.com/publication/rag-ontologies" // Placeholder
  },
  {
    title: "Haptic Feedback in Virtual Reality: A Review of AI-Driven Adaptive Response",
    conference: "IEEE Student Conference (Pending Review)",
    date: "Aug 2024",
    description: "Survey paper analyzing the integration of machine learning models to predict and adapt haptic feedback intensity based on user immersion levels.",
    link: "https://example.com/publication/haptic-feedback" // Placeholder
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
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
  },
  {
    id: "a3",
    title: "DeepLearning.AI: Knowledge Graphs for RAG Certification",
    description: "Completed advanced specialization covering Neo4j Graph Data Science library and its integration with Large Language Models.",
    date: "Aug 2023"
  },
  {
    id: "a4",
    title: "Contributor to Open Source LangChain ecosystem",
    description: "Contributed code fixes and documentation improvements to the main LangChain repository, focusing on custom retrieval chains.",
    date: "Ongoing"
  }
];
