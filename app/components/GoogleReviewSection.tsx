export function GoogleReviewSection() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#C4545A",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Ihre Meinung zählt
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          Wir freuen uns sehr über Ihre Google-Bewertung – teilen Sie Ihre Blumenfreude mit uns!
        </h2>

        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            opacity: 0.6,
            fontSize: "1.05rem",
            lineHeight: 1.85,
            maxWidth: "560px",
          }}
        >
          Ihre Zufriedenheit liegt uns am Herzen. Wenn Sie mit unserem Service glücklich sind, freuen wir uns sehr über eine positive Google-Bewertung. Ihre Rückmeldungen helfen uns, immer besser zu werden – und geben anderen Kunden einen Eindruck von der Qualität und Leidenschaft, die in unseren Blumenarrangements steckt.
        </p>

        <a
          href="https://www.google.com/maps/search/Floristik+Köster+Dorsten"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#FAF4EE",
            background: "#1B2B7A",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "1rem 2.6rem",
            borderRadius: "999px",
            fontWeight: 700,
            display: "inline-block",
            marginTop: "0.5rem",
          }}
        >
          Jetzt auf Google bewerten
        </a>

        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            opacity: 0.35,
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            fontStyle: "italic",
            marginTop: "0.25rem",
          }}
        >
          Danke, dass Sie uns helfen, noch besser zu werden.
        </p>
      </div>
    </section>
  );
}
