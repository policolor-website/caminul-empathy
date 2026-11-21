import { ImageResponse } from "next/og";

export const alt = "Căminul Empathy — Cămin de bătrâni în Ilfov";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #071737 0%, #0B1F4B 60%, #123264 100%)",
          color: "#F5F0E6",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#F0D9B0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#0B1F4B",
            }}
          >
            E
          </div>
          <div style={{ fontSize: 34, letterSpacing: 6, color: "#F0D9B0", textTransform: "uppercase" }}>
            Cămin de bătrâni · Ilfov
          </div>
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          Căminul Empathy
        </div>
        <div style={{ fontSize: 36, color: "#F0D9B0", marginTop: 28, maxWidth: 1000 }}>
          Îngrijire medicală 24/7 · 4 locații în Ilfov · de la 4.500 lei/lună
        </div>
      </div>
    ),
    size
  );
}
