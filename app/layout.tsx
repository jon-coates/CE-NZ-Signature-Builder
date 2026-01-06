import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarExpert Email Signature Generator",
  description: "Generate email signatures for CarExpert team members",
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

