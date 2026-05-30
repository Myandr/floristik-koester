import { BlurTextEffect } from "./BlurTextEffect";

const reviews = [
  { text: "Wunderschöne Blumensträuße und immer frisch. Der beste Blumenladen in Dorsten!", span: "col" },
  { text: "Sehr freundliche Beratung und tolle Ideen – perfekt für Hochzeiten.", span: "" },
  { text: "Hier merkt man die Liebe zum Detail. Absolute Empfehlung!", span: "" },
  { text: "Ich habe heute einen kleinen Strauß zum Hochzeitstag gekauft. Wirklich Top Service – sie wissen was sie machen. Zu 100% weiterempfehlen.", span: "" },
  { text: "Wunderschönen Brautstrauß & wunderschönen Anstecker für die Hochzeit bekommen!", span: "" },
  {
    text: "Einfach traumhaft! Die Sträuße sehen aus, als wären sie frisch vom Feld gepflückt – wunderschön arrangiert, mit Liebe zum Detail und dazu noch sehr haltbar. Selbst nach Tagen sehen die Blumen noch frisch aus. Der Service ist beeindruckend: super freundlich, herzlich und kompetent. Ich bin mittlerweile Stammkundin!",
    span: "row",
  },
];

const Stars = () => (
  <span style={{ color: "#C4545A", fontSize: "1rem", letterSpacing: "0.05em" }}>★★★★★</span>
);

const colors = [
  { bg: "#ffffff", text: "#1B2B7A" },
  { bg: "#1B2B7A", text: "#FAF4EE" },
  { bg: "#ffffff", text: "#1B2B7A" },
  { bg: "#1B2B7A", text: "#FAF4EE" },
  { bg: "#ffffff", text: "#1B2B7A" },
  { bg: "#FDF0F2", text: "#1B2B7A" },
];

export function ReviewsSection() {
  return (
    <>
      <div style={{ height: "100px", background: "linear-gradient(to bottom, #ffffff, #FDF0F2)" }} />
      <section className="pb-24 md:pb-32 px-6 md:px-10 lg:px-16" style={{ background: "#FDF0F2" }}>
        <div className="max-w-6xl mx-auto">

          {/* Headline */}
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

          {/* Bento grid */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto",
            }}
          >
            {/* Card 0 — spans 2 columns */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{
                gridColumn: "span 2",
                background: colors[0].bg,
              }}
            >
              <Stars />
              <p style={{ fontFamily: "var(--font-cormorant)", color: colors[0].text, opacity: 0.85, fontSize: "1.3rem", lineHeight: 1.75, fontStyle: "italic" }}>
                „{reviews[0].text}"
              </p>
            </div>

            {/* Card 1 — 1 column */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: colors[1].bg }}
            >
              <Stars />
              <p style={{ fontFamily: "var(--font-cormorant)", color: colors[1].text, opacity: 0.9, fontSize: "1.25rem", lineHeight: 1.75, fontStyle: "italic" }}>
                „{reviews[1].text}"
              </p>
            </div>

            {/* Card 2 — 1 column */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: colors[2].bg }}
            >
              <Stars />
              <p style={{ fontFamily: "var(--font-cormorant)", color: colors[2].text, opacity: 0.85, fontSize: "1.25rem", lineHeight: 1.75, fontStyle: "italic" }}>
                „{reviews[2].text}"
              </p>
            </div>

            {/* Card 3 — 1 column */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: colors[3].bg }}
            >
              <Stars />
              <p style={{ fontFamily: "var(--font-cormorant)", color: colors[3].text, opacity: 0.9, fontSize: "1.25rem", lineHeight: 1.75, fontStyle: "italic" }}>
                „{reviews[3].text}"
              </p>
            </div>

            {/* Card 4 — 1 column */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: colors[4].bg }}
            >
              <Stars />
              <p style={{ fontFamily: "var(--font-cormorant)", color: colors[4].text, opacity: 0.85, fontSize: "1.25rem", lineHeight: 1.75, fontStyle: "italic" }}>
                „{reviews[4].text}"
              </p>
            </div>

          </div>

          <div className="flex flex-col items-center gap-4 mt-12">
            <a
              href="#kontakt"
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
    </>
  );
}
