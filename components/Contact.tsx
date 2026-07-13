"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { personalInfo } from "@/lib/data";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactInput = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! Thank you.");
        reset();
      } else if (result.useFallback) {
        // Handle mailto fallback
        toast.info("Resend API key not configured. Opening your mail client...");
        
        const mailtoUrl = `mailto:${personalInfo.socials.emailRaw}?subject=Portfolio Inquiry from ${encodeURIComponent(
          data.name
        )}&body=${encodeURIComponent(
          `Hi Om,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
        )}`;
        
        // Open user's default email client
        window.location.href = mailtoUrl;
        reset();
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      // Failsafe client-side fallback
      toast.info("Opening mail client...");
      const mailtoUrl = `mailto:${personalInfo.socials.emailRaw}?subject=Portfolio Inquiry from ${encodeURIComponent(
        data.name
      )}&body=${encodeURIComponent(
        `Hi Om,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
      )}`;
      window.location.href = mailtoUrl;
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Glow effect */}
      <div className="absolute top-[20%] right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
              Get In Touch
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

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                Let's build something together
              </h3>
              <p className="text-base text-muted-foreground font-light mb-8 leading-relaxed">
                Have an internship opportunity, a project proposal, or just want to chat about AI/ML agents and multi-agent workflows? Feel free to drop a message.
              </p>

              {/* Direct Links */}
              <div className="space-y-6 mb-8">
                <a
                  href={personalInfo.socials.email}
                  className="flex items-center space-x-4 p-4 border border-border rounded-2xl hover:border-primary/30 hover:bg-secondary/35 transition-all duration-300 group"
                >
                  <div className="p-3 bg-secondary/80 border border-border rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase">Email</h4>
                    <p className="text-sm sm:text-base text-foreground font-semibold">
                      {personalInfo.socials.emailRaw}
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.phone}
                  className="flex items-center space-x-4 p-4 border border-border rounded-2xl hover:border-accent/30 hover:bg-secondary/35 transition-all duration-300 group"
                >
                  <div className="p-3 bg-secondary/80 border border-border rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase">Phone</h4>
                    <p className="text-sm sm:text-base text-foreground font-semibold">
                      +91 {personalInfo.socials.phoneRaw}
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 border border-border rounded-2xl bg-secondary/20 cursor-default">
                  <div className="p-3 bg-secondary/80 border border-border rounded-xl text-muted-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase">Location</h4>
                    <p className="text-sm sm:text-base text-foreground font-semibold">
                      {personalInfo.socials.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles row repeated */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border/50 lg:border-none">
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
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                    } bg-background/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-medium pl-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                    } bg-background/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium pl-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Let's build an AI pipeline..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                    } bg-background/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 font-medium pl-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-95 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
