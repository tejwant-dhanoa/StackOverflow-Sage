"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck, CircleX, MessagesSquare } from "lucide-react";

export function StatsCards({ questions }: { questions: any[] }) {
  const total = questions.length;
  const highQuality = questions.filter(
    (q) => q.quality === "High Quality"
  ).length;
  const lowQuality = total - highQuality;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-accent/20 text-accent">
            <MessagesSquare className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">Total Questions</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-primary">{total}</p>
        </CardContent>
      </Card>
      <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-green-200 text-green-600">
            <CircleCheck className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">High Quality</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-green-600">{highQuality}</p>
        </CardContent>
      </Card>
      <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-red-200 text-red-600">
            <CircleX className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">Needs Improvement</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-red-600">{lowQuality}</p>
        </CardContent>
      </Card>
    </div>
  );
}
