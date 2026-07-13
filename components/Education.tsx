"use client";

import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-secondary/30">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-0 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-heading mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Education
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

        {/* Timeline Layout */}
        <div className="relative border-l border-border pl-6 sm:pl-8 ml-4 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 bg-background border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.institution}
                  </h3>
                  <div className="inline-flex items-center text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                    <Calendar className="mr-1.5 h-3 w-3 text-accent" />
                    {item.duration}
                  </div>
                </div>

                <h4 className="text-base font-semibold text-foreground/90 mb-3">
                  {item.degree}
                </h4>

                {item.grade && (
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-lg mb-3">
                    <Award size={14} />
                    {item.grade}
                  </div>
                )}

                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
