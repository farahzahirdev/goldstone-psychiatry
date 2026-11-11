import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "TMS Therapy in Houston | Goldstone Psychiatry & Neuromodulation Center",
  description:
    "Physician-led TMS therapy for treatment-resistant depression in Houston, TX. Non-medication, no anesthesia, no downtime. Most plans and Medicare cover TMS for qualifying patients. Find out if you qualify. Call (346) 517-7408.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  keywords: [
    "TMS therapy Houston",
    "treatment-resistant depression Houston",
    "TMS River Oaks",
    "CloudTMS",
    "Goldstone Psychiatry",
    "Dr. Gibson Anugwom",
    "interventional psychiatry Houston",
  ],
  openGraph: {
    title: "TMS Therapy in Houston | Goldstone Psychiatry",
    description:
      "Physician-led TMS for depression that has not responded to medication. Find out if you qualify.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3a6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
