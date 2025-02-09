import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Micro Chat App",
  description:
    "open source chat app that you can integrate with any ai in backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
