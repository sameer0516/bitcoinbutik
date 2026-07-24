import { Public_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/app/Context/CartContext";
import { AddedToCartNotificationProvider } from "@/app/Context/AddedToCartNotification";
import Script from 'next/script';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const SITE_URL = "https://bitcoinbutik.com";
const PAGE_URL = "https://bitcoinbutik.com/";
const OG_IMAGE = "/bitcoine.png";
const TITLE = "Buy Luxury Bitcoin Jewelry & Limited Edition Crypto Designs";
const DESCRIPTION = "Shop luxury Bitcoin jewelry and crypto Jewelry online. Discover limited edition fashion Jewelry and unique designs from a premium crypto jewelry store.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),

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
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/bitcoine.png",
  },
  verification: {
    google: "CX6DVfsQ2pl9z6d6CuDzlwLg-c4QInjUV6MxA-ZM3a0",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <head>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JE4BBNKPC3"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JE4BBNKPC3');
            `}
          </Script>
        </head>

        <body className={publicSans.className} suppressHydrationWarning={true}>
          <CartProvider>
            <AddedToCartNotificationProvider>
              <div suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
              </div>
            </AddedToCartNotificationProvider>
          </CartProvider>
        </body>
      </html>
    </>
  );
}