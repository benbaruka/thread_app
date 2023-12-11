import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import React from "react";
import LoginButton from "./auth/LoginButton";

export const Header = async () => {
  return (
    <header className="border-b bottom-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1 justify-between">
        <h2 className="text-2xl font-bold mr-auto">My thread</h2>
        <LoginButton />
        <ThemeToggle />
      </div>
    </header>
  );
};
