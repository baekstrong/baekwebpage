import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, type Product } from "@/lib/products";

export const metadata = {
  title: "상품 — 백관장의 체력 상담소",
  alternates: { canonical: "/products" },
};

const CODE: Record<string, string> = {
  ebook: "EBOOK",
  "book-survival": "BOOK",
  "online-course": "ONLINE",
  program: "PROGRAM",
  oneday: "ONE-DAY",
  school: "SCHOOL",
  goods: "GOODS",
};

function Card({ p, strong }: { p: Product; strong?: boolean }) {
  const code = CODE[p.id] ?? "";

  if (!p.available) {
    return (
      <div className="sg-pcard muted">
        <div className="sg-pcard-top">
          <span className="sg-pcode mono">{code}</span>
          <span className="sg-pprice soon mono">준비 중</span>
        </div>
        <h3>{p.name}</h3>
        <p>{p.short}</p>
        <span className="more">출시 예정</span>
      </div>
    );
  }

  const sched = !p.price.trim().startsWith("₩");
  return (
    <Link className={`sg-pcard${strong ? " strong" : ""}`} href={`/products/${p.id}`}>
      <div className="sg-pcard-top">
        <span className="sg-pcode mono">{code}</span>
        <span className={`sg-pprice${sched ? " sched mono" : ""}`}>{p.price}</span>
      </div>
      <h3>{p.name}</h3>
      <p>{p.short}</p>
      <span className="more">
        자세히 보기 → <span className="via">· {p.via}</span>
      </span>
    </Link>
  );
}

export default function Products() {
  const online = PRODUCTS.filter((p) => p.category === "online");
  const offline = PRODUCTS.filter((p) => p.category === "offline");
  const goods = PRODUCTS.find((p) => p.category === "upcoming");

  return (
    <>
      <Header active="products" />

      <div className="sg">
        <section className="sg-pagehead">
          <div className="lab mono">▍PRODUCTS</div>
          <h1>백관장의 상품</h1>
          <p>
            읽고 끝내지 마세요. 단계에 맞게 골라 직접 강해지면 됩니다. 입문은
            전자책부터, 제대로 바꾸려면 정규수업으로.
          </p>
        </section>

        {/* 온라인 */}
        <section style={{ padding: "48px 32px 8px" }}>
          <div className="sg-seclabel mono">▍온라인 · 혼자서 시작</div>
          <div className="sg-pcards">
            {online.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* 오프라인 */}
        <section style={{ padding: "48px 32px 8px" }}>
          <div className="sg-seclabel mono">▍오프라인 · 직접 배우기</div>
          <div className="sg-pcards">
            {offline.map((p) => (
              <Card key={p.id} p={p} strong />
            ))}
          </div>
        </section>

        {/* 추천 헬퍼 */}
        <section style={{ padding: "48px 32px" }}>
          <div className="sg-pick">
            <div>
              <h3>나한테 맞는 건 뭘까?</h3>
              <p>
                체력 수준과 목표에 맞는 상품을 골라드립니다. 1분 자가진단으로
                시작해도 좋아요.
              </p>
            </div>
            <div className="btns">
              <Link className="sg-btn sg-btn-primary" href="/quiz">
                자가진단 →
              </Link>
              <Link className="sg-btn sg-btn-ghost" href="/contact">
                상담 신청
              </Link>
            </div>
          </div>
        </section>

        {/* 추후 출시 */}
        {goods && (
          <section style={{ padding: "0 32px 56px" }}>
            <div className="sg-seclabel mono">▍추후 출시 예정</div>
            <div className="sg-soonrow">
              <span className="code mono">{CODE[goods.id]}</span>
              <div>
                <div className="t">{goods.name}</div>
                <div className="d">{goods.short}</div>
              </div>
              <span className="s mono">출시 예정</span>
            </div>
          </section>
        )}

        {/* CTA (다크) */}
        <section className="sg-darkcta">
          <div className="sg-darkcta-in">
            <div>
              <h2>뭘 골라야 할지 모르겠다면</h2>
              <p>원리부터 잡으면 길이 보입니다. 칼럼 몇 편이면 방향이 잡혀요.</p>
            </div>
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
