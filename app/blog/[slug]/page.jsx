import BlogClient from "./BlogClient";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

async function getBlogs() {
  try {
    if (!API_URL) return [];
    const res = await fetch(`${API_URL}/api/blogs`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const staticSlugs = blogs
    .filter((b) => b.urlHandle || b.slug)
    .map((blog) => ({ slug: blog.urlHandle || blog.slug }));

  return [{ slug: "placeholder" }, ...staticSlugs];
}

async function getBlog(slug) {
  if (!slug || slug === "placeholder" || !API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.title) return null;
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Blog | Bitcoinbutik" };
  }

  const imageUrl = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${API_URL}${blog.image}`
    : null;

  return {
    title: blog.pageTitle || blog.title,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://bitcoinbutik.com/blog/${blog.urlHandle || blog.slug}`,
    },
    openGraph: {
      title: blog.pageTitle || blog.title,
      description: blog.metaDescription,
      url: `https://bitcoinbutik.com/blog/${blog.urlHandle || blog.slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, alt: blog.altTag || blog.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.pageTitle || blog.title,
      description: blog.metaDescription,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

function parseJsonLdBlocks(scriptStr) {
  if (!scriptStr || !scriptStr.trim()) return [];
  const blocks = scriptStr
    .split(/}\s*\n\s*{/)
    .map((block, i, arr) => {
      if (arr.length === 1) return block.trim();
      if (i === 0) return block.trim() + "}";
      if (i === arr.length - 1) return "{" + block.trim();
      return "{" + block.trim() + "}";
    })
    .filter((block) => block.trim().startsWith("{"));

  const valid = [];
  blocks.forEach((jsonStr) => {
    try {
      JSON.parse(jsonStr);
      valid.push(jsonStr);
    } catch (e) {
      console.warn("Invalid JSON-LD block skipped:", e.message);
    }
  });
  return valid;
}

export default async function Page({ params }) {
  const { slug } = await params;
  const initialBlog = await getBlog(slug);
  const jsonLdBlocks = initialBlog ? parseJsonLdBlocks(initialBlog.script) : [];

  return (
    <>
      {jsonLdBlocks.map((jsonStr, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonStr }}
        />
      ))}
      <BlogClient slug={slug} initialBlog={initialBlog} />
    </>
  );
}