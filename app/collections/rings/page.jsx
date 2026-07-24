import Link from 'next/link';
import Script from "next/script";
import "./rings.css";

const API_URL = "https://api.bitcoinbutik.com";
const MEDIA_URL = "https://api.bitcoinbutik.com";

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/rings";
const OG_IMAGE = "/Rings-3.webp";
const TITLE = "Shop Stylish Bitcoin Gold & Silver Rings for Women Online";
const DESCRIPTION =
    "Shop premium bitcoin rings and stylish crypto rings online. Explore gold & silver rings for women with modern and elegant designs, perfect for daily wear and gifting.";

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: "BitcoinButik",
        locale: "en_US",
        images: [
            {
                url: OG_IMAGE,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [OG_IMAGE],
        creator: "@bitcoin_butik",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

// ─── Helper ─────────────────────────────────────
const formatMediaUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${MEDIA_URL}/${path.replace(/^\//, '').replace(/\\/g, '/')}`;
};

// ─── SERVER FETCH ───────────────────────────────
async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/api/products`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const allProducts = await response.json();

    const filtered = allProducts.filter((p) => {
      const cat = p.category?.toLowerCase().trim();
      return cat === "ring" || cat === "rings";
    });

    const seen = new Set();
    const products = filtered.filter((p) => {
      if (seen.has(p.slug)) return false;
      seen.add(p.slug);
      return true;
    });

    console.log("Rings Products (after dedup):", products.length);

    return products;
  } catch (error) {
    console.log("Fetch Error:", error);
    return [];
  }
}

// ─── FAQ Data ───
const faqs = [
  {
    q: '1. What are bitcoin rings?',
    a: 'Bitcoin rings are jewelry pieces inspired by the Bitcoin symbol, representing innovation and modern digital identity.',
  },
  {
    q: '2. What are crypto rings?',
    a: 'Crypto rings are modern jewelry designs influenced by digital currencies and blockchain culture.',
  },
  {
    q: '3. Are bitcoin rings suitable for everyday wear?',
    a: 'Yes, they are designed to be lightweight, comfortable, and durable for daily use.',
  },
  {
    q: '4. Do you offer gold rings for women?',
    a: 'Yes, we offer a wide range of elegant and timeless gold rings for women.',
  },
  {
    q: '5. Are your rings suitable for both men and women?',
    a: 'Yes, our collection includes versatile designs for both men and women.',
  },
  {
    q: '6. What materials are used in your rings?',
    a: 'Our rings are crafted using high-quality materials and premium finishes for durability and shine.',
  },
  {
    q: '7. Do the rings tarnish over time?',
    a: 'Our rings are designed with tarnish-resistant finishes to maintain their appearance.',
  },
  {
    q: '8. Can I wear these rings to formal occasions?',
    a: 'Yes, many designs are suitable for both casual and formal events.',
  },
  {
    q: '9. Are Bitcoin rings a good gift option?',
    a: 'Yes, they make unique and meaningful gifts with a modern touch.',
  },
  {
    q: '10. What ring sizes are available?',
    a: 'We offer multiple sizes to ensure a comfortable and accurate fit.',
  },
  {
    q: '11. Can I stack multiple rings together?',
    a: 'Yes, stacking rings is a popular styling option and many designs support it.',
  },
  {
    q: '12. Are the rings lightweight?',
    a: 'Yes, they are designed for comfort even during extended wear.',
  },
  {
    q: '13. Do you offer minimal ring designs?',
    a: 'Yes, we have simple and clean designs for a subtle, everyday look.',
  },
  {
    q: '14. Do you offer bold or statement rings?',
    a: 'Yes, we offer standout designs for those who prefer a bold style.',
  },
  {
    q: '15. How should I care for my ring?',
    a: 'Keep it clean, avoid harsh chemicals, and store it safely when not in use.',
  },
  {
    q: '16. Are your rings durable?',
    a: 'Yes, they are built with strong materials for long-lasting wear.',
  },
  {
    q: '17. Can women wear Bitcoin rings?',
    a: 'Absolutely, we offer elegant Bitcoin-inspired designs for women.',
  },
  {
    q: '18. What makes Bitcoin rings unique?',
    a: 'They combine fashion with symbolic meaning tied to digital innovation.',
  },
  {
    q: '19. Are these rings trendy?',
    a: 'Yes, Bitcoin-inspired jewelry is a growing trend in modern fashion.',
  },
  {
    q: '20. Why choose Bitcoin Butik rings?',
    a: 'Because they offer a unique combination of style, quality, and meaningful design inspired by the future.',
  },
];

// ─── JSON-LD Schema ───
const schemaData = [
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "BitcoinButik",
        url: `${SITE_URL}/`,
        logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
        },
        sameAs: [
            "https://www.instagram.com/bitcoinbutik/",
            "https://twitter.com/bitcoin_butik",
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.9,
            reviewCount: 130,
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: {
            "@id": `${SITE_URL}/#website`,
        },
        about: {
            "@id": `${SITE_URL}/#organization`,
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: OG_IMAGE,
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Jewelry",
                item: `${SITE_URL}/collections`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Rings",
                item: PAGE_URL,
            },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q.replace(/^\d+\.\s*/, ""),
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    },
];

