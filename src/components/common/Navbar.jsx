import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* ── Top Info Bar ── */}
      <div className="bg-blue-900 text-white text-[10px] xs:text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-8 flex flex-row justify-between items-center gap-1">
        <a
          href="mailto:info@nationalprofile.com"
          className="hover:underline truncate flex-1 text-left"
        >
          ✉ <span className="hidden xs:inline">info@nationalprofile.com</span>
          <span className="xs:hidden">Email</span>
        </a>
        <Link
          to="/about"
          className="hover:underline font-bold whitespace-nowrap text-center flex-shrink-0"
        >
          ⬇ Download Brochure
        </Link>
        <a
          href="tel:+97317641999"
          className="hover:underline whitespace-nowrap text-right flex-1"
        >
          📞 +973 17 641 999
        </a>
      </div>

      {/* ── Main Nav ── */}
      <div className="px-4 sm:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <img
            src="https://nationalprofile.com/assets/img/logo.png"
            alt="NF Logo"
            className="h-10 sm:h-14 md:h-16 object-contain flex-shrink-0"
          />
          <span className="text-blue-900 font-bold text-sm sm:text-xl md:text-3xl leading-tight truncate">
            National Profile Factory
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={
              isActive("/")
                ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1"
                : "text-gray-700 hover:text-blue-900"
            }
          >
            Home
          </Link>
          <Link
            to="/about"
            className={
              isActive("/about")
                ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1"
                : "text-gray-700 hover:text-blue-900"
            }
          >
            About Us
          </Link>
          <div className="relative">
            <div className="flex items-center gap-1">
              <Link
                to="/products"
                className={
                  isActive("/products")
                    ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1"
                    : "text-gray-700 hover:text-blue-900"
                }
              >
                Products
              </Link>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-gray-700 text-xs"
              >
                v
              </button>
            </div>
            {productsOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-md w-52 z-50 border border-gray-100">
                {[
                  { name: "False Ceiling System", id: "false-ceiling" },
                  { name: "Steel Framing System", id: "steel-framing" },
                  { name: "Raised Floor System", id: "raised-floor" },
                  { name: "Cable Trays", id: "cable-trays" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    to={`/products/${item.id}`}
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className={
              isActive("/contact")
                ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1"
                : "text-gray-700 hover:text-blue-900"
            }
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-blue-900 text-xl sm:text-2xl flex-shrink-0 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700">
            About Us
          </Link>

          {/* Products with mobile dropdown */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700"
              >
                Products
              </Link>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-gray-700 text-xs px-2"
              >
                {productsOpen ? "▲" : "▼"}
              </button>
            </div>
            {productsOpen && (
              <div className="mt-2 pl-3 flex flex-col gap-2 border-l border-gray-200">
                {[
                  { name: "False Ceiling System", id: "false-ceiling" },
                  { name: "Steel Framing System", id: "steel-framing" },
                  { name: "Raised Floor System", id: "raised-floor" },
                  { name: "Cable Trays", id: "cable-trays" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    to={`/products/${item.id}`}
                    onClick={() => {
                      setProductsOpen(false);
                      setMenuOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;