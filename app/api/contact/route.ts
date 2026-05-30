import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
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

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.SMTP_TO ?? process.env.SMTP_USER,
    subject: subject ? `[Floristik Köster] ${subject}` : `[Floristik Köster] Neue Nachricht von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;">
        <h2 style="color:#1B2B7A;margin-bottom:4px;">Neue Nachricht</h2>
        <p style="color:#C4545A;font-size:1.1rem;margin-top:0;">Floristik Köster — Kontaktformular</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        ${subject ? `<p><strong>Betreff:</strong> ${subject}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
