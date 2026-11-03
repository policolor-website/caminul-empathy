"use client";

import { useState } from "react";
import { LOCATIONS, SITE } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (res.ok && data.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "A apărut o eroare. Vă rugăm să ne sunați.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("A apărut o eroare. Vă rugăm să ne sunați la " + SITE.phone + ".");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-pine-mist border border-pine/20 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-cream">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-pine-deep">Mulțumim!</h3>
        <p className="mt-2 text-ink-soft">
          Am primit mesajul. Vă contactăm în maximum 24 de ore. Pentru urgențe, sunați la{" "}
          <a href={SITE.phoneHref} className="font-semibold text-pine">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="t" value={typeof window !== "undefined" ? Date.now() : 0} readOnly />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-nume" className="mb-1.5 block text-sm font-semibold text-ink">
            Nume și prenume *
          </label>
          <input
            id="cf-nume"
            name="nume"
            type="text"
            required
            maxLength={120}
            placeholder="Ex: Maria Popescu"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
          />
        </div>
        <div>
          <label htmlFor="cf-telefon" className="mb-1.5 block text-sm font-semibold text-ink">
            Telefon *
          </label>
          <input
            id="cf-telefon"
            name="telefon"
            type="tel"
            required
            maxLength={30}
            placeholder="07xx xxx xxx"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-situatie" className="mb-1.5 block text-sm font-semibold text-ink">
            Situația rezidentului
          </label>
          <select
            id="cf-situatie"
            name="situatie"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
          >
            <option value="">Selectați…</option>
            <option>Independent, dorește comunitate</option>
            <option>Necesită asistență parțială</option>
            <option>Dependent de îngrijire</option>
            <option>Imobilizat la pat</option>
            <option>Alzheimer / demență</option>
            <option>Recuperare post-AVC</option>
            <option>Altă situație</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-centru" className="mb-1.5 block text-sm font-semibold text-ink">
            Centrul preferat
          </label>
          <select
            id="cf-centru"
            name="centru"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
          >
            <option value="">Fără preferință</option>
            {LOCATIONS.map((l) => (
              <option key={l.slug}>{l.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-mesaj" className="mb-1.5 block text-sm font-semibold text-ink">
          Mesaj
        </label>
        <textarea
          id="cf-mesaj"
          name="mesaj"
          rows={4}
          maxLength={2000}
          placeholder="Spuneți-ne pe scurt ce vă interesează…"
          className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20 resize-y"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft cursor-pointer">
        <input
          type="checkbox"
          name="gdpr"
          value="1"
          required
          className="mt-1 h-4 w-4 rounded border-sand text-pine accent-pine"
        />
        <span>
          Sunt de acord cu prelucrarea datelor personale în scopul contactării, conform politicii de confidențialitate. *
        </span>
      </label>

      {status === "error" && (
        <div className="rounded-xl bg-clay/10 border border-clay/30 px-4 py-3 text-sm text-clay-deep">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pine px-8 py-3.5 text-[16px] font-semibold text-white shadow-sm transition-colors hover:bg-pine-deep disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Trimite cererea"}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
