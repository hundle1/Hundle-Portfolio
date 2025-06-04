"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              BLOCKCHAIN & WEB3 DEVELOPER
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Nguyễn Mạnh Dũng</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                WEB3 & UI/UX Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Expert blockchain engineer specializing in smart contracts, DApps, and
              next-generation web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary/80 transition-colors flex items-center gap-2"
                asChild
              >
                <a href="http://github.com/hundle1" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative h-80 lg:h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" />
            </div>
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80">
              <Image
                src="https://avatars.githubusercontent.com/u/105864115?v=4" 
                alt="Developer Portrait"
                width={400}
                height={400}
                className="rounded-2xl object-cover border-2 border-primary/20 shadow-xl shadow-primary/5"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Available for Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      )}
    </section>
  );
}