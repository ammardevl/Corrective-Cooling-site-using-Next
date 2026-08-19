import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
          border: "1.5px solid #262a30",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff5a2b 0%, #ff5a2b 45%, #2fd6c4 55%, #2fd6c4 100%)",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#08090b",
            position: "relative",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
