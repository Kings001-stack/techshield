import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechShield Legal Services | Strategic Business Law & Compliance",
  description: "Providing efficient, practical, and affordable legal solutions for businesses, startups, and property owners. Led by Geraldine Mbah, LL.M (USA).",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${inter.variable} antialiased light`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-tertiary-container selection:text-on-tertiary-container flex flex-col min-h-screen">
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 5000,
            style: {
              background: '#0a0f1c', // bg-surface-container
              color: '#dce2f9', // text-on-surface
              border: '1px solid rgba(138, 159, 219, 0.2)', // outline-variant/20
              borderRadius: '8px',
              fontFamily: 'var(--font-inter)',
            },
            success: {
              iconTheme: {
                primary: '#9edb9d', // success green
                secondary: '#0a0f1c',
              },
            },
            error: {
              iconTheme: {
                primary: '#ffb4a9', // error red
                secondary: '#0a0f1c',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
