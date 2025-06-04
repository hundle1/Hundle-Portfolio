"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormState({ ...formState, loading: true });

  const response = await fetch("https://formspree.io/f/mvgrgpyy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formState.name,
      email: formState.email,
      message: formState.message,
    }),
  });

  if (response.ok) {
    setFormState({
      name: "",
      email: "",
      message: "",
      submitted: true,
      loading: false,
    });
  } else {
    alert("Có lỗi xảy ra khi gửi email.");
    setFormState({ ...formState, loading: false });
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            I'm open to collaboration and new opportunities.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="bg-card border border-border/50 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
              
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:trexbairong@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        trexbairong@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a 
                        href="https://github.com/hundle1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        https://github.com/hundle1
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4">Availability</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span>Currently available for freelance work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-card border border-border/50 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
              
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                
                {formState.submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setFormState({ ...formState, submitted: false })}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-card border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-card border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={2}
                        required
                        className="bg-card border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center gap-2"
                      disabled={formState.loading}
                    >
                      {formState.loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}