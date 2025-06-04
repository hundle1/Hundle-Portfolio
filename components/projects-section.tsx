"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  category: "Blockchain" | "Frontend" | "Fullstack";
};

const projects: Project[] = [
  {
    id: 1,
    title: "StackMarket NFS Admin Dashboard",
    description: "A decentralized admin dashboard for NFS (Non Fungible Software) with smart contract integration, minting functionality, and a modern React frontend.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Solidity", "Next.js", "Ethers.js", "IPFS", "Tailwind CSS"],
    githubUrl: "https://github.com/hundle1/Encrypt-Admin.git",
    featured: true,
    category: "Blockchain",
  },
  {
    id: 2,
    title: "StackMarket NFS Marketplace",
    description: "A decentralized marketplace for Non Fungible Software (NFS) with a modern UI, smart contract integration, buying/selling functionality, and real-time analytics.",
    image: "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Web3.js", "Supabase"],
    githubUrl: "https://github.com/hundle1/Encrypt-Store.git",
    featured: true,
    category: "Blockchain",
  },
  {
    id: 3,
    title: "FundRaising Blockchain DAO",
    description: "A decentralized autonomous organization (DAO) for fundraising with smart contract governance, proposal management, and a React frontend.",
    image: "https://images.pexels.com/photos/8369770/pexels-photo-8369770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Solidity", "React", "TypeScript", "ZK Rollups", "Hardhat"],
    githubUrl: "https://github.com/hundle1/FundRaisingNCKH.git",
    featured: false,
    category: "Blockchain",
  },
  {
    id: 4,
    title: "SHopyME E-commerce",
    description: "A fullstack e-commerce application with user authentication, product management, and payment integration using Stripe. Includes a modern UI and responsive design.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Stripe"],
    githubUrl: "https://github.com/hundle1/ShopyME.git",
    demoUrl: "https://shopy-me.vercel.app/",
    featured: true,
    category: "Fullstack",
  },
  {
    id: 5,
    title: "NFS Smart Contract (On Branch Master)",
    description: "A decentralized smart contract for Non Fungible Software (NFS) with a modern UI, smart contract integration, buying/selling functionality, and real-time analytics.",
    image: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "Solidity", "AST Parsing"],
    githubUrl: "https://github.com/hundle1/HashingNFS-Smart-Contract.git",
    featured: false,
    category: "Blockchain",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A cyberpunk-themed developer portfolio with animated sections, project showcase, and contact form.",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: false,
    category: "Frontend",
  },
];

export function ProjectsSection() {
  const categories = ["All", "Blockchain", "Frontend", "Fullstack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work, from smart contracts and DApps to modern web applications.
            Each project showcases my technical skills and problem-solving approach.
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/10 text-foreground hover:bg-secondary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div> */}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                
                <Badge className="absolute top-3 left-3 bg-card/80 backdrop-blur-sm text-card-foreground">
                  {project.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs py-1 px-2 rounded-full bg-secondary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs py-1 px-2 rounded-full bg-muted text-muted-foreground">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/30 hover:border-primary/80 transition-colors flex items-center gap-2"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center gap-2"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}