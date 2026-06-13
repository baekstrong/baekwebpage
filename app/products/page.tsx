import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "상품 — 백관장의 체력 상담소",
};

export default function Products() {
  const online = PRODUCTS.filter((p) => p.category === "online");
  const offline = PRODUCTS.filter((p) => p.category === "offline");
  const upcoming = PRODUCTS.filter((p) => p.category === "upcoming");

  return (
    <>
      <Header active="products" />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">PRODUCTS</span>
          <h1>백관장의 상품</h1>
          <p>
            읽고 끝내지 마세요. 단계에 맞게 골라 직접 강해지면 됩니다. 입문은
            전자책부터, 제대로 바꾸려면 정규수업으로.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {/* 온라인 */}
          <div className="cat-label">온라인 · 혼자서 시작</div>
          <div className="grid-prod">
            {online.map((p) => (
              <Link className="prod" key={p.id} href={`/products/${p.id}`}>
                <div className="icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <p className="desc">{p.short}</p>
                <div className="via">
                  결제: <b>{p.via}</b>
                </div>
                <span className="buy">자세히 보기 →</span>
              </Link>
            ))}
          </div>

          {/* 오프라인 */}
          <div className="cat-label">오프라인 · 직접 배우기</div>
          <div className="grid-prod">
            {offline.map((p) => (
              <Link className="prod" key={p.id} href={`/products/${p.id}`}>
                <div className="icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <p className="desc">{p.short}</p>
                <div className="via">
                  결제: <b>{p.via}</b>
                </div>
                <span className="buy">자세히 보기 →</span>
              </Link>
            ))}
            <div
              className="prod"
              style={{
                background: "#004AAD",
                borderColor: "#004AAD",
                color: "#fff",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: 22 }}>나한테 맞는 건 뭘까?</h3>
              <p
                className="desc"
                style={{ color: "#cdddf7", flex: "none", marginBottom: 24 }}
              >
                체력 수준과 목표에 맞는 상품을 골라드립니다.
              </p>
              <Link
                className="buy"
                href="/contact"
                style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
              >
                상담 신청 →
              </Link>
            </div>
          </div>

          {/* 추후 */}
          <div className="cat-label">추후 출시 예정</div>
          <div className="grid-prod">
            {upcoming.map((p) => (
              <Link
                className="prod"
                key={p.id}
                href={`/products/${p.id}`}
                style={{ opacity: 0.6 }}
              >
                <div className="icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <p className="desc">{p.short}</p>
                <div className="via">결제: {p.via}</div>
                <span className="buy" style={{ color: "#525252" }}>
                  출시 예정
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>아직 고민되나요?</h2>
          <p>칼럼으로 원리부터 잡고 가세요. 그러면 고르기가 훨씬 쉬워집니다.</p>
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
