import { SiteFooter } from "../components/SiteFooter";

export default function Impressum() {
  const sectionStyle = { marginBottom: "2.5rem" };

  const headingStyle = {
    fontFamily: "var(--font-cormorant)",
    color: "#1B2B7A",
    fontSize: "1.1rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    opacity: 0.5,
    marginBottom: "0.75rem",
  };

  const textStyle = {
    fontFamily: "var(--font-cormorant)",
    color: "#1B2B7A",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    whiteSpace: "pre-line" as const,
    opacity: 0.85,
  };

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

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Angaben gemäß § 5 DDG</h2>
          <p style={textStyle}>
            {"Floristik Köster\nInhaber: [VORNAME NACHNAME]\nRechtsform: Einzelunternehmen\nLippestraße [NR]\n46282 Dorsten"}
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Kontakt</h2>
          <p style={textStyle}>
            {"Telefon: 02362 9993954\nWhatsApp: 0177 4878890\nE-Mail: info@floristik-koester.de"}
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Steuerliche Angaben</h2>
          <p style={textStyle}>{"Steuernummer: [STEUERNUMMER]"}</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Haftung für Inhalte</h2>
          <p style={textStyle}>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 9 bis 11 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Haftung für Links</h2>
          <p style={textStyle}>
            Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe.
            Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
            zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
            Links umgehend entfernen.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Urheberrecht</h2>
          <p style={textStyle}>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Online-Streitbeilegung</h2>
          <p style={textStyle}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          </p>
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#C4545A",
              fontSize: "1.05rem",
              opacity: 0.85,
              textDecoration: "underline",
              display: "block",
              marginTop: "0.4rem",
              marginBottom: "0.75rem",
            }}
          >
            https://ec.europa.eu/consumers/odr
          </a>
          <p style={textStyle}>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
