import Image from "next/image";
import { BlurTextEffect } from "./BlurTextEffect";

const cards = [
  {
    image: "/images/picture-2600-3.jpeg",
    alt: "Blumen bestellen Dorsten",
    tag: "Bestellung",
    detail: "WhatsApp & Telefon",
    title: "Schnell & unkompliziert bestellen",
    href: "https://floristik-koester.lokalerflorist.de",
  },
  {
    image: "/images/blume4.jpg",
    alt: "Floristik Köster Qualität",
    tag: "Qualität",
    detail: "",
    title: "Frische Blumen in bester Qualität",
    href: "#kontakt",
  },
  {
    image: "/images/flower1.jpeg",
    alt: "Individuelle Floristik",
    tag: "Handwerk",
    detail: "Jedes Stück ein Unikat",
    title: "Persönliche Beratung & individuelle Anfertigungen",
    href: "#kontakt",
  },
];

export function WhyUsSection() {
  return (
    <section id="ueber-uns" className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-16 md:gap-20 items-start">

          {/* Left — sticky headline */}
          <div className="md:sticky md:top-28 md:self-start flex flex-col gap-8">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "#C4545A",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  lineHeight: 1.2,
                  marginBottom: "0.3rem",
                }}
              >
                Besuchen Sie uns
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  fontSize: "clamp(2.6rem, 5vw, 4rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.08,
                }}
              >
                <BlurTextEffect>Ihr Blumenladen in Dorsten</BlurTextEffect>
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.55,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "380px",
              }}
            >
              Sie haben wenig Zeit oder möchten Blumen vorbestellen? Schreiben Sie uns einfach per WhatsApp oder rufen Sie an — wir kümmern uns schnell und zuverlässig. Wir liefern Blumen auch innerhalb von Dorsten nach Absprache aus.
            </p>

            <a
              href="https://floristik-koester.lokalerflorist.de"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start transition-all hover:opacity-80"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#1B2B7A",
                fontSize: "0.9rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.8rem 2rem",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Jetzt bestellen
            </a>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-10">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block transition-opacity hover:opacity-90"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ height: "clamp(220px, 30vw, 380px)", position: "relative" }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#1B2B7A",
                      opacity: 0.45,
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {card.tag}
                    <span style={{ color: "#C4545A", fontSize: "0.55rem" }}>●</span>
                    {card.detail}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#1B2B7A",
                      fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
