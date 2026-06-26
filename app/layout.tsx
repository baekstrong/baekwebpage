import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masterbaek.vercel.app"),
  title: "백관장의 체력 상담소",
  description:
    "직장인에게, 힘을! 야근에 지친 당신도 체력은 만들 수 있습니다. 운동량이 아니라 원리입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "백관장의 체력 상담소",
    title: "백관장의 체력 상담소",
    description:
      "직장인에게, 힘을! 야근에 지친 당신도 체력은 만들 수 있습니다. 운동량이 아니라 원리입니다.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={ibmPlexSansKR.variable}>
      <body>{children}</body>
    </html>
  );
}
