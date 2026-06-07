"use client";

import { useState } from "react";
import Link from "next/link";

// ── 체력 문항 (각 점수) ──
const FITNESS: { q: string; opts: [string, number][] }[] = [
  { q: "계단으로 3~4층 오르면?", opts: [["거뜬하다", 3], ["숨이 찬다", 1], ["엘리베이터를 탄다", 0]] },
  { q: "아침에 일어날 때 몸은?", opts: [["개운하다", 3], ["보통이다", 1], ["천근만근이다", 0]] },
  { q: "일주일 운동 빈도는?", opts: [["주 3회 이상", 3], ["주 1~2회", 1], ["거의 안 한다", 0]] },
  { q: "팔굽혀펴기 연속 몇 개?", opts: [["15개 이상", 3], ["5~14개", 1], ["5개 미만", 0]] },
  { q: "퇴근 후 에너지는?", opts: [["남아 있다", 3], ["그저 그렇다", 1], ["방전된다", 0]] },
  { q: "하루 평균 수면은?", opts: [["7시간 이상", 3], ["5~7시간", 1], ["5시간 미만", 0]] },
  { q: "최근 1년, 체력 때문에 포기한 일?", opts: [["없다", 3], ["가끔 있다", 1], ["자주 있다", 0]] },
  { q: "운동을 시작하면 지속되나?", opts: [["꾸준히 한다", 3], ["3일쯤 간다", 1], ["시작도 못 한다", 0]] },
];

// ── 통증 문항 ──
const PAIN_AREAS = ["허리", "목·어깨", "무릎", "손목·팔꿈치", "없음"];
const PAIN_FREQ = ["거의 매일", "가끔", "운동할 때만", "없음"];
const PAIN_GIVEUP = ["자주 있다", "가끔 있다", "없다"];

type FitnessType = {
  name: string;
  stage: string;
  desc: string;
  productId: string;
  productName: string;
};

function getType(score: number): FitnessType {
  if (score <= 6)
    return {
      name: "방전된 직장인형",
      stage: "1단계 · 습관화",
      desc: "지금은 체력 배터리가 거의 바닥난 상태예요. 운동량을 늘리기보다, 일단 '움직이는 사람'이 되는 게 먼저입니다. 아주 작게 시작해서 끊기지 않게 만드는 게 핵심이에요.",
      productId: "ebook",
      productName: "전자책",
    };
  if (score <= 13)
    return {
      name: "책상 고정형",
      stage: "3단계 · 기초 연습",
      desc: "기본 체력은 있지만 오래 앉아 몸이 굳어 있는 상태입니다. 제대로 된 기초 동작부터 익히면 생각보다 빠르게 바뀌어요. 자세와 원리를 잡는 단계입니다.",
      productId: "ebook",
      productName: "전자책",
    };
  if (score <= 19)
    return {
      name: "작심삼일 성장형",
      stage: "4단계 · 체력 성장",
      desc: "체력 토대는 충분합니다. 이제 꾸준히 강도를 올려 '성장'할 차례예요. 루틴을 체계화하면 확실히 한 단계 위로 올라갑니다.",
      productId: "program",
      productName: "운동 프로그램",
    };
  return {
    name: "강철 직장인형",
    stage: "5단계 · 체력 끝판왕",
    desc: "이미 상위권 체력입니다. 여기서부터는 고도화와 완성의 영역이에요. 체계적인 정규 과정으로 끝까지 끌어올릴 때입니다.",
    productId: "school",
    productName: "근력학교 정규수업",
  };
}

