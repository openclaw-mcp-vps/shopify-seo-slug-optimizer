import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify SEO Slug Optimizer – Auto-fix Product URLs for Better SEO",
  description:
    "Automatically generate SEO-optimized product URLs for your Shopify store. Fix duplicate keywords, stop words, and poor URL structure in bulk."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="2f07e23e-1ce8-44df-9d0a-5820892e2d53"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
