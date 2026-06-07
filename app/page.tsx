import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns } from "@/lib/notion";

export const revalidate = 60; // ISR

export default async function Home() {
  const homeCols = (await getColumns()).slice(0, 3);
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">직장인 체력 상담소 · 6.2만 구독</span>
            <h1>
              직장인에게,
              <br />
              <span className="accent">힘을!</span>
            </h1>
            <p className="lead">
              야근에 지친 당신도 체력은 만들 수 있습니다.
              <br />
              운동량이 아니라 <b>원리</b>입니다. 백관장이 그 길을 안내합니다.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/quiz">
                1분 체력 자가진단 →
              </Link>
              <Link className="btn btn-ghost" href="/columns">
                체력향상 칼럼 보기
              </Link>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="num">6.2만</div>
                <div className="lab">유튜브 구독자</div>
              </div>
              <div className="stat">
                <div className="num">534+</div>
                <div className="lab">콘텐츠</div>
              </div>
              <div className="stat">
                <div className="num">78편</div>
                <div className="lab">체력 칼럼</div>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="block" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="백관장 백승덕" />
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="origin" id="origin">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="id-photo" src="/hyundai-id.png" alt="현대중공업 사원증" />
          <div>
            <span className="eyebrow" style={{ color: "#6ea8ff" }}>
              왜 &apos;직장인&apos; 체력인가
            </span>
            <h2>
              저도 야근하던
              <br />
              <span className="hl">현대중공업 직장인</span>이었습니다.
            </h2>
            <p>
              책상 앞에서 무너지는 체력, 퇴근 후 운동할 기운조차 없는 하루.
              누구보다 잘 압니다. 제가 그 자리에 있었으니까요.
            </p>
            <p>
              그래서 &apos;직장인&apos;을 위한 체력 훈련을 연구했습니다. 헬스장에서
              몇 시간씩 보낼 필요 없이, 바쁜 일상 속에서도 강해지는 원리를. 그게
              백관장의 체력 상담소입니다.
            </p>
            <div className="sign">— 백관장 (백승덕)</div>
            <Link
              className="more"
              href="/about"
              style={{ color: "#6ea8ff", display: "inline-block", marginTop: 24 }}
            >
              백관장 이야기 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* COLUMNS */}
      <section className="block" id="columns">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">CONTENT</span>
              <h2>체력향상 칼럼</h2>
              <p>실제 효과가 검증된 직장인 체력 원리. 매주 업데이트됩니다.</p>
            </div>
            <Link className="more" href="/columns">
              칼럼 전체보기 →
            </Link>
          </div>
          <div className="grid3">
            {homeCols.length === 0 && (
              <p style={{ padding: 24, color: "var(--gray70)" }}>
                칼럼을 준비 중입니다.
              </p>
            )}
            {homeCols.map((c) => (
              <Link className="col-card" key={c.id} href={`/columns/${c.slug}`}>
                <div className="ccover">{c.title}</div>
                <p className="excerpt">{c.summary}</p>
                <div className="read">읽어보기 →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="block prod-bg" id="products">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">PRODUCTS</span>
              <h2>백관장의 상품</h2>
              <p>읽고 끝나지 마세요. 직접 강해지세요.</p>
            </div>
            <Link className="more" href="/products">
              상품 전체보기 →
            </Link>
          </div>
          <div className="grid-prod">
            <Link className="prod" href="/products">
              <div className="icon">📘</div>
              <h3>전자책</h3>
              <p className="desc">
                직장인 체력의 핵심 원리를 한 권에. 가장 빠르게 시작하는 방법.
              </p>
              <div className="via">
                결제: <b>리틀리</b>
              </div>
              <div className="buy">구매하기 →</div>
            </Link>
            <Link className="prod" href="/products">
              <div className="icon">🎬</div>
              <h3>온라인 강의</h3>
              <p className="desc">
                10편 이하 핵심만. 출퇴근길에 보고 바로 적용하는 압축 강의.
              </p>
              <div className="via">결제: 준비 중</div>
              <div className="buy">자세히 →</div>
            </Link>
            <Link className="prod" href="/products">
              <div className="icon">🎓</div>
              <h3>근력학교 정규수업</h3>
              <p className="desc">
                체계적으로 강해지는 정규 과정. 직장인을 위한 커리큘럼.
              </p>
              <div className="via">
                결제: <b>스마트스토어</b>
              </div>
              <div className="buy">신청하기 →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / SNS */}
      <section className="cta-band" id="sns">
        <div className="wrap">
          <h2>직장인에게, 힘을!</h2>
          <p>유튜브 · 스레드 · 인스타 · 틱톡에서 매일 만나요.</p>
          <div className="sns">
            <a href="#">YouTube</a>
            <a href="#">Threads</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
