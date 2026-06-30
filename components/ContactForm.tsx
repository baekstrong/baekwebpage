"use client";

// 문의 폼 — 메일 백엔드가 없어 mailto로 전송(사용자 메일앱 열림).
// ponytail: 서버리스 메일 API(Resend 등) 붙이면 submit 핸들러만 교체.
import { useState } from "react";

const TYPES = [
  "수업 문의 (원데이 · 근력학교)",
  "상품 문의 (전자책 · 저서)",
  "협업 · 제휴",
  "기타",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `[문의] ${type} — ${name}`;
    const body = `이름: ${name}\n이메일: ${email}\n문의 유형: ${type}\n\n${msg}`;
    window.location.href = `mailto:qortmdejr123@naver.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sg-cdone">
        메일 작성 창을 열었습니다. 창이 열리지 않았다면{" "}
        <b>qortmdejr123@naver.com</b> 으로 직접 보내주세요. 보통 1~2일 안에
        회신드립니다.
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
      <div className="send">
        <span className="mono note">* 보통 1~2일 내 회신드립니다.</span>
        <button className="sg-btn sg-btn-primary" type="submit">
          문의 보내기 →
        </button>
      </div>
    </form>
  );
}
