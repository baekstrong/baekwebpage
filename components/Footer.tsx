export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="brand-f">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" /> 백관장의 체력 상담소
          </div>
          <p style={{ marginTop: 12 }}>
            스트렝스 트레이닝의 대중화를 이루기 위해 노력합니다.
          </p>
        </div>
        <div>
          <p>
            문의:{" "}
            <a href="mailto:qortmdejr123@naver.com" style={{ color: "inherit" }}>
              qortmdejr123@naver.com
            </a>
          </p>
          <p style={{ marginTop: 8 }}>
            © 2026 백관장의 체력 상담소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
