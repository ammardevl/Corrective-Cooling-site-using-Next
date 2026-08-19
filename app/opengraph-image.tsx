import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "#08090b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 10% 20%, rgba(255,90,43,0.25), transparent 60%), radial-gradient(700px circle at 90% 80%, rgba(47,214,196,0.25), transparent 60%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff5a2b 0%, #ff5a2b 45%, #2fd6c4 55%, #2fd6c4 100%)",
            }}
          />
          <span style={{ fontSize: 28, color: "#beb9ae", letterSpacing: 4, textTransform: "uppercase" }}>
            Corrective Cooling
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#f3f1ec",
            marginTop: 28,
            lineHeight: 1.05,
            position: "relative",
            maxWidth: 900,
          }}
        >
          Precision comfort, corrected.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8b8780", marginTop: 24, position: "relative" }}>
          Residential HVAC &middot; Brandon, Mississippi
        </div>
      </div>
    ),
    { ...size }
  );
}
