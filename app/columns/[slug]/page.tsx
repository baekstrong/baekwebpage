import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotionContent from "@/components/NotionContent";
import SubscribeForm from "@/components/SubscribeForm";
import JsonLd from "@/components/JsonLd";
import {
  getColumns,
  getColumnBySlug,
  getBlocks,
  formatDate,
} from "@/lib/notion";

export const revalidate = 60; // ISR
export const dynamicParams = true; // 빌드 후 추가된 칼럼도 노출

export async function generateStaticParams() {
  const cols = await getColumns();
  return cols.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = await getColumnBySlug(slug);
  if (!col) return { title: "칼럼 — 백관장의 체력 상담소" };
  return {
    title: `${col.title} — 백관장의 체력 상담소`,
    description: col.summary,
    alternates: { canonical: `/columns/${slug}` },
    openGraph: {
      type: "article",
      title: col.title,
      description: col.summary,
      publishedTime: col.date || undefined,
      authors: ["백승덕"],
    },
  };
}

export default async function ColumnDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = await getColumnBySlug(slug);
  if (!col) notFound();
  const blocks = await getBlocks(col.id);

  const SITE = "https://masterbaek.vercel.app";
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: col.title,
    description: col.summary,
    datePublished: col.date || undefined,
    dateModified: col.date || undefined,
    inLanguage: "ko-KR",
    author: { "@type": "Person", name: "백승덕", url: `${SITE}/about` },
    publisher: { "@id": `${SITE}/#org` },
    mainEntityOfPage: `${SITE}/columns/${slug}`,
    image: `${SITE}/columns/${slug}/opengraph-image`,
  };

  return (
    // reading: 칼럼 본문 읽는 동안 상단 네비 고정 해제(함께 스크롤) — 읽기 공간 확보
    <div className="reading">
      <JsonLd data={articleLd} />
      <Header active="columns" />

      <article>
        {/* 표지: 그림 없이 남색 헤더 */}
        <header className="article-hero">
          <div className="wrap">
            <Link className="back" href="/columns">
              ← 칼럼 목록
            </Link>
            <h1>{col.title}</h1>
            <div className="meta">{formatDate(col.date)}</div>
          </div>
        </header>

        <div className="article">
          <NotionContent blocks={blocks} />
        </div>
      </article>

      {/* 뉴스레터 구독 */}
      <SubscribeForm />

      {/* 하단 상품 CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>혼자 하면 막막하죠</h2>
          <p>직장인에 맞춰 백관장이 정리해뒀습니다.</p>
          <div className="sns">
            <Link
              href="/products"
              style={{ background: "#fff", color: "#004AAD", borderColor: "#fff" }}
            >
              방법 둘러보기 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
