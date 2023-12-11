import { Home, PenSquare, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div
      className="py-2 flex justify-between container gap-1 bg-background max-w-lg m-auto border-t-accent"
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
        borderTop: "1px solid hsl(var(--accent))",
      }}
    >
      <Link href="/" className={clsx(buttonVariants({ variant: "ghost" }))}>
        <Home size={20} />
      </Link>
      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "ghost" }))}
      >
        <PenSquare size={20} />
      </Link>
      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "ghost" }))}
      >
        <User size={20} />
      </Link>
    </div>
  );
};
