import React, { useState } from 'react';

const BASE = 'https://nationalprofile.com/assets/img';

// ── Data ──────────────────────────────────────────────
const sliderProducts = [
  {
    id: 1,
    title: 'False Ceiling Suspension System (FC)',
    desc: 'The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed.',
    img: `${BASE}/false-ceiling.png`,
    link: '/product/false-ceiling-suspension-system',
  },
  {
    id: 2,
    title: 'Drywall Partition System (RNR)',
    desc: 'Drywall partition system is specifically designed for the partitions with Gypsum Board or other Types of cladding sheets.',
    img: `${BASE}/drywall-partition.png`,
    link: '/product/drywall-partition-system',
  },
  {
    id: 3,
    title: 'G.I Lintels',
    desc: 'Steel Lintel used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings.',
    img: `${BASE}/gi-lintels.png`,
    link: '/product/gi-lintels',
  },
  {
    id: 4,
    title: 'C Truss Channels',
    desc: 'National Profile Factory Manufactures 41mm Wide 41mm Height C-Truss Channels Using Hot Dipped Galvanized Steel Coils.',
    img: `${BASE}/c-truss-channels.png`,
    link: '/product/c-truss-channel',
  },
  {
    id: 5,
    title: 'Corrugated Roofing Sheet',
    desc: 'Easy to install, crimped curved sheets provide versatility and creativity that bring new and refreshing design to industrial and domestic buildings.',
    img: `${BASE}/corrugated-roofing-sheet.png`,
    link: '/product/corrugated-roofing-sheet',
  },
  {
    id: 6,
    title: 'G.I Flat Sheet and PPGI Plain Sheet',
    desc: 'We Cut cold rolled Galvanized steel, Pre-painted G.I Sheet Etc for Many Lengths and gauges.',
    img: `${BASE}/gi-flat-sheet.png`,
    link: '/product/gi-flat-sheet-and-ppgi-plain-sheet',
  },
  {
    id: 7,
    title: 'Liner Profile',
    desc: 'Liner Profile is an attractive, slightly fitted wall & ceiling cladding for exterior and interior use, on straight or curved surfaces.',
    img: `${BASE}/corrugated-roofing-sheet.png`,
    link: '/product/liner-profile',
  },
];

const products = [
  {
    id: 1,
    title: 'False Ceiling Suspension System (FC)',
    desc: 'The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed. Flexibility and easy to use makes the system suitable for any interior designing works.',
    img: `${BASE}/products/false-ceiling.png`,
    link: '/product/false-ceiling-suspension-system',
  },
  {
    id: 2,
    title: 'Drywall Partition System (RNR)',
    desc: 'Drywall partition system is specifically designed for the partitions with Gypsum Board or other Types of cladding sheets. All system profiles are designed for internal partition in the aspect of residential and commercial constructions.',
    img: `${BASE}/products/drywall-partition-system-product.png`,
    link: '/product/drywall-partition-system',
  },
  {
    id: 3,
    title: 'G.I Lintels',
    desc: 'Steel Lintel used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings. Light weight Lintels are manufactured using galvanized steel confirms to International standards ASTM A653.',
    img: `${BASE}/products/gi-lintels.png`,
    link: '/product/gi-lintels',
  },
  {
    id: 4,
    title: 'C Truss Channels',
    desc: 'National Profile Factory Manufactures 41mm Wide 41mm Height C-Truss Channels Using Hot Dipped Galvanized Steel Coils. The Channels Provide An Ideal Mechanical Support Frame For The Range Of Application.',
    img: `${BASE}/products/c-truss-channels.png`,
    link: '/product/c-truss-channel',
  },
  {
    id: 5,
    title: 'Corrugated Roofing Sheet',
    desc: 'Easy to install, crimped curved sheets provide versatility and creativity that bring new and refreshing design to industrial and domestic buildings.',
    img: `${BASE}/products/corrugated-roofing-sheet.png`,
    link: '/product/corrugated-roofing-sheet',
  },
  {
    id: 6,
    title: 'G.I Flat Sheet and PPGI Plain Sheet',
    desc: 'We Cut cold rolled Galvanized steel, Pre-painted G.I Sheet Etc for Many Lengths and gauges. We Measure our Success with Flatness, Quality, and Consistency.',
    img: `${BASE}/products/gi-plain-sheet.png`,
    link: '/product/gi-flat-sheet-and-ppgi-plain-sheet',
  },
  {
    id: 7,
    title: 'Liner Profile',
    desc: 'Liner Profile is an attractive, slightly fitted wall & ceiling cladding for exterior and interior use, on straight or curved surfaces.',
    img: `${BASE}/products/liner-profile-product.png`,
    link: '/product/liner-profile',
  },
];

