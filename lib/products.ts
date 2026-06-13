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
    name: "전자책 《케틀벨 체력 솔루션》",
    price: "₩ 9,900",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short: "직장인을 위한 케틀벨 체력 솔루션. 가장 빠르고 저렴하게 떼는 첫걸음입니다 (무료 샘플 제공).",
    via: "리틀리",
    buyUrl: "https://litt.ly/easystrength/sale/4Jejn8C",
    buyLabel: "구매하기",
    available: true,
    tagline: "직장인을 위한 케틀벨 체력 솔루션",
    forWho: [
      "케틀벨로 체력을 키우고 싶은데 어디서부터 시작할지 막막한 분",
      "유튜브를 따라 해봐도 자세가 맞는지 확신이 없는 분",
      "돈과 시간을 최소로 들여 일단 시작하고 싶은 직장인",
    ],
    includes: [
      "케틀벨로 직장인 체력을 키우는 원리",
      "힙힌지·케틀벨 스윙 등 핵심 동작의 기준",
      "바쁜 직장인을 위한 최소 단위 운동 루틴",
    ],
    detail: [
      "사무직 3년, 체력 코치 8년의 경험을 담아 케틀벨 하나로 직장인 체력을 키우는 법을 정리한 전자책입니다. 운동 종류를 늘어놓는 책이 아니라, 왜 지치는지, 무엇부터 바꿔야 하는지 원리부터 짚습니다.",
      "이미 423건 넘게 팔린, 가장 부담 없이 시작하는 첫걸음입니다. 사기 전에 무료 샘플로 내용을 먼저 확인할 수 있습니다. (디지털 콘텐츠라 다운로드 후에는 환불이 안 됩니다.)",
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
      "정식 출간 저서. 체력이 무너진 직장인을 위한 최소한의 생존 운동법.",
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
      "백관장이 정식 출판사를 통해 펴낸 책입니다. 유튜브와 근력학교에서 수백 명의 직장인을 가르치며 다듬은 내용을, 운동을 전혀 모르는 사람도 따라올 수 있게 정리했습니다.",
      "종이책은 교보문고에서 살 수 있고, eBook판도 함께 나와 있습니다.",
    ],
  },
  {
    id: "online-course",
    icon: "🎬",
    name: "온라인 강의",
    price: "준비 중",
    category: "online",
    categoryLabel: "온라인 · 혼자서 시작",
    short: "10편 이하의 핵심 강의. 출퇴근길에 보고 그날 바로 써먹는 압축 커리큘럼.",
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
      "지금 준비 중인 상품입니다. 분량을 늘리기보다, 직장인이 끝까지 볼 수 있는 핵심만 담으려고 만들고 있습니다.",
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
    short: "따라만 하면 되는 주간 루틴. 헬스장에서 보내는 시간이 절반으로 줄어듭니다.",
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
      "지금 준비 중인 상품입니다. 무작정 따라 하는 루틴이 아니라, 내 수준을 먼저 재고 거기 맞춰 조절하는 방식으로 설계하고 있습니다.",
      "출시되면 가장 먼저 알려드릴게요.",
    ],
  },
  {
    id: "oneday",
    icon: "📅",
    name: "케틀벨 원데이 클래스",
    price: "₩ 90,000",
    category: "offline",
    categoryLabel: "오프라인 · 직접 배우기",
    short: "케틀벨 기본기와 방향을 하루 3시간 만에 잡는 초보용 소규모 오프라인 수업.",
    via: "온라인 신청",
    buyUrl: "https://baekstrong.github.io/productdetailpage/",
    buyLabel: "예약 일정 보기",
    available: true,
    tagline: "케틀벨, 하루 만에 기본기와 방향부터",
    forWho: [
      "케틀벨을 처음 시작해보는 분 (초보 환영)",
      "유튜브를 따라 해봤지만 자세가 맞는지 확신이 없는 분",
      "한 번 제대로 배우고 집에서 이어갈 기준이 필요한 분",
    ],
    includes: [
      "복압 운동·힙힌지 — 모든 동작의 토대 잡기",
      "케틀벨 스윙·터키쉬겟업 — 대표 동작 직접 점검",
      "집에서 이어갈 운동 프로그램 안내",
      "복습 영상 링크 + 복습용 전자책 제공",
    ],
    detail: [
      "케틀벨을 혼자 시작하기 불안했다면, 하루 3시간 만에 기본기와 방향을 잡는 수업입니다. 잘하는 사람보다 처음이라 망설이는 사람에게 맞춰, 복압 운동·힙힌지부터 케틀벨 스윙·터키쉬겟업까지 자세를 옆에서 직접 점검받습니다.",
      "정원은 6명뿐인 소규모로, 장소는 근력학교 고대점입니다. 수업이 끝나면 복습 영상과 전자책을 드려서 집에서도 혼자 이어갈 수 있습니다. 예약 신청을 하면 결제 안내 문자가 가고, 결제까지 마치면 자리가 확정됩니다.",
    ],
  },
  {
    id: "school",
    icon: "🎓",
    name: "근력학교 정규수업",
    price: "주 2회 31만 · 3회 39만 · 4회 45만",
    category: "offline",
    categoryLabel: "오프라인 · 직접 배우기",
    short: "직장인 체력 향상 3단계 과정. 주 2회 3시간으로 일상 체력을 되살리는 정규 과정입니다.",
    via: "온라인 신청",
    buyUrl: "https://baekstrong.github.io/timetablemanager/?register=true",
    buyLabel: "수강 신청하기",
    available: true,
    tagline: "직장인 체력 향상 3단계 프로세스",
    forWho: [
      "일하느라 망가진 몸과 체력을 안전하게 되살리고 싶은 분",
      "허리·어깨·무릎 통증 때문에 운동이 두려운 직장인",
      "혼자서는 작심삼일로 끝나, 함께 꾸준히 하고 싶은 분",
    ],
    includes: [
      "1단계 교정 운동 — 통증을 줄이는 직장인 맞춤 교정",
      "2단계 근력 운동 — 쉽게 지치지 않는 몸 만들기",
      "3단계 유산소 운동 — 케틀벨로 체력 크기 자체 키우기",
    ],
    detail: [
      "근력학교 고대점은 사무직 직장인 출신 코치가, 10년간 직장인만을 위한 체력 향상법을 연구해 만든 그룹 정규 과정입니다. 하루 9시간 앉아 일하는 몸에 맞춰 교정 → 근력 → 유산소 3단계로, 주 2회 단 3시간 운동으로 일상 체력을 끌어올립니다.",
      "수강료는 주 2회 31만원 / 주 3회 39만원 / 주 4회 45만원입니다. 새로 오는 분은 기초를 다지는 입학반(비기너 수업, 8만원)을 먼저 듣고 정규 수업에 합류합니다. 체험 수업은 없지만, 2~3주 해보고도 맞지 않으면 이유를 묻지 않고 24시간 안에 100% 환불해 드립니다.",
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
