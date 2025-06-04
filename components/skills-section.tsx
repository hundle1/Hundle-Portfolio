"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, GitBranch, Globe, Cpu, Server, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Expert" | "Intermediate/Expert";
  icon: React.ReactNode;
  note?: string;
  category: "Blockchain" | "Frontend" | "Backend" | "Other";
};

const skills: Skill[] = [
  {
    name: "Solidity",
    level: "Expert",
    icon: <Code className="w-5 h-5" />,
    note: "Write smart contracts (ERC-20, ERC-721, custom logic)",
    category: "Blockchain",
  },
  {
    name: "Web3.js / Ethers.js",
    level: "Expert",
    icon: <Globe className="w-5 h-5" />,
    note: "Blockchain interaction, wallet connection",
    category: "Blockchain",
  },
  {
    name: "Smart Contract Development",
    level: "Expert",
    icon: <Shield className="w-5 h-5" />,
    note: "Comprehensive smart contract logic skills",
    category: "Blockchain",
  },
  {
    name: "React.js",
    level: "Expert",
    icon: <Code className="w-5 h-5" />,
    note: "Frontend UI for DApps",
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: "Expert",
    icon: <Server className="w-5 h-5" />,
    note: "Server-side rendering and DApp performance optimization",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: "Expert",
    icon: <Code className="w-5 h-5" />,
    note: "Modern, type-safe frontend development",
    category: "Frontend",
  },
  {
    name: "Supabase",
    level: "Intermediate/Expert",
    icon: <Database className="w-5 h-5" />,
    note: "Authentication, Realtime, Database services",
    category: "Backend",
  },
  {
    name: "Prisma ORM",
    level: "Intermediate/Expert",
    icon: <Database className="w-5 h-5" />,
    note: "Map data between database and application",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    icon: <Database className="w-5 h-5" />,
    note: "Traditional relational database",
    category: "Backend",
  },
  {
    name: "IPFS / Pinata",
    level: "Intermediate",
    icon: <Layers className="w-5 h-5" />,
    note: "Decentralized data storage",
    category: "Blockchain",
  },
  {
    name: "Blockchain Development",
    level: "Expert",
    icon: <Cpu className="w-5 h-5" />,
    note: "Comprehensive Web3 project skills",
    category: "Blockchain",
  },
  {
    name: "NFT Development",
    level: "Intermediate/Expert",
    icon: <Layers className="w-5 h-5" />,
    note: "Minting, metadata, marketplace integration",
    category: "Blockchain",
  },
  {
    name: "REST API / GraphQL",
    level: "Intermediate",
    icon: <Server className="w-5 h-5" />,
    note: "Backend integration",
    category: "Backend",
  },
  {
    name: "Git / GitHub",
    level: "Expert",
    icon: <GitBranch className="w-5 h-5" />,
    note: "Professional source code management",
    category: "Other",
  },
  {
    name: "JavaScript",
    level: "Expert",
    icon: <Code className="w-5 h-5" />,
    note: "Foundation of all the above stacks",
    category: "Frontend",
  },
];

const getProgressColor = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return "bg-primary";
    case "Intermediate/Expert":
      return "bg-secondary";
    case "Intermediate":
      return "bg-accent";
    case "Beginner":
      return "bg-muted-foreground";
  }
};

const getProgressWidth = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return "w-full";
    case "Intermediate/Expert":
      return "w-[85%]";
    case "Intermediate":
      return "w-[65%]";
    case "Beginner":
      return "w-[40%]";
  }
};

export function SkillsSection() {
  const categories = ["All", "Blockchain", "Frontend", "Backend", "Other"] as const;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert in blockchain technologies, smart contracts, and modern web development.
            Strong focus on creating secure and performant decentralized applications.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="relative bg-card border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-4 relative">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <div className="min-h-[48px]"> {/* Đặt chiều cao tối thiểu để giữ layout ổn định */}
                  <h3 className="font-medium">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {skill.note}
                  </p>
                </div>
              </div>

              <div className="mt-2 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">{skill.level}</span>
                  {skill.level === "Expert" && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Top Skill
                    </span>
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