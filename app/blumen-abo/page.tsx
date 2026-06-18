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
    desc: "Unser Lieferservice erstreckt sich auch auf die Stadtteile Brassert und Alt Marl in Marl sowie die Städte Bottrop und Gladbeck. Vertrauen Sie auf unsere Expertise und genießen Sie den Komfort unseres sorgfältigen Lieferservices.",
  },
  {
    script: "Haltern",
    title: "Haltern am See",
    desc: "Auch in Haltern am See sind wir für Sie da. Ob für Hochzeiten, Geburtstage oder andere festliche Anlässe – unsere wunderschönen Blumenarrangements erreichen Sie immer frisch und pünktlich.",
  },
];

const orderOptions = [
  {
    icon: "💬",
    method: "Per WhatsApp",
    detail: "01774878890",
    href: "https://wa.me/4901774878890",
    desc: "Schnell und unkompliziert direkt von Ihrem Smartphone.",
  },
  {
    icon: "✉",
    method: "Per E-Mail",
    detail: "info@floristik-koester.de",
    href: "mailto:info@floristik-koester.de",
    desc: "Teilen Sie uns Ihre Wünsche mit, wir kümmern uns um den Rest.",
  },
  {
    icon: "🌸",
    method: "Persönlich im Laden",
    detail: "Lippestraße 18, 46282 Dorsten",
    href: "https://maps.google.com/?q=Lippestraße+18,+46282+Dorsten",
    desc: "Kommen Sie vorbei und lassen Sie sich individuell beraten – wir freuen uns auf Sie!",
  },
];

const galleryImages = [
  {
    src: "/images/picture-2600.jpeg",
    alt: "Blumenstrauß von Floristik Köster in Dorsten – arrangiert aus weißen Sposa-Gerbera, leuchtend pinken Gerbera und cremefarbenen Rosen, frisch, elegant und lebendig",
  },
  {
    src: "/images/picture-2600-2.jpeg",
    alt: "Blumenstrauß von Floristik Köster in Dorsten – arrangiert aus strahlenden Sonnenblumen und leuchtend orangefarbenen Gerbera, warm, fröhlich und lebendig",
  },
  {
    src: "/images/picture-2600-3.jpeg",
    alt: "Blumenstrauß von Floristik Köster in Dorsten – harmonisch arrangiert aus weißen und pinken Rosen mit frischem grünem Beiwerk, natürlich, elegant und lebendig",
  },
];

