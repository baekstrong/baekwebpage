import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
});

const SITE = "https://masterbaek.vercel.app";
const SNS = [
  "https://www.youtube.com/@easystrength101",
  "https://www.instagram.com/easystrength101/",
  "https://www.threads.com/@easystrength101",
  "https://www.tiktok.com/@easystrength101",
  "https://blog.naver.com/qortmdejr123",
];

// 전역 구조화 데이터: 사이트 정체성 + 운영자(E-E-A-T)
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "백관장의 체력 상담소",
      url: SITE,
      logo: `${SITE}/logo.png`,
      sameAs: SNS,
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#baek`,
      name: "백승덕",
      alternateName: "백관장",
      jobTitle: "체력 코치",
      worksFor: { "@id": `${SITE}/#org` },
      url: `${SITE}/about`,
      sameAs: SNS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "백관장의 체력 상담소",
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
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
  // 서치콘솔/네이버 소유확인: 코드 받으면 Vercel 환경변수만 채우면 됨(코드 변경 불필요)
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.NAVER_SITE_VERIFICATION
      ? { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION }
      : {},
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={ibmPlexSansKR.variable}>
      <body>
        <JsonLd data={siteJsonLd} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
