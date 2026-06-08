import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "./components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Floristik Köster | Ihr Blumenladen in Dorsten",
  description:
    "Handgefertigte Blumensträuße & florale Dekorationen in Dorsten. Vom Blütenglück zum Dekostück – persönliche Floristik in Dorsten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="overflow-x-hidden bg-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
