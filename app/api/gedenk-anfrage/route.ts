import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { anrede, vorname, nachname, email, telefon, wunschtermin, uhrzeit, nachricht, datenschutz } = await req.json();

  if (!vorname || !nachname || !email || !telefon || !wunschtermin || !datenschutz) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fullName = `${anrede ? anrede + " " : ""}${vorname} ${nachname}`;

  await transporter.sendMail({
    from: `"${fullName}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.SMTP_TO ?? process.env.SMTP_USER,
    subject: `[Gedenkfloristik] Beratungsanfrage von ${fullName}`,
    text: `Gedenkfloristik – Beratungsanfrage\n\nAnrede: ${anrede || "–"}\nName: ${fullName}\nE-Mail: ${email}\nTelefon: ${telefon}\nWunschtermin: ${wunschtermin}\nUhrzeit: ${uhrzeit || "–"}\n\nNachricht:\n${nachricht || "–"}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;">
        <h2 style="color:#1B2B7A;margin-bottom:4px;">Gedenkfloristik – Beratungsanfrage</h2>
        <p style="color:#C4545A;font-size:1.1rem;margin-top:0;">Floristik Köster Dorsten</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p><strong>Anrede:</strong> ${anrede || "–"}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefon:</strong> <a href="tel:${telefon}">${telefon}</a></p>
        <p><strong>Wunschtermin:</strong> ${wunschtermin}</p>
        <p><strong>Uhrzeit:</strong> ${uhrzeit || "–"}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p><strong>Nachricht:</strong></p>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${nachricht || "–"}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
