import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-900 text-white text-sm py-5 px-8 flex justify-between items-center">
        <span>✉ info@nationalprofile.com</span>
        <a href="#" className="hover:underline text-2x1 font-bold">⬇ Download Brochure</a>
        <span>📞 +973 17 641 999</span>
      </div>
      <div className="px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="https://nationalprofile.com/assets/img/logo.png" alt="NF Logo" className="h-16 object-contain" />
          <span className="text-blue-900 font-bold text-3xl">National Profile Factory</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={isActive("/") ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1" : "text-gray-700 hover:text-blue-900"}>Home</Link>
          <Link to="/about" className={isActive("/about") ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1" : "text-gray-700 hover:text-blue-900"}>About Us</Link>
          <div className="relative">
            <div className="flex items-center gap-1">
              <Link to="/products" className={isActive("/products") ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1" : "text-gray-700 hover:text-blue-900"}>Products</Link>
              <button onClick={() => setProductsOpen(!productsOpen)} className="text-gray-700 text-xs">v</button>
            </div>
            {productsOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-md w-52 z-50 border border-gray-100">
                {[
                  { name: "False Ceiling System", id: "false-ceiling" },
                  { name: "Steel Framing System", id: "steel-framing" },
                  { name: "Raised Floor System", id: "raised-floor" },
                  { name: "Cable Trays", id: "cable-trays" },
                ].map((item) => (
                  <Link key={item.id} to={`/products/${item.id}`} onClick={() => setProductsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" className={isActive("/contact") ? "text-blue-900 font-bold border-b-2 border-red-500 pb-1" : "text-gray-700 hover:text-blue-900"}>Contact Us</Link>
        </div>
        <button className="md:hidden text-blue-900 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "X" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700">About Us</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="text-gray-700">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;