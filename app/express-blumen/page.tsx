import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const liefergebiete = [
  {
    script: "Dorsten",
    title: "Dorstener Altstadt, Hardt & Östrich",
    desc: "Wir versorgen die historische Altstadt von Dorsten sowie die Stadtteile Hardt und Östrich mit frischen Blumen und stilvollen Arrangements. Ob für Ihr Zuhause, Ihr Geschäft oder besondere Anlässe – wir sind für Sie da.",
  },
  {
    script: "Hervest",
    title: "Hervest & Holsterhausen",
    desc: "Auch in den Stadtteilen Hervest und Holsterhausen liefern wir unsere Blumensträuße direkt zu Ihnen nach Hause. Freuen Sie sich auf kreative Dekorationen, handgebunden und mit viel Liebe zum Detail.",
  },
  {
    script: "Region",
    title: "Wulfen, Deuten, Lembeck, Rhade & Reken",
    desc: "Unsere Liefergebiete umfassen auch Wulfen, Deuten, Lembeck, Rhade sowie die nahegelegene Stadt Reken. Wir bringen frische Blumen direkt zu Ihnen und sorgen dafür, dass Ihre besonderen Momente noch schöner werden.",
  },
  {
    script: "Schermbeck",
    title: "Schermbeck, Gahlen & Kirchhellen",
    desc: "In den Gemeinden Schermbeck, Gahlen und Kirchhellen sind wir ebenfalls unterwegs. Ob für private Feierlichkeiten, geschäftliche Veranstaltungen oder einfach nur, um jemandem eine Freude zu machen – wir liefern pünktlich, zuverlässig und frisch.",
  },
  {
    script: "Marl & Bottrop",
    title: "Marl Brassert, Alt Marl, Bottrop & Gladbeck",
    desc: "Unser Lieferservice erstreckt sich auch auf die Stadtteile Brassert und Alt Marl in Marl sowie die Städte Bottrop und Gladbeck. Vertrauen Sie auf unsere Expertise und genießen Sie den Komfort unseres sorgfältigen Online-Lieferservices.",
  },
  {
    script: "Haltern",
    title: "Haltern am See",
    desc: "Auch in Haltern am See sind wir für Sie da. Ob für Hochzeiten, Geburtstage oder andere festliche Anlässe – unsere wunderschönen Blumenarrangements erreichen Sie immer frisch und pünktlich.",
  },
];

