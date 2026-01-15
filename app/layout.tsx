import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarExpert Email Signature Generator",
  description: "Generate email signatures for CarExpert team members",
  openGraph: {
    title: "CarExpert Email Signature Generator",
    description: "Generate email signatures for CarExpert team members",
    images: [
      {
        url: "/assets/ce-email-signature-share-image.png",
        width: 1200,
        height: 630,
        alt: "Staff email signature creator - CarExpert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarExpert Email Signature Generator",
    description: "Generate email signatures for CarExpert team members",
    images: ["/assets/ce-email-signature-share-image.png"],
  },
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

