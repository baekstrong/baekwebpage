import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";

export const metadata = {
  title: "체력 자가진단 — 백관장의 체력 상담소",
  description:
    "1분 만에 근력·유산소·생활 습관 중 내 약한 고리와 통증 여부를 진단하고, 지금 나에게 맞는 첫걸음을 찾아보세요.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <>
      <Header />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">SELF-CHECK</span>
          <h1>체력 자가진단</h1>
          <p>
            1분이면 충분합니다. 근력·유산소·생활 습관 중 내 약한 고리가
            어디인지, 통증은 없는지 점검하고 나에게 맞는 첫걸음을 찾아보세요.
          </p>
        </div>
      </section>

      <Quiz />

      <Footer />
    </>
  );
}
