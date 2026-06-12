import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og";

export const alt = "백관장의 체력 상담소 — 직장인에게, 힘을!";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const eyebrow = "직장인 체력 상담소 · 유튜브 6.2만 구독";
  const title = "직장인에게, 힘을!";
  const brand = "백관장의 체력 상담소";
  const font = await loadGoogleFont(eyebrow + title + brand);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#004AAD",
          color: "#fff",
          fontFamily: "IBM Plex Sans KR",
        }}
      >
        <div style={{ fontSize: 30, opacity: 0.75, letterSpacing: 2 }}>
          {eyebrow}
        </div>
        <div style={{ fontSize: 110, fontWeight: 600, marginTop: 24 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 56,
            fontSize: 34,
          }}
        >
          <div style={{ width: 56, height: 6, background: "#DA1E28", marginRight: 20 }} />
          {brand}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "IBM Plex Sans KR", data: font, weight: 600 }],
    }
  );
}
