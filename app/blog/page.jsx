import BlogListPage from "./BlogListPage";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const metadata = {
  title: "Blog | Bitcoinbutik",
  description: "Read the latest blogs on jewellery, styling tips, gemstones and more.",
  alternates: { canonical: "/blog" },
};

async function getBlogs() {
  try {
    if (!API_URL) return [];
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const blogs = await getBlogs();
  return <BlogListPage blogs={blogs} />;
}