export default function BlumenAbo() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "560px" }}>
        <Image
          src="/images/flower1.jpeg"
          alt="Blumen Abo Floristik Köster Dorsten – regelmäßige Blumenlieferungen"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.90) 0%, rgba(27,43,122,0.22) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-28 md:py-40 max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            regelmäßige Freude
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "640px",
            }}
          >
            Regelmäßige Blumenlieferungen – Freude für jeden Tag
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.75,
              fontSize: "1.1rem",
              lineHeight: 1.85,
              marginTop: "1.4rem",
              maxWidth: "520px",
            }}
          >
            Bei Floristik Köster wissen wir, wie sehr frische Blumen das Wohlbefinden und die Atmosphäre in Ihrem Zuhause verbessern. Ob wöchentliche Sträuße, monatliche Überraschungen oder individuell geplante Arrangements – wir sorgen dafür, dass Ihr Zuhause immer frisch, lebendig und einladend wirkt.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="https://wa.me/4901774878890"
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
              Abo starten
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(250,244,238,0.35)",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
              }}
            >
              Beraten lassen
            </a>
          </div>
        </div>
      </div>

      {/* Blumenfreunde Abo – So bestellen */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              flexibel & einfach
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1rem" }}>
              Blumenfreunde Abo – jederzeit kündbar
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "600px", margin: "0 auto" }}>
              Mit unserem Blumenfreunde Abo erhalten Sie regelmäßig frische Blumen, ganz nach Ihren Wünschen – ohne langfristige Verpflichtungen. Genießen Sie die Freude an frischen Sträußen, die Farbe, Duft und Lebensfreude in Ihr Zuhause bringen.
            </p>
          </div>

          <div className="mb-8 text-center">
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem" }}>
              So einfach können Sie Ihr Abo bestellen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderOptions.map((opt) => (
              <a
                key={opt.method}
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-2xl p-8 flex flex-col gap-3 group"
                style={{
                  background: "#FAF4EE",
                  border: "1.5px solid rgba(196,84,90,0.1)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{opt.icon}</span>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.4rem" }}>
                  {opt.method}
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {opt.detail}
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1rem", lineHeight: 1.8 }}>
                  {opt.desc}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Starten Sie noch heute Ihr Blumenfreunde Abo und erleben Sie jeden Monat frische Inspiration direkt nach Hause.
            </p>
          </div>
        </div>
      </div>

      {/* Maximale Flexibilität */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#1B2B7A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
                keine Bindung
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Maximale Flexibilität – Jederzeit kündbar, keine Vertragsbindung
              </h2>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9 }}>
                Unser Blumenfreunde Abo passt sich ganz Ihrem Leben an. Es gibt keine Verträge, keine versteckten Kosten und keine Verpflichtungen!
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                "Sie genießen regelmäßig frische Blumen, ohne in eine Kostenfalle zu geraten.",
                "Kündigen können Sie jederzeit, schnell und unkompliziert – egal ob per WhatsApp, E-Mail oder direkt bei uns im Laden.",
                "Haben Sie Fragen? Wir helfen Ihnen gerne weiter!",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span style={{ color: "#F4C2C9", fontSize: "0.5rem", marginTop: "0.7rem", flexShrink: 0 }}>&#9679;</span>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
                    {text}
                  </p>
                </div>
              ))}
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.6rem", lineHeight: 1.3, marginTop: "0.5rem" }}>
                Blumenfreude – ganz nach Ihrem Rhythmus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flexible Lieferungen + Image */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ height: "420px", position: "relative" }}>
            <Image
              src="/images/blume1.jpg"
              alt="Flexible Blumenlieferungen von Floristik Köster"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-5 py-6">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              nach Ihren Wünschen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Flexible Blumenlieferungen – genau nach Ihren Wünschen
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Mit unseren flexiblen Lieferoptionen gestalten wir den Blumenservice so, dass er perfekt zu Ihnen passt. Ob wöchentlich, monatlich oder individuell – wir liefern Ihre Blumen genau dann, wann Sie es möchten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              So bleibt Ihr Zuhause oder das Zuhause Ihrer Liebsten immer frisch, farbenfroh und liebevoll dekoriert, ganz ohne Aufwand für Sie.
            </p>
            <a
              href="https://wa.me/4901774878890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#C4545A",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.8rem 1.8rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Lieblingslieferung planen
            </a>
          </div>
        </div>
      </div>

      {/* Kreative Blumenarrangements + Image */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 py-6 order-2 md:order-1">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              individuell & liebevoll
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Kreative Blumenarrangements – individuell und liebevoll gestaltet
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Unsere Floristen gestalten jede Lieferung mit Sorgfalt und Kreativität, sodass Ihre Räume oder die Ihrer Liebsten eine perfekte Wohlfühlatmosphäre erhalten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Dabei berücksichtigen wir gerne Ihre persönlichen Vorlieben und Ideen, um sicherzustellen, dass jedes Arrangement Ihre Erwartungen übertrifft und Freude, Farbe sowie Emotionen vermittelt.
            </p>
            <a
              href="https://wa.me/4901774878890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.8rem 1.8rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Persönliche Lieferung bestellen
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden order-1 md:order-2" style={{ height: "420px", position: "relative" }}>
            <Image
              src="/images/blume3.jpg"
              alt="Kreative Blumenarrangements von Floristik Köster"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Lieferkosten sparen */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ height: "380px", position: "relative" }}>
            <Image
              src="/images/picture-2600-4.jpeg"
              alt="Blumenstrauß frisch gebunden – Floristik Köster"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-5 py-6">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              clever sparen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Blumenfreunde Abo – regelmäßig frische Blumen & Lieferkosten sparen
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Mit unserem Blumenfreunde Abo erhalten Sie regelmäßig frische Blumen – ganz nach Ihren Wünschen, direkt zu Ihnen nach Hause oder zu Ihren Liebsten. Sie entscheiden selbst, wie oft Sie beliefert werden möchten.
            </p>
            <div
              className="rounded-xl p-6"
              style={{ background: "#1B2B7A" }}
            >
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.5rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                Besonders clever
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.9, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Bei vier Lieferungen pro Monat zahlen Sie nur für zwei Lieferungen die Versandkosten – so genießen Sie doppelte Freude bei halben Lieferkosten!
              </p>
            </div>
            <a
              href="https://wa.me/4901774878890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#C4545A",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.8rem 1.8rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Abo jetzt starten
            </a>
          </div>
        </div>
      </div>

      {/* Ihre Zufriedenheit */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 py-6">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              erstklassiger Service
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Ihre Zufriedenheit ist unser Ziel
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Bei Floristik Köster liegt unser Fokus darauf, Ihre Wünsche maßgeschneidert zu erfüllen und Ihnen einen erstklassigen Service zu bieten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir unterstützen private Haushalte dabei, eine einladende, positive Wohlfühlatmosphäre zu schaffen – mit frischen Blumenlieferungen von höchster Qualität, die Ihr Zuhause lebendig, farbenfroh und emotional bereichernd gestalten.
            </p>
            <div className="flex gap-3 flex-wrap mt-2">
              <a
                href="https://wa.me/4901774878890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FAF4EE",
                  background: "#C4545A",
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                Online bestellen
              </a>
              <a
                href="tel:023629993954"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  border: "1.5px solid rgba(27,43,122,0.25)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "999px",
                }}
              >
                Persönlich beraten lassen
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: "400px", position: "relative" }}>
            <Image
              src="/images/blume4.jpg"
              alt="Erstklassiger Blumenservice Floristik Köster Dorsten"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* CTA Kontakt */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
            maßgeschneiderte Blumenlieferdienste
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.2rem" }}>
            Entdecken Sie noch heute unsere Blumenlieferdienste
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "620px", margin: "0 auto 2rem" }}>
            Erleben Sie, wie Floristik Köster Ihr Zuhause mit frischen, individuell gestalteten Blumenarrangements bereichern kann. Ob für regelmäßige Lieferungen, besondere Anlässe oder liebevolle Überraschungen – wir gestalten jedes Bouquet nach Ihren Wünschen. Kontaktieren Sie uns jetzt für weitere Informationen oder eine persönliche Beratung.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a
              href="https://wa.me/4901774878890"
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
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              WhatsApp: 01774878890
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                border: "1.5px solid rgba(27,43,122,0.25)",
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
              }}
            >
              02362 9993954
            </a>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <a href="mailto:info@floristik-koester.de" style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.05rem", textDecoration: "none" }}>
              info@floristik-koester.de
            </a>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.5, fontSize: "0.97rem" }}>
              Mobil: 01774878890 · Telefon: 023629993954
            </p>
          </div>
        </div>
      </div>

      {/* Online Shops */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
            noch mehr Blumengrüße
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1rem" }}>
            Entdecken Sie noch mehr Blumengrüße
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Hier finden Sie eine vielfältige Auswahl an liebevoll gestalteten Sträußen und Arrangements – perfekt, um Freude und Emotionen zu verschenken. Verschenken Sie Blumen, die Herzen berühren – bequem online!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://floristik-koester.lokalerflorist.de"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-8 flex flex-col items-center gap-3 group"
              style={{
                background: "#FAF4EE",
                border: "1.5px solid rgba(196,84,90,0.12)",
                textDecoration: "none",
                minWidth: "200px",
              }}
            >
              <div style={{ position: "relative", width: 72, height: 72 }}>
                <Image src="/images/logo.png" alt="Floristik Köster Blumen Onlineshop" fill className="object-contain" />
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1rem", fontWeight: 600 }}>
                Unser Blumen Onlineshop
              </p>
            </a>
            <a
              href="https://www.fleurop.de"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-8 flex flex-col items-center gap-3"
              style={{
                background: "#FAF4EE",
                border: "1.5px solid rgba(196,84,90,0.12)",
                textDecoration: "none",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "#1B2B7A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.8rem", lineHeight: 1 }}>Fl</span>
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1rem", fontWeight: 600 }}>
                Fleurop
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Liefergebiete */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              direkt zu Ihnen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.2rem" }}>
              Unsere Liefergebiete – Frische Blumen direkt zu Ihnen nach Hause
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "640px", margin: "0 auto" }}>
              Bei Floristik Köster bringen wir Blumenfreude und besondere Momente direkt zu Ihnen – frisch von Hand gebunden, kreativ gestaltet und zuverlässig geliefert. Egal, wo Sie sich in unserer Region befinden, wir sorgen dafür, dass Ihre Blumensträuße pünktlich, frisch und liebevoll gebunden bei Ihnen ankommen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {liefergebiete.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl p-8 flex flex-col gap-3"
                style={{ background: "#ffffff", border: "1.5px solid rgba(196,84,90,0.1)" }}
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
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "660px", margin: "0 auto 2rem" }}>
              Egal, wo Sie sich in unseren Liefergebieten befinden: Wir sorgen für Blumen, die Freude machen. Unsere Sträuße werden mit Liebe von Hand gebunden, sorgfältig ausgewählt und termingerecht geliefert – für unvergessliche Momente. Bestellen Sie noch heute und erleben Sie, wie Frische, Qualität und persönlicher Service Ihre Blumenfreude zu etwas ganz Besonderem machen.
            </p>
            <a
              href="https://wa.me/4901774878890"
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
                display: "inline-block",
              }}
            >
              Noch heute bestellen
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
