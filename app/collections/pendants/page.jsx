// app/pendants/page.js

import Script from "next/script";
import Link from 'next/link';
import Image from 'next/image';
import styles from './pendants.module.css';

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections/pendants";
const OG_IMAGE = "/Gemini";
const TITLE = "Buy Gold & Silver Bitcoin Pendants for Men and Women Online";
const DESCRIPTION =
  "Buy premium gold & silver bitcoin pendants and crypto pendants online. Unique, stylish, and high-quality designs for men and women. Secure checkout and fast shipping.";

// SEO Metadata with Canonical
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
                alt: "BitcoinButik Bitcoin Pendants",
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
                alt: "BitcoinButik Bitcoin Pendants",
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

const collectionsData = [
    {
        id: 1,
        image: '/Bzero13-2.webp',
        title: 'Women Pendant',
        url: 'https://bitcoinbutik.com/collections/pendants/pendant-women',
    },
    {
        id: 2,
        image: '/1(4).png',
        title: 'Men Pendant',
        url: 'https://bitcoinbutik.com/collections/pendants/pendant-mens/',
    }
];

const faqs = [
    {
        q: '1. What is a bitcoin pendant?',
        a: 'A bitcoin pendant is a piece of jewelry inspired by the Bitcoin symbol, representing innovation, financial independence, and modern identity.',
    },
    {
        q: '2. What materials are used in Bitcoin Butik pendants?',
        a: 'At Bitcoin Butik, pendants are crafted using high-quality materials such as gold, silver, and premium finishes for durability and shine.',
    },
    {
        q: '3. Are bitcoin pendants suitable for daily wear?',
        a: 'Yes, all pendants from Bitcoin Butik are designed to be comfortable and durable enough for everyday use.',
    },
    {
        q: '4. Do you offer gold bitcoin pendants?',
        a: 'Yes, Bitcoin Butik offers a range of Bitcoin gold pendant designs that combine luxury with modern Bitcoin symbolism.',
    },
    {
        q: '5. Can I wear a bitcoin pendant on special occasions?',
        a: 'Absolutely. These pendants are versatile and can be styled for both casual wear and formal events.',
    },
    {
        q: '6. What makes Bitcoin Butik pendants unique?',
        a: 'Bitcoin Butik focuses on exclusive designs, premium craftsmanship, and meaningful symbolism inspired by Bitcoin.',
    },
    {
        q: '7. Are your pendants unisex?',
        a: 'Yes, many designs at Bitcoin Butik are suitable for both men and women, with options for different styles and preferences.',
    },
    {
        q: '8. Do the pendants lose their shine over time?',
        a: 'No, with proper care, pendants from Bitcoin Butik are designed to maintain their shine and quality for a long time.',
    },
    {
        q: '9. Are these pendants a good gift option?',
        a: 'Yes, a Bitcoin pendant from Bitcoin Butik makes a meaningful and modern gift for various occasions.',
    },
    {
        q: '10. Do you offer minimal and bold designs?',
        a: 'Yes, Bitcoin Butik provides both minimalist pendants and bold statement pieces to match different styles.',
    },
    {
        q: '11. How do I choose the right pendant style?',
        a: 'You can choose based on your personal style—minimal for subtle looks or statement designs for a bold appearance at Bitcoin Butik.',
    },
    {
        q: '12. Are the pendants lightweight?',
        a: 'Yes, Bitcoin Butik pendants are designed to be lightweight and comfortable for long wear.',
    },
    {
        q: '13. Can I pair these pendants with other jewelry?',
        a: 'Yes, the designs from Bitcoin Butik can be easily paired with chains, bracelets, or rings for a complete look.',
    },
    {
        q: '14. What does wearing a bitcoin pendant represent?',
        a: 'Wearing a pendant from Bitcoin Butik represents belief in innovation, decentralization, and modern financial thinking.',
    },
    {
        q: '15. Are your designs limited edition?',
        a: 'Some collections at Bitcoin Butik feature exclusive and limited-edition designs.',
    },
    {
        q: '16. Do you offer different sizes of pendants?',
        a: 'Yes, Bitcoin Butik offers a variety of sizes to suit both subtle and bold preferences.',
    },
    {
        q: '17. Is the quality suitable for long-term use?',
        a: 'Yes, all pendants from Bitcoin Butik are crafted for durability and long-lasting performance.',
    },
    {
        q: '18. Can beginners in Bitcoin wear Bitcoin jewelry?',
        a: 'Of course. Bitcoin Butik jewelry is designed for anyone who appreciates the meaning and style, regardless of experience level.',
    },
    {
        q: '19. How should I care for my bitcoin pendant?',
        a: 'Keep your Bitcoin Butik pendant clean, store it safely, and avoid harsh chemicals to maintain its quality.',
    },
    {
        q: '20. Why should I buy from Bitcoin Butik?',
        a: 'Bitcoin Butik offers premium designs, strong symbolism, high-quality materials, and a trusted destination for bitcoin pendant collections.',
    },
];

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
            reviewCount: 100,
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
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}/#collectionpage`,
        url: PAGE_URL,
        name: "Premium Gold & Silver Bitcoin Pendant Collection",
        isPartOf: {
            "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: collectionsData.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: item.url,
                name: item.title,
                image: `${SITE_URL}${item.image}`,
            })),
        },
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

