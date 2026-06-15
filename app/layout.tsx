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
  title: "Blumenladen in Dorsten – Frische Blumen & Floristik mit Herz",
  description:
    "Unser Blumenladen steht für frische Blumen, liebevolle Floristik und persönliche Beratung. Wir gestalten individuelle Blumensträuße, Hochzeitsfloristik, Trauerfloristik sowie florale Dekorationen für private und geschäftliche Anlässe. Dabei legen wir großen Wert auf Qualität, Saisonalität und kreative Gestaltung. Ob klassisch, modern oder natürlich – jeder Strauß wird mit Sorgfalt und Leidenschaft gefertigt. In unserem Blumenladen finden Sie zudem Pflanzen, Geschenkideen und kleine Aufmerksamkeiten für jeden Anlass.",
  keywords:
    "Blumenladen in Dorsten, Blumenladen Dorsten, Dorsten, Blumenladen, Florist, Floristik, Blumen, Blumensträuße, Blumen kaufen, frische Blumen, Schnittblumen, Blumengestecke, Blumenarrangements, florale Dekoration, Pflanzen, Zimmerpflanzen, Geschenkideen, Eventfloristik, Hochzeitsfloristik, Brautstrauß, Trauerfloristik, Trauerkränze, Grabgestecke, Firmenfloristik, Geschäftsfloristik, Blumenservice, Blumenhandel, Blumenverkauf, saisonale Blumen, individuelle Floristik, kreative Floristik, moderne Floristik, klassische Floristik, handgebundene Sträuße, Blumen für jeden Anlass, Floristikfachgeschäft",
  authors: [{ name: "Floristik Köster" }],
  creator: "Floristik Köster",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Blumenladen in Dorsten – Frische Blumen & Floristik mit Herz",
    description:
      "Individuelle Blumensträuße aus Dorsten, mit Liebe zum Detail für Sie gebunden. Floristik Köster – vom Blütenglück zum Dekostück.",
    type: "website",
    locale: "de_DE",
    siteName: "Floristik Köster",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Floristik Köster – Blumenladen in Dorsten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blumenladen in Dorsten – Frische Blumen & Floristik mit Herz",
    description:
      "Individuelle Blumensträuße aus Dorsten, mit Liebe zum Detail für Sie gebunden. Floristik Köster – vom Blütenglück zum Dekostück.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Floristik Köster",
  description:
    "Individuell handgebundene Blumensträuße, Hochzeitsfloristik, Trauerfloristik und Business Flowers in Dorsten. Vom Blütenglück zum Dekostück.",
  url: "https://floristik-koester.de",
  telephone: "+4902362-9993954",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lippestraße 18",
    postalCode: "46282",
    addressLocality: "Dorsten",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:30",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://instagram.com/floristikkoester",
    "https://facebook.com/FloristikKoester",
  ],
  image: "https://floristik-koester.de/logo.png",
  priceRange: "€€",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden bg-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
