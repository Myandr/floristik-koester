"use client";

import { useState } from "react";

const occasions = [
  {
    script: "zum Geburtstag",
    title: "Momente voller Freude",
    text: "Machen Sie jeden besonderen Anlass – vor allem Geburtstage – unvergesslich mit einem strahlenden Blumenstrauß, der Emotionen weckt und lange in Erinnerung bleibt. Unsere farbenfrohen Blumenarrangements setzen echte Akzente und stellen selbst die schönste Geburtstagstorte in den Schatten. Von leuchtenden Gerbera über elegante Pfingstrosen bis hin zu zarten Rosen – jede Blume steht für Freude, Glück und Liebe. Unsere Floristen stellen jeden Strauß individuell zusammen, sodass er die Persönlichkeit des Empfängers perfekt widerspiegelt und den Anlass stilvoll ergänzt. Verschenken Sie ein einzigartiges Blumenarrangement, das Gefühle sichtbar macht, ein Lächeln schenkt und zeigt, wie wichtig Ihnen dieser Mensch ist.",
  },
  {
    script: "zur Verlobung",
    title: "Ein Moment, der für immer bleibt",
    text: "Eine Verlobung ist ein unvergesslicher Moment – der Beginn eines neuen Kapitels voller Liebe, Nähe und Vorfreude auf die gemeinsame Zukunft. Um diesen besonderen Augenblick noch intensiver erlebbar zu machen, gestalten wir für Sie exklusive Blumenarrangements zur Verlobung, die Ihre Gefühle sichtbar machen. Ob klassische Rosen als Symbol der Liebe, leuchtende Gerbera für pure Lebensfreude oder zarte florale Akzente für eine romantische Atmosphäre – unsere Blumen setzen emotionale Highlights, die berühren und in Erinnerung bleiben. Jedes Arrangement wird mit Sorgfalt, Kreativität und viel Herz individuell für Sie zusammengestellt. Wir begleiten Sie gerne auf diesem besonderen Weg und sorgen dafür, dass Ihre Verlobung in voller Blütenpracht erstrahlt. Feiern Sie diesen einzigartigen Moment mit Blumen, die von Herzen kommen und Liebe spürbar machen.",
  },
  {
    script: "zur Hochzeit",
    title: "Gestalten Sie Ihre Hochzeit mit Liebe und Blüten",
    text: "Für den schönsten Tag Ihres Lebens gestalten unsere erfahrenen Floristen atemberaubende Hochzeitsarrangements, die Ihre Feier unvergesslich machen. Ob romantische Rosenbouquets, zarte Hortensiensträuße oder individuelle florale Akzente – jede Kreation wird perfekt auf Ihre Wünsche und den Stil Ihrer Hochzeit abgestimmt. Wir beraten Sie persönlich, damit die Blumen harmonisch zur Atmosphäre Ihres besonderen Tages passen. Von der Brautkrone über Tischdekorationen bis zu Boutonnières – jedes Detail wird liebevoll gestaltet, sodass Ihre Hochzeit in voller Blütenpracht erstrahlt. Vertrauen Sie auf unser gespürvolles Auge für Ästhetik, Kreativität und Qualität, um Ihre Traumhochzeit mit Blumen zu einem unvergesslichen Erlebnis voller Emotionen zu machen.",
  },
  {
    script: "zum Jubiläum",
    title: "Besondere Meilensteine stilvoll feiern",
    text: "Zeigen Sie Ihrem Partner, wie tief Ihre Liebe geht – mit einem beeindruckenden Blumenarrangement zum Jubiläum, das Emotionen weckt und Herzen berührt. Klassische rote Rosen stehen zeitlos für Leidenschaft, doch auch zarte Orchideen, elegante Lilien oder duftende Freesien verleihen Ihrer Botschaft eine ganz persönliche Note. Jede Blume wird von unseren erfahrenen Floristen sorgfältig ausgewählt und individuell arrangiert, um Ihre Liebe, Dankbarkeit und Verbundenheit authentisch widerzuspiegeln. Ob romantisch, modern oder elegant – wir gestalten Ihr Jubiläumsarrangement ganz nach Ihren Wünschen. Harmonische Farben, frische Blüten und besondere Details machen jedes Arrangement zu einem Ausdruck von Dankbarkeit und Freude – unvergessliche florale Grüße, die den besonderen Tag verschönern und lange in Erinnerung bleiben.",
  },
  {
    script: "zur Geburt",
    title: "Willkommen, kleines Wunder",
    text: "Begrüßen Sie den neuen Erdenbürger mit einer zarten und liebevoll gestalteten Blumenkomposition, die die Freude über die Geburt auf besondere Weise zum Ausdruck bringt. Pastellfarben und filigrane Blüten schaffen eine sanfte, harmonische Atmosphäre voller Wärme und Glück. Unsere erfahrenen Floristen beraten Sie persönlich, damit Sie das perfekte Arrangement auswählen – vom sanften Rosé über helle Creme- bis zu zarten Weißnuancen. Jedes Detail wird sorgfältig arrangiert, um Ihre Glückwünsche stilvoll zu übermitteln und die Ankunft des Babys gebührend zu feiern. Verschenken Sie Blumen, die Freude schenken, Emotionen wecken und diesen besonderen Moment für immer im Herzen der Familie festhalten.",
  },
  {
    script: "zum Abschied",
    title: "Würdevoll erinnern und trösten",
    text: "Wenn Worte nicht ausreichen, um Zuneigung und Respekt auszudrücken, sprechen Blumen für Sie. Wir bieten einfühlsame Blumenarrangements für Beerdigungen und Gedenkfeiern, die Ihren Abschied würdevoll, warmherzig und persönlich gestalten. Unsere erfahrenen Floristen beraten Sie, um ein Arrangement zu finden, das Ihre Gefühle und den Charakter des Verstorbenen widerspiegelt. Von klassischen Trauersträußen bis zu eleganten Kränzen – jedes Detail wird mit größtem Feingefühl umgesetzt. Sanfte Farben und harmonische Nuancen schaffen eine ruhige, tröstende Atmosphäre, in der Erinnerungen bewahrt werden. Schenken Sie Blumen, die Trost spenden, stille Worte ausdrücken und den Abschied zu einem würdevollen Moment der Erinnerung machen.",
  },
];

export function OccasionTextSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
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
            für jeden Moment
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
            Blumen für jeden Anlass
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.55,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "0.8rem",
              maxWidth: "480px",
              margin: "0.8rem auto 0",
            }}
          >
            Ob Freude, Liebe, Dankbarkeit oder Trost – wir finden die passenden Blumen für Ihren besonderen Moment.
          </p>
        </div>

        <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(27,43,122,0.1)" }}>
          {occasions.map((o, i) => (
            <div
              key={o.title}
              style={{ borderBottom: "1px solid rgba(27,43,122,0.1)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between py-7 gap-6 cursor-pointer"
                style={{ background: "none", border: "none", padding: "1.75rem 0" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    style={{
                      fontFamily: "var(--font-great-vibes)",
                      color: "#C4545A",
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      lineHeight: 1,
                    }}
                  >
                    {o.script}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#1B2B7A",
                      fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    {o.title}
                  </span>
                </div>
                <span
                  style={{
                    color: "#C4545A",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? "600px" : "0",
                  transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#1B2B7A",
                    opacity: 0.7,
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    paddingBottom: "2rem",
                    maxWidth: "780px",
                  }}
                >
                  {o.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://floristik-koester.lokalerflorist.de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#1B2B7A",
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
        </div>
      </div>
    </section>
  );
}
