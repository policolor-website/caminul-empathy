import { NextResponse } from "next/server";
import { appendFile } from "node:fs/promises";
import path from "node:path";

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const TEL_RE = /^\+?[0-9 ().\-]{9,20}$/;

export async function POST(req: Request) {
  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Cerere invalidă." }, { status: 400 });
  }

  // Honeypot — bots fill hidden "website" field
  if (String(fd.get("website") || "").trim() !== "") {
    return NextResponse.json({ ok: true, message: "Mulțumim!" });
  }

  // Basic time-trap: submissions faster than 3s after page load are likely bots
  const t = Number(fd.get("t") || 0);
  if (t && Date.now() - t < 3000) {
    return NextResponse.json({ ok: true, message: "Mulțumim!" });
  }

  const nume = String(fd.get("nume") || "").trim().slice(0, 120);
  const telefon = String(fd.get("telefon") || "").trim().slice(0, 30);
  const email = String(fd.get("email") || "").trim().slice(0, 120);
  const situatie = String(fd.get("situatie") || "").trim().slice(0, 120);
  const centru = String(fd.get("centru") || "").trim().slice(0, 120);
  const mesaj = String(fd.get("mesaj") || "").trim().slice(0, 2000);
  const gdpr = fd.get("gdpr") === "1";

  const errors: Record<string, string> = {};
  if (!nume) errors.nume = "Numele este obligatoriu.";
  if (!TEL_RE.test(telefon)) errors.telefon = "Numărul de telefon nu pare valid.";
  if (email && !EMAIL_RE.test(email)) errors.email = "Adresa de email nu pare validă.";
  if (!gdpr) errors.gdpr = "Este necesar acordul pentru prelucrarea datelor.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { ok: false, message: "Verificați câmpurile marcate.", errors },
      { status: 422 }
    );
  }

  const record = {
    at: new Date().toISOString(),
    nume,
    telefon,
    email: email || null,
    situatie: situatie || null,
    centru: centru || null,
    mesaj: mesaj || null,
  };

  // Delivery: CONTACT_WEBHOOK (e.g. Make/Zapier/n8n) takes priority;
  // otherwise append to messages.log in the project root.
  const webhook = process.env.CONTACT_WEBHOOK;
  try {
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } else {
      await appendFile(
        path.join(process.cwd(), "messages.log"),
        JSON.stringify(record) + "\n",
        "utf8"
      );
    }
  } catch {
    // Non-fatal: we still acknowledge receipt so the visitor isn't lost.
  }

  return NextResponse.json({
    ok: true,
    message: "Mulțumim! Am primit cererea și vă contactăm în maximum 24 de ore.",
  });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
