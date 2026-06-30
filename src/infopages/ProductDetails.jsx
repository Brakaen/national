import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const BASE = "https://nationalprofile.com/assets/img";

const productData = {
  "false-ceiling-suspension-system": {
    name: "False Ceiling Suspension System (FC)",
    desc: "The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed. Flexibility and easy to use makes the system suitable for any interior designing works.",
    img: `${BASE}/products/false-ceiling.png`,
  },
  "drywall-partition-system": {
    name: "Drywall Partition System (RNR)",
    desc: "Drywall partition system is specifically designed for the partitions with Gypsum Board or other Types of cladding sheets. All system profiles are designed for internal partition in the aspect of residential and commercial constructions.",
    img: `${BASE}/products/drywall-partition-system-product.png`,
  },
  "gi-lintels": {
    name: "G.I Lintels",
    desc: "Steel Lintel used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings. Light weight Lintels are manufactured using galvanized steel confirms to International standards ASTM A653.",
    img: `${BASE}/products/gi-lintels.png`,
  },
  "c-truss-channel": {
    name: "C Truss Channels",
    desc: "National Profile Factory Manufactures 41mm Wide 41mm Height C-Truss Channels Using Hot Dipped Galvanized Steel Coils. The Channels Provide An Ideal Mechanical Support Frame For The Range Of Application.",
    img: `${BASE}/products/c-truss-channels.png`,
  },
  "corrugated-roofing-sheet": {
    name: "Corrugated Roofing Sheet",
    desc: "Easy to install, crimped curved sheets provide versatility and creativity that bring new and refreshing design to industrial and domestic buildings.",
    img: `${BASE}/products/corrugated-roofing-sheet.png`,
  },
  "gi-flat-sheet-and-ppgi-plain-sheet": {
    name: "G.I Flat Sheet and PPGI Plain Sheet",
    desc: "We Cut cold rolled Galvanized steel, Pre-painted G.I Sheet Etc for Many Lengths and gauges. We Measure our Success with Flatness, Quality, and Consistency.",
    img: `${BASE}/products/gi-plain-sheet.png`,
  },
  "liner-profile": {
    name: "Liner Profile",
    desc: "Liner Profile is an attractive, slightly fitted wall & ceiling cladding for exterior and interior use, on straight or curved surfaces.",
    img: `${BASE}/products/liner-profile-product.png`,
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  if (!product) {
    return (
      <div className="p-16">
        <h1 className="text-red-500">Product not found!</h1>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: product.name },
  ];

  return (
    <div>
      <div
        className="text-white py-16 px-8"
        style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16 flex flex-wrap gap-12">
        <div className="flex-1 min-w-[300px] flex items-center justify-center bg-gray-50 rounded-lg p-6">
          <img
            src={product.img}
            alt={product.name}
            className="max-w-full max-h-[340px] object-contain"
          />
        </div>

        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h2>
          <div className="w-12 h-1 bg-red-500 mb-8"></div>
          <p className="text-gray-700 text-base leading-relaxed">{product.desc}</p>
          <button
            onClick={() => navigate("/products")}
            className="inline-block mt-8 text-blue-900 font-semibold hover:underline"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;