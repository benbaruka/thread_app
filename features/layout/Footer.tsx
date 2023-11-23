import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div
      className="py-2 flex justify-between container gap-1 bg-background max-w-lg m-auto border-t border-t-accent"
      style={{ position: "fixed", bottom: "0", right: "0", left: "0" }}
    >
      <Link
        href="/"
        className={(clsx(buttonVariants({ variant: "ghost" })), "flex-1")}
      >
        <Home size={20} />
      </Link>
      <Link
        href="/"
        className={(clsx(buttonVariants({ variant: "ghost" })), "flex-1")}
      >
        <Home size={20} />
      </Link>
      <Link
        href="/"
        className={(clsx(buttonVariants({ variant: "ghost" })), "flex-1")}
      >
        <Home size={20} />
      </Link>
    </div>
  );
};
