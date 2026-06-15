"use client";

const navLinks = [
  { label: "Floristik", href: "/#anlass" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
];

const services = [
  { label: "Blumensträuße", href: "https://floristik-koester.lokalerflorist.de" },
  { label: "Hochzeitsfloristik", href: "/#anlass" },
  { label: "Trauerfloristik", href: "/#anlass" },
  { label: "Event & Tischdeko", href: "/business-flowers" },
  { label: "Business Flowers", href: "/business-flowers" },
  { label: "Blumen-Abos", href: "/blumen-abo" },
];

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  color: "#ffffff",
  fontSize: "0.78rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  opacity: 0.5,
  marginBottom: "1.1rem",
  display: "block",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  color: "#ffffff",
  fontSize: "1.45rem",
  opacity: 0.9,
  textDecoration: "none",
  lineHeight: 2.0,
  display: "block",
  transition: "opacity 0.2s",
};

export function SiteFooter() {
  return (
    <footer style={{ background: "#1B2B7A" }}>
      {/* Top divider */}
      <div style={{ height: "1px", background: "rgba(250,244,238,0.08)" }} />

      {/* Main grid */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.3fr] gap-12 lg:gap-10">

            {/* ── Brand ── */}
            <div className="flex flex-col gap-6">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "#ffffff",
                    fontSize: "3rem",
                    lineHeight: 1.15,
                  }}
                >
                  Floristik Köster
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#ffffff",
                    opacity: 0.5,
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: "0.35rem",
                  }}
                >
                  Dorsten
                </p>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#ffffff",
                  opacity: 0.8,
                  fontSize: "1.2rem",
                  lineHeight: 1.85,
                  maxWidth: "320px",
                }}
              >
                Vom Blütenglück zum Dekostück — handgefertigte Floristik mit Herzblut für jeden Anlass.
              </p>

              {/* Social */}
              <div className="flex gap-3 mt-1">
                {[
                  { label: "Instagram", href: "https://instagram.com/floristikkoester" },
                  { label: "Facebook", href: "https://facebook.com/FloristikKoester" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#1B2B7A",
                      background: "#F4C2C9",
                      fontSize: "0.8rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "0.6rem 1.4rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      opacity: 0.92,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.92")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Navigation ── */}
            <div>
              <span style={labelStyle}>Navigation</span>
              <nav>
                {navLinks.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Leistungen ── */}
            <div>
              <span style={labelStyle}>Leistungen</span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {services.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={linkStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Kontakt ── */}
            <div>
              <span style={labelStyle}>Kontakt</span>
              <div className="flex flex-col">
                {[
                  { value: "Lippestraße 18, 46282 Dorsten", href: "https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten" },
                  { value: "02362 9993954", href: "tel:023629993954" },
                  { value: "0177 4878890 (WhatsApp)", href: "https://wa.me/491774878890" },
                  { value: "info@floristik-koester.de", href: "mailto:info@floristik-koester.de" },
                ].map((c) => (
                  <a
                    key={c.value}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
                  >
                    {c.value}
                  </a>
                ))}
              </div>

              <div style={{ marginTop: "1.8rem" }}>
                <span style={labelStyle}>Öffnungszeiten</span>
                {[
                  { day: "Mo – Fr", time: "09:30 – 18:00 Uhr" },
                  { day: "Samstag", time: "09:30 – 14:00 Uhr" },
                  { day: "Sonntag", time: "Blumenanlieferungen" },
                ].map((o) => (
                  <div
                    key={o.day}
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#ffffff",
                      fontSize: "1.35rem",
                      opacity: 0.9,
                      lineHeight: 2.0,
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "space-between",
                      maxWidth: "240px",
                    }}
                  >
                    <span>{o.day}</span>
                    <span style={{ opacity: 0.75 }}>{o.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(250,244,238,0.08)" }}>
        <div className="px-6 md:px-10 lg:px-16 py-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#ffffff",
              opacity: 0.55,
              fontSize: "0.9rem",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()} Floristik Köster. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FAF4EE",
                  opacity: 0.28,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.28")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