const features = [
  {
    title: 'Life Safety Protection',
    desc: 'System provides permanent fire resistance not subject to loss of water pressure or other malfunctions & problems that may occur in sprinkler systems.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fast Installation',
    desc: 'Gypsum constructions eliminate the construction delays, permit earlier completion & occupancy of buildings.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.3l.06.06A1.65 1.65 0 0 0 8.91 4.7 1.65 1.65 0 0 0 9.91 3.19V3a2 2 0 0 1 4 0v.09c0 .69.39 1.32 1 1.51.62.25 1.34.12 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.3 9c.25.62.85 1 1.54 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Low Installed Cost',
    desc: 'Gypsum board system offer lower installed costs than more massive constructions. Low material cost & large, quickly erected panels combine to provide a lower cost.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M12 8v8M9.5 10.5h3.2a1.5 1.5 0 0 1 0 3H9.5h3.2a1.5 1.5 0 0 1 0 3H9" />
      </svg>
    ),
  },
  {
    title: 'Light Weight',
    desc: 'Gypsum board constructions weigh much less than masonry assemblies of the same thickness.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18c4-4 8-2 10-6 1.5-3 4-4 6-3" />
        <path d="M2 13c4-4 8-2 10-6 1.5-3 4-4 6-3" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────
const Home = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + sliderProducts.length) % sliderProducts.length);
  const next = () => setCurrent((c) => (c + 1) % sliderProducts.length);
  const active = sliderProducts[current];

  return (
    <div className="np-home">
      {/* Inline responsive stylesheet — scoped with .np-home prefix */}
      <style>{`
        .np-home * { box-sizing: border-box; }

        /* ── Banner Slider ── */
        .np-banner {
          background: #1a2b7a;
          display: flex;
          align-items: center;
          min-height: 420px;
          overflow: hidden;
          position: relative;
        }
        .np-banner-content {
          flex: 1;
          padding: 3rem 3rem 3rem 4rem;
          color: #fff;
        }
        .np-banner-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .np-banner-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          max-width: 480px;
        }
        .np-banner-btn {
          display: inline-block;
          background: #cc2929;
          color: #fff;
          padding: 11px 26px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }
        .np-banner-img {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .np-banner-img img {
          max-width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .np-banner-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          z-index: 2;
        }
        .np-banner-arrow.left { left: 12px; }
        .np-banner-arrow.right { right: 12px; }
        .np-banner-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }
        .np-dot {
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          width: 8px;
        }
        .np-dot.active {
          width: 24px;
          background: #cc2929;
        }

        /* ── Our Goal ── */
        .np-goal {
          background: #f0f4ff;
          padding: 80px 48px;
        }
        .np-goal-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 64px;
        }
        .np-goal-img-wrap {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .np-goal-img-wrap img {
          width: 100%;
          max-width: 420px;
          object-fit: contain;
        }
        .np-goal-content { flex: 1; }
        .np-goal-eyebrow {
          color: #ef4444;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .np-goal-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 12px;
        }
        .np-goal-underline {
          width: 60px;
          height: 4px;
          background: #ef4444;
          margin-bottom: 20px;
          border-radius: 2px;
        }
        .np-goal-text {
          color: #4b5563;
          line-height: 1.9;
          margin-bottom: 28px;
        }
        .np-goal-btn {
          background: #ef4444;
          color: #fff;
          border: none;
          padding: 12px 32px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        /* ── Products ── */
        .np-products {
          padding: 4rem 4rem;
          background: #f5f7fa;
        }
        .np-products-header { margin-bottom: 2.5rem; }
        .np-section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          color: #cc2929;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .np-section-title {
          font-size: 30px;
          font-weight: 700;
          color: #1a2b7a;
          margin-bottom: 0.75rem;
        }
        .np-section-subtitle {
          font-size: 14px;
          color: #5a6380;
          max-width: 680px;
          margin: 0;
          line-height: 1.7;
        }
        .np-product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .np-product-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e2e6ef;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .np-product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(26,43,122,0.12);
        }
        .np-product-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        .np-product-body { padding: 1rem 1.1rem 1.25rem; }
        .np-product-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a2b7a;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .np-product-desc {
          font-size: 12.5px;
          color: #5a6380;
          line-height: 1.65;
          margin-bottom: 12px;
        }
        .np-product-link {
          font-size: 13px;
          font-weight: 600;
          color: #cc2929;
          text-decoration: none;
        }

        /* ── Features ── */
        .np-features {
          padding: 4rem 4rem;
          background: #fff;
        }
        .np-features-title {
          font-size: 30px;
          font-weight: 700;
          color: #1a2b7a;
          margin-bottom: 2.5rem;
        }
        .np-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .np-feature-card {
          background: #fff;
          border: 1px solid #e2e6ef;
          border-radius: 6px;
          padding: 1.75rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .np-feature-card:hover {
          box-shadow: 6px 6px 0px rgba(204,41,41,0.25);
          transform: translate(-3px,-3px);
          border-color: #1a2b7a;
        }
        .np-feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid #cc2929;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #1a2b7a;
        }
        .np-feature-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a2b7a;
          margin-bottom: 6px;
        }
        .np-feature-underline {
          width: 32px;
          height: 3px;
          background: #cc2929;
          margin-bottom: 10px;
        }
        .np-feature-desc {
          font-size: 13.5px;
          color: #5a6380;
          line-height: 1.7;
        }

        /* ══════════════ TABLET (≤ 1024px) ══════════════ */
        @media (max-width: 1024px) {
          .np-goal, .np-products, .np-features {
            padding: 3rem 2rem;
          }
          .np-product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .np-banner-content {
            padding: 2.5rem 2rem;
          }
          .np-banner-title { font-size: 26px; }
        }

        /* ══════════════ TABLET / SMALL LAPTOP (≤ 900px) ══════════════ */
        @media (max-width: 900px) {
          .np-banner {
            flex-direction: column;
            min-height: unset;
            padding-bottom: 40px;
          }
          .np-banner-content {
            order: 1;
            padding: 2.5rem 1.5rem 1rem;
            text-align: center;
          }
          .np-banner-desc { margin-left: auto; margin-right: auto; }
          .np-banner-img {
            order: 0;
            padding: 1.5rem 1rem 0;
          }
          .np-banner-img img { max-height: 220px; }
          .np-banner-arrow { display: none; }

          .np-goal-inner {
            flex-direction: column;
            gap: 32px;
            text-align: center;
          }
          .np-goal-underline { margin-left: auto; margin-right: auto; }

          .np-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .np-features-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ══════════════ MOBILE (≤ 600px) ══════════════ */
        @media (max-width: 600px) {
          .np-banner-title { font-size: 22px; }
          .np-banner-desc { font-size: 13.5px; }
          .np-banner-btn { padding: 9px 20px; font-size: 13px; }

          .np-goal { padding: 48px 1.25rem; }
          .np-goal-title { font-size: 1.5rem; }
          .np-goal-text { font-size: 13.5px; }
          .np-goal-img-wrap img { max-width: 260px; }

          .np-products, .np-features {
            padding: 2.5rem 1.25rem;
          }
          .np-section-title, .np-features-title { font-size: 22px; }
          .np-product-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .np-product-card img { height: 130px; }
          .np-product-title { font-size: 12.5px; }
          .np-product-desc { font-size: 11px; }

          .np-feature-card { padding: 1.25rem; gap: 1rem; }
          .np-feature-icon { width: 44px; height: 44px; }
        }

        /* ══════════════ SMALL MOBILE (≤ 420px) ══════════════ */
        @media (max-width: 420px) {
          .np-product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Product Banner Slider ── */}
      <div className="np-banner">
        <button onClick={prev} className="np-banner-arrow left" aria-label="Previous">‹</button>

        <div className="np-banner-content">
          <h2 className="np-banner-title">{active.title}</h2>
          <p className="np-banner-desc">{active.desc}</p>
          <a href={active.link} className="np-banner-btn">Read More</a>
        </div>

        <div className="np-banner-img">
          <img src={active.img} alt={active.title} />
        </div>

        <button onClick={next} className="np-banner-arrow right" aria-label="Next">›</button>

        <div className="np-banner-dots">
          {sliderProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`np-dot${i === current ? ' active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Our Goal Section ── */}
      <div className="np-goal">
        <div className="np-goal-inner">
          <div className="np-goal-img-wrap">
            <img src={`${BASE}/our-goal.png`} alt="Our Goal" />
          </div>
          <div className="np-goal-content">
            <p className="np-goal-eyebrow"></p>
            <h2 className="np-goal-title">Our Goal</h2>
            <div className="np-goal-underline"></div>
            <p className="np-goal-text">
              National Profile Factory complies with requirements of the ISO 9001 Revision 2015 and covers the manufacturing, supply, sales and marketing of Cold rolled profile of False ceiling Suspension System, Drywall Partition System, GI Lintel, Roofing Sheet, Cut to length and C-Truss Channel and wire clips used in false ceiling suspension.
            </p>
            <a href="/about-us" className="np-goal-btn">Read More</a>
          </div>
        </div>
      </div>

      {/* ── Our Products Section ── */}
      <div id="products-section" className="np-products">
        <div className="np-products-header">
          <p className="np-section-eyebrow"></p>
          <h2 className="np-section-title">Our Products</h2>
          <p className="np-section-subtitle">
            We have maintained a much-disciplined method of quality control. We are using tested raw materials with international standards for the specific use of ceiling and partition systems. The finished products meet all international standards related to load carrying capacity, humidity resistance, fire rating etc.
          </p>
        </div>
        <div className="np-product-grid">
          {products.map((p) => (
            <div key={p.id} className="np-product-card">
              <img src={p.img} alt={p.title} />
              <div className="np-product-body">
                <h3 className="np-product-title">{p.title}</h3>
                <p className="np-product-desc">{p.desc}</p>
                <a href={p.link} className="np-product-link">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features Section ── */}
      <div className="np-features">
        <h2 className="np-features-title">Features</h2>
        <div className="np-features-grid">
          {features.map((f, i) => (
            <div key={i} className="np-feature-card">
              <div className="np-feature-icon">{f.icon}</div>
              <div>
                <h3 className="np-feature-title">{f.title}</h3>
                <div className="np-feature-underline"></div>
                <p className="np-feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
