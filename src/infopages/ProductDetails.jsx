import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import { products } from "./ProductsData";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

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
    { label: product.title },
  ];

  return (
    <div>
      {/* ── Banner ── */}
      <div
        className="text-white py-16 px-8"
        style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Products</h1>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* ── Product Intro ── */}
      <div className="max-w-5xl mx-auto px-8 py-16 flex flex-wrap gap-12 items-center">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h2>
          <div className="w-12 h-1 bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-base leading-relaxed">{product.intro}</p>
        </div>
        {product.heroImg && (
          <div className="flex-1 min-w-[300px] flex items-center justify-center bg-gray-50 rounded-lg p-6">
            <img
              src={product.heroImg}
              alt={product.title}
              className="max-w-full max-h-[300px] object-contain"
            />
          </div>
        )}
      </div>

      {/* ── Sub Profiles (each with specs + table) ── */}
      {product.subProfiles.map((sub, i) => (
        <div key={i} className="max-w-5xl mx-auto px-8 pb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{sub.name}</h2>
          <div className="w-12 h-1 bg-red-500 mb-6"></div>

          <div className="flex flex-wrap gap-10 mb-8">
            <div className="flex-1 min-w-[280px]">
              <p className="text-gray-700 text-base leading-relaxed mb-4">{sub.desc}</p>
              {sub.specs?.length > 0 && (
                <>
                  <h3 className="font-bold text-gray-800 mb-2">Technical Specification:</h3>
                  <ul className="text-gray-700 text-sm leading-relaxed">
                    {sub.specs.map((s, si) => (
                      <li key={si}>{s}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {sub.table && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-yellow-300">
                    {sub.table.headers.map((h, hi) => (
                      <th key={hi} className="border border-yellow-400 px-3 py-2 font-bold text-gray-800">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sub.table.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-yellow-50" : "bg-white"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-yellow-200 px-3 py-2 text-center text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {/* ── Note ── */}
      {product.note?.length > 0 && (
        <div className="max-w-5xl mx-auto px-8 pb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Note</h2>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          {product.note.map((n, ni) => (
            <p key={ni} className="text-gray-700 text-sm leading-relaxed">
              {n}
            </p>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-8 pb-20">
        <button
          onClick={() => navigate("/products")}
          className="inline-block text-blue-900 font-semibold hover:underline"
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
