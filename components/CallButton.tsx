"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/content";
import Icon from "./Icons";

const ADS_CALL_SEND_TO = "AW-11043980969/6E9VCK2a4LwdEKmNl5Ip";

export default function CallButton() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="tel:"]'
      );
      if (!a) return;
      e.preventDefault();
      const url = a.getAttribute("href") ?? SITE.phoneHref;
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: ADS_CALL_SEND_TO,
          value: 1.0,
          currency: "RON",
          event_callback: () => {
            window.location.href = url;
          },
        });
      } else {
        window.location.href = url;
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const track = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "phone_click",
      placement: "floating_call_button",
      phone: SITE.phoneHref,
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "phone_click", {
        event_category: "contact",
        event_label: "floating_call_button",
      });
    }
  };

  return (
    <a
      href={SITE.phoneHref}
      onClick={track}
      aria-label={`Sună acum la ${SITE.phone}`}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3.5 text-base font-bold text-white shadow-xl shadow-green-600/30 transition-transform hover:scale-105 active:scale-95 md:hidden"
    >
      <Icon name="phone" className="h-5 w-5" />
      Suna acum
    </a>
  );
}
