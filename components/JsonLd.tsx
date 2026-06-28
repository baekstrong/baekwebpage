// 구조화 데이터(JSON-LD) 출력용. 페이지에서 data 객체만 넘기면 됨.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // < 만 이스케이프하면 </script> 브레이크아웃(JSON-LD의 유일한 주입 경로) 차단
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
