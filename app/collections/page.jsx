// app/collections/page.js
import Script from "next/script";
import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';
import CollectionsFaqs from '../collections/Collectionsfaqs';

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/collections";
const OG_IMAGE = "/Gemini.png";
const TITLE = "Buy Modern Bitcoin Jewelry & Crypto Jewelry Online";
const DESCRIPTION =
  "Buy Bitcoin jewelry online and explore crypto jewelry collections in modern and gold styles. Discover unique pieces designed for everyday wear and gifting.";

// SEO Metadata 
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
                alt: "BitcoinButik Jewelry Collections",
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
                alt: "BitcoinButik Jewelry Collections",
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
        image: '/Ring-2.webp',
        title: 'Ring',
        url: 'https://bitcoinbutik.com/collections/rings',
    },
    {
        id: 3,
        image: '/DSC02926.webp',
        title: 'Bracelets',
        url: 'https://bitcoinbutik.com/collections/bracelets',
    },
    {
        id: 4,
        image: '/DSC02.webp',
        title: 'Earrings',
        url: 'https://bitcoinbutik.com/collections/earrings',
    },
    {
        id: 5,
        image: '/1(4).png',
        title: 'Men Pendant',
        url: 'https://bitcoinbutik.com/collections/pendants/pendant-mens/',
    }
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
            reviewCount: 140,
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
        name: "Premium & Luxury Bitcoin Jewelry Collections",
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
                    Explore Premium & Luxury Bitcoin Jewelry Collections
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
                                            width={600}
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
            </div>

            {/* 2 Dropdown Sections: Collections content + FAQs */}
            <CollectionsFaqs />
        </>
    );
}