"use client";

// 뉴스레터 구독 폼 — /api/subscribe(스티비 더블옵트인) 재사용
// 칼럼 목록·상세 하단에 배치해 이메일 수집 진입점을 넓힌다

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      setState(res.ok && data.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="subscribe-band">
      <div className="subscribe-inner">
        <div>
          <div className="lab mono">▍NEWSLETTER</div>
          <h2>새 칼럼을 메일로 받아보세요</h2>
          <p>직장인 체력 원리를 한 편씩 보내드립니다.</p>
        </div>
        <div>
          {state === "done" ? (
            <p className="subscribe-done">
              확인 메일을 보냈습니다. 메일함에서 &lsquo;구독 확인&rsquo;을
              눌러주시면 완료됩니다.
            </p>
          ) : (
            <form className="quiz-email" onSubmit={onSubmit}>
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
                disabled={state === "loading"}
              >
                {state === "loading" ? "신청 중…" : "구독하기"}
              </button>
            </form>
          )}
          {state === "error" && (
            <p className="subscribe-err">
              구독 신청에 실패했습니다. 잠시 후 다시 시도해주세요.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
