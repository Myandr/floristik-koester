import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const liefergebiete = [
  {
    title: "Dorstener Altstadt, Dorsten Hardt, Östrich",
    desc: "Wir versorgen die historische Altstadt von Dorsten sowie die Stadtteile Hardt und Östrich mit frischen Blumen und stilvollen Arrangements. Ob für Ihr Zuhause, Ihr Geschäft oder besondere Anlässe, wir sind für Sie da.",
  },
  {
    title: "Dorsten Hervest, Holsterhausen",
    desc: "Auch in den Stadtteilen Hervest und Holsterhausen bieten wir unseren umfassenden Lieferservice an. Freuen Sie sich auf liebevoll gestaltete Blumensträuße und kreative Dekorationen, die direkt zu Ihnen nach Hause geliefert werden.",
  },
  {
    title: "Wulfen, Deuten, Lembeck, Rhade, Reken",
    desc: "Unsere Liefergebiete umfassen auch die Stadtteile Wulfen, Deuten, Lembeck und Rhade sowie die nahegelegene Stadt Reken. Wir bringen frische Blumen direkt zu Ihnen und sorgen dafür, dass Ihre besonderen Momente noch schöner werden.",
  },
  {
    title: "Schermbeck, Gahlen, Kirchhellen",
    desc: "In den Gemeinden Schermbeck, Gahlen und Kirchhellen sind wir ebenfalls für Sie unterwegs. Ob für private Feierlichkeiten, geschäftliche Veranstaltungen oder einfach nur, um jemandem eine Freude zu machen – wir liefern pünktlich und zuverlässig.",
  },
  {
    title: "Marl Brassert, Alt Marl, Bottrop, Gladbeck",
    desc: "Unsere Dienstleistungen erstrecken sich auch auf die Stadtteile Brassert und Alt Marl in Marl sowie die Städte Bottrop und Gladbeck. Vertrauen Sie auf unsere Expertise und genießen Sie den Komfort unseres Lieferdienstes.",
  },
  {
    title: "Haltern am See",
    desc: "Auch in Haltern am See sind wir für Sie da. Ob für Hochzeiten, Geburtstage oder andere festliche Anlässe – unsere wunderschönen Blumenarrangements erreichen Sie immer frisch und pünktlich.",
  },
];

