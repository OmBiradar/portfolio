import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Om Biradar's Portfolio wesite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-row`}
      >
        <LeftMenue />
        <div className={`flex flex-col`}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
