import Script from "next/script";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Slider from "./Slider/Slider";
import CustomerReviews from './customerReviews/customerReviews';
import Faqs from './Faqs/page';
import About from './About-contant/About';
import ShopByCategory from './ShopByCategory/ShopByCategory';

const SITE_URL = "https://www.bitcoinbutik.com";
const PAGE_URL = "https://www.bitcoinbutik.com/";
const OG_IMAGE = "/bitcoine.png";
const TITLE = "Buy Luxury Bitcoin Jewelry & Limited Edition Crypto Designs";
const DESCRIPTION =
  "Shop luxury Bitcoin jewelry and crypto Jewelry online. Discover limited edition fashion Jewelry and unique designs from a premium crypto jewelry store.";

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
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        alt: "BitcoinButik Luxury Bitcoin Jewelry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@bitcoin_butik",
    images: [
      {
        url: OG_IMAGE,
        alt: "BitcoinButik Luxury Bitcoin Jewelry",
      },
    ],
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      email: "info@bitcoinbutik.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 120,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE_URL}/#store`,
    name: "BitcoinButik",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/logo.png`,
    telephone: "+1-XXX-XXX-XXXX",
    email: "info@bitcoinbutik.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      postalCode: "Your Postal Code",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/bitcoinbutik/",
      "https://twitter.com/bitcoin_butik",
    ],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "BitcoinButik",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: "BitcoinButik - Luxury Bitcoin & Crypto Jewelry",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Bitcoin jewelry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bitcoin jewelry is fashion jewelry inspired by cryptocurrency designs, crafted for people who want to express their love for crypto through wearable art.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer limited edition crypto designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, BitcoinButik offers limited edition crypto jewelry designs that are exclusive and produced in small batches.",
        },
      },
      {
        "@type": "Question",
        name: "Is your jewelry suitable for everyday wear?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our jewelry is designed to be durable and stylish enough for both everyday wear and special occasions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy Bitcoin jewelry online safely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, BitcoinButik offers a secure checkout process with trusted payment options for a safe shopping experience.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer worldwide shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we ship our luxury Bitcoin jewelry worldwide to crypto enthusiasts everywhere.",
        },
      },
      // Aap yahan apne actual FAQs add/replace kar sakte hain
    ],
  },
];

export default function Home() {
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

      <Banner />
      <Header />
      <Slider />
      <Main />
      <ShopByCategory />
      <About/>
      <CustomerReviews />
      <Faqs />
    </>
  );
}