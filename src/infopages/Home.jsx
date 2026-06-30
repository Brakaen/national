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
  },
  {
    title: 'Fast Installation',
    desc: 'Gypsum constructions eliminate the construction delays, permit earlier completion & occupancy of buildings.',
  },
  {
    title: 'Low Installed Cost',
    desc: 'Gypsum board system offer lower installed costs than more massive constructions. Low material cost & large, quickly erected panels combine to provide a lower cost.',
  },
  {
    title: 'Light Weight',
    desc: 'Gypsum board constructions weigh much less than masonry assemblies of the same thickness.',
  },
];

// ── Styles ────────────────────────────────────────────
const s = {
  bannerSlider: {
    background: '#1a2b7a',
    display: 'flex',
    alignItems: 'center',
    minHeight: '420px',
    overflow: 'hidden',
    position: 'relative',
  },
  bannerContent: {
    flex: 1,
    padding: '3rem 3rem 3rem 4rem',
    color: '#fff',
  },
  bannerTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  bannerDesc: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
    maxWidth: '480px',
  },
  bannerBtn: {
    display: 'inline-block',
    background: '#cc2929',
    color: '#fff',
    padding: '11px 26px',
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
    padding: '2rem',
  },
  bannerDots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
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
    alignItems: 'center',
    gap: '3rem',
    padding: '4rem 4rem',
    background: '#fff',
  },
  goalImg: {
    width: '380px',
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
    fontSize: '30px',
    fontWeight: 700,
    color: '#1a2b7a',
    marginBottom: '1rem',
  },
  goalText: {
    fontSize: '15px',
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
    padding: '4rem 4rem',
    background: '#f5f7fa',
  },
  productsHeader: {
    textAlign: 'left',
    marginBottom: '2.5rem',
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
    fontSize: '30px',
    fontWeight: 700,
    color: '#1a2b7a',
    marginBottom: '0.75rem',
  },
  sectionSubtitle: {
    fontSize: '14px',
    color: '#5a6380',
    maxWidth: '680px',
    margin: '0',
    lineHeight: 1.7,
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
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
    height: '180px',
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
    padding: '4rem 4rem',
    background: '#1a2b7a',
  },
  featuresTitle: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  featureCard: {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    padding: '1.5rem',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: '#cc2929',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '6px',
  },
  featureDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7,
  },
};

// ── Component ─────────────────────────────────────────
const Home = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + sliderProducts.length) % sliderProducts.length);
  const next = () => setCurrent((c) => (c + 1) % sliderProducts.length);
  const active = sliderProducts[current];

  return (
    <div>
      {/* ── Product Banner Slider ── */}
      <div style={s.bannerSlider}>
        <button onClick={prev} style={{ position:'absolute', left:'12px', top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.15)', border:'none', color:'#fff', width:'36px', height:'36px', borderRadius:'50%', fontSize:'18px', cursor:'pointer', zIndex:2 }}>‹</button>

        <div style={s.bannerContent}>
          <h2 style={s.bannerTitle}>{active.title}</h2>
          <p style={s.bannerDesc}>{active.desc}</p>
          <a href={active.link} style={s.bannerBtn}>Read More</a>
        </div>

        <div style={s.bannerImg}>
          <img src={active.img} alt={active.title} style={{ maxWidth:'100%', maxHeight:'340px', objectFit:'contain' }} />
        </div>

        <button onClick={next} style={{ position:'absolute', right:'12px', top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.15)', border:'none', color:'#fff', width:'36px', height:'36px', borderRadius:'50%', fontSize:'18px', cursor:'pointer', zIndex:2 }}>›</button>

        <div style={s.bannerDots}>
          {sliderProducts.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={s.dot(i === current)} />
          ))}
        </div>
      </div>

      {/* ── Our Goal Section ── */}
      <div style={s.goalSection}>
        <div style={s.goalImg}>
          <img src={`${BASE}/our-goal.png`} alt="Our Goal" style={{ width:'100%', display:'block' }} />
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
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(26,43,122,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
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
            <div key={i} style={s.featureCard}>
              <div style={s.featureIcon}>
                <img src={`${BASE}/our-goal.png`} alt="" style={{ width:'22px', height:'22px', objectFit:'contain', opacity:0.9 }} />
              </div>
              <div>
                <h3 style={s.featureTitle}>{f.title}</h3>
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