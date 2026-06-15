import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export default function PartnerPage() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div
        className="px-6 md:px-10 lg:px-16 pt-40 pb-24"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            starke Gemeinschaft
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "700px",
            }}
          >
            Unsere Partner
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.65,
              fontSize: "1.1rem",
              lineHeight: 1.85,
              marginTop: "1.2rem",
              maxWidth: "540px",
            }}
          >
            Gute Floristik entsteht auch durch gute Partnerschaften. Wir arbeiten mit lokalen Betrieben und Lieferanten zusammen, die unsere Leidenschaft für Qualität und Handwerk teilen.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6"
            style={{ background: "#ffffff", border: "1px solid rgba(27,43,122,0.07)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              gemeinsam wachsen
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                maxWidth: "580px",
              }}
            >
              Interesse an einer Zusammenarbeit?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.65,
                fontSize: "1.05rem",
                lineHeight: 1.85,
                maxWidth: "520px",
              }}
            >
              Ob als Eventpartner, Hochzeitsplaner oder lokales Unternehmen – wir freuen uns über Kooperationsanfragen. Kontaktieren Sie uns direkt und wir besprechen gemeinsam, wie eine Zusammenarbeit aussehen kann.
            </p>
            <div className="flex gap-4 flex-wrap justify-center mt-2">
              <a
                href="mailto:info@floristik-koester.de"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FAF4EE",
                  background: "#1B2B7A",
                  fontSize: "0.85rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                E-Mail schreiben
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
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