export default function BusinessFlowers() {
  return (
    <main
      style={{
        fontFamily: "var(--font-cormorant, serif)",
        minHeight: "100svh",
        background: "#FAF4EE",
        overflowX: "hidden",
        paddingTop: "76px",
      }}
    >
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/flower3.jpeg"
          alt="Business Flowers für Unternehmen – Floristik Köster Dorsten"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.90) 0%, rgba(27,43,122,0.30) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-28 md:py-36 max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            für Geschäftskunden
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              maxWidth: "680px",
            }}
          >
            Zuverlässige Blumenlieferungen und kreative Konzepte
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.85,
              fontSize: "1.2rem",
              lineHeight: 1.85,
              marginTop: "1.4rem",
              maxWidth: "520px",
            }}
          >
            Bei Floristik Köster wissen wir, wie sehr frische Blumen die Stimmung und Atmosphäre am Arbeitsplatz positiv beeinflussen. Lassen Sie uns gemeinsam dafür sorgen, dass Ihre Räume blühen.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="mailto:info@floristikkoester.de"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.9rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Angebot anfragen
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(250,244,238,0.35)",
                fontSize: "0.9rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
              }}
            >
              Anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Intro text */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-5">
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(1.3rem, 2.2vw, 1.55rem)",
              lineHeight: 1.95,
              opacity: 0.8,
            }}
          >
            Bei Floristik Köster bieten wir maßgeschneiderte Blumenlieferungen für Unternehmen, die Ihre Räume regelmäßig mit frischen, liebevoll gestalteten Blumenarrangements beleben. Unsere Lösungen schaffen Wohlfühlatmosphäre, inspirierende Akzente und ein einladendes Ambiente – ideal für Empfangsbereiche, Meetingräume oder besondere Anlässe im Unternehmen.
          </p>
        </div>
      </div>

      {/* Maßgeschneiderter Blumenservice */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                unser Service
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Maßgeschneiderter Blumenservice für Ihr Unternehmen
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.2rem", lineHeight: 1.95 }}>
              Ein ansprechendes und inspirierendes Arbeitsumfeld ist entscheidend für den Erfolg eines Unternehmens. Frische Blumen tragen dazu bei, eine angenehme Atmosphäre zu schaffen und das Wohlbefinden der Mitarbeiter sowie die Wahrnehmung durch Kunden und Geschäftspartner positiv zu beeinflussen.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.2rem", lineHeight: 1.95 }}>
              Unser Service umfasst flexible Lieferoptionen, die perfekt auf die Bedürfnisse Ihres Unternehmens abgestimmt sind – ob wöchentliche Lieferung, besondere Anlässe oder individuell geplante Dekorationen.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.2rem", lineHeight: 1.95 }}>
              Gestalten Sie Ihre Arbeitsumgebung blühend und einladend – wir kümmern uns um den Rest.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: "440px", position: "relative" }}>
            <Image
              src="/images/blume4.jpg"
              alt="Geschäftsraum mit stilvoll dekorierten Grünpflanzen bei Floristik Köster in Dorsten – frisch, einladend und entspannend"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* 3 Feature blocks */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              was wir bieten
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Leistungen für Geschäftskunden
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ background: "#ffffff", border: "1.5px solid rgba(27,43,122,0.08)" }}>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.8rem", lineHeight: 1.2 }}>Räume</p>
              <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.2 }}>
                Blumenarrangements, die Strahlen
              </h3>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.15rem", lineHeight: 1.9, flexGrow: 1 }}>
                Ob Empfangsbereich, Konferenzraum, Büro oder Veranstaltungsraum – unsere Blumenkreationen schaffen eine inspirierende, einladende Atmosphäre und sorgen für ein angenehmes Arbeitsumfeld, das Mitarbeiter motiviert und Besucher beeindruckt.
              </p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ background: "#1B2B7A" }}>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.8rem", lineHeight: 1.2 }}>Kreativ</p>
              <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.2 }}>
                Individuell auf Ihr Unternehmen abgestimmt
              </h3>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.78, fontSize: "1.15rem", lineHeight: 1.9, flexGrow: 1 }}>
                Unsere Floristen gestalten jede Lieferung mit Sorgfalt und Kreativität, sodass sie perfekt zur Firmenästhetik und Ihrem Büroambiente passt. Dabei berücksichtigen wir gerne Ihre Vorlieben und Ideen, um sicherzustellen, dass jedes Arrangement Ihre Erwartungen übertrifft.
              </p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ background: "#ffffff", border: "1.5px solid rgba(27,43,122,0.08)" }}>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.8rem", lineHeight: 1.2 }}>Qualität</p>
              <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.2 }}>
                Ihre Zufriedenheit ist unser Ziel
              </h3>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.15rem", lineHeight: 1.9, flexGrow: 1 }}>
                Bei Floristik Köster liegt unser Fokus darauf, Ihre Bedürfnisse maßgeschneidert zu erfüllen. Wir sind stolz darauf, Unternehmen dabei zu unterstützen, eine einladende und positive Arbeitsumgebung zu schaffen – mit frischen Blumenlieferungen von höchster Qualität.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Kontakt */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                Kontakt aufnehmen
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Entdecken Sie unsere maßgeschneiderten Blumenlieferdienste
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.72, fontSize: "1.2rem", lineHeight: 1.95 }}>
              Lassen Sie sich zeigen, wie Floristik Köster Ihr Unternehmen mit frischen, individuell gestalteten Blumenarrangements bereichern kann. Kontaktieren Sie uns für weitere Informationen oder eine persönliche Beratung – wir finden gemeinsam die perfekte Lösung für Ihr Büro oder Ihre Veranstaltung.
            </p>
            <div className="flex flex-col gap-3" style={{ marginTop: "0.5rem" }}>
              <a
                href="tel:023629993954"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.25rem", textDecoration: "none", display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <span style={{ color: "#C4545A", fontWeight: 700 }}>Telefon:</span> 02362 9993954
              </a>
              <a
                href="tel:01774878890"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.25rem", textDecoration: "none", display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <span style={{ color: "#C4545A", fontWeight: 700 }}>Mobil:</span> 0177 4878890
              </a>
              <a
                href="mailto:info@floristikkoester.de"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.25rem", textDecoration: "none", display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <span style={{ color: "#C4545A", fontWeight: 700 }}>Mail:</span> info@floristikkoester.de
              </a>
            </div>
            <div className="flex gap-4 flex-wrap" style={{ marginTop: "0.5rem" }}>
              <a
                href="mailto:info@floristikkoester.de"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FAF4EE",
                  background: "#C4545A",
                  fontSize: "0.9rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                E-Mail schreiben
              </a>
              <a
                href="https://wa.me/491774878890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  border: "1.5px solid rgba(27,43,122,0.25)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: "440px", position: "relative" }}>
            <Image
              src="/images/flower1.jpeg"
              alt="Geschäftsraum mit stilvoll dekorierten Grünpflanzen bei Floristik Köster in Dorsten"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Liefergebiete */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              wir kommen zu Ihnen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1rem" }}>
              Unsere Liefergebiete
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.15rem", lineHeight: 1.9, maxWidth: "560px", margin: "0 auto" }}>
              Bei Floristik Köster sind wir stolz darauf, Ihnen nicht nur erstklassige Blumenarrangements, sondern auch einen zuverlässigen Lieferservice anzubieten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liefergebiete.map((g) => (
              <div
                key={g.title}
                className="flex flex-col gap-3 rounded-2xl p-7"
                style={{ background: "#ffffff", border: "1.5px solid rgba(27,43,122,0.07)" }}
              >
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 }}>
                  {g.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.68, fontSize: "1.1rem", lineHeight: 1.9 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.1rem", lineHeight: 1.9, textAlign: "center", maxWidth: "720px", margin: "2.5rem auto 0" }}>
            Egal, wo Sie sich in diesen Gebieten befinden, wir von Floristik Köster sind bestrebt, Ihnen den besten Service zu bieten. Unsere sorgfältig ausgewählten und frisch gelieferten Blumen bringen Freude und Schönheit in Ihr Leben.
          </p>
        </div>
      </div>

      {/* Google Bewertung */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#FAF4EE" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Ihre Meinung zählt
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "1rem" }}>
          Wir freuen uns über Ihre Google-Bewertung
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.15rem", lineHeight: 1.9, maxWidth: "500px", margin: "0 auto 2rem" }}>
          Wenn Sie mit unserem Service glücklich sind, freuen wir uns sehr über eine positive Google-Bewertung. Ihre Rückmeldungen helfen uns, immer besser zu werden – und geben anderen Kunden einen Eindruck von der Qualität und Leidenschaft, die in unseren Blumenarrangements steckt.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/491774878890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#1B2B7A",
              fontSize: "0.9rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            WhatsApp +49 177 4878890
          </a>
          <a
            href="tel:023629993954"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              border: "1.5px solid rgba(27,43,122,0.25)",
              fontSize: "0.9rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "999px",
            }}
          >
            Festnetz 02362 9993954
          </a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
