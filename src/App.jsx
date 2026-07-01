import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Home from "./infopages/Home";
import AboutUs from "./infopages/AboutUs";
import Products from "./infopages/Products";
import ContactUs from "./infopages/ContactUs";
import ProductDetail from "./infopages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;