import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const productData = {
  "false-ceiling": {
    name: "False Ceiling System",
    desc: "The furring system is easy to assemble and is mostly used for areas that need smooth ceiling with gypsum sheets without joints and where services to be concealed.",
  },
  "steel-framing": {
    name: "Steel Framing System",
    desc: "High quality steel framing solutions designed for partition walls and ceilings in commercial and residential projects.",
  },
  "raised-floor": {
    name: "Raised Floor System",
    desc: "Our raised floor systems provide excellent cable management and flexibility for modern office and data center environments.",
  },
  "cable-trays": {
    name: "Cable Trays",
    desc: "Durable trays for organized cable routing in commercial and industrial buildings.",
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

      <div className="max-w-5xl mx-auto px-8 py-16">
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
  );
};

export default ProductDetails;
