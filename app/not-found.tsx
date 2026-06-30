import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "페이지를 찾을 수 없습니다 — 백관장의 체력 상담소",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="sg">
        <section className="sg-pagehead">
          <div className="lab mono">▍404</div>
          <h1>페이지를 찾을 수 없습니다</h1>
          <p>
            주소가 바뀌었거나 삭제된 페이지일 수 있어요. 아래에서 이어가 보세요.
          </p>
        </section>
        <section className="sg-body">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="sg-btn sg-btn-primary" href="/">
              홈으로
            </Link>
            <Link className="sg-btn sg-btn-ghost" href="/columns">
              칼럼 보기
            </Link>
            <Link className="sg-btn sg-btn-ghost" href="/quiz">
              자가진단 하기
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
