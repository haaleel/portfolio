import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 18,
          background: "#0f172a",
          color: "#e2e8f0",
          padding: 88,
        }}
      >
        <div style={{ fontSize: 22, color: "#5eead4", letterSpacing: 2 }}>
          AI FULL-STACK ENGINEER
        </div>
        <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 28, color: "#94a3b8", maxWidth: 900 }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
