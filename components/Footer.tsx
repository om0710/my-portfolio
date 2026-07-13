"use client";

import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Initials */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-85 transition-opacity"
            >
              Om Bansal
            </a>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "#education")}
              className="hover:text-foreground transition-colors"
            >
              Education
            </a>
            <a
              href="#achievements"
              onClick={(e) => handleNavClick(e, "#achievements")}
              className="hover:text-foreground transition-colors"
            >
              Achievements
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Tagline & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-border/40 text-xs text-muted-foreground/80">
          <p>© {currentYear} Om Bansal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-semibold"
            >
              Next.js
            </a>
            &
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-semibold"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
