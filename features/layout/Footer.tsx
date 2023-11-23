import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div style={{ position: "fixed" }}>
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
