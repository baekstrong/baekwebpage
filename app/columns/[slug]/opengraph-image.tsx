import { ImageResponse } from "next/og";
import { getColumnBySlug } from "@/lib/notion";
import { loadGoogleFont } from "@/lib/og";

export const alt = "백관장의 체력 상담소 — 체력 칼럼";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 3600;

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = await getColumnBySlug(slug).catch(() => null);
  const title = col?.title ?? "체력향상 칼럼";
  const eyebrow = "체력향상 칼럼";
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
          justifyContent: "space-between",
          padding: "72px 96px",
          background: "#004AAD",
          color: "#fff",
          fontFamily: "IBM Plex Sans KR",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.75, letterSpacing: 2 }}>
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: title.length > 24 ? 56 : 68,
            fontWeight: 600,
            lineHeight: 1.35,
            wordBreak: "keep-all",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          <div style={{ width: 48, height: 6, background: "#DA1E28", marginRight: 18 }} />
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
