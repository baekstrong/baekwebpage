// 자가진단 이메일 수집 → 스티비 주소록에 구독자 추가
// API 키는 서버 환경변수로만 보관 (클라이언트 노출 X)
// 환경변수 미설정 시: 데모 모드(저장 없이 성공 응답) — 키 넣으면 즉시 실제 저장

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  let body: { email?: string; fitnessType?: string | null; hasPain?: boolean };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const KEY = process.env.STIBEE_API_KEY;
  const LIST = process.env.STIBEE_LIST_ID;

  // 키 미설정 → 데모 모드 (UI는 정상 동작, 실제 저장만 생략)
  if (!KEY || !LIST) {
    return Response.json({ ok: true, demo: true });
  }

  // 스티비 주소록 커스텀 필드("체력유형","통증여부")가 있으면 함께 저장됨
  const subscriber: Record<string, string> = { email };
  if (body.fitnessType) subscriber["체력유형"] = body.fitnessType;
  subscriber["통증여부"] = body.hasPain ? "있음" : "없음";

  try {
    const res = await fetch(
      `https://api.stibee.com/v1/lists/${LIST}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AccessToken: KEY,
        },
        body: JSON.stringify({
          eventOccuredBy: "SUBSCRIBER",
          // 더블 옵트인: 본인이 확인 메일을 클릭해야 주소록에 추가됨
          // (제3자가 임의 이메일을 넣어 메일폭탄 하는 것을 방지)
          confirmEmailYN: "Y",
          subscribers: [subscriber],
        }),
      }
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data?.Ok === false) {
      // 업스트림 응답은 서버에만 기록하고, 클라이언트엔 일반 메시지만 반환
      console.error("stibee subscribe failed", data);
      return Response.json({ ok: false, error: "subscribe failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error("subscribe error", e);
    return Response.json({ ok: false, error: "internal error" }, { status: 500 });
  }
}
