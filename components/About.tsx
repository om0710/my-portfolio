"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { FolderGit2, GraduationCap, Network } from "lucide-react";

export function About() {
  // Map icons to each stat based on label or key
  const getIcon = (label: string) => {
    switch (label) {
      case "AI Projects Shipped":
        return <FolderGit2 className="h-8 w-8 text-primary" />;
      case "B.Tech Year":
        return <GraduationCap className="h-8 w-8 text-accent" />;
      case "Specialization":
        return <Network className="h-8 w-8 text-indigo-400" />;
      default:
        return <FolderGit2 className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-heading mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              About Me
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Stats column (Left on Desktop) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6 order-2 md:order-1">
            {personalInfo.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl flex items-center space-x-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-3 bg-secondary/80 rounded-xl border border-border flex items-center justify-center">
                  {getIcon(stat.label)}
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-heading text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bio text column (Right on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 order-1 md:order-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {personalInfo.bio}
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed font-light">
              Currently studying Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning.
              Passionate about pushing the boundaries of what is possible with LLM routing, Corrective RAG pipelines, 
              and state-machine agents using Python-based frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
