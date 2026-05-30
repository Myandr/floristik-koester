import { SubPageNav } from "../components/SubPageNav";

const sections = [
  {
    title: "1. Datenschutz auf einen Blick",
    content:
      "Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.",
  },
  {
    title: "2. Verantwortlicher",
    content:
      "Floristik Koester\nLippestrasse\n46282 Dorsten\n\nTelefon: 02362 9993954\nE-Mail: info@floristik-koester.de",
  },
  {
    title: "3. Datenerfassung auf dieser Website",
    content:
      "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten koennen Sie dem Abschnitt Verantwortlicher in dieser Datenschutzerklaerung entnehmen.\n\nWenn Sie uns per E-Mail oder ueber das Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
  },
  {
    title: "4. Kontaktformular",
    content:
      "Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO.",
  },
  {
    title: "5. Google Maps",
    content:
      "Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA uebertragen und dort gespeichert.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
  },
  {
    title: "6. Ihre Rechte",
    content:
      "Sie haben jederzeit das Recht auf unentgeltliche Auskunft ueber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfaenger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Loeschung dieser Daten.\n\nFuer Fragen zum Thema Datenschutz koennen Sie sich jederzeit an uns wenden:\ninfo@floristik-koester.de",
  },
];

export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SubPageNav />

      <div
        className="px-6 md:px-10 lg:px-16 py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #FDF0F2 0%, #ffffff 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            Rechtliches
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Datenschutzerklaerung
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.5,
              fontSize: "1rem",
              lineHeight: 1.8,
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemaess DSGVO.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {sections.map((s) => (
            <div
              key={s.title}
              style={{ borderLeft: "2px solid rgba(196,84,90,0.2)", paddingLeft: "1.8rem" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  marginBottom: "0.8rem",
                  opacity: 0.75,
                  textTransform: "uppercase",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  opacity: 0.75,
                  whiteSpace: "pre-line",
                }}
              >
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer
        className="py-6 px-6 md:px-10 text-center mt-8"
        style={{ borderTop: "1px solid rgba(27,43,122,0.08)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            opacity: 0.35,
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
          }}
        >
          {new Date().getFullYear()} Floristik Koester &middot; Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
