export default function Impressum() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#F9DDE2" }}>

      {/* Nav */}
      <nav
        className="flex items-center justify-between px-6 md:px-10 h-[76px]"
        style={{ borderBottom: "1px solid rgba(196, 84, 90, 0.15)" }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            opacity: 0.7,
          }}
        >
          ← Zurück
        </a>
        <div className="text-center">
          <p className="text-[9px] tracking-[0.55em] uppercase" style={{ color: "#C4545A" }}>
            Floristik
          </p>
          <p
            className="text-xl tracking-[0.42em] uppercase font-semibold leading-none"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A" }}
          >
            KÖSTER
          </p>
        </div>
        <div style={{ width: "80px" }} />
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-20">
        <p
          className="mb-2"
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#C4545A",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Rechtliches
        </p>
        <h1
          className="mb-12"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Impressum
        </h1>

        {[
          {
            title: "Angaben gemäß § 5 TMG",
            content: "Floristik Köster\nLippestraße\n46282 Dorsten",
          },
          {
            title: "Kontakt",
            content: "Telefon: 02362 9993954\nWhatsApp: 0177 4878890\nE-Mail: info@floristik-koester.de",
          },
          {
            title: "Verantwortlich für den Inhalt",
            content: "Floristik Köster\nLippestraße\n46282 Dorsten",
          },
          {
            title: "Haftungsausschluss",
            content:
              "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
          },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <h2
              className="mb-3"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                opacity: 0.5,
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                whiteSpace: "pre-line",
                opacity: 0.85,
              }}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        className="py-6 px-6 md:px-10 text-center"
        style={{ borderTop: "1px solid rgba(196, 84, 90, 0.15)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            opacity: 0.4,
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
          }}
        >
          © {new Date().getFullYear()} Floristik Köster · Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
