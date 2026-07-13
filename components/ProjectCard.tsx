"use client";

import { Project } from "@/lib/data";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasDemo = !!project.demo;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between border border-border hover:border-primary/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 h-full overflow-hidden z-10"
    >
      {/* Decorative accent glow border on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary via-indigo-500 to-accent rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xs pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Card Header */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>

          {/* Featured Live Demo Badge */}
          {project.isFeatured && (
            <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/25 animate-pulse">
              <Sparkles size={10} />
              Live Demo
            </span>
          )}
        </div>

        {/* Project Description */}
        <p className="text-sm sm:text-base text-muted-foreground mb-6 font-light leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-secondary/80 text-foreground border border-border group-hover:border-primary/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="relative z-10 flex items-center justify-between border-t border-border/60 pt-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group/link"
        >
          <Github className="mr-1.5 h-4 w-4 transition-transform group-hover/link:-translate-y-0.5" />
          Code
        </a>

        {hasDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
          >
            <ExternalLink className="mr-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
