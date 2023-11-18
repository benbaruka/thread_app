import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="py-2 flex justify-between container gap-1 max-w-lg fixed bottom-0 left-0 right-0 bg-background border-t border-accent ">
      <Link href="/">
        <Home size={20} />
      </Link>
    </div>
  );
};
