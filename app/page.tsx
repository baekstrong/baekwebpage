import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns } from "@/lib/notion";
import Reviews from "@/components/Reviews";
import { getFeaturedReviews } from "@/lib/reviews";

export const revalidate = 60; // ISR

export const metadata = { alternates: { canonical: "/" } };

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
              퇴근하면 소파에 쓰러지는 하루.
              <br />
              의지가 약해서가 아닙니다. 바쁜 직장인에게 <b>맞는 방법</b>을 몰랐을 뿐이에요.
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

      {/* PAIN — 문제 공감 (about에서 끌어온 검증된 카피) */}
      <section className="block">
        <div className="wrap ab-narrow">
          <span className="eyebrow">혹시, 당신의 하루</span>
          <h2 className="ab-h2">혹시 이런 하루를 보내고 계신가요?</h2>
          <ul className="ab-pain">
            <li>알람을 다섯 개 맞춰놔도 아침이면 몸이 천근만근이다.</li>
            <li>점심 먹고 나면 오후 3시쯤 기절할 것 같은 식곤증이 몰려온다.</li>
            <li>퇴근하면 소파에 누워 스마트폰만 보다가 잠든다.</li>
            <li>주말 내내 쉬어도 월요일 아침엔 여전히 피곤하다.</li>
          </ul>
          <p>
            &ldquo;다들 이렇게 살지&rdquo; 싶겠지만, 정상이 아닙니다. 나이도
            의지도 체질도 아니에요. 하루 8시간 앉아 일하는 몸이라면 당연한
            결과입니다. <b>그리고 바꿀 수 있습니다.</b>
          </p>
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
              바벨은 누구보다 무겁게 들었는데, 계단 5층만 올라도 숨이 찼습니다.
              그때 알았어요. 무거운 걸 드는 힘과, 일상을 버티는 체력은 전혀 다른
              겁니다.
            </p>
            <p>
              책상 앞에서 무너지는 체력, 퇴근하면 운동할 기운조차 없는 하루. 저도
              그 자리에 있었습니다. 그래서 &apos;직장인&apos;을 위한 체력 훈련을
              파고들었어요. 헬스장에서 몇 시간씩 보낼 필요 없이, 바쁜 일상 속에서도
              강해지는 원리를요.
            </p>
            <p>그게 백관장의 체력 상담소입니다.</p>
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
              <p>막막할 때 가장 먼저 읽을 글. 직장인에게 실제로 통한 체력 원리만 모았습니다.</p>
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
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginBottom: 36 }}
          >
            <Link
              className="btn"
              href="/quiz"
              style={{ background: "#fff", color: "#004AAD", borderColor: "#fff" }}
            >
              1분 체력 자가진단 →
            </Link>
            <Link
              className="btn"
              href="/products"
              style={{
                background: "transparent",
                color: "#fff",
                borderColor: "rgba(255,255,255,.5)",
              }}
            >
              상품 둘러보기
            </Link>
          </div>
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
