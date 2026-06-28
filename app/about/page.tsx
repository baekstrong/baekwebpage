import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "백관장 이야기 — 백관장의 체력 상담소",
  description:
    "운동 10년, 파워리프팅 대회 1등. 그런데 계단 5층에서 숨이 찼습니다. 현대중공업 직장인에서 직장인 체력 전문가가 되기까지.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <Header active="about" />

      {/* HERO — 반전 후킹 */}
      <section className="ab-hero">
        <div className="wrap">
          <div className="ab-hero-grid">
            <div>
              <span className="eyebrow" style={{ color: "#6ea8ff" }}>
                백관장 이야기
              </span>
              <h1>
                운동을 10년 했는데,
                <br />
                계단 5층에서 <span className="hl">숨이 찼습니다</span>.
              </h1>
              <p className="ab-lead">
                바벨로는 누구보다 무거운 걸 들었습니다. 그런데 친구들과 산에 가면
                제가 제일 먼저 헐떡거렸어요. 그 모순 때문에 &lsquo;직장인
                체력&rsquo;이라는 길로 들어서게 됐습니다.
              </p>
            </div>
            <div className="ab-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="백관장 백승덕" />
            </div>
          </div>
        </div>
      </section>

      {/* 문제 · 공감 */}
      <section className="block">
        <div className="wrap ab-narrow">
          <span className="eyebrow">혹시, 당신의 하루</span>
          <h2 className="ab-h2">혹시 이런 하루를 보내고 계신가요?</h2>
          <ul className="ab-pain">
            <li>알람을 다섯 개 맞춰놔도 아침이면 몸이 천근만근이다.</li>
            <li>점심 먹고 나면 오후 3시쯤 기절할 것 같은 식곤증이 몰려온다.</li>
            <li>퇴근하면 소파에 누워 스마트폰만 보다가 잠든다.</li>
            <li>주말 내내 쉬어도 월요일 아침엔 여전히 피곤하다.</li>
          </ul>
          <p>
            &ldquo;다들 이렇게 사는 거 아닌가&rdquo; 싶으실 겁니다. 그런데 이건
            정상이 아니에요. 분명히 말씀드릴게요.{" "}
            <b>당신의 의지나 나이, 타고난 체질 탓이 아닙니다.</b> 하루 8시간
            앉아서 일하고, 이동은 차와 엘리베이터로 하고, 몸 쓸 일이 거의 없는
            생활. 이런 구조에서 체력이 멀쩡하면 그게 오히려 이상한 거거든요.
          </p>
        </div>
      </section>

      {/* 반전 스토리 */}
      <section className="block ab-story">
        <div className="wrap ab-narrow">
          <span className="eyebrow" style={{ color: "#6ea8ff" }}>
            저의 이야기
          </span>
          <h2 className="ab-h2" style={{ color: "#fff" }}>
            저도 똑같았습니다. 아니, 더 심했어요.
          </h2>

          <img
            className="ab-id"
            src="/hyundai-id.jpg"
            alt="현대중공업 사원증"
            // eslint-disable-next-line @next/next/no-img-element
          />

          <p>
            저는 공대를 졸업하고 <b>현대중공업에 입사한 평범한 사무직</b>이었습니다.
            운동을 안 한 것도 아니에요. 학생 때부터 헬스장을 다녔고, 직장에
            다니면서도 주 5회씩 부위별로 나눠 열심히 했습니다. 그런데 솔직히
            고백하면, <b>운동 인생 20년 중 10년을 날렸어요.</b> 덩치는 컸지만
            힘은 약한, 전형적인 &lsquo;헬스장 물근육&rsquo;이 바로 저였습니다.
          </p>
          <p>
            데드리프트 100kg 앞에서 번번이 좌절했습니다. 그 이상 들면 허리가
            아팠고, 저는 그냥 약하게 태어난 줄로만 알았어요. 그러다 우연히 제
            자세에 문제가 있다는 걸 알게 됐습니다. 가장 기본인 힙힌지 동작이
            틀려 있었던 거예요. 2주 동안 데드리프트는 접어두고{" "}
            <b>힙힌지만 하루 200회씩</b> 연습했습니다. 그리고 2주 뒤, 허리 통증
            하나 없이 <b>140kg을 들어올렸어요.</b> 그때 깨달았습니다. 내가 약한
            게 아니라, 방법이 틀렸던 겁니다.
          </p>
          <p>
            거기서 멈추지 않고 &lsquo;힘&rsquo; 자체가 강해지는 원리를
            파고들었습니다. <b>3대 운동 합계가 540kg</b>까지 올라갈 만큼 강해졌어요.
            드디어 약골 인생을 청산했다고 생각했죠. 그런데 웃긴 일이 벌어졌어요.{" "}
            <b>그렇게 힘이 세졌는데도, 계단 5층만 올라가도 헉헉거렸거든요.</b>
          </p>
          <p>
            540kg을 드는 사람이 계단에서 숨을 헐떡인다. 뭔가 근본적으로 잘못된 거였죠.
            나중에야 깨달았습니다. 저는 체력을 키운 게 아니라 무거운 걸 드는
            기술을 키운 거였어요. 힘은 강해졌지만, 체력이라는 퍼즐의 마지막
            조각&mdash;유산소 능력이 통째로 빠져 있었던 겁니다.
          </p>
          <p>
            전환점은 <b>케틀벨</b>이었습니다. 처음엔 우습게 봤어요. 바벨로
            200kg을 넘게 드는데, 고작 24kg짜리 쇳덩이로 뭘 하겠나 싶었죠. 그런데
            케틀벨 스윙을 100개 하고 나니 생각이 완전히 바뀌었습니다. 심장이
            터질 것 같았고 온몸이 땀으로 젖었어요. 고작 10분이었습니다. 바벨로
            한 시간 운동할 때도 못 느낀 걸 10분 만에 느낀 거예요. 그 순간
            알았습니다. 이거다.
          </p>
          <p>
            계단을 올라도 숨이 차지 않았습니다. 오후에도 집중력이 유지됐고,
            퇴근 후에도 에너지가 남았어요. 이게 진짜 체력이었습니다. 대회
            트로피가 아니라 일상이 편해지는 것. 그게 제가 찾던 답이었어요. 결국
            저는 <b>3년의 직장 생활을 접고 회사를 나와 직장인 체력 코치가
            됐습니다.</b> 주변에서는 미쳤다고 했지만, 이상하게 확신이 있었어요.
            그리고 코치가 된 뒤, <b>2019년 IPF 코리아 파워리프팅 대회에 나가
            1등</b>을 했습니다. 이번엔 힘만이 아니라 일상 체력까지 갖춘 채였죠.
          </p>
        </div>
      </section>

      {/* 차별점 */}
      <section className="block">
        <div className="wrap ab-narrow">
          <span className="eyebrow">왜 &lsquo;직장인&rsquo; 체력인가</span>
          <h2 className="ab-h2">트레이너는 많습니다. 하지만 직장인을 아는 코치는 드뭅니다.</h2>
          <p>
            우리나라 운동 시장은 보디빌딩(몸 만들기)과 다이어트 위주로 돌아갑니다.
            트레이너도 대부분 체대 출신이고요. 입시 때부터 강도 높은 운동을
            해온 분들이라, 솔직히 직장인의 삶을 이해하기는 어렵습니다.
          </p>
          <p>
            하지만 저는 달랐습니다. <b>저 역시 공대를 졸업한 평범한
            직장인이었으니까요.</b> 야근에 치이고, 회식에 끌려다니고, 퇴근하면
            시체처럼 누워만 있던 삶. 그 끝에 오는 만성피로와 무기력을 누구보다 잘
            압니다. 게다가 잘못된 운동으로 10년을 날린 사람이라, 뭐가 진짜 효과가
            있고 뭐가 시간 낭비인지 뼈저리게 알고 있어요.
          </p>
          <p>
            그렇게 근력학교에서 IT 개발자, 은행원, 공무원, 영업사원, 의대 교수,
            회계사까지 <b>수백 명의 직장인</b>을 만났습니다. 직종은 달라도 하는
            말은 놀랍도록 비슷했어요. &ldquo;퇴근하면 기력이 없어요.&rdquo;
            &ldquo;헬스장 등록하고 세 번 가고 안 가게 됐어요.&rdquo; 거기서 하나의
            결론을 얻었습니다. <b>직장인이 운동에 실패하는 건 의지가 약해서가
            아니라, 방법이 잘못돼서다.</b>
          </p>
        </div>
      </section>

      {/* 원칙 */}
      <section className="block prod-bg">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">백관장의 원칙</span>
            <h2 className="ab-h2">제가 수강생에게 늘 하는 말</h2>
          </div>
          <div className="ab-principles">
            <div className="ab-card">
              <div className="ab-card-n">덜 하자</div>
              <p>주 2~3회만 정확하게 운동하면 됩니다. 많이가 아니라 정확하게입니다.</p>
            </div>
            <div className="ab-card">
              <div className="ab-card-n">자세가 먼저</div>
              <p>무게는 나중입니다. 자세 없는 무게는 부상으로 가는 지름길이에요.</p>
            </div>
            <div className="ab-card">
              <div className="ab-card-n">방법이 맞으면 달라진다</div>
              <p>당신은 의지가 약한 게 아닙니다. 운동을 지속하는 방법을 몰라서 그런 것뿐이에요.</p>
            </div>
            <div className="ab-card">
              <div className="ab-card-n">멋진 몸보다 생활 체력</div>
              <p>목표는 과시가 아니라, 퇴근해도 지치지 않는 몸입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 증거 — 숫자 */}
      <section className="block">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">검증된 길</span>
            <h2 className="ab-h2">말이 아니라, 결과로 증명합니다</h2>
          </div>
          <div className="ab-stats">
            <div className="ab-stat">
              <div className="num">6.2만</div>
              <div className="lab">유튜브 구독자</div>
            </div>
            <div className="ab-stat">
              <div className="num">수백 명</div>
              <div className="lab">근력학교 직장인 코칭</div>
            </div>
            <div className="ab-stat">
              <div className="num">1등</div>
              <div className="lab">2019 IPF 코리아 파워리프팅</div>
            </div>
            <div className="ab-stat">
              <div className="num">2권</div>
              <div className="lab">정식 출간 저서</div>
            </div>
          </div>
          <div className="ab-books">
            <span>📖 저서</span> 《최소한의 생존 체력 운동(교보문고 구입 가능)》 ·{" "}
            《출근만 해도 녹초인 직장인을 위한 케틀벨 체력 솔루션(전자책)》
          </div>
        </div>
      </section>

      {/* 변화 */}
      <section className="block prod-bg">
        <div className="wrap ab-narrow">
          <span className="eyebrow">실제 변화</span>
          <h2 className="ab-h2">그들이 한 건 단 하나였습니다</h2>
          <p>
            계단을 올라도 숨이 차지 않고, 허리가 덜 아프고, 아이를 안아 올리기가
            편해지고, 퇴근 후엔 산책을 나가게 된 사람들. 이분들이 한 일은 딱
            하나예요. <b>핵심 동작 몇 가지를 주 2~3회 꾸준히 한 것.</b>
          </p>
          <p>
            과장하지는 않겠습니다. &ldquo;2주 만에 몸이 바뀐다&rdquo; 같은 말은
            안 해요. 사실이 아니니까요. 체력은 서서히 쌓입니다. 그래도 3개월,
            6개월이 지나면 분명히 달라집니다. 일상의 순간순간에 &ldquo;어? 나
            언제 이렇게 됐지?&rdquo; 하고 느끼게 되실 거예요. 저는 그 현실적인
            변화를 약속합니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>이제 당신 차례입니다</h2>
          <p>
            지금 뭘 사라고 하지 않겠습니다. 먼저 1분이면 끝나는 자가진단으로,
            내 체력이 지금 어느 단계인지부터 확인해보세요.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link
              className="btn"
              href="/quiz"
              style={{ background: "#fff", color: "#004AAD", borderColor: "#fff" }}
            >
              1분 체력 자가진단 →
            </Link>
            <Link
              className="btn"
              href="/columns"
              style={{
                background: "transparent",
                color: "#fff",
                borderColor: "rgba(255,255,255,.5)",
              }}
            >
              칼럼 먼저 읽어보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
