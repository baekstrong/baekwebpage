"use client";

// 문의 폼 — Web3Forms로 즉시 이메일 전달 (qortmdejr123@naver.com 수신)
// 키는 공개용 클라이언트 키(NEXT_PUBLIC_WEB3FORMS_KEY). 실패 시 직접 메일 안내로 폴백.
import { useState } from "react";

const TYPES = [
  "수업 문의 (원데이 · 근력학교)",
  "상품 문의 (전자책 · 저서 · 온라인 강의)",
  "협업 · 제휴",
  "기타",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [msg, setMsg] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `[문의] ${type} — ${name}`,
          from_name: "백관장 홈페이지 문의",
          name,
          email, // Web3Forms가 답장(reply-to) 주소로 사용
          "문의 유형": type,
          message: msg,
          botcheck: false, // 스팸봇 honeypot
        }),
      });
      const data = await res.json().catch(() => ({}));
      setState(res.ok && data.success ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="sg-cdone">
        문의가 접수됐습니다. 남겨주신 이메일로 보통 1~2일 안에 회신드릴게요.
      </div>
    );
  }

  return (
    <form className="sg-cform" onSubmit={submit}>
      <div className="row2">
        <div>
          <label htmlFor="cf-name">이름</label>
          <input
            id="cf-name"
            type="text"
            required
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cf-email">이메일</label>
          <input
            id="cf-email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="cf-type">문의 유형</label>
        <select
          id="cf-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="fld">
        <label htmlFor="cf-msg">메시지</label>
        <textarea
          id="cf-msg"
          rows={6}
          required
          placeholder="현재 운동 경험, 목표, 궁금한 점을 적어주시면 더 정확히 답변드릴 수 있어요."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          만 14세 이상이며,{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            개인정보 수집·이용
          </a>
          에 동의합니다.
        </span>
      </label>
      <div className="send">
        <span className="mono note">* 보통 1~2일 내 회신드립니다.</span>
        <button
          className="sg-btn sg-btn-primary"
          type="submit"
          disabled={state === "loading"}
        >
          {state === "loading" ? "보내는 중…" : "문의 보내기 →"}
        </button>
      </div>
      {state === "error" && (
        <p className="sg-cerr">
          전송에 실패했습니다. 잠시 후 다시 시도하시거나{" "}
          <b>qortmdejr123@naver.com</b> 으로 직접 보내주세요.
        </p>
      )}
    </form>
  );
}
