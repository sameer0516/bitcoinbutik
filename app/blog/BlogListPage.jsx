import Link from "next/link";
import "./blog.css";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

const getImageUrl = (blog) => {
  if (!blog.image) return "/placeholder.jpg";
  const src = blog.image.startsWith("http") ? blog.image : `${API_URL}${blog.image}`;
  return src;
};

export default function BlogListPage({ blogs = [] }) {
  return (
    <div className="Blog">
      <div className="Blog-line"></div>
      <div className="Blog-container-Box-Image">
        <div className="container">
          <div className="row">
            <div className="About-title">
              <h2>Latest Blogs</h2>
            </div>

            {blogs.length === 0 ? (
              <p style={{ padding: "40px", textAlign: "center", width: "100%" }}>
                No blogs published yet.
              </p>
            ) : (
              blogs.map((blog) => {
                const slug = blog.urlHandle || blog.slug;
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-12 col-12"
                    key={slug}
                  >
                    <Link
                      href={`/blog/${slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="Blog-Section">
                        <div className="blog-img-wrapper">
                          <img
                            src={getImageUrl(blog)}
                            alt={blog.altTag || blog.title}
                          />
                        </div>
                        <div className="blog-content">
                          <div className="Blog-title">{blog.title}</div>
                          <div className="Blog-des">
                            {blog.metaDescription || ""}
                          </div>
                          <div className="blog-btn">
                            <span>Read More →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}