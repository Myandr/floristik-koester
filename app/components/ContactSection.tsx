"use client";

import { useState } from "react";
import { BlurTextEffect } from "./BlurTextEffect";

const contactLinks = [
  {
    script: "Anrufen",
    label: "TELEFON",
    value: "02362 9993954",
    href: "tel:023629993954",
    cta: "Jetzt anrufen →",
  },
  {
    script: "WhatsApp",
    label: "DIREKT BESTELLEN",
    value: "0177 4878890",
    href: "https://wa.me/491774878890",
    cta: "Nachricht schreiben →",
  },
  {
    script: "Besuchen",
    label: "ADRESSE",
    value: "Lippestraße, Dorsten",
    href: "https://maps.google.com/?q=Lippestraße+Dorsten",
    cta: "Route planen →",
  },
  {
    script: "E-Mail",
    label: "EMAIL",
    value: "info@floristik-koester.de",
    href: "mailto:info@floristik-koester.de",
    cta: "E-Mail senden →",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/floristikkoester", handle: "@floristikkoester" },
  { label: "Facebook", href: "https://facebook.com/FloristikKoester", handle: "FloristikKoester" },
  { label: "TikTok", href: "https://tiktok.com/@floristik.koester", handle: "@floristik.koester" },
];

type Status = "idle" | "loading" | "success" | "error";

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

        {/* Headline */}
        <div className="mb-14">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.3rem",
            }}
          >
            Wir freuen uns auf Sie
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "600px",
            }}
          >
            <BlurTextEffect>Kontakt & Bestellung</BlurTextEffect>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.55,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginTop: "1rem",
            }}
          >
            Schreiben Sie uns — wir antworten schnell und persönlich.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Email form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              background: "#1B2B7A",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-great-vibes)",
                color: "#F4C2C9",
                fontSize: "2rem",
                lineHeight: 1.2,
                marginBottom: "0.25rem",
              }}
            >
              Schreiben Sie uns
            </p>

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Name"
                type="text"
                placeholder="Ihr Name"
                value={form.name}
                onChange={update("name")}
                required
              />
              <FormField
                label="E-Mail"
                type="email"
                placeholder="ihre@email.de"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>

            <FormField
              label="Betreff"
              type="text"
              placeholder="z. B. Hochzeitsblumen, Bestellung …"
              value={form.subject}
              onChange={update("subject")}
            />

            {/* Textarea */}
            <div className="flex flex-col gap-1.5">
              <label
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FAF4EE",
                  opacity: 0.6,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Nachricht *
              </label>
              <textarea
                rows={5}
                placeholder="Ihre Nachricht an uns …"
                value={form.message}
                onChange={update("message")}
                required
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "0.9rem 1.1rem",
                  color: "#FAF4EE",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  resize: "vertical",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(244,194,201,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                marginTop: "0.5rem",
                background: status === "loading" ? "rgba(244,194,201,0.5)" : "#F4C2C9",
                color: "#1B2B7A",
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "999px",
                padding: "1rem 2.5rem",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                alignSelf: "flex-start",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                if (status !== "loading") (e.currentTarget.style.transform = "translateY(-1px)");
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.transform = "translateY(0)");
              }}
            >
              {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
            </button>

            {status === "success" && (
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "0.95rem", marginTop: "0.25rem" }}>
                ✓ Vielen Dank! Ihre Nachricht wurde gesendet.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#fca5a5", fontSize: "0.95rem", marginTop: "0.25rem" }}>
                ✗ {errorMsg}
              </p>
            )}
          </form>

          {/* RIGHT — Maps + Links */}
          <div className="flex flex-col gap-5">

            {/* Google Maps */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                height: "260px",
                border: "1.5px solid rgba(27,43,122,0.1)",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Lippestraße+Dorsten+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Floristik Köster — Standort"
              />
            </div>

            {/* Contact link cards */}
            <div className="grid grid-cols-2 gap-3">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col justify-between rounded-2xl p-5 transition-all hover:shadow-md"
                  style={{
                    background: "#FAF4EE",
                    textDecoration: "none",
                    minHeight: "120px",
                    border: "1.5px solid rgba(27,43,122,0.07)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-great-vibes)",
                      color: "#C4545A",
                      fontSize: "1.4rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {c.script}
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#1B2B7A",
                        opacity: 0.45,
                        fontSize: "0.65rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#1B2B7A",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        wordBreak: "break-word",
                      }}
                    >
                      {c.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#C4545A",
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                        marginTop: "0.4rem",
                      }}
                    >
                      {c.cta}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div
              className="flex gap-3"
              style={{ marginTop: "0.25rem" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between rounded-2xl px-5 py-4 transition-all hover:opacity-80"
                  style={{
                    background: "#FDF0F2",
                    textDecoration: "none",
                    border: "1.5px solid rgba(196,84,90,0.12)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#1B2B7A",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#C4545A",
                        fontSize: "0.8rem",
                      }}
                    >
                      {s.handle}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#C4545A",
                      fontSize: "1.1rem",
                      opacity: 0.7,
                    }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#FAF4EE",
          opacity: 0.6,
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1.5px solid rgba(255,255,255,0.15)",
          borderRadius: "12px",
          padding: "0.85rem 1.1rem",
          color: "#FAF4EE",
          fontFamily: "var(--font-cormorant)",
          fontSize: "1rem",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(244,194,201,0.6)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
      />
    </div>
  );
}
