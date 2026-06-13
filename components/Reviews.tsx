import type { Review } from "@/lib/reviews";

type Props = {
  reviews: Review[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** prod-bg 배경 위에 올릴 때 카드 대비를 위해 흰 배경 섹션으로 둘지 */
  plain?: boolean;
};

export default function Reviews({
  reviews,
  eyebrow = "REVIEWS",
  title = "수강생이 직접 남긴 후기",
  subtitle = "네이버 지도와 스마트스토어에 올라온 실제 후기입니다.",
  plain = false,
}: Props) {
  if (reviews.length === 0) return null;

  return (
    <section className={plain ? "block" : "block prod-bg"}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <figure className="review-card" key={i}>
              <div className="review-stars" aria-label="별점 5점 만점에 5점">
                ★★★★★
              </div>
              {r.tag && <div className="review-tag">{r.tag}</div>}
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <span className="review-author">{r.author}</span>
                <span className="review-meta">{r.meta}</span>
                <span className="review-source">{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
