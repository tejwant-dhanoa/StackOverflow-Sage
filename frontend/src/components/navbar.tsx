"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  LogIn,
  PenSquare,
  LogOut,
  UserPlus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/auth-context";
import { set } from "date-fns";

const SageLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L22 7"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L2 7"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 4.5L7 9.5"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
      opacity="0.7"
    />
  </svg>
);

export function Navbar() {
  const { loggedIn, setLoggedIn } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 bg-background/50 backdrop-blur-lg border-b border-primary/10">
        <Link href="/" className="flex items-center gap-3">
          <SageLogo />
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Stack Overflow Sage
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>

          {loggedIn ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/assess">
                  <PenSquare className="mr-2 h-4 w-4" />
                  Assess
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Separator
                orientation="vertical"
                className="h-6 mx-2 bg-primary/20"
              />
              <Button
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("email");
                  setLoggedIn(false);
                  window.location.href = "/";
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
              >
                <Link href="/signup">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
