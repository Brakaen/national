import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";

const BASE = "https://nationalprofile.com/assets/img";

const productData = [
  {
    id: "false-ceiling-suspension-system",
    name: "False Ceiling Suspension System (FC)",
    desc: "The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed.",
  },
  {
    id: "drywall-partition-system",
    name: "Drywall Partition System (RNR)",
    desc: "Drywall partition system is specifically designed for the partitions with Gypsum Board or other Types of cladding sheets.",
  },
  {
    id: "gi-lintels",
    name: "G.I Lintels",
    desc: "Steel Lintel used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings.",
  },
  {
    id: "c-truss-channel",
    name: "C Truss Channels",
    desc: "National Profile Factory Manufactures 41mm Wide 41mm Height C-Truss Channels Using Hot Dipped Galvanized Steel Coils.",
  },
  {
    id: "corrugated-roofing-sheet",
    name: "Corrugated Roofing Sheet",
    desc: "Easy to install, crimped curved sheets provide versatility and creativity that bring new and refreshing design to industrial and domestic buildings.",
  },
  {
    id: "gi-flat-sheet-and-ppgi-plain-sheet",
    name: "G.I Flat Sheet and PPGI Plain Sheet",
    desc: "We Cut cold rolled Galvanized steel, Pre-painted G.I Sheet Etc for Many Lengths and gauges.",
  },
  {
    id: "liner-profile",
    name: "Liner Profile",
    desc: "Liner Profile is an attractive, slightly fitted wall & ceiling cladding for exterior and interior use, on straight or curved surfaces.",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Products" },
  ];
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div
        className="relative text-white py-16 px-8"
        style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Products</h1>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Products</h2>
        <div className="w-12 h-1 bg-red-500 mb-8"></div>
        <p>We have maintained a much-disciplined method of quality control. 
          We are using tested raw materials with international standards for 
          the specific use of ceiling and partition systems. The finished products 
          meet all international standards related to load carrying capacity, humidity 
          resistance, fire rating etc.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-blue-900 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
              <div className="w-8 h-1 bg-red-500 mb-3"></div>
              <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
              <span className="inline-block mt-4 text-blue-900 font-semibold text-sm hover:underline">
                View Details →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Product Advantages Section ── */}
      <div className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Product Advantages</h2>
        <div className="w-12 h-1 bg-red-500 mb-6"></div>
        
        <p className="text-gray-700 text-base leading-relaxed mb-10">
          Building gypsum is used as heating resistant, moisture preserving, sound absorbing and fire proofing material. 
          As a building decorative material, it is widely used in ceiling and partition projects.
        </p>

        {/* 3 Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Easily Decorated */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="text-blue-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Easily Decorated</h3>
              <div className="w-10 h-0.5 bg-red-500 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Gypsum construction offers smooth surfaces that readily accept decoration with paint, wallpaper, vinyl covering or wall tile & permit repeated decoration throughout the life of the building.
              </p>
            </div>
            <a href="#" className="text-blue-900 font-bold text-sm hover:underline mt-auto inline-block">
              Read More
            </a>
          </div>

          {/* Card 2: Sound Control */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="text-blue-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound Control</h3>
              <div className="w-10 h-0.5 bg-red-500 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Gypsum board constructions offer excellent resistance to airborne and impact sound transmission without excessive bulk or weight.
              </p>
            </div>
            <a href="#" className="text-blue-900 font-bold text-sm hover:underline mt-auto inline-block">
              Read More
            </a>
          </div>

          {/* Card 3: Fire Resistance */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="text-blue-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Fire Resistance</h3>
              <div className="w-10 h-0.5 bg-red-500 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Gypsum panels will support combustion. When attacked by fire, crystallized water in gypsum is released and turns to steam to help retard the spread of flame & heat and protect adjacent constructions.
              </p>
            </div>
            <a href="#" className="text-blue-900 font-bold text-sm hover:underline mt-auto inline-block">
              Read More
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;