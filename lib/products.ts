// 상품 데이터 (자체 결제 없음 — 외부 플랫폼 링크로 연결)
// 결제 목적지: 전자책=리틀리 / 원데이·근력학교=스마트스토어 / 온라인강의·프로그램=미정

export type Product = {
  id: string;
  icon: string;
  name: string;
  price: string;
  category: "online" | "offline" | "upcoming";
  categoryLabel: string;
  short: string; // 목록 카드 설명
  via: string; // 결제처 표기
  buyUrl: string | null; // null = 아직 링크 없음(준비 중)
  buyLabel: string;
  available: boolean;
  // 상세 페이지용
  tagline: string;
  forWho: string[];
  includes: string[];
  detail: string[]; // 문단 배열
};

export const PRODUCTS: Product[] = [
  {
    id: "ebook",
    icon: "📘",
    name: "전자책",
    price: "₩ 19,000",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short: "직장인 체력의 핵심 원리를 한 권에 압축. 가장 빠르고 저렴하게 시작하는 방법.",
    via: "리틀리",
    buyUrl: "https://litt.ly/easystrength/sale/4Jejn8C",
    buyLabel: "구매하기",
    available: true,
    tagline: "직장인 체력의 핵심 원리를 한 권에",
    forWho: [
      "운동을 제대로 시작해본 적 없는 직장인",
      "뭐부터 해야 할지 몰라 런닝머신만 타고 오는 분",
      "돈과 시간을 최소로 들여 일단 시작하고 싶은 분",
    ],
    includes: [
      "체력이 무너지는 진짜 원리",
      "바쁜 직장인을 위한 주 2~3회 루틴 설계법",
      "초보가 가장 많이 하는 실수와 교정법",
    ],
    detail: [
      "헬스장에 가도 뭘 해야 할지 모르겠고, 유튜브 영상을 봐도 막상 따라 하기 어려운 분들을 위해 만들었습니다. 운동 종류를 늘어놓는 책이 아니라, 왜 지치는지·무엇부터 바꿔야 하는지 원리를 정리한 책입니다.",
      "한 번에 다 하려다 작심삼일로 끝나지 않도록, 직장인이 현실적으로 지킬 수 있는 최소 단위부터 안내합니다. 가장 빠르고 부담 없이 시작할 수 있는 첫걸음입니다.",
    ],
  },
  {
    id: "book-survival",
    icon: "📖",
    name: "저서 《최소한의 생존 체력 운동》",
    price: "₩ 19,800",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short:
      "정식 출간 저서. 체력이 무너진 직장인을 위한 최소 단위의 생존 운동법.",
    via: "교보문고",
    buyUrl: "https://product.kyobobook.co.kr/detail/S000217485975",
    buyLabel: "교보문고에서 구매",
    available: true,
    tagline: "출판사를 거쳐 정식 출간된, 생존을 위한 최소한의 운동",
    forWho: [
      "운동할 시간도 기력도 없다고 느끼는 직장인",
      "헬스장 등록 전에, 책으로 먼저 원리를 잡고 싶은 분",
      "부모님·동료에게 선물할 운동 입문서를 찾는 분",
    ],
    includes: [
      "체력이 무너지는 원인과 회복의 원리",
      "바쁜 일상에서도 지킬 수 있는 최소 단위 운동법",
      "단계별로 따라가는 생존 체력 루틴",
    ],
    detail: [
      "백관장이 정식 출판사를 통해 펴낸 저서입니다. 유튜브와 근력학교에서 수백 명의 직장인을 가르치며 다듬은 내용을, 운동을 전혀 모르는 사람도 따라올 수 있게 정리했습니다.",
      "종이책은 교보문고에서, eBook판도 함께 구매할 수 있습니다.",
    ],
  },
  {
    id: "online-course",
    icon: "🎬",
    name: "온라인 강의",
    price: "준비 중",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short: "10편 이하의 핵심 강의. 출퇴근길에 보고 그날 바로 적용하는 압축 커리큘럼.",
    via: "준비 중",
    buyUrl: null,
    buyLabel: "알림 신청",
    available: false,
    tagline: "출퇴근길에 보고 그날 바로 적용",
    forWho: [
      "글보다 영상으로 자세를 확인하고 싶은 분",
      "핵심만 빠르게 배우고 싶은 직장인",
    ],
    includes: [
      "10편 이하의 핵심 강의 영상",
      "동작별 자세 교정 포인트",
      "주차별 적용 가이드",
    ],
    detail: [
      "현재 준비 중인 상품입니다. 분량을 늘리기보다 직장인이 끝까지 볼 수 있는 핵심만 담는 방향으로 만들고 있습니다.",
      "출시되면 가장 먼저 알려드릴게요.",
    ],
  },
  {
    id: "program",
    icon: "🏋️",
    name: "운동 프로그램",
    price: "준비 중",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short: "따라만 하면 되는 주간 루틴. 헬스장에서 보내는 시간을 절반으로 줄여줍니다.",
    via: "준비 중",
    buyUrl: null,
    buyLabel: "알림 신청",
    available: false,
    tagline: "따라만 하면 되는 주간 루틴",
    forWho: [
      "루틴 짜는 게 가장 막막한 분",
      "헬스장에서 시간을 효율적으로 쓰고 싶은 분",
    ],
    includes: ["주간 운동 루틴", "동작별 횟수·세트·휴식 가이드", "난이도 조절법"],
    detail: [
      "현재 준비 중인 상품입니다. 무작정 따라 하는 루틴이 아니라, 내 수준을 측정하고 그에 맞춰 조절하는 방식으로 설계하고 있습니다.",
      "출시되면 가장 먼저 알려드릴게요.",
    ],
  },
  {
    id: "oneday",
    icon: "📅",
    name: "원데이 클래스",
    price: "₩ 89,000",
    category: "offline",
    categoryLabel: "오프라인 · 직접 배우기",
    short: "하루 만에 핵심 자세와 원리를 몸으로 익히는 오프라인 집중 수업.",
    via: "스마트스토어",
    buyUrl: null, // TODO: 스마트스토어 상품 URL
    buyLabel: "신청하기",
    available: true,
    tagline: "하루 만에 핵심 자세를 몸으로",
    forWho: [
      "혼자 하면 자세가 맞는지 불안한 분",
      "짧은 시간에 제대로 배우고 싶은 분",
      "정규수업 전에 먼저 경험해보고 싶은 분",
    ],
    includes: [
      "기본 동작 자세 교정 (스쿼트·데드리프트·푸쉬업 등)",
      "내 몸에 맞는 강도 찾는 법",
      "현장 질의응답",
    ],
    detail: [
      "글이나 영상으로는 한계가 있는 자세를, 하루 만에 직접 점검받는 오프라인 집중 수업입니다. 백관장이 직접 자세를 보고 교정해드립니다.",
      "정규수업이 부담된다면, 먼저 원데이 클래스로 경험해보시길 권합니다.",
    ],
  },
  {
    id: "school",
    icon: "🎓",
    name: "근력학교 정규수업",
    price: "₩ 350,000~",
    category: "offline",
    categoryLabel: "오프라인 · 직접 배우기",
    short: "체계적으로 강해지는 정규 과정. 직장인을 위해 설계된 단계별 커리큘럼.",
    via: "스마트스토어",
    buyUrl: null, // TODO: 스마트스토어 상품 URL
    buyLabel: "신청하기",
    available: true,
    tagline: "체계적으로 강해지는 정규 과정",
    forWho: [
      "제대로, 끝까지 체력을 바꾸고 싶은 분",
      "혼자서는 작심삼일로 끝나는 분",
      "단계별로 관리받으며 성장하고 싶은 분",
    ],
    includes: [
      "직장인 맞춤 단계별 커리큘럼",
      "개인 수준 측정과 강도 설계",
      "지속 관리와 피드백",
    ],
    detail: [
      "백관장이 8년간 수백 명의 직장인을 가르치며 다듬은 정규 과정입니다. 운동법만 알려주는 게 아니라, 끝까지 지속하게 만드는 시스템까지 함께 잡아드립니다.",
      "한 번 배우고 끝이 아니라, 평생 가져갈 체력 습관을 만드는 것이 목표입니다.",
    ],
  },
  {
    id: "goods",
    icon: "🧢",
    name: "실물 굿즈",
    price: "준비 중",
    category: "upcoming",
    categoryLabel: "추후 출시 예정",
    short: "운동 용품·의류 등 백관장의 체력 상담소 굿즈가 준비되고 있습니다.",
    via: "미정",
    buyUrl: null,
    buyLabel: "출시 예정",
    available: false,
    tagline: "백관장의 체력 상담소 굿즈",
    forWho: ["백관장의 체력 상담소를 응원하는 분"],
    includes: ["운동 용품", "의류 등"],
    detail: ["현재 준비 중입니다. 출시되면 알려드릴게요."],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
