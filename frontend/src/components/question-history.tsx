"use client";

import { CardContent } from "@/components/ui/card";

export function QuestionHistory({ questions }: { questions: any[] }) {
  return (
    <CardContent className="space-y-4">
      {questions.length === 0 ? (
        <p className="text-center text-muted-foreground">No questions found.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q, idx) => (
            <li
              key={idx}
              className="border border-primary/20 rounded-md p-4 bg-background/50"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-lg font-semibold text-primary">
                  {q.title}
                </h3>
                <span
                  className={`mt-2 sm:mt-0 text-sm px-2 py-1 rounded-md font-medium ${
                    q.quality === "High Quality"
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {q.quality}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{q.tags}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {new Date(q.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </CardContent>
  );
}
