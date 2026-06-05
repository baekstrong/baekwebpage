import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "상품 — 백관장의 체력 상담소",
};

export default function Products() {
  return (
    <>
      <Header active="products" />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">PRODUCTS</span>
          <h1>백관장의 상품</h1>
          <p>
            읽고 끝나지 마세요. 단계에 맞게 골라 직접 강해지세요. 입문은 전자책부터,
            깊이 있는 변화는 정규수업으로.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {/* 온라인 */}
          <div className="cat-label">온라인 · 혼자서 시작</div>
          <div className="grid-prod">
            <div className="prod">
              <div className="icon">📘</div>
              <h3>전자책</h3>
              <div className="price">₩ 19,000</div>
              <p className="desc">
                직장인 체력의 핵심 원리를 한 권에 압축. 가장 빠르고 저렴하게
                시작하는 방법.
              </p>
              <div className="via">
                결제: <b>리틀리</b>
              </div>
              <a className="buy" href="https://litt.ly/easystrength" target="_blank">
                구매하기 →
              </a>
            </div>
            <div className="prod">
              <div className="icon">🎬</div>
              <h3>온라인 강의</h3>
              <div className="price">준비 중</div>
              <p className="desc">
                10편 이하의 핵심 강의. 출퇴근길에 보고 그날 바로 적용하는 압축
                커리큘럼.
              </p>
              <div className="via">결제: 준비 중</div>
              <a className="buy" href="#">
                알림 신청 →
              </a>
            </div>
            <div className="prod">
              <div className="icon">🏋️</div>
              <h3>운동 프로그램</h3>
              <div className="price">준비 중</div>
              <p className="desc">
                따라만 하면 되는 주간 루틴. 헬스장에서 보내는 시간을 절반으로
                줄여줍니다.
              </p>
              <div className="via">결제: 준비 중</div>
              <a className="buy" href="#">
                알림 신청 →
              </a>
            </div>
          </div>

          {/* 오프라인 */}
          <div className="cat-label">오프라인 · 직접 배우기</div>
          <div className="grid-prod">
            <div className="prod">
              <div className="icon">📅</div>
              <h3>원데이 클래스</h3>
              <div className="price">₩ 89,000</div>
              <p className="desc">
                하루 만에 핵심 자세와 원리를 몸으로 익히는 오프라인 집중 수업.
              </p>
              <div className="via">
                결제: <b>스마트스토어</b>
              </div>
              <a className="buy" href="#" target="_blank">
                신청하기 →
              </a>
            </div>
            <div className="prod">
              <div className="icon">🎓</div>
              <h3>근력학교 정규수업</h3>
              <div className="price">₩ 350,000~</div>
              <p className="desc">
                체계적으로 강해지는 정규 과정. 직장인을 위해 설계된 단계별
                커리큘럼.
              </p>
              <div className="via">
                결제: <b>스마트스토어</b>
              </div>
              <a className="buy" href="#" target="_blank">
                신청하기 →
              </a>
            </div>
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
              <h3 style={{ color: "#fff", fontSize: 22 }}>어떤 게 나에게 맞을까?</h3>
              <p
                className="desc"
                style={{ color: "#cdddf7", flex: "none", marginBottom: 24 }}
              >
                체력 수준과 목표에 맞는 상품을 추천해드립니다.
              </p>
              <Link
                className="buy"
                href="/#sns"
                style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
              >
                상담 신청 →
              </Link>
            </div>
          </div>

          {/* 추후 */}
          <div className="cat-label">추후 출시 예정</div>
          <div className="grid-prod">
            <div className="prod" style={{ opacity: 0.6 }}>
              <div className="icon">🧢</div>
              <h3>실물 굿즈</h3>
              <div className="price">준비 중</div>
              <p className="desc">
                운동 용품·의류 등 백관장의 체력 상담소 굿즈가 준비되고 있습니다.
              </p>
              <div className="via">결제: 미정</div>
              <span className="buy" style={{ color: "#525252" }}>
                출시 예정
              </span>
            </div>
          </div>
        </div>
      </section>

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
