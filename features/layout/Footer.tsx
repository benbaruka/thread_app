import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-t-accent">
      <Link href="/">
        <Home size={20} />
      </Link>
      <Link href="/">
        <Home size={20} />
      </Link>
      <Link href="/">
        <Home size={20} />
      </Link>
    </div>
  );
};
