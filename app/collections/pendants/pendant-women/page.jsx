import Link from 'next/link';
import Script from "next/script";
import "./women.css";

const API_URL = "https://api.bitcoinbutik.com";
const MEDIA_URL = "https://api.bitcoinbutik.com";

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/pendants/pendant-women";
const OG_IMAGE = "/Bzero17-1.webp";
const TITLE = "Buy Gold & Silver Bitcoin Pendant for Women | Crypto Jewelry Online";
const DESCRIPTION =
  "Shop bitcoin pendant for women in elegant and modern designs. Explore stylish women crypto pendants perfect for daily wear and gifting. Order online now.";

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
                alt: "BitcoinButik Bitcoin Pendants for Women",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: OG_IMAGE,
                alt: "BitcoinButik Bitcoin Pendants for Women",
            },
        ],
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

// ─── Helpers ───
const formatMediaUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${MEDIA_URL}/${path.replace(/^\//, '').replace(/\\/g, '/')}`;
};

const createSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

// ─── Server Fetch ────────────────────────────────
async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products?category=pendant`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) return [];
        return await response.json();
    } catch {
        return [];
    }
}

// ─── Price Display Helper ────────────────────────
function PriceDisplay({ price, goldPrice }) {
    const hasSilver = price !== null && price !== undefined && price > 0;
    const hasGold = goldPrice !== null && goldPrice !== undefined && goldPrice > 0;

    if (hasSilver && hasGold) {
        return (
            <div className="product-price-container">
                <p className="product-price-range">${price?.toFixed(2)} - ${goldPrice?.toFixed(2)}</p>
            </div>
        );
    }
    if (hasSilver) {
        return (
            <div className="product-price-container">
                <p className="product-price-range">Silver: ${price?.toFixed(2)}</p>
            </div>
        );
    }
    if (hasGold) {
        return (
            <div className="product-price-container">
                <p className="product-price-range">Gold: ${goldPrice?.toFixed(2)}</p>
            </div>
        );
    }
    return (
        <div className="product-price-container">
            <p className="product-price-range">Price not available</p>
        </div>
    );
}

// ─── FAQ Data ───
const faqs = [
    {
        q: '1. What is a bitcoin pendant for women?',
        a: 'A bitcoin pendant for women is a jewelry piece inspired by the Bitcoin symbol, designed with elegant and feminine styles to reflect both fashion and modern identity.',
    },
    {
        q: '2. What materials are used in women\u2019s pendants at Bitcoin Butik?',
        a: 'At Bitcoin Butik, pendants are crafted using premium materials such as gold, silver, and high-quality finishes.',
    },
    {
        q: '3. Are these pendants suitable for daily wear?',
        a: 'Yes, all pendants at Bitcoin Butik are designed to be lightweight, comfortable, and durable for everyday use.',
    },
    {
        q: '4. Do you offer gold bitcoin pendants for women?',
        a: 'Yes, Bitcoin Butik offers a range of gold bitcoin pendant designs tailored for women.',
    },
    {
        q: '5. Are the pendants designed specifically for women?',
        a: 'Yes, the collection at Bitcoin Butik includes designs created specifically to match feminine styles and preferences.',
    },
    {
        q: '6. Can I wear these pendants for special occasions?',
        a: 'Absolutely, Bitcoin Butik pendants are versatile and suitable for both casual wear and special events.',
    },
    {
        q: '7. What styles are available in the women\u2019s collection?',
        a: 'Bitcoin Butik offers minimal, elegant, bold, and statement pendant designs.',
    },
    {
        q: '8. Are the pendants lightweight?',
        a: 'Yes, comfort is a priority at Bitcoin Butik, and most pendants are designed to be lightweight for all-day wear.',
    },
    {
        q: '9. Will the pendant lose its shine over time?',
        a: 'No, with proper care, pendants from Bitcoin Butik are designed to retain their shine and quality.',
    },
    {
        q: '10. Are bitcoin pendants a good gift for women?',
        a: 'Yes, a bitcoin pendant from Bitcoin Butik is a meaningful and modern gift option.',
    },
    {
        q: '11. Do you offer different sizes of pendants?',
        a: 'Yes, Bitcoin Butik provides a variety of sizes to suit different style preferences.',
    },
    {
        q: '12. Can I pair the pendant with other jewelry?',
        a: 'Yes, pendants from Bitcoin Butik can be easily styled with chains, rings, and bracelets.',
    },
    {
        q: '13. What does wearing a bitcoin pendant symbolize?',
        a: 'It represents innovation, independence, and confidence in the future of decentralized finance.',
    },
    {
        q: '14. Are the designs trendy or timeless?',
        a: 'Bitcoin Butik designs combine modern trends with timeless elegance.',
    },
    {
        q: '15. Is this jewelry suitable for all age groups?',
        a: 'Yes, the women\u2019s collection at Bitcoin Butik is suitable for various age groups and styles.',
    },
    {
        q: '16. Do you offer minimalist designs?',
        a: 'Yes, Bitcoin Butik offers clean and minimal pendants for subtle styling.',
    },
    {
        q: '17. Are statement pieces available?',
        a: 'Yes, bold and eye-catching designs are part of the Bitcoin Butik collection.',
    },
    {
        q: '18. How should I care for my pendant?',
        a: 'Keep your Bitcoin Butik pendant clean, store it properly, and avoid harsh chemicals.',
    },
    {
        q: '19. Is Bitcoin Butik a trusted place to buy jewelry?',
        a: 'Yes, Bitcoin Butik is a trusted destination for premium Bitcoin-inspired jewelry.',
    },
    {
        q: '20. Why choose Bitcoin Butik for women\u2019s pendants?',
        a: 'Because Bitcoin Butik offers exclusive designs, premium quality, meaningful symbolism, and a wide variety of styles tailored for women.',
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
            reviewCount: 120,
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
                name: "Pendants",
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
                text: item.a.replace(/<[^>]+>/g, ""),
            },
        })),
    },
];

// ─── Main Page ───────────────────────────────────
export default async function Pendants() {

    const products = await getProducts();

    const formattedProducts = products.map((p) => ({
        id: p._id,
        name: p.title,
        slug: p.slug || createSlug(p.title),
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

    // Hero products
    const heroProduct1 = formattedProducts.find(
        (p) => createSlug(p.name) === 'radiant-reserve-pendant'
    );
    const heroProduct2 = formattedProducts.find(
        (p) => createSlug(p.name) === 'immutable-pendant'
    );

    // Sections
    const grid1Products = formattedProducts.slice(0, 4);
    const niche1Products = formattedProducts.slice(4, 8);
    const nicheNewProducts = formattedProducts.slice(8, 12);
    const grid2Products = formattedProducts.slice(12, 16);
    const niche2Products = formattedProducts.slice(16, 20);
    const loadMoreProducts = formattedProducts.slice(20, 32);

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
                                <Link href="/">Home</Link> / <Link href="/collections">Jewelry</Link> / Pendants
                            </span>
                            <h1 className="bzero-title">
                                Stylish Bitcoin Gold & Silver Pendant for Women <sup>{formattedProducts.length}</sup>
                            </h1>
                        </div>
                    </header>

                    {/* ─── Main Grid 1 — 4 Products + Hero Image ─── */}
                    <main className="product-grid-wrapper">
                        <div className="product-grid">
                            <div className="product-grid-left">
                                {grid1Products.map((product) => (
                                    <Link key={product.id} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                        <div className="product-card">
                                            {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                            {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                            <div className="product-info">
                                                <h3 className="product-name">{product.name}</h3>
                                                <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="product-grid-right">
                                <div className="hero-image-container">
                                    {heroProduct1 ? (
                                        <Link href={`/collections/pendants/pendant-women/${heroProduct1.slug}`}>
                                            <img src="/Bzero18-2.webp" alt="Model wearing Bitcoin Pendants for Women" style={{ cursor: 'pointer', width: '100%' }} />
                                        </Link>
                                    ) : (
                                        <img src="/Bzero18-2.webp" alt="Model wearing Bitcoin Pendants for Women" style={{ width: '100%' }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* ─── Niche Section 1 ─── */}
                    <section className="niche-section-wrapper">
                        <div className="niche-grid">
                            {niche1Products.map((product) => (
                                <Link key={`${product.id}-a`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                    <div className="product-card">
                                        {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                        {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                        <div className="product-info">
                                            <h3 className="product-name">{product.name}</h3>
                                            <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
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
                                <Link key={`${product.id}-new`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                    <div className="product-card">
                                        {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                        {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                        <div className="product-info">
                                            <h3 className="product-name">{product.name}</h3>
                                            <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ─── Main Grid 2 — Hero Image + 4 Products ─── */}
                    <main className="product-grid-wrapper">
                        <div className="product-grid">
                            <div className="product-grid-right">
                                <div className="hero-image-container">
                                    {heroProduct2 ? (
                                        <Link href={`/collections/pendants/pendant-women/${heroProduct2.slug}`}>
                                            <img src="/Bzero11-2.webp" alt="Model wearing Bitcoin Pendants for Women" style={{ cursor: 'pointer', width: '100%' }} />
                                        </Link>
                                    ) : (
                                        <img src="/Bzero11-2.webp" alt="Model wearing Bitcoin Pendants for Women" style={{ width: '100%' }} />
                                    )}
                                </div>
                            </div>
                            <div className="product-grid-left">
                                {grid2Products.map((product) => (
                                    <Link key={`${product.id}-c`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                        <div className="product-card">
                                            {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                            {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                            <div className="product-info">
                                                <h3 className="product-name">{product.name}</h3>
                                                <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* ─── Niche Section 2 ─── */}
                    <section className="niche-section-wrapper">
                        <div className="niche-grid">
                            {niche2Products.map((product) => (
                                <Link key={`${product.id}-d`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                    <div className="product-card">
                                        {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                        {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                        <div className="product-info">
                                            <h3 className="product-name">{product.name}</h3>
                                            <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ─── Load More — Static Render ─── */}
                    {loadMoreProducts.length > 0 && (
                        <>
                            <section className="niche-section-wrapper">
                                <div className="niche-grid">
                                    {loadMoreProducts.slice(0, 4).map((product) => (
                                        <Link key={`${product.id}-f`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                            <div className="product-card">
                                                {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                                {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                                <div className="product-info">
                                                    <h3 className="product-name">{product.name}</h3>
                                                    <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                            <section className="niche-section-wrapper">
                                <div className="niche-grid">
                                    {loadMoreProducts.slice(4, 8).map((product) => (
                                        <Link key={`${product.id}-g`} href={`/collections/pendants/pendant-women/${product.slug}`} className="product-card-link">
                                            <div className="product-card">
                                                {product.images[0] && (<img src={product.images[0]} alt={product.name} className="product-image" />)}
                                                {product.tagText && (<span className="product-tag">{product.tagText}</span>)}
                                                <div className="product-info">
                                                    <h3 className="product-name">{product.name}</h3>
                                                    <PriceDisplay price={product.price} goldPrice={product.goldPrice} />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {/* ─── 2 Dropdowns: Content + FAQs ─── */}
                    <div className="women-faq-wrapper">

                        {/* Dropdown 1: Women's Bitcoin Pendants Content */}
                        <details className="women-faq-item">
                            <summary className="women-faq-header">
                                Bitcoin Pendant for Women
                            </summary>
                            <div className="women-faq-content">
                                <h1>Bitcoin Pendant for Women – Elegance Meets Modern Identity</h1>

                                <p>
                                    A <strong>bitcoin pendant for women</strong> is more than just a
                                    fashion accessory—it's a refined expression of individuality,
                                    confidence, and belief in the future. At <strong>Bitcoin Butik</strong>,
                                    our women's pendant collection is thoughtfully designed to combine
                                    elegance with the powerful symbolism of Bitcoin, creating jewelry
                                    that feels both meaningful and stylish.
                                </p>
                                <p>
                                    These pendants are crafted for women who appreciate modern design
                                    while embracing innovation. Whether you prefer subtle sophistication
                                    or bold statement pieces, each design reflects a perfect balance
                                    between beauty and purpose. Every pendant is created to enhance
                                    your personal style while also representing a deeper connection to
                                    progress and forward-thinking values.
                                </p>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, we go beyond traditional jewelry
                                    by designing pieces that carry identity and intention. Our
                                    bitcoin-inspired pendants are not just decorative—they are
                                    meaningful symbols that reflect independence, confidence, and a
                                    modern outlook on wealth and technology. Each design is carefully
                                    considered to ensure it complements a wide range of styles while
                                    still making a unique impression.
                                </p>
                                <p>
                                    From delicate and minimal pieces that add a subtle touch of
                                    elegance to bold designs that stand out, our collection offers
                                    something for every personality. These pendants are versatile
                                    enough to be worn daily or styled for special occasions, making
                                    them a timeless addition to any jewelry collection.
                                </p>
                                <p>
                                    When you choose a pendant from <strong>Bitcoin Butik</strong>, you
                                    are not simply choosing jewelry—you are choosing a piece that
                                    represents your mindset, your values, and your connection to the
                                    future.
                                </p>

                                <h2>Explore the Women's Bitcoin Pendants Collection</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, our women's Bitcoin pendant
                                    collection is thoughtfully designed to suit different
                                    personalities, occasions, and fashion preferences. Each piece is
                                    created to help you express your unique style while staying
                                    connected to the evolving world of digital finance. We believe
                                    jewelry should not only enhance your appearance but also reflect
                                    your identity and values.
                                </p>
                                <p><strong>Our collection includes:</strong></p>
                                <ul>
                                    <li><strong>Minimal bitcoin pendants</strong> – Clean, elegant designs perfect for everyday wear and effortless styling</li>
                                    <li><strong>Gold bitcoin pendants for women</strong> – A refined blend of timeless luxury and modern innovation</li>
                                    <li><strong>Statement Bitcoin pendants</strong> – Bold, eye-catching designs that stand out and make a confident impression</li>
                                    <li><strong>Delicate feminine styles</strong> – Lightweight, graceful pieces for subtle and sophisticated looks</li>
                                </ul>
                                <p>
                                    Every pendant at <strong>Bitcoin Butik</strong> is carefully crafted
                                    to balance aesthetics with meaning. Designed with precision and
                                    attention to detail, these pieces complement both casual and formal
                                    outfits, making them a versatile addition to any jewelry
                                    collection.
                                </p>
                                <p>
                                    Whether you are dressing for a relaxed day out or a special
                                    occasion, our pendants are made to adapt to your style while adding
                                    a distinctive and meaningful touch.
                                </p>

                                <h2>Designed for Style, Comfort & Versatility</h2>
                                <p>
                                    Women's pendants are known for their ability to elevate any look
                                    effortlessly, whether for daily wear or special occasions. At{" "}
                                    <strong>Bitcoin Butik</strong>, we take this concept further by
                                    creating designs that combine elegance with everyday practicality,
                                    ensuring each piece fits seamlessly into your lifestyle.
                                </p>
                                <p>
                                    Our pendants are thoughtfully crafted to deliver both beauty and
                                    comfort, making them suitable for long hours of wear without
                                    compromising on style. Whether you prefer a subtle accessory or a
                                    standout piece, our designs are made to adapt to your personal
                                    fashion choices.
                                </p>
                                <p><strong>At Bitcoin Butik, our pendants are:</strong></p>
                                <ul>
                                    <li><strong>Lightweight and comfortable</strong> for all-day wear</li>
                                    <li><strong>Easy to pair</strong> with different outfits and accessories</li>
                                    <li><strong>Suitable for both modern and classic styles</strong></li>
                                    <li><strong>Designed to maintain shine and durability</strong> over time</li>
                                </ul>
                                <p>
                                    Each piece is created with attention to detail, ensuring it not
                                    only enhances your look but also retains its quality through
                                    regular use. This balance of design and durability makes every
                                    pendant a reliable and stylish addition to your collection.
                                </p>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, your Bitcoin pendant becomes
                                    more than just an accessory—it becomes a versatile piece you can
                                    wear anytime, anywhere, with confidence.
                                </p>

                                <h2>A Symbol of Confidence & Modern Thinking</h2>
                                <p>
                                    Wearing a <strong>bitcoin pendant for women</strong> is not just
                                    about style—it represents a mindset rooted in independence,
                                    innovation, and confidence in the future. At{" "}
                                    <strong>Bitcoin Butik</strong>, every pendant is designed to go
                                    beyond appearance, offering a deeper meaning that aligns with
                                    modern thinking and self-expression.
                                </p>
                                <p>
                                    These pieces symbolize more than fashion—they reflect a belief in
                                    progress, individuality, and a decentralized world where new ideas
                                    shape the future. Each design allows you to carry that message with
                                    elegance and confidence wherever you go.
                                </p>
                                <p><strong>Every pendant from Bitcoin Butik allows you to:</strong></p>
                                <ul>
                                    <li><strong>Express your belief in innovation</strong> and forward-thinking values</li>
                                    <li><strong>Showcase your unique identity</strong> through meaningful design</li>
                                    <li><strong>Stand out with purpose-driven jewelry</strong> that tells a story</li>
                                    <li><strong>Combine fashion with meaning</strong>, blending style and symbolism effortlessly</li>
                                </ul>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, your jewelry becomes more than
                                    an accessory—it becomes a reflection of who you are and what you
                                    stand for.
                                </p>

                                <h2>Perfect Gift for Women</h2>
                                <p>
                                    A pendant has always been a timeless and meaningful gift, valued
                                    for its elegance and emotional significance. A{" "}
                                    <strong>bitcoin pendant for women</strong> adds a modern twist to
                                    this tradition by combining classic beauty with a powerful message
                                    of innovation and forward-thinking.
                                </p>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, each pendant is designed to be
                                    more than just a beautiful accessory—it's a symbol of identity,
                                    belief, and progress. This makes it a thoughtful and unique gift
                                    that goes beyond ordinary jewelry.
                                </p>
                                <p><strong>It's perfect for:</strong></p>
                                <ul>
                                    <li><strong>Birthdays and anniversaries</strong> – Celebrate special moments with something meaningful</li>
                                    <li><strong>Special achievements</strong> – Mark success with a symbol of growth and confidence</li>
                                    <li><strong>Celebrating milestones</strong> – Create lasting memories with a distinctive piece</li>
                                    <li><strong>Gifting something unique and future-focused</strong> – Offer a modern and innovative present</li>
                                </ul>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, you are not just gifting
                                    jewelry—you are gifting meaning, individuality, and a symbol of the
                                    future.
                                </p>

                                <h2>Crafted with Premium Materials & Fine Detailing</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, quality is at the core of every
                                    design. Our women's bitcoin pendants are crafted using premium
                                    materials such as gold, silver, and high-quality finishes to ensure
                                    lasting beauty and durability. Each piece goes through a detailed
                                    process of design, shaping, and finishing to achieve a refined and
                                    polished look.
                                </p>
                                <p>
                                    We focus on precision and craftsmanship so that every pendant not
                                    only looks elegant but also maintains its structure and shine over
                                    time. This commitment ensures that your jewelry remains as
                                    meaningful and visually appealing as the day you first wear it.
                                </p>

                                <h2>Minimal to Statement – Styles for Every Woman</h2>
                                <p>
                                    Every woman has her own unique sense of style, and{" "}
                                    <strong>Bitcoin Butik</strong> reflects that through a diverse
                                    range of pendant designs. Whether you prefer subtle elegance or
                                    bold expression, our collection offers options that align with
                                    your personality.
                                </p>
                                <ul>
                                    <li><strong>Minimal designs</strong> for a clean and sophisticated everyday look</li>
                                    <li><strong>Layered and trendy styles</strong> for modern fashion lovers</li>
                                    <li><strong>Statement pendants</strong> for bold and confident expression</li>
                                    <li><strong>Elegant classics</strong> that never go out of style</li>
                                </ul>
                                <p>This variety allows you to choose a pendant that feels personal, stylish, and meaningful.</p>

                                <h2>A Modern Expression of Luxury</h2>
                                <p>
                                    Luxury today is not just about appearance—it's about meaning,
                                    identity, and innovation. At <strong>Bitcoin Butik</strong>, our
                                    women's pendants represent a new form of luxury that blends
                                    traditional elegance with modern Bitcoin-inspired thinking.
                                </p>
                                <p><strong>Each pendant reflects:</strong></p>
                                <ul>
                                    <li>A forward-thinking mindset</li>
                                    <li>Appreciation for innovation and technology</li>
                                    <li>A refined yet powerful sense of style</li>
                                    <li>A connection to the future of value</li>
                                </ul>
                                <p>This makes every piece more than jewelry—it becomes a modern symbol of luxury with purpose.</p>

                                <h2>Built for Long-Term Wear & Value</h2>
                                <p>
                                    Our pendants are designed not only for immediate appeal but also
                                    for long-term use. At <strong>Bitcoin Butik</strong>, we ensure that
                                    each piece delivers consistent quality, making it a reliable
                                    addition to your jewelry collection.
                                </p>
                                <ul>
                                    <li>Resistant to fading and wear</li>
                                    <li>Strong and durable construction</li>
                                    <li>Designed to retain shine and finish</li>
                                    <li>Timeless designs that remain relevant</li>
                                </ul>
                                <p>This focus on longevity ensures your pendant continues to reflect both elegance and meaning for years.</p>

                                <h2>Why Choose Bitcoin Butik for Women's Pendants?</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, our women's pendants are
                                    designed to offer more than just elegance—they represent a perfect
                                    blend of beauty, meaning, and modern identity. Each piece is
                                    thoughtfully created to reflect both personal style and a deeper
                                    connection to innovation and progress.
                                </p>
                                <ul>
                                    <li><strong>Exclusive bitcoin-inspired designs for women</strong> – Unique creations tailored to modern feminine style</li>
                                    <li><strong>Premium craftsmanship and high-quality materials</strong> – Built for durability, shine, and long-lasting wear</li>
                                    <li><strong>Elegant yet meaningful jewelry concepts</strong> – Designs that combine aesthetics with powerful symbolism</li>
                                    <li><strong>Wide variety of styles from minimal to bold</strong> – Options to suit every personality and occasion</li>
                                    <li><strong>Trusted destination for Bitcoin-inspired jewelry</strong> – A reliable place for distinctive and premium pieces</li>
                                </ul>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, every pendant is designed to
                                    celebrate both beauty and belief—giving women a confident and
                                    stylish way to wear Bitcoin while expressing their individuality.
                                </p>

                                <h2>Express Your Style with Confidence</h2>
                                <p>
                                    Jewelry is a personal statement, and at{" "}
                                    <strong>Bitcoin Butik</strong>, we help you express it with
                                    confidence. Our women's bitcoin pendants are designed to align with
                                    your identity, allowing you to showcase your style while
                                    representing something meaningful.
                                </p>
                                <p>
                                    Whether worn alone or layered with other pieces, each pendant
                                    enhances your overall look while adding a deeper layer of
                                    significance.
                                </p>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, you are not just choosing
                                    jewelry—you are choosing a powerful way to express who you are.
                                </p>

                                <h2>Shop Women's Bitcoin Pendants Today</h2>
                                <p>
                                    Explore the full collection of <strong>Bitcoin pendants for
                                    women</strong> at Bitcoin Butik. Discover designs that combine
                                    elegance, meaning, and modern identity in every detail, crafted as{" "}
                                    <a href="https://bitcoinbutik.com/">luxury bitcoin jewelry</a> for those who value both
                                    style and belief.
                                </p>
                                <p>
                                    This is not just jewelry.
                                    <br />
                                    This is Bitcoin, designed for her.
                                </p>
                            </div>
                        </details>

                        {/* Dropdown 2: FAQs */}
                        <details className="women-faq-item">
                            <summary className="women-faq-header">
                                Frequently Asked Questions
                            </summary>
                            <div className="women-faq-content">
                              
                                {faqs.map((item, idx) => (
                                    <div key={idx} className="women-faq-block">
                                        <h4>{item.q}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: item.a }} />
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