import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { geist, geistMono, inter } from "@/app/font";


export const metadata: Metadata = {
  title: {
    default: "CineScope Movie Dashboard",
    template: "%s | CineScope Movie Dashboard",
  },
  description:
    "CineScope is a web application that provides a comprehensive dashboard for movie enthusiasts. It allows users to explore, search, and manage their favorite movies, providing detailed information and insights.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        geist.variable,
        geistMono.variable,
        inter.variable,
        inter.className,
      )}
    >
      <body className="min-h-full flex flex-col relative">{children}</body>
    </html>
  );
}