// ─── MAIN PAGE ───
export default async function RingsPage() {

  const products = await getProducts();

  const formattedProducts = products.map((p) => ({
    id: p._id,
    name: p.title,
    slug: p.slug,
    price: p.price,
    goldPrice: p.goldPrice,
    images: (p.image || []).map(formatMediaUrl).filter(Boolean),
    video: formatMediaUrl(p.video),
    material: p.category,
    tagText: p.tagText || null,
    description: p.description,
    type: p.type,
    stock: p.stock,
  }));

  const heroProduct1 = formattedProducts.find(
    (p) => p.slug === 'bitcoin-pure-silver-ring'
  );

  const grid1Products = formattedProducts.slice(0, 4);
  const niche1Products = formattedProducts.slice(4, 8);
  const nicheNewProducts = formattedProducts.slice(8, 12);

  return (
    <>
      {/* Dynamic JSON-LD schema rendering */}
      {schemaData.map((schema, index) => (
          <Script
              key={schema["@id"] || index}
              id={`schema-${schema["@type"]}-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
      ))}

      <div className="bzero-page-container">
        <div className="bzero-main-content">

          <header className="bzero-header">
            <div className="bzero-header-left">
              <span className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/collections">Jewelry</Link> / Rings
              </span>
              <h1 className="bzero-title">
               Stylish Bitcoin Gold & Silver Rings for Women<sup>{formattedProducts.length}</sup>
              </h1>
            </div>
          </header>

          {/* ─── GRID ─── */}
          <main className="product-grid-wrapper">
            <div className="product-grid">

              <div className="product-grid-left">
                {grid1Products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/collections/rings/${product.slug}`}
                    className="product-card-link"
                  >
                    <div className="product-card">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price-container">
                          {product.goldPrice ? (
                            <p className="product-price-range">
                              ${product.price?.toFixed(2)} – ${product.goldPrice?.toFixed(2)}
                            </p>
                          ) : (
                            <p className="product-price">${product.price?.toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* HERO */}
              <div className="product-grid-right">
                <div className="hero-image-container">
                  {heroProduct1 ? (
                    <Link href={`/collections/rings/${heroProduct1.slug}`}>
                      <img
                        src="/DSC02974.webp"
                        alt="Model wearing Rings"
                        style={{ cursor: 'pointer', width: '100%' }}
                      />
                    </Link>
                  ) : (
                    <img src="/DSC02974.webp" alt="Model wearing Rings" style={{ width: '100%' }} />
                  )}
                </div>
              </div>

            </div>
          </main>

          {/* ─── SECTION 1 ─── */}
          {niche1Products.length > 0 && (
            <section className="niche-section-wrapper">
              <div className="niche-grid">
                {niche1Products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/collections/rings/${product.slug}`}
                    className="product-card-link"
                  >
                    <div className="product-card">
                      <img src={product.images[0]} alt={product.name} />
                      <h3>{product.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ─── SECTION 2 ─── */}
          {nicheNewProducts.length > 0 && (
            <section className="niche-section-wrapper">
              <div className="niche-grid">
                {nicheNewProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/collections/rings/${product.slug}`}
                    className="product-card-link"
                  >
                    <div className="product-card">
                      <img src={product.images[0]} alt={product.name} />
                      <h3>{product.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ─── 2 Dropdowns: Content + FAQs ─── */}
          <div className="men-faq-wrapper">

            {/* Dropdown 1: Bitcoin Rings Content */}
            <details className="men-faq-item">
              <summary className="men-faq-header">
                Bitcoin Rings & Gold Rings for Women
              </summary>
              <div className="men-faq-content">
                <h1>Bitcoin Rings & Gold Rings for Women – Modern Luxury with Meaning</h1>

                <p>
                  At <strong>Bitcoin Butik</strong>, our rings collection is thoughtfully
                  designed to bring together timeless elegance and a modern sense of
                  identity. Whether you are searching for <strong>bitcoin rings</strong>{" "}
                  or beautifully crafted <strong>gold rings for women</strong>, our
                  collection offers a refined blend of style, symbolism, and
                  sophistication that fits today's evolving fashion landscape.
                </p>
                <p>
                  Each ring is more than just a piece of jewelry—it's a powerful
                  expression of confidence, individuality, and forward-thinking
                  values. Created for both men and women, our designs combine premium
                  craftsmanship with meaningful inspiration, making them perfect for
                  daily wear as well as special occasions. Every detail is carefully
                  considered to ensure that each ring not only looks elegant but also
                  carries a deeper sense of purpose.
                </p>
                <p>
                  Our collection seamlessly merges traditional jewelry artistry with
                  the innovative spirit of cryptocurrency. From classic{" "}
                  <strong>rings for ladies in gold</strong> that highlight timeless
                  beauty to bold, modern <strong>Bitcoin-inspired designs</strong>{" "}
                  that stand out, every piece reflects a unique balance between
                  heritage and innovation.
                </p>
                <p>
                  At Bitcoin Butik, we believe jewelry should tell a story. That's why
                  our rings are designed to represent more than style—they reflect
                  your mindset, your confidence, and your connection to a future
                  shaped by technology and individuality. Whether you prefer a
                  subtle, minimal look or a striking statement piece, our collection
                  offers versatile options that elevate your style while expressing
                  who you are.
                </p>

                <h2>Explore Bitcoin Rings & Bitcoin Rings Collection</h2>
                <p>
                  Our collection at <strong>Bitcoin Butik</strong> is thoughtfully
                  curated to offer a wide variety of designs that suit different
                  personalities, preferences, and occasions. Whether you are drawn to
                  minimal elegance or bold, eye-catching styles, you'll find a ring
                  that reflects your identity and enhances your personal style. Each
                  piece is designed to balance aesthetics with meaning, allowing you
                  to wear jewelry that feels both stylish and purposeful.
                </p>
                <p>
                  We focus on creating rings that are not only visually appealing but
                  also versatile enough to fit seamlessly into your everyday life.
                  From subtle designs that add a refined touch to statement pieces
                  that command attention, our collection ensures there is something
                  for everyone.
                </p>
                <p><strong>Our collection includes:</strong></p>
                <ul>
                  <li><strong>Bitcoin rings</strong> – Iconic designs featuring the Bitcoin symbol, perfect for expressing modern identity</li>
                  <li><strong>Gold rings for women</strong> – Elegant, timeless pieces crafted with a luxurious and refined finish</li>
                  <li><strong>Rings for ladies in gold</strong> – Classic designs that highlight sophistication and feminine style</li>
                  <li><strong>Minimal rings</strong> – Clean, simple designs ideal for everyday wear and effortless styling</li>
                  <li><strong>Statement rings</strong> – Bold, distinctive pieces designed to stand out with confidence</li>
                </ul>
                <p>
                  Every ring is crafted with attention to detail and precision,
                  ensuring it pairs effortlessly with both casual and formal
                  outfits. Whether you're dressing for a relaxed day or a special
                  event, these rings serve as versatile additions to your jewelry
                  collection—enhancing your look while reflecting your personality
                  and modern mindset.
                </p>

                <h2>Designed for Style, Comfort & Everyday Wear</h2>
                <p>
                  At <strong>Bitcoin Butik</strong>, our rings are thoughtfully
                  crafted to deliver the perfect balance of style, comfort, and
                  durability. We understand that jewelry should feel as good as it
                  looks, which is why every ring is designed to fit seamlessly into
                  your daily lifestyle without compromising on elegance or quality.
                </p>
                <p>
                  Each piece is created with precision and attention to detail,
                  ensuring a smooth, refined finish that feels comfortable on your
                  hand throughout the day. Whether you're at work, out with friends,
                  or attending a special event, our rings are made to complement your
                  routine effortlessly.
                </p>
                <p><strong>Key features include the following:</strong></p>
                <ul>
                  <li><strong>Lightweight and comfortable</strong> for extended wear</li>
                  <li><strong>Smooth, polished finishing</strong> for a premium feel</li>
                  <li><strong>Easy to pair</strong> with a wide range of outfits and accessories</li>
                  <li><strong>Versatile designs</strong> suitable for both modern and classic fashion</li>
                </ul>
                <p>
                  Whether worn as a standalone statement or stacked with other rings
                  for a layered look, our designs enhance your overall style with
                  ease. With <strong>Bitcoin Butik</strong>, your ring becomes more
                  than just an accessory—it becomes a natural and reliable part of
                  your everyday expression.
                </p>

                <h2>Premium Craftsmanship & High-Quality Materials</h2>
                <p>
                  At <strong>Bitcoin Butik</strong>, quality is the foundation of
                  every ring we create. Our designs are crafted using premium
                  materials such as gold and high-quality finishes, ensuring each
                  piece delivers exceptional durability, long-lasting shine, and a
                  refined luxurious feel. Every ring is carefully developed to
                  maintain its beauty while standing up to everyday wear.
                </p>
                <p>
                  We combine traditional craftsmanship with modern techniques to
                  achieve precision, strength, and elegance in every detail. From the
                  initial design to the final finish, each step reflects our
                  commitment to excellence and long-term value.
                </p>
                <p><strong>Our craftsmanship highlights include the following:</strong></p>
                <ul>
                  <li><strong>Precision-crafted detailing</strong> for a flawless and polished finish</li>
                  <li><strong>Strong and durable construction</strong> designed for everyday use</li>
                  <li><strong>Tarnish-resistant finishes</strong> that help preserve shine over time</li>
                  <li><strong>Long-lasting quality and elegance</strong> for a premium experience</li>
                </ul>
                <p>
                  Each ring is built not just to look beautiful but to retain its
                  quality and character over time—making it a meaningful and lasting
                  addition to your jewelry collection.
                </p>

                <h2>A Symbol of Identity & Modern Thinking</h2>
                <p>
                  Bitcoin rings are more than just stylish accessories—they represent
                  a powerful mindset rooted in innovation, independence, and
                  forward-thinking values. At <strong>Bitcoin Butik</strong>, each
                  ring is designed to go beyond appearance, offering a deeper meaning
                  that connects with today's evolving digital world.
                </p>
                <p>
                  Wearing a bitcoin ring reflects your belief in progress and your
                  confidence in embracing new ideas. It becomes a personal statement
                  that highlights not only your style but also your perspective on
                  technology, finance, and the future.
                </p>
                <p><strong>Wearing these rings symbolizes the following:</strong></p>
                <ul>
                  <li><strong>Belief in innovation and digital evolution</strong> shaping the modern world</li>
                  <li><strong>Confidence and individuality</strong> expressed through meaningful design</li>
                  <li><strong>Connection to modern financial thinking</strong> and decentralized systems</li>
                  <li><strong>A forward-looking lifestyle</strong> driven by growth and new opportunities</li>
                </ul>
                <p>
                  Every ring from <strong>Bitcoin Butik</strong> allows you to express
                  who you are with purpose and style—transforming jewelry into a
                  reflection of your identity and vision for the future.
                </p>

                <h2>Perfect Gift for Every Occasion</h2>
                <p>
                  Rings have always held a special place in gifting, symbolizing
                  connection, commitment, and lasting memories. With Bitcoin-inspired
                  designs, this tradition takes on a modern edge—blending timeless
                  elegance with forward-thinking meaning. At{" "}
                  <strong>Bitcoin Butik</strong>, each ring is thoughtfully created to
                  be more than just a beautiful accessory; it's a meaningful
                  expression of identity, progress, and individuality.
                </p>
                <p>
                  Whether you're celebrating a personal milestone or looking for
                  something unique, our rings offer a distinctive way to mark
                  important moments. Their combination of style and symbolism makes
                  them a memorable gift that stands out from traditional options.
                </p>
                <p><strong>Our rings are perfect for:</strong></p>
                <ul>
                  <li><strong>Birthdays and anniversaries</strong> – Celebrate special moments with a meaningful touch</li>
                  <li><strong>Celebrating achievements</strong> – Recognize success with a symbol of growth and confidence</li>
                  <li><strong>Special milestones</strong> – Mark life's important events with lasting elegance</li>
                  <li><strong>Unique and future-focused gifting</strong> – Give something modern, distinctive, and thoughtful</li>
                </ul>
                <p>
                  With <strong>Bitcoin Butik</strong>, you're not just giving
                  jewelry—you're gifting a story, a mindset, and a symbol of identity
                  that will be valued for years to come.
                </p>

                <h2>Care & Maintenance Guide</h2>
                <p>To keep your ring looking its best:</p>
                <ul>
                  <li>Store in a clean, dry place</li>
                  <li>Avoid exposure to water and chemicals</li>
                  <li>Clean gently with a soft cloth</li>
                  <li>Remove before heavy activities</li>
                </ul>
                <p>Proper care ensures long-lasting shine and durability.</p>

                <h2>Size Guide</h2>
                <p>Finding the perfect fit is essential:</p>
                <ul>
                  <li>Measure your finger at the end of the day</li>
                  <li>Avoid measuring when hands are cold</li>
                  <li>Use a ring size chart for accuracy</li>
                  <li>Choose a slightly larger size if between sizes</li>
                </ul>

                <h2>Shipping & Returns</h2>
                <ul>
                  <li>Fast and reliable shipping</li>
                  <li>Secure packaging for protection</li>
                  <li>Easy return and exchange process</li>
                  <li>Customer support available for assistance</li>
                </ul>

                <h2>Our Promise</h2>
                <p>At Bitcoin Butik, we are committed to:</p>
                <ul>
                  <li>Delivering premium quality jewelry</li>
                  <li>Offering unique and meaningful designs</li>
                  <li>Ensuring customer satisfaction</li>
                  <li>Providing a seamless shopping experience</li>
                </ul>

                <h2>Why Choose Bitcoin Butik for Rings?</h2>
                <p>
                  At <strong>Bitcoin Butik</strong>, we go beyond traditional
                  jewelry by creating rings that blend timeless elegance with modern
                  meaning. Our collection is thoughtfully designed for individuals
                  who value style, innovation, and self-expression. Each ring
                  reflects a careful balance of premium craftsmanship and
                  Bitcoin-inspired symbolism, making every piece truly distinctive.
                </p>
                <p><strong>What sets us apart:</strong></p>
                <ul>
                  <li><strong>Exclusive bitcoin and Bitcoin-inspired designs</strong> – Unique styles that reflect modern identity</li>
                  <li><strong>Premium craftsmanship and high-quality materials</strong> – Built for durability, comfort, and lasting shine</li>
                  <li><strong>Elegant gold rings for women & modern styles for men</strong> – Designed to suit diverse tastes and preferences</li>
                  <li><strong>Wide variety from minimal to bold designs</strong> – Perfect for every personality and occasion</li>
                  <li><strong>Trusted destination for modern jewelry</strong> – Known for quality, style, and meaningful design</li>
                </ul>
                <p>
                  Every ring at <strong>Bitcoin Butik</strong> is created to combine
                  beauty, durability, and purpose—giving you more than just jewelry.
                  It's a statement of confidence, individuality, and a
                  forward-thinking lifestyle.
                </p>

                <h2>Style Your Rings with Confidence</h2>
                <p>
                  Make your rings a natural part of your everyday style with
                  effortless combinations that reflect your personality. At{" "}
                  <strong>Bitcoin Butik</strong>, our designs are created to adapt to
                  your look—whether you prefer simplicity or bold expression.
                </p>
                <p><strong>Style tips to elevate your look:</strong></p>
                <ul>
                  <li><strong>Wear a single ring</strong> for a clean, minimal aesthetic</li>
                  <li><strong>Stack multiple rings</strong> for a modern, layered style</li>
                  <li><strong>Pair with bracelets or watches</strong> for a coordinated finish</li>
                  <li><strong>Mix gold and contemporary designs</strong> to create contrast and depth</li>
                </ul>
                <p>
                  Your ring becomes more than just an accessory—it becomes a{" "}
                  <strong>signature element of your personal style</strong>, adding
                  confidence and character to every outfit.
                </p>

                <h2>Shop Bitcoin Rings & Gold Rings for Women Today</h2>
                <p>
                  Discover rings that blend <strong>elegance, meaning, and modern
                  identity</strong>. Whether you're looking for timeless gold styles
                  or bold Bitcoin-inspired designs, find the perfect piece that
                  reflects who you are—only at Bitcoin Butik, where you can buy{" "}
                  <a href="https://bitcoinbutik.com/">Bitcoin jewelry</a> that
                  represents your belief and style.
                </p>
              </div>
            </details>

            {/* Dropdown 2: FAQs */}
            <details className="men-faq-item">
              <summary className="men-faq-header">
                Frequently Asked Questions
              </summary>
              <div className="men-faq-content">
                
                {faqs.map((item, idx) => (
                  <div key={idx} className="men-faq-block">
                    <h4>{item.q}</h4>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </details>
          </div>

        </div>
      </div>
    </>
  );
}