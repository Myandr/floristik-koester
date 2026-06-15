"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const hours = [
  { day: "Mo – Fr", time: "09:00 – 18:00" },
  { day: "Samstag", time: "09:00 – 14:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", handle: "@floristikkoester", href: "https://instagram.com/floristikkoester", icon: InstagramIcon },
  { label: "Facebook", handle: "FloristikKoester", href: "https://facebook.com/FloristikKoester", icon: FacebookIcon },
  { label: "TikTok", handle: "@floristik.koester", href: "https://tiktok.com/@floristik.koester", icon: TikTokIcon },
];

const fieldBase: React.CSSProperties = {
  background: "#ffffff",
  border: "1.5px solid rgba(27,43,122,0.15)",
  borderRadius: "10px",
  padding: "0.85rem 1rem",
  color: "#1B2B7A",
  fontFamily: "var(--font-cormorant)",
  fontSize: "1.05rem",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
};

const labelBase: React.CSSProperties = {
  fontFamily: "system-ui, sans-serif",
  color: "#1B2B7A",
  opacity: 0.5,
  fontSize: "0.68rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontWeight: 600,
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Unbekannter Fehler");
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Fehler beim Senden.");
      setStatus("error");
    }
  }

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-stretch">

          {/* LEFT — Heading + Form */}
          <div>
            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              Schreiben Sie uns{" "}
              <span
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "#C4545A",
                  fontWeight: 400,
                  fontSize: "1.1em",
                }}
              >
                eine Nachricht
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                opacity: 0.55,
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              Wir melden uns so schnell wie möglich bei Ihnen — persönlich und kompetent.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label style={labelBase}>Name *</label>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={update("name")}
                    required
                    style={fieldBase}
                    onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label style={labelBase}>E-Mail *</label>
                  <input
                    type="email"
                    placeholder="ihre@email.de"
                    value={form.email}
                    onChange={update("email")}
                    required
                    style={fieldBase}
                    onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelBase}>Betreff</label>
                <input
                  type="text"
                  placeholder="z. B. Hochzeitsblumen, Bestellung …"
                  value={form.subject}
                  onChange={update("subject")}
                  style={fieldBase}
                  onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelBase}>Nachricht *</label>
                <textarea
                  rows={6}
                  placeholder="Ihre Nachricht an uns …"
                  value={form.message}
                  onChange={update("message")}
                  required
                  style={{ ...fieldBase, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
                />
              </div>

              {/* Submit row */}
              <div className="flex flex-wrap items-center gap-4 mt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: status === "loading" ? "rgba(27,43,122,0.5)" : "#1B2B7A",
                    color: "#FAF4EE",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.9rem 2.2rem",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "background 0.2s, transform 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
                  {status !== "loading" && <span style={{ fontSize: "1rem" }}>✉</span>}
                </button>

                {status === "idle" && (
                  <p style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", lineHeight: 1.5 }}>
                    Ihre Daten werden vertraulich behandelt.
                  </p>
                )}
                {status === "success" && (
                  <p style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", fontSize: "0.85rem" }}>
                    ✓ Vielen Dank! Ihre Nachricht wurde gesendet.
                  </p>
                )}
                {status === "error" && (
                  <p style={{ fontFamily: "system-ui, sans-serif", color: "#C4545A", fontSize: "0.85rem" }}>
                    ✗ {errorMsg}
                  </p>
                )}
              </div>

            </form>
          </div>

          {/* RIGHT — Contact card */}
          <div className="flex flex-col gap-4" style={{ height: "100%" }}>
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid rgba(27,43,122,0.1)",
                borderRadius: "20px",
                padding: "2rem",
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "1.75rem",
                }}
              >
                Kontaktdaten
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                {/* Telefon */}
                <ContactRow icon={<PhoneIcon />} label="Telefon" href="tel:023629993954">
                  02362 9993954
                </ContactRow>

                {/* E-Mail */}
                <ContactRow icon={<MailIcon />} label="E-Mail" href="mailto:info@floristik-koester.de">
                  info@floristik-koester.de
                </ContactRow>

                {/* Adresse */}
                <ContactRow icon={<PinIcon />} label="Adresse" href="https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten">
                  <span>Lippestraße 18</span>
                  <span style={{ display: "block", opacity: 0.6, fontSize: "0.88rem" }}>46282 Dorsten</span>
                </ContactRow>

                {/* WhatsApp */}
                <ContactRow icon={<WhatsAppIcon />} label="WhatsApp" href="https://wa.me/491774878890">
                  0177 4878890
                </ContactRow>

                {/* Öffnungszeiten */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{ color: "#C4545A" }}><ClockIcon /></span>
                    <span style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", opacity: 0.45, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
                      Öffnungszeiten
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {hours.map(({ day, time }) => (
                      <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1rem", fontWeight: 500 }}>{day}</span>
                        <span style={{
                          fontFamily: "var(--font-cormorant)",
                          color: "#1B2B7A",
                          opacity: time === "Geschlossen" ? 0.35 : 0.85,
                          fontSize: "1rem",
                          fontWeight: time === "Geschlossen" ? 400 : 600,
                        }}>
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(27,43,122,0.08)" }} />

                {/* Social Links */}
                <div>
                  <p style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", opacity: 0.45, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.85rem" }}>
                    Social Media
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                        className="group"
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <span style={{ color: "#C4545A" }}><s.icon /></span>
                          <span style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1rem", fontWeight: 600 }}>{s.label}</span>
                        </div>
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.9rem", opacity: 0.7 }}>{s.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps button */}
            <a
              href="https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                background: "#1B2B7A",
                color: "#FAF4EE",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "999px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <MapsIcon />
              In Google Maps öffnen
            </a>
          </div>

        </div>

        {/* Google Maps */}
        <div
          style={{
            marginTop: "3rem",
            borderRadius: "20px",
            overflow: "hidden",
            height: "380px",
            border: "1.5px solid rgba(27,43,122,0.1)",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Lippestrasse+18+46282+Dorsten+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Floristik Köster — Standort Dorsten"
          />
        </div>

      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none", display: "block" }}
      className="group"
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
        <span style={{ color: "#C4545A", marginTop: "0.15rem", flexShrink: 0 }}>{icon}</span>
        <div>
          <p style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", opacity: 0.45, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>
            {label}
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
            {children}
          </p>
        </div>
      </div>
    </a>
  );
}
