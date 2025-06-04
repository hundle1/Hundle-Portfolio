import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500">HundleTD</h3>
            <p className="text-muted-foreground max-w-md">
              Blockchain & Web3 expert specializing in smart contract development, 
              decentralized applications, and modern web technologies.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="mailto:contact@example.com" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HundleTD. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}