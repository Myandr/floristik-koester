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
    title: "Trauerkränze",
    desc: "Klassische und individuelle Kränze, liebevoll gebunden – ob schlicht-natürlich oder ausdrucksstark mit besonderen Blüten und Symbolen.",
  },
  {
    title: "Sargschmuck & Urnenschmuck",
    desc: "Würdevolle Arrangements, die den Abschied persönlich und respektvoll begleiten und die Individualität des Verstorbenen ehren.",
  },
  {
    title: "Trauergestecke & Blumenherzen",
    desc: "Gesteckte Herzen, Kissen und florale Symbole als Ausdruck von Liebe, Mitgefühl und tiefer Verbundenheit.",
  },
  {
    title: "Trauersträuße",
    desc: "Handgebundene Sträuße für Beerdigungen und Gedenkfeiern – einfühlsam, würdevoll und ganz nach Ihren Wünschen gestaltet.",
  },
  {
    title: "Individuelle Gedenkfloristik",
    desc: "Besondere Formen wie Motorräder, Gitarren oder Notenschlüssel – florale Symbole, die die Leidenschaften des Verstorbenen ehren.",
  },
  {
    title: "Dekorationen für Trauerfeiern",
    desc: "Stimmige Raumdekoration für Abschiedszeremonien und Gedenkfeiern – einfühlsam, harmonisch und respektvoll gestaltet.",
  },
];

