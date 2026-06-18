"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

type Status = "idle" | "loading" | "success" | "error";

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

const leistungen = [
  {
    title: "Brautstrauß",
    desc: "Individuell gestaltet, um die Einzigartigkeit und Persönlichkeit der Braut perfekt zu unterstreichen.",
  },
  {
    title: "Anstecker für den Bräutigam",
    desc: "Harmonisch passend zum Brautstrauß und Ihrem Hochzeitsmotto – für einen stimmigen Auftritt.",
  },
  {
    title: "Romantischer Kopfschmuck & Armbänder",
    desc: "Liebevoll arrangierte Accessoires, die Ihrer Hochzeitsfloristik besondere Akzente verleihen.",
  },
  {
    title: "Tischdekorationen",
    desc: "Stilvoll gestaltet und perfekt auf das Gesamtkonzept Ihrer Hochzeit in Dorsten abgestimmt.",
  },
  {
    title: "Arrangements für Standesamt & Empfangsräume",
    desc: "Schaffen eine unvergessliche Atmosphäre, die Ihre Hochzeit in Dorsten einzigartig macht.",
  },
];

function WeddingForm() {
  const [form, setForm] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    wunschtermin: "",
    uhrzeit: "",
    nachricht: "",
    datenschutz: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function updateField(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
    };
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
      const res = await fetch("/api/hochzeit-anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Unbekannter Fehler");
      }
      setStatus("success");
      setForm({ anrede: "", vorname: "", nachname: "", email: "", telefon: "", wunschtermin: "", uhrzeit: "", nachricht: "", datenschutz: false });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Fehler beim Senden.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.15)" }}
      >
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          Vielen Dank!
        </p>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
          Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich bei Ihnen und freuen uns darauf, Ihre Traumhochzeit in Dorsten gemeinsam zu gestalten.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>

      {/* Anrede */}
      <div className="flex flex-col gap-1.5">
        <label style={labelBase}>Anrede</label>
        <select
          value={form.anrede}
          onChange={updateField("anrede")}
          style={{ ...fieldBase, appearance: "none", cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
        >
          <option value="">Bitte wählen</option>
          <option value="Frau">Frau</option>
          <option value="Herr">Herr</option>
          <option value="Divers">Divers</option>
        </select>
      </div>

      {/* Vorname + Nachname */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>Vorname *</label>
          <input
            type="text"
            placeholder="Ihr Vorname"
            value={form.vorname}
            onChange={updateField("vorname")}
            required
            style={fieldBase}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>Nachname *</label>
          <input
            type="text"
            placeholder="Ihr Nachname"
            value={form.nachname}
            onChange={updateField("nachname")}
            required
            style={fieldBase}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
      </div>

      {/* E-Mail + Telefon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>E-Mail *</label>
          <input
            type="email"
            placeholder="ihre@email.de"
            value={form.email}
            onChange={updateField("email")}
            required
            style={fieldBase}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>Telefon *</label>
          <input
            type="tel"
            placeholder="Ihre Telefonnummer"
            value={form.telefon}
            onChange={updateField("telefon")}
            required
            style={fieldBase}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
      </div>

      {/* Wunschtermin + Uhrzeit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>Ihr Wunschtermin *</label>
          <input
            type="date"
            value={form.wunschtermin}
            onChange={updateField("wunschtermin")}
            required
            style={{ ...fieldBase, colorScheme: "light" }}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label style={labelBase}>Uhrzeit *</label>
          <input
            type="time"
            value={form.uhrzeit}
            onChange={updateField("uhrzeit")}
            style={{ ...fieldBase, colorScheme: "light" }}
            onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
          />
        </div>
      </div>

      {/* Nachricht */}
      <div className="flex flex-col gap-1.5">
        <label style={labelBase}>Nachricht</label>
        <textarea
          rows={5}
          placeholder="Erzählen Sie uns von Ihrer Traumhochzeit – Stil, Farbwünsche, besondere Ideen …"
          value={form.nachricht}
          onChange={updateField("nachricht")}
          style={{ ...fieldBase, resize: "vertical", lineHeight: 1.6 }}
          onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
        />
      </div>

      {/* Datenschutz */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={form.datenschutz}
          onChange={updateField("datenschutz")}
          required
          style={{ marginTop: "0.2rem", accentColor: "#C4545A", width: "16px", height: "16px", flexShrink: 0 }}
        />
        <span style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6 }}>
          Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der{" "}
          <a href="/datenschutz" style={{ color: "#C4545A", textDecoration: "none" }}>Datenschutzerklärung</a>{" "}
          einverstanden. ** Pflichtfelder
        </span>
      </label>

      {/* Submit */}
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
            padding: "0.95rem 2.4rem",
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
          {status === "loading" ? "Wird gesendet …" : "Jetzt Termin anfragen"}
        </button>

        {status === "idle" && (
          <p style={{ fontFamily: "system-ui, sans-serif", color: "#1B2B7A", opacity: 0.4, fontSize: "0.78rem", lineHeight: 1.5 }}>
            Unverbindliche Beratungsanfrage – wir melden uns persönlich.
          </p>
        )}
        {status === "error" && (
          <p style={{ fontFamily: "system-ui, sans-serif", color: "#C4545A", fontSize: "0.85rem" }}>
            ✗ {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}

export default function Hochzeitsfloristik() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
        <Image
          src="/images/hochzeit.png"
          alt="Hochzeitsfloristik von Floristik Köster in Dorsten – Brautstrauß und florale Arrangements für Ihre Traumhochzeit"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.88) 0%, rgba(27,43,122,0.25) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-20 md:py-28 max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            Florale Arrangements für Ihre Traumhochzeit
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              maxWidth: "680px",
            }}
          >
            Hochzeitsfloristik mit Herz in Dorsten
          </h1>
          <div
            style={{
              color: "#FAF4EE",
              opacity: 0.8,
              fontSize: "1.05rem",
              lineHeight: 1.85,
              marginTop: "1.4rem",
              maxWidth: "560px",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              Als erfahrene Floristen für Hochzeiten in Dorsten gestalten wir maßgeschneiderte Blumenkonzepte, die Ihre Persönlichkeit und Ihre Liebesgeschichte widerspiegeln. Von der Brautfloristik bis zur kompletten Hochzeitsdekoration setzen wir Ihre Wünsche mit viel Liebe zum Detail um. Auf Wunsch arbeiten wir dabei nachhaltig, umweltbewusst und natürlich schön.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Unsere Hochzeitsblumen in Dorsten stehen für Qualität, Kreativität und Perfektion. Wir begleiten Sie von der ersten Idee bis zur finalen Umsetzung und sorgen dafür, dass Ihre Hochzeitsfloristik harmonisch zum Stil Ihres Festes passt – ob klassisch-elegant, modern-minimalistisch oder romantisch-natürlich.
            </p>
            <p>
              Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch zur Hochzeitsfloristik in Dorsten und Umgebung.
            </p>
          </div>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#beratung"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Jetzt Termin anfragen
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(250,244,238,0.35)",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
              }}
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Kreative Floristik – Section */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col gap-5">
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
                einzigartig für jeden Geschmack
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Kreative Floristik in Dorsten
              </h2>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Jedes Brautpaar ist einzigartig – und Ihre Blumendekoration sollte genau das widerspiegeln. Unsere erfahrenen Floristen in Dorsten arbeiten eng mit Ihnen zusammen, um individuelle Blumenarrangements zu gestalten, die perfekt zu Ihrer Persönlichkeit und Ihrem Hochzeitsstil passen.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Neben dem klassischen Brautstrauß bieten wir eine Vielzahl liebevoll gestalteter floraler Accessoires: Anstecker für den Bräutigam, romantischen Kopfschmuck, Armbänder, Tischdekorationen und besondere Arrangements für das Standesamt oder den Empfangsbereich. So wird jede Ecke Ihrer Hochzeit in Dorsten zu einem unvergesslichen Erlebnis.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Warum nicht die Einladungen mit einem kleinen Blumengruß an Ihre Gäste überreichen? Jedes Arrangement wird von uns individuell abgestimmt, um die Einzigartigkeit Ihrer Liebe widerzuspiegeln.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3" style={{ height: "460px" }}>
              {[
                { src: "/images/hochzeit2.png", alt: "Brautstrauß von Floristik Köster in Dorsten – romantisch gebundene Rosen in zarten Rosa-Tönen, elegant und feminin" },
                { src: "/images/hochzeit3.png", alt: "Anstecker für den Bräutigam von Floristik Köster in Dorsten – aus rosa Rose und kleinen Blüten, elegant und passend zum Brautstrauß" },
                { src: "/images/hochzeit4.png", alt: "Brautstrauß von Floristik Köster in Dorsten – romantisch gebundene Rosen, Bartnelken und Rittersporn in Rosa- und Blautönen" },
              ].map((img) => (
                <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Florale Highlights – dark section */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#1B2B7A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
                Ihr besonderer Tag
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Florale Highlights für Ihre Hochzeit in Dorsten
              </h2>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Die Planung einer Hochzeit kann manchmal stressig sein – aber wir in Dorsten nehmen Ihnen diesen Teil ab. Mit unserer langjährigen Erfahrung und unserer Leidenschaft für Hochzeitsfloristik sorgen wir dafür, dass Ihre Blumendekoration perfekt auf Ihren großen Tag abgestimmt wird.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Damit alles reibungslos läuft, empfehlen wir, etwa ein Jahr vor Ihrem Hochzeitstermin Kontakt mit uns aufzunehmen – besonders für den Monat, in dem Sie heiraten möchten. So bleibt genügend Zeit, die schönsten Saisonblumen auszuwählen und Ihre Wünsche detailgenau umzusetzen.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Selbst wenn Sie uns nur einen Monat vor Ihrer Hochzeit besuchen, können wir Ihre Vision verwirklichen und sicherstellen, dass Ihre Hochzeit in Dorsten unvergesslich und voller floraler Highlights wird.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3" style={{ height: "420px" }}>
              {[
                { src: "/images/hochzeit5.png", alt: "Rustikaler Brautstrauß aus Rosen, orangefarbenen Gerbera und Trockenblumen – perfekt für Boho- oder Vintage-Hochzeiten in Dorsten" },
                { src: "/images/hochzeit6.png", alt: "Hochzeitsanstecker mit orangefarbener Gerbera, grünen Blättern und Trockenblumen – Boho-Hochzeitsstil Dorsten" },
                { src: "/images/hochzeit.png", alt: "Eleganter Hochzeitsanstecker mit weißer Rose und Trockenblumen – klassischer Stil für Hochzeiten in Dorsten" },
              ].map((img) => (
                <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rechtzeitig planen */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
              für eine perfekte Planung
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Rechtzeitig planen – so wird Ihre Hochzeitsfloristik perfekt
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Eine rechtzeitige Planung Ihrer Hochzeitsfloristik in Dorsten bietet Ihnen viele Vorteile: Sie haben Zugang zu einer größeren Auswahl an Blumen und können sicherstellen, dass alle Details genau nach Ihren Vorstellungen umgesetzt werden.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Unser erfahrenes Team von Floristen in Dorsten unterstützt Sie dabei, Ihre Wünsche zu konkretisieren und bringt kreative Ideen ein, die Ihre Hochzeit zu einem unvergesslichen Highlight machen. Mit den frischesten Blumen sorgen wir dafür, dass Ihre Dekoration am Tag der Hochzeit in voller Pracht erstrahlt.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Ihre Zufriedenheit steht für uns an erster Stelle – wir setzen alles daran, Ihre Erwartungen zu übertreffen und Ihre Hochzeit in Dorsten perfekt und einzigartig zu gestalten.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ background: "#1B2B7A" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "2rem", lineHeight: 1.2 }}>
              auch kurzfristig möglich!
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}>
              Aber auch einen Monat vorher ist ausreichend!
            </h3>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Selbst wenn Sie nur einen Monat vor Ihrem Hochzeitstermin in Dorsten zu uns kommen, können wir alles für Sie zusammenstellen und Ihren großen Tag perfekt planen. Unser erfahrenes Team sorgt dafür, dass Ihre Blumendekoration höchste Qualität erreicht – ganz gleich, wann Sie uns besuchen.
            </p>
            <a
              href="#beratung"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
              }}
            >
              Termin anfragen
            </a>
          </div>
        </div>
      </div>

      {/* Liebe Bräute – Probe-Brautstrauß */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-14"
            style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.12)" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Liebe Bräute,
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              Sie planen Ihre Hochzeit in Dorsten und kümmern sich bereits um Probefrisuren, Probe-Make-up und Probeessen – warum nicht auch einen <strong style={{ opacity: 1, color: "#C4545A" }}>Probebrautstrauß</strong> anfertigen lassen? So können Sie sicher sein, dass Ihre Blumendekoration genau Ihren Vorstellungen entspricht und am großen Tag perfekt passt.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Selbstverständlich erstellen wir für Sie ein individuelles Angebot, das genau auf Ihre Wünsche und Vorstellungen abgestimmt ist. Sprechen Sie uns einfach an – wir beraten Sie gerne persönlich in Dorsten.
            </p>
            <a
              href="#beratung"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#C4545A",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Probestrauß anfragen
            </a>
          </div>
        </div>
      </div>

      {/* Unsere Leistungen */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              alles aus einer Hand
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Unsere Leistungen für Hochzeits- & Eventfloristik in Dorsten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {leistungen.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-3"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
              >
                <span style={{ color: "#C4545A", fontSize: "0.5rem" }}>&#9679;</span>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1rem", lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Final image row */}
          <div className="grid grid-cols-3 gap-4 mt-6" style={{ height: "300px" }}>
            {[
              { src: "/images/hochzeit2.png", alt: "Hochzeitsgesteck in Herzform – elegante Hochzeitsdekoration Floristik Köster Dorsten" },
              { src: "/images/hochzeit3.png", alt: "Romantischer Brautstrauß aus cremefarbenen und altrosa Rosen – Floristik Köster Dorsten" },
              { src: "/images/hochzeit4.png", alt: "Eleganter Herren-Anstecker – Hochzeitsaccessoire Floristik Köster Dorsten" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Ihre Wünsche stehen bei uns in Dorsten im Mittelpunkt – wir gestalten Ihre Blumen ganz nach Ihrem Stil.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#1B2B7A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
            Hochzeitsfloristik in Dorsten
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "1.2rem" }}>
            Für Ihren perfekten Tag – verlassen Sie sich auf unsere Expertise
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "600px", margin: "0 auto 2rem" }}>
            Wir begleiten Sie von der ersten Beratung bis zum fertigen Arrangement und sorgen dafür, dass Ihre Hochzeit mit atemberaubenden Blumenarrangements verschönert wird. Besuchen Sie uns noch heute in Dorsten und sichern Sie sich rechtzeitig Ihren Termin.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#beratung"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.95rem 2.4rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Jetzt Beratung anfragen
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                border: "1.5px solid rgba(250,244,238,0.4)",
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.95rem 2.4rem",
                borderRadius: "999px",
              }}
            >
              📞 02362 9993954
            </a>
          </div>
        </div>
      </div>

      {/* Buchungsformular */}
      <div id="beratung" className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              persönliche Beratung inklusive
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
              Jetzt Termin sichern
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir freuen uns darauf, Ihre Hochzeit in Dorsten zu etwas ganz Besonderem zu machen. Füllen Sie das Formular aus – wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>
          <WeddingForm />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
