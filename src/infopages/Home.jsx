import React, { useState, useEffect } from 'react';

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

// ── Responsive helper hook ──────────────────────────────
// Tracks viewport width and gives back simple breakpoint flags.
function useViewport() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    width,
    isMobile: width <= 576,
    isTablet: width > 576 && width <= 992,
    isDesktop: width > 992,
  };
}

// ── Component ─────────────────────────────────────────
const Home = () => {
  const [current, setCurrent] = useState(0);
  const { isMobile, isTablet } = useViewport();

  const prev = () => setCurrent((c) => (c - 1 + sliderProducts.length) % sliderProducts.length);
  const next = () => setCurrent((c) => (c + 1) % sliderProducts.length);
  const active = sliderProducts[current];

  // ── Styles (built fresh each render so they react to breakpoints) ──
  const s = {
    bannerSlider: {
      background: '#1a2b7a',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      minHeight: isMobile ? 'auto' : '420px',
      overflow: 'hidden',
      position: 'relative',
      padding: isMobile ? '2.5rem 0 3rem' : 0,
    },
    bannerContent: {
      flex: 1,
      padding: isMobile
        ? '0 1.25rem'
        : isTablet
        ? '2rem 2rem'
        : '3rem 3rem 3rem 4rem',
      color: '#fff',
      textAlign: isMobile ? 'center' : 'left',
      order: isMobile ? 2 : 1,
    },
    bannerTitle: {
      fontSize: isMobile ? '22px' : isTablet ? '26px' : '32px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '1rem',
      lineHeight: 1.3,
    },
    bannerDesc: {
      fontSize: isMobile ? '13.5px' : '15px',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.8,
      marginBottom: '1.5rem',
      maxWidth: isMobile ? '100%' : '480px',
      marginLeft: isMobile ? 'auto' : 0,
      marginRight: isMobile ? 'auto' : 0,
    },
    bannerBtn: {
      display: 'inline-block',
      background: '#cc2929',
      color: '#fff',
      padding: isMobile ? '10px 22px' : '11px 26px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
    },
    bannerImg: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '0.5rem 1.25rem' : '2rem',
      order: isMobile ? 1 : 2,
      width: isMobile ? '100%' : 'auto',
    },
    bannerDots: {
      position: isMobile ? 'static' : 'absolute',
      bottom: '20px',
      left: '50%',
      transform: isMobile ? 'none' : 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: isMobile ? '1.25rem' : 0,
      order: isMobile ? 3 : 'unset',
    },
    arrowBtn: (side) => ({
      position: 'absolute',
      [side]: isMobile ? '6px' : '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.15)',
      border: 'none',
      color: '#fff',
      width: isMobile ? '28px' : '36px',
      height: isMobile ? '28px' : '36px',
      borderRadius: '50%',
      fontSize: isMobile ? '15px' : '18px',
      cursor: 'pointer',
      zIndex: 2,
    }),
    dot: (active) => ({
      width: active ? '24px' : '8px',
      height: '8px',
      borderRadius: '4px',
      background: active ? '#cc2929' : 'rgba(255,255,255,0.4)',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: 'none',
    }),

    // Our Goal
    goalSection: {
      display: 'flex',
      flexDirection: isMobile || isTablet ? 'column' : 'row',
      alignItems: isMobile || isTablet ? 'stretch' : 'center',
      gap: isMobile ? '1.75rem' : '3rem',
      padding: isMobile ? '2.5rem 1.25rem' : isTablet ? '3rem 2rem' : '4rem 4rem',
      background: '#fff',
    },
    goalImg: {
      width: isMobile || isTablet ? '100%' : '380px',
      flexShrink: 0,
      borderRadius: '8px',
      overflow: 'hidden',
    },
    goalContent: { flex: 1 },
    goalEyebrow: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#cc2929',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
    },
    goalTitle: {
      fontSize: isMobile ? '24px' : '30px',
      fontWeight: 700,
      color: '#1a2b7a',
      marginBottom: '1rem',
    },
    goalText: {
      fontSize: isMobile ? '14px' : '15px',
      color: '#5a6380',
      lineHeight: 1.85,
      marginBottom: '1.5rem',
    },
    goalBtn: {
      display: 'inline-block',
      background: '#cc2929',
      color: '#fff',
      padding: '10px 24px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
    },

    // Products
    productsSection: {
      padding: isMobile ? '2.5rem 1.25rem' : isTablet ? '3rem 2rem' : '4rem 4rem',
      background: '#f5f7fa',
    },
    productsHeader: {
      textAlign: 'left',
      marginBottom: isMobile ? '1.75rem' : '2.5rem',
    },
    sectionEyebrow: {
      fontSize: '12px',
      fontWeight: 700,
      color: '#cc2929',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '8px',
    },
    sectionTitle: {
      fontSize: isMobile ? '24px' : '30px',
      fontWeight: 700,
      color: '#1a2b7a',
      marginBottom: '0.75rem',
    },
    sectionSubtitle: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#5a6380',
      maxWidth: '680px',
      margin: '0',
      lineHeight: 1.7,
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
        ? 'repeat(2, 1fr)'
        : 'repeat(4, 1fr)',
      gap: isMobile ? '16px' : '20px',
    },
    productCard: {
      background: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #e2e6ef',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    productCardImg: {
      width: '100%',
      height: isMobile ? '160px' : '180px',
      objectFit: 'cover',
      display: 'block',
    },
    productCardBody: {
      padding: '1rem 1.1rem 1.25rem',
    },
    productCardTitle: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#1a2b7a',
      marginBottom: '8px',
      lineHeight: 1.4,
    },
    productCardDesc: {
      fontSize: '12.5px',
      color: '#5a6380',
      lineHeight: 1.65,
      marginBottom: '12px',
    },
    productCardLink: {
      fontSize: '13px',
      fontWeight: 600,
      color: '#cc2929',
      textDecoration: 'none',
    },

    // Features
    featuresSection: {
      padding: isMobile ? '2.5rem 1.25rem' : isTablet ? '3rem 2rem' : '4rem 4rem',
      background: '#fff',
    },
    featuresTitle: {
      fontSize: isMobile ? '24px' : '30px',
      fontWeight: 700,
      color: '#1a2b7a',
      marginBottom: isMobile ? '1.75rem' : '2.5rem',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '16px' : '24px',
    },
    featureCard: {
      background: '#fff',
      border: '1px solid #e2e6ef',
      borderRadius: '6px',
      padding: isMobile ? '1.35rem' : '1.75rem',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.85rem' : '1.25rem',
      alignItems: isMobile ? 'flex-start' : 'flex-start',
      transition: 'box-shadow 0.25s, transform 0.25s',
      cursor: 'default',
    },
    featureIcon: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      border: '2px solid #cc2929',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: '#1a2b7a',
    },
    featureTitle: {
      fontSize: '17px',
      fontWeight: 700,
      color: '#1a2b7a',
      marginBottom: '6px',
    },
    featureUnderline: {
      width: '32px',
      height: '3px',
      background: '#cc2929',
      marginBottom: '10px',
    },
    featureDesc: {
      fontSize: '13.5px',
      color: '#5a6380',
      lineHeight: 1.7,
    },
  };

  return (
    <div>
      {/* ── Product Banner Slider ── */}
      <div style={s.bannerSlider}>
        <button onClick={prev} style={s.arrowBtn('left')}>‹</button>

        <div style={s.bannerContent}>
          <h2 style={s.bannerTitle}>{active.title}</h2>
          <p style={s.bannerDesc}>{active.desc}</p>
          <a href={active.link} style={s.bannerBtn}>Read More</a>
        </div>

        <div style={s.bannerImg}>
          <img
            src={active.img}
            alt={active.title}
            style={{
              maxWidth: '100%',
              maxHeight: isMobile ? '220px' : '340px',
              objectFit: 'contain',
            }}
          />
        </div>

        <button onClick={next} style={s.arrowBtn('right')}>›</button>

        <div style={s.bannerDots}>
          {sliderProducts.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={s.dot(i === current)} />
          ))}
        </div>
      </div>

      {/* ── Our Goal Section ── */}
      <div style={s.goalSection}>
        <div style={s.goalImg}>
          <img src={`${BASE}/our-goal.png`} alt="Our Goal" style={{ width: '100%', display: 'block' }} />
        </div>
        <div style={s.goalContent}>
          <p style={s.goalEyebrow}></p>
          <h2 style={s.goalTitle}>Our Goal</h2>
          <p style={s.goalText}>
            National Profile Factory complies with requirements of the ISO 9001 Revision 2015 and covers the manufacturing, supply, sales and marketing of Cold rolled profile of False ceiling Suspension System, Drywall Partition System, GI Lintel, Roofing Sheet, Cut to length and C-Truss Channel and wire clips used in false ceiling suspension.
          </p>
          <a href="/about-us" style={s.goalBtn}>Read More</a>
        </div>
      </div>

      {/* ── Our Products Section ── */}
      <div id="products-section" style={s.productsSection}>
        <div style={s.productsHeader}>
          <p style={s.sectionEyebrow}></p>
          <h2 style={s.sectionTitle}>Our Products</h2>
          <p style={s.sectionSubtitle}>
            We have maintained a much-disciplined method of quality control. We are using tested raw materials with international standards for the specific use of ceiling and partition systems. The finished products meet all international standards related to load carrying capacity, humidity resistance, fire rating etc.
          </p>
        </div>
        <div style={s.productGrid}>
          {products.map((p) => (
            <div
              key={p.id}
              style={s.productCard}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(26,43,122,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img src={p.img} alt={p.title} style={s.productCardImg} />
              <div style={s.productCardBody}>
                <h3 style={s.productCardTitle}>{p.title}</h3>
                <p style={s.productCardDesc}>{p.desc}</p>
                <a href={p.link} style={s.productCardLink}>Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features Section ── */}
      <div style={s.featuresSection}>
        <h2 style={s.featuresTitle}>Features</h2>
        <div style={s.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={i}
              style={s.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(204,41,41,0.25)';
                e.currentTarget.style.transform = 'translate(-3px,-3px)';
                e.currentTarget.style.borderColor = '#1a2b7a';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = '#e2e6ef';
              }}
            >
              <div style={s.featureIcon}>{f.icon}</div>
              <div>
                <h3 style={s.featureTitle}>{f.title}</h3>
                <div style={s.featureUnderline}></div>
                <p style={s.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
