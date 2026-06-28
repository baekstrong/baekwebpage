"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  active?: "columns" | "products" | "quiz" | "about" | "contact";
};

export default function Header({ active }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="백관장" /> 백관장의 체력 상담소
        </Link>
        <button
          className="nav-toggle"
          aria-label="메뉴"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav
          className={`menu ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <Link href="/columns" className={active === "columns" ? "active" : undefined}>
            칼럼
          </Link>
          <Link href="/products" className={active === "products" ? "active" : undefined}>
            상품
          </Link>
          <a
            href="https://baekstrong.github.io/timetablemanager/?register=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            백관장에게 직접 배우기
          </a>
          <Link href="/quiz" className={active === "quiz" ? "active" : undefined}>
            자가진단
          </Link>
          <Link href="/about" className={active === "about" ? "active" : undefined}>
            소개
          </Link>
          <Link href="/contact" className={active === "contact" ? "active" : undefined}>
            문의
          </Link>
        </nav>
        <Link className="nav-cta" href="/quiz">
          체력 자가진단 →
        </Link>
      </div>
    </header>
  );
}
