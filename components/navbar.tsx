"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="#home" 
          className="flex items-center space-x-2 group"
          onClick={() => handleClick("#home")}
        >
          <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 rounded-md border border-primary/20 overflow-hidden group-hover:border-primary/50 transition-all">
            <Code className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500">HundleTD</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className="text-foreground/80 hover:text-primary relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-t border-border py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="text-foreground/80 hover:text-primary py-2 px-4 rounded-md hover:bg-primary/5 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}