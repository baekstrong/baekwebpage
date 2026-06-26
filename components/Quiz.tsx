"use client";

import { useState } from "react";
import Link from "next/link";

// ── 3축 문항 (근력 / 유산소·심폐 / 생활·회복) — 각 4문항, 점수 0·1·3, 축당 0~12 ──
type Axis = "strength" | "cardio" | "recovery";

const AXIS_LABEL: Record<Axis, string> = {
  strength: "근력",
  cardio: "유산소·심폐",
  recovery: "생활·회복",
};

const AXES: Axis[] = ["strength", "cardio", "recovery"];

const QUESTIONS: { axis: Axis; q: string; opts: [string, number][] }[] = [
  // 근력
  { axis: "strength", q: "팔굽혀펴기를 연속으로 몇 개나 하나요?", opts: [["15개 이상", 3], ["5~14개", 1], ["5개 미만", 0]] },
  { axis: "strength", q: "생수 묶음·장바구니처럼 무거운 걸 들 때는?", opts: [["거뜬하다", 3], ["좀 버겁다", 1], ["금방 지친다", 0]] },
  { axis: "strength", q: "바닥에 앉았다가 손 안 짚고 일어나면?", opts: [["쉽게 일어난다", 3], ["손을 짚게 된다", 1], ["많이 힘들다", 0]] },
  { axis: "strength", q: "가방·아이를 한 팔로 한참 들고 있으면?", opts: [["잘 버틴다", 3], ["곧 바꿔 든다", 1], ["바로 내려놓는다", 0]] },
  // 유산소·심폐
  { axis: "cardio", q: "계단으로 3~4층을 오르면?", opts: [["거뜬하다", 3], ["숨이 찬다", 1], ["엘리베이터를 탄다", 0]] },
  { axis: "cardio", q: "평지를 빠른 걸음으로 10분 걸으면?", opts: [["끄떡없다", 3], ["숨이 약간 찬다", 1], ["헉헉댄다", 0]] },
  { axis: "cardio", q: "버스·신호를 잡으려 잠깐 뛰고 나면?", opts: [["금방 회복된다", 3], ["한참 숨을 고른다", 1], ["뛸 엄두를 안 낸다", 0]] },
  { axis: "cardio", q: "숨이 약간 차는 운동을 얼마나 지속하나요?", opts: [["10분 이상", 3], ["3~5분", 1], ["1분도 벅차다", 0]] },
  // 생활·회복
  { axis: "recovery", q: "아침에 일어날 때 몸 상태는?", opts: [["개운하다", 3], ["보통이다", 1], ["천근만근이다", 0]] },
  { axis: "recovery", q: "하루 평균 수면 시간은?", opts: [["7시간 이상", 3], ["5~7시간", 1], ["5시간 미만", 0]] },
  { axis: "recovery", q: "하루 중 앉아 있는 시간은?", opts: [["6시간 미만", 3], ["6~9시간", 1], ["9시간 이상", 0]] },
  { axis: "recovery", q: "퇴근 후 남은 에너지는?", opts: [["남아 있다", 3], ["그저 그렇다", 1], ["방전된다", 0]] },
];

// ── 통증 문항 ──
const PAIN_AREAS = ["허리", "목·어깨", "무릎", "손목·팔꿈치", "없음"];
const PAIN_FREQ = ["거의 매일", "가끔", "운동할 때만", "없음"];
const PAIN_GIVEUP = ["자주 있다", "가끔 있다", "없다"];

type Result = {
  name: string;
  stage: string;
  desc: string;
  productId: string;
  productName: string;
};

const DRAINED: Result = {
  name: "방전된 직장인형",
  stage: "1단계 · 일단 움직이기",
  desc: "근력·유산소·회복 세 영역이 모두 바닥입니다. 여기서 운동량부터 늘리면 십중팔구 3일 만에 나가떨어져요. 지금 목표는 잘하는 게 아니라 '끊기지 않는 것'입니다. 하루 5분, 계단 한 층부터. 2주만 이어가도 몸이 먼저 답합니다.",
  productId: "ebook",
  productName: "전자책",
};

const BALANCED_TOP: Result = {
  name: "균형 잡힌 강철형",
  stage: "5단계 · 고도화",
  desc: "근력·유산소·회복이 고르게 상위권입니다. 웬만한 운동으론 더 안 늘어요. 여기서부터는 '많이'가 아니라 '정확하게'의 영역 — 약점을 골라 다듬고 강도를 체계적으로 올릴 때입니다.",
  productId: "school",
  productName: "근력학교 정규수업",
};

const BY_AXIS: Record<Axis, Result> = {
  strength: {
    name: "근력 보강형",
    stage: "가장 약한 고리: 근력",
    desc: "유산소·생활 리듬은 받쳐주는데, 셋 중 '힘'이 가장 약한 고리입니다. 무거운 걸 들 때, 자세를 버틸 때 먼저 무너지죠. 무게부터 올리지 말고 힙힌지·복압 같은 기본 동작의 기준부터 잡으면, 같은 운동도 효과가 확 달라집니다.",
    productId: "ebook",
    productName: "전자책",
  },
  cardio: {
    name: "유산소 보강형",
    stage: "가장 약한 고리: 심폐",
    desc: "힘은 어느 정도 있는데, 셋 중 심폐가 가장 약한 고리예요. 무거운 건 드는데 숨이 먼저 차는 타입 — 백관장도 딱 그랬습니다. 근육이 아니라 심폐가 빠진 거죠. 케틀벨처럼 짧고 강하게 숨을 끌어올리는 운동이 가장 빠른 답입니다.",
    productId: "oneday",
    productName: "케틀벨 원데이 클래스",
  },
  recovery: {
    name: "회복 보강형",
    stage: "가장 약한 고리: 생활·회복",
    desc: "근력·유산소는 받쳐주는데, 수면·좌식·회복에서 가장 많이 새고 있습니다. 운동을 더 하기 전에 새는 곳부터 막아야 해요. 바쁜 일상에 끼워 넣는 최소 단위 루틴과 회복 습관이 먼저입니다.",
    productId: "ebook",
    productName: "전자책",
  },
};

