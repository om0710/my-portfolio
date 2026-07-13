"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const roles = personalInfo.titleRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const role = roles[currentRoleIndex];
    // Faster typewriter effect for responsive feel
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === role) {
      // Pause on completed word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? role.substring(0, currentText.length - 1)
            : role.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-10 z-0 pointer-events-none" />

      {/* Animated Gradient Blob 1 */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[10%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[80px] md:blur-[110px] pointer-events-none"
      />

      {/* Animated Gradient Blob 2 */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/10 dark:bg-accent/20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none"
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary bg-primary-glow border border-primary/20 rounded-full mb-4">
            Available for Internships
          </span>
        </motion.div>

        {/* Name Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight font-heading mb-4"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
        >
          <span>I am a </span>
          <span className="text-primary font-bold typewriter-cursor">
            {currentText}
          </span>
        </motion.div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={(e) => handleScrollTo(e, "projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-95 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-200 group cursor-pointer"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={(e) => handleScrollTo(e, "contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold border border-border hover:bg-secondary rounded-xl transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-3 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all hover:scale-105"
            aria-label="Email Contact"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Decorative absolute element at bottom to point scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
