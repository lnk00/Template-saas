import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Provider as StoreProvider } from "jotai";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Vecko",
  description: "Stay organized and focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <TooltipProvider delayDuration={0}>
          <body className={GeistSans.className}>{children}</body>
        </TooltipProvider>
      </StoreProvider>
    </html>
  );
}
