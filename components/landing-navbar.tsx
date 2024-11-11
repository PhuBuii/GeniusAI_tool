"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { Moon, Sun } from "lucide-react";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isDark, setIsDark] = useState(false);

  // Check and load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark"); // Apply dark mode on load
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark"); // Apply light mode on load
    }
  }, []);

  // Toggle theme and apply the class to document element
  const toggleTheme = () => {
    setIsDark((prev) => !prev); // Toggle state
  };

  // Apply or remove dark class based on theme state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark"); // Apply dark mode
      localStorage.setItem("theme", "dark"); // Save to localStorage
    } else {
      document.documentElement.classList.remove("dark"); // Apply light mode
      localStorage.setItem("theme", "light"); // Save to localStorage
    }
  }, [isDark]);

  return (
    <div className=" w-full p-4 transition-colors duration-500 ease-in-out">
      <div className=" mx-auto w-full flex items-center h-full justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image
              fill
              alt="logo"
              src="/logoo.svg"
              onError={() => console.log("Logo failed to load")}
            />
          </div>
          <h1 className={cn("text-2xl font-bold text-primary", font.className)}>
            GeniusAI
          </h1>
        </Link>
        <div className="flex items-center gap-x-4 relative">
          {/* Custom Dark/Light Mode Toggle */}
          <div
            onClick={toggleTheme}
            className="z-50 overflow-hidden cursor-pointer relative flex items-center justify-between w-8 h-8 p-1 rounded-full bg-background border border-secondary transition-all duration-300"
          >
            {/* Sun Icon (Light Mode) */}
            <div
              className={cn(
                "absolute left-1 top-1 transition-transform duration-300 ease-in-out rounded-full",
                isDark ? "transform translate-x-16" : " bg-background"
              )}
            >
              <Sun className="text-gray-500 dark:text-gray-200 w-6 h-6" />
            </div>

            {/* Moon Icon (Dark Mode) */}
            <div
              className={cn(
                "absolute right-1 top-1 transition-transform duration-300 ease-in-out rounded-full",
                !isDark ? "transform translate-x-8" : " bg-background"
              )}
            >
              <Moon className="text-gray-500 dark:text-gray-200  w-6 h-6" />
            </div>
          </div>

          {/* Get Started Button */}
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="z-50">
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
