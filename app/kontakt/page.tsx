"use client";

import { useState, useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const hours = [
  { day: "Montag", time: "09:30 - 18:00 Uhr" },
  { day: "Dienstag", time: "09:30 - 18:00 Uhr" },
  { day: "Mittwoch", time: "09:30 - 18:00 Uhr" },
  { day: "Donnerstag", time: "09:30 - 18:00 Uhr" },
  { day: "Freitag", time: "09:30 - 18:00 Uhr" },
  { day: "Samstag", time: "09:30 - 14:00 Uhr" },
  { day: "Sonntag", time: "Blumenanlieferungen" },
];

const contacts = [
  { script: "Anrufen", label: "TELEFON", value: "02362 9993954", href: "tel:023629993954", cta: "Jetzt anrufen" },
  { script: "WhatsApp", label: "DIREKT BESTELLEN", value: "0177 4878890", href: "https://floristik-koester.lokalerflorist.de", cta: "Schreiben Sie uns" },
  { script: "Besuchen", label: "ADRESSE", value: "Lippestraße 18, 46282 Dorsten", href: "https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten", cta: "Route planen" },
  { script: "E-Mail", label: "EMAIL", value: "info@floristik-koester.de", href: "mailto:info@floristik-koester.de", cta: "E-Mail senden" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Kontakt() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", datenschutz: false });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [mapsConsent, setMapsConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    setMapsConsent(consent === "all");

    function onConsentUpdate() {
      setMapsConsent(localStorage.getItem("cookie-consent") === "all");
    }
    window.addEventListener("cookie-consent-updated", onConsentUpdate);
    return () => window.removeEventListener("cookie-consent-updated", onConsentUpdate);
  }, []);

  function update(field: keyof Omit<typeof form, "datenschutz">) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.datenschutz) {
      setErrorMsg("Bitte stimmen Sie der Datenschutzerklärung zu.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Unbekannter Fehler");
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", datenschutz: false });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Fehler beim Senden.");
      setStatus("error");
    }
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.07)",
    border: "1.5px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    color: "#FAF4EE",
    fontFamily: "var(--font-cormorant)",
    fontSize: "1rem",
    outline: "none",
  };

  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div
        className="px-6 md:px-10 lg:px-16 py-20 md:py-28"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
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
              color: "#1B2B7A",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Geschäftszeiten &amp; Kontakt
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.55,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            Rufen Sie an, schreiben Sie uns per WhatsApp oder kommen Sie einfach vorbei. Wir sind für Sie da.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#ffffff" }}>
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
              Öffnungszeiten
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
                        color: "#1B2B7A",
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
                An Feiertagen können die Öffnungszeiten abweichen. Bitte ruf kurz an oder schreib uns per WhatsApp, um sicherzugehen.
              </p>
            </div>
          </div>

          {/* Map + form */}
          <div className="flex flex-col gap-6">
            {/* Map with consent gate */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                height: "280px",
                border: "1.5px solid rgba(27,43,122,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FDF0F2",
              }}
            >
              {mapsConsent ? (
                <iframe
                  src="https://maps.google.com/maps?q=Lippestrasse+18+46282+Dorsten+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Floristik Köster Standort"
                />
              ) : (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                    Standort
                  </p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1rem", maxWidth: "280px" }}>
                    Google Maps setzt Cookies. Bitte stimmen Sie über den Cookie-Banner zu, um die Karte zu laden.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#C4545A",
                      fontSize: "0.9rem",
                      letterSpacing: "0.08em",
                      textDecoration: "underline",
                    }}
                  >
                    In Google Maps öffnen →
                  </a>
                </div>
              )}
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
                      style={inputStyle}
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
                  style={inputStyle}
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
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Datenschutz-Checkbox */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <input
                  type="checkbox"
                  id="datenschutz"
                  checked={form.datenschutz}
                  onChange={(e) => setForm((f) => ({ ...f, datenschutz: e.target.checked }))}
                  style={{ marginTop: "0.25rem", accentColor: "#F4C2C9", width: "16px", height: "16px", flexShrink: 0, cursor: "pointer" }}
                />
                <label
                  htmlFor="datenschutz"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#FAF4EE",
                    opacity: 0.75,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    cursor: "pointer",
                  }}
                >
                  Ich habe die{" "}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#F4C2C9", textDecoration: "underline" }}
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                </label>
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

      {/* FAQ */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              Ihre Fragen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
              Häufige Fragen zu unserem Blumenladen
            </h2>
          </div>
          <div className="flex flex-col">
            {[
              { q: "Bietet ihr Blumenlieferung in Dorsten an?", a: "Ja, wir liefern Blumen innerhalb von Dorsten nach Absprache zuverlässig aus." },
              { q: "Kann ich Blumen telefonisch vorbestellen?", a: "Gerne! Rufen Sie uns an und wir bereiten Ihren Blumenstrauß vor." },
              { q: "Macht ihr Hochzeits- und Trauerfloristik?", a: "Ja, wir gestalten individuelle Hochzeits- und Trauerfloristik mit viel Feingefühl." },
              { q: "Wie kurzfristig sind Bestellungen möglich?", a: "Oft auch am selben Tag – sprechen Sie uns einfach an." },
            ].map((f) => (
              <div key={f.q} style={{ borderBottom: "1px solid rgba(27,43,122,0.08)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {f.q}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
