import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Spotlight } from "@/components/Spotlight";
import { site } from "@/content/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = `${site.name} — ${site.role}`;

const description =
  "Haleeludheen N — AI Full-Stack Engineer building RAG, document chat, and agent workflows in React, Next.js, Node.js, SharePoint, and Azure.";

function metadataBase() {
  if (site.url) return new URL(site.url);
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}`);
  return new URL("http://localhost:3010");
}

export const metadata: Metadata = {
  title,
  description,
  metadataBase: metadataBase(),
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body id="top">
        <a className="skip-link" href="#content">
          Skip to Content
        </a>
        <Spotlight />
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
