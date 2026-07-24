'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './bitcoingift.module.css';

const API_URL = 'https://api.bitcoinbutik.com';

const REMOVE_CATEGORIES = ['woman pendant', 'man pendant'];

const CAPITALIZE_ONLY = ['ring', 'bracelet', 'earring'];

function groupProductsByCategory(products) {
    const map = new Map();

    products.forEach(product => {
        const cat = (product.category || 'Other').trim();
        const catLower = cat.toLowerCase();

        if (REMOVE_CATEGORIES.includes(catLower)) return;

        const isCapOnly = CAPITALIZE_ONLY.includes(catLower);
        if (isCapOnly && cat === catLower) return;

        if (!map.has(cat)) map.set(cat, []);
        map.get(cat).push(product);
    });

    return Array.from(map.entries()).map(([label, prods]) => ({
        key: label,
        label: label,
        products: prods,
    }));
}

function ProductCard({ product }) {
    const imageUrl =
        product.image?.length > 0
            ? `${API_URL}/${product.image[0].replace(/\\/g, '/')}`
            : null;

    const silverPrice =
        product.hasSilver !== false && product.price != null
            ? `$${Number(product.price).toFixed(2)}`
            : null;

    const goldPrice =
        product.hasGold !== false && product.goldPrice != null
            ? `$${Number(product.goldPrice).toFixed(2)}`
            : null;

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrap}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={product.title}
                        className={styles.cardImage}
                        loading="lazy"
                    />
                ) : (
                    <div className={styles.cardImagePlaceholder}>
                        <span>₿</span>
                    </div>
                )}
                {product.stock === 0 && (
                    <div className={styles.soldOutBadge}>Sold Out</div>
                )}
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <div className={styles.cardPrices}>
                    {silverPrice && (
                        <span className={styles.priceTag}>
                            <span className={styles.priceLabel}>Silver</span>
                            {silverPrice}
                        </span>
                    )}
                    {goldPrice && (
                        <span className={`${styles.priceTag} ${styles.priceTagGold}`}>
                            <span className={styles.priceLabel}>Gold</span>
                            {goldPrice}
                        </span>
                    )}
                    {!silverPrice && !goldPrice && (
                        <span className={styles.priceTag}>View Price</span>
                    )}
                </div>
            </div>
        </div>
    );
}

