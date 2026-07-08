export default function Footer() {
  return (
    <footer>
      <div className="sg-bottom-in">
        <div className="sg-bottom-l">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" />
          <span className="mono">qortmdejr123@naver.com</span>
        </div>
        <span className="mono sg-copy">
          <a href="/privacy">개인정보처리방침</a>
          {" · "}© 2026 백관장의 체력 상담소. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
