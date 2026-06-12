// OG 이미지용 구글 폰트 로더
// next/og(satori) 기본 폰트에 한글 글리프가 없어, 렌더링할 텍스트만큼만
// IBM Plex Sans KR 서브셋을 받아온다 (text= 파라미터로 용량 최소화)
export async function loadGoogleFont(text: string, weight = 600) {
  const url = `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error("og font load failed");
  const res = await fetch(resource[1]);
  if (!res.ok) throw new Error("og font fetch failed");
  return res.arrayBuffer();
}
