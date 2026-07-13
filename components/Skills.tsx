"use client";

import { skillGroups } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Webhook,
  Layers,
  Wrench,
  Database,
  Terminal,
  Sparkles,
  Bot,
  Hammer,
  HardDrive,
  Eye,
  GitFork,
  Link as LinkIcon
} from "lucide-react";

export function Skills() {
  // Map category to main header icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="h-5 w-5 text-primary" />;
      case "Generative AI / LLMs":
        return <Cpu className="h-5 w-5 text-accent" />;
      case "APIs":
        return <Webhook className="h-5 w-5 text-emerald-400" />;
      case "Frameworks & Libraries":
        return <Layers className="h-5 w-5 text-indigo-400" />;
      case "Developer Tools":
        return <Wrench className="h-5 w-5 text-amber-400" />;
      default:
        return <Terminal className="h-5 w-5 text-primary" />;
    }
  };

  // Get descriptive summaries to balance vertical height and add developer detail
  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "Languages":
        return "Core programming languages and database query tools used to construct solid backend systems.";
      case "Generative AI / LLMs":
        return "Orchestration, routing, and cognitive workflows designed to manage LLM context and operations.";
      case "APIs":
        return "Inference endpoints and API integrations used to fetch intelligent responses.";
      case "Frameworks & Libraries":
        return "Orchestration libraries, vector indices, and monitoring packages.";
      case "Developer Tools":
        return "Core local development environments, version control systems, and code editors.";
      default:
        return "";
    }
  };

  // Map specific skills to sub-icons for rich visuals
  const getSkillIcon = (skillName: string) => {
    const s = skillName.toLowerCase();
    
    if (s === "python") {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2m0 2C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m1.5 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      );
    }
    if (s === "c++") {
      return <span className="text-[9px] font-bold text-primary">C++</span>;
    }
    if (s === "sql" || s === "chromadb" || s === "vector databases") {
      return <Database size={13} className="text-blue-400" />;
    }
    if (s === "langchain") {
      return <LinkIcon size={13} className="text-emerald-400" />;
    }
    if (s === "langgraph") {
      return <GitFork size={13} className="text-violet-400" />;
    }
    if (s === "langsmith") {
      return <Eye size={13} className="text-orange-400" />;
    }
    if (s === "rag" || s === "prompt engineering") {
      return <Sparkles size={13} className="text-accent" />;
    }
    if (s === "ai agents" || s === "tool calling") {
      return <Bot size={13} className="text-indigo-400" />;
    }
    if (s === "git" || s === "github") {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    }
    if (s === "vs code") {
      return (
        <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.984 6.742a.765.765 0 0 0-.256-.475l-4.09-3.415a.774.774 0 0 0-1.127.171l-5.694 7.647L5.05 4.316a.772.772 0 0 0-1.134-.148L.252 7.027a.771.771 0 0 0-.083 1.057l4.314 5.378-4.305 5.394a.77.77 0 0 0 .07 1.066l3.684 2.871c.31.242.756.2.1026-.098l7.747-6.315 5.71 7.625c.264.354.767.432 1.125.17l4.093-3.413c.187-.145.293-.365.292-.596V7.337a.768.768 0 0 0-.246-.595z" />
        </svg>
      );
    }

    return <Terminal size={13} className="text-muted-foreground" />;
  };

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      {/* Background radial gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-glow/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-heading mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2"
          />
        </div>

        {/* Clean, organized horizontal row structure (Bento-list pattern) */}
        <div className="space-y-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col md:flex-row gap-4 md:gap-10 pb-10 border-b border-border/60 last:border-b-0 last:pb-0"
            >
              {/* Left Column: Category details */}
              <div className="md:w-1/3 flex flex-col justify-start">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-secondary/80 rounded-xl border border-border flex items-center justify-center text-primary">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground">
                    {group.category}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground/80 font-light leading-relaxed pr-4">
                  {getCategoryDescription(group.category)}
                </p>
              </div>

              {/* Right Column: Skill Badge cloud */}
              <div className="md:w-2/3 flex flex-wrap content-start items-center gap-2.5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -1 }}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-background/50 text-sm font-medium text-foreground border border-border hover:bg-secondary/70 hover:border-primary/20 transition-all duration-200 cursor-default"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center">
                      {getSkillIcon(skill.name)}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