function CategoryRow({ label, products }) {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const timer = setTimeout(checkScroll, 150);
        el.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        return () => {
            clearTimeout(timer);
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [products]);

    const scroll = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const slide = el.querySelector(`.${styles.cardSlide}`);
        const cardWidth = slide ? slide.offsetWidth + 20 : 280;
        el.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
    };

    return (
        <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <div className={styles.categoryTitleGroup}>
                    <span className={styles.categoryIcon}>✦</span>
                    <h2 className={styles.categoryTitle}>{label}</h2>
                    <span className={styles.categoryCount}>{products.length} Items</span>
                </div>
                <div className={styles.navBtns}>
                    <button
                        className={`${styles.navBtn} ${!canScrollLeft ? styles.navBtnDisabled : ''}`}
                        onClick={() => scroll(-1)}
                        aria-label="Scroll left"
                        disabled={!canScrollLeft}
                    >
                        ←
                    </button>
                    <button
                        className={`${styles.navBtn} ${!canScrollRight ? styles.navBtnDisabled : ''}`}
                        onClick={() => scroll(1)}
                        aria-label="Scroll right"
                        disabled={!canScrollRight}
                    >
                        →
                    </button>
                </div>
            </div>

            <div className={styles.sliderOuter}>
                <div className={styles.sliderTrack} ref={trackRef}>
                    {products.map(product => (
                        <div key={product._id} className={styles.cardSlide}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                {canScrollLeft && <div className={`${styles.fadeEdge} ${styles.fadeLeft}`} />}
                {canScrollRight && <div className={`${styles.fadeEdge} ${styles.fadeRight}`} />}
            </div>
        </section>
    );
}

export default function BitcoinGiftClient() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/api/products`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                const uniqueCats = [...new Set(data.map(p => p.category))];
                console.log('📦 DB Categories (exact):', uniqueCats);

                setGroups(groupProductsByCategory(data));
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError('Could not load products. Please try again.');
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.pageRoot}>
            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Best Bitcoin Jewelry Gifts for Bitcoin Lovers for Every Occasion
                    </h1>
                    <p className={styles.heroSub}>
                        Timeless pieces for every crypto lover — pendants, rings, earrings & more.
                    </p>
                </div>
                <div className={styles.heroDivider} />
            </div>

            {/* Categories */}
            <div className={styles.pageContent}>
                {loading && (
                    <div className={styles.stateCenter}>
                        <div className={styles.spinner} />
                        <p className={styles.stateText}>Loading collections…</p>
                    </div>
                )}

                {error && !loading && (
                    <div className={styles.stateCenter}>
                        <p className={styles.errorText}>{error}</p>
                    </div>
                )}

                {!loading && !error && groups.length === 0 && (
                    <div className={styles.stateCenter}>
                        <p className={styles.stateText}>No products found.</p>
                    </div>
                )}

                {!loading && !error && groups.map(group => (
                    <CategoryRow
                        key={group.key}
                        label={group.label}
                        products={group.products}
                    />
                ))}

                {/* ─── Info Dropdowns: Article + FAQ ─── */}
                <div className={styles.infoAccordionWrapper}>
                     <details className={styles.infoAccordionItem}>
                        <summary className={styles.infoAccordionSummary}>
                            Bitcoin Jewelry Gifts
                        </summary>
                        <div className={styles.infoAccordionContent}>
                            <h2>Bitcoin Jewelry Gifts – Best Gifts for Bitcoin Lovers &amp; Bitcoin Enthusiasts</h2>

                            <h3>Best Gifts for Bitcoin Lovers – Meaningful Bitcoin-Inspired Jewelry</h3>

                            <p>
                                Finding the perfect gift for someone passionate about Bitcoin and cryptocurrency can be
                                challenging. At Bitcoin Butik, we offer a unique collection of{' '}
                                <strong>Bitcoin jewelry gifts</strong> designed for individuals who believe in
                                innovation, digital freedom, and the future of decentralized finance.
                            </p>

                            <p>
                                Our collection is created for those looking beyond traditional gifts and searching for
                                something meaningful, stylish, and connected to the Bitcoin world. Whether you are
                                looking for the <strong>best gifts for Bitcoin lovers</strong>, a memorable{' '}
                                <strong>best Bitcoin gift</strong>, or a unique present for a Bitcoin enthusiast, our
                                jewelry pieces combine modern design with deeper symbolism.
                            </p>

                            <p>
                                Each Bitcoin-inspired jewelry piece represents more than fashion—it reflects confidence,
                                independence, innovation, and a forward-thinking mindset. From elegant pendants to
                                stylish rings, bracelets, and earrings, every design allows Bitcoin enthusiasts to
                                express their passion in a sophisticated way.
                            </p>

                            <p>
                                At Bitcoin Butik, we believe the best gifts are those that carry meaning. Our{' '}
                                <strong>Bitcoin jewelry gifts</strong> are designed to become lasting reminders of
                                beliefs, achievements, and connections to the future of technology and finance.
                            </p>

                            <h3>Explore the Best Bitcoin Gifts Collection</h3>

                            <p>
                                Choosing a gift for a Bitcoin enthusiast becomes easier when the present reflects their
                                passion and personality. Our <strong>best Bitcoin gifts</strong> collection features
                                premium Bitcoin-inspired jewelry designed for people who appreciate innovation, luxury,
                                and modern identity.
                            </p>

                            <p>
                                Whether you are celebrating a special occasion or simply want to surprise someone with a
                                unique gift, Bitcoin Butik offers carefully designed pieces that stand apart from
                                ordinary presents.
                            </p>

                            <p><strong>Our Bitcoin gift collection includes:</strong></p>
                            <ul>
                                <li><Link href="/collections/pendants/pendant-women">Bitcoin pendants</Link> – Meaningful designs that represent Bitcoin culture, innovation, and modern financial thinking</li>
                                <li><Link href="/collections/rings">Bitcoin rings</Link> – Stylish pieces that symbolize confidence, individuality, and connection to the digital world</li>
                                <li><Link href="/collections/bracelets">Bitcoin bracelets</Link> – Elegant accessories that combine fashion with Bitcoin-inspired identity</li>
                                <li><Link href="/collections/earrings">Bitcoin earrings</Link> – Unique designs for those who appreciate modern and innovative jewelry</li>
                                <li><Link href="/custom-bitcoin-jewellery">Custom Bitcoin jewelry</Link> – Personalized creations designed around individual preferences and stories</li>
                            </ul>

                            <p>
                                Every piece is crafted with attention to detail, premium finishing, and a focus on
                                creating jewelry that feels exclusive and meaningful.
                            </p>

                            <h3>Best Bitcoin Gift for Bitcoin Lovers</h3>

                            <p>
                                A great gift should represent more than just appearance—it should reflect the interests,
                                values, and personality of the person receiving it. A <strong>great Bitcoin gift</strong>{' '}
                                is one that connects with their passion for blockchain technology, financial innovation,
                                and the future of digital assets.
                            </p>

                            <p>
                                Bitcoin Butik offers jewelry pieces that allow Bitcoin lovers to carry their beliefs with
                                confidence. These designs combine luxury craftsmanship with Bitcoin-inspired concepts,
                                making them ideal gifts for anyone who appreciates the <strong>Bitcoin</strong> movement.
                            </p>

                            <p><strong>Perfect occasions for gifting Bitcoin jewelry includes:</strong></p>
                            <ul>
                                <li>Bitcoin investor milestones</li>
                                <li>Bitcoin achievements and celebrations</li>
                                <li>Birthdays and anniversaries</li>
                                <li>Holiday gifts</li>
                                <li>Business achievements</li>
                                <li>Personal success moments</li>
                            </ul>

                            <p>
                                A Bitcoin-inspired jewelry piece is not just a gift—it is a symbol of belief, progress,
                                and a modern way of thinking.
                            </p>

                            <h3>Why Bitcoin Jewelry Makes the Perfect Bitcoin Gift</h3>

                            <p>
                                Traditional gifts often focus only on appearance, but Bitcoin jewelry carries a deeper
                                meaning. It represents innovation, independence, and a connection to the evolving world
                                of digital finance.
                            </p>

                            <p>Bitcoin-inspired jewelry makes a memorable gift because it offers the following:</p>
                            <ul>
                                <li><strong>Personal meaning</strong> – Represents passion for Bitcoin and blockchain innovation</li>
                                <li><strong>Unique identity</strong> – Helps Bitcoin lovers express their beliefs through style</li>
                                <li><strong>Modern luxury</strong> – Combines premium jewelry craftsmanship with futuristic concepts</li>
                                <li><strong>Long-lasting value</strong> – Creates a memorable keepsake that can be cherished for years</li>
                                <li><strong>Versatile styling</strong> – Suitable for everyday wear and special occasions</li>
                            </ul>

                            <p>
                                Whether someone is a Bitcoin investor, blockchain enthusiast, or simply interested in
                                modern technology, Bitcoin-inspired jewelry makes a thoughtful and distinctive gift
                                choice.
                            </p>

                            <h3>Gifts for Bitcoin Lovers – Designed with Purpose</h3>

                            <p>
                                For Bitcoin enthusiasts, the best gifts are those that connect with their journey and
                                mindset. At Bitcoin Butik, our collection of{' '}
                                <strong>best gifts for Bitcoin lovers</strong> is designed to celebrate passion,
                                innovation, and individuality.
                            </p>

                            <p>
                                Each jewelry piece reflects the spirit of Bitcoin through modern designs and meaningful
                                details. Whether it is a subtle pendant for everyday wear or a bold statement piece,
                                every creation allows the wearer to showcase their connection to the Bitcoin world.
                            </p>

                            <p><strong>Our Bitcoin gifts are ideal for:</strong></p>
                            <ul>
                                <li>Bitcoin investors and Bitcoin holders</li>
                                <li>Blockchain enthusiasts</li>
                                <li>Technology lovers</li>
                                <li>Entrepreneurs and innovators</li>
                                <li>People who appreciate unique luxury jewelry</li>
                            </ul>

                            <p>
                                With Bitcoin Butik, you can give a gift that represents more than style—it represents a
                                vision for the future.
                            </p>

                            <h3>Premium Craftsmanship &amp; Meaningful Designs</h3>

                            <p>
                                At Bitcoin Butik, every Bitcoin jewelry gift is created with attention to quality,
                                detail, and design. We combine modern craftsmanship with Bitcoin-inspired creativity to
                                create pieces that feel premium and unique.
                            </p>

                            <p><strong>Our jewelry focuses on:</strong></p>
                            <ul>
                                <li>Detailed and refined designs</li>
                                <li>High-quality finishes</li>
                                <li>Comfortable everyday wear</li>
                                <li>Long-lasting beauty</li>
                                <li>Meaningful Bitcoin-inspired concepts</li>
                            </ul>

                            <p>
                                Each piece is designed to become a lasting symbol of identity, innovation, and personal
                                expression.
                            </p>

                            <h3>Personalized Bitcoin Gifts for a Special Touch</h3>

                            <p>
                                Looking for something even more unique? Our <strong>custom Bitcoin jewelry</strong>{' '}
                                options allow you to create personalized gifts that carry special meaning.
                            </p>

                            <p>
                                From customized pendants to personalized bracelets, you can design a piece that reflects
                                the personality, journey, or achievements of the person receiving it.
                            </p>

                            <p><strong>Personalized Bitcoin gifts are perfect for:</strong></p>
                            <ul>
                                <li>Special celebrations</li>
                                <li>Bitcoin milestones</li>
                                <li>Anniversary gifts</li>
                                <li>Unique personal keepsakes</li>
                                <li>Memorable achievements</li>
                            </ul>

                            <p>A customized jewelry piece transforms a simple gift into something truly unforgettable.</p>

                            <h3>Why Choose Bitcoin Butik for Bitcoin Gifts?</h3>

                            <p>
                                At Bitcoin Butik, we create jewelry that combines luxury, innovation, and personal
                                meaning. Our Bitcoin-inspired gifts are designed for people who want something different
                                from traditional presents.
                            </p>

                            <p><strong>Why choose us:</strong></p>
                            <ul>
                                <li>Exclusive Bitcoin-inspired jewelry designs</li>
                                <li>Premium craftsmanship and finishing</li>
                                <li>Wide range of gifts for Bitcoin lovers</li>
                                <li>Unique combination of fashion and technology</li>
                                <li>Custom jewelry options available</li>
                                <li>Meaningful designs for modern identities</li>
                            </ul>

                            <p>
                                Every piece from Bitcoin Butik represents confidence, innovation, and a connection to the
                                future of finance.
                            </p>

                            <h3>Shop the Best Bitcoin Gifts &amp; Bitcoin Jewelry Gifts Today</h3>

                            <p>
                                Discover the perfect gift for Bitcoin enthusiasts with Bitcoin Butik's exclusive
                                collection of <Link href="/collections">bitcoin jewelry</Link> gifts. Whether you are
                                searching for the <strong>best gifts for Bitcoin lovers</strong>, the{' '}
                                <strong>best Bitcoin gifts</strong>, or a memorable{' '}
                                <strong>best Bitcoin gift, find jewelry</strong> that combines elegance, meaning, and
                                modern identity.
                            </p>

                            <p>Give a gift that goes beyond ordinary jewelry—give a symbol of innovation, belief, and the future.</p>
                        </div>
                    </details>

                    {/* Dropdown 2: Frequently Asked Questions */}
                    <details className={styles.infoAccordionItem}>
                        <summary className={styles.infoAccordionSummary}>
                            Frequently Asked Questions
                        </summary>
                        <div className={styles.infoAccordionContent}>
                            <h2>Frequently Asked Questions</h2>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>1. What are the best gifts for Bitcoin lovers?</p>
                                <p>The best gifts for Bitcoin lovers are unique and meaningful items that reflect their passion for digital currency and innovation. Bitcoin-inspired jewelry such as pendants, rings, bracelets, and earrings makes a stylish and memorable choice.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>2. Why is Bitcoin jewelry considered a good gift for Bitcoin enthusiasts?</p>
                                <p>Bitcoin jewelry combines personal style with symbolic meaning. It represents innovation, independence, modern thinking, and a connection to the cryptocurrency world.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>3. What makes Bitcoin Butik gifts different from traditional gifts?</p>
                                <p>Bitcoin Butik gifts go beyond ordinary accessories by combining premium jewelry craftsmanship with Bitcoin-inspired designs, creating pieces that represent identity and personal beliefs.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>4. What are the best Bitcoin gifts for Bitcoin lovers?</p>
                                <p>Popular Bitcoin gifts include Bitcoin pendants, Bitcoin rings, Bitcoin bracelets, Bitcoin earrings, and customized Bitcoin jewelry designed for Bitcoin enthusiasts.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>5. Is Bitcoin jewelry suitable for everyday wear?</p>
                                <p>Yes, Bitcoin jewelry is designed for both everyday styling and special occasions. The pieces are crafted to provide comfort, durability, and a premium appearance.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>6. Can Bitcoin jewelry be gifted for special occasions?</p>
                                <p>Yes, Bitcoin jewelry makes a meaningful gift for birthdays, anniversaries, achievements, holidays, and important milestones.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>7. What types of Bitcoin jewelry gifts are available?</p>
                                <p>Bitcoin Butik offers a variety of Bitcoin-inspired gifts, including pendants, rings, bracelets, earrings, and personalized custom jewelry designs.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>8. Are Bitcoin gifts suitable for both men and women?</p>
                                <p>Yes, Bitcoin-inspired jewelry gifts are designed for both men and women, with styles ranging from minimal designs to bold statement pieces.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>9. What is the best Bitcoin gift for a Bitcoin investor?</p>
                                <p>A Bitcoin-inspired jewelry piece is a unique Bitcoin gift choice because it allows investors to express their passion for Bitcoin in a stylish and meaningful way.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>10. Can I give Bitcoin jewelry as a gift to someone who loves cryptocurrency?</p>
                                <p>Yes, Bitcoin jewelry is an ideal gift for cryptocurrency enthusiasts, blockchain supporters, and anyone interested in digital innovation.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>11. Are Bitcoin jewelry gifts available in custom designs?</p>
                                <p>Yes, Bitcoin Butik offers custom Bitcoin jewelry options where you can create personalized pendants, bracelets, and other unique pieces.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>12. What makes a Bitcoin pendant a good gift?</p>
                                <p>A Bitcoin pendant is a meaningful gift because it represents innovation, confidence, and belief in the future of digital finance while adding a stylish touch.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>13. Are Bitcoin gifts only for Bitcoin investors?</p>
                                <p>No, Bitcoin gifts are suitable for anyone interested in technology, innovation, modern fashion, or unique jewelry concepts.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>14. Can Bitcoin jewelry be gifted to someone new to Bitcoin?</p>
                                <p>Yes, Bitcoin jewelry can be a thoughtful introduction to the world of cryptocurrency and digital innovation through a stylish and meaningful accessory.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>15. What occasions are perfect for gifting Bitcoin jewelry?</p>
                                <p>Bitcoin jewelry is perfect for birthdays, anniversaries, career achievements, Bitcoin milestones, celebrations, and personal accomplishments.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>16. Why choose Bitcoin Butik for Bitcoin gifts?</p>
                                <p>Bitcoin Butik offers unique Bitcoin-inspired designs, premium craftsmanship, modern styles, and meaningful jewelry options created for Bitcoin enthusiasts.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>17. Are Bitcoin jewelry gifts long-lasting?</p>
                                <p>Yes, Bitcoin jewelry is designed with quality craftsmanship and durable materials to maintain its beauty and style over time.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>18. Can I gift Bitcoin jewelry to someone who prefers luxury items?</p>
                                <p>Yes, Bitcoin-inspired jewelry combines modern technology concepts with luxury design, making it suitable for people who appreciate premium accessories.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>19. What is a unique gift idea for Bitcoin lovers?</p>
                                <p>A personalized Bitcoin pendant, Bitcoin ring, or custom Bitcoin jewelry piece can be a unique gift that reflects the recipient's interests and personality.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <p className={styles.faqQuestion}>20. How do I choose the right Bitcoin gift for someone?</p>
                                <p>Consider the person's style, preferences, and personality. Minimal pendants suit everyday wear, while statement pieces and custom designs make more personalized gifts.</p>
                            </div>
                        </div>
                    </details>

                </div>
            </div>
        </div>
    );
}