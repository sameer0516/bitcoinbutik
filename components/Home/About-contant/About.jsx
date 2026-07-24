"use client";
import Image from "next/image";
import { FaSyncAlt, FaHandHoldingUsd, FaAward, FaShippingFast, FaFlagUsa } from "react-icons/fa";
import "./About.css";

const badges = [
  { icon: <FaSyncAlt />, label: "24/7 Customer Service" },
  { icon: <FaHandHoldingUsd />, label: "100% Money Back" },
  { icon: <FaAward />, label: "Lifetime Warranty" },
  { icon: <FaShippingFast />, label: "Free Shipping & Returns" },
  { icon: <FaFlagUsa />, label: "Made In USA" },
];

const About = () => {
    return (
        <section className="about-container">

            <h1 className="about-heading">About Bitcoin Butik</h1>

            <div className="about-content">
                <div className="about-image-wrap">
                    <img
                        src="/Bzero5-2.webp"
                        alt="Baroshe Jewellery Collection"
                        className="about-image"
                    />
                </div>

                <div className="about-text">
                    <p>
                        At Bitcoin Butik, we redefine modern luxury with an exclusive collection of luxury Bitcoin jewelry crafted for those who value both style and innovation. As a premium destination for Bitcoin-inspired designs, we seamlessly blend timeless craftsmanship with the bold identity of the digital era.
                    </p>

                    <p>
                        Our curated collection is created using high-quality materials and designed to make a lasting statement. Whether you want to buy Bitcoin jewelry as a symbol of your journey in the Bitcoin world or as a distinctive fashion piece, every design is made to stand out with purpose and elegance.
                    </p>

                    <p>
                        We specialize in limited edition jewelry and limited edition fashion jewelry, ensuring that each piece you own feels rare, exclusive, and deeply meaningful. From striking pendants to refined rings and bracelets, every creation reflects individuality, confidence, and modern sophistication.
                    </p>

                    <p>
                        At Bitcoin Butik, we are more than just a brand—we represent a movement that brings together technology, fashion, and self-expression. Discover jewelry that tells your story and celebrates your place in the future of finance.
                    </p>
                </div>
            </div>

            <div className="trust-badges-bar">
                {badges.map((badge, index) => (
                    <div className="trust-badge-item" key={index}>
                        <span className="trust-badge-icon">{badge.icon}</span>
                        <span className="trust-badge-label">{badge.label}</span>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default About;