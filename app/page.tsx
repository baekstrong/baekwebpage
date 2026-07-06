import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getColumns } from "@/lib/notion";
import { getFeaturedReviews } from "@/lib/reviews";

export const revalidate = 60; // ISR
export const metadata = { alternates: { canonical: "/" } };

const SNS = {
  youtube: "https://www.youtube.com/@easystrength101",
  instagram: "https://www.instagram.com/easystrength101/",
  threads: "https://www.threads.com/@easystrength101",
  tiktok: "https://www.tiktok.com/@easystrength101",
  blog: "https://blog.naver.com/qortmdejr123",
};

// 다크 상품 리스트 — 실제 상품 상세 라우트로 연결
const PRODUCTS = [
  {
    i: "01",
    t: "전자책 《케틀벨 체력 솔루션》",
    d: "직장인을 위한 케틀벨 체력 솔루션. 9,900원으로 시작하는 첫걸음.",
    cta: "구매하기 →",
    href: "/products/ebook",
  },
  {
    i: "02",
    t: "케틀벨 원데이 클래스",
    d: "케틀벨 기본기와 방향을 하루 3시간 만에. 초보 환영 소규모 수업.",
    cta: "예약 일정 보기 →",
    href: "/products/oneday",
  },
  {
    i: "03",
    t: "근력학교 정규수업",
    d: "직장인 체력 향상 3단계 프로세스. 주 2회 3시간 정규 과정.",
    cta: "신청하기 →",
    href: "/products/school",
  },
];

const PAIN = [
  "알람을 다섯 개 맞춰놔도 아침이면 몸이 천근만근이다.",
  "점심 먹고 나면 오후 3시쯤 기절할 것 같은 식곤증이 몰려온다.",
  "퇴근하면 소파에 누워 스마트폰만 보다가 잠든다.",
  "주말 내내 쉬어도 월요일 아침엔 여전히 피곤하다.",
];

