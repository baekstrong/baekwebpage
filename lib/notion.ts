// 노션 "홈페이지 칼럼" DB 연동 (REST API 직접 호출, 의존성 없음)
// 상태=발행완료 인 글만 사이트에 노출 (감수 게이트)

const TOKEN = process.env.NOTION_TOKEN;
const DS_ID = process.env.NOTION_COLUMNS_DS_ID;
const NOTION_VERSION = "2025-09-03";

export type Column = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  grade: string; // "A"=홈 추천 / "B"=일반
  date: string; // ISO (YYYY-MM-DD)
};

async function notion(path: string, body?: unknown) {
  if (!TOKEN || !DS_ID) {
    throw new Error(
      "NOTION_TOKEN 또는 NOTION_COLUMNS_DS_ID 환경변수가 설정되지 않았습니다."
    );
  }
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { revalidate: 60 }, // ISR: 60초마다 자동 재검증
  });
  if (!res.ok) {
    throw new Error(`Notion API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function richText(arr: any): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (arr ?? []).map((r: any) => r.plain_text).join("");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapColumn(page: any): Column {
  const p = page.properties ?? {};
  return {
    id: page.id,
    title: richText(p["제목"]?.title),
    summary: richText(p["요약"]?.rich_text),
    slug: richText(p["slug"]?.rich_text) || page.id.replace(/-/g, ""),
    grade: p["등급"]?.select?.name ?? "B",
    date: p["날짜"]?.date?.start ?? "",
  };
}

// 발행완료 칼럼 목록 (최신순)
export async function getColumns(): Promise<Column[]> {
  try {
    const data = await notion(`data_sources/${DS_ID}/query`, {
      filter: { property: "상태", select: { equals: "발행완료" } },
      sorts: [{ property: "날짜", direction: "descending" }],
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.results ?? []).map(mapColumn);
  } catch (e) {
    console.error("getColumns failed", e);
    return [];
  }
}

// slug로 단일 칼럼 (발행완료만)
export async function getColumnBySlug(slug: string): Promise<Column | null> {
  try {
    const data = await notion(`data_sources/${DS_ID}/query`, {
      filter: {
        and: [
          { property: "상태", select: { equals: "발행완료" } },
          { property: "slug", rich_text: { equals: slug } },
        ],
      },
    });
    const page = (data.results ?? [])[0];
    return page ? mapColumn(page) : null;
  } catch (e) {
    console.error("getColumnBySlug failed", e);
    return null;
  }
}

// 페이지 본문 블록 (페이지네이션 처리)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getBlocks(pageId: string): Promise<any[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks: any[] = [];
    let cursor: string | undefined;
    do {
      const qs = cursor
        ? `?start_cursor=${cursor}&page_size=100`
        : `?page_size=100`;
      const data = await notion(`blocks/${pageId}/children${qs}`);
      blocks.push(...(data.results ?? []));
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);
    return blocks;
  } catch (e) {
    console.error("getBlocks failed", e);
    return [];
  }
}

// ISO 날짜 → "2026.06.07"
export function formatDate(iso: string): string {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}
