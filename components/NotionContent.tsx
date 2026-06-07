// 노션 블록 → 사이트 디자인으로 렌더 (본문 텍스트만, 디자인은 사이트 스타일)
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderRich(rich: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (rich ?? []).map((r: any, i: number) => {
    const a = r.annotations ?? {};
    let node: React.ReactNode = r.plain_text;
    if (a.code) node = <code>{node}</code>;
    if (a.bold) node = <strong>{node}</strong>;
    if (a.italic) node = <em>{node}</em>;
    if (r.href)
      node = (
        <a href={r.href} target="_blank" rel="noopener noreferrer">
          {node}
        </a>
      );
    return <React.Fragment key={i}>{node}</React.Fragment>;
  });
}

function renderBlock(b: Block) {
  switch (b.type) {
    // 페이지 제목이 이미 h1이므로 본문 헤딩은 h2부터
    case "heading_1":
      return <h2 key={b.id}>{renderRich(b.heading_1.rich_text)}</h2>;
    case "heading_2":
      return <h2 key={b.id}>{renderRich(b.heading_2.rich_text)}</h2>;
    case "heading_3":
      return <h3 key={b.id}>{renderRich(b.heading_3.rich_text)}</h3>;
    case "quote":
      return <blockquote key={b.id}>{renderRich(b.quote.rich_text)}</blockquote>;
    case "divider":
      return <hr key={b.id} />;
    case "paragraph": {
      const rt = b.paragraph.rich_text;
      if (!rt || rt.length === 0) return null; // 빈 문단(줄바꿈용)은 생략
      return <p key={b.id}>{renderRich(rt)}</p>;
    }
    default:
      return null;
  }
}

export default function NotionContent({ blocks }: { blocks: Block[] }) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    // 연속된 리스트 아이템을 ul/ol로 묶기
    if (b.type === "bulleted_list_item" || b.type === "numbered_list_item") {
      const type = b.type;
      const items: React.ReactNode[] = [];
      while (i < blocks.length && blocks[i].type === type) {
        items.push(
          <li key={blocks[i].id}>{renderRich(blocks[i][type].rich_text)}</li>
        );
        i++;
      }
      out.push(
        type === "numbered_list_item" ? (
          <ol key={b.id}>{items}</ol>
        ) : (
          <ul key={b.id}>{items}</ul>
        )
      );
      continue;
    }
    out.push(renderBlock(b));
    i++;
  }
  return <>{out}</>;
}
