import "./CareInstructions.css";
import { Droplet, Package, SprayCan, Sparkles, Hand, RotateCcw } from "lucide-react";

export const metadata = {
  title: "Jewelry Care Instructions | BitcoinButik",
  description:
    "Learn how to care for your BitcoinButik jewelry. Follow our expert tips to maintain the shine, durability, and quality of your gold and silver pieces.",

  alternates: {
    canonical: "https://bitcoinbutik.com/care-instructions",
  },

  openGraph: {
    title: "Jewelry Care Instructions | BitcoinButik",
    description:
      "Discover how to properly care for your gold and silver crypto jewelry to maintain its shine and longevity.",
    url: "https://bitcoinbutik.com/care-instructions",
    siteName: "BitcoinButik",
    locale: "en_US",
    images: [
      {
        url: "https://bitcoinbutik.com/care-Instructions.jpeg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jewelry Care Instructions | BitcoinButik",
    description:
      "Learn how to care for your BitcoinButik jewelry and keep it looking new.",
    images: ["https://bitcoinbutik.com/care-Instructions.jpeg"],
    creator: "@bitcoin_butik",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const tips = [
  {
    icon: Droplet,
    title: "Be Mindful of Moisture",
    text: "Avoid prolonged exposure to water, pat jewelry dry if it gets wet, and store it in a dry place afterward.",
  },
  {
    icon: Package,
    title: "Store Thoughtfully",
    text: "Place each piece in a soft pouch or a jewelry box lined with anti-tarnish fabric. Store items separately to prevent scratches.",
  },
  {
    icon: SprayCan,
    title: "Avoid Harsh Chemicals",
    text: "Apply lotions, perfumes, and sprays before putting on jewelry. These products can dull the gold's finish over time.",
  },
  {
    icon: Sparkles,
    title: "Clean with Care",
    text: "Wipe gently using a soft, dry microfiber or jewelry cloth. Skip silver polishing cloths, as they may remove the gold layer.",
  },
  {
    icon: Hand,
    title: "Rotate Your Favorites",
    text: "Gold vermeil is durable, but not solid gold.",
  },
  {
    icon: RotateCcw,
    title: "Rotate as Needed",
    text: "With wear, the gold layer may gently fade and many jewelers offer re-plating services.",
  },
];

export default function CareInstructions() {
  return (
    <>
      <div className="CareGuide">
        <div className="container">
          <div className="CareGuide-header">
            <h1>Care Guide for Gold Vermeil Jewelry</h1>
            <p className="CareGuide-subtitle">Keep Your Shine Lasting Longer</p>
          </div>

          <div className="CareGuide-intro">
            <h2>What is Gold Vermeil?</h2>
            <p>
              Gold vermeil (pronounced ver-may) is sterling silver coated with a thick layer of real 18k gold. It offers the luxurious look of solid gold at a more accessible price.
            </p>
          </div>

          <h2 className="CareGuide-tipsTitle">Tips to Maximize Longevity</h2>

          <div className="CareGuide-grid">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div className="CareGuide-tip" key={index}>
                  <div className="CareGuide-tipIcon">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="CareGuide-tipContent">
                    <h3>{tip.title}</h3>
                    <p>{tip.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}