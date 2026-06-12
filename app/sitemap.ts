import type { MetadataRoute } from "next";
import { getColumns } from "@/lib/notion";
import { PRODUCTS } from "@/lib/products";

const BASE = "https://masterbaek.vercel.app";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let cols: Awaited<ReturnType<typeof getColumns>> = [];
  try {
    cols = await getColumns();
  } catch {
    // 노션 일시 장애 시에도 정적 경로는 노출
  }

  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/columns`, priority: 0.9 },
    { url: `${BASE}/products`, priority: 0.8 },
    { url: `${BASE}/quiz`, priority: 0.8 },
    { url: `${BASE}/about`, priority: 0.7 },
    { url: `${BASE}/contact`, priority: 0.3 },
    ...cols.map((c) => ({
      url: `${BASE}/columns/${c.slug}`,
      lastModified: c.date ? new Date(c.date) : undefined,
      priority: 0.7,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${BASE}/products/${p.id}`,
      priority: 0.6,
    })),
  ];
}
