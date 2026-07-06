// 실제 수강생 후기 (네이버 지도 · 스마트스토어에서 수집)
// - 공개된 후기를 발췌·인용했으며, 작성자는 이니셜로 익명 처리
// - 길이가 긴 후기는 의미를 바꾸지 않는 선에서 발췌(…)했습니다
// product: 어떤 상품의 후기인지 (상품 상세에서 필터링용)

export type Review = {
  quote: string;
  author: string; // 익명 이니셜
  meta: string; // 직업/수강기간 등 맥락
  source: "네이버 지도" | "스마트스토어";
  product: "school" | "oneday";
  tag?: string; // 카드 상단 강조 라벨
};

export const REVIEWS: Review[] = [
  // ── 근력학교 정규수업 (네이버 지도) ──
  {
    quote:
      "근력운동 초보자가 2년 넘게 다니는 이유가 있습니다. 실제로 체력이 좋아져 웬만한 계단과 오르막을 쉽게 오를 수 있습니다.",
    author: "나****",
    meta: "근력학교 2년차",
    source: "네이버 지도",
    product: "school",
    tag: "체력 향상",
  },
  {
    quote:
      "저질체력이라 인생 반 포기하고 살았는데, 다니면서 몸과 마음의 변화를 느끼고 있어요. 좀비에서 사람 만들어주셔서 감사합니다.",
    author: "lim****",
    meta: "헬스 3개월차 직장인",
    source: "네이버 지도",
    product: "school",
    tag: "운동 초보",
  },
  {
    quote:
      "운동 센스가 떨어지고 나쁜 자세로 오래 앉아 있는 저 같은 케이스도, 거북목·허리꺾임·라운드 숄더를 꿰고 계셔서 한 동작씩 교정해 운동할 수 있는 몸이 되었습니다.",
    author: "tim****",
    meta: "근력학교 3년 수강 (2021~2024)",
    source: "네이버 지도",
    product: "school",
    tag: "자세 교정",
  },
  {
    quote:
      "몸이 약해 필라테스·발레·자이로토닉·헬스 PT 등 안 해본 운동이 없는데, 근력학교가 인생에서 가장 만족하며 가장 길게 다니는 센터예요. 근육으로만 7kg 증량했어요!",
    author: "Aur****",
    meta: "근력학교 3년차",
    source: "네이버 지도",
    product: "school",
    tag: "3년 수강",
  },
  {
    quote:
      "관장님이 꼼꼼히 자세를 봐주시고 교정운동으로 근력이 강화되는 게 느껴집니다. 대학원 시작하고 생긴 허리통증이 지금은 완전히 없어졌습니다.",
    author: "박****",
    meta: "대학원생",
    source: "네이버 지도",
    product: "school",
    tag: "통증 개선",
  },
  {
    quote:
      "운동 시작하고 허리·어깨 통증이 많이 줄어 평소 생활에서 활력이 늘었습니다. 바디프로필을 요구하지 않고 근력 강화에 초점이 맞춰져 있어 좋습니다.",
    author: "Din****",
    meta: "근력학교 5년차",
    source: "네이버 지도",
    product: "school",
    tag: "5년 수강",
  },

  // ── 케틀벨 원데이 클래스 (스마트스토어) ──
  {
    quote:
      "필라테스·요가만 해오다 체력이 많이 떨어졌는데, 에너지 시스템에 대한 이해 없이 무리하게 운동해왔다는 걸 알게 됐고 어떻게 훈련해야 하는지 이해할 수 있었습니다. 원데이지만 정말 알차고 유익했습니다.",
    author: "merc****",
    meta: "케틀벨 원데이 · 직장인",
    source: "스마트스토어",
    product: "oneday",
    tag: "직장인",
  },
  {
    quote:
      "유튜브를 보며 혼자 운동했지만 계속 손목에 통증이 생겨 처음으로 그룹 PT를 받아봤습니다. 확실히 오프라인에서 배우는 게 다르네요.",
    author: "hang****",
    meta: "케틀벨 원데이",
    source: "스마트스토어",
    product: "oneday",
    tag: "통증",
  },
  {
    quote:
      "매번 자세를 정확히 잡아주시고, 데스크에 오래 앉아있는 현대인으로서 함께 배운 교정운동이 너무 유용했습니다.",
    author: "cpfl****",
    meta: "케틀벨 원데이 · 직장인",
    source: "스마트스토어",
    product: "oneday",
    tag: "자세 교정",
  },
  {
    quote:
      "노화를 실감하는 요즘, 운동이 가장 큰 투자라고 생각합니다. 노화와 싸울 무기를 하나 득템한 것 같아 기쁩니다.",
    author: "bolt****",
    meta: "케틀벨 원데이 · 55세",
    source: "스마트스토어",
    product: "oneday",
    tag: "50대",
  },
  {
    quote:
      "케틀벨은 책도, 유튜브도, PT도 다 만족스럽지 못해 확신이 없었는데 그 확신을 3시간 만에 들게 해주네요. 내용에 비해 가격이 너무 저렴합니다.",
    author: "choi****",
    meta: "케틀벨 원데이",
    source: "스마트스토어",
    product: "oneday",
    tag: "강력 추천",
  },
];

// 홈에 노출할 대표 후기(근력학교·원데이 골고루)
export function getFeaturedReviews(): Review[] {
  return [
    REVIEWS[3], // Aur — 3년차
    REVIEWS[1], // lim — 좀비에서 사람
    REVIEWS[10], // choi — 강력 추천 (원데이)
    REVIEWS[4], // 박 — 통증 개선
    REVIEWS[6], // merc — 직장인
    REVIEWS[2], // tim — 자세 교정
  ];
}

export function getReviewsByProduct(product: Review["product"]): Review[] {
  return REVIEWS.filter((r) => r.product === product);
}
