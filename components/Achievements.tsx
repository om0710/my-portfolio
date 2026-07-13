"use client";

import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, CloudLightning, GitCommit } from "lucide-react";

export function Achievements() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-6 w-6 text-accent" />;
      case 1:
        return <CloudLightning className="h-6 w-6 text-primary" />;
      case 2:
        return <GitCommit className="h-6 w-6 text-emerald-400" />;
      default:
        return <CheckCircle2 className="h-6 w-6 text-primary" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="achievements" className="py-24 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-heading mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Key Achievements
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        {/* Achievements list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="glass-card rounded-2xl p-6 flex items-start space-x-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-3 bg-secondary/80 rounded-xl border border-border flex items-center justify-center flex-shrink-0">
                {getIcon(index)}
              </div>

              {/* Achievement Content */}
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-light pt-1.5">
                {achievement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
