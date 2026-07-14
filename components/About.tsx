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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center order-1"
          >
            <div className="relative group max-w-sm md:max-w-none w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden glass-card p-2 hover:border-primary/30 transition-colors duration-300">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* The Image */}
              <img
                src="/profile.jpg"
                alt="Om Bansal"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
 
          {/* Bio & Stats column (Right on Desktop) */}
          <div className="md:col-span-7 space-y-8 order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
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

            {/* Horizontal Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-4 rounded-2xl flex flex-col items-center text-center space-y-3 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-2.5 bg-secondary/80 rounded-xl border border-border flex items-center justify-center">
                    {getIcon(stat.label)}
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold font-heading text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
