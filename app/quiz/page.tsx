import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";

export const metadata = {
  title: "체력 자가진단 — 백관장의 체력 상담소",
  description:
    "7개 질문으로 지금 내 직장인 체력 상태를 점검하고, 다음에 뭘 하면 좋을지 한 걸음을 받아보세요.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <>
      <Header active="quiz" />

      <div className="sg">
        <section className="sg-pagehead bare">
          <div className="lab mono">▍1-MIN CHECK</div>
          <h1>1분 체력 자가진단</h1>
          <p>
            7개 질문에 답하면 지금 내 직장인 체력 상태와, 다음에 뭘 하면 좋을지
            알려드려요.
          </p>
        </section>

        <Quiz />
      </div>

      <Footer />
    </>
  );
}