// 약점 축: 동점이면 유산소 > 생활·회복 > 근력 순으로 우선
function weakestAxis(axes: Record<Axis, number>): Axis {
  let weak: Axis = "cardio";
  let min = Infinity;
  for (const ax of ["cardio", "recovery", "strength"] as Axis[]) {
    if (axes[ax] < min) {
      min = axes[ax];
      weak = ax;
    }
  }
  return weak;
}

// 결과 선택: ① 전부 바닥 → 방전형 ② 고르게 상위 → 균형강철 ③ 그 외 → 약점 축 진단
export function getResult(axes: Record<Axis, number>): {
  result: Result;
  weak: Axis;
} {
  const maxAxis = Math.max(axes.strength, axes.cardio, axes.recovery);
  const minAxis = Math.min(axes.strength, axes.cardio, axes.recovery);
  const weak = weakestAxis(axes);
  if (maxAxis <= 4) return { result: DRAINED, weak }; // 전부 바닥
  if (minAxis >= 9) return { result: BALANCED_TOP, weak }; // 모든 축이 상위권
  return { result: BY_AXIS[weak], weak }; // 가장 약한 고리 진단
}

export default function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null)
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

  // 축별 합산 (0~12)
  const axes: Record<Axis, number> = { strength: 0, cardio: 0, recovery: 0 };
  answers.forEach((a, i) => {
    if (a !== null) axes[QUESTIONS[i].axis] += a;
  });
  const total = axes.strength + axes.cardio + axes.recovery;

  const hasPain =
    (painAreas.length > 0 && !(painAreas.length === 1 && painAreas[0] === "없음")) ||
    (painFreq !== null && painFreq !== "없음");

  const { result, weak } = getResult(axes);

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
          fitnessType: hasPain ? null : result.name,
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
                통증이 있는데 무리해서 운동하면 오히려 더 망가집니다. 지금은
                강도를 올리기보다, 아픈 곳을 안전하게 다루는 게 우선이에요.
              </p>
              <p>
                통증부터 안전하게 잡고 싶다면, 근력학교 정규수업이{" "}
                <b>1단계 교정 운동(통증을 줄이는 직장인 맞춤 교정)</b>부터
                시작합니다. 무리한 운동 없이 아픈 곳부터 다룹니다.
              </p>

              <div className="qr-rec">
                <div className="qr-rec-label">통증이 있다면, 이 단계부터</div>
                <Link className="btn btn-primary" href="/products/school">
                  근력학교 정규수업 보러 가기 →
                </Link>
              </div>

              <p>
                바로 시작이 망설여진다면, 백관장의 직장인 체력 레터로 통증에 무리
                없는 운동 이야기를 받아보세요.
              </p>

              {!emailDone ? (
                <form className="quiz-email" onSubmit={handleEmail}>
                  <input type="email" name="email" required placeholder="이메일 주소" />
                  <button type="submit" className="btn btn-primary" disabled={sending}>
                    {sending ? "신청 중…" : "체력 레터 받기 →"}
                  </button>
                </form>
              ) : (
                <p className="quiz-thanks">
                  신청 완료! 직장인 체력 레터를 보내드릴게요.
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
              <div className="qr-score">{total} / 36점</div>
              <h2>
                당신은 <span className="hl-navy">{result.name}</span>
              </h2>
              <div className="qr-stage">{result.stage}</div>

              {/* 3축 막대 — 약점 축 강조 */}
              <div className="qr-axes">
                {AXES.map((ax) => (
                  <div
                    className={`qr-axis ${ax === weak ? "weak" : ""}`}
                    key={ax}
                  >
                    <div className="qr-axis-top">
                      <span>{AXIS_LABEL[ax]}</span>
                      <span>
                        {axes[ax]}/12{ax === weak ? " · 약점" : ""}
                      </span>
                    </div>
                    <div className="qr-bar">
                      <div
                        className="qr-bar-fill"
                        style={{ width: `${(axes[ax] / 12) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="qr-lead">{result.desc}</p>

              <div className="qr-rec">
                <div className="qr-rec-label">추천 다음 단계</div>
                <Link className="btn btn-primary" href={`/products/${result.productId}`}>
                  {result.productName} 보러 가기 →
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
                    {sending ? "신청 중…" : "내 약점에 맞는 체력 레터 받기 →"}
                  </button>
                </form>
              ) : (
                <p className="quiz-thanks">
                  신청 완료! 직장인 체력 레터를 보내드릴게요.
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
        {AXES.map((ax, gi) => (
          <div key={ax}>
            <div className="cat-label">
              {gi + 1}부 · {AXIS_LABEL[ax]} 체크
            </div>
            {QUESTIONS.map((item, qi) =>
              item.axis !== ax ? null : (
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
              )
            )}
          </div>
        ))}

        <div className="cat-label">4부 · 통증 체크</div>

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
