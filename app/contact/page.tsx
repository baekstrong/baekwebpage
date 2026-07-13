import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "문의 — 백관장의 체력 상담소",
  description:
    "수업·상품·협업 무엇이든 편하게 남겨주세요. 보통 1~2일 안에 답변드립니다.",
  alternates: { canonical: "/contact" },
};

const SNS = [
  { name: "YouTube", url: "https://www.youtube.com/@easystrength101", handle: "@easystrength101" },
  { name: "Instagram", url: "https://www.instagram.com/easystrength101/", handle: "easystrength101" },
  { name: "Threads", url: "https://www.threads.com/@easystrength101", handle: "@easystrength101" },
  { name: "TikTok", url: "https://www.tiktok.com/@easystrength101", handle: "@easystrength101" },
  { name: "블로그", url: "https://blog.naver.com/qortmdejr123", handle: "blog.naver.com" },
  { name: "근력의 민족 (네이버 카페)", url: "https://cafe.naver.com/easystrength", handle: "cafe.naver.com/easystrength" },
];

export default function Contact() {
  return (
    <>
      <Header active="contact" />

      <div className="sg">
        <section className="sg-pagehead">
          <div className="lab mono">▍CONTACT</div>
          <h1>문의</h1>
          <p>
            수업·상품·협업 무엇이든 편하게 남겨주세요. 보통 1~2일 안에
            답변드립니다.
          </p>
        </section>

        <section className="sg-contact">
          {/* 정보 */}
          <div className="sg-cinfo">
            <div className="lab mono">EMAIL</div>
            <a className="email" href="mailto:qortmdejr123@naver.com">
              qortmdejr123@naver.com
            </a>

            <div className="rule" />

            <div className="lab2 mono">SNS</div>
            <div className="sg-snslist">
              {SNS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                  <span>{s.name}</span>
                  <span className="h mono">{s.handle}</span>
                </a>
              ))}
            </div>

            <div className="rule" />

            <div className="sg-cquiz">
              <div className="t">내게 맞는 운동이 궁금하다면?</div>
              <p>1분 자가진단으로 지금 체력 상태부터 확인해보세요.</p>
              <Link href="/quiz">체력 자가진단 →</Link>
            </div>
          </div>

          {/* 폼 */}
          <ContactForm />
        </section>
      </div>

      <Footer />
    </>
  );
}
