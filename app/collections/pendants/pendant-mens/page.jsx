import Link from 'next/link';
import Script from "next/script";
import Image from 'next/image';
import "./mans.css";

const API_URL = "https://api.bitcoinbutik.com";
const MEDIA_URL = "https://api.bitcoinbutik.com";

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/pendants/pendant-mens";
const OG_IMAGE = "/DSC07223.JPG";
const TITLE = "Shop Luxury Gold & Silver Bitcoin Pendants for Men Online";
const DESCRIPTION =
  "Shop bitcoin pendant for men with premium gold finish. Explore luxury men’s Jewelry designed for modern style & everyday wear or gifting. Order online today.";

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
                alt: "BitcoinButik Bitcoin Pendants for Men",
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
                alt: "BitcoinButik Bitcoin Pendants for Men",
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

// ─── Helper ──
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

// ─── Server Fetch ───
async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products?category=Man`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) return [];
        return await response.json();
    } catch {
        return [];
    }
}

// ─── FAQ Data ──
const faqs = [
    {
        q: '1. What is a bitcoin pendant for men?',
        a: 'A bitcoin pendant for men is a piece of jewelry that features the Bitcoin symbol, combining modern design with the concept of digital currency and innovation.',
    },
    {
        q: '2. What materials are used in Bitcoin Butik pendants?',
        a: 'Our pendants are crafted using high-quality materials such as gold, silver, and premium finishes for durability and long-lasting shine.',
    },
    {
        q: '3. Can I wear a bitcoin pendant every day?',
        a: 'Yes, our pendants are designed for everyday wear with strong construction and comfortable designs.',
    },
    {
        q: '4. Do bitcoin pendants fade over time?',
        a: 'Our pendants are designed with high-quality finishes that resist fading and maintain their shine with proper care.',
    },
    {
        q: '5. Are bitcoin pendants suitable for formal occasions?',
        a: 'Absolutely. They can be styled to complement both casual and formal outfits.',
    },
    {
        q: '6. What chain length is best for men\u2019s pendants?',
        a: 'It depends on your style preference, but medium to long chains are commonly preferred for a balanced look.',
    },
    {
        q: '7. Is a bitcoin pendant a good gift for men?',
        a: 'Yes, it is a unique and meaningful gift that represents innovation, confidence, and modern thinking.',
    },
    {
        q: '8. Who should wear a bitcoin pendant?',
        a: 'Anyone who appreciates modern fashion, cryptocurrency culture, and meaningful jewelry can wear a bitcoin pendant.',
    },
    {
        q: '9. How do I style a bitcoin pendant?',
        a: 'You can wear it alone for a minimal look or layer it with chains for a bold style.',
    },
    {
        q: '10. Are your pendants heavy?',
        a: 'No, they are designed to be lightweight and comfortable for long-term wear.',
    },
    {
        q: '11. Do you offer different styles of bitcoin pendants?',
        a: 'Yes, we offer minimal, bold, classic, and luxury styles to suit different preferences.',
    },
    {
        q: '12. Can I pair a bitcoin pendant with other jewelry?',
        a: 'Yes, it pairs well with watches, rings, and bracelets for a complete look.',
    },
    {
        q: '13. Is bitcoin jewelry trending?',
        a: 'Yes, Bitcoin-inspired jewelry is becoming increasingly popular due to its modern and symbolic appeal.',
    },
    {
        q: '14. How should I clean my bitcoin pendant?',
        a: 'Use a soft cloth and avoid harsh chemicals to maintain its shine and quality.',
    },
    {
        q: '15. Does the pendant come with a chain?',
        a: 'This depends on the product. Some designs include chains, while others are sold separately.',
    },
    {
        q: '16. Are these pendants durable?',
        a: 'Yes, they are built with strong materials and precise craftsmanship for long-lasting use.',
    },
    {
        q: '17. Can I wear a bitcoin pendant with streetwear?',
        a: 'Yes, it complements streetwear, casual outfits, and even luxury fashion styles.',
    },
    {
        q: '18. What makes Bitcoin Butik unique?',
        a: 'We combine premium craftsmanship with bitcoin-inspired designs, offering meaningful and stylish jewelry.',
    },
    {
        q: '19. Do bitcoin pendants have symbolic meaning?',
        a: 'Yes, they represent innovation, independence, and belief in a decentralized future.',
    },
    {
        q: '20. Why should I choose a bitcoin pendant over traditional jewelry?',
        a: 'Because it blends style with purpose, offering both aesthetic value and a deeper meaning connected to modern identity.',
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
            reviewCount: 110,
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
                item: `${SITE_URL}/collections/pendants`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Men",
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

// ─── Main Page ───
export default async function ManPage() {

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

    // Hero product
    const heroProduct1 = formattedProducts.find(
        (p) => createSlug(p.name) === 'not-your-keys-pendant'
    );

    // Sections
    const grid1Products = formattedProducts.slice(0, 4);
    const niche1Products = formattedProducts.slice(4, 8);
    const nicheNewProducts = formattedProducts.slice(8, 12);
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
                                <Link href="/">Home</Link> / <Link href="/collections">Jewelry</Link> / <Link href="/collections/pendants">Pendants</Link> / Men
                            </span>
                            <h1 className="bzero-title">
                                Luxury Bitcoin Gold & Silver Pendants for Men <sup>{formattedProducts.length}</sup>
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
                                        href={`/collections/pendants/pendant-mens/${product.slug}`}
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
                                        <Link href={`/collections/pendants/pendant-mens/${heroProduct1.slug}`}>
                                            <Image
                                                src="/1(4).png"
                                                alt="Model wearing Bitcoin Pendants for Men"
                                                fill
                                                style={{ objectFit: 'cover', cursor: 'pointer' }}
                                                priority
                                            />
                                        </Link>
                                    ) : (
                                        <Image
                                            src="/1(4).png"
                                            alt="Model wearing Bitcoin Pendants for Men"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority
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
                                    href={`/collections/pendants/pendant-mens/${product.slug}`}
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
                                    href={`/collections/pendants/pendant-mens/${product.slug}`}
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
                                    href={`/collections/pendants/pendant-mens/${product.slug}`}
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

                    {/* ─── Load More Section (Static render — first 12 extra products) ─── */}
                    {loadMoreProducts.length > 0 && (
                        <>
                            <section className="niche-section-wrapper">
                                <div className="niche-grid">
                                    {loadMoreProducts.slice(0, 4).map((product) => (
                                        <Link
                                            key={`${product.id}-f`}
                                            href={`/collections/pendants/pendant-mens/${product.slug}`}
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

                            <section className="niche-section-wrapper">
                                <div className="niche-grid">
                                    {loadMoreProducts.slice(4, 8).map((product) => (
                                        <Link
                                            key={`${product.id}-g`}
                                            href={`/collections/pendants/pendant-mens/${product.slug}`}
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
                        </>
                    )}

                    {/* ─── 2 Dropdowns: Content + FAQs ─── */}
                    <div className="men-faq-wrapper">

                        {/* Dropdown 1: Bitcoin Pendant for Men Content */}
                        <details className="men-faq-item">
                            <summary className="men-faq-header">
                                Bitcoin Pendant for Men
                            </summary>
                            <div className="men-faq-content">
                                <h1>Bitcoin Pendant for Men – Strength Meets Modern Luxury</h1>

                                <p>
                                    A <strong>bitcoin pendant for men</strong> is more than just an
                                    accessory—it's a bold representation of confidence, power, and
                                    forward-thinking identity. At <strong>Bitcoin Butik</strong>, our
                                    men's pendant collection is carefully designed to reflect strength,
                                    sophistication, and a deep connection to the innovation behind
                                    Bitcoin.
                                </p>
                                <p>
                                    Each piece is crafted for individuals who value both style and
                                    meaning. Whether you prefer a clean, minimal look or a bold
                                    statement design, our pendants are created to elevate your presence
                                    while symbolizing independence, ambition, and modern wealth. These
                                    designs are made to complement your personal style while also
                                    making a strong and lasting impression.
                                </p>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, we redefine{" "}
                                    <strong>male gold jewelry</strong> by blending timeless
                                    craftsmanship with a contemporary Bitcoin-inspired edge. Every
                                    pendant is thoughtfully designed to combine traditional luxury with
                                    modern symbolism, resulting in pieces that feel both classic and
                                    future-focused.
                                </p>
                                <p>
                                    Our pendants go beyond standard jewelry—they represent a mindset
                                    rooted in progress, confidence, and belief in a decentralized
                                    future. With attention to detail, premium materials, and strong
                                    design aesthetics, each piece reflects durability, quality, and
                                    purpose.
                                </p>
                                <p>
                                    From subtle everyday pieces to bold designs that stand out, our
                                    collection offers versatility for every occasion. Whether worn
                                    casually or styled for special events, these pendants are built to
                                    enhance your look while expressing who you are.
                                </p>
                                <p>
                                    When you choose a pendant from <strong>Bitcoin Butik</strong>, you
                                    are not just choosing jewelry—you are choosing a symbol of
                                    strength, identity, and modern luxury.
                                </p>

                                <h2>Explore Luxury Men's Jewelry Collection</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, our{" "}
                                    <strong>luxury men's jewelry</strong> collection is thoughtfully
                                    designed to combine versatility, style, and individuality. Every
                                    pendant is created to complement different personalities and
                                    occasions while maintaining a premium, refined feel. Whether you
                                    prefer understated elegance or bold expression, our collection
                                    offers pieces that align with your unique identity.
                                </p>
                                <p>
                                    We believe that modern jewelry should do more than enhance
                                    appearance—it should reflect confidence, ambition, and a
                                    forward-thinking mindset. That's why each design blends strong
                                    aesthetics with meaningful Bitcoin symbolism, creating pieces that
                                    stand out with purpose.
                                </p>
                                <p><strong>Our collection includes:</strong></p>
                                <ul>
                                    <li><strong>Minimal bitcoin pendants</strong> – Clean and refined designs perfect for everyday wear</li>
                                    <li><strong>Gold bitcoin pendants for men</strong> – A powerful blend of luxury, durability, and innovation</li>
                                    <li><strong>Bold statement pendants</strong> – Eye-catching designs that command attention</li>
                                    <li><strong>Classic masculine styles</strong> – Strong, structured pieces with timeless appeal</li>
                                </ul>
                                <p>
                                    Every pendant at <strong>Bitcoin Butik</strong> is crafted with
                                    precision and attention to detail, ensuring high-quality finishing
                                    and long-lasting performance. Designed to pair effortlessly with
                                    both casual and formal outfits, these pieces allow you to express
                                    your style with confidence in any setting.
                                </p>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, luxury men's jewelry becomes
                                    more than fashion—it becomes a statement of identity, strength, and
                                    modern thinking.
                                </p>

                                <h2>Premium Craftsmanship & High-Quality Materials</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, quality is the foundation of
                                    every design. Our men's pendants are crafted using premium
                                    materials such as gold, silver, and high-end finishes to ensure
                                    exceptional durability and a long-lasting shine. Each piece is
                                    designed not only to look luxurious but also to withstand everyday
                                    wear while maintaining its refined appearance.
                                </p>
                                <p>
                                    We focus on precision and strength in every detail, combining
                                    traditional craftsmanship with modern techniques to create jewelry
                                    that feels solid, comfortable, and visually striking. Every pendant
                                    reflects a commitment to excellence, ensuring it becomes a reliable
                                    part of your style for years to come.
                                </p>
                                <p><strong>Our craftsmanship highlights include the following:</strong></p>
                                <ul>
                                    <li><strong>Precision-crafted detailing</strong> for a flawless and refined finish</li>
                                    <li><strong>Strong and durable construction</strong> built for everyday wear</li>
                                    <li><strong>Advanced finishes</strong> designed to resist fading and tarnishing</li>
                                    <li><strong>Long-lasting comfort and quality</strong> for continuous use</li>
                                </ul>
                                <p>
                                    This dedication to quality ensures that each pendant from{" "}
                                    <strong>Bitcoin Butik</strong> is more than just an accessory—it's a
                                    lasting investment in style, strength, and modern identity.
                                </p>

                                <h2>A Statement of Power & Identity</h2>
                                <p>
                                    Wearing a <strong>bitcoin pendant for men</strong> goes far beyond
                                    style—it represents a bold mindset shaped by independence,
                                    confidence, and belief in a decentralized future. At{" "}
                                    <strong>Bitcoin Butik</strong>, every pendant is designed to embody
                                    strength and purpose, allowing you to make a statement that is both
                                    personal and powerful.
                                </p>
                                <p>
                                    These pieces are more than accessories—they are symbols of
                                    ambition, modern thinking, and individuality. Whether worn daily or
                                    on special occasions, each pendant reflects a deeper connection to
                                    innovation and self-expression.
                                </p>
                                <p><strong>Every pendant from Bitcoin Butik allows you to:</strong></p>
                                <ul>
                                    <li><strong>Express strength and individuality</strong> through distinctive design</li>
                                    <li><strong>Represent modern financial thinking</strong> and forward-looking values</li>
                                    <li><strong>Stand out with meaningful jewelry</strong> that carries a message</li>
                                    <li><strong>Combine luxury with purpose</strong>, blending style with symbolism</li>
                                </ul>
                                <p>
                                    Crafted for men who value both presence and purpose, these designs
                                    ensure your jewelry reflects not just how you look, but who you are
                                    and what you stand for.
                                </p>

                                <h2>Perfect for Everyday Wear & Special Occasions</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, our men's pendants are designed
                                    with versatility in mind—making them the perfect choice for both
                                    everyday wear and special occasions. Each piece is thoughtfully
                                    crafted to adapt effortlessly to your lifestyle, whether you're
                                    keeping it casual or dressing for a formal event.
                                </p>
                                <p>
                                    These pendants are more than just accessories—they become a
                                    consistent part of your personal style, adding confidence and
                                    character to every look. Their balanced design ensures they
                                    complement a wide range of outfits without ever feeling out of
                                    place.
                                </p>
                                <p><strong>Our pendants allow you to:</strong></p>
                                <ul>
                                    <li><strong>Wear daily as a signature style piece</strong> that defines your look</li>
                                    <li><strong>Elevate your appearance for formal events</strong> with a refined edge</li>
                                    <li><strong>Pair easily with both modern and classic outfits</strong> for maximum versatility</li>
                                    <li><strong>Add a bold, confident touch</strong> to your overall presence</li>
                                </ul>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, your pendant isn't just
                                    something you wear—it becomes a reliable expression of your
                                    identity, suitable for any moment, any setting, and any style.
                                </p>

                                <h2>A Unique & Meaningful Gift for Men</h2>
                                <p>
                                    A <strong>bitcoin pendant for men</strong> is more than a stylish
                                    accessory—it's a meaningful gift that represents vision, ambition,
                                    and a forward-thinking mindset. Unlike traditional jewelry, it
                                    carries a deeper message, making it a standout choice for modern
                                    gifting.
                                </p>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, each pendant is designed to
                                    combine elegance with purpose, ensuring that your gift is not only
                                    visually appealing but also rich in symbolism. It's a thoughtful way
                                    to celebrate someone's journey, achievements, and individuality.
                                </p>
                                <p><strong>It's perfect for:</strong></p>
                                <ul>
                                    <li><strong>Birthdays and anniversaries</strong> – Celebrate special moments with something distinctive</li>
                                    <li><strong>Celebrating achievements</strong> – Honor success with a symbol of growth and confidence</li>
                                    <li><strong>Marking important milestones</strong> – Create lasting memories with meaningful jewelry</li>
                                    <li><strong>Gifting something unique and future-focused</strong> – Offer a modern alternative to classic gifts</li>
                                </ul>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, you're not just giving
                                    jewelry—you're giving a piece that reflects identity, purpose, and
                                    a belief in the future.
                                </p>

                                <h2>Women's Bitcoin Pendants – Elegance with Meaning</h2>
                                <p>
                                    Alongside our bold men's designs, <strong>Bitcoin Butik</strong>{" "}
                                    proudly offers a refined collection of <strong>Bitcoin pendants for
                                    women</strong>, created for those who appreciate elegance with
                                    deeper meaning. These pieces are thoughtfully designed with subtle
                                    detailing, making them perfect for women who prefer a delicate yet
                                    expressive style.
                                </p>
                                <p>
                                    Each pendant combines graceful aesthetics with the powerful
                                    symbolism of Bitcoin, allowing you to wear something that is both
                                    beautiful and meaningful. Whether styled for everyday wear or
                                    special occasions, these designs bring a sophisticated touch to any
                                    look while reflecting modern identity and individuality.
                                </p>
                                <p>
                                    From <strong>minimal, understated pieces</strong> to{" "}
                                    <strong>elegant gold finishes</strong>, the women's collection
                                    offers versatile options that seamlessly blend beauty with
                                    innovation. Every design is crafted to complement different fashion
                                    preferences, ensuring you can express your personality with
                                    confidence and style.
                                </p>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, women's pendants are more than
                                    just jewelry—they are a symbol of elegance, independence, and a
                                    forward-thinking mindset.
                                </p>

                                <h2>How to Style Your Bitcoin Pendant</h2>
                                <p>
                                    A bitcoin pendant for men is a versatile accessory that can elevate
                                    your overall look when styled correctly. Whether you prefer a
                                    subtle or bold appearance, the right styling can enhance your
                                    confidence and presence.
                                </p>
                                <ul>
                                    <li><strong>Layer with chains</strong> for a modern, street-style look</li>
                                    <li><strong>Wear solo</strong> for a clean and minimal aesthetic</li>
                                    <li><strong>Pair with formal outfits</strong> to add a unique edge</li>
                                    <li><strong>Match with watches or rings</strong> for a complete look</li>
                                </ul>
                                <p>With Bitcoin Butik, styling becomes effortless—your pendant naturally adapts to your personal fashion.</p>

                                <h2>The Meaning Behind Bitcoin Jewelry</h2>
                                <p>
                                    Bitcoin jewelry represents more than design—it carries a deeper
                                    message connected to innovation and financial independence. Wearing
                                    a Bitcoin pendant symbolizes the following:
                                </p>
                                <ul>
                                    <li>A belief in <strong>decentralization and digital freedom</strong></li>
                                    <li>A mindset focused on <strong>growth and future opportunities</strong></li>
                                    <li>Confidence in <strong>modern wealth evolution</strong></li>
                                    <li>A connection to <strong>technology-driven identity</strong></li>
                                </ul>
                                <p>Each pendant becomes a personal statement of vision and progress.</p>

                                <h2>Who Should Wear a Bitcoin Pendant?</h2>
                                <p>
                                    Bitcoin pendants are designed for modern individuals who value both
                                    style and meaning. They are ideal for:
                                </p>
                                <ul>
                                    <li><strong>Bitcoin enthusiasts and investors</strong></li>
                                    <li><strong>Entrepreneurs and forward thinkers</strong></li>
                                    <li><strong>Men who appreciate luxury with purpose</strong></li>
                                    <li><strong>Anyone looking to stand out with meaningful jewelry</strong></li>
                                </ul>
                                <p>This makes each piece relevant, stylish, and identity-driven.</p>

                                <h2>Care & Maintenance Tips</h2>
                                <p>To keep your pendant looking premium and long-lasting, proper care is essential:</p>
                                <ul>
                                    <li>Store in a <strong>dry, clean jewelry box</strong></li>
                                    <li>Avoid contact with <strong>chemicals or perfumes</strong></li>
                                    <li>Clean gently with a <strong>soft cloth</strong></li>
                                    <li>Remove during <strong>intense physical activities</strong></li>
                                </ul>
                                <p>These simple steps help maintain shine, durability, and quality over time.</p>

                                <h2>Why Bitcoin Jewelry is Trending</h2>
                                <p>
                                    Bitcoin-inspired jewelry is rapidly growing in popularity as it
                                    merges fashion with technology. Key reasons include:
                                </p>
                                <ul>
                                    <li>Rising interest in <strong>cryptocurrency culture</strong></li>
                                    <li>Demand for <strong>meaningful and symbolic accessories</strong></li>
                                    <li>Shift toward <strong>modern and personalized fashion</strong></li>
                                    <li>Growing appeal of <strong>luxury with purpose</strong></li>
                                </ul>
                                <p>Bitcoin Butik stays ahead by offering designs that reflect this evolving trend.</p>

                                <h2>Custom & Personalized Options</h2>
                                <p>
                                    At Bitcoin Butik, personalization adds a deeper connection to your
                                    jewelry. Depending on availability, you can:
                                </p>
                                <ul>
                                    <li>Choose <strong>different finishes and materials</strong></li>
                                    <li>Select <strong>chain lengths and styles</strong></li>
                                    <li>Pick designs that match your personality</li>
                                    <li>Create a <strong>signature look unique to you</strong></li>
                                </ul>
                                <p>This allows every pendant to feel personal and distinctive.</p>

                                <h2>Shipping & Customer Experience</h2>
                                <p>We focus on delivering not just products but a premium experience:</p>
                                <ul>
                                    <li>Secure and reliable <strong>shipping process</strong></li>
                                    <li>Careful <strong>packaging for protection and presentation</strong></li>
                                    <li>Smooth and user-friendly <strong>shopping experience</strong></li>
                                    <li>Dedicated support for <strong>customer satisfaction</strong></li>
                                </ul>
                                <p>Your journey with Bitcoin Butik is designed to be seamless from purchase to delivery.</p>

                                <h2>Why Choose Bitcoin Butik?</h2>
                                <p>
                                    At <strong>Bitcoin Butik</strong>, we go beyond traditional jewelry
                                    by creating pieces that represent both style and meaning. Our
                                    collections are thoughtfully designed for individuals who value
                                    innovation, identity, and modern luxury. Every pendant reflects a
                                    balance between premium craftsmanship and the powerful symbolism of
                                    Bitcoin, making each piece truly distinctive.
                                </p>
                                <p><strong>Here's what sets us apart:</strong></p>
                                <ul>
                                    <li><strong>Exclusive bitcoin-inspired designs for men and women</strong> – Unique creations that stand out with purpose</li>
                                    <li><strong>Premium craftsmanship and high-quality materials</strong> – Built for durability, shine, and long-lasting wear</li>
                                    <li><strong>A unique blend of luxury and Bitcoin identity</strong> – Where elegance meets modern financial thinking</li>
                                    <li><strong>Wide variety of styles from minimal to bold</strong> – Something for every personality and occasion</li>
                                    <li><strong>A trusted destination for modern jewelry</strong> – Designed for those who value quality and individuality</li>
                                </ul>
                                <p>
                                    With <strong>Bitcoin Butik</strong>, every pendant is more than just
                                    an accessory—it's a symbol of confidence, innovation, and the future
                                    of style.
                                </p>

                                <h3>Start Your Bitcoin Style Journey</h3>
                                <p>
                                    Browse our <a href="https://bitcoinbutik.com/">bitcoin jewelry</a> collection and choose a
                                    piece that defines who you are.
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