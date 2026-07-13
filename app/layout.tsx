import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "RMI6900 | Robinhood Meme Index 6900";
const siteDescription =
  "A black-screen AI6900-inspired Robinhood Meme Index for RMI6900: meme rails, RWA rails, holder airdrops, and live receipts.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description:
        "Hold RMI6900 and follow a neon AI-index dashboard with meme rails, RWA rails, live receipts, and a conveyor belt.",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "RMI6900 Robinhood Meme Index 6900 social preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description:
        "A holder airdrop index with AI6900-style rails, RWA exposure, and a meme conveyor belt.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#e8ff17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
