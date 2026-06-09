import { BlurTextEffect } from "./BlurTextEffect";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/floristikkoester",
    script: "@floristikkoester",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/FloristikKoester",
    script: "FloristikKoester",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@floristik.koester",
    script: "@floristik.koester",
  },
];

export function SocialSection() {
  return (
    <>
    <section id="galerie" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ background: "#FDF0F2" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">

          {/* Text */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#C4545A",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              Einblicke & Inspiration
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                maxWidth: "520px",
              }}
            >
              <BlurTextEffect>Aktuelle Sträuße, Dekorationen und kreative Ideen aus unserem Geschäft.</BlurTextEffect>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.55,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "460px",
              }}
            >
              Folgen Sie uns für tägliche Inspiration und bleiben Sie immer auf dem neuesten Stand.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 transition-opacity hover:opacity-75"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#1B2B7A",
                    fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                    fontWeight: 600,
                    lineHeight: 1,
                    minWidth: "120px",
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "#C4545A",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                  }}
                >
                  {s.script}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#C4545A",
                    fontSize: "1.1rem",
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
      <div style={{ height: "100px", background: "linear-gradient(to bottom, #FDF0F2, #ffffff)" }} />
    </>
  );
}
