import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={(clsx(inter.className), "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-12 w-full">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
