import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "백관장 이야기 — 백관장의 체력 상담소",
  description:
    "무거운 걸 드는 힘과 하루를 버티는 체력은 다릅니다. 현대중공업 직장인에서 직장인 체력 전문가가 되기까지.",
  alternates: { canonical: "/about" },
};

const SNS = {
  youtube: "https://www.youtube.com/@easystrength101",
  instagram: "https://www.instagram.com/easystrength101/",
  threads: "https://www.threads.com/@easystrength101",
  tiktok: "https://www.tiktok.com/@easystrength101",
  blog: "https://blog.naver.com/qortmdejr123",
};

export default function About() {
  return (
    <>
      <Header active="about" />

      <div className="sg">
        {/* HERO */}
        <section className="sg-hero">
          <div className="sg-hero-l">
            <div className="sg-eyebrow mono">▍ABOUT · 백관장 이야기</div>
            <h1 className="sg-h1 sm">
              무거운 걸 드는 힘과,
              <br />
              버티는 체력은
              <br />
              <span className="b">다릅니다.</span>
            </h1>
            <p className="sg-lead">
              바벨은 누구보다 무겁게 들었는데, 계단 5층만 올라도 숨이 찼습니다.
              직장인의 몸을 파고든 이유입니다.
            </p>
          </div>
          <div className="sg-hero-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="백관장 백승덕" />
            <div className="sg-cap mono">BAEK SEUNG-DEOK · 백관장</div>
          </div>
        </section>

        {/* STORY 01 */}
        <section className="sg-split-lt">
          <div>
            <div className="lab mono">▍01 — 현대중공업에서</div>
            <h2>저도 야근하던 직장인이었습니다.</h2>
          </div>
          <div className="body">
            <p>
              바벨은 누구보다 무겁게 들었습니다. 그런데 계단 5층만 올라도 숨이
              찼어요. 그때 알았습니다. 무거운 걸 드는 힘과, 하루를 버티는 체력은
              전혀 다른 겁니다.
            </p>
            <p>
              책상 앞에서 무너지는 체력, 퇴근하면 운동할 기운조차 없는 하루.
              저도 똑같이 그 자리에 있었습니다.
            </p>
          </div>
        </section>

        {/* STORY 02 */}
        <section className="sg-story2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hyundai-id.jpg" alt="현대중공업 사원증" />
          <div className="tx">
            <div className="lab mono">▍02 — 직장인 체력을 파고들다</div>
            <h2>헬스장에 몇 시간씩 매달리지 않아도 강해지는 원리</h2>
            <p>
              그래서 &lsquo;직장인&rsquo;을 위한 체력 훈련을 파고들었습니다.
              바쁜 일상 속에서도, 짧은 시간에, 일상이 가벼워지는 방향으로요.
            </p>
            <p>
              8년간 직장인 수백 명을 코칭하며 확인했습니다. 체력은 의지가 아니라
              순서와 원리의 문제라는 걸.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="sg-philo">
          <div className="sg-philo-in">
            <div className="lab mono">▍PHILOSOPHY</div>
            <h2>
              운동량이 아니라, <span className="b">원리입니다.</span>
            </h2>
            <p>
              스트렝스 트레이닝의 대중화를 이루기 위해 노력합니다. 누구나, 바쁜
              일상 속에서도 강해질 수 있도록.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="sg-bigstats">
          <div>
            <div className="n">6.2만</div>
            <div className="l">유튜브 구독자</div>
          </div>
          <div>
            <div className="n">534+</div>
            <div className="l">유튜브 영상</div>
          </div>
          <div>
            <div className="n">8년</div>
            <div className="l">직장인 코칭</div>
          </div>
          <div>
            <div className="n">
              540<small>kg</small>
            </div>
            <div className="l">3대 합계 기록</div>
          </div>
        </section>

        {/* SIGNATURE QUOTE */}
        <section className="sg-quote">
          <blockquote>
            <p>
              &ldquo;책상 앞에서 무너지지 않는 몸. 그게 직장인에게 진짜 필요한
              힘입니다.&rdquo;
            </p>
            <div className="by">— 백관장 (백승덕)</div>
          </blockquote>
        </section>

        {/* FOOTER CTA */}
        <section className="sg-footcta">
          <div>
            <h2>
              직장인에게, <span className="b">힘을!</span>
            </h2>
            <p className="desc">지금 내 체력부터 점검해볼까요?</p>
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
