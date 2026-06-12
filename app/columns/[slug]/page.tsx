import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotionContent from "@/components/NotionContent";
import SubscribeForm from "@/components/SubscribeForm";
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
    openGraph: {
      type: "article",
      title: col.title,
      description: col.summary,
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

  return (
    <>
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
          <h2>혼자 하면 막막합니다</h2>
          <p>직장인 맞춤으로, 백관장이 정리해뒀습니다.</p>
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
    </>
  );
}
