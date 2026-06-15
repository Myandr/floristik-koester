
function InstagramIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/floristikkoester",
    script: "@floristikkoester",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/FloristikKoester",
    script: "FloristikKoester",
    icon: FacebookIcon,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@floristik.koester",
    script: "@floristik.koester",
    icon: TikTokIcon,
  },
];

export function SocialSection() {
  return (
    <>
    <section id="galerie" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">

          {/* Text */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                lineHeight: 1.2,
              }}
            >
              Einblicke & Inspiration
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(1.7rem, 3.2vw, 2.7rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                maxWidth: "560px",
              }}
            >
              Aktuelle Sträuße, Dekorationen und kreative Ideen aus unserem Geschäft.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.55,
                fontSize: "1.2rem",
                lineHeight: 1.8,
                maxWidth: "500px",
              }}
            >
              Folgen Sie uns für tägliche Inspiration und bleiben Sie immer auf dem neuesten Stand.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 transition-opacity hover:opacity-75"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    color: "#1B2B7A",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <s.icon />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#1B2B7A",
                    fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                    fontWeight: 600,
                    lineHeight: 1,
                    minWidth: "150px",
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "#C4545A",
                    fontSize: "1.7rem",
                    lineHeight: 1,
                  }}
                >
                  {s.script}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#C4545A",
                    fontSize: "1.3rem",
                    marginLeft: "0.25rem",
                    transition: "transform 0.2s",
                  }}
                  className="group-hover:translate-x-1 inline-block"
                >
                  →
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
