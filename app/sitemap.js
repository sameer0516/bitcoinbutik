// app/sitemap.js

export const dynamic = "force-static";

const SITE_URL = "https://www.bitcoinbutik.com";
const API_URL = "https://api.bitcoinbutik.com";

// ─── API category → actual Next.js route ────────────────────────────────────
const getRoute = (category = "") => {
  const cat = category.toLowerCase().trim();

  if (cat.includes("earring")) return "/collections/earrings";
  if (cat === "ring" || cat === "rings") return "/collections/rings";
  if (cat.includes("bracelet")) return "/collections/bracelets";
  if (cat.includes("woman") || cat.includes("women")) return "/collections/pendants/pendant-women";
  if (cat === "man" || cat === "men") return "/collections/pendants/pendant-mens";
  if (cat.includes("man pendant") || cat.includes("men pendant")) return "/collections/pendants/pendant-mens";
  if (cat.includes("pendant")) return "/collections/pendants/pendant-women";

  return null;
};

export default async function sitemap() {

  // ── Static pages ──
  const staticPages = [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/collections/pendants/pendant-women`, priority: 0.9 },
    { url: `${SITE_URL}/collections/pendants/pendant-mens`, priority: 0.9 },
    { url: `${SITE_URL}/collections/rings`, priority: 0.9 },
    { url: `${SITE_URL}/collections/earrings`, priority: 0.9 },
    { url: `${SITE_URL}/collections/bracelets`, priority: 0.9 },
    { url: `${SITE_URL}/new-arrival`, priority: 0.8 },
    { url: `${SITE_URL}/blog`, priority: 0.8 },
    { url: `${SITE_URL}/about`, priority: 0.7 },
    { url: `${SITE_URL}/return`, priority: 0.6 },
    { url: `${SITE_URL}/faqs`, priority: 0.6 },
    { url: `${SITE_URL}/privacy`, priority: 0.5 },
    { url: `${SITE_URL}/terms`, priority: 0.5 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));

  // ── Product pages ──
  let productPages = [];

  try {
    const res = await fetch(`${API_URL}/api/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`API ${res.status}`);

    const products = await res.json();
    const seenSlugs = new Set();

    productPages = products
      .map((product) => {
        if (!product.slug) return null;
        if (seenSlugs.has(product.slug)) return null;
        seenSlugs.add(product.slug);

        const route = getRoute(product.category);
        if (!route) return null;

        return {
          url: `${SITE_URL}${route}/${product.slug}`,
          lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        };
      })
      .filter(Boolean);

  } catch (err) {
    console.error("Sitemap product fetch failed:", err);
  }

  // ── Blog pages ─────────────────────────────────────────────────────────────
  let blogPages = [];

  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`API ${res.status}`);

    const blogs = await res.json();
    const seenBlogSlugs = new Set();

    blogPages = (Array.isArray(blogs) ? blogs : [])
      .map((blog) => {
        const slug = blog.urlHandle || blog.slug;
        if (!slug) return null;
        if (seenBlogSlugs.has(slug)) return null;
        seenBlogSlugs.add(slug);

        return {
          url: `${SITE_URL}/blog/${slug}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        };
      })
      .filter(Boolean);

  } catch (err) {
    console.error("Sitemap blog fetch failed:", err);
  }

  return [...staticPages, ...productPages, ...blogPages];
}