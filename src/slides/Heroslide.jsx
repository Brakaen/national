import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: "false-ceiling",
    title: "False Ceiling Suspension System (FC)",
    desc: "The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed.",
    img: "https://nationalprofile.com/assets/img/false-ceiling.png",
  },
  {
    id: "drywall-partition",
    title: "Drywall Partition System (RNR)",
    desc: "Drywall partition system is specifically designed for the partitions with Gypsum Board or other Types of cladding sheets.",
    img: "https://nationalprofile.com/assets/img/drywall-partition.png",
  },
  {
    id: "gi-lintels",
    title: "G.I Lintels",
    desc: "Steel Lintel used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings.",
    img: "https://nationalprofile.com/assets/img/gi-lintels.png",
  },
  {
    id: "c-truss-channel",
    title: "C Truss Channels",
    desc: "National Profile Factory Manufactures C-Truss Channels Using Hot Dipped Galvanized Steel Coils for cable and pipe management systems.",
    img: "https://nationalprofile.com/assets/img/c-truss-channels.png",
  },
  {
    id: "corrugated-roofing-sheet",
    title: "Corrugated Roofing Sheet",
    desc: "Easy to install, crimped curved sheets provide versatility and creativity that bring new and refreshing design to industrial and domestic buildings.",
    img: "https://nationalprofile.com/assets/img/corrugated-roofing-sheet.png",
  },
  {
    id: "gi-flat-sheet",
    title: "G.I Flat Sheet and PPGI Plain Sheet",
    desc: "We Cut cold rolled Galvanized steel, Pre-painted G.I Sheet Etc for Many Lengths and gauges.",
    img: "https://nationalprofile.com/assets/img/gi-flat-sheet.png",
  },
  {
    id: "liner-profile",
    title: "Liner Profile",
    desc: "Liner Profile is an attractive, slightly fitted wall & ceiling cladding for exterior and interior use, on straight or curved surfaces.",
    img: "https://nationalprofile.com/assets/img/liner-profile.png",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <div style={{
      position: "relative", width: "100%",
      background: "#2d34a5",
      minHeight: "140px", overflow: "hidden",
    }}>

      {/* Left Arrow */}
      <button onClick={prev} style={{
        position: "absolute", left: "16px", top: "50%",
        transform: "translateY(-50%)", zIndex: 50,
        background: "transparent", border: "2 px solid rgba(255,255,255,0.5)",
        color: "white", fontSize: "1.2rem", borderRadius: "50%",
        width: "40px", height: "40px", cursor: "pointer",
      }}>‹</button>

      {/* Right Arrow */}
      <button onClick={next} style={{
        position: "absolute", right: "16px", top: "50%",
        transform: "translateY(-50%)", zIndex: 50,
        background: "transparent", border: "2px solid rgba(255,255,255,0.5)",
        color: "white", fontSize: "1.2rem", borderRadius: "50%",
        width: "40px", height: "40px", cursor: "pointer",
      }}>›</button>

      {/* Content */}
      <div key={current} style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "60px 80px",
        display: "flex", flexDirection: "row",
        alignItems: "center", gap: "48px",
        minHeight: "420px",
      }}>

        {/* Left Text */}
        <div style={{ flex: 1, color: "white" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.4 }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "#e0e0ff", lineHeight: 1.8, marginBottom: "32px", maxWidth: "420px" }}>
            {slide.desc}
          </p>
          <button
            onClick={() => navigate(`/products/${slide.id}`)}
            style={{
              background: "#ef4444", color: "white", border: "none",
              padding: "12px 36px", borderRadius: "999px",
              fontWeight: "600", fontSize: "1rem", cursor: "pointer",
            }}
          >
            Read More
          </button>
        </div>

        {/* Right Image - Circle */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{
            width: "340px", height: "340px", borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}>
            {/* Inner blob */}
            <div style={{ position: "relative", width: "280px", height: "280px" }}>
              <svg viewBox="0 0 280 280" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                <path
                  d="M220,50 C260,90 270,150 250,200 C230,250 170,280 120,270 C70,260 30,210 20,160 C10,110 40,55 85,35 C130,15 180,10 220,50 Z"
                  fill="rgba(180,190,240,0.3)"
                />
              </svg>
              <img
                src={slide.img}
                alt={slide.title}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "240px", height: "240px", objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{
        position: "absolute", bottom: "20px", left: "80px",
        display: "flex", gap: "8px", zIndex: 50,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: "12px", height: "12px", borderRadius: "50%",
            background: i === current ? "#ef4444" : "rgba(255,255,255,0.4)",
            border: "none", cursor: "pointer", transition: "all 0.2s",
          }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;