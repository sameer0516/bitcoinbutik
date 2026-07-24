"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./blog-detail.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogClient({ slug, initialBlog = null }) {
  const router = useRouter();
  const [blog, setBlog] = useState(initialBlog);
  const [loading, setLoading] = useState(!initialBlog);
  const [notFound, setNotFound] = useState(false);

  const skippedInitialFetch = useRef(false);

  useEffect(() => {
    if (!slug || slug === "placeholder") {
      setLoading(false);
      setNotFound(true);
      return;
    }

    if (!skippedInitialFetch.current && initialBlog) {
      skippedInitialFetch.current = true;
      setLoading(false);

      if (initialBlog.pageTitle || initialBlog.title) {
        document.title = initialBlog.pageTitle || initialBlog.title;
      }
      return;
    }
    skippedInitialFetch.current = true;

    setLoading(true);
    setNotFound(false);

    fetch(`${API_URL}/api/blogs/${slug}?t=${Date.now()}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        if (data && data.title) {
          setBlog(data);

          if (data.pageTitle || data.title) {
            document.title = data.pageTitle || data.title;
          }

          if (data.metaDescription) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
              metaDesc = document.createElement("meta");
              metaDesc.name = "description";
              document.head.appendChild(metaDesc);
            }
            metaDesc.content = data.metaDescription;
          }

          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) ogTitle.content = data.pageTitle || data.title;

          const ogDesc = document.querySelector('meta[property="og:description"]');
          if (ogDesc) ogDesc.content = data.metaDescription || "";

          let canonical = document.querySelector('link[rel="canonical"]');
          if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
          }
          canonical.href = `https://bitcoinbutik.com/blog/${data.urlHandle || slug}`;
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug, initialBlog]);

  if (loading) {
    return <div className="loading-text">Loading Article...</div>;
  }

  if (notFound || !blog) {
    return (
      <div className="error-text">
        <p>Blog not found.</p>
        <button className="blog-back-btn" onClick={() => router.push("/blog")}>
          ← Back to Blog
        </button>
      </div>
    );
  }

  const imageUrl = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${API_URL}${blog.image}`
    : "/placeholder.jpg";

  return (
    <div className="blog-detail-container">
      <button className="blog-back-btn" onClick={() => router.back()}>
        ← Back to Blog
      </button>

      {blog.image && (
        <div className="blog-cover-wrapper">
          <Image
            src={imageUrl}
            alt={blog.altTag || blog.title}
            fill
            className="blog-cover-image"
            unoptimized
          />
        </div>
      )}

      <h2 className="blog-title">{blog.title}</h2>

      <p className="blog-meta">
        By <span>{blog.author}</span> |{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="blog-detail-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}