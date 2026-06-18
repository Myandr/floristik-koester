import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export default function UnserTeam() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/blume2.jpg"
          alt="Unser Team Floristik Köster"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(27,43,122,0.6) 0%, rgba(27,43,122,0.75) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            mit Herzblut dabei
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "600px",
            }}
          >
            Unser Team
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.7,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginTop: "1.2rem",
              maxWidth: "480px",
            }}
          >
            Leidenschaftliche Floristen, die Ihnen mit Herz und Erfahrung zur Seite stehen.
          </p>
        </div>
      </div>

      {/* Dorine Köster */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden" style={{ height: "540px", position: "relative" }}>
              <Image
                src="/images/Dorine KÃ¶ster.jpg"
                alt="Dorine Köster – Floristin mit Herz"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div>
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2.4rem", lineHeight: 1.2, marginBottom: "0.2rem" }}>
                  Dorine Köster
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Ihre Floristin mit Herz und Leidenschaft
                </p>
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.75, fontSize: "1.1rem", lineHeight: 1.95 }}>
                Blumen sind mehr als Dekoration – sie erzählen Geschichten, drücken Gefühle aus und machen besondere Momente unvergesslich.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.95 }}>
                Mein Name ist Dorine Köster, und diese Liebe zur Floristik begleitet mich seit vielen Jahren. Meine Ausbildung durfte ich unter der Anleitung von drei Meisterfloristen absolvieren, die mir ihr Wissen, ihre Kreativität und ihre handwerklichen Techniken vermittelt haben. Heute setze ich diese Erfahrung mit Leidenschaft und Herzblut in meinem Laden in der Lippestraße um.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.95 }}>
                Für mich stehen Schönheit, Qualität und individuelle Beratung an erster Stelle. Deshalb bilde ich mich regelmäßig weiter, um Ihnen die neuesten Trends, Techniken und kreativen Ideen zu präsentieren. Ob liebevoll gestaltete Sträuße, stilvolle Dekorationen oder maßgeschneiderte florale Konzepte – ich freue mich darauf, Ihre Wünsche mit viel Hingabe Wirklichkeit werden zu lassen.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.1rem", lineHeight: 1.95, fontStyle: "italic" }}>
                Schauen Sie vorbei – ich freue mich darauf, Sie persönlich kennenzulernen!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #C4545A33, transparent)" }} />
      </div>

      {/* Blake */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Text – links auf Desktop */}
            <div className="flex flex-col gap-6 lg:order-1">
              <div>
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2.4rem", lineHeight: 1.2, marginBottom: "0.2rem" }}>
                  Blake
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Chief Happiness Officer (CHO) &amp; Schnüffelprofi für frische Blumen
                </p>
              </div>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.75, fontSize: "1.1rem", lineHeight: 1.95 }}>
                Besucht unseren charmanten Begleiter Blake persönlich!
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.95 }}>
                Mit seinem liebevollen Wesen und seiner entspannten Art ist Blake nicht nur unser treuer Ladenhund, sondern auch unser inoffizieller „Kuschelvorstand". Er liebt Streicheleinheiten und sorgt mit seiner fröhlichen, herzlichen Art für gute Laune bei Groß und Klein.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.1rem", lineHeight: 1.95, fontStyle: "italic" }}>
                Kommt vorbei und lasst euch von Blakes liebenswerter Ausstrahlung verzaubern – er freut sich schon auf euch!
              </p>
            </div>

            {/* Photos – rechts auf Desktop */}
            <div className="grid grid-cols-2 gap-4 lg:order-2">
              <div className="rounded-2xl overflow-hidden" style={{ height: "380px", position: "relative" }}>
                <Image
                  src="/images/blake.png"
                  alt="Blake – Ladenhund bei Floristik Köster"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-10" style={{ height: "380px", position: "relative" }}>
                <Image
                  src="/images/blake2.png"
                  alt="Blake entspannt im Blumenladen"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
