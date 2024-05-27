import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import { Provider as StoreProvider } from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vecko",
  description: "Stay organized and focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dayjs.locale({
    ...en,
    weekStart: 1,
  });

  return (
    <html lang="en">
      <StoreProvider>
        <TooltipProvider delayDuration={0}>
          <body className={inter.className}>{children}</body>
        </TooltipProvider>
      </StoreProvider>
    </html>
  );
}
