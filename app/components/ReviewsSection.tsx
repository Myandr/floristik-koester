"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurTextEffect } from "./BlurTextEffect";

const reviews = [
  {
    text: "Einfach traumhaft! Die Sträuße sehen aus, als wären sie frisch vom Feld gepflückt – wunderschön arrangiert, mit Liebe zum Detail und dazu noch sehr haltbar. Selbst nach Tagen sehen die Blumen noch frisch aus. Der Service ist beeindruckend: super freundlich, herzlich und kompetent. Ich bin mittlerweile Stammkundin!",
    name: "Sandra M.",
    role: "Google Bewertung",
    initial: "S",
  },
  {
    text: "Schon mehrfach Gestecke für Trauerfeiern hier bestellt – immer mit größter Sorgfalt und Würde arrangiert. Man merkt, dass hier Menschen arbeiten, denen ihr Handwerk wirklich am Herzen liegt. Danke für die Einfühlsamkeit und Professionalität.",
    name: "Thomas R.",
    role: "Google Bewertung",
    initial: "T",
  },
  {
    text: "Ich habe heute einen kleinen Strauß zum Hochzeitstag gekauft. Wirklich Top Service – sie wissen was sie machen. Zu 100% weiterempfehlen.",
    name: "Klaus B.",
    role: "Google Bewertung",
    initial: "K",
  },
  {
    text: "Sehr freundliche Beratung und tolle Ideen – perfekt für Hochzeiten.",
    name: "Petra K.",
    role: "Google Bewertung",
    initial: "P",
  },
  {
    text: "Wunderschönen Brautstrauß & wunderschönen Anstecker für die Hochzeit bekommen!",
    name: "Julia H.",
    role: "Google Bewertung",
    initial: "J",
  },
];

const Stars = () => (
  <span style={{ color: "#C4545A", fontSize: "1.1rem", letterSpacing: "0.1em" }}>★★★★★</span>
);

function Avatar({ initial }: { initial: string }) {
  return (
    <div
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "#FDF0F2",
        border: "1.5px solid #F4C2C9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.3rem", fontWeight: 600 }}>
        {initial}
      </span>
    </div>
  );
}

const AUTOPLAY_INTERVAL = 5000;

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(t);
  }, [paused, go]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const review = reviews[index];

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.3rem",
            }}
          >
            Kundenstimmen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            <BlurTextEffect>Das sagen unsere Kundinnen & Kunden</BlurTextEffect>
          </h2>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: "relative" }}
        >
          {/* Card */}
          <div
            style={{
              background: "#FAF4EE",
              border: "1px solid rgba(27,43,122,0.07)",
              borderRadius: "1.25rem",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              minHeight: "260px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
              >
                <Stars />
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#1B2B7A",
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    lineHeight: 1.85,
                    fontStyle: "italic",
                    opacity: 0.85,
                  }}
                >
                  „{review.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <Avatar initial={review.initial} />
                  <div>
                    <cite style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.05rem", fontWeight: 600, fontStyle: "normal", display: "block" }}>
                      {review.name}
                    </cite>
                    <span style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.9rem" }}>
                      {review.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            <button
              onClick={() => go(-1)}
              aria-label="Vorherige Bewertung"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(27,43,122,0.15)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#1B2B7A",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#1B2B7A";
                (e.currentTarget as HTMLButtonElement).style.color = "#FAF4EE";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#1B2B7A";
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Bewertung ${i + 1}`}
                  style={{
                    width: i === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: i === index ? "#C4545A" : "rgba(196,84,90,0.25)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Nächste Bewertung"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(27,43,122,0.15)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#1B2B7A",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#1B2B7A";
                (e.currentTarget as HTMLButtonElement).style.color = "#FAF4EE";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#1B2B7A";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <a
            href="https://floristik-koester.lokalerflorist.de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#C4545A",
              fontSize: "1rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.8rem",
              borderRadius: "999px",
              display: "inline-block",
            }}
          >
            Strauß bestellen
          </a>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.45,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              fontStyle: "italic",
            }}
          >
            Danke für Ihr Vertrauen!
          </p>
        </div>

      </div>
    </section>
  );
}
