import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="max-w-lg fixed bottom-0">
      <Link href="/">
        <Home />
      </Link>
    </div>
  );
};
