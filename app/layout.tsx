import type { Metadata } from "next";
import { Cal_Sans, Inter } from "next/font/google";
import SmoothScroll from "./smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proyectos.micr.dev"),
  title: "Proyectos",
  description: "Portafolio de proyectos",
  openGraph: {
    title: "Proyectos",
    description: "Portafolio de proyectos",
    url: "https://proyectos.micr.dev",
    siteName: "Proyectos",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Proyectos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos",
    description: "Portafolio de proyectos",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${calSans.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
