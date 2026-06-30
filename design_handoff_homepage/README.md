# Handoff: 백관장의 체력 상담소 — 홈페이지 리디자인 (Structured Grid)

## Overview
직장인 대상 체력 트레이닝 브랜드 "백관장의 체력 상담소" 홈페이지 리디자인입니다.
기존 사이트(https://masterbaek.vercel.app)를 깔끔·미니멀(애플 톤) 방향으로 정리한 시안이며,
선택된 최종 방향은 **C — Structured Grid**(비대칭 그리드 + 넘버링 에디토리얼)입니다.

목표: 신뢰감 있고 정돈된 인상으로, 자가진단(quiz)·칼럼·상품 전환을 유도하는 랜딩.

## About the Design Files
이 번들의 파일은 **HTML로 만든 디자인 레퍼런스**입니다 — 의도한 룩앤필과 동작을 보여주는 프로토타입이며,
그대로 복사해 배포하는 프로덕션 코드가 아닙니다.
실제 작업은 **대상 코드베이스의 환경에서 이 디자인을 재현**하는 것입니다.
기존 사이트는 **Next.js(React) + Vercel** 기반이므로, 그 환경의 기존 패턴/컴포넌트/CSS 방식(예: Tailwind 또는 CSS Modules)에 맞춰 구현하세요.
HTML의 인라인 스타일을 그대로 옮기지 말고, 코드베이스의 컨벤션으로 재구성하면 됩니다.

> 참고: `.dc.html` 파일은 브라우저에서 바로 열어 미리보기 가능합니다. 스타일은 인라인으로 작성되어 있으니 시각 스펙의 출처로 활용하세요.

## Fidelity
**High-fidelity (hifi)** — 최종 색상·타이포·간격·인터랙션이 확정된 시안입니다.
코드베이스의 기존 라이브러리/패턴을 사용하되, 아래 명세대로 픽셀 단위까지 재현하세요.

## 파일
- `홈페이지 - Structured Grid.dc.html` — **구현 대상(최종안)**. 전체 흐름 + 반응형 포함.
- `홈페이지 디자인 시안 (3안 비교).dc.html` — 참고용. A(Light Editorial)/B(Dark Confident)/C(Structured Grid) 3안 비교 캔버스. **C만 구현하면 됩니다.**

---

## Design Tokens

### Colors
- Brand Blue (primary / 포인트): `#0A4DB0` · hover(진하게): `#083C8C`
- Bright Blue (다크 배경 위 포인트): `#6AA4FF`
- Ink (본문/제목 텍스트, 다크 섹션 배경): `#15171C`
- Body text (보조 본문): `#565B63`
- Muted text (캡션/라벨): `#888E97`
- Faint text (저작권 등): `#A6ABB3`
- Strong body (강조 본문): `#2D3039`
- Hairline / border: `#E4E9F0`
- Strong divider (섹션 상단 굵은 선): `#15171C` (1.5px)
- Surface white: `#FFFFFF`
- Light hover surface: `#F6F8FB`
- Dark section bg: `#15171C` · dark hover row: `#1D1F25` · dark borders: `#333333`
- Dark section muted text: `#959AA3` / `#8A8F98`
- 별점(★) 색: `#0A4DB0`

### Typography
- 한글/기본 본문: **Pretendard** (CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`). 코드베이스에 이미 한글 폰트가 있으면 그걸 쓰되, 없으면 Pretendard 권장.
- 라벨/넘버링(모노스페이스): **Space Mono** (Google Fonts, weight 400/700). 섹션 라벨, 인덱스 번호(01/02/03), 캡션, 이메일에 사용.
- 스케일(데스크톱):
  - Hero H1: 84px / line-height 1.0 / weight 800 / letter-spacing -0.035em
  - Section H2: 34–36px / weight 800 / letter-spacing -0.02em
  - Footer CTA H2: 44px / weight 800 / letter-spacing -0.025em
  - Stat 숫자: 32px / weight 800
  - Card H3(칼럼): 20px / weight 800 / line-height 1.3
  - 본문 large: 19px / line-height 1.65
  - 본문: 16–17px / line-height 1.7
  - 카드 본문: 14–15px / line-height 1.65
  - 모노 라벨: 12px / letter-spacing 0.16em
  - 인덱스 번호: 12–14px (모노)

### Spacing & Shape
- 콘텐츠 최대폭: `max-width: 1180px`, 가운데 정렬.
- 섹션 좌우 패딩: 32px (모바일 22px).
- 섹션 상하 패딩: 약 72–84px.
- Border radius: 거의 사용 안 함(각진 에디토리얼). 로고만 5px, 이미지/버튼은 0px(직각).
- 그림자: 거의 없음. 상단 네비만 blur 배경.

---

## Screens / Views — 단일 랜딩(섹션 순서대로)

### 1. Nav (상단 고정)
- Layout: 좌측 로고+브랜드명 / 우측 메뉴. `position: sticky; top:0`, 반투명 흰 배경 + `backdrop-filter: saturate(180%) blur(12px)`, 하단에 1.5px `#15171C` 굵은 선.
- 로고: 28×28, radius 5px. 브랜드명 "백관장의 체력 상담소" 15px/800.
- 메뉴: 칼럼 / 상품 / 자가진단 / 소개 / 문의 (13px/600, `#2D3039`, hover시 `#0A4DB0`).
- 우측 끝 "자가진단 →" 는 모노, `#0A4DB0`, 하단 2px 밑줄.
- 모바일(≤860px): 메뉴 숨김(햄버거로 대체 권장).

### 2. Hero (split)
- Layout: 2-column grid `1.15fr 0.85fr`, 가운데 1px 세로 구분선, 하단 1px 선. 모바일은 1열로 쌓임(구분선 → 가로선).
- 좌: 모노 eyebrow "직장인 체력 상담소 · 6.2만 구독" → H1 "직장인에게,\n힘을!" ("힘을!"만 `#0A4DB0`) → 본문(최대폭 460px) → 버튼 2개.
  - Primary 버튼: bg `#0A4DB0`, 흰 텍스트, padding 15×26, 직각, hover `#083C8C`. 텍스트 "1분 체력 자가진단 →"
  - Secondary 버튼: 투명, 1.5px `#15171C` 보더, hover시 bg `#15171C`/흰 텍스트. 텍스트 "체력향상 칼럼 보기"
- 우: 인물 사진(`profile.jpg`) full-cover, min-height 440px. 좌하단에 모노 캡션 배지 `#15171C` bg/흰 텍스트 "BAEK SEUNG-DEOK · 백관장".

### 3. Stat strip
- Layout: 3-column flex, 각 칸 사이 1px 세로선, 하단 1px 선. 모바일은 세로 1열.
- 각 칸: 모노 인덱스(01/02/03) + 큰 숫자(32px/800) + 라벨.
  - 6.2만 · 유튜브 구독자 / 534+ · 유튜브 영상 / 18편 · 체력 칼럼

### 4. Pain ("혹시 이런 하루를…")
- Layout: 2-column grid `0.8fr 1.2fr`, gap 48px. 좌: 라벨+제목 / 우: 리스트.
- 라벨: "▍혹시, 당신의 하루" (`#0A4DB0`, 모노). 제목 36px/800.
- 리스트 4개: 각 행 `30px 1fr` grid, 모노 번호(`#0A4DB0`/700) + 텍스트 17px. 첫 행 위 1.5px `#15171C`, 이후 1px hairline.
  - 01 알람을 다섯 개 맞춰놔도 아침이면 몸이 천근만근이다.
  - 02 점심 먹고 나면 오후 3시쯤 기절할 것 같은 식곤증이 몰려온다.
  - 03 퇴근하면 소파에 누워 스마트폰만 보다가 잠든다.
  - 04 주말 내내 쉬어도 월요일 아침엔 여전히 피곤하다.
- 마무리 문장(18px/600): "“다들 이렇게 살지” 싶겠지만, 정상이 아닙니다. … **그리고 바꿀 수 있습니다.**"("그리고 바꿀 수 있습니다."는 `#0A4DB0`)

### 5. Story ("저도 야근하던 현대중공업 직장인이었습니다")
- Layout: 2-column grid `1fr 1fr`, 위·아래 1px 선. 좌 텍스트 / 우 이미지(`hyundai-id.jpg`, full-cover min-height 420px). 모바일 1열.
- 라벨 "▍왜 '직장인' 체력인가" → 제목 34px/800 → 본문 2단락(16px/line1.7) → 서명 "— 백관장 (백승덕)" + "이야기 전체 보기 →"(`#0A4DB0`).

### 6. Columns (CONTENT)
- 헤더: 라벨 "▍CONTENT" + 제목 "체력향상 칼럼" 36px + 설명 + 우측 "칼럼 전체보기 →"(모노/`#0A4DB0`).
- 3-column grid, 사이 1px 세로선, 상단 1.5px `#15171C`. 각 카드 hover시 bg `#F6F8FB`.
- 각 카드: 모노 인덱스 → H3(20px/800) → 본문(14px) → "읽어보기 →"(`#0A4DB0`).
  - 01 과거로 돌아가도 다시 할 운동 3가지
  - 02 운동 전에 하지 말아야 할 것들
  - 03 헬스장에서 근육에 힘 주지 마세요
- 모바일: 1열, 세로 hairline → 가로 hairline.

### 7. Reviews (REVIEWS)
- 헤더: "▍REVIEWS" + "이미 수백 명이 강해졌습니다" 36px + 우측 모노 캡션 "네이버지도 · 스마트스토어 실제 후기".
- 3-column grid, 상단 1.5px `#15171C`, 사이 1px 세로선. 각 셀: 별점 ★★★★★(`#0A4DB0`) → 인용문(15px) → 모노 출처.
  - Aur**** · 근력학교 3년차 / lim**** · 헬스 3개월차 직장인 / 박** · 대학원생
- 모바일: 1열.

### 8. Products (PRODUCTS) — 다크 섹션
- 배경 `#15171C`, 흰 텍스트. 라벨 "▍PRODUCTS"(`#6AA4FF`).
- 제목 "백관장의 상품 — 읽고 끝내지 마세요. 직접 강해지세요."
- 리스트형 3행, 각 행 `50px 1fr auto` grid, 상/하 1px `#333`. hover시 bg `#1D1F25`.
  - 모노 인덱스(`#6AA4FF`) + 제목(21px/800) + 설명(`#959AA3`) + 우측 CTA(`#6AA4FF`)
  - 01 전자책 《케틀벨 체력 솔루션》 — 9,900원 — 구매하기 →
  - 02 케틀벨 원데이 클래스 — 예약 일정 보기 →
  - 03 근력학교 정규수업 — 신청하기 →

### 9. Footer CTA + 저작권
- 상단 1.5px `#15171C`. 좌: H2 "직장인에게, 힘을!"(44px, "힘을!" `#0A4DB0`) + 설명 + 버튼 2개(자가진단/상품 둘러보기). 우: 소셜 링크 세로 정렬(YouTube/Instagram/Threads·TikTok/블로그). 모바일은 세로 스택 + 링크 가로 wrap.
- 하단 바: 로고+이메일(모노 `qortmdejr123@naver.com`) / 우측 "© 2026 백관장의 체력 상담소. All rights reserved."

---

## Interactions & Behavior
- 모든 버튼/링크/카드/상품행: hover 상태 명세대로(색 반전 또는 배경 틴트). transition 150–200ms ease 권장(원본엔 명시 안 됨, 자연스럽게 추가).
- 네비: sticky + blur. 스크롤시 상단 고정.
- 내비 링크 → 각 페이지: 칼럼(`/columns`), 상품(`/products`), 자가진단(`/quiz`), 소개(`/about`), 문의(`/contact`). 모든 "자가진단 →" CTA는 `/quiz`로.
- 칼럼 카드 링크: `/columns/three-timeless-exercises`, `/columns/7-things-not-before-workout`, `/columns/dont-squeeze-muscles`.
- 소셜: YouTube `@easystrength101`, Instagram `easystrength101`, Threads `@easystrength101`, TikTok `@easystrength101`, 블로그 `blog.naver.com/qortmdejr123`.

## Responsive behavior
- Breakpoint: **≤ 860px**.
  - 모든 2-col/3-col grid → 1열.
  - 세로 구분선 → 가로 hairline으로 전환.
  - stat strip 세로 스택.
  - Hero H1 84px → 54px, 이미지 min-height 440 → 300px.
  - 네비 메뉴 숨김(햄버거 권장).
  - footer 가로 → 세로 스택.
- 코드베이스에선 인라인이 아니라 미디어쿼리/유틸 클래스로 구현하세요.

## State Management
- 정적 마케팅 페이지로 클라이언트 상태는 거의 없음.
- 필요시: 모바일 네비 토글(open/close) 정도.
- 칼럼/상품/후기 데이터는 CMS 또는 데이터 파일에서 매핑 권장(현재는 하드코딩 카피).

## Assets
모두 기존 사이트에서 제공되는 자산입니다(코드베이스의 `public/`에 이미 존재할 가능성 높음):
- `logo.png` (500×500, 파란 로고)
- `profile.jpg` (백승덕 인물 사진 — Hero 우측)
- `hyundai-id.jpg` (현대중공업 사원증 — Story 섹션)
디자인 파일은 `https://masterbaek.vercel.app/<파일명>` 절대경로로 참조 중이니, 코드베이스에선 로컬 `public/` 경로로 바꾸세요.

## 브랜드 색 확인
브랜드 메인 컬러는 로고/OG 이미지에서 추출한 **`#0040A0` 계열의 파란색**입니다.
시안에서는 가독성을 위해 약간 밝은 `#0A4DB0`을 포인트로 사용했습니다. 기존 사이트의 정확한 토큰 값이 있다면 그 값으로 통일하세요.
