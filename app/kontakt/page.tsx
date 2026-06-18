"use client";

import { useEffect, useState } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const hours = [
  { day: "Montag",    time: "9:30 – 18:00 Uhr" },
  { day: "Dienstag",  time: "9:30 – 18:00 Uhr" },
  { day: "Mittwoch",  time: "9:30 – 18:00 Uhr" },
  { day: "Donnerstag",time: "9:30 – 18:00 Uhr" },
  { day: "Freitag",   time: "9:30 – 18:00 Uhr" },
  { day: "Samstag",   time: "9:30 – 14:00 Uhr" },
  { day: "Sonntag",   time: "geschlossen" },
];

// 0=Sun,1=Mon,...,6=Sat → index into hours (Mon=0…Sun=6)
function todayIndex() {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

function isOpenNow() {
  const now = new Date();
  const day  = now.getDay(); // 0=Sun
  const mins = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return false;
  const close = day === 6 ? 14 * 60 : 18 * 60;
  return mins >= 9 * 60 + 30 && mins < close;
}

export default function Kontakt() {
  const [mapsConsent, setMapsConsent] = useState(false);
  const open = isOpenNow();
  const today = todayIndex();

  useEffect(() => {
    setMapsConsent(localStorage.getItem("cookie-consent") === "all");
    function onUpdate() { setMapsConsent(localStorage.getItem("cookie-consent") === "all"); }
    window.addEventListener("cookie-consent-updated", onUpdate);
    return () => window.removeEventListener("cookie-consent-updated", onUpdate);
  }, []);

  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 pt-20 pb-10 md:pt-28 md:pb-14" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2, marginBottom: "0.4rem" }}>
            Wir freuen uns auf Ihren Besuch
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2.4rem, 5.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
            Geschäftszeiten &amp; Kontakt
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "1.15rem", lineHeight: 1.8, marginTop: "1rem", maxWidth: "560px" }}>
            Erfahren Sie alles zu unseren Öffnungszeiten und Kontaktmöglichkeiten bei Floristik Köster – Ihrem Blumenfachgeschäft in Dorsten, das für frische Sträuße, kreative Arrangements und persönlichen Service steht.
          </p>
        </div>
      </div>

      {/* ── Öffnungszeiten + Kontakt ─────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Öffnungszeiten */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2 }}>
                Floristik Köster
              </p>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.6rem" }}>
              Geschäftszeiten
            </p>

            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: open ? "rgba(34,197,94,0.1)" : "rgba(196,84,90,0.1)",
                borderRadius: "999px",
                padding: "0.3rem 0.9rem",
                marginBottom: "1.4rem",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: open ? "#22c55e" : "#C4545A",
                  display: "inline-block",
                }}
              />
              <span style={{ fontFamily: "var(--font-cormorant)", color: open ? "#16a34a" : "#C4545A", fontSize: "0.88rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>
                {open ? "Jetzt geöffnet" : "Aktuell geschlossen"}
              </span>
            </div>

            {/* Hours table */}
            <div className="flex flex-col">
              {hours.map((h, i) => {
                const isToday = i === today;
                return (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: isToday ? "0.75rem 0.8rem" : "0.75rem 0",
                      borderBottom: "1px solid rgba(27,43,122,0.07)",
                      background: isToday ? "rgba(196,84,90,0.05)" : "transparent",
                      borderRadius: isToday ? "8px" : "0",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#1B2B7A",
                      fontSize: "1.05rem",
                      fontWeight: isToday ? 600 : 400,
                      opacity: h.time === "geschlossen" ? 0.4 : 1,
                    }}>
                      {h.day}
                      {isToday && (
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", marginLeft: "0.7rem" }}>
                          heute
                        </span>
                      )}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      color: h.time === "geschlossen" ? "#1B2B7A" : "#1B2B7A",
                      fontSize: "1.05rem",
                      fontWeight: isToday ? 600 : 400,
                      opacity: h.time === "geschlossen" ? 0.35 : 0.75,
                    }}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <div className="mt-6 rounded-2xl p-5" style={{ background: "#FDF0F2" }}>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.8 }}>
                <strong style={{ color: "#C4545A" }}>Blumenlieferungen möglich</strong> – Wir freuen uns auf Ihren Besuch!
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-5">
            <div>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.2rem" }}>
                So erreichen Sie uns
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.6rem" }}>
                Kontakt
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/491774878890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                background: "#ffffff",
                border: "1.5px solid rgba(27,43,122,0.08)",
                borderRadius: "16px",
                padding: "1.2rem 1.4rem",
                textDecoration: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,43,122,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                  WhatsApp
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600 }}>+49 177 4878890</p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1rem", marginTop: "0.1rem" }}>Blumen bestellen per WhatsApp →</p>
              </div>
            </a>

            {/* Festnetz */}
            <a
              href="tel:023629993954"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                background: "#ffffff",
                border: "1.5px solid rgba(27,43,122,0.08)",
                borderRadius: "16px",
                padding: "1.2rem 1.4rem",
                textDecoration: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,43,122,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                  Festnetz
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600 }}>02362 – 9993954</p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1rem", marginTop: "0.1rem" }}>Jetzt anrufen →</p>
              </div>
            </a>

            {/* Mobil */}
            <a
              href="tel:01774878890"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                background: "#ffffff",
                border: "1.5px solid rgba(27,43,122,0.08)",
                borderRadius: "16px",
                padding: "1.2rem 1.4rem",
                textDecoration: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,43,122,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                  Mobil
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600 }}>0177 – 4878890</p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1rem", marginTop: "0.1rem" }}>Jetzt anrufen →</p>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href="mailto:info@floristik-koester.de"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                background: "#ffffff",
                border: "1.5px solid rgba(27,43,122,0.08)",
                borderRadius: "16px",
                padding: "1.2rem 1.4rem",
                textDecoration: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,43,122,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff0f3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4545A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                  E-Mail
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600 }}>info@floristik-koester.de</p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1rem", marginTop: "0.1rem" }}>E-Mail senden →</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Adresse + Karte ───────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
            Der Weg zu uns
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.4rem", opacity: 0.8 }}>
            Filiale Lippestraße 18, 46282 Dorsten
          </p>
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              height: "360px",
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
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", marginBottom: "0.5rem" }}>Standort</p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1rem", maxWidth: "280px" }}>
                  Google Maps setzt Cookies. Bitte stimmen Sie über den Cookie-Banner zu, um die Karte zu laden.
                </p>
                <a
                  href="https://maps.google.com/?q=Lippestrasse+18+46282+Dorsten"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.95rem", textDecoration: "underline" }}
                >
                  In Google Maps öffnen →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Virtueller Rundgang ───────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-5">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.2 }}>
            Erleben Sie unseren Laden virtuell!
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "480px" }}>
            Klicken Sie auf den Button und erkunden Sie Floristik Köster – ganz bequem von zu Hause.
          </p>
          <a
            href="https://maps.google.com/?q=Floristik+Köster+Lippestrasse+18+Dorsten&layer=c"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#1B2B7A",
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.85rem 2.2rem",
              borderRadius: "999px",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Virtuellen Rundgang starten
          </a>
        </div>
      </div>

      {/* ── Social ───────────────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
            Inspiration &amp; aktuelle Sträuße
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem" }}>
            Folgen Sie uns
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Instagram", href: "https://instagram.com/floristikkoester", color: "#E1306C" },
              { label: "Facebook",  href: "https://facebook.com/FloristikKoester", color: "#1877F2" },
              { label: "TikTok",    href: "https://tiktok.com/@floristikkoester",  color: "#010101" },
              { label: "E-Mail",    href: "mailto:info@floristik-koester.de",       color: "#C4545A" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  background: "#ffffff",
                  border: "1.5px solid rgba(27,43,122,0.1)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.75rem 1.8rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = s.color;
                  el.style.color = "#ffffff";
                  el.style.borderColor = s.color;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#ffffff";
                  el.style.color = "#1B2B7A";
                  el.style.borderColor = "rgba(27,43,122,0.1)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Google Bewertung ─────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Ihre Meinung zählt
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 600, lineHeight: 1.2 }}>
            Wir freuen uns sehr über Ihre Google-Bewertung – teilen Sie Ihre Blumenfreude mit uns!
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.15rem", lineHeight: 1.85, maxWidth: "520px" }}>
            Ihre Zufriedenheit liegt uns am Herzen. Wenn Sie mit unserem Service glücklich sind, freuen wir uns sehr über eine positive Google-Bewertung. Ihre Rückmeldungen helfen uns, immer besser zu werden – und geben anderen Kunden einen Eindruck von der Qualität und Leidenschaft, die in unseren Blumenarrangements steckt.
          </p>
          <a
            href="https://www.google.com/maps/search/Floristik+Köster+Dorsten"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#C4545A",
              fontSize: "0.85rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.6rem",
              borderRadius: "999px",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Jetzt auf Google bewerten
          </a>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.35, fontSize: "0.8rem", letterSpacing: "0.1em", fontStyle: "italic" }}>
            Danke, dass Sie uns helfen, noch besser zu werden.
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
