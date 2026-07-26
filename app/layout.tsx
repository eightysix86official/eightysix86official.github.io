import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eightysix — Dessert-Only Private Dining, Singapore",
  description:
    "Singapore's only dessert-focused, home-based private dining concept. Technique-driven dessert omakase, four seats, one kitchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