export default async function Home() {
  const cols = await getColumns();
  const homeCols = cols.slice(0, 3);
  const reviews = getFeaturedReviews().slice(0, 3);
  const n = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      <Header />

      <div className="sg">
        {/* HERO */}
        <section className="sg-hero">
          <div className="sg-hero-l">
            <div className="sg-eyebrow mono">직장인 체력 전문 · 유튜브 6.2만 구독</div>
            <h1 className="sg-h1">
              직장인에게,
              <br />
              <span className="b">힘을!</span>
            </h1>
            <p className="sg-lead">
              퇴근하면 소파에 쓰러지는 건 의지가 아니라 체력 문제입니다. 그리고
              체력은 바쁜 직장인에게 <b>맞는 방법</b>만 알면 다시 만들 수
              있어요.
            </p>
            <div className="sg-btns">
              <Link className="sg-btn sg-btn-primary" href="/quiz">
                1분 체력 자가진단 →
              </Link>
              <Link className="sg-btn sg-btn-ghost" href="/columns">
                체력향상 칼럼 보기
              </Link>
            </div>
          </div>
          <div className="sg-hero-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="백관장 백승덕" />
            <div className="sg-cap mono">BAEK SEUNG-DEOK · 백관장</div>
          </div>
        </section>

        {/* STAT STRIP */}
        <section className="sg-stats">
          <div className="sg-stat">
            <span className="i mono" aria-hidden="true">01</span>
            <span className="n">6.2만</span>
            <span className="l">유튜브 구독자</span>
          </div>
          <div className="sg-stat">
            <span className="i mono" aria-hidden="true">02</span>
            <span className="n">534+</span>
            <span className="l">유튜브 영상</span>
          </div>
          <div className="sg-stat">
            <span className="i mono" aria-hidden="true">03</span>
            <span className="n">{cols.length}편</span>
            <span className="l">체력 칼럼</span>
          </div>
        </section>

        {/* PAIN */}
        <section className="sg-pain">
          <div>
            <div className="sg-label mono">▍당신의 하루</div>
            <h2 className="sg-h2">혹시 이런 하루를 보내고 계신가요?</h2>
          </div>
          <div>
            {PAIN.map((line, i) => (
              <div className="sg-painrow" key={i}>
                <span className="num mono" aria-hidden="true">{n(i)}</span>
                <span>{line}</span>
              </div>
            ))}
            <p className="sg-painend">
              &ldquo;다들 이렇게 살지&rdquo; 싶겠지만, 하루 8시간 앉아 일하는
              몸이라면 당연한 결과입니다. 당신 탓이 아니에요.{" "}
              <span className="b">그리고 바꿀 수 있습니다.</span>
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="sg-story">
          <div className="sg-story-l">
            <div className="sg-label mono">▍왜 &lsquo;직장인&rsquo; 체력인가</div>
            <h2>저도 야근하던 현대중공업 직장인이었습니다.</h2>
            <p>
              바벨은 누구보다 무겁게 들었는데, 계단 5층만 올라도 숨이 찼습니다.
              그때 알았어요. 무거운 걸 드는 힘과, 일상을 버티는 체력은 전혀 다른
              겁니다.
            </p>
            <p>
              헬스장에서 몇 시간씩 보낼 필요 없이, 바쁜 일상 속에서도 강해지는
              원리. 그게 백관장의 체력 상담소입니다.
            </p>
            <div className="sg-sign">
              — 백관장 (백승덕) · 근력학교 이사
              <Link href="/about">이야기 전체 보기 →</Link>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hyundai-id.jpg" alt="현대중공업 사원증" />
        </section>

        {/* AUTHORITY — 저자·신뢰 스트립 */}
        <Link className="sg-author" href="/products/book-survival">
          <span
            className="sg-author-cover"
            role="img"
            aria-label="《최소한의 생존 체력 운동》 표지"
            style={{ backgroundImage: "url(/book-cover.jpg)" }}
          />
          <span className="sg-author-txt">
            <span className="lab mono">▍저서 · 백관장은</span>
            <span className="sg-author-title">
              《최소한의 생존 체력 운동》 <span>— 교보문고 건강 분야 1위</span>
            </span>
            <span className="sg-author-cred mono">
              직장인 체력 전문 코치 · 근력학교 이사 · 유튜브 6.2만 구독
            </span>
            <span className="read">저서 보러가기 →</span>
          </span>
        </Link>

        {/* COLUMNS */}
        <section className="sg-sect" id="columns">
          <div className="sg-shead">
            <div>
              <div className="sg-label mono">▍CONTENT</div>
              <h2>체력향상 칼럼</h2>
              <p>
                막막할 때 가장 먼저 읽을 글. 직장인에게 실제로 통한 체력 원리만
                모았습니다.
              </p>
            </div>
            <Link className="sg-more mono" href="/columns">
              칼럼 전체보기 →
            </Link>
          </div>
          {homeCols.length === 0 ? (
            <p style={{ color: "var(--sg-body)" }}>칼럼을 준비 중입니다.</p>
          ) : (
            <div className="sg-3">
              {homeCols.map((c, i) => (
                <Link className="sg-col" key={c.id} href={`/columns/${c.slug}`}>
                  <span className="i mono" aria-hidden="true">{n(i)}</span>
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <span className="read">읽어보기 →</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* REVIEWS */}
        <section className="sg-sect" style={{ paddingTop: 0 }}>
          <div className="sg-shead">
            <div>
              <div className="sg-label mono">▍REVIEWS</div>
              <h2>이미 수백 명이 강해졌습니다</h2>
            </div>
            <span className="sg-more mono" style={{ color: "var(--sg-muted)" }}>
              네이버지도 · 스마트스토어 실제 후기
            </span>
          </div>
          <div className="sg-3">
            {reviews.map((r, i) => (
              <div className="sg-rev" key={i}>
                <div className="stars">★★★★★</div>
                <p>{r.quote}</p>
                <div className="src mono">
                  {r.author} · {r.meta}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS (dark) */}
        <section className="sg-prod" id="products">
          <div className="sg-prod-in">
            <div className="sg-label mono" style={{ color: "var(--sg-bright)" }}>
              ▍PRODUCTS
            </div>
            <h2>
              백관장의 상품{" "}
              <span className="sub">— 읽고 끝내지 마세요. 직접 강해지세요.</span>
            </h2>
            <div className="sg-plist">
              {PRODUCTS.map((p) => (
                <Link className="sg-prow" key={p.href} href={p.href}>
                  <span className="i mono" aria-hidden="true">{p.i}</span>
                  <div>
                    <div className="t">{p.t}</div>
                    <div className="d">{p.d}</div>
                  </div>
                  <div className="cta">{p.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="sg-footcta">
          <div>
            <h2>
              직장인에게, <span className="b">힘을!</span>
            </h2>
            <p className="desc">유튜브 · 스레드 · 인스타 · 틱톡에서 매일 만나요.</p>
            <div className="btns">
              <Link className="sg-btn sg-btn-primary" href="/quiz">
                1분 체력 자가진단 →
              </Link>
              <Link className="sg-btn sg-btn-ghost" href="/products">
                상품 둘러보기
              </Link>
            </div>
          </div>
          <div className="sg-social">
            <a href={SNS.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href={SNS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span>
              <a href={SNS.threads} target="_blank" rel="noopener noreferrer">
                Threads
              </a>{" "}
              ·{" "}
              <a href={SNS.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </span>
            <a href={SNS.blog} target="_blank" rel="noopener noreferrer">
              블로그
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
