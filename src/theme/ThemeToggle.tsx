import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import { Moon, SunMedium } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></Button>
    </div>
  );
};
