import { useState, useEffect } from "react";

const slides = [
  {
    title: "False Ceiling Suspension System (FC)",
    description:
      "The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed.",
    image: "https://nationalprofile.com/assets/img/false-ceiling.png",
  },
]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)", minHeight: "420px" }}
    >
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#c5cae9" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-10 min-h-[420px]">
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            {slides[current].title}
          </h2>
          <p className="text-sm md:text-base text-blue-100 mb-8 leading-relaxed max-w-md">
            {slides[current].description}
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition">
            Read More
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div
            className="flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)", width: "320px", height: "280px", borderRadius: "50%" }}
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="max-h-64 object-contain drop-shadow-2xl"
              onError={(e) => { e.target.src = "https://placehold.co/300x220?text=Product+Image"; }}
            />
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 hover:bg-white/10 rounded-full transition z-20">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 hover:bg-white/10 rounded-full transition z-20">›</button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "bg-red-500 w-7" : "bg-blue-300 w-4"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
 