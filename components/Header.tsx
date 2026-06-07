import Link from "next/link";

type Props = { active?: "columns" | "products" | "quiz" };

export default function Header({ active }: Props) {
  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="백관장" /> 백관장의 체력 상담소
        </Link>
        <nav className="menu">
          <Link href="/columns" className={active === "columns" ? "active" : undefined}>
            칼럼
          </Link>
          <Link href="/products" className={active === "products" ? "active" : undefined}>
            상품
          </Link>
          <Link href="/quiz" className={active === "quiz" ? "active" : undefined}>
            자가진단
          </Link>
          <Link href="/#origin">소개</Link>
          <Link href="/#sns">문의</Link>
        </nav>
        <Link className="nav-cta" href="/quiz">
          체력 자가진단 →
        </Link>
      </div>
    </header>
  );
}
