import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns } from "@/lib/notion";
import Reviews from "@/components/Reviews";
import { getFeaturedReviews } from "@/lib/reviews";

export const revalidate = 60; // ISR

export default async function Home() {
  const cols = await getColumns();
  const homeCols = cols.slice(0, 3);
  const reviews = getFeaturedReviews();
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
              야근에 지친 당신도 체력을 만들 수 있습니다.
              <br />
              운동량이 아니라 <b>원리</b>입니다. 그 길을 백관장이 안내합니다.
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
                <div className="lab">유튜브 영상</div>
              </div>
              <div className="stat">
                <div className="num">{cols.length}편</div>
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
          <img className="id-photo" src="/hyundai-id.jpg" alt="현대중공업 사원증" />
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
              책상 앞에서 무너지는 체력, 퇴근하면 운동할 기운조차 없는 하루.
              누구보다 잘 압니다. 저도 그 자리에 있었으니까요.
            </p>
            <p>
              그래서 &apos;직장인&apos;을 위한 체력 훈련을 파고들었습니다. 헬스장에서
              몇 시간씩 보낼 필요 없이, 바쁜 일상 속에서도 강해지는 원리를요. 그게
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
              <p>직장인에게 실제로 통한 체력 원리. 매주 새로 올라옵니다.</p>
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

      {/* REVIEWS */}
      <Reviews
        reviews={reviews}
        title="이미 수백 명이 강해졌습니다"
        subtitle="네이버 지도와 스마트스토어에 올라온 실제 수강생 후기입니다."
      />

      {/* PRODUCTS */}
      <section className="block" id="products">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">PRODUCTS</span>
              <h2>백관장의 상품</h2>
              <p>읽고 끝내지 마세요. 직접 강해지세요.</p>
            </div>
            <Link className="more" href="/products">
              상품 전체보기 →
            </Link>
          </div>
          <div className="grid-prod">
            <Link className="prod" href="/products/ebook">
              <div className="icon">📘</div>
              <h3>전자책 《케틀벨 체력 솔루션》</h3>
              <p className="desc">
                직장인을 위한 케틀벨 체력 솔루션. 9,900원으로 시작하는 첫걸음.
              </p>
              <div className="via">
                결제: <b>리틀리</b>
              </div>
              <div className="buy">구매하기 →</div>
            </Link>
            <Link className="prod" href="/products/oneday">
              <div className="icon">📅</div>
              <h3>케틀벨 원데이 클래스</h3>
              <p className="desc">
                케틀벨 기본기와 방향을 하루 3시간 만에. 초보 환영 소규모 수업.
              </p>
              <div className="via">
                신청: <b>온라인 신청</b>
              </div>
              <div className="buy">예약 일정 보기 →</div>
            </Link>
            <Link className="prod" href="/products/school">
              <div className="icon">🎓</div>
              <h3>근력학교 정규수업</h3>
              <p className="desc">
                직장인 체력 향상 3단계 프로세스. 주 2회 3시간 정규 과정.
              </p>
              <div className="via">
                신청: <b>온라인 신청</b>
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
            <a
              href="https://www.youtube.com/@easystrength101"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/easystrength101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/@easystrength101"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads
            </a>
            <a
              href="https://www.tiktok.com/@easystrength101"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
            <a
              href="https://blog.naver.com/qortmdejr123"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
