"use client";
import Link from "next/link";
import "./ShopByCategory.css";

const categories = [
  {
    name: "Bracelets",
    image: "/DSC02926.webp",
    href: "/collections/bracelets",
  },
  {
    name: "Pendants",
    image: "/Bzero18-2.webp",
    href: "/collections/pendants",
  },
  {
    name: "Earrings",
    image: "/NewArrivals-4.webp",
    href: "/collections/earrings",
  },
  {
    name: "Rings",
    image: "/Ring-2.webp",
    href: "/collections/rings",
  },
];

const ShopByCategory = () => {
  return (
    <section className="shop-category-section">
      <h2 className="shop-category-heading">Shop By Category</h2>

      <div className="shop-category-grid">
        {categories.map((cat) => (
          <Link
            href={cat.href}
            key={cat.name}
            className="shop-category-card"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="shop-category-image"
            />
            <div className="shop-category-overlay">
              <span className="shop-category-name">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;