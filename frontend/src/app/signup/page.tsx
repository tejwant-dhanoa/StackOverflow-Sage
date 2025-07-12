"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ParticlesBackground } from "@/components/particles-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Mail, KeyRound } from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/auth/register", {
        email,
        password,
      });

      toast.success("Signup successful! Check your email & redirecting...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 w-full flex flex-col items-center justify-center gap-8">
        <Card className="w-full max-w-sm bg-card/80 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/10">
          <form onSubmit={handleSubmit}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                Create an Account
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">
                Join to start improving your questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 relative">
                <Mail className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-primary/50 pointer-events-none" />
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base h-12 pl-10 bg-background/50 border-primary/30 focus-visible:bg-background/70 focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2 relative">
                <KeyRound className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-primary/50 pointer-events-none" />
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-base h-12 pl-10 bg-background/50 border-primary/30 focus-visible:bg-background/70 focus-visible:ring-offset-0"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
              >
                {loading ? (
                  "Signing Up..."
                ) : (
                  <>
                    <UserPlus className="mr-2 h-5 w-5" /> Sign Up
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-accent hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
