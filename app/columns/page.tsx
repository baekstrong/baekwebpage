import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "체력향상 칼럼 — 백관장의 체력 상담소",
};

export default function Columns() {
  return (
    <>
      <Header active="columns" />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">CONTENT</span>
          <h1>체력향상 칼럼</h1>
          <p>
            운동량이 아니라 원리입니다. 바쁜 직장인이 가장 빠르게 강해지는 법을,
            검증된 내용으로만 풀어 씁니다.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {/* 필터 */}
          <div className="filters">
            <span className="filter active">전체</span>
            <span className="filter">직장인 체력</span>
            <span className="filter">운동법</span>
            <span className="filter">회복·피로</span>
            <span className="filter">입문 가이드</span>
          </div>

          {/* 추천(A등급) 칼럼 */}
          <div className="feature">
            <div className="ftxt">
              <div className="tag">★ 이번 주 추천 칼럼</div>
              <h2>바쁜 직장인은 무분할이 답입니다</h2>
              <p>
                시간 없는 사람일수록 &apos;분할 운동&apos;은 독이 됩니다. 주 2~3회로
                온몸을 효율적으로 단련하는, 직장인에게 가장 현실적인 운동 설계법을
                정리했습니다.
              </p>
              <a className="btn btn-primary" href="#">
                칼럼 읽기 →
              </a>
            </div>
            <div className="fimg">💪</div>
          </div>

          {/* 칼럼 그리드 */}
          <div className="grid3">
            <a className="col-card" href="#">
              <div className="tag">운동법</div>
              <h3>당신의 체력을 철인으로 바꿔줄 3-5 운동법</h3>
              <p className="excerpt">
                적은 시간으로 최대 효과를 내는 3-5 메소드. 직장인이 실천 가능한
                가장 강력한 루틴.
              </p>
              <div className="date">2026.05.20</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">회복·피로</div>
              <h3>만성 피로를 해결하기 위한 4가지</h3>
              <p className="excerpt">
                아무리 쉬어도 안 풀리는 피로엔 이유가 있습니다. 체력의 관점에서
                푸는 4가지 해법.
              </p>
              <div className="date">2026.05.13</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">직장인 체력</div>
              <h3>퇴근 후에는 왜 운동하기가 싫을까?</h3>
              <p className="excerpt">
                의지가 아니라 바닥난 체력의 문제입니다. 이 악순환을 끊는 단 하나의
                스위치.
              </p>
              <div className="date">2026.05.06</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">운동법</div>
              <h3>30분 달리기가 당신의 몸을 망친다</h3>
              <p className="excerpt">
                유산소만 하다 무릎 나간 직장인이 한둘이 아닙니다. 체력의 토대는
                &apos;힘&apos;에서 시작됩니다.
              </p>
              <div className="date">2026.04.29</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">운동법</div>
              <h3>케틀벨 스윙이 운동의 왕인 이유</h3>
              <p className="excerpt">
                단 하나의 운동만 골라야 한다면 케틀벨 스윙입니다. 그 이유를
                과학적으로 풀어봅니다.
              </p>
              <div className="date">2026.04.22</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">직장인 체력</div>
              <h3>똑똑할수록 체력 향상은 쉬워집니다</h3>
              <p className="excerpt">
                부상 없이 미친 체력을 만드는 법. 무작정 하는 운동과 원리를 아는
                운동의 차이.
              </p>
              <div className="date">2026.04.15</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">운동법</div>
              <h3>점진적 과부하? 오해하지 마세요</h3>
              <p className="excerpt">
                무게만 올리는 게 점진적 과부하가 아닙니다. 정체기를 뚫는 진짜 원리.
              </p>
              <div className="date">2026.04.08</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">입문 가이드</div>
              <h3>헬스를 처음 시작하는 당신에게</h3>
              <p className="excerpt">
                운동 초보가 가장 먼저 알아야 할 것. 시간 낭비 없이 시작하는 첫걸음.
              </p>
              <div className="date">2026.04.01</div>
            </a>
            <a className="col-card" href="#">
              <div className="tag">운동법</div>
              <h3>힘이 비약적으로 강해지는 방법 3가지</h3>
              <p className="excerpt">
                근육이 아니라 &apos;힘&apos;을 키우는 3가지 원리. 같은 시간으로 두 배
                강해지기.
              </p>
              <div className="date">2026.03.25</div>
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a className="btn btn-ghost" href="#">
              더 많은 칼럼 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>읽었다면, 시작하세요.</h2>
          <p>칼럼으로 이해했다면 이제 직접 강해질 차례입니다.</p>
          <div className="sns">
            <Link
              href="/products"
              style={{ background: "#fff", color: "#004AAD", borderColor: "#fff" }}
            >
              상품 둘러보기 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
