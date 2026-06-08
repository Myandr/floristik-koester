import { SubPageNav } from "../components/SubPageNav";

const sections = [
  {
    title: "1. Datenschutz auf einen Blick",
    content:
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
  },
  {
    title: "2. Verantwortlicher",
    content:
      "Floristik Köster\nInhaber: [VORNAME NACHNAME]\nLippestraße [NR]\n46282 Dorsten\n\nTelefon: 02362 9993954\nE-Mail: info@floristik-koester.de",
  },
  {
    title: "3. Hosting",
    content:
      "Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Beim Aufruf unserer Website werden IP-Adressen und technische Zugriffsdaten auf Servern von Vercel verarbeitet. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Die Datenübertragung in die USA erfolgt auf Grundlage von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 DSGVO.\n\nWeitere Informationen: vercel.com/legal/privacy-policy\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer öffentlich erreichbaren Website).",
  },
  {
    title: "4. Kontaktformular",
    content:
      "Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.\n\nSpeicherdauer: Ihre Angaben werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, spätestens nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).",
  },
  {
    title: "5. Google Maps",
    content:
      "Diese Website nutzt den Kartendienst Google Maps der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Maps ist einwilligungspflichtig, da dabei personenbezogene Daten (u. a. IP-Adresse) an Google-Server in den USA übertragen werden. Die Karte wird erst nach Ihrer ausdrücklichen Einwilligung über den Cookie-Banner geladen.\n\nSpeicherdauer der Einwilligung: bis zu 12 Monate im Browser-Speicher.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Browser-Speicher (localStorage) löschen.\n\nDatenschutzerklärung Google: policies.google.com/privacy",
  },
  {
    title: "6. Externe Bestellplattform",
    content:
      "Für Online-Bestellungen nutzen wir den externen Dienst lokalerflorist.de (Floristik Direkt GmbH). Wenn Sie auf den Bestelllink klicken, werden Sie zu einem eigenständigen Anbieter weitergeleitet, für dessen Datenschutz wir nicht verantwortlich sind. Bitte beachten Sie die Datenschutzerklärung des jeweiligen Anbieters.",
  },
  {
    title: "7. Social Media & externe Links",
    content:
      "Auf unserer Website befinden sich Links zu unseren Profilen auf:\n• Instagram (Meta Platforms Ireland Ltd.)\n• Facebook (Meta Platforms Ireland Ltd.)\n• TikTok (TikTok Technology Limited, Irland / ByteDance Ltd., China)\n\nDurch das Anklicken dieser Links verlassen Sie unsere Website. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Plattformen. Die Links werden erst beim Anklicken aktiviert; allein durch die Darstellung auf unserer Seite werden keine Daten an die Anbieter übertragen.\n\nWir empfehlen, die jeweiligen Datenschutzerklärungen der Anbieter zu lesen:\n• Meta: privacycenter.meta.com\n• TikTok: tiktok.com/legal/privacy-policy\n\nWhatsApp: Unsere Telefonnummer 0177 4878890 ist auch per WhatsApp (Meta Platforms) erreichbar. Wenn Sie uns über WhatsApp kontaktieren, gelten die Datenschutzbestimmungen von WhatsApp: whatsapp.com/legal/privacy-policy",
  },
  {
    title: "8. Cookies",
    content:
      "Diese Website verwendet technisch notwendige Cookies und setzt optionale Cookies für Drittdienste (Google Maps) nur nach Ihrer Einwilligung.\n\nTechnisch notwendige Cookies: Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten.\n\nOptionale Cookies (nach Einwilligung):\n• Google Maps: Setzt Cookies der Google LLC zum Betrieb des Kartendienstes.\n\nIhre Cookie-Einwilligung wird im lokalen Browserspeicher (localStorage) gespeichert und ist bis zu 12 Monate gültig. Sie können Ihre Einwilligung jederzeit durch Löschen der Website-Daten in Ihrem Browser widerrufen.",
  },
  {
    title: "9. Ihre Rechte gemäß DSGVO",
    content:
      "Sie haben folgende Rechte gegenüber uns hinsichtlich Ihrer personenbezogenen Daten:\n\n• Recht auf Auskunft (Art. 15 DSGVO)\n• Recht auf Berichtigung (Art. 16 DSGVO)\n• Recht auf Löschung (Art. 17 DSGVO)\n• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n• Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n• Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)\n\nFür Anfragen wenden Sie sich an: info@floristik-koester.de\n\nSie haben außerdem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):\n\nLandesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW)\nPostfach 20 04 44 · 40102 Düsseldorf\nTelefon: 0211 / 38424-0\nE-Mail: poststelle@ldi.nrw.de\nWeb: ldi.nrw.de",
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
            Datenschutzerklärung
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
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.
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
          {new Date().getFullYear()} Floristik Köster &middot; Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
