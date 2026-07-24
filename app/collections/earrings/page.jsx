import Script from "next/script";
import Link from 'next/link';
import "./earrings.css";

const API_URL = "https://api.bitcoinbutik.com";
const MEDIA_URL = "https://api.bitcoinbutik.com";
const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/earrings";
const OG_IMAGE = "/Earrings-Banner.webp";
const TITLE = "Buy Gold Bitcoin & Crypto Earrings for Women Online";
const DESCRIPTION =
    "Shop gold earrings for women online with stylish bitcoin and crypto designs. Explore elegant, modern earrings perfect for daily wear and gifting. Buy now.";

// ─── SEO Metadata + Canonical ───
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
        const response = await fetch(`${API_URL}/api/products?category=Earrings`, {
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
        q: '1. What are Bitcoin earrings?',
        a: 'Bitcoin earrings are unique jewelry pieces inspired by Bitcoin and cryptocurrency culture. They combine modern design concepts with stylish craftsmanship, allowing you to express your interest in innovation and digital evolution through fashion.',
    },
    {
        q: '2. Are Bitcoin earrings suitable for everyday wear?',
        a: 'Yes, Bitcoin earrings are designed for versatile styling. Their lightweight designs and comfortable finishes make them suitable for daily wear as well as special occasions.',
    },
    {
        q: '3. What makes Bitcoin Butik earrings unique?',
        a: 'Bitcoin Butik earrings combine modern Bitcoin-inspired designs with premium craftsmanship. Each piece is created to represent individuality, innovation, and contemporary style.',
    },
    {
        q: '4. Are gold earrings for women suitable for all occasions?',
        a: 'Yes, gold earrings for women are versatile jewelry pieces that can be worn for everyday styling, professional looks, celebrations, weddings, and special events.',
    },
    {
        q: '5. What types of earrings are available at Bitcoin Butik?',
        a: 'Bitcoin Butik offers a variety of styles, including gold earrings for women, Bitcoin earrings, minimal designs, and statement earrings.',
    },
    {
        q: '6. Are Bitcoin earrings only for cryptocurrency enthusiasts?',
        a: 'No. Bitcoin earrings are designed for anyone who appreciates unique jewelry, modern concepts, and innovative fashion. They can be worn as stylish accessories regardless of your background.',
    },
    {
        q: '7. Are Bitcoin earrings available for women?',
        a: 'Yes, Bitcoin Butik offers Bitcoin earrings designed with elegant and modern styles that complement women\u2019s fashion preferences.',
    },
    {
        q: '8. Are gold earrings women can wear daily?',
        a: 'Yes, lightweight gold earrings are ideal for everyday wear. They add elegance to your look while remaining comfortable throughout the day.',
    },
    {
        q: '9. What materials are used for Bitcoin Butik earrings?',
        a: 'Bitcoin Butik earrings are crafted using premium materials and quality finishes to provide durability, comfort, and long-lasting shine.',
    },
    {
        q: '10. Are Bitcoin earrings a good gift option?',
        a: 'Yes, Bitcoin earrings make a unique and meaningful gift choice for birthdays, anniversaries, achievements, and special milestones.',
    },
    {
        q: '11. How do I style Bitcoin earrings?',
        a: 'Bitcoin earrings can be styled with casual outfits, professional looks, and special occasion wear. They pair well with modern fashion and statement accessories.',
    },
    {
        q: '12. Are gold earrings for women timeless jewelry pieces?',
        a: 'Yes, gold earrings have remained a classic jewelry choice because of their elegance, versatility, and ability to complement different fashion styles.',
    },
    {
        q: '13. What is the difference between Bitcoin earrings and crypto earrings?',
        a: 'Bitcoin earrings are specifically inspired by Bitcoin symbols and identity, while crypto earrings may include broader cryptocurrency and digital innovation-inspired designs.',
    },
    {
        q: '14. Are Bitcoin Butik earrings comfortable to wear?',
        a: 'Yes, Bitcoin Butik earrings are designed with comfort in mind, featuring lightweight construction and smooth finishing for easy everyday wear.',
    },
    {
        q: '15. Can I wear Bitcoin earrings with traditional outfits?',
        a: 'Yes, Bitcoin earrings can be paired with both modern and traditional outfits, creating a unique blend of classic style and contemporary fashion.',
    },
    {
        q: '16. How can I maintain the shine of my earrings?',
        a: 'To maintain your earrings\u2019 shine, store them properly, avoid exposure to harsh chemicals, clean them gently, and keep them away from excessive moisture.',
    },
    {
        q: '17. Are Bitcoin earrings suitable for special occasions?',
        a: 'Yes, Bitcoin earrings can add a distinctive touch to party wear, celebrations, formal events, and other special occasions.',
    },
    {
        q: '18. Why choose Bitcoin Butik for gold earrings for women?',
        a: 'Bitcoin Butik offers elegant designs, premium craftsmanship, modern concepts, and unique jewelry styles created for women who appreciate both beauty and individuality.',
    },
    {
        q: '19. Can Bitcoin earrings be paired with other jewelry?',
        a: 'Yes, Bitcoin earrings can be paired with rings, bracelets, necklaces, and other accessories to create a coordinated and stylish look.',
    },
    {
        q: '20. Where can I buy Bitcoin earrings and gold earrings for women?',
        a: 'You can explore the complete collection of Bitcoin earrings and gold earrings for women at Bitcoin Butik and choose a design that matches your style and personality.',
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
            reviewCount: 124,
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
                name: "Earrings",
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
export default async function EarringsPage() {

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
        (p) => p.slug === 'bitcoin-standard-earings'
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
                                <Link href="/">Home</Link> / <Link href="/collections">Jewelry</Link> / Earrings
                            </span>
                            <h1 className="bzero-title">
                                Premium Gold & Silver Bitcoin Earrings for Women <sup>{formattedProducts.length}</sup>
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
                                        href={`/collections/earrings/${product.slug}`}
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
                                        <Link href={`/collections/earrings/${heroProduct1.slug}`}>
                                            <img
                                                src="/Earrings-Banner.webp"
                                                alt="Model wearing Earrings"
                                                style={{ cursor: 'pointer', width: '100%' }}
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src="/Earrings-Banner.webp"
                                            alt="Model wearing Earrings"
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
                                    href={`/collections/earrings/${product.slug}`}
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
                                    href={`/collections/earrings/${product.slug}`}
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
                                    href={`/collections/earrings/${product.slug}`}
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

                    {/* ─── Info Dropdowns: Article + FAQ ─── */}
                    <section className="info-accordion-wrapper">

                        {/* Dropdown 1: Bitcoin Earrings & Gold Earrings Article */}
                        <details className="info-accordion-item">
                            <summary className="info-accordion-summary">
                                Bitcoin Earrings &amp; Gold Earrings for Women
                            </summary>
                            <div className="info-accordion-content">
                                <h2>Bitcoin Earrings &amp; Gold Earrings for Women – Modern Elegance Meets Innovation</h2>

                                <p>
                                    At Bitcoin Butik, our earrings collection is thoughtfully designed to bring together{' '}
                                    <strong>timeless elegance, modern creativity, and a unique sense of identity</strong>.
                                    Whether you are searching for <strong>gold earrings for women</strong>, stylish everyday
                                    jewelry, or distinctive <strong>bitcoin earrings and Bitcoin-inspired designs</strong>,
                                    our collection offers the perfect combination of sophistication, symbolism, and
                                    contemporary fashion.
                                </p>

                                <p>
                                    Earrings have always been an essential part of personal style, adding charm and
                                    confidence to every look. Today, jewelry is not only about beauty—it is also about
                                    self-expression and individuality. From classic gold-inspired designs to bold
                                    Bitcoin-inspired pieces, every pair from Bitcoin Butik is created to represent
                                    confidence, innovation, and a forward-thinking lifestyle.
                                </p>

                                <p>
                                    Our collection is designed for women who appreciate the beauty of traditional jewelry
                                    while embracing modern ideas. Each earring reflects a balance between elegance and
                                    innovation, making it suitable for everyday styling as well as special occasions.
                                    Whether you prefer subtle minimal designs or eye-catching statement pieces, our
                                    earrings allow you to express your personality with confidence.
                                </p>

                                <p>
                                    At Bitcoin Butik, we believe jewelry should carry meaning beyond appearance. That's why
                                    our <strong>bitcoin earrings</strong> are inspired by concepts of independence,
                                    progress, and the evolving digital world. Every piece is carefully crafted with
                                    attention to detail, ensuring a premium look, comfortable wear, and a design that feels
                                    truly unique.
                                </p>

                                <p>
                                    From refined <strong>gold earrings women</strong> love for their timeless appeal to
                                    modern Bitcoin-inspired styles that showcase individuality, our collection offers
                                    versatile options for every personality. When you choose Bitcoin Butik earrings, you
                                    are not just choosing an accessory—you are choosing a piece that reflects your style,
                                    mindset, and connection to the future.
                                </p>

                                <h3>Explore Gold Earrings &amp; Bitcoin-Inspired Styles</h3>

                                <p>
                                    At Bitcoin Butik, our earrings collection is carefully curated to offer a perfect blend
                                    of <strong>classic elegance, modern design, and meaningful identity</strong>. Whether
                                    you prefer the timeless beauty of <strong>gold earrings for women</strong> or the
                                    unique appeal of <strong>bitcoin earrings and Bitcoin-inspired jewelry</strong>, our
                                    collection features styles designed to complement different personalities, occasions,
                                    and fashion preferences.
                                </p>

                                <p>
                                    We believe earrings should do more than enhance your appearance—they should reflect
                                    your individuality and personal style. From subtle everyday designs to bold statement
                                    pieces, each pair is thoughtfully created to provide elegance, comfort, and a
                                    distinctive look that stands out.
                                </p>

                                <p><strong>Our collection includes:</strong></p>
                                <ul>
                                    <li><strong>Gold earrings for women</strong> – Timeless and elegant designs that add sophistication to every outfit, perfect for both daily wear and special occasions.</li>
                                    <li><strong>Gold earrings for women (modern styles)</strong> – Contemporary designs that combine classic luxury with a refined and fashionable appeal.</li>
                                    <li><strong>Bitcoin earrings</strong> – Unique jewelry pieces inspired by Bitcoin culture, created for individuals who appreciate innovation and modern identity.</li>
                                    <li><strong>Minimal earrings</strong> – Simple and elegant styles ideal for everyday wear and effortless styling.</li>
                                    <li><strong>Statement earrings</strong> – Bold and distinctive pieces designed to capture attention and enhance your overall look.</li>
                                </ul>

                                <p>
                                    Each pair is crafted with attention to detail, ensuring a comfortable fit, premium
                                    appearance, and long-lasting style. Whether you are dressing for a casual day, a
                                    professional setting, or a special event, our earrings transition effortlessly between
                                    different looks.
                                </p>

                                <p>
                                    With Bitcoin Butik, you can explore jewelry that combines{' '}
                                    <strong>traditional elegance with modern innovation</strong>, allowing you to express
                                    your personality through designs that are stylish, meaningful, and unique.
                                </p>

                                <h3>Designed for Comfort &amp; Everyday Wear</h3>

                                <p>
                                    At Bitcoin Butik, we believe that great jewelry should combine{' '}
                                    <strong>beauty, comfort, and functionality</strong>. Our earrings are thoughtfully
                                    designed to ensure they feel as comfortable as they look elegant, allowing you to wear
                                    them confidently throughout the day.
                                </p>

                                <p>
                                    Each pair is created with attention to detail, focusing on lightweight designs, smooth
                                    finishing, and a comfortable fit. Whether you prefer simple everyday styles or elegant
                                    statement pieces, our earrings are made to complement your lifestyle without
                                    compromising on sophistication.
                                </p>

                                <p><strong>Key features:</strong></p>
                                <ul>
                                    <li><strong>Lightweight and comfortable for all-day wear</strong> – Designed to provide effortless comfort, making them perfect for extended use.</li>
                                    <li><strong>Smooth finishing for a premium feel</strong> – Carefully crafted surfaces ensure a refined look and a luxurious wearing experience.</li>
                                    <li><strong>Skin-friendly materials</strong> – Made with quality materials to provide comfortable wear for different occasions.</li>
                                    <li><strong>Easy to style with any outfit</strong> – Versatile designs that pair beautifully with casual, professional, and formal looks.</li>
                                </ul>

                                <p>
                                    Whether you're heading to work, attending a special event, meeting friends, or
                                    enjoying a casual day out, Bitcoin Butik earrings add a touch of elegance to every
                                    moment. Designed for modern lifestyles, these pieces allow you to express your
                                    personality while enjoying lasting comfort and style.
                                </p>

                                <h3>Premium Craftsmanship &amp; High-Quality Materials</h3>

                                <p>
                                    At Bitcoin Butik, <strong>quality is the foundation of every design we create</strong>.
                                    Each pair of earrings is carefully crafted using premium materials and advanced
                                    finishing techniques to deliver a perfect combination of elegance, durability, and
                                    long-lasting beauty.
                                </p>

                                <p>
                                    We focus on every small detail—from the initial design concept to the final finishing
                                    process—to ensure that each earring reflects superior craftsmanship and a luxurious
                                    feel. Whether you choose elegant <strong>gold earrings for women</strong> or unique{' '}
                                    <strong>bitcoin earrings and Bitcoin-inspired designs</strong>, every piece is created
                                    to maintain its beauty while offering comfortable everyday wear.
                                </p>

                                <p><strong>Craftsmanship highlights:</strong></p>
                                <ul>
                                    <li><strong>Precision-crafted detailing</strong> – Every design is carefully developed with attention to detail for a refined and premium appearance.</li>
                                    <li><strong>Strong and durable construction</strong> – Built to provide lasting quality while maintaining comfort and style.</li>
                                    <li><strong>Tarnish-resistant finishes</strong> – Designed to help preserve shine and maintain the elegant look over time.</li>
                                    <li><strong>Long-lasting shine and elegance</strong> – Created to retain their beauty and complement your jewelry collection for years.</li>
                                </ul>

                                <p>
                                    At Bitcoin Butik, we believe jewelry should be more than a temporary fashion choice.
                                    Our earrings are designed as timeless pieces that combine craftsmanship, innovation,
                                    and style—making them a valuable addition to your personal collection.
                                </p>

                                <h3>A Symbol of Identity &amp; Modern Thinking</h3>

                                <p>
                                    Bitcoin earrings are more than just stylish accessories—they represent a 
                                    <strong>modern mindset built around innovation, individuality, and progress.</strong> At
                                    Bitcoin Butik, each design is created to reflect the evolving connection between
                                    technology, finance, and personal expression.
                                </p>

                                <p>
                                    These earrings allow you to showcase more than your sense of style. They represent
                                    confidence, curiosity, and a willingness to embrace new ideas. Whether you are
                                    passionate about digital innovation or simply appreciate unique jewelry concepts, our
                                    Bitcoin-inspired designs help you express your personality in a meaningful way.
                                </p>

                                <p><strong>Wearing these earrings symbolizes the following:</strong></p>
                                <ul>
                                    <li><strong>Belief in digital evolution and technology</strong> – Representing a connection to innovation and the changing world of modern finance.</li>
                                    <li><strong>Confidence and individuality</strong> – Showcasing your unique personality through distinctive and meaningful designs.</li>
                                    <li><strong>Connection to modern financial thinking</strong> – Reflecting an interest in new ideas, digital progress, and future-focused concepts.</li>
                                    <li><strong>A forward-looking lifestyle</strong> – Representing creativity, independence, and a vision for what lies ahead.</li>
                                </ul>

                                <p>
                                    Each piece from Bitcoin Butik is designed to help you express your identity while
                                    staying aligned with modern trends. More than jewelry, these earrings become a
                                    personal statement of confidence, innovation, and contemporary style.
                                </p>

                                <h3>Perfect Gift for Every Occasion</h3>

                                <p>
                                    Earrings have always been one of the most timeless and meaningful gifts, symbolizing
                                    elegance, appreciation, and personal connection. With the introduction of{' '}
                                    <strong>Bitcoin-inspired designs</strong>, traditional jewelry gifting takes on a
                                    modern and innovative touch. At Bitcoin Butik, our earrings are created to offer more
                                    than beauty—they represent individuality, confidence, and a forward-thinking
                                    lifestyle.
                                </p>

                                <p>
                                    Whether you are choosing a gift for someone special or adding a unique piece to your
                                    own collection, our earrings offer a perfect combination of style and meaning. From
                                    elegant <strong>gold earrings for women</strong> to distinctive{' '}
                                    <strong>bitcoin earrings and Bitcoin-inspired designs</strong>, each pair is
                                    thoughtfully crafted to create a memorable impression.
                                </p>

                                <p><strong>Perfect for:</strong></p>
                                <ul>
                                    <li><strong>Birthdays and anniversaries</strong> – Celebrate special moments with a stylish and meaningful gift.</li>
                                    <li><strong>Celebrating achievements</strong> – Mark success and milestones with jewelry that represents confidence and progress.</li>
                                    <li><strong>Special milestones</strong> – Create lasting memories with a unique piece that carries significance.</li>
                                    <li><strong>Unique and modern gifting</strong> – Offer something different from traditional jewelry with a contemporary touch.</li>
                                </ul>

                                <p>
                                    Whether you choose classic gold earrings or bold bitcoin-inspired designs, every pair
                                    from Bitcoin Butik carries a blend of{' '}
                                    <strong>elegance, innovation, and personal expression</strong>. It's not just a
                                    gift—it's a symbol of style, identity, and modern thinking.
                                </p>

                                <h3>Why Gold Earrings Remain a Timeless Choice for Women</h3>

                                <p>
                                    Gold earrings have always been a symbol of elegance, confidence, and personal style.
                                    Their classic appeal makes them a favorite choice for women who want jewelry that can
                                    be worn across different occasions and fashion trends.
                                </p>

                                <p>
                                    At Bitcoin Butik, our <strong>gold earrings for women</strong> combine traditional
                                    elegance with modern design elements, creating pieces that feel both luxurious and
                                    contemporary. Whether you prefer a subtle everyday look or a more refined style for
                                    special occasions, our collection offers versatile options to complement every
                                    personality.
                                </p>

                                <p><strong>Gold earrings are loved for their:</strong></p>
                                <ul>
                                    <li>Timeless beauty and classic appeal</li>
                                    <li>Ability to complement both traditional and modern outfits</li>
                                    <li>Versatility for everyday wear and celebrations</li>
                                    <li>Elegant finish that enhances personal style</li>
                                </ul>

                                <p>With Bitcoin Butik, you can experience the beauty of gold-inspired jewelry with a modern perspective.</p>

                                <h3>Modern Bitcoin Rings for the Digital Generation</h3>

                                <p>
                                    The world of jewelry is evolving, and <strong>Bitcoin earrings</strong> represent a
                                    new era where fashion meets technology. Designed for individuals who appreciate
                                    innovation, these earrings combine unique concepts with stylish craftsmanship.
                                </p>

                                <p>
                                    Bitcoin Butik's <strong>bitcoin earrings</strong> are created for those who want their
                                    accessories to represent more than appearance. Each design reflects ideas of
                                    independence, innovation, and a connection to the future of digital culture.
                                </p>

                                <p><strong>Our Bitcoin-inspired earrings are perfect for:</strong></p>
                                <ul>
                                    <li>Technology enthusiasts</li>
                                    <li>Digital innovation supporters</li>
                                    <li>Modern fashion lovers</li>
                                    <li>Individuals looking for unique jewelry designs</li>
                                </ul>

                                <p>These earrings allow you to showcase your personality while embracing a modern and future-focused style.</p>

                                <h3>Earrings Designed to Match Every Personality</h3>

                                <p>
                                    Every individual has a unique style, and jewelry should reflect that personality. At
                                    Bitcoin Butik, our earrings collection offers a variety of designs to suit different
                                    preferences.
                                </p>

                                <p>Whether you love minimal elegance or bold fashion statements, our collection helps you find the perfect match.</p>

                                <p><strong>Choose from:</strong></p>
                                <ul>
                                    <li><strong>Minimal designs</strong> for a clean and sophisticated appearance</li>
                                    <li><strong>Elegant gold styles</strong> for timeless beauty</li>
                                    <li><strong>Bitcoin-inspired designs</strong> for a unique modern identity</li>
                                    <li><strong>Statement earrings</strong> for confident and bold styling</li>
                                </ul>

                                <p>Every pair is created to help you express yourself effortlessly.</p>

                                <h3>The Perfect Blend of Fashion &amp; Innovation</h3>

                                <p>
                                    <strong>Modern jewelry</strong> is no longer limited to traditional designs. Today,
                                    people look for pieces that represent their personality, beliefs, and lifestyle.
                                </p>

                                <p>
                                    Bitcoin Butik combines the elegance of classic jewelry with the creativity of modern
                                    concepts. Our earrings collection reflects this perfect balance by offering designs
                                    that are stylish, meaningful, and innovative.
                                </p>

                                <p>
                                    Whether you are attending a celebration, styling a professional look, or adding a
                                    unique touch to your everyday outfit, our earrings help you create a memorable
                                    impression.
                                </p>

                                <h3>How to Choose the Perfect Earrings for Your Style</h3>

                                <p>
                                    Choosing the right earrings depends on your personality, outfit, and occasion. At
                                    Bitcoin Butik, you can select designs that perfectly match your fashion preferences.
                                </p>

                                <ol>
                                    <li><strong>For everyday wear:</strong> Choose lightweight and minimal earrings that provide comfort with effortless elegance.</li>
                                    <li><strong>For professional looks:</strong> Opt for refined gold earrings that add sophistication without being overwhelming.</li>
                                    <li><strong>For special occasions:</strong> Select a statement or unique Bitcoin-inspired designs to create a distinctive appearance.</li>
                                    <li><strong>For personal expression:</strong> Choose Bitcoin earrings that represent your connection to innovation and modern identity.</li>
                                </ol>

                                <h3>Care Tips to Maintain Your Earrings' Shine</h3>

                                <p>
                                    Proper care helps maintain the beauty and longevity of your{' '}
                                    <strong>favorite jewelry pieces</strong>. Follow these simple tips to keep your
                                    earrings looking premium:
                                </p>
                                <ul>
                                    <li>Store earrings in a clean and dry jewelry box</li>
                                    <li>Avoid direct contact with harsh chemicals and perfumes</li>
                                    <li>Clean gently with a soft cloth after use</li>
                                    <li>Keep jewelry away from excessive moisture</li>
                                    <li>Handle designs carefully to preserve their finish</li>
                                </ul>

                                <p>With proper care, your Bitcoin Butik earrings can continue to add elegance and style for years.</p>

                                <h3>Elevate Your Jewelry Collection with Bitcoin Butik</h3>

                                <p>
                                    At Bitcoin Butik, we create jewelry for individuals who believe style should have
                                    meaning. Our earrings collection brings together{' '}
                                    <strong>gold elegance, Bitcoin inspiration, and modern craftsmanship</strong> to
                                    create pieces that stand apart.
                                </p>

                                <p>
                                    Whether you are searching for <strong>gold earrings for women</strong>, unique{' '}
                                    <strong>bitcoin earrings</strong>, or stylish <strong>Bitcoin earrings</strong>,
                                    discover designs that represent confidence, innovation, and individuality.
                                </p>

                                <p><strong>Wear your style. Express your identity. Choose Bitcoin Butik.</strong></p>

                                <h3>Why Choose Bitcoin Butik Earrings?</h3>

                                <p>
                                    At Bitcoin Butik, we believe jewelry should be more than just an accessory—it should
                                    represent <strong>style, personality, and a meaningful connection to modern
                                    innovation</strong>. Our earrings collection is thoughtfully designed for individuals
                                    who appreciate the perfect balance between timeless elegance and contemporary design.
                                </p>

                                <p>
                                    From classic <strong>gold earrings for women</strong> to unique{' '}
                                    <strong>bitcoin earrings and Bitcoin-inspired styles</strong>, every piece is created
                                    with attention to detail, premium quality, and a focus on individuality. Our designs
                                    allow you to express your personality while embracing a modern approach to jewelry.
                                </p>

                                <p><strong>What makes Bitcoin Butik earrings unique?</strong></p>
                                <ul>
                                    <li><strong>Exclusive bitcoin and Bitcoin-inspired designs</strong> – Distinctive jewelry concepts that represent innovation, digital culture, and modern identity.</li>
                                    <li><strong>Premium craftsmanship and high-quality materials</strong> – Carefully crafted pieces designed for durability, comfort, and long-lasting shine.</li>
                                    <li><strong>Elegant gold earrings for women and modern styles</strong> – A diverse collection that blends timeless beauty with contemporary trends.</li>
                                    <li><strong>Wide variety from minimal to bold designs</strong> – Options for every personality, occasion, and fashion preference.</li>
                                    <li><strong>Trusted destination for modern jewelry</strong> – A collection created for those who value unique designs, quality, and meaningful style.</li>
                                </ul>

                                <p>
                                    Every pair of earrings from Bitcoin Butik is designed to combine{' '}
                                    <strong>beauty, durability, and purpose</strong>, giving you jewelry that does more
                                    than complete your look—it tells your story. Whether you prefer elegant simplicity or
                                    bold expression, our earrings help you stand out with confidence and style.
                                </p>

                                <h3>Style Your Earrings with Confidence</h3>

                                <p>
                                    Earrings are more than just accessories—they are an essential part of your personal
                                    style and can instantly enhance your overall look. At Bitcoin Butik, our collection is
                                    designed to help you express your personality, whether you prefer subtle elegance,
                                    modern trends, or bold fashion statements.
                                </p>

                                <p>
                                    With the right styling, your earrings can become a defining feature of your
                                    appearance. Whether you are dressing for everyday moments, professional settings, or
                                    special occasions, our designs offer versatile options to match every outfit and mood.
                                </p>

                                <p><strong>Style your earrings your way:</strong></p>
                                <ul>
                                    <li><strong>Wear studs for a minimal and elegant look</strong> – Perfect for everyday wear, offering a simple yet sophisticated touch to your style.</li>
                                    <li><strong>Choose hoops for a modern everyday vibe</strong> – Add a fashionable and effortless look that pairs well with casual and contemporary outfits.</li>
                                    <li><strong>Go for statement earrings to stand out</strong> – Make a bold impression with unique designs that highlight your confidence and individuality.</li>
                                    <li><strong>Mix and match styles for a trendy layered look</strong> – Experiment with different designs to create a personalized and stylish appearance.</li>
                                </ul>

                                <p>
                                    Your earrings become more than just jewelry—they become a{' '}
                                    <strong>signature element of your personal style</strong>. Whether you choose elegant{' '}
                                    <strong>gold earrings for women</strong> or unique <strong>bitcoin earrings</strong>,
                                    Bitcoin Butik helps you complete your look with confidence, creativity, and modern
                                    elegance.
                                </p>

                                <h3>Shop Gold Earrings for Women &amp; Bitcoin Earrings Today</h3>

                                <p>
                                    Discover earrings that combine <strong>elegance, meaning, and modern identity</strong>.
                                    Whether you prefer timeless gold designs or bold Bitcoin-inspired styles, find the
                                    perfect pair that reflects who you are—only at Bitcoin Butik, crafted as{' '}
                                    <Link href="https://bitcoinbutik.com/">luxury Bitcoin jewelry</Link> for those who value
                                    both style and belief.
                                </p>
                            </div>
                        </details>

                        {/* Dropdown 2: Frequently Asked Questions */}
                        <details className="info-accordion-item">
                            <summary className="info-accordion-summary">
                                Frequently Asked Questions
                            </summary>
                            <div className="info-accordion-content">

                                {faqs.map((item, idx) => (
                                    <div key={idx} className="faq-item">
                                        <p className="faq-question">{item.q}</p>
                                        <p>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </details>

                    </section>

                </div>
            </div>
        </>
    );
}