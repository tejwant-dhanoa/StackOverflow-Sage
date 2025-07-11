"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Sparkles,
  Wand2,
  ShieldX,
  FileText,
  MessageSquareText,
  Tags,
  Rocket,
} from "lucide-react";

export function QuestionForm() {
  const { toast } = useToast();

  const [state, setState] = useState<{
    quality: string | null;
    error: string | null;
  }>({
    quality: null,
    error: null,
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Prediction Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  const getBadgeInfo = (quality: string | null) => {
    switch (quality) {
      case "HQ":
        return {
          icon: <Sparkles className="mr-2 h-5 w-5" />,
          text: "High Quality",
          description:
            "Your question appears well-structured and clear. It's likely to get helpful responses quickly.",
        };
      case "LQ_EDIT":
        return {
          icon: <Wand2 className="mr-2 h-5 w-5" />,
          text: "Needs Edit",
          description:
            "Your question is understandable but needs clarification or detail. Try improving grammar, formatting, or specificity.",
        };
      case "LQ_CLOSE":
        return {
          icon: <ShieldX className="mr-2 h-5 w-5" />,
          text: "Needs Closing",
          description:
            "This question lacks enough context or detail and may not meet posting guidelines. Consider closing or rewriting from scratch.",
        };
      default:
        return { icon: null, text: "", description: "" };
    }
  };

  const badgeInfo = getBadgeInfo(state.quality);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      title.trim().length < 10 ||
      body.trim().length < 20 ||
      tags.trim().length < 3
    ) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description:
          "Please enter a more detailed and meaningful question with proper tags.",
      });
      setLoading(false);
      return;
    }

    try {
      const email = localStorage.getItem("email"); // ✅ Get logged-in email

      const res = await axios.post(
        "http://localhost:3000/api/questions/predict",
        {
          email,
          title,
          body,
          tags,
        }
      );

      setState({ quality: res.data.quality, error: null });
    } catch (error: any) {
      console.error("Prediction submission failed:", error);
      setState({ quality: null, error: "Prediction failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl bg-background/50 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/10">
      <form onSubmit={handleSubmit}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            Question Quality Predictor
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Enter your Stack Overflow question to see how well it's framed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 relative">
            <FileText className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-primary/50 pointer-events-none" />
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Question Title"
              required
              className="text-base h-12 pl-10 bg-background/50 border-primary/30 focus-visible:bg-background/70 focus-visible:ring-offset-0"
            />
          </div>
          <div className="space-y-2 relative">
            <MessageSquareText className="absolute top-5 left-3 h-5 w-5 text-primary/50 pointer-events-none" />
            <Label htmlFor="body" className="sr-only">
              Body
            </Label>
            <Textarea
              id="body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Describe your problem in detail. Include what you've tried and any error messages."
              required
              className="min-h-[150px] text-base pl-10 bg-background/50 border-primary/30 focus-visible:bg-background/70 focus-visible:ring-offset-0"
            />
          </div>
          <div className="space-y-2 relative">
            <Tags className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-primary/50 pointer-events-none" />
            <Label htmlFor="tags" className="sr-only">
              Tags
            </Label>
            <Input
              id="tags"
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. javascript, react, css"
              required
              className="text-base h-12 pl-10 bg-background/50 border-primary/30 focus-visible:bg-background/70 focus-visible:ring-offset-0"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-4 pt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto text-lg py-6 px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Assessing...
                </>
              ) : (
                <>
                  <Rocket className="mr-3 h-5 w-5" /> Assess My Question
                </>
              )}
            </Button>
          </motion.div>

          {state.quality && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full rounded-lg border border-primary/30 bg-background/70 p-5 shadow-lg space-y-2 text-left max-w-xl"
            >
              <div className="flex items-center text-xl font-semibold text-primary">
                {badgeInfo.icon} {badgeInfo.text}
              </div>
              <p className="text-base text-muted-foreground">
                {badgeInfo.description}
              </p>
            </motion.div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
