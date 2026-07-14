export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  description?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; hasIcon?: boolean }[];
}

export const personalInfo = {
  name: "Om Bansal",
  titleRoles: ["AI Engineer", "Machine Learning Engineer", "Generative AI Developer", "Software Engineer"],
  tagline: "AI/ML undergraduate building LLM-powered agents, RAG pipelines, and production-grade Generative AI applications.",
  bio: "AI/ML undergraduate specializing in Generative AI engineering — building LLM-powered agents, RAG pipelines, and multi-agent workflows with LangChain, LangGraph, and LangSmith. Experienced integrating LLM APIs (Groq, Google Gemini), designing tool-calling agents, and shipping deployed Python applications end-to-end. Seeking an AI/ML or Software Engineering internship to build production-grade, intelligent systems.",
  stats: [
    { label: "AI Projects Shipped", value: "4+" },
    { label: "B.Tech Year", value: "3rd Year" },
    { label: "Specialization", value: "LangChain & LangGraph" }
  ],
  socials: {
    github: "https://github.com/om0710",
    linkedin: "https://www.linkedin.com/in/om-bansal-78420430a/",
    email: "mailto:ombansal221@gmail.com",
    phone: "tel:7828129015",
    phoneRaw: "7828129015",
    emailRaw: "ombansal221@gmail.com",
    location: "India"
  }
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" }
    ]
  },
  {
    category: "Generative AI / LLMs",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "AI Agents" },
      { name: "Tool Calling" },
      { name: "Vector Databases" },
      { name: "ChromaDB" },
      { name: "Hugging Face" },
      { name: "Sentence Transformers" }
    ]
  },
  {
    category: "APIs",
    skills: [
      { name: "Groq API" },
      { name: "Google Gemini API" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LangSmith" },
      { name: "ChromaDB" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AI Voice Agent",
    tech: ["FastAPI", "Vapi AI", "Streamlit", "SQLite"],
    description: "Architected a real-time conversational voice agent using LangGraph state machines to manage multi-turn dialogue flow and context across turns. Integrated Groq-hosted LLMs for low-latency inference and deployed a responsive Streamlit interface for live voice interaction.",
    github: "https://lnkd.in/gCUYiamh"
  },
  {
    title: "Recruitment AI Workflow",
    tech: ["LangGraph", "LangChain", "Groq", "Streamlit"],
    description: "Built a multi-agent recruitment automation pipeline in LangGraph, coordinating specialized agents to parse and evaluate candidate information. Streamlined candidate screening by automating repetitive recruitment tasks, cutting manual review effort across the pipeline.",
    github: "https://lnkd.in/grnnuaFv"
  },
  {
    title: "LangGraph RAG Chatbot with Tool Calling",
    tech: ["LangGraph", "LangChain", "ChromaDB", "Groq"],
    description: "Designed an agentic chatbot combining Retrieval-Augmented Generation with dynamic tool-calling, enabling the agent to reason over documents and invoke external tools mid-conversation. Orchestrated LangGraph nodes to route queries between retrieval and tool-execution paths, improving response accuracy on multi-step questions.",
    github: "https://lnkd.in/gQ5DZz78",
    demo: "https://lnkd.in/gNxwksKm",
    isFeatured: true
  },
  {
    title: "RAG Chatbot for PDF Q&A",
    tech: ["LangChain", "Google Gemini API", "ChromaDB", "Streamlit"],
    description: "Developed a Retrieval-Augmented Generation chatbot that answers questions from uploaded PDFs using semantic search over vector embeddings. Implemented document chunking and embedding storage in ChromaDB, integrated with the Google Gemini API for accurate, context-grounded responses.",
    github: "https://lnkd.in/gRAHPv9H"
  }
];

export const education: EducationItem[] = [
  {
    institution: "Bennett University",
    degree: "Bachelor of Technology (B.Tech), Computer Science Engineering — AI & Machine Learning",
    duration: "3rd Year"
  },
  {
    institution: "Neiil World School",
    degree: "Class XII & Class X Board Exams",
    duration: "Completed",
    description: "Class XII: 80% | Class X: 90.6%"
  }
];

export const leadership: LeadershipItem[] = [
  {
    role: "Head of Design",
    organization: "BC3 Club, Bennett University",
    description: "Led visual design and creative direction for club initiatives."
  },
  {
    role: "Head of Design",
    organization: "IBF Club, Bennett University",
    description: "Directed design output for events and communications."
  },
  {
    role: "Multimedia Team Member",
    organization: "Mobilon Club, Bennett University",
    description: "Contributed to multimedia content production."
  }
];

export const achievements: string[] = [
  "Built and deployed multiple end-to-end Generative AI applications using LangChain and LangGraph.",
  "Deployed live AI applications to Streamlit Cloud with fully functioning production interfaces.",
  "Proficient in Git/GitHub-based version control and deployment workflows."
];
