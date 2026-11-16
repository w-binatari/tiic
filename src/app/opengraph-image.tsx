import { ImageResponse } from "next/og";

export const alt = "NCDMB Tech Innovation Challenge: Nigerian research, built for industry";
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
          justifyContent: "space-between",
          background: "#0a3d24",
          color: "white",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 22, height: 22, background: "#f0b429" }} />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4 }}>NCDMB TECH INNOVATION CHALLENGE</div>
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.98, letterSpacing: -3, maxWidth: 980 }}>
          Nigerian research, built for industry.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 32 }}>
          <div style={{ color: "rgba(255,255,255,0.8)" }}>15 finalists in 2026 · TIC 2027 is confirmed</div>
          <div style={{ color: "#f0b429", fontWeight: 700 }}>ncdmb-tic.org</div>
        </div>
      </div>
    ),
    size,
  );
}
