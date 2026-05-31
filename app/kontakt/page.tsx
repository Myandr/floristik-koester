"use client";

import { useState } from "react";
import { SiteNav } from "../components/SiteNav";

const hours = [
  { day: "Montag", time: "08:00 - 18:00 Uhr" },
  { day: "Dienstag", time: "08:00 - 18:00 Uhr" },
  { day: "Mittwoch", time: "08:00 - 18:00 Uhr" },
  { day: "Donnerstag", time: "08:00 - 18:00 Uhr" },
  { day: "Freitag", time: "08:00 - 18:00 Uhr" },
  { day: "Samstag", time: "08:00 - 14:00 Uhr" },
  { day: "Sonntag", time: "geschlossen" },
];

const contacts = [
  { script: "Anrufen", label: "TELEFON", value: "02362 9993954", href: "tel:023629993954", cta: "Jetzt anrufen" },
  { script: "WhatsApp", label: "DIREKT BESTELLEN", value: "0177 4878890", href: "https://floristik-koester.lokalerflorist.de", cta: "Schreiben Sie uns" },
  { script: "Besuchen", label: "ADRESSE", value: "Lippestrasse, Dorsten", href: "https://maps.google.com/?q=Lippestrasse+Dorsten", cta: "Route planen" },
  { script: "E-Mail", label: "EMAIL", value: "info@floristik-koester.de", href: "mailto:info@floristik-koester.de", cta: "E-Mail senden" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Kontakt() {
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
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div
        className="px-6 md:px-10 lg:px-16 py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1B2B7A 0%, #2a3d9e 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            Wir freuen uns auf Sie
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Geschaeftszeiten &amp; Kontakt
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.55,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            Rufen Sie an, schreiben Sie uns per WhatsApp oder kommen Sie einfach vorbei. Wir sind fuer Sie da.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ background: "#ffffff", textDecoration: "none", minHeight: "140px", border: "1.5px solid rgba(27,43,122,0.07)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.5rem", lineHeight: 1.2 }}>
                  {c.script}
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.4, fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    {c.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.3, wordBreak: "break-word" }}>
                    {c.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.75rem", marginTop: "0.4rem" }}>
                    {c.cta} &rarr;
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hours + Map */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Opening hours */}
          <div>
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              wann wir offen haben
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "2rem" }}>
              Oeffnungszeiten
            </h2>
            <div className="flex flex-col">
              {hours.map((h, i) => {
                const isToday = new Date().getDay() === (i === 6 ? 0 : i + 1);
                return (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-3"
                    style={{
                      borderBottom: "1px solid rgba(27,43,122,0.07)",
                      background: isToday ? "rgba(196,84,90,0.05)" : "transparent",
                      paddingLeft: isToday ? "0.8rem" : "0",
                      paddingRight: isToday ? "0.8rem" : "0",
                      borderRadius: isToday ? "8px" : "0",
                      marginBottom: isToday ? "0" : "0",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#1B2B7A",
                        fontSize: "1.05rem",
                        fontWeight: isToday ? 600 : 400,
                        opacity: h.time === "geschlossen" ? 0.4 : 1,
                      }}
                    >
                      {h.day}
                      {isToday && (
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", marginLeft: "0.7rem" }}>
                          heute
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: h.time === "geschlossen" ? "#1B2B7A" : "#1B2B7A",
                        fontSize: "1.05rem",
                        opacity: h.time === "geschlossen" ? 0.35 : 0.75,
                        fontWeight: isToday ? 600 : 400,
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl p-6 flex flex-col gap-2" style={{ background: "#FDF0F2" }}>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.4rem" }}>Hinweis</p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.8 }}>
                An Feiertagen koennen die Oeffnungszeiten abweichen. Bitte ruf kurz an oder schreib uns per WhatsApp, um sicherzugehen.
              </p>
            </div>
          </div>

          {/* Map + form */}
          <div className="flex flex-col gap-6">
            {/* Map */}
            <div style={{ borderRadius: "20px", overflow: "hidden", height: "280px", border: "1.5px solid rgba(27,43,122,0.1)" }}>
              <iframe
                src="https://maps.google.com/maps?q=Lippestrasse+Dorsten+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Floristik Koester Standort"
              />
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: "#1B2B7A",
                borderRadius: "24px",
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.8rem", lineHeight: 1.2 }}>
                Schreiben Sie uns
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Name", field: "name" as const, type: "text", placeholder: "Ihr Name" },
                  { label: "E-Mail", field: "email" as const, type: "email", placeholder: "ihre@email.de" },
                ].map((f) => (
                  <div key={f.field} className="flex flex-col gap-1">
                    <label style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.55, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.field]}
                      onChange={update(f.field)}
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        borderRadius: "10px",
                        padding: "0.75rem 1rem",
                        color: "#FAF4EE",
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <label style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.55, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Betreff
                </label>
                <input
                  type="text"
                  placeholder="z. B. Hochzeitsblumen, Bestellung..."
                  value={form.subject}
                  onChange={update("subject")}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    padding: "0.75rem 1rem",
                    color: "#FAF4EE",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.55, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Nachricht *
                </label>
                <textarea
                  rows={4}
                  placeholder="Ihre Nachricht..."
                  value={form.message}
                  onChange={update("message")}
                  required
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    padding: "0.75rem 1rem",
                    color: "#FAF4EE",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1rem",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: "#F4C2C9",
                  color: "#1B2B7A",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.9rem 2rem",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  opacity: status === "loading" ? 0.6 : 1,
                }}
              >
                {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
              </button>
              {status === "success" && (
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "0.95rem" }}>
                  Vielen Dank! Ihre Nachricht wurde gesendet.
                </p>
              )}
              {status === "error" && (
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#fca5a5", fontSize: "0.95rem" }}>
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="py-6 px-6 md:px-10 text-center" style={{ borderTop: "1px solid rgba(27,43,122,0.08)" }}>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.35, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
          {new Date().getFullYear()} Floristik Koester &middot; Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
