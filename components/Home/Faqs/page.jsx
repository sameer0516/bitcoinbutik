"use client";

import React, { useState } from "react";
import "./Faqs.css";

const faqs = [
  {
    q: "1. What is Bitcoin Butik?",
    a: "Bitcoin Butik is a premium Bitcoin jewelry store offering luxury Bitcoin jewelry designed for enthusiasts, investors, and believers in the future of decentralized money.",
  },
  {
    q: "2. What makes Bitcoin Butik different from other jewelry brands?",
    a: "Bitcoin Butik focuses on meaning, not just design. Every piece represents the belief that Bitcoin is real money and symbolizes financial independence and decentralization.",
  },
  {
    q: "3. What type of products does Bitcoin Butik offer?",
    a: "We offer a wide range of Bitcoin jewelry, including pendants, rings, bracelets, earrings, custom jewelry, and Bitcoin-themed gifts.",
  },
  {
    q: "4. Can I buy Bitcoin jewelry online from Bitcoin Butik?",
    a: "Yes, you can easily buy Bitcoin jewelry online through our website with a secure and seamless shopping experience.",
  },
  {
    q: "5. Do you offer custom Bitcoin jewelry?",
    a: "Yes, Bitcoin Butik provides custom Bitcoin jewelry services where you can create unique designs, engravings, or personalized pieces.",
  },
  {
    q: "6. Is Bitcoin jewelry only for Bitcoin investors?",
    a: "No, Bitcoin jewelry is for anyone who believes in financial freedom, innovation, and the future of money—not just investors.",
  },
  {
    q: "7. What materials are used in Bitcoin Butik jewelry?",
    a: "Our jewelry is crafted using high-quality materials designed for durability, a premium look, and long-lasting wear.",
  },
  {
    q: "8. Are your products limited edition?",
    a: "Yes, many of our collections include limited edition jewelry released in small batches to maintain exclusivity and uniqueness.",
  },
  {
    q: "9. Is Bitcoin Butik jewelry suitable for daily wear?",
    a: "Yes, our jewelry is designed for both everyday wear and special occasions, combining comfort with premium design.",
  },
  {
    q: "10. Do you offer Bitcoin jewelry for both men and women?",
    a: "Yes, we offer collections specifically designed for both men and women, including pendants, rings, and more.",
  },
  {
    q: "11. What is the meaning behind Bitcoin jewelry?",
    a: "Bitcoin jewelry represents decentralization, financial independence, digital ownership, and belief in the future of money.",
  },
  {
    q: "12. Can Bitcoin jewelry be gifted?",
    a: "Yes, Bitcoin jewelry makes a meaningful and unique gift for birthdays, anniversaries, and special occasions.",
  },
  {
    q: "13. Do you ship internationally?",
    a: "Yes, Bitcoin Butik serves a global audience and offers international shipping options.",
  },
  {
    q: "14. How do I choose the right Bitcoin jewelry?",
    a: "You can choose based on your style—bold statement pieces, minimal designs, or personalized custom jewelry.",
  },
  {
    q: "15. Is Bitcoin jewelry a good investment?",
    a: "While jewelry is primarily a lifestyle and symbolic product, Bitcoin jewelry holds strong personal and cultural value for enthusiasts.",
  },
  {
    q: "16. How do I care for my Bitcoin jewelry?",
    a: "To maintain quality, store your jewelry properly, avoid harsh chemicals, and clean it gently with a soft cloth.",
  },
  {
    q: "17. Are your designs unique?",
    a: "Yes, Bitcoin Butik focuses on unique, meaningful, and limited-edition designs that stand out from mass-produced jewelry.",
  },
  {
    q: "18. What is a Bitcoin jewelry store?",
    a: "A Bitcoin jewelry store offers jewelry inspired by cryptocurrencies like Bitcoin, combining fashion with digital finance culture.",
  },
  {
    q: "19. Why is Bitcoin considered real money?",
    a: "Bitcoin is decentralized, limited in supply, and not controlled by any authority, making it a strong alternative to traditional currency systems.",
  },
  {
    q: "20. Why should I choose Bitcoin Butik?",
    a: "Bitcoin Butik offers premium quality, meaningful designs, limited edition collections, and a strong philosophy centered on Bitcoin as real money.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-wrapper">
      {/* ---------- Section 1:  Bitcoin Jewelry ---------- */}
      <div className="accordion-item">
        <button
          className="accordion-header"
          onClick={() => toggle(0)}
          aria-expanded={openIndex === 0}
        >
          <h2 className={`arrow ${openIndex === 0 ? "open" : ""}`}>▶</h2>
           Bitcoin Jewelry
        </button>

        {openIndex === 0 && (
          <div className="accordion-content">
            <h2>Bitcoin Butik — Luxury Bitcoin Jewelry for the Future of Real Money</h2>

            <h3>Bitcoin Is Real Money — And Now You Can Wear It</h3>
            <p>
              At Bitcoin Butik, we stand by a powerful and uncompromising belief:{" "}
              <strong>Bitcoin is not just crypto—Bitcoin is real money.</strong>
            </p>
            <p>
              It is more than a digital asset. Bitcoin represents true financial
              freedom, complete ownership, and independence from traditional
              systems controlled by banks and governments. It is a global
              movement that is reshaping how the world understands value,
              wealth, and trust.
            </p>
            <p>
              As Bitcoin continues to redefine the future of finance, it is no
              longer something that exists only on a screen. It has become an
              identity, a mindset, and a statement of belief.
            </p>
            <p>Now, with Bitcoin Butik, you can take that belief beyond the digital world.</p>
            <p>
              Our exclusive collection of <strong>luxury Bitcoin jewelry</strong> is
              designed for those who truly understand Bitcoin — not just as an
              investment, but as a revolution. Each piece is crafted to symbolize
              decentralization, empowerment, and the confidence of owning real
              money.
            </p>
            <p>
              Bitcoin Butik is more than just a brand. It is a purpose-driven{" "}
              <strong>Bitcoin jewelry store</strong> built for Bitcoin enthusiasts,
              investors, and believers who want to express their connection to
              the future of money in a bold and meaningful way.
            </p>
            <p>When you wear Bitcoin, you don't just follow a trend—you represent a movement.</p>

            <h2>Discover Premium Bitcoin Jewelry for True Enthusiasts</h2>
            <p>
              Bitcoin Butik offers a distinctive range of{" "}
              <strong>Bitcoin jewelry</strong> crafted for investors, enthusiasts,
              and forward thinkers who truly understand the real value of
              Bitcoin.
            </p>
            <p>
              Our collection is thoughtfully designed to go beyond aesthetics. It
              combines modern craftsmanship with deep meaning, creating premium{" "}
              <strong>Bitcoin jewelry</strong> that reflects the core principles of
              Bitcoin:
            </p>
            <ul>
              <li>Financial freedom</li>
              <li>Decentralization</li>
              <li>Digital ownership</li>
            </ul>

            <p>
              Each piece is more than an accessory — it is a symbol of
              independence and belief in a new financial system.
            </p>
            <p>
              Whether you prefer bold statement designs that stand out or
              minimal pieces for everyday wear, Bitcoin Butik ensures that every
              product carries both style and purpose.
            </p>
            <p>
              With every piece you wear, you don't just showcase fashion — you
              express your confidence in Bitcoin as real money and your
              connection to the future of finance.
            </p>

            <h2>Buy Bitcoin Jewelry That Represents Your Belief</h2>
            <p>
              If you are looking to <strong>buy Bitcoin jewelry</strong>, Bitcoin
              Butik offers designs that go far beyond ordinary fashion. Each
              piece is created to represent a deeper belief—that Bitcoin is real
              money and the future of finance.
            </p>
            <p><strong>Our collection is crafted for individuals who are part of this financial evolution:</strong></p>
            <ul>
              <li>Bitcoin holders (HODLers)</li>
              <li>Bitcoin investors</li>
              <li>Blockchain believers</li>
              <li>Individuals exploring how to buy Bitcoin</li>
            </ul>

            <p>
              At Bitcoin Butik, every design carries purpose. It is not just
              about how it looks, but also what it stands for—independence,
              ownership, and confidence in a decentralized system.
            </p>
            <p>
              Whether you are new to Bitcoin or a long-time supporter, our
              premium <strong>Bitcoin jewelry</strong> allows you to express your
              belief with clarity and pride.
            </p>
            <p>
              When you wear Bitcoin jewelry, you are not just making a style
              choice—you are making a statement about the future of money.
            </p>

            <h2>Explore the Bitcoin Butik Collection</h2>
            <p>
              At Bitcoin Butik, every piece of jewelry is designed with
              purpose—to represent the belief that <strong>Bitcoin is real money</strong>{" "}
              and a symbol of financial independence. Our collections are
              carefully curated to combine luxury, meaning, and everyday
              wearability for true Bitcoin enthusiasts.
            </p>
            <p>
              Whether you are looking to make a bold statement or prefer
              something minimal and refined, Bitcoin Butik offers a complete
              range of <strong>Bitcoin jewelry</strong> crafted for modern investors
              and forward thinkers.
            </p>

            <h3>1. Bitcoin Pendants</h3>
            <p>
              Our <a href="/collections/pendants/">Bitcoin pendants</a> are iconic pieces designed to
              keep your belief close at all times. Crafted with precision and
              premium materials, these pendants are perfect for everyday wear
              while making a powerful statement.
            </p>
            <p>Explore:</p>
            <ul>
              <li><a href="collections/pendants/pendant-women">Pendants for Women</a> — Elegant, minimal, and meaningful designs</li>
              <li><a href="collections/pendants/pendant-mens">Pendants for Men</a> — Bold, strong, and statement-driven styles</li>
            </ul>

            <h3>2. Bitcoin Rings</h3>
            <p>
              The <a href="collections/rings">Bitcoin rings</a> collection is designed for those
              who want to carry their belief in a subtle yet impactful way.
              Each ring symbolizes commitment to a decentralized future and
              confidence in real money.
            </p>
            <p>Perfect for daily wear or special occasions, these rings combine style with strong meaning.</p>

            <h3>3. Bitcoin Bracelets</h3>
            <p>
              Our <a href="collections/bracelets">Bitcoin bracelets</a> offer a perfect blend of
              comfort, durability, and identity. Designed for everyday use,
              these pieces allow you to express your belief in Bitcoin
              effortlessly while maintaining a premium look.
            </p>

            <h3>4. Bitcoin Earrings</h3>
            <p>
              For those who prefer a minimal yet expressive style, our{" "}
              <a href="collections/earrings">Bitcoin earrings</a> add a modern touch while
              representing your connection to the future of finance.
            </p>
            <p>These designs are ideal for both casual and refined looks.</p>

            <h3>5. Custom Bitcoin Jewelry</h3>
            <p>
              Make your vision a reality with our{" "}
              <a href="custom-bitcoin-jewellery">custom Bitcoin jewelry</a> service. At Bitcoin Butik, we
              understand that your connection to Bitcoin is personal.
            </p>
            <p>
              Whether you want a custom design, engraving, or a completely
              unique piece, we help you create jewelry that truly represents
              your journey.
            </p>

            <h3>6. Bitcoin Jewelry Gifts</h3>
            <p>
              Looking for something meaningful? Our{" "}
              <a href="bitcoin-jewellery-gifts">Bitcoin jewelry gifts</a> collection is perfect for
              special occasions.
            </p>
            <p>
              Whether it's for a fellow enthusiast or someone new to Bitcoin,
              these pieces make memorable and valuable gifts that go beyond
              ordinary jewelry.
            </p>

            <h2>Designed for Believers in the Future of Money</h2>
            <p>
              Every collection at Bitcoin Butik reflects a deeper
              philosophy—combining luxury craftsmanship with the principles of
              Bitcoin.
            </p>
            <p>This is more than jewelry.</p>
            <p>This is identity, belief, and the future of money.</p>
            <p>Explore the collections and find the piece that represents you.</p>

            <h2>Limited Edition Jewelry for Exclusive Style</h2>
            <p>
              Bitcoin Butik specializes in <strong>limited edition jewelry</strong>{" "}
              crafted for individuals who value uniqueness, rarity, and
              meaning. Each design is created with intention, ensuring that
              every piece stands apart from mass-produced fashion.
            </p>
            <p>
              Our <strong>limited edition fashion jewelry</strong> collections are
              released in carefully controlled small batches, giving every
              product a sense of exclusivity and individuality. When you own a
              piece from Bitcoin Butik, you own something not everyone can
              have.
            </p>
            <p><strong>Why choose limited edition?</strong></p>
            <ul>
              <li>Rare and distinctive designs</li>
              <li>Premium craftsmanship and attention to detail</li>
              <li>A strong sense of personal identity and expression</li>
            </ul>
            <p>
              These pieces are more than accessories — they are a reflection of
              your belief in Bitcoin and your place in a forward-thinking
              community.
            </p>
            <p>
              This is not ordinary jewelry — this is{" "}
              <strong>Bitcoin-inspired exclusivity</strong>, designed for those who
              lead, not follow.
            </p>

            <h2>More Than Jewelry — A Bitcoin Lifestyle</h2>
            <p>Bitcoin is not just something you own. It is something you believe in.</p>
            <p>
              It represents a shift in how the world understands money —
              moving away from centralized control toward true ownership,
              transparency, and financial freedom. For those who understand
              Bitcoin, it becomes more than an asset; it becomes a mindset and
              a way of life.
            </p>
            <p>
              Bitcoin Butik brings that belief into the real world through a
              premium <strong>Bitcoin jewelry store</strong> experience designed for
              modern investors and forward thinkers.
            </p>
            <p><strong>When you wear Bitcoin jewelry, you represent the following:</strong></p>
            <ul>
              <li>Financial independence</li>
              <li>A decentralized future</li>
              <li>Confidence in real money</li>
            </ul>
            <p>
              Each piece is a reflection of your values — a symbol that
              connects your identity with the future of finance.
            </p>
            <p>
              This is where lifestyle meets financial philosophy and where
              Bitcoin becomes something you don't just hold—you live it.
            </p>

            <h2>Why Choose Bitcoin Butik?</h2>
            <p>
              Bitcoin Butik is built for individuals who see Bitcoin as more
              than a trend—but as real money and a transformative financial
              force.
            </p>
            <p>We focus on delivering meaning, quality, and exclusivity through every piece we create.</p>
            <ul>
              <li>Exclusive <strong>luxury Bitcoin jewelry</strong> collection designed for true enthusiasts</li>
              <li>Premium and meaningful <strong>Bitcoin jewelry</strong> that reflects your belief</li>
              <li>High-quality <strong>Bitcoin jewelry</strong> with modern, timeless designs</li>
              <li>Unique <strong>limited edition jewelry</strong> crafted in small, exclusive batches</li>
              <li>A trusted destination to <strong>buy Bitcoin jewelry</strong> with confidence</li>
            </ul>
            <p>
              Every detail at Bitcoin Butik is carefully considered to ensure
              that each piece is not just visually appealing but deeply
              symbolic.
            </p>
            <p>
              Bitcoin Butik is built for those who understand the value of
              Bitcoin beyond price — those who believe in ownership,
              independence, and the future of decentralized money.
            </p>

            <h2>Our Craftsmanship — Designed with Purpose</h2>
            <p>
              At Bitcoin Butik, every piece of jewelry is created with
              precision, intention, and attention to detail. We focus on
              delivering not just design, but meaning in every element.
            </p>
            <p>
              From material selection to finishing, our process ensures that
              each piece reflects both <strong>luxury and the philosophy of
              Bitcoin</strong>.
            </p>
            <p>We believe that if Bitcoin represents the future of money, it deserves to be represented through products that are:</p>
            <ul>
              <li>Durable and long-lasting</li>
              <li>Visually refined and premium</li>
              <li>Symbolically powerful</li>
            </ul>
            <p>This commitment to quality ensures that every piece you wear becomes a lasting part of your identity.</p>

            <h2>Who Is Bitcoin Butik For?</h2>
            <p>Bitcoin Butik is built for individuals who understand that Bitcoin is more than a trend—it is a transformation.</p>
            <p><strong>Our collections are designed for:</strong></p>
            <ul>
              <li>Bitcoin investors and long-term holders</li>
              <li>Bitcoin enthusiasts and early adopters</li>
              <li>Individuals exploring financial independence</li>
              <li>People who believe in decentralized systems</li>
              <li>Gift buyers looking for meaningful, modern jewelry</li>
            </ul>
            <p>Whether you are deeply involved in the Bitcoin space or just beginning your journey, Bitcoin Butik helps you express that connection in a tangible way.</p>

            <h2>A Global Movement You Can Wear</h2>
            <p>Bitcoin is not limited by borders, and neither is its community.</p>
            <p>Bitcoin Butik represents a global mindset. When you wear Bitcoin jewelry, you become part of a worldwide movement that values the following:</p>
            <ul>
              <li>Freedom over control</li>
              <li>Ownership over dependency</li>
              <li>Transparency over trust in institutions</li>
            </ul>
            <p>Our designs are inspired by this global shift, allowing you to carry that energy with you wherever you go.</p>

            <h2>The Perfect Gift for Bitcoin Enthusiasts</h2>
            <p>Finding a meaningful gift can be challenging—but Bitcoin jewelry makes it simple.</p>
            <p>Whether it's a birthday, anniversary, celebration, or milestone, Bitcoin Butik offers pieces that go beyond traditional gifting.</p>
            <p><strong>Why Bitcoin jewelry is the perfect gift:</strong></p>
            <ul>
              <li>Unique and modern concept</li>
              <li>Strong symbolic value</li>
              <li>Ideal for Bitcoin enthusiasts</li>
              <li>Memorable and conversation-starting</li>
            </ul>
            <p>A Bitcoin piece is not just a gift—it's a message about the future.</p>

            <h2>Built on Belief, Not Just Design</h2>
            <p>Bitcoin Butik is not driven by trends. It is driven by belief.</p>
            <p>
              We believe that Bitcoin is real money.
              <br />
              We believe in financial independence.
              <br />
              We believe in a decentralized future.
            </p>
            <p>Every product we create is an extension of that belief.</p>
            <p>This is what makes Bitcoin Butik is different—we don't just sell jewelry; we represent a movement.</p>

            <h2>Join the Bitcoin Butik Community</h2>
            <p>Bitcoin is more than technology—it is a community of thinkers, builders, and believers.</p>
            <p>When you choose Bitcoin Butik, you become part of a growing network of individuals who share a common vision for the future of money.</p>
            <p>Stay connected, explore new designs, and continue expressing your belief through pieces that truly matter.</p>
            <p>
              Bitcoin is not just something you own.
              <br />
              It is something you love.
              <br />
              And Bitcoin Butik is here to represent that journey.
            </p>

            <h2>Step Into the Future with Bitcoin Butik</h2>
            <p>The financial world is evolving, and Bitcoin is leading that change.</p>
            <p>Bitcoin Butik helps you connect with that movement — not just digitally, but physically.</p>
            <p>
              Explore our collection and discover how{" "}
              <strong>Bitcoin becomes more than money — it becomes identity.</strong>
            </p>
            <p>Start exploring now and wear what you believe in with premium Bitcoin jewelry.</p>
          </div>
        )}
      </div>

      {/* ---------- Section 2: FAQs ---------- */}
      <div className="accordion-item">
        <button
          className="accordion-header"
          onClick={() => toggle(1)}
          aria-expanded={openIndex === 1}
        >
          <h2 className={`arrow ${openIndex === 1 ? "open" : ""}`}>▶</h2>
          Frequently Asked Questions
        </button>

        {openIndex === 1 && (
          <div className="accordion-content">
          
            {faqs.map((item, idx) => (
              <div key={idx} className="faq-block">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;