export default function Page() {
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

            <div className={styles.Collections}>

                {/* H1 Heading */}
                <h1 className={styles['Collections-Title']}>
                    Premium Gold & Silver Bitcoin Pendant Collection
                </h1>

                <div className="container-fluid">
                    <div className="row">
                        {collectionsData.map((item) => (
                            <div className="col-3" key={item.id}>
                                <Link
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles['Collections-Link']}
                                >
                                    <div className={styles['Collections-Box']}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={600}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className={styles['Collections-Box-content']}>
                                            <div className={styles['Collections-Box-title']}>
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- 2 Dropdowns ---------- */}
                <div className={styles['Faq-Wrapper']}>

                    {/* Dropdown 1: Bitcoin Pendants Collection */}
                    <details className={styles['Faq-Item']}>
                        <summary className={styles['Faq-Header']}>
                            Bitcoin Pendants Collection
                        </summary>
                        <div className={styles['Faq-Content']}>
                            <h1>Bitcoin Pendants That Redefine Modern Style</h1>

                            <p>
                                Welcome to <strong>Bitcoin Butik</strong>, your destination for
                                premium <strong>Bitcoin pendant</strong> designs that combine bold
                                identity with refined craftsmanship. Our pendants are created for
                                individuals who want to express their belief in Bitcoin while
                                maintaining a strong, stylish, and modern presence.
                            </p>
                            <p>
                                At <strong>Bitcoin Butik</strong>, each design is thoughtfully
                                crafted to go beyond traditional jewelry. We focus on creating
                                pieces that reflect meaning, purpose, and individuality. Whether
                                you prefer a minimal look or a bold statement piece, our pendants
                                are designed to complement your personality while representing
                                your connection to the future of finance.
                            </p>
                            <p>
                                Each <strong>bitcoin pendant</strong> is more than just an
                                accessory—it is a symbol of financial independence, innovation, and
                                confidence in the future of decentralized currency. It represents a
                                mindset driven by freedom, forward-thinking, and belief in a system
                                that challenges conventional norms.
                            </p>
                            <p>
                                Our pendants are suitable for both everyday wear and special
                                occasions, making them a versatile addition to any wardrobe. With
                                premium materials, precise detailing, and long-lasting finishes,
                                every piece is built to deliver both style and durability.
                            </p>
                            <p>
                                When you wear a pendant from <strong>Bitcoin Butik</strong>, you are
                                not just enhancing your look—you are making a statement about who
                                you are and what you stand for.
                            </p>

                            <h2>Explore Premium Bitcoin Pendants Collection</h2>
                            <p>
                                At <strong>Bitcoin Butik</strong>, our exclusive range of{" "}
                                <strong>Bitcoin pendants</strong> is designed to suit different
                                personalities, styles, and occasions. Whether you lean toward
                                minimal elegance or prefer bold statement pieces, our collection is
                                crafted to offer something truly unique for every individual.
                            </p>
                            <p>
                                We believe jewelry should reflect both style and identity. That's
                                why each pendant is thoughtfully designed to capture the essence of
                                Bitcoin while maintaining a premium and modern aesthetic. From
                                subtle designs to eye-catching pieces, our collection allows you to
                                express your belief with confidence.
                            </p>
                            <p><strong>Our pendant collection features:</strong></p>
                            <ul>
                                <li><strong>Classic Bitcoin symbol designs</strong> – Timeless pieces that represent the core identity of Bitcoin</li>
                                <li><strong>Modern and minimal pendants</strong> – Clean, sleek styles for everyday sophistication</li>
                                <li><strong>Statement pieces for bold styling</strong> – Designs that stand out and make an impact</li>
                                <li><strong>Elegant options for everyday wear</strong> – Versatile pendants that complement any outfit</li>
                            </ul>
                            <p>
                                Every piece is carefully crafted to balance aesthetics with meaning,
                                ensuring it fits seamlessly into both casual and premium looks. With
                                attention to detail, high-quality finishes, and a focus on
                                durability, our pendants are made to last while maintaining their
                                shine and appeal over time.
                            </p>
                            <p>
                                At <strong>Bitcoin Butik</strong>, our <strong>Bitcoin pendants</strong>{" "}
                                are not just about fashion—they are a reflection of individuality,
                                belief, and modern lifestyle.
                            </p>

                            <h2>Gold Bitcoin Pendant for Timeless Elegance</h2>
                            <p>
                                If you are searching for a <strong>bitcoin gold pendant</strong>,{" "}
                                <strong>Bitcoin Butik</strong> offers premium designs that seamlessly
                                combine the richness of gold with the powerful symbolism of Bitcoin.
                                These pieces are crafted for individuals who appreciate classic
                                luxury while embracing a modern, forward-thinking identity.
                            </p>
                            <p>
                                At <strong>Bitcoin Butik</strong>, gold pendants are designed to go
                                beyond traditional aesthetics. Each piece reflects a balance between
                                timeless elegance and contemporary Bitcoin influence, making it
                                suitable for both refined styling and bold personal expression.
                                Whether worn daily or on special occasions, these pendants add a
                                distinctive touch to any look.
                            </p>
                            <p>Our <strong>gold Bitcoin pendant</strong> collection is crafted to deliver the following:</p>
                            <ul>
                                <li>A luxurious and refined appearance</li>
                                <li>Long-lasting shine and durability</li>
                                <li>A perfect blend of traditional gold style and modern Bitcoin identity</li>
                            </ul>
                            <p>
                                Every pendant is created with precision and attention to detail,
                                ensuring it not only looks premium but also retains its quality over
                                time. The craftsmanship reflects a commitment to excellence, making
                                each piece a valuable addition to your collection.
                            </p>
                            <p>
                                These pendants are ideal for those who want a sophisticated look
                                while staying connected to the Bitcoin movement. With{" "}
                                <strong>Bitcoin Butik</strong>, you don't just wear gold—you wear a
                                symbol of innovation, confidence, and the future.
                            </p>

                            <h2>Crafted with Precision and Premium Materials</h2>
                            <p>
                                Every <strong>bitcoin pendant</strong> at <strong>Bitcoin Butik</strong>{" "}
                                is crafted using high-quality materials such as gold, silver, and
                                premium finishes, ensuring a perfect balance of durability, elegance,
                                and long-lasting value. We focus on precision at every stage—from
                                design to final finishing—so each piece meets the highest standards
                                of quality and craftsmanship.
                            </p>
                            <p>
                                At <strong>Bitcoin Butik</strong>, attention to detail is what sets
                                our jewelry apart. Every pendant is carefully designed to maintain
                                its shine, structure, and visual appeal over time, making it a
                                reliable choice for both everyday wear and special occasions.
                            </p>
                            <p><strong>Our pendants are:</strong></p>
                            <ul>
                                <li><strong>Comfortable for daily wear</strong> – Lightweight and designed for all-day use</li>
                                <li><strong>Built to retain shine over time</strong> – High-quality finishes that resist fading</li>
                                <li><strong>Crafted for durability and elegance</strong> – Strong construction with a premium look and feel</li>
                            </ul>
                            <p>
                                Each piece goes through a thoughtful process to ensure it not only
                                looks exceptional but also performs well over time. This commitment
                                to quality means your pendant will continue to reflect both style and
                                meaning for years to come.
                            </p>
                            <p>
                                With <strong>Bitcoin Butik</strong>, you don't just get a pendant—you
                                get a piece that represents craftsmanship, reliability, and a modern
                                expression of identity.
                            </p>

                            <h2>Perfect for Everyday Wear & Special Occasions</h2>
                            <p>
                                Our <strong>Bitcoin pendants</strong> at <strong>Bitcoin Butik</strong>{" "}
                                are designed with versatility in mind, making them suitable for every
                                moment—whether it's part of your daily style or a highlight of a
                                special event. Each piece blends modern design with meaningful
                                symbolism, allowing you to express your identity effortlessly.
                            </p>
                            <p>
                                These pendants are not limited to one look or occasion. They are
                                crafted to adapt to your lifestyle, giving you the freedom to style
                                them your way while maintaining a premium and refined appearance.
                            </p>
                            <ul>
                                <li><strong>Wear it daily as a symbol of your belief</strong> – A subtle yet powerful representation of your connection to Bitcoin</li>
                                <li><strong>Style it for events and special occasions</strong> – Elevate your outfit with a unique and meaningful accessory</li>
                                <li><strong>Pair it with both casual and formal outfits</strong> – Designed to complement every style with ease</li>
                            </ul>
                            <p>
                                Every pendant is created to enhance your overall look while
                                reflecting confidence, individuality, and a forward-thinking
                                mindset. With <strong>Bitcoin Butik</strong>, your jewelry becomes a
                                part of your everyday expression as well as your standout moments.
                            </p>

                            <h2>A Meaningful Gift with Value</h2>
                            <p>
                                A <strong>Bitcoin gold pendant</strong> is more than just jewelry—it
                                is a meaningful and modern gift that carries purpose beyond
                                appearance. At <strong>Bitcoin Butik</strong>, each piece is designed
                                to symbolize belief, progress, and a forward-thinking mindset, making
                                it a perfect choice for thoughtful gifting.
                            </p>
                            <p>
                                Whether you are celebrating a birthday, anniversary, achievement, or
                                a special milestone, these pendants offer something deeper than
                                traditional gifts. They represent growth, innovation, and confidence
                                in the future—making them truly memorable.
                            </p>
                            <p><strong>Gifting a pendant from Bitcoin Butik means the following:</strong></p>
                            <ul>
                                <li>Choosing a unique and distinctive present</li>
                                <li>Offering something with real symbolic value</li>
                                <li>Sharing a message of belief and innovation</li>
                                <li>Giving a timeless piece that lasts for years</li>
                            </ul>
                            <p>
                                Each design reflects both elegance and meaning, ensuring that your
                                gift stands out and leaves a lasting impression. With{" "}
                                <strong>Bitcoin Butik</strong>, you are not just giving jewelry—you
                                are giving a symbol of identity and the future.
                            </p>

                            <h2>Designed for Those Who Think Differently</h2>
                            <p>
                                At <strong>Bitcoin Butik</strong>, our pendants are created for
                                individuals who see beyond trends and embrace a forward-thinking
                                mindset. These designs are not made for the ordinary—they are
                                crafted for those who value innovation, independence, and meaningful
                                expression.
                            </p>
                            <p>
                                Each piece reflects a deeper philosophy—one that aligns with
                                progress, self-belief, and a modern understanding of value. Whether
                                you are an early adopter, a Bitcoin enthusiast, or someone who
                                appreciates unique design, our pendants allow you to showcase your
                                perspective with confidence.
                            </p>
                            <p>
                                Wearing a pendant from <strong>Bitcoin Butik</strong> is about more
                                than style—it's about representing a vision of the future and
                                standing apart from conventional norms.
                            </p>

                            <h2>Minimal Design, Maximum Impact</h2>
                            <p>
                                Simplicity often speaks the loudest. At <strong>Bitcoin Butik</strong>,
                                we offer pendant designs that focus on clean lines, balanced
                                proportions, and refined detailing. These minimal pieces are perfect
                                for those who prefer subtle sophistication while still carrying a
                                powerful message.
                            </p>
                            <p><strong>Our minimalist pendants are:</strong></p>
                            <ul>
                                <li>Easy to style with any outfit</li>
                                <li>Perfect for layering or wearing solo</li>
                                <li>Designed for a clean, modern aesthetic</li>
                                <li>Ideal for both men and women</li>
                            </ul>
                            <p>
                                These designs prove that you don't need complexity to make a strong
                                statement—just the right symbol, crafted with precision.
                            </p>

                            <h2>Statement Pieces That Stand Out</h2>
                            <p>
                                For those who want to make a bold impression,{" "}
                                <strong>Bitcoin Butik</strong> offers statement pendants that capture
                                attention instantly. These designs are larger, more detailed, and
                                built to stand out in any setting.
                            </p>
                            <p>
                                Whether worn at events, gatherings, or as part of a signature look,
                                these pendants are made to express confidence and individuality.
                            </p>
                            <p><strong>Our statement pieces are:</strong></p>
                            <ul>
                                <li>Bold and eye-catching</li>
                                <li>Rich in detail and craftsmanship</li>
                                <li>Designed to reflect strength and identity</li>
                                <li>Perfect for standout styling</li>
                            </ul>
                            <p>With these pendants, your jewelry becomes the centerpiece of your look.</p>

                            <h2>A Symbol of Modern Wealth</h2>
                            <p>
                                Bitcoin represents a shift in how people view money, ownership, and
                                freedom. At <strong>Bitcoin Butik</strong>, our pendants capture that
                                transformation and turn it into wearable art.
                            </p>
                            <p><strong>These pieces symbolize the following:</strong></p>
                            <ul>
                                <li>Financial independence</li>
                                <li>Decentralized thinking</li>
                                <li>Innovation and progress</li>
                                <li>A new definition of value</li>
                            </ul>
                            <p>
                                Wearing a bitcoin pendant is not just about fashion—it's about
                                embracing a new era and expressing your alignment with it.
                            </p>

                            <h2>Built for Long-Term Value</h2>
                            <p>
                                Every pendant at <strong>Bitcoin Butik</strong> is designed with
                                longevity in mind. We focus on materials, finishes, and craftsmanship
                                that ensure each piece maintains its quality over time.
                            </p>
                            <p><strong>Our commitment includes:</strong></p>
                            <ul>
                                <li>Durable construction for daily wear</li>
                                <li>Premium finishes that resist fading</li>
                                <li>Designs that remain timeless</li>
                                <li>Quality that holds its appeal for years</li>
                            </ul>
                            <p>This ensures your pendant continues to represent both style and meaning long into the future.</p>

                            <h2>Express Your Identity with Confidence</h2>
                            <p>
                                Jewelry is personal—it reflects who you are and what you believe in.
                                At <strong>Bitcoin Butik</strong>, our pendants are designed to help
                                you express that identity with clarity and confidence.
                            </p>
                            <p>
                                Whether you prefer subtle elegance or bold expression, there is a
                                piece that aligns with your personality and values. Each design
                                allows you to carry a symbol of belief, innovation, and individuality
                                wherever you go.
                            </p>
                            <p>
                                With <strong>Bitcoin Butik</strong>, you are not just wearing a
                                pendant—you are wearing your mindset.
                            </p>

                            <h2>Why Choose Bitcoin Butik Pendants?</h2>
                            <p>
                                At <strong>Bitcoin Butik</strong>, our pendants are designed to offer
                                more than just visual appeal—they represent a deeper connection to
                                innovation, identity, and the future of finance. Every piece is
                                thoughtfully crafted to combine premium quality with meaningful
                                design, ensuring it stands out in both style and purpose.
                            </p>
                            <ul>
                                <li><strong>Exclusive and unique designs</strong> – Distinctive creations that help you stand apart</li>
                                <li><strong>Premium craftsmanship and materials</strong> – High-quality finishes for durability and long-lasting shine</li>
                                <li><strong>Strong Bitcoin-inspired identity</strong> – Designs that reflect the philosophy and power of Bitcoin</li>
                                <li><strong>Variety of styles for every personality</strong> – From minimal to bold statement pieces</li>
                                <li><strong>Trusted destination for bitcoin pendant collections</strong> – A reliable source for premium Bitcoin-inspired jewelry</li>
                            </ul>
                            <p>
                                At <strong>Bitcoin Butik</strong>, every pendant is created to
                                represent more than style—it represents a mindset built on
                                confidence, independence, and belief in the future.
                            </p>

                            <h2>Shop Bitcoin Pendants Today</h2>
                            <p>
                                Explore the complete range of <strong>Bitcoin pendants and gold
                                Bitcoin pendant designs</strong> at Bitcoin Butik.
                            </p>
                            <p>
                                Discover unique craftsmanship, premium materials, and{" "}
                                <a href="https://bitcoinbutik.com/">limited edition jewelry</a> designed for true Bitcoin
                                believers.
                            </p>
                            <p>
                                This is not just a pendant.
                                <br />
                                This is Bitcoin you can wear—a symbol of innovation, freedom, and the
                                future of money.
                            </p>
                        </div>
                    </details>

                    {/* Dropdown 2: FAQs */}
                    <details className={styles['Faq-Item']}>
                        <summary className={styles['Faq-Header']}>
                            Frequently Asked Questions (FAQs)
                        </summary>
                        <div className={styles['Faq-Content']}>

                            {faqs.map((item, idx) => (
                                <div key={idx} className={styles['Faq-Block']}>
                                    <h4>{item.q}</h4>
                                    <p>{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
            </div>
        </>
    );
}