export default function ExpressBlumen() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "560px" }}>
        <Image
          src="/images/blume1.jpg"
          alt="Blumen per Express – Floristik Köster Dorsten"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.88) 0%, rgba(27,43,122,0.3) 100%)", zIndex: 1 }}
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
            Willkommen in unserem Online-Blumenshop
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
            Blumensträuße, die Gefühle sprechen lassen
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.8,
              fontSize: "1.15rem",
              lineHeight: 1.75,
              marginTop: "1.2rem",
              maxWidth: "520px",
            }}
          >
            Ein Klick auf unser Logo genügt – wir kümmern uns um den Rest.
          </p>

          {/* Hinweis Vorbestellung */}
          <div
            className="mt-6 rounded-xl px-6 py-4"
            style={{
              background: "rgba(244,194,201,0.15)",
              border: "1px solid rgba(244,194,201,0.4)",
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#F4C2C9",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
            >
              Für maximale Frische planen wir mit Sorgfalt. Bitte bestellen Sie Ihren Blumenstrauß{" "}
              <strong style={{ color: "#FAF4EE" }}>idealerweise 3 Tage im Voraus</strong>, damit wir jede Blume frisch für Sie auswählen können.
            </p>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="https://floristik-koester.lokalerflorist.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Jetzt Blumen auswählen und Freude verschenken
            </a>
          </div>
        </div>
      </div>

      {/* Über uns – langer Fließtext */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.2,
                marginBottom: "0.4rem",
              }}
            >
              von Herzen für Sie
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Floristik Köster in Dorsten – Blumen, die von Herzen kommen
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "1.15rem",
              lineHeight: 1.85,
              fontWeight: 600,
            }}
          >
            Sie möchten Blumen kaufen, die nicht nur frisch sind, sondern mit Liebe gestaltet werden?
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9 }}>
            Dann sind Sie bei Floristik Köster in Dorsten genau richtig. Seit vielen Jahren sind wir als leidenschaftliche Floristen in Dorsten für unsere Kundinnen und Kunden da. Mit kreativen Ideen, einem feinen Gespür für Farben und Formen und dem Anspruch, für jeden Anlass das passende Blumenarrangement zu gestalten, entstehen bei uns individuelle Kreationen mit Persönlichkeit.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9 }}>
            Ob Hochzeit, Geburtstag, Jubiläum, Trauerfeier oder einfach eine kleine Aufmerksamkeit zwischendurch – bei Floristik Köster erhalten Sie Blumenarrangements, die Emotionen ausdrücken. Jedes Bouquet wird individuell für Sie angefertigt und mit großer Sorgfalt von Hand gebunden.
          </p>

          <div
            className="rounded-2xl p-8 flex flex-col gap-3"
            style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "1.8rem",
                lineHeight: 1.2,
              }}
            >
              Persönliche Beratung & höchste Frische
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir nehmen uns Zeit für Ihre Wünsche und beraten Sie persönlich. Qualität und Frische stehen bei uns an erster Stelle: Unsere Blumen beziehen wir täglich frisch von ausgewählten Gärtnereien und Märkten. So können wir Ihnen stets Blumen anbieten, die lange Freude bereiten.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 flex flex-col gap-3"
            style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "1.8rem",
                lineHeight: 1.2,
              }}
            >
              Familiäre Atmosphäre & moderne Floristik
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Viele unserer Kundinnen und Kunden schätzen besonders die familiäre Atmosphäre in unserem Blumenladen in Dorsten. Hier verbinden sich traditionelles Floristenhandwerk und moderne Floristik zu einem Einkaufserlebnis, das inspiriert. Ob Tischdekoration, festliches Event oder frische Akzente für Ihr Zuhause – bei uns finden Sie neue Ideen und liebevolle Details.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "1.8rem",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              Ihr Florist in Dorsten mit Herz & Erfahrung
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9 }}>
              Als Florist mit Herzblut wissen wir: Ein liebevoll gebundener Blumenstrauß sagt oft mehr als tausend Worte. Ob klassisch, romantisch, elegant oder extravagant – wir setzen Ihre Vorstellungen mit Erfahrung, Kreativität und Gefühl um.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9, marginTop: "1rem" }}>
              Besuchen Sie Floristik Köster in Dorsten und lassen Sie sich inspirieren. Wir freuen uns darauf, auch für Sie ein ganz besonderes Blumenarrangement zu gestalten. Gerne beraten wir Sie persönlich – im Laden, telefonisch oder nach vorheriger Absprache.
            </p>
          </div>
        </div>
      </div>

      {/* Service Bilder + Text */}
      <div className="px-6 md:px-10 lg:px-16 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            <div className="rounded-2xl overflow-hidden" style={{ height: "300px", position: "relative" }}>
              <Image
                src="/images/blume2.jpg"
                alt="Blumenstrauß von Floristik Köster in Dorsten – außergewöhnlich mit frischen Artischocken, harmonisch kombiniert mit zartem Laub und dekorativen Pflanzen, rustikal und elegant"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ height: "300px", position: "relative" }}>
              <Image
                src="/images/blume3.jpg"
                alt="Kranz von Floristik Köster in Dorsten – elegant aus dunklen Blumen in Beerentönen und Lila, kunstvoll kombiniert mit Rosen und weiteren Blütenarten, edel und ausdrucksstark"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ height: "300px", position: "relative" }}>
              <Image
                src="/images/blume4.jpg"
                alt="Blumenstrauß von Floristik Köster in Dorsten – liebevoll arrangiert aus verschiedenen Eustoma-Blumen, zarte Blüten in unterschiedlichen Farben, elegant, leicht und frühlingshaft"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.2,
              }}
            >
              mit Liebe gebunden, pünktlich geliefert
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Unser Online-Lieferservice
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9 }}>
              Lassen Sie sich von unserer vielfältigen Auswahl inspirieren und bestellen Sie Ihre Blumen bequem online. Wir wählen jede Blume mit größter Sorgfalt aus, binden Ihren Strauß frisch von Hand und sorgen für eine zuverlässige, pünktliche Lieferung. So kommen Ihre Blumen genau so an, wie sie sollen – frisch, hochwertig und voller Ausdruck.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.08rem", lineHeight: 1.9 }}>
              Vertrauen Sie auf unseren persönlichen Service und unsere Leidenschaft für Floristik. Bei Floristik Köster verbinden wir Qualität, Erfahrung und Liebe zum Detail, um Ihre Wünsche individuell umzusetzen. Besuchen Sie uns online oder persönlich und erleben Sie den Komfort und die Qualität von Floristik Köster in Dorsten.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#C4545A",
                fontSize: "1.15rem",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              Blumen sagen mehr als tausend Worte – wir helfen Ihnen, die richtigen zu finden.
            </p>
          </div>
        </div>
      </div>

      {/* Liefergebiete */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.2,
                marginBottom: "0.3rem",
              }}
            >
              direkt zu Ihnen
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                marginBottom: "1.2rem",
              }}
            >
              Unsere Liefergebiete – Frische Blumen direkt zu Ihnen nach Hause
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.6,
                fontSize: "1.05rem",
                lineHeight: 1.85,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              Bei Floristik Köster bringen wir Blumenfreude und besondere Momente direkt zu Ihnen – frisch von Hand gebunden, kreativ gestaltet und zuverlässig geliefert. Egal, wo Sie sich in unserer Region befinden, wir sorgen dafür, dass Ihre Blumensträuße und Dekorationen pünktlich, frisch und liebevoll gebunden bei Ihnen ankommen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {liefergebiete.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl p-8 flex flex-col gap-3"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", lineHeight: 1.2 }}>
                  {area.script}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {area.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "0.97rem", lineHeight: 1.8 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: "#1B2B7A" }}>
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Ihr Vorteil
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, marginBottom: "1.2rem" }}>
              Ihr Vorteil mit Floristik Köster
            </h3>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "660px", margin: "0 auto" }}>
              Egal, wo Sie sich in unseren Liefergebieten befinden: Wir sorgen für Blumen, die Freude machen. Unsere Sträuße werden mit Liebe von Hand gebunden, sorgfältig ausgewählt und termingerecht geliefert – für unvergessliche Momente. Bestellen Sie noch heute und erleben Sie, wie Frische, Qualität und persönlicher Service Ihre Blumenfreude zu etwas ganz Besonderem machen.
            </p>
          </div>
        </div>
      </div>

      {/* Produkt-Bilder + CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              Wir freuen uns auf Sie
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "2rem" }}>
              Jetzt Blumen auswählen und Freude verschenken
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff" }}>
              <div className="relative" style={{ height: "280px" }}>
                <Image
                  src="/images/blume1.jpg"
                  alt="Herzförmiger Blumenstrauß aus roten und rot-orangen Rosen bei Floristik Köster in Dorsten – romantisch, ausdrucksstark und liebevoll gestaltet"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "0.95rem", padding: "1rem 1.2rem", lineHeight: 1.5, opacity: 0.8 }}>
                Herzstrauß mit roten und rot-orangen Rosen – Floristik Köster Dorsten
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff" }}>
              <div className="relative" style={{ height: "280px" }}>
                <Image
                  src="/images/blume3.jpg"
                  alt="Blumenstrauß mit gelben Tulpen, weißen Gerbera und farblich passenden Blumen bei Floristik Köster in Dorsten – frisch, fröhlich und harmonisch"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "0.95rem", padding: "1rem 1.2rem", lineHeight: 1.5, opacity: 0.8 }}>
                Blumenstrauß mit gelben Tulpen und weißen Gerbera – Floristik Köster Dorsten
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff" }}>
              <div className="relative" style={{ height: "280px" }}>
                <Image
                  src="/images/blume4.jpg"
                  alt="Blumenstrauß mit rosa Rosen, dekorativen Zweigen und Schmuckdraht bei Floristik Köster in Dorsten – romantisch, elegant und modern"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "0.95rem", padding: "1rem 1.2rem", lineHeight: 1.5, opacity: 0.8 }}>
                Blumenstrauß mit rosa Rosen und Schmuckdraht – Floristik Köster Dorsten
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="https://wa.me/491774878890"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-8 flex flex-col gap-3 items-center text-center"
              style={{ background: "#25D366", textDecoration: "none" }}
            >
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#ffffff", fontSize: "2rem", lineHeight: 1.2 }}>WhatsApp</p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#ffffff", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                +49 177 4878890
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#ffffff", opacity: 0.85, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Blumen bestellen per WhatsApp
              </p>
            </a>
            <a
              href="tel:023629993954"
              className="rounded-2xl p-8 flex flex-col gap-3 items-center text-center"
              style={{ background: "#1B2B7A", textDecoration: "none" }}
            >
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "2rem", lineHeight: 1.2 }}>Festnetz</p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                02362 9993954
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Jetzt anrufen
              </p>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.5,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                width: "100%",
                textAlign: "center",
              }}
            >
              Inspiration & aktuelle Sträuße
            </p>
            {[
              { label: "Instagram", href: "https://www.instagram.com/floristik.koester/" },
              { label: "Facebook", href: "https://www.facebook.com/floristikkoester" },
              { label: "TikTok", href: "https://www.tiktok.com/@floristik.koester" },
              { label: "E-Mail", href: "mailto:info@floristik-koester.de" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  border: "1.5px solid rgba(27,43,122,0.25)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.7rem 1.6rem",
                  borderRadius: "999px",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Google Bewertungen */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2 }}>
            Ihre Meinung zählt
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, lineHeight: 1.2 }}>
            Wir freuen uns sehr über Ihre Google-Bewertung – teilen Sie Ihre Blumenfreude mit uns!
          </h2>
          <div
            className="rounded-2xl p-8 text-left w-full"
            style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", lineHeight: 1.2, marginBottom: "0.75rem" }}>
              Ihre Zufriedenheit liegt uns am Herzen
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wenn Sie mit unserem Service glücklich sind, freuen wir uns sehr über eine positive Google-Bewertung. Ihre Rückmeldungen helfen uns, immer besser zu werden – und geben anderen Kunden einen Eindruck von der Qualität und Leidenschaft, die in unseren Blumenarrangements steckt.
            </p>
          </div>
          <a
            href="https://g.page/r/floristik-koester/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#C4545A",
              fontSize: "0.85rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.9rem 2.4rem",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Ihre Meinung zählt – jetzt auf Google bewerten
          </a>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.9rem" }}>
            Rezensionen Floristik Köster · Danke, dass Sie uns helfen, noch besser zu werden!
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
