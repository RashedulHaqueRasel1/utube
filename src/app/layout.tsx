import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uTube Premium - Ad-Free YouTube Client APK (Latest Update)",
  description: "Experience YouTube Premium for free. Ad-free videos, background play, official Gmail sync, and PIP mode. Download the latest safe, malware-free APK with MicroG support.",
  keywords: "youtube premium apk, ad-free youtube, download youtube premium, youtube mod, revanced apk, microg download, background play youtube",
  openGraph: {
    title: "uTube Premium - Ad-Free YouTube Client APK",
    description: "Enjoy ad-free streaming, background play, and official Gmail subscription sync on Android. Clean, safe, and modern.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