export default function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(FITNESS.length).fill(null)
  );
  const [painAreas, setPainAreas] = useState<string[]>([]);
  const [painFreq, setPainFreq] = useState<string | null>(null);
  const [painGiveup, setPainGiveup] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [emailDone, setEmailDone] = useState(false);
  const [sending, setSending] = useState(false);

  const allAnswered =
    answers.every((a) => a !== null) &&
    painAreas.length > 0 &&
    painFreq !== null &&
    painGiveup !== null;

  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const hasPain =
    (painAreas.length > 0 && !(painAreas.length === 1 && painAreas[0] === "없음")) ||
    (painFreq !== null && painFreq !== "없음");
  const type = getType(score);

  async function handleEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    const email = input?.value ?? "";
    setSending(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fitnessType: hasPain ? null : type.name,
          hasPain,
        }),
      });
    } catch {
      // 네트워크 실패해도 사용자 경험은 완료로 (수집 실패는 서버 로그로 추적)
    }
    setSending(false);
    setEmailDone(true);
  }

  function toggleArea(area: string) {
    setPainAreas((prev) => {
      if (area === "없음") return prev.includes("없음") ? [] : ["없음"];
      const next = prev.filter((a) => a !== "없음");
      return next.includes(area)
        ? next.filter((a) => a !== area)
        : [...next, area];
    });
  }

  // ── 결과 화면 ──
  if (submitted) {
    return (
      <section className="block">
        <div className="wrap quiz-wrap">
          {hasPain ? (
            <div className="quiz-result">
              <span className="eyebrow" style={{ color: "var(--red)" }}>
                먼저 통증부터
              </span>
              <h2>운동보다 통증을 먼저 잡아야 합니다</h2>
              <p className="qr-lead">
                통증이 있는 상태에서 무리하게 운동하면 오히려 더 망가집니다.
                지금은 강도를 올리는 것보다, 아픈 곳을 안전하게 다루는 게
                우선이에요.
              </p>
              <p>
                백관장의 <b>통증 케어 콘텐츠</b>를 준비하고 있습니다. 출시되면
                가장 먼저 알려드릴게요.
              </p>

              {!emailDone ? (
                <form className="quiz-email" onSubmit={handleEmail}>
                  <input type="email" name="email" required placeholder="이메일 주소" />
                  <button type="submit" className="btn btn-primary" disabled={sending}>
                    {sending ? "신청 중…" : "출시 알림 받기 →"}
                  </button>
                </form>
              ) : (
                <p className="quiz-thanks">
                  신청 완료! 통증 케어 콘텐츠가 준비되면 가장 먼저 보내드릴게요.
                </p>
              )}

              <p className="quiz-disc">
                ※ 본 진단은 의료 행위가 아니며 진단·치료를 대신하지 않습니다.
                통증이 심하거나 지속되면 반드시 병원·전문가와 상담하세요.
              </p>

              <button className="quiz-retry" onClick={() => location.reload()}>
                다시 진단하기
              </button>
            </div>
          ) : (
            <div className="quiz-result">
              <span className="eyebrow">진단 결과</span>
              <div className="qr-score">{score} / 24점</div>
              <h2>
                당신은 <span className="hl-navy">{type.name}</span>
              </h2>
              <div className="qr-stage">{type.stage}</div>
              <p className="qr-lead">{type.desc}</p>

              <div className="qr-rec">
                <div className="qr-rec-label">추천 다음 단계</div>
                <Link className="btn btn-primary" href={`/products/${type.productId}`}>
                  {type.productName} 보러 가기 →
                </Link>
              </div>

              {!emailDone ? (
                <form className="quiz-email" onSubmit={handleEmail}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="이메일 주소"
                  />
                  <button type="submit" className="btn btn-primary" disabled={sending}>
                    {sending ? "신청 중…" : "전체 리포트 + 맞춤 루틴 받기 →"}
                  </button>
                </form>
              ) : (
                <p className="quiz-thanks">
                  신청 완료! 유형에 맞는 전체 리포트와 루틴을 보내드릴게요.
                </p>
              )}

              <button className="quiz-retry" onClick={() => location.reload()}>
                다시 진단하기
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ── 문항 화면 ──
  return (
    <section className="block">
      <div className="wrap quiz-wrap">
        <div className="cat-label">1부 · 체력 진단 (8문항)</div>
        {FITNESS.map((item, qi) => (
          <div className="quiz-q" key={qi}>
            <div className="quiz-q-title">
              {qi + 1}. {item.q}
            </div>
            <div className="quiz-opts">
              {item.opts.map(([label, sc], oi) => (
                <button
                  key={oi}
                  className={`quiz-opt ${answers[qi] === sc ? "sel" : ""}`}
                  onClick={() =>
                    setAnswers((prev) => {
                      const next = [...prev];
                      next[qi] = sc;
                      return next;
                    })
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="cat-label">2부 · 통증 체크 (3문항)</div>

        <div className="quiz-q">
          <div className="quiz-q-title">통증이 있는 부위는? (복수 선택)</div>
          <div className="quiz-opts">
            {PAIN_AREAS.map((area) => (
              <button
                key={area}
                className={`quiz-opt ${painAreas.includes(area) ? "sel" : ""}`}
                onClick={() => toggleArea(area)}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-q">
          <div className="quiz-q-title">통증 빈도는?</div>
          <div className="quiz-opts">
            {PAIN_FREQ.map((f) => (
              <button
                key={f}
                className={`quiz-opt ${painFreq === f ? "sel" : ""}`}
                onClick={() => setPainFreq(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-q">
          <div className="quiz-q-title">통증 때문에 운동을 포기한 적은?</div>
          <div className="quiz-opts">
            {PAIN_GIVEUP.map((g) => (
              <button
                key={g}
                className={`quiz-opt ${painGiveup === g ? "sel" : ""}`}
                onClick={() => setPainGiveup(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn btn-primary quiz-submit"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
        >
          {allAnswered ? "결과 보기 →" : "모든 문항에 답해주세요"}
        </button>
      </div>
    </section>
  );
}
