import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "문의 — 백관장의 체력 상담소",
  description:
    "수업·강연·협업 문의는 이메일로, 매일의 체력 콘텐츠는 SNS에서 만나요.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    icon: "▶️",
    name: "YouTube",
    desc: "구독자 6.2만. 직장인 체력 훈련의 본진입니다.",
    url: "https://www.youtube.com/@easystrength101",
    label: "@easystrength101",
  },
  {
    icon: "📷",
    name: "Instagram",
    desc: "운동 일상과 짧은 팁을 올립니다.",
    url: "https://www.instagram.com/easystrength101/",
    label: "@easystrength101",
  },
  {
    icon: "🧵",
    name: "Threads",
    desc: "체력에 대한 생각을 글로 풉니다.",
    url: "https://www.threads.com/@easystrength101",
    label: "@easystrength101",
  },
  {
    icon: "🎵",
    name: "TikTok",
    desc: "짧고 굵은 운동 영상.",
    url: "https://www.tiktok.com/@easystrength101",
    label: "@easystrength101",
  },
  {
    icon: "✍️",
    name: "네이버 블로그",
    desc: "글로 정리한 체력 이야기.",
    url: "https://blog.naver.com/qortmdejr123",
    label: "blog.naver.com",
  },
];

export default function Contact() {
  return (
    <>
      <Header active="contact" />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">CONTACT</span>
          <h1>문의</h1>
          <p>
            수업·강연·협업 문의는 이메일로 보내주세요. 하루 안에 답장드리려
            합니다.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cat-label">이메일 문의</div>
          <div className="grid-prod">
            <a className="prod" href="mailto:qortmdejr123@naver.com">
              <div className="icon">📧</div>
              <h3>이메일</h3>
              <p className="desc">
                수업 신청 전 궁금한 점, 기업 강연, 콘텐츠 협업까지 무엇이든
                문의받습니다.
              </p>
              <div className="via">
                <b>qortmdejr123@naver.com</b>
              </div>
              <span className="buy">메일 보내기 →</span>
            </a>
          </div>

          <div className="cat-label">SNS 채널</div>
          <div className="grid-prod">
            {CHANNELS.map((c) => (
              <a
                className="prod"
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <p className="desc">{c.desc}</p>
                <div className="via">
                  <b>{c.label}</b>
                </div>
                <span className="buy">바로가기 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
