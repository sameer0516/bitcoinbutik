import Link from "next/link";
import "./Sitemap.css";

const sitemapData = [
  {
    heading: "HOME",
    links: [
      { label: "Home", href: "/" },
      { label: "About US", href: "/about/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQS", href: "/faqs" },
      { label: "Terms and Conditions", href: "/terms/" },
      { label: "Contact", href: "/contact/" },
      { label: "Custom Jewelry", href: "/custom-bitcoin-jewellery/" },
    ],
  },
  {
    heading: "SHOP",
    links: [
      { label: "Collection", href: "collections/" },
      { label: "Pendants", href: "/collections/pendants/" },
      { label: "Mens Pendants", href: "/collections/pendants/pendant-mens/" },
      { label: "Womens Pendants", href: "/collections/pendants/pendant-women/" },
      { label: "Bracelets", href: "/collections/bracelets/" },
      { label: "Rings", href: "/collections/rings/" },
      { label: "Earrings", href: "/collections/earrings/" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "New Arrival", href: "/new-arrival/" },
      { label: "About", href: "/about/" },
      { label: "Return and Exchange Policy", href: "/return/" },
      { label: "Return & Cancellation Policy", href: "/return-cancellation-policy/" },
      { label: "Care Instructions", href: "/care-instructions/" },
      { label: "Privacy policy", href: "/privacy-policy/" },
      { label: "Gifts", href: "/bitcoin-jewellery-gifts/" },
    ],
  },
];

export default function SitemapList() {
  return (
    <>
    <div className="sitemap-page">
      <div className="sitemap-hero">
        <div className="sitemap-hero-overlay">
          <h1>SITEMAP</h1>
        </div>
      </div>

      <div className="sitemap-content">
        {sitemapData.map((section) => (
          <div className="sitemap-column" key={section.heading}>
            <h2 className="sitemap-heading">{section.heading}</h2>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}