import Link from "next/link";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  LogIn,
  PenSquare,
  UserPlus,
  Info,
} from "lucide-react";

const SageLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="logoGradientFooter"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
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
      stroke="url(#logoGradientFooter)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L22 7"
      stroke="url(#logoGradientFooter)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="url(#logoGradientFooter)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L2 7"
      stroke="url(#logoGradientFooter)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 4.5L7 9.5"
      stroke="url(#logoGradientFooter)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
      opacity="0.7"
    />
  </svg>
);

export function Footer() {
  const loggedIn = false; // This will be dynamic later

  return (
    <footer className="w-full mt-auto bg-background/50 backdrop-blur-lg border-t border-primary/10">
      <div className="container mx-auto p-8 text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Link href="/" className="flex items-center gap-3">
              <SageLogo />
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Stack Overflow Sage
              </h2>
            </Link>
            <p className="text-sm max-w-sm">
              Helping developers ask better, one question at a time.
            </p>
            <p className="text-xs">
              © {new Date().getFullYear()} Created by Tejwant. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-accent"
            >
              <Link href="/about">
                <Info />
                About
              </Link>
            </Button>
            {loggedIn ? (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-accent"
                >
                  <Link href="/assess">
                    <PenSquare />
                    Assess
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-accent"
                >
                  <Link href="/dashboard">
                    <LayoutDashboard />
                    Dashboard
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-accent"
                >
                  <Link href="#">Logout</Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-accent"
                >
                  <Link href="/login">
                    <LogIn />
                    Login
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-accent"
                >
                  <Link href="/signup">
                    <UserPlus />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
