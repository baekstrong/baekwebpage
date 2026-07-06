"use client";

// 1분 체력 자가진단 — 7문항 yes/no → 등급(양호/주의/위험) → 추천 CTA
// 시안: design_handoff_homepage/자가진단.dc.html (QUESTIONS / tierFor 그대로)
import Link from "next/link";
import { useState } from "react";

const QUESTIONS = [
  "알람을 여러 개 맞춰놔도 아침에 일어나기가 너무 힘들다.",
  "점심 먹고 나면 오후 3시쯤 기절할 것 같은 식곤증이 몰려온다.",
  "퇴근하면 운동은커녕 소파에 쓰러져 스마트폰만 보다 잠든다.",
  "주말 내내 쉬어도 월요일 아침엔 여전히 피곤하다.",
  "계단 몇 층만 올라가도 숨이 차고 다리가 무겁다.",
  "운동을 시작해도 보통 3일을 넘기지 못하고 그만둔다.",
  "하루에 앉아서 일하는 시간이 8시간 이상이다.",
];

type Tier = {
  tier: string;
  cls: "ok" | "warn" | "danger";
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
};

function tierFor(yes: number): Tier {
  if (yes <= 2)
    return {
      tier: "양호",
      cls: "ok",
      title: "아직은 버틸 만합니다",
      desc: "기본 체력은 남아 있어요. 다만 직장인의 몸은 가만두면 천천히 무너집니다. 지금 습관을 유지·강화하는 게 핵심이에요. 칼럼으로 원리를 잡아두면 흔들리지 않습니다.",
      ctaText: "체력향상 칼럼 보기 →",
      ctaHref: "/columns",
    };
  if (yes <= 4)
    return {
      tier: "주의",
      cls: "warn",
      title: "직장인 체력 저하가 시작됐습니다",
      desc: "몸이 보내는 신호가 쌓이고 있어요. 의지 문제가 아니라 방법을 몰랐을 뿐입니다. 9,900원 전자책으로 가장 빠르고 저렴하게 첫걸음을 떼보세요.",
      ctaText: "전자책으로 시작하기 →",
      ctaHref: "/products/ebook",
    };
  return {
    tier: "위험",
    cls: "danger",
    title: "지금 방향을 제대로 잡아야 합니다",
    desc: "혼자서는 헛고생하기 쉬운 단계예요. 원데이 클래스로 기본기와 방향을 잡거나, 근력학교 정규수업으로 일상 체력을 되살리는 걸 권합니다.",
    ctaText: "수업 보러가기 →",
    ctaHref: "/products",
  };
}

export default function Quiz() {
  const [idx, setIdx] = useState(-1);
  const [yes, setYes] = useState(0);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState<"idle" | "loading" | "done" | "error">("idle");

  const total = QUESTIONS.length;
  const isIntro = idx < 0 && !done;
  const isQuestion = idx >= 0 && !done;
  const isResult = done;

  const start = () => {
    setIdx(0);
    setYes(0);
    setDone(false);
  };
  const answer = (v: boolean) => {
    setYes((y) => y + (v ? 1 : 0));
    if (idx + 1 >= total) setDone(true);
    else setIdx(idx + 1);
  };
  const back = () => setIdx((i) => (i > 0 ? i - 1 : -1));
  const restart = () => {
    setIdx(-1);
    setYes(0);
    setDone(false);
  };

  // 진단 결과 이메일 수집 — /api/subscribe(스티비 더블옵트인) 재사용, 등급을 체력유형으로 저장
  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (sub === "loading") return;
    setSub("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fitnessType: tierFor(yes).tier }),
      });
      const data = await res.json().catch(() => ({}));
      setSub(res.ok && data.ok ? "done" : "error");
    } catch {
      setSub("error");
    }
  }

  const answeredForBar = isResult ? total : Math.max(0, idx);
  const pct = Math.round((answeredForBar / total) * 100);
  const t = tierFor(yes);

  return (
    <section className="sg-quizwrap">
      <div className="sg-quizcard">
        {(isQuestion || isResult) && (
          <div className="sg-qbar">
            <div className="sg-qbar-fill" style={{ width: `${pct}%` }} />
          </div>
        )}

        {isIntro && (
          <div className="sg-qpane intro">
            <div className="mono sg-qmeta">7 QUESTIONS · 약 1분</div>
            <h2>
              혹시 나도
              <br />
              직장인 체력 저하일까?
            </h2>
            <p>
              의지나 나이 탓이라고 넘기지 마세요. 몸이 보내는 신호를 점검하고,
              가장 빠른 다음 한 걸음을 받아보세요.
            </p>
            <div className="sg-qcenter">
              <button className="sg-qstart" onClick={start}>
                진단 시작하기 →
              </button>
            </div>
          </div>
        )}

        {isQuestion && (
          <div className="sg-qpane">
            <div className="mono sg-qnum">
              질문 {idx + 1} / {total}
            </div>
            <h2 className="sg-qtext">{QUESTIONS[idx]}</h2>
            <div className="sg-qbtns">
              <button className="sg-qyes" onClick={() => answer(true)}>
                네, 그래요
              </button>
              <button className="sg-qno" onClick={() => answer(false)}>
                아니요
              </button>
            </div>
            <div className="sg-qback">
              <button onClick={back}>← 이전 질문</button>
            </div>
          </div>
        )}

        {isResult && (
          <div className="sg-qpane">
            <div className="mono sg-qmeta blue">
              진단 결과 · 해당 {yes} / {total}
            </div>
            <div>
              <span className={`sg-qtier ${t.cls}`}>{t.tier}</span>
            </div>
            <h2 className="sg-qrtitle">{t.title}</h2>
            <p className="sg-qrdesc">{t.desc}</p>
            <div className="sg-qractions">
              <Link className="sg-btn sg-btn-primary" href={t.ctaHref}>
                {t.ctaText}
              </Link>
              <button className="sg-qrestart" onClick={restart}>
                다시 진단하기
              </button>
            </div>

            <div className="sg-qsub">
              {sub === "done" ? (
                <p className="sg-qsub-done">
                  확인 메일을 보냈습니다. 메일함에서 &lsquo;구독 확인&rsquo;을
                  눌러주시면 완료됩니다.
                </p>
              ) : (
                <>
                  <p className="sg-qsub-lead">
                    지금 이 결과에서 시작하는 <b>체력 레터</b>를 이메일로
                    보내드릴게요.
                  </p>
                  <form className="quiz-email" onSubmit={subscribe}>
                    <input
                      type="email"
                      required
                      placeholder="이메일 주소"
                      aria-label="이메일 주소"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={sub === "loading"}
                    >
                      {sub === "loading" ? "신청 중…" : "체력 레터 받기"}
                    </button>
                  </form>
                  {sub === "error" && (
                    <p className="sg-qsub-err">
                      구독 신청에 실패했습니다. 잠시 후 다시 시도해주세요.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <p className="mono sg-qdisc">
        * 의학적 진단이 아닌, 생활 습관 기반 자가 점검입니다.
      </p>
    </section>
  );
}
