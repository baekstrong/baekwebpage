import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns, formatDate } from "@/lib/notion";
import SubscribeForm from "@/components/SubscribeForm";

export const revalidate = 60; // ISR

export const metadata = {
  title: "체력향상 칼럼 — 백관장의 체력 상담소",
  alternates: { canonical: "/columns" },
};

export default async function Columns() {
  const cols = await getColumns();
  const feature = cols.find((c) => c.grade === "A") ?? null;
  const rest = cols.filter((c) => c.id !== feature?.id);

  return (
    <>
      <Header active="columns" />

      <div className="sg">
        <section className="sg-pagehead">
          <div className="lab mono">▍CONTENT</div>
          <h1>체력향상 칼럼</h1>
          <p>
            운동량이 아니라 원리입니다. 바쁜 직장인이 가장 빨리 강해지는 법만,
            검증된 내용으로 풀어 씁니다.
          </p>
        </section>

        <section style={{ padding: "36px 32px 16px" }}>
          {cols.length === 0 && (
            <p style={{ color: "var(--sg-body)", fontSize: 18 }}>
              아직 올라온 칼럼이 없습니다. 곧 찾아옵니다.
            </p>
          )}

          {feature && (
            <Link className="sg-feature" href={`/columns/${feature.slug}`}>
              <div className="lab mono">★ 이번 주 추천 칼럼</div>
              <h2>{feature.title}</h2>
              <p>{feature.summary}</p>
              <span className="read">칼럼 읽기 →</span>
            </Link>
          )}

          {rest.length > 0 && (
            <div style={{ marginTop: feature ? 28 : 8 }}>
              <div className="sg-listmeta mono">전체 칼럼 · {cols.length}편</div>
              <div className="sg-collist">
                {rest.map((c) => (
                  <Link
                    className="sg-colrow"
                    key={c.id}
                    href={`/columns/${c.slug}`}
                  >
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.summary}</p>
                    </div>
                    <span className="date mono">{formatDate(c.date)}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 뉴스레터 (다크) */}
        <SubscribeForm />

        {/* CTA */}
        <section className="sg-splitcta">
          <div>
            <h2>혼자 하면 이게 맞나 싶죠</h2>
            <p>
              방향부터 잡아야 헛고생을 안 합니다. 직장인 몸에 맞춰 단계별로
              정리해뒀어요.
            </p>
          </div>
          <Link className="sg-btn sg-btn-primary" href="/products">
            내게 맞는 방법 보기 →
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}
