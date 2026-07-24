"use client";

import React, { useState } from "react";
import "./CollectionsFaqs.css";

const faqs = [
  {
    q: "1. What is Bitcoin jewelry?",
    a: "Bitcoin jewelry refers to accessories inspired by Bitcoin symbols and the concept of decentralized finance. These pieces represent innovation, financial independence, and modern identity.",
  },
  {
    q: "2. What types of Bitcoin jewelry does Bitcoin Butik offer?",
    a: "Bitcoin Butik offers a wide range, including pendants, rings, bracelets, earrings, and custom-designed pieces.",
  },
  {
    q: "3. Who should buy Bitcoin jewelry?",
    a: "Bitcoin jewelry is perfect for Bitcoin investors, blockchain enthusiasts, entrepreneurs, and anyone who believes in the future of digital finance.",
  },
  {
    q: "4. Is Bitcoin jewelry suitable for everyday wear?",
    a: "Yes, all pieces at Bitcoin Butik are designed for both daily wear and special occasions with durability and comfort in mind.",
  },
  {
    q: "5. What materials are used in Bitcoin Butik jewelry?",
    a: "Our jewelry is crafted using high-quality materials such as gold, silver, and premium finishes to ensure long-lasting shine and quality.",
  },
  {
    q: "6. Do you offer gold Bitcoin jewelry?",
    a: "Yes, Bitcoin Butik offers gold-inspired jewelry that blends traditional luxury with modern Bitcoin design concepts.",
  },
  {
    q: "7. Are your designs limited edition?",
    a: "Many collections at Bitcoin Butik are released in limited quantities to maintain exclusivity and uniqueness.",
  },
  {
    q: "8. Can I customize Bitcoin jewelry?",
    a: "Yes, Bitcoin Butik provides custom jewelry options where you can create personalized designs based on your preferences.",
  },
  {
    q: "9. Is Bitcoin jewelry a good gift option?",
    a: "Absolutely. Bitcoin jewelry makes a unique and meaningful gift for birthdays, anniversaries, and special occasions.",
  },
  {
    q: "10. What makes Bitcoin Butik different from other jewelry brands?",
    a: "Bitcoin Butik focuses on combining premium craftsmanship with Bitcoin-inspired designs, creating jewelry that represents belief and identity.",
  },
  {
    q: "11. How do I choose the right Bitcoin jewelry piece?",
    a: "You can choose based on your style preference—minimal, bold, or statement—and the type of jewelry you wear most often.",
  },
  {
    q: "12. Do you offer jewelry for both men and women?",
    a: "Yes, Bitcoin Butik offers designs suitable for both men and women across all categories.",
  },
  {
    q: "13. Is your jewelry durable?",
    a: "Yes, all products are designed with high-quality materials and craftsmanship to ensure durability and long-term use.",
  },
  {
    q: "14. Can I wear Bitcoin jewelry on special occasions?",
    a: "Yes, our designs are versatile and suitable for both everyday wear and special events.",
  },
  {
    q: "15. Do you ship internationally?",
    a: "Yes, Bitcoin Butik offers international shipping so customers worldwide can access our collections.",
  },
  {
    q: "16. How should I take care of my Bitcoin jewelry?",
    a: "To maintain shine and quality, store your jewelry properly, avoid harsh chemicals, and clean it with a soft cloth.",
  },
  {
    q: "17. What does wearing Bitcoin jewelry represent?",
    a: "It represents financial independence, belief in decentralized systems, and a forward-thinking mindset.",
  },
  {
    q: "18. Are there different styles available in Bitcoin jewelry collections?",
    a: "Yes, Bitcoin Butik offers a variety of styles, ranging from minimal designs to bold and statement pieces.",
  },
  {
    q: "19. Can I buy Bitcoin jewelry online easily?",
    a: "Yes, you can explore and purchase directly from the Bitcoin Butik website with a seamless shopping experience.",
  },
  {
    q: "20. Why should I choose Bitcoin Butik for Bitcoin jewelry?",
    a: "Bitcoin Butik offers premium quality, unique designs, limited editions, and a strong connection to the Bitcoin philosophy, making it a trusted destination.",
  },
];

const CollectionsFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cf-wrapper">
      {/* ---------- Section 1: Bitcoin Jewelry Collections ---------- */}
      <div className="cf-accordion-item">
        <button
          className="cf-accordion-header"
          onClick={() => toggle(0)}
          aria-expanded={openIndex === 0}
        >
          <span className={`cf-arrow ${openIndex === 0 ? "cf-open" : ""}`}>▶</span>
          Bitcoin Jewelry Collections
        </button>

        {openIndex === 0 && (
          <div className="cf-accordion-content">
            <h1>Bitcoin Jewelry Collections That Define Modern Luxury</h1>

            <p>
              Welcome to <strong>Bitcoin Butik</strong>, where innovation meets
              elegance through our exclusive <strong>Bitcoin jewelry
              collections</strong>. Designed for individuals who believe in the
              future of decentralized finance, our collections combine premium
              craftsmanship with a bold, Bitcoin-inspired identity.
            </p>
            <p>
              At <strong>Bitcoin Butik</strong>, we don't just create
              jewelry—we create symbols of belief. Our designs are inspired by
              the core values of Bitcoin: freedom, independence, and a
              forward-thinking mindset. Each piece is carefully crafted to
              reflect not only modern luxury but also a deeper connection to
              the evolving world of digital finance.
            </p>
            <p>
              Our curated range of <strong>Bitcoin jewelry collections</strong>{" "}
              includes pendants, rings, bracelets, and earrings—each piece
              representing more than style. Whether you prefer minimal
              elegance or statement designs, every product is created to stand
              out while maintaining a refined, premium feel.
            </p>
            <p>
              Every detail matters. From design concept to final finish, our
              jewelry is made using high-quality materials to ensure
              durability, shine, and long-term value. These pieces are
              suitable for both everyday wear and special occasions, allowing
              you to express your identity wherever you go.
            </p>
            <p>
              More than just accessories, our designs reflect confidence,
              independence, and belief in a decentralized future. When you
              wear Bitcoin jewelry from <strong>Bitcoin Butik</strong>, you are
              not just following a trend—you are representing a movement.
            </p>

            <h2>Explore Premium Bitcoin Jewelry Collections</h2>
            <p>
              At <strong>Bitcoin Butik</strong>, every collection is
              thoughtfully created to match different styles, personalities,
              and occasions. Whether you prefer bold statement pieces or
              subtle everyday elegance, our designs are crafted to reflect
              individuality while staying connected to the spirit of Bitcoin.
            </p>
            <p>Our diverse range of <strong>Bitcoin jewelry collections</strong> includes:</p>
            <ul>
              <li><a href="pendants">Pendants Collection</a> – Iconic Bitcoin symbols designed to stand out and make a strong impression</li>
              <li><a href="rings">Rings Collection</a> – Minimal, modern, and powerful designs that represent confidence and identity</li>
              <li><a href="bracelets">Bracelets Collection</a> – Versatile styles perfect for both daily wear and bold fashion statements</li>
              <li><a href="earrings">Earrings Collection</a> – Elegant and refined pieces with a contemporary Bitcoin-inspired touch</li>
            </ul>

            <p>
              Each category is designed with attention to detail, ensuring
              that every piece carries both aesthetic appeal and symbolic
              meaning. From sleek and understated designs to eye-catching
              creations, there is something for every Bitcoin enthusiast.
            </p>
            <p>
              Every piece in our <strong>Bitcoin jewelry collections</strong> is
              crafted using high-quality materials such as gold, silver, and
              premium finishes. This ensures durability, long-lasting shine,
              and a luxurious feel that complements your style over time.
            </p>
            <p>
              At <strong>Bitcoin Butik</strong>, we go beyond trends to deliver
              jewelry that represents belief, innovation, and modern
              luxury—making every collection truly timeless.
            </p>

            <h2>Best Gold Jewelry with a Bitcoin Edge</h2>
            <p>
              If you are looking for the <strong>best gold jewelry</strong> with
              a modern and meaningful twist, <strong>Bitcoin Butik</strong> offers
              designs that seamlessly blend timeless luxury with innovative
              thinking. Our gold-inspired creations are not just about
              appearance—they represent a deeper connection to the evolving
              world of digital finance and personal identity.
            </p>
            <p>
              At <strong>Bitcoin Butik</strong>, gold jewelry is reimagined
              through the lens of Bitcoin. Each piece is designed to carry
              both elegance and symbolism, making it perfect for individuals
              who value style as well as substance. Whether you are dressing
              for a special occasion or adding a refined touch to your
              everyday look, our designs adapt effortlessly.
            </p>
            <p>Our gold-inspired jewelry pieces are:</p>
            <ul>
              <li>Crafted with precision and attention to detail</li>
              <li>Designed for both daily wear and special occasions</li>
              <li>Built to maintain quality, durability, and long-lasting shine</li>
              <li>Inspired by the power, philosophy, and future of Bitcoin</li>
            </ul>
            <p>
              Every design reflects a balance between classic gold aesthetics
              and modern Bitcoin influence. This unique combination allows you
              to stand out while staying connected to a larger movement.
            </p>
            <p>
              These are not just accessories—they are a reflection of modern
              wealth, confidence, and identity. With <strong>Bitcoin Butik</strong>,
              you wear more than gold—you wear belief.
            </p>

            <h2>More Than Collections — A Statement of Identity</h2>
            <p>
              Our <strong>Bitcoin jewelry collections</strong> are more than just
              accessories—they are an expression of who you are and what you
              believe in. At <strong>Bitcoin Butik</strong>, every piece is
              designed to connect with individuals who think beyond
              traditional norms and embrace a future driven by innovation and
              independence.
            </p>
            <p>Our collections are made for:</p>
            <ul>
              <li>Bitcoin enthusiasts and investors who believe in digital assets</li>
              <li>Modern fashion lovers who want something meaningful and unique</li>
              <li>Entrepreneurs and forward thinkers who lead with vision</li>
              <li>Individuals who value exclusivity and personal identity</li>
            </ul>
            <p>
              Each design carries a deeper purpose. It reflects a mindset
              built on freedom, confidence, and the courage to stand apart
              from conventional systems. Whether subtle or bold, every piece
              tells a story—your story.
            </p>
            <p>
              When you wear jewelry from <strong>Bitcoin Butik</strong>, you are
              not just making a style statement—you are representing a belief
              in something bigger than tradition.
            </p>

            <h2>Limited Edition Bitcoin Jewelry Collections</h2>
            <p>
              At <strong>Bitcoin Butik</strong>, exclusivity is at the core of
              our design philosophy. Our <strong>limited edition Bitcoin jewelry
              collections</strong> are released in small batches, ensuring that
              every piece remains rare and distinctive.
            </p>
            <p>
              These collections are perfect for individuals who value
              uniqueness and want to own something not widely available. Each
              limited-edition design reflects premium craftsmanship and a
              strong identity, making it more than just jewelry—it becomes a
              collectible.
            </p>
            <p>
              Owning a limited piece from <strong>Bitcoin Butik</strong> means
              you are part of a select group that values innovation, rarity,
              and meaningful design.
            </p>

            <h2>Custom Bitcoin Jewelry – Designed for You</h2>
            <p>
              Looking for something truly personal? <strong>Bitcoin Butik</strong>{" "}
              offers custom Bitcoin jewelry tailored to your vision.
            </p>
            <p>
              Whether you want to create a personalized pendant, engrave a
              meaningful message, or design a one-of-a-kind piece, our custom
              service allows you to bring your idea to life.
            </p>
            <p><strong>Custom jewelry is ideal for:</strong></p>
            <ul>
              <li>Personal milestones</li>
              <li>Unique fashion statements</li>
              <li>Special gifts</li>
              <li>Exclusive branding or identity</li>
            </ul>
            <p>
              With expert craftsmanship and attention to detail, we transform
              your concept into a premium piece that reflects your story.
            </p>

            <h2>Bitcoin Jewelry Gifts for Every Occasion</h2>
            <p>
              Searching for a unique and meaningful gift? Our{" "}
              <strong>Bitcoin jewelry collections</strong> make the perfect
              choice for modern gifting.
            </p>
            <p><strong>Ideal for:</strong></p>
            <ul>
              <li>Birthdays</li>
              <li>Anniversaries</li>
              <li>Celebrations and achievements</li>
              <li>Bitcoin milestones</li>
              <li>Special occasions</li>
            </ul>
            <p>
              Unlike traditional gifts, Bitcoin jewelry carries a deeper
              message—it represents belief, growth, and the future of
              finance.
            </p>
            <p>
              With <strong>Bitcoin Butik</strong>, you are not just gifting
              jewelry—you are gifting a symbol of innovation and identity.
            </p>

            <h2>Premium Craftsmanship &amp; Quality Assurance</h2>
            <p>
              At <strong>Bitcoin Butik</strong>, quality is never compromised.
              Every piece goes through a detailed design and production
              process to ensure it meets premium standards.
            </p>
            <p><strong>We focus on:</strong></p>
            <ul>
              <li>High-quality materials and finishes</li>
              <li>Precision detailing and craftsmanship</li>
              <li>Long-lasting durability and shine</li>
              <li>Comfortable and wearable designs</li>
            </ul>
            <p>
              Our commitment to quality ensures that every piece not only
              looks exceptional but also stands the test of time.
            </p>

            <h2>Designed for Everyday Wear &amp; Statement Looks</h2>
            <p>
              Our <strong>Bitcoin jewelry collections</strong> are designed to
              be versatile. Whether you prefer subtle elegance or bold
              statement pieces, our collections adapt to your lifestyle.
            </p>
            <ul>
              <li>Wear it daily as a symbol of your belief</li>
              <li>Style it for special occasions and events</li>
              <li>Pair it with modern or classic outfits</li>
            </ul>
            <p>
              Each piece is created to complement your look while expressing
              your identity in a powerful yet refined way.
            </p>

            <h2>Join the Bitcoin Lifestyle</h2>
            <p>
              Bitcoin is more than a digital asset—it represents a shift in
              mindset. At <strong>Bitcoin Butik</strong>, we bring that
              philosophy into the physical world through jewelry that speaks
              for you.
            </p>
            <p>When you choose <strong>Bitcoin Butik</strong>, you become part of a community that values the following:</p>
            <ul>
              <li>Financial independence</li>
              <li>Innovation and technology</li>
              <li>Confidence in the future</li>
              <li>Strong personal identity</li>
            </ul>
            <p>
              This is not just a collection.
              <br />
              This is a lifestyle powered by belief.
            </p>

            <h2>Why Choose Bitcoin Butik Collections?</h2>
            <p>
              At <strong>Bitcoin Butik</strong>, every collection is created
              with a purpose—to offer more than just jewelry. We focus on
              combining premium design, meaningful symbolism, and long-lasting
              quality to deliver pieces that truly stand out.
            </p>
            <ul>
              <li><strong>Exclusive and limited-edition designs</strong> – Unique creations released in small batches to maintain rarity and individuality</li>
              <li><strong>Premium craftsmanship and finishing</strong> – Attention to detail in every piece for a refined and luxurious look</li>
              <li><strong>Unique Bitcoin-inspired concepts</strong> – Designs that reflect the philosophy and identity of Bitcoin</li>
              <li><strong>Wide variety across all jewelry categories</strong> – From pendants and rings to bracelets and earrings, there is something for every style</li>
              <li><strong>Trusted destination for Bitcoin jewelry</strong> – A reliable place for high-quality, meaningful Bitcoin-inspired pieces</li>
            </ul>
            <p>
              <strong>Bitcoin Butik</strong> is built for those who understand
              that Bitcoin is more than an asset—it is a lifestyle, a belief,
              and a statement of the future.
            </p>

            <h2>Shop the Collection</h2>
            <p>
              Explore the full range of <a href="https://bitcoinbutik.com/">Bitcoin jewelry</a> and
              find pieces that match your style and beliefs.
            </p>
            <p>
              This is not just jewelry.
              <br />
              This is Bitcoin you can wear.
            </p>
          </div>
        )}
      </div>

      {/* ---------- Section 2: FAQs ---------- */}
      <div className="cf-accordion-item">
        <button
          className="cf-accordion-header"
          onClick={() => toggle(1)}
          aria-expanded={openIndex === 1}
        >
          <span className={`cf-arrow ${openIndex === 1 ? "cf-open" : ""}`}>▶</span>
          Frequently Asked Questions
        </button>

        {openIndex === 1 && (
          <div className="cf-accordion-content">
            
            {faqs.map((item, idx) => (
              <div key={idx} className="cf-faq-block">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsFaqs;