import Script from "next/script";
import BitcoinGiftClient from './BitcoinGiftClient';

const SITE_URL = "https://bitcoinbutik.com";
const PAGE_URL = "https://bitcoinbutik.com/bitcoin-jewelry-gifts/";
const OG_IMAGE = "/bitcoine.png";
const TITLE = "Buy Best Bitcoin Jewelry Gifts for Crypto Lovers Online";
const DESCRIPTION =
    "Find the best bitcoin gifts & crypto jewelry for gifting. Perfect for crypto lovers seeking stylish, meaningful presents for special occasions & everyday wear.";

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
                alt: "Bitcoin Jewelry Gifts for Crypto Lovers",
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

const schemaData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
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
        "@id": `${PAGE_URL}#breadcrumb`,
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
                name: "Bitcoin Jewelry Gifts",
                item: PAGE_URL,
            },
        ],
    },
];

export default function Page() {
    return (
        <>
            {schemaData.map((schema, index) => (
                <Script
                    key={schema["@id"] || index}
                    id={`schema-${schema["@type"]}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <BitcoinGiftClient />
        </>
    );
}