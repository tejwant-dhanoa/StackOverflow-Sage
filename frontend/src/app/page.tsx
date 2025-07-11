"use client";

import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/particles-background";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Code,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// You can use a client component for motion
const MotionCard = motion(Card);

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden pt-32 sm:pt-40 text-center">
      <ParticlesBackground />
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary pb-2">
            Ask Smarter. Code Better.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Stack Overflow Sage is your ML-powered coach for writing clear,
            impactful technical questions. Get intelligent feedback, sharpen
            your clarity, and unlock faster solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="text-lg py-7 px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <Link href="/signup">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 w-full">
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card/60 backdrop-blur-sm p-6 text-left border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-accent/20 text-accent">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Intelligent Analysis
              </h3>
            </div>
            <p className="text-muted-foreground">
              Our machine learning model goes beyond grammar checks - it
              analyzes question context to give you actionable suggestions.
            </p>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-card/60 backdrop-blur-sm p-6 text-left border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-accent/20 text-accent">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Code-Aware Feedback
              </h3>
            </div>
            <p className="text-muted-foreground">
              Get tips on formatting code snippets and providing reproducible
              examples.
            </p>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-card/60 backdrop-blur-sm p-6 text-left border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-accent/20 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Learn Best Practices
              </h3>
            </div>
            <p className="text-muted-foreground">
              Improve your communication skills and become a better community
              member.
            </p>
          </MotionCard>
        </div>
      </div>
    </main>
  );
}
