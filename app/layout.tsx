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
  description: "Providing efficient, practical, and affordable legal solutions for businesses, startups, and property owners in Nigeria. Expert corporate law, real estate, IP protection, and regulatory compliance. Led by Geraldine Mbah, LL.M (USA) with 15+ years experience.",
  keywords: [
    "legal services Nigeria",
    "corporate law Nigeria",
    "business lawyer Lagos",
    "startup legal services",
    "real estate lawyer Nigeria",
    "intellectual property Nigeria",
    "regulatory compliance",
    "commercial law",
    "contract drafting",
    "TechShield Legal",
  ],
  authors: [{ name: "TechShield Legal Services" }],
  creator: "TechShield Legal Services",
  publisher: "TechShield Legal Services",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://techshieldlaw.netlify.app",
    siteName: "TechShield Legal Services",
    title: "TechShield Legal Services | Strategic Business Law & Compliance",
    description: "Expert legal solutions for businesses, startups, and property owners in Nigeria. Corporate law, real estate, IP protection, and regulatory compliance.",
    images: [
      {
        url: "/assets/logo2.png",
        width: 1200,
        height: 630,
        alt: "TechShield Legal Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechShield Legal Services | Strategic Business Law & Compliance",
    description: "Expert legal solutions for businesses, startups, and property owners in Nigeria.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
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
