"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuestionHistory } from "@/components/question-history";
import { StatsCards } from "@/components/stats-cards";
import { useAuth } from "@/context/auth-context";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function DashboardPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) return;

    const userEmail = localStorage.getItem("email");
    setEmail(userEmail);

    if (!userEmail) {
      console.warn("No email found in localStorage.");
      setLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      try {
        const res = await api.get("/api/questions/history", {
          params: { email: userEmail },
        });
        setQuestions(res.data);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [loggedIn]);

  if (loading) {
    return <p className="text-center mt-8 text-muted-foreground">Loading...</p>;
  }

  if (!email) {
    return (
      <p className="text-center mt-8 text-muted-foreground">
        Please log in to view your dashboard.
      </p>
    );
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center p-4 pt-24 sm:pt-32">
      <div className="z-10 w-full max-w-6xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary pb-2">
            Your Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your progress and review your past questions.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <Link href="/assess">Assess New Question</Link>
          </Button>
        </div>

        <StatsCards questions={questions} />

        <Card className="w-full bg-card/80 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Question History
            </CardTitle>
            <CardDescription>
              A log of all the questions you've had assessed.
            </CardDescription>
          </CardHeader>
          <QuestionHistory questions={questions} />
        </Card>
      </div>
    </main>
  );
}
