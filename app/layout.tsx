import type { Metadata } from "next";
import "./globals.css";
import { Provider as StoreProvider } from "jotai";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Template",
  description: "Template for saas applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={GeistSans.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
