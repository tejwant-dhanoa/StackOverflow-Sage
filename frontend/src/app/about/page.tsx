import { ParticlesBackground } from "@/components/particles-background";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BrainCircuit,
  GraduationCap,
  Sparkles,
  User,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start p-4 overflow-hidden pt-24 sm:pt-32">
      <ParticlesBackground />

      <div className="z-10 w-full flex flex-col items-center gap-10 mb-20">
        <Card className="w-full max-w-5xl bg-card/80 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/10 px-6 sm:px-10 py-10">
          <CardHeader className="text-center space-y-2 mb-6">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              StackOverflow Sage
            </h1>
            <p className="text-lg text-muted-foreground italic">
              Ask better. Learn faster. Code smarter—with Sage.
            </p>
          </CardHeader>

          <CardContent className="space-y-12 text-foreground/90 text-left text-base leading-relaxed">
            <section className="space-y-4">
              <p>
                <strong>Sage</strong> is your intelligent question coach —
                helping you ask clearer, more answerable questions on Stack
                Overflow , team chats and beyond.
              </p>
              <p className="text-muted-foreground">
                Whether you're stuck on a bug, learning a new tech stack, or
                trying to communicate your issue more effectively, Sage uses a
                custom-trained machine learning model to evaluate your
                question's clarity, structure, and context.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Why Use Sage?
              </h2>
              <div className="space-y-6">
                <Feature
                  icon={<BrainCircuit className="h-5 w-5" />}
                  title="ML-Powered Feedback"
                  text="Sage runs on a purpose-built machine learning model, trained to assess question quality like an experienced developer."
                />
                <Feature
                  icon={<GraduationCap className="h-5 w-5" />}
                  title="Designed for Growth"
                  text="Helps you learn as you go. Each submission teaches you how to express coding issues clearly and effectively."
                />
                <Feature
                  icon={<Users className="h-5 w-5" />}
                  title="Based on Real Experience"
                  text="Inspired by patterns from thousands of real Stack Overflow posts - good and bad ,so the feedback feels natural and practical."
                />
              </div>
            </section>

            <section className="space-y-4 pt-2">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <User className="h-5 w-5" /> Built by a Developer, for
                Developers
              </h2>
              <p className="text-muted-foreground">
                Created by <strong>Tejwant</strong>, a developer who understands
                the frustration of unclear posts and believes in better tools
                for better tech conversations.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-accent/20 text-accent mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