function GedenkForm() {
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
      const res = await fetch("/api/gedenk-anfrage", {
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
          Vielen Dank.
        </p>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
          Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich bei Ihnen und stehen Ihnen einfühlsam und persönlich zur Seite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>

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

      <div className="flex flex-col gap-1.5">
        <label style={labelBase}>Nachricht</label>
        <textarea
          rows={5}
          placeholder="Teilen Sie uns Ihre Wünsche mit – wir begleiten Sie einfühlsam und persönlich …"
          value={form.nachricht}
          onChange={updateField("nachricht")}
          style={{ ...fieldBase, resize: "vertical", lineHeight: 1.6 }}
          onFocus={(e) => (e.target.style.borderColor = "#C4545A")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(27,43,122,0.15)")}
        />
      </div>

      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
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

export default function Gedenkfloristik() {
  return (
    <main
      style={{
        fontFamily: "var(--font-cormorant, serif)",
        minHeight: "100svh",
        background: "#ffffff",
        overflowX: "hidden",
        paddingTop: "76px",
      }}
    >
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
        <Image
          src="/images/gedenken.png"
          alt="Gedenkfloristik von Floristik Köster in Dorsten – würdevolle Trauerfloristik für Abschieds- und Gedenkfeiern"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.92) 0%, rgba(27,43,122,0.28) 100%)", zIndex: 1 }}
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
            würdevoll Abschied nehmen
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
            Gedenkfloristik in Dorsten – Abschieds- und Gedenkfeiern würdevoll gestalten
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
              Der Verlust eines geliebten Menschen ist eine schwere Zeit, in der Worte oft nicht ausreichen. Blumen können Trost spenden, Mitgefühl ausdrücken und letzte Grüße übermitteln. Bei Floristik Köster in Dorsten stehen wir Ihnen in diesen sensiblen Momenten einfühlsam zur Seite.
            </p>
            <p>
              Unsere individuelle Trauerfloristik bewahrt Erinnerungen und schenkt Trost – würdevoll, persönlich und mit tiefstem Respekt.
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

      {/* Intro – Einfühlsame Trauerfloristik */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
              mit Einfühlungsvermögen & Respekt
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Einfühlsame Trauerfloristik in Dorsten – für einen würdevollen Abschied
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Der Verlust eines geliebten Menschen ist eine schwere Zeit. Blumen können Trost spenden und persönliche Erinnerungen ausdrücken. Bei Floristik Köster in Dorsten stehen wir Ihnen auch in diesen sensiblen Momenten einfühlsam zur Seite und gestalten individuelle Trauerfloristik, die Würde und Respekt vermittelt.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Unsere Blumengestecke, Trauerkränze, Sargschmuck, Urnenschmuck und Trauersträuße für Beerdigungen, Trauerfeiern und Gedenkzeremonien sind so gestaltet, dass sie eine würdevolle, persönliche und respektvolle Atmosphäre schaffen.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Ob klassische weiße Lilien, rosenreiche Trauerarrangements oder natürliche Kränze mit Grün und Symbolpflanzen – wir beraten Sie in Dorsten mit Einfühlungsvermögen, Erfahrung und Respekt.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3" style={{ height: "460px" }}>
            {[
              { src: "/images/gedenken2.png", alt: "Rosa-pink-lila gestecktes Herz für Beisetzung – Trauerfloristik Floristik Köster Dorsten" },
              { src: "/images/gedenken3.png", alt: "Blumenherz in Rosa, Pink und Lila für Beisetzungszeremonie – Floristik Köster Dorsten" },
              { src: "/images/gedenken4.png", alt: "Beisetzungsherz aus rosa und altrosa Dahlien und Chrysanthemen – Trauerfloristik Dorsten" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blumenschmuck & Dekorationen */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-3 gap-3 order-2 lg:order-1" style={{ height: "420px" }}>
            {[
              { src: "/images/gedenken5.png", alt: "Kranz aus bunten Sommerblumen wie Rosen und Gerbera – Trauerfloristik Dorsten" },
              { src: "/images/gedenken6.png", alt: "Beisetzungsherz aus roten Rosen mit pinkem Beiwerk – Trauerfloristik Floristik Köster" },
              { src: "/images/gedenken.png", alt: "Kranz in dunklen Tönen mit Rosen und Gerbera – elegante Trauerdekoration Dorsten" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 order-1 lg:order-2">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
              persönlich & liebevoll
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Blumenschmuck und florale Dekorationen – einfühlsam und passend
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir unterstützen Sie dabei, den passenden Blumenschmuck und Dekorationen für Gedenkfeiern in Dorsten auszuwählen, die die Persönlichkeit und das Leben des Verstorbenen würdevoll widerspiegeln.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Auf Wunsch integrieren wir besondere Erinnerungen oder Symbole in unsere floralen Kreationen, um ihnen eine noch persönlichere Note zu verleihen. Das können Lieblingsinstrumente, Hobbys oder andere individuelle Elemente sein, die die Einzigartigkeit des geliebten Menschen unterstreichen.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Unsere Kränze und Gestecke werden mit Liebe und Sorgfalt gestaltet, um eine würdevolle und persönliche Abschiednahme zu ermöglichen.
            </p>
          </div>
        </div>
      </div>

      {/* Erfahrung & Kompetenz – dark */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#1B2B7A" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
              langjährige Erfahrung
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Erfahrung, Leidenschaft und Kompetenz – Floristik Köster in Dorsten
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Bei Floristik Köster bieten wir Ihnen hochwertige und liebevoll gestaltete Blumenarrangements, die diesen besonderen Anlass würdevoll begleiten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Egal, ob Sie eine schlichte oder ausdrucksstarke Blumendekoration wünschen – wir sind für Sie da. Unsere langjährige Erfahrung in der Trauerfloristik ermöglicht es uns, Sie in dieser schweren Zeit einfühlsam und kompetent zu beraten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Besuchen Sie uns in Dorsten und lassen Sie uns gemeinsam die Trauerfloristik planen, die Ihre Erinnerungen würdevoll und persönlich zum Ausdruck bringt.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(244,194,201,0.2)" }}
            >
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "1.8rem", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                Besondere Erinnerungen einbinden
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.85 }}>
                Auf Wunsch integrieren wir gerne besondere Erinnerungen an den Verstorbenen in unsere floralen Kreationen. Dies können besondere Symbole oder außergewöhnliche Formen sein, wie Motorräder, Gitarren oder Notenschlüssel – Elemente, die die Persönlichkeit und Leidenschaften des geliebten Menschen widerspiegeln.
              </p>
            </div>
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
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
              }}
            >
              Jetzt Beratung anfragen
            </a>
          </div>
        </div>
      </div>

      {/* Unsere Leistungen */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              alles aus einer Hand
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Unsere Leistungen für Gedenkfloristik in Dorsten im Überblick
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </div>

      {/* Warum rechtzeitig kommen */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2 }}>
              sorgfältig geplant
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Warum rechtzeitig kommen?
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Es ist empfehlenswert, rechtzeitig zu uns in Dorsten zu kommen, um Ihre Trauerfloristik sorgfältig zu planen. Idealerweise etwa eine Woche vor dem Trauertermin, damit wir die Verfügbarkeit der gewünschten Blumen prüfen und alle kreativen Möglichkeiten besprechen können.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              So stellen wir sicher, dass Ihre individuellen Wünsche und Vorstellungen berücksichtigt werden und wählen die Blumen mit größter Sorgfalt und Liebe zum Detail aus. So wird jede Trauerfloristik zu einer würdevollen und persönlichen Abschiednahme, die Trost spendet und Erinnerungen bewahrt.
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
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Termin anfragen
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3" style={{ height: "420px" }}>
            {[
              { src: "/images/gedenken2.png", alt: "Gestecktes Blumen-Kissen in Creme- und Roséttönen – Trauerfloristik Floristik Köster Dorsten" },
              { src: "/images/gedenken4.png", alt: "Sommerblumenkranz in hellen freundlichen Farben – Trauerdekoration Dorsten" },
              { src: "/images/gedenken6.png", alt: "Kranz mit bordeauxfarbenem Akzent – Floristik Köster Dorsten" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#1B2B7A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
            Gedenkfloristik in Dorsten
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "1.2rem" }}>
            Vereinbaren Sie einen Termin – wir beraten Sie gerne persönlich
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "600px", margin: "0 auto 2rem" }}>
            Wir begleiten Sie in dieser schweren Zeit einfühlsam und kompetent. Besuchen Sie uns in Dorsten oder kontaktieren Sie uns – wir sind für Sie da.
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
              02362 9993954
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
              Wir nehmen uns Zeit für Sie und begleiten Sie einfühlsam durch alle Entscheidungen. Füllen Sie das Formular aus – wir melden uns schnellstmöglich persönlich bei Ihnen.
            </p>
          </div>
          <GedenkForm />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
