import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns, formatDate } from "@/lib/notion";
import SubscribeForm from "@/components/SubscribeForm";

export const revalidate = 60; // ISR

export const metadata = {
  title: "체력향상 칼럼 — 백관장의 체력 상담소",
};

export default async function Columns() {
  const cols = await getColumns();
  const feature = cols.find((c) => c.grade === "A") ?? null;
  const rest = cols.filter((c) => c.id !== feature?.id);

  return (
    <>
      <Header active="columns" />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">CONTENT</span>
          <h1>체력향상 칼럼</h1>
          <p>
            운동량이 아니라 원리입니다. 바쁜 직장인이 가장 빨리 강해지는 법만,
            검증된 내용으로 풀어 씁니다.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {cols.length === 0 && (
            <p style={{ color: "var(--gray70)", fontSize: 18 }}>
              아직 올라온 칼럼이 없습니다. 곧 찾아옵니다.
            </p>
          )}

          {/* 추천(A등급) 칼럼 */}
          {feature && (
            <Link className="feature" href={`/columns/${feature.slug}`}>
              <div className="ftxt">
                <div className="tag">★ 이번 주 추천 칼럼</div>
                <h2>{feature.title}</h2>
                <p>{feature.summary}</p>
                <span className="btn btn-primary">칼럼 읽기 →</span>
              </div>
              <div className="fcover">{feature.title}</div>
            </Link>
          )}

          {/* 칼럼 그리드 */}
          {rest.length > 0 && (
            <div className="grid3">
              {rest.map((c) => (
                <Link
                  className="col-card"
                  key={c.id}
                  href={`/columns/${c.slug}`}
                >
                  <div className="ccover">{c.title}</div>
                  <p className="excerpt">{c.summary}</p>
                  <div className="date">{formatDate(c.date)}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 뉴스레터 구독 */}
      <SubscribeForm />

      {/* CTA */}
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
    </>
  );
}
