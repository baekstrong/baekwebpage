import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) return { title: "상품 — 백관장의 체력 상담소" };
  return {
    title: `${p.name} — 백관장의 체력 상담소`,
    description: p.short,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();

  // 추천: 같은 카테고리의 다른 상품
  const related = PRODUCTS.filter(
    (x) => x.id !== p.id && x.category === p.category
  ).slice(0, 2);

  return (
    <>
      <Header active="products" />

      <article>
        {/* 표지: 남색 헤더 */}
        <header className="product-hero">
          <div className="wrap">
            <Link className="back" href="/products">
              ← 상품 전체
            </Link>
            <div className="phead">
              <div className="picon">{p.icon}</div>
              <div>
                <div className="pcat">{p.categoryLabel}</div>
                <h1>{p.name}</h1>
                <p className="ptag">{p.tagline}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="product-body wrap">
          <div className="pmain">
            {p.detail.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <h2>이런 분께 추천합니다</h2>
            <ul>
              {p.forWho.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>

            <h2>이런 내용을 담았습니다</h2>
            <ul>
              {p.includes.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>

          {/* 구매 박스 */}
          <aside className="pbuy">
            <div className="pbuy-price">{p.price}</div>
            <div className="pbuy-via">
              결제: <b>{p.via}</b>
            </div>
            {p.available && p.buyUrl ? (
              <a
                className="btn btn-primary pbuy-btn"
                href={p.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.buyLabel} →
              </a>
            ) : p.available && !p.buyUrl ? (
              <>
                <span className="btn btn-primary pbuy-btn pbuy-disabled">
                  {p.buyLabel} (준비 중)
                </span>
                <p className="pbuy-note">결제 링크 연결 예정입니다.</p>
              </>
            ) : (
              <>
                <Link className="btn btn-ghost pbuy-btn" href="/#sns">
                  {p.buyLabel} →
                </Link>
                <p className="pbuy-note">출시되면 가장 먼저 알려드릴게요.</p>
              </>
            )}
          </aside>
        </div>

        {/* 관련 상품 */}
        {related.length > 0 && (
          <section className="block" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <div className="cat-label">함께 보면 좋은 상품</div>
              <div className="grid-prod">
                {related.map((r) => (
                  <Link className="prod" key={r.id} href={`/products/${r.id}`}>
                    <div className="icon">{r.icon}</div>
                    <h3>{r.name}</h3>
                    <div className="price">{r.price}</div>
                    <p className="desc">{r.short}</p>
                    <span className="buy">자세히 보기 →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>아직 고민된다면?</h2>
          <p>먼저 칼럼으로 원리부터 이해해보세요. 선택이 훨씬 쉬워집니다.</p>
          <div className="sns">
            <Link
              href="/columns"
              style={{ background: "#fff", color: "#004AAD", borderColor: "#fff" }}
            >
              체력향상 칼럼 보기 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
