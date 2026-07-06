import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, getProduct } from "@/lib/products";
import Reviews from "@/components/Reviews";
import { getReviewsByProduct } from "@/lib/reviews";
import JsonLd from "@/components/JsonLd";
import SubscribeForm from "@/components/SubscribeForm";

// 오프라인 수업 공통 장소 (근력학교 고대점)
const PLACE = {
  name: "근력학교 고대점",
  addr: "서울 성북구 고려대로24길 47, 3층 (안암역 3번 출구 도보 4분)",
  mapUrl: "https://naver.me/xiqDtNuY",
};

// 가격 문자열 → KRW 숫자 ("₩ 9,900"→9900 / "주 2회 31만…"→310000 / "준비 중"→null)
function priceKRW(price: string): number | null {
  const won = price.match(/₩\s*([\d,]+)/);
  if (won) return Number(won[1].replace(/,/g, ""));
  const man = price.match(/(\d+)\s*만/);
  if (man) return Number(man[1]) * 10000;
  return null;
}

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
    alternates: { canonical: `/products/${id}` },
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

  // 이 상품에 대한 실제 후기 (근력학교·원데이만 보유)
  const reviews =
    p.id === "school" || p.id === "oneday"
      ? getReviewsByProduct(p.id)
      : [];

  const price = priceKRW(p.price);
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.short,
    brand: { "@type": "Brand", name: "백관장의 체력 상담소" },
    ...(price && p.available && p.buyUrl
      ? {
          offers: {
            "@type": "Offer",
            price: String(price),
            priceCurrency: "KRW",
            availability: "https://schema.org/InStock",
            url: p.buyUrl,
          },
        }
      : {}),
  };

  return (
    <>
      <JsonLd data={productLd} />
      <Header active="products" />

      <div className="sg">
        <article>
          <header className="sg-prod-hero">
            <Link className="back mono" href="/products">
              ← 상품 전체
            </Link>
            <div className="cat mono">{p.categoryLabel}</div>
            <h1>{p.name}</h1>
            <p className="tag">{p.tagline}</p>
          </header>

          <div className="sg-prod-body">
            <div className="sg-pmain">
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
            <aside className="sg-pbuy">
              <div className="price">{p.price}</div>
              <div className="via">
                결제: <b>{p.via}</b>
              </div>
              {p.available && p.buyUrl ? (
                <a
                  className="sg-btn sg-btn-primary sg-pbuy-btn"
                  href={p.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.buyLabel} →
                </a>
              ) : p.available && !p.buyUrl ? (
                <>
                  <span className="sg-btn sg-btn-primary sg-pbuy-btn sg-pbuy-disabled">
                    {p.buyLabel} (준비 중)
                  </span>
                  <p className="sg-pbuy-note">결제 링크 연결 예정입니다.</p>
                </>
              ) : (
                <>
                  <a className="sg-btn sg-btn-ghost sg-pbuy-btn" href="#notify">
                    {p.buyLabel} →
                  </a>
                  <p className="sg-pbuy-note">
                    아래에 이메일을 남기면 가장 먼저 소식을 보내드립니다.
                  </p>
                </>
              )}
              {p.category === "offline" && (
                <p className="sg-pbuy-note">
                  장소: {PLACE.name} — {PLACE.addr}{" "}
                  <a href={PLACE.mapUrl} target="_blank" rel="noopener noreferrer">
                    네이버 지도 →
                  </a>
                </p>
              )}
            </aside>
          </div>

          {/* 관련 상품 */}
          {related.length > 0 && (
            <section className="sg-body tight">
              <div className="sg-catlabel mono">함께 보면 좋은 상품</div>
              <div className="sg-rows">
                {related.map((r, i) => (
                  <Link className="sg-row" key={r.id} href={`/products/${r.id}`}>
                    <span className="i mono">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="t">{r.name}</div>
                      <div className="price">{r.price}</div>
                      <div className="d">{r.short}</div>
                    </div>
                    <div className="cta">자세히 보기 →</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* 준비중 상품: 출시 알림 = 뉴스레터 구독 */}
        {!p.available && (
          <SubscribeForm
            id="notify"
            title="출시 소식을 메일로 받아보세요"
            desc="새 상품이 나오면 구독자에게 가장 먼저 알려드립니다."
          />
        )}

        {/* 이 상품 후기 */}
        {reviews.length > 0 && (
          <Reviews
            plain
            reviews={reviews}
            title="실제 수강생 후기"
            subtitle={
              p.id === "school"
                ? "네이버 지도에 올라온 근력학교 수강생 후기입니다."
                : "스마트스토어에 올라온 케틀벨 원데이 클래스 후기입니다."
            }
          />
        )}

        {/* CTA */}
        <section className="sg-cta">
          <h2>뭘 골라야 할지 모르겠다면</h2>
          <p>원리부터 잡으면 길이 보입니다. 칼럼 몇 편이면 방향이 잡혀요.</p>
          <div className="btns">
            <Link className="sg-btn sg-btn-primary" href="/columns">
              체력향상 칼럼 보기 →
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
