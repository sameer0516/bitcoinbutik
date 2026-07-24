import Link from 'next/link';
import Script from "next/script";
import "./bracelets.css";

const API_URL = "https://api.bitcoinbutik.com";
const MEDIA_URL = "https://api.bitcoinbutik.com";
const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/bracelets";
const OG_IMAGE = "/DSC02926.webp";
const TITLE = "Shop Gold & Silver Bitcoin Bracelets for Women Online";
const DESCRIPTION =
    "Shop gold & silver Bitcoin bracelets for women with stylish crypto designs. Explore modern and elegant bracelets perfect for daily wear and gifting. Order online today.";

// ─── SEO Metadata + Canonical ───────────────────
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

// ─── Server Fetch ────────────────────────────────
async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products?category=Bracelets`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) return [];
        return await response.json();
    } catch {
        return [];
    }
}

// ─── FAQ Data ─────────────────────────────────────
const faqs = [
    {
        q: '1. What are Bitcoin bracelets?',
        a: 'Bitcoin bracelets are modern jewelry pieces inspired by cryptocurrency, often featuring the Bitcoin symbol as a representation of innovation and digital identity.',
    },
    {
        q: '2. Are Bitcoin bracelets suitable for everyday wear?',
        a: 'Yes, they are designed to be lightweight, comfortable, and durable for daily use.',
    },
    {
        q: '3. Do your bracelets tarnish over time?',
        a: 'Our bracelets feature high-quality, tarnish-resistant finishes to help maintain their shine.',
    },
    {
        q: '4. Are these bracelets suitable for both men and women?',
        a: 'Yes, our collection includes unisex designs suitable for all styles and preferences.',
    },
    {
        q: '5. What materials are used in your bracelets?',
        a: 'We use premium materials with high-quality finishes to ensure durability and long-lasting elegance.',
    },
    {
        q: '6. Do you offer gold bracelets for women?',
        a: 'Yes, we offer a wide range of elegant and timeless gold bracelets designed specifically for women.',
    },
    {
        q: '7. How do I choose the right bracelet size?',
        a: 'Measure your wrist and add a small allowance for comfort. Refer to our sizing guide for accuracy.',
    },
    {
        q: '8. Can I layer multiple bracelets together?',
        a: 'Absolutely! Layering bracelets is a popular trend that creates a stylish and modern look.',
    },
    {
        q: '9. Are Bitcoin bracelets a good gift idea?',
        a: 'Yes, they make unique and meaningful gifts, especially for those interested in technology and finance.',
    },
    {
        q: '10. Do your bracelets come with secure clasps?',
        a: 'Yes, all our bracelets are designed with secure closures for safe and comfortable wear.',
    },
    {
        q: '11. Can I wear my bracelet with other jewelry?',
        a: 'Yes, our bracelets are designed to pair beautifully with rings, watches, and other accessories.',
    },
    {
        q: '12. Are your bracelets lightweight?',
        a: 'Yes, they are crafted to be lightweight and comfortable for all-day wear.',
    },
    {
        q: '13. How should I clean my bracelet?',
        a: 'Clean gently with a soft cloth and avoid harsh chemicals or abrasive materials.',
    },
    {
        q: '14. Are your designs minimal or bold?',
        a: 'We offer both minimal designs for everyday wear and bold styles for statement looks.',
    },
    {
        q: '15. Can I wear bracelets for formal occasions?',
        a: 'Yes, our elegant designs are suitable for both casual and formal events.',
    },
    {
        q: '16. Do you offer modern bracelet styles?',
        a: 'Yes, our collection includes contemporary and Bitcoin-inspired designs for a modern look.',
    },
    {
        q: '17. Are gold bracelets still trending?',
        a: 'Yes, gold bracelets remain timeless and continue to be a popular fashion choice.',
    },
    {
        q: '18. What makes Bitcoin Butik bracelets unique?',
        a: 'Our bracelets combine modern Bitcoin-inspired design with premium craftsmanship and meaningful symbolism.',
    },
    {
        q: '19. Can I gift a bracelet for special occasions?',
        a: "Yes, they are perfect for birthdays, anniversaries, achievements, and milestones.",
    },
    {
        q: '20. Are your bracelets durable?',
        a: 'Yes, they are designed with strong construction to ensure long-lasting wear and quality.',
    },
];

// ─── JSON-LD Schema ────────────────────────────────
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
            reviewCount: 200,
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
                name: "Bracelets",
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

// ─── Main Page ───────────────────────────────────
export default async function BraceletsPage() {

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
        grams: p.grams,
        hasSize: p.hasSize !== false,
        hasType: p.hasType !== false,
        sizes: p.sizes || [],
    }));

    // Hero product
    const heroProduct1 = formattedProducts.find(
        (p) => p.slug === 'bitcoin-eternal-spark-bracelet'
    );

    // Sections
    const grid1Products = formattedProducts.slice(0, 4);
    const niche1Products = formattedProducts.slice(4, 8);
    const nicheNewProducts = formattedProducts.slice(8, 12);
    const niche2Products = formattedProducts.slice(16, 20);

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

                    {/* ─── Header ─── */}
                    <header className="bzero-header">
                        <div className="bzero-header-left">
                            <span className="breadcrumb">
                                <Link href="/">Home</Link> / <Link href="/collections">Jewelry</Link> / Bracelets
                            </span>
                            <h1 className="bzero-title">
                                Stylish Gold & Silver Bitcoin Bracelets for Women <sup>{formattedProducts.length}</sup>
                            </h1>
                        </div>
                    </header>

                    {/* ─── Main Grid — 4 Products + Hero Image ─── */}
                    <main className="product-grid-wrapper">
                        <div className="product-grid">

                            <div className="product-grid-left">
                                {grid1Products.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/collections/bracelets/${product.slug}`}
                                        className="product-card-link"
                                    >
                                        <div className="product-card">
                                            {product.images[0] && (
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="product-image"
                                                />
                                            )}
                                            {product.tagText && (
                                                <span className="product-tag">{product.tagText}</span>
                                            )}
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

                            {/* Hero Image */}
                            <div className="product-grid-right">
                                <div className="hero-image-container">
                                    {heroProduct1 ? (
                                        <Link href={`/collections/bracelets/${heroProduct1.slug}`}>
                                            <img
                                                src="/DSC02926.webp"
                                                alt="Model wearing Bracelets"
                                                style={{ cursor: 'pointer', width: '100%' }}
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src="/DSC02926.webp"
                                            alt="Model wearing Bracelets"
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    </main>

                    {/* ─── Niche Section 1 ─── */}
                    <section className="niche-section-wrapper">
                        <div className="niche-grid">
                            {niche1Products.map((product) => (
                                <Link
                                    key={`${product.id}-a`}
                                    href={`/collections/bracelets/${product.slug}`}
                                    className="product-card-link"
                                >
                                    <div className="product-card">
                                        {product.images[0] && (
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        )}
                                        {product.tagText && (
                                            <span className="product-tag">{product.tagText}</span>
                                        )}
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
                    </section>

                    {/* ─── Niche Section — New Products ─── */}
                    <section className="niche-section-wrapper">
                        <div className="niche-grid">
                            {nicheNewProducts.map((product) => (
                                <Link
                                    key={`${product.id}-new`}
                                    href={`/collections/bracelets/${product.slug}`}
                                    className="product-card-link"
                                >
                                    <div className="product-card">
                                        {product.images[0] && (
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        )}
                                        {product.tagText && (
                                            <span className="product-tag">{product.tagText}</span>
                                        )}
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
                    </section>

                    {/* ─── Niche Section 2 ─── */}
                    <section className="niche-section-wrapper">
                        <div className="niche-grid">
                            {niche2Products.map((product) => (
                                <Link
                                    key={`${product.id}-d`}
                                    href={`/collections/bracelets/${product.slug}`}
                                    className="product-card-link"
                                >
                                    <div className="product-card">
                                        {product.images[0] && (
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        )}
                                        {product.tagText && (
                                            <span className="product-tag">{product.tagText}</span>
                                        )}
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
                    </section>

                    {/* ─── 2 Dropdowns: Content + FAQs ─── */}
                    <div className="men-faq-wrapper">

                        {/* Dropdown 1: Bitcoin Bracelets Content */}
                        <details className="men-faq-item">
                            <summary className="men-faq-header">
                                Bitcoin Bracelets & Gold Bracelets for Women
                            </summary>
                            <div className="men-faq-content">
                                <h1>Bitcoin Bracelets & Gold Bracelets for Women – Modern Style with Meaning</h1>

                                <p>
                                    At <strong>Bitcoin Butik</strong>, our bracelet collection is
                                    thoughtfully designed to bring together timeless elegance and a
                                    modern sense of identity. Whether you are searching for{" "}
                                    <strong>bitcoin bracelets</strong>, Bitcoin-inspired styles, or
                                    beautifully crafted gold bracelets for women, our collection
                                    offers a refined balance of sophistication, symbolism, and
                                    everyday wearability that aligns perfectly with today's evolving
                                    fashion trends.
                                </p>
                                <p>
                                    Each bracelet is more than just an accessory—it is a meaningful
                                    expression of confidence, individuality, and forward-thinking
                                    values. Designed for both <strong>men and women</strong>, our
                                    pieces seamlessly blend premium craftsmanship with modern
                                    inspiration, ensuring that every design not only looks stylish but
                                    also carries a deeper sense of purpose. These bracelets are
                                    created to complement your lifestyle, making them suitable for
                                    both everyday wear and special occasions.
                                </p>
                                <p>
                                    From classic <strong>female gold bracelets</strong> that reflect
                                    timeless beauty and elegance to bold bitcoin-inspired designs that
                                    symbolize innovation and digital progress, every piece in our
                                    collection captures the essence of modern luxury. Our designs
                                    strike a unique balance between tradition and innovation, allowing
                                    you to wear jewelry that feels both familiar and future-focused.
                                </p>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, we believe jewelry should tell
                                    a story. That's why each bracelet is designed to go beyond
                                    aesthetics—representing your mindset, your confidence, and your
                                    connection to a world shaped by technology and individuality.
                                    Whether you prefer a minimal, refined look or a bold statement
                                    piece, our bracelet collection offers versatile styles that
                                    elevate your appearance while expressing who you truly are.
                                </p>

                                <h2>Explore Bitcoin Bracelets & Gold Bracelet Collection</h2>
                                <p>
                                    Our <strong>bracelet collection</strong> at Bitcoin Butik is
                                    carefully curated to suit a wide range of styles, preferences, and
                                    occasions. Whether you're drawn to minimal elegance or bold,
                                    statement-making designs, you'll find pieces that not only enhance
                                    your look but also reflect your personality and modern identity.
                                    Each bracelet is thoughtfully designed to combine visual appeal
                                    with deeper meaning, allowing you to wear jewelry that feels both
                                    stylish and purposeful.
                                </p>
                                <p>
                                    We focus on versatility, ensuring that every bracelet can
                                    transition effortlessly from <strong>everyday wear to special
                                    occasions</strong>. From subtle, refined pieces that add a touch
                                    of sophistication to bold designs that capture attention, our
                                    collection offers something for every taste and style preference.
                                </p>
                                <p><strong>Our collection includes:</strong></p>
                                <ul>
                                    <li><strong>Bitcoin bracelets</strong> – Iconic designs featuring the Bitcoin symbol, perfect for expressing a modern and forward-thinking identity</li>
                                    <li><strong>Gold bracelets for women</strong> – Elegant and timeless pieces crafted with a luxurious and polished finish</li>
                                    <li><strong>Female gold bracelets</strong> – Sophisticated designs that highlight feminine style and grace</li>
                                    <li><strong>Minimal bracelets</strong> – Clean, simple designs ideal for everyday wear and effortless styling</li>
                                    <li><strong>Statement bracelets</strong> – Bold, eye-catching pieces created to stand out with confidence</li>
                                </ul>
                                <p>
                                    Every bracelet is crafted with precision and attention to detail,
                                    ensuring it pairs seamlessly with both casual and formal outfits.
                                    Whether you're dressing for a relaxed day, a professional setting,
                                    or a special event, these bracelets serve as versatile additions
                                    to your jewelry collection—enhancing your overall style while
                                    expressing your individuality.
                                </p>

                                <h2>Designed for Comfort, Style & Everyday Wear</h2>
                                <p>
                                    At Bitcoin Butik, our bracelets are thoughtfully crafted to
                                    deliver the perfect balance of comfort, style, and everyday
                                    functionality. We believe that <strong>jewelry</strong> should not
                                    only look good but also feel effortless to wear throughout your
                                    day. That's why each bracelet is designed to integrate seamlessly
                                    into your lifestyle—whether you're at work, out with friends, or
                                    attending a special occasion.
                                </p>
                                <p>
                                    Every piece is created with precision and attention to detail,
                                    ensuring a smooth, polished finish that feels gentle on the skin
                                    while maintaining a refined and premium appearance. Our designs
                                    focus on wearability without compromising elegance, so you can
                                    enjoy both comfort and confidence wherever you go.
                                </p>
                                <p><strong>Key features include the following:</strong></p>
                                <ul>
                                    <li><strong>Lightweight construction</strong> for comfortable, all-day wear</li>
                                    <li><strong>Smooth and polished finishing</strong> for a luxurious feel</li>
                                    <li><strong>Easy styling</strong> with a variety of outfits and accessories</li>
                                    <li><strong>Versatile designs</strong> suitable for both modern and classic looks</li>
                                </ul>
                                <p>
                                    Whether worn as a standalone piece for a minimal aesthetic or
                                    layered with other <strong>bracelets</strong> for a more
                                    expressive style, these designs enhance your overall appearance
                                    effortlessly. With Bitcoin Butik, your bracelet becomes more than
                                    just an accessory—it becomes a reliable and stylish part of your
                                    everyday expression.
                                </p>

                                <h2>Premium Craftsmanship & High-Quality Materials</h2>
                                <p>
                                    At Bitcoin Butik, quality is the foundation of{" "}
                                    <strong>every bracelet we create</strong>. Each piece is
                                    thoughtfully crafted using premium materials and high-quality
                                    finishes to ensure exceptional durability, long-lasting shine, and
                                    a refined, luxurious appearance. Our commitment to excellence
                                    means that every bracelet is designed not only to look beautiful
                                    but also to stand the test of time.
                                </p>
                                <p>
                                    We combine traditional craftsmanship with modern techniques to
                                    achieve precision and consistency in every detail. From the
                                    initial design concept to the final finishing touch, each step is
                                    carefully executed to deliver a product that reflects both
                                    strength and elegance.
                                </p>
                                <p><strong>Our craftsmanship highlights the following:</strong></p>
                                <ul>
                                    <li><strong>Precision-crafted detailing</strong> for a flawless and polished finish</li>
                                    <li><strong>Strong and durable construction</strong> built for everyday wear</li>
                                    <li><strong>Tarnish-resistant finishes</strong> to help maintain shine over time</li>
                                    <li><strong>Long-lasting elegance and quality</strong> for a premium experience</li>
                                </ul>
                                <p>
                                    Each bracelet is created to retain its beauty and character even
                                    with regular use, making it more than just an accessory—it's a
                                    lasting investment in style, quality, and meaningful design.
                                </p>

                                <h2>A Symbol of Identity & Modern Thinking</h2>
                                <p>
                                    <strong>Bitcoin bracelets</strong> are more than just stylish
                                    accessories—they represent a powerful mindset shaped by
                                    innovation, independence, and a vision for the future. At Bitcoin
                                    Butik, each bracelet is designed to go beyond appearance, allowing
                                    you to wear something that truly reflects your beliefs and
                                    personal identity.
                                </p>
                                <p>
                                    These pieces symbolize your connection to a rapidly evolving
                                    digital world, where technology and finance are being redefined.
                                    Wearing a <strong>bitcoin bracelet</strong> is not just about
                                    fashion—it's about expressing confidence, embracing change, and
                                    standing for something meaningful in a modern era.
                                </p>
                                <p><strong>Wearing these bracelets reflects the following:</strong></p>
                                <ul>
                                    <li><strong>Belief in digital evolution and emerging technologies</strong> shaping the future</li>
                                    <li><strong>Confidence and individuality</strong> expressed through unique design</li>
                                    <li><strong>Connection to modern financial thinking</strong> and decentralized systems</li>
                                    <li><strong>A forward-looking lifestyle</strong> driven by growth and innovation</li>
                                </ul>
                                <p>
                                    Every bracelet from Bitcoin Butik allows you to express who you
                                    are with purpose and style—transforming jewelry into a statement
                                    of identity, vision, and modern thinking.
                                </p>

                                <h2>Perfect Gift for Every Occasion</h2>
                                <p>
                                    <strong>Bracelets</strong> have always been a timeless and
                                    meaningful gift, symbolizing connection, appreciation, and lasting
                                    memories. With Bitcoin-inspired designs, this tradition is
                                    elevated with a modern and forward-thinking touch. At Bitcoin
                                    Butik, each bracelet is thoughtfully crafted to be more than just
                                    a stylish accessory—it's a meaningful expression of identity,
                                    innovation, and individuality.
                                </p>
                                <p>
                                    Whether you're celebrating a personal moment or looking for
                                    something truly unique, our bracelets offer a distinctive way to
                                    mark important occasions. Their blend of elegance and symbolism
                                    makes them a memorable gift that stands out from traditional
                                    choices.
                                </p>
                                <p><strong>Perfect for:</strong></p>
                                <ul>
                                    <li><strong>Birthdays and anniversaries</strong> – Celebrate special moments with a meaningful and stylish gift</li>
                                    <li><strong>Celebrating achievements</strong> – Recognize success with a symbol of confidence and progress</li>
                                    <li><strong>Special milestones</strong> – Mark life's important events with lasting elegance</li>
                                    <li><strong>Unique and future-focused gifting</strong> – Give something modern, thoughtful, and distinctive</li>
                                </ul>
                                <p>
                                    With Bitcoin Butik, you're not just giving jewelry—you're gifting
                                    a story, a mindset, and a symbol of identity that will be valued
                                    for years to come.
                                </p>

                                <h2>Why Choose Bitcoin Butik Bracelets?</h2>
                                <p>
                                    At Bitcoin Butik, we go beyond <strong>traditional jewelry</strong>{" "}
                                    by creating bracelets that blend timeless elegance with modern
                                    meaning. Each piece is thoughtfully designed for individuals who
                                    value style, innovation, and self-expression. Our collection
                                    reflects a perfect harmony of <strong>premium craftsmanship and
                                    Bitcoin-inspired creativity</strong>, ensuring every bracelet
                                    feels unique and purposeful.
                                </p>
                                <p><strong>What sets us apart:</strong></p>
                                <ul>
                                    <li><strong>Exclusive bitcoin-inspired designs</strong> – Distinctive styles that reflect a modern, forward-thinking identity</li>
                                    <li><strong>Premium craftsmanship and high-quality materials</strong> – Built for durability, comfort, and long-lasting shine</li>
                                    <li><strong>Elegant gold bracelets for women & modern styles for men</strong> – Designed to suit a wide range of tastes and preferences</li>
                                    <li><strong>Wide variety from minimal to bold designs</strong> – Perfect for every personality, occasion, and styling choice</li>
                                    <li><strong>Trusted destination for modern jewelry</strong> – Known for quality, innovation, and meaningful design</li>
                                </ul>
                                <p>
                                    Every bracelet at Bitcoin Butik is created to combine beauty,
                                    durability, and purpose—giving you more than just an accessory.
                                    It's a statement of confidence, individuality, and a lifestyle
                                    that embraces the future.
                                </p>

                                <h2>Style Your Bracelet with Confidence</h2>
                                <p>
                                    Make your bracelet a defining part of your everyday look with
                                    styling choices that reflect your personality and elevate your
                                    overall appearance. At Bitcoin Butik, our{" "}
                                    <strong>bracelets</strong> are designed to adapt effortlessly to
                                    your style—whether you prefer a clean, minimal aesthetic or a
                                    bold, layered statement.
                                </p>
                                <p><strong>Style tips to enhance your look:</strong></p>
                                <ul>
                                    <li><strong>Wear a single bracelet</strong> for a sleek and minimal style</li>
                                    <li><strong>Layer multiple bracelets</strong> to create a modern, trendy look</li>
                                    <li><strong>Pair with rings, watches, or pendants</strong> for a coordinated finish</li>
                                    <li><strong>Mix gold and contemporary designs</strong> to add contrast and depth</li>
                                </ul>
                                <p>
                                    With the right styling, your bracelet becomes more than just an
                                    accessory—it transforms into a <strong>signature piece</strong>{" "}
                                    that expresses your individuality, confidence, and modern sense of
                                    style.
                                </p>

                                <h2>Find Your Perfect Bracelet Size</h2>
                                <p>
                                    Choosing the right size ensures both comfort and style. At
                                    Bitcoin Butik, our <strong>bracelets</strong> are designed to fit
                                    securely while feeling effortless on your wrist.
                                </p>
                                <p><strong>How to choose the right size:</strong></p>
                                <ul>
                                    <li>Measure your wrist using a soft measuring tape</li>
                                    <li>Add a little extra space for a comfortable fit</li>
                                    <li>Choose a snug fit for a minimal look or a looser fit for layering</li>
                                    <li>Refer to our sizing guide for accurate selection</li>
                                </ul>
                                <p>
                                    A well-fitted bracelet not only looks better but also enhances
                                    your everyday comfort and confidence.
                                </p>

                                <h2>Built for Everyday Durability</h2>
                                <p>
                                    Our bracelets are made to keep up with your lifestyle. Whether
                                    you're at work, traveling, or attending events, they are designed
                                    to remain reliable and stylish.
                                </p>
                                <p><strong>Durability benefits:</strong></p>
                                <ul>
                                    <li>Resistant to everyday wear and tear</li>
                                    <li>Secure clasps for added reliability</li>
                                    <li>Materials chosen for long-term use</li>
                                    <li>Maintains shine even with frequent wear</li>
                                </ul>
                                <p>
                                    Enjoy jewelry that looks as good at the end of the day as it did
                                    when you first put it on.
                                </p>

                                <h2>Minimal to Bold – Styles for Every Personality</h2>
                                <p>
                                    Every individual has a unique sense of style, and our collection
                                    reflects that diversity. From subtle elegance to bold statements,
                                    there's something for everyone.
                                </p>
                                <p><strong>Style categories:</strong></p>
                                <ul>
                                    <li><strong>Minimal designs</strong> for a clean and refined look</li>
                                    <li><strong>Classic gold bracelets</strong> for timeless elegance</li>
                                    <li><strong>Modern Bitcoin styles</strong> for a futuristic vibe</li>
                                    <li><strong>Statement pieces</strong> for confident self-expression</li>
                                </ul>
                                <p>No matter your preference, you'll find a bracelet that aligns with your personality.</p>

                                <h2>Made to Match Every Outfit</h2>
                                <p>
                                    Versatility is key when it comes to modern jewelry. Our bracelets
                                    are designed to complement a wide range of outfits effortlessly.
                                </p>
                                <p><strong>Wear them with:</strong></p>
                                <ul>
                                    <li>Casual everyday outfits</li>
                                    <li>Business and professional attire</li>
                                    <li>Evening and formal wear</li>
                                    <li>Streetwear and modern fashion</li>
                                </ul>
                                <p>Transition seamlessly from day to night without changing your accessories.</p>

                                <h2>Care Tips to Maintain Your Bracelet</h2>
                                <p>Proper care helps preserve the beauty and longevity of your bracelet.</p>
                                <p><strong>Simple care tips:</strong></p>
                                <ul>
                                    <li>Store in a dry, clean place</li>
                                    <li>Avoid direct contact with water and chemicals</li>
                                    <li>Clean gently with a soft cloth</li>
                                    <li>Remove before intense physical activities</li>
                                </ul>
                                <p>Taking care of your bracelet ensures it stays as stunning as the day you got it.</p>

                                <h2>Join the Modern Jewelry Movement</h2>
                                <p>
                                    Bitcoin Butik is more than a brand—it's a reflection of a growing
                                    global mindset that values innovation, independence, and style.
                                </p>
                                <p><strong>Why it matters:</strong></p>
                                <ul>
                                    <li>Represents a shift toward digital culture</li>
                                    <li>Connects fashion with technology</li>
                                    <li>Reflects a modern, forward-thinking lifestyle</li>
                                    <li>Builds a unique identity through accessories</li>
                                </ul>
                                <p>Be part of a movement where fashion meets the future.</p>

                                <h2>Shop Bitcoin Bracelets & Gold Bracelets for Women Today</h2>
                                <p>
                                    Discover bracelets that combine elegance, symbolism, and modern
                                    identity. Whether you prefer timeless{" "}
                                    <strong>gold designs or bold Bitcoin-inspired styles</strong>,
                                    find the perfect piece that reflects who you are—only at Bitcoin
                                    Butik, offering{" "}
                                    <a href="https://bitcoinbutik.com/">limited-edition fashion jewelry</a>{" "}
                                    for those who value uniqueness and meaning.
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