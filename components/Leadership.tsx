"use client";

import { leadership } from "@/lib/data";
import { motion } from "framer-motion";
import { Palette, PlaySquare, Compass } from "lucide-react";

export function Leadership() {
  const getIcon = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes("design")) {
      return <Palette className="h-6 w-6 text-accent" />;
    }
    if (r.includes("multimedia") || r.includes("video")) {
      return <PlaySquare className="h-6 w-6 text-primary" />;
    }
    return <Compass className="h-6 w-6 text-primary" />;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="leadership" className="py-24 relative bg-background">
      {/* Decorative background glow */}
      <div className="absolute bottom-[10%] right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Leadership & Extracurriculars
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

        {/* Roles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {leadership.map((item) => (
            <motion.div
              key={item.organization}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header Icon & Org */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-secondary/80 rounded-xl border border-border">
                    {getIcon(item.role)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {item.organization}
                    </h4>
                    <h3 className="text-lg font-bold text-foreground mt-0.5">
                      {item.role}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative bottom bar */}
              <div className="w-full h-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mt-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
