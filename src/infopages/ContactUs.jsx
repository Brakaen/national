import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";

const ContactUs = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Contact Us" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── Top Hero Banner Section ── */}
      <div
        className="relative text-white py-16 px-8"
        style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        
        {/* ── Section 1: Our Location Text ── */}
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Our Location</h2>
        <div className="w-12 h-1 bg-red-500 mb-6"></div>
        
        <p className="text-gray-700 text-base leading-relaxed mb-10">
          National Profile Factory is one of the leading manufacturers of cold rolled 
          sections and related profiles suitable for the partition works Established since 
          2005. Our factory is located in the Kingdom of Bahrain.
        </p>

        {/* ── Section 2: Info Cards (Our Location & Contact Us) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-16">
          {/* Card 1: Our Location */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Location</h3>
            <div className="w-12 h-1 bg-red-500 mb-6"></div>
            <p className="text-gray-700 text-base leading-relaxed">
              Building NO 1393, Road - 5138, Block- 951 P.O Box: 33278, Askar, Kingdom of Bahrain.
            </p>
          </div>

          {/* Card 2: Contact Us */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Contact Us</h3>
            <div className="w-12 h-1 bg-red-500 mb-6"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-900 text-lg">✉️</span>
                <a href="mailto:info@nationalprofile.com" className="hover:underline text-base">
                  info@nationalprofile.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-900 text-lg">📞</span>
                <a href="tel:+97317641999" className="hover:underline text-base">
                  +973 17 641 999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Contact Form & Map (NEW - image_b15242.jpg-ல் உள்ளபடி) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          
          {/* இடது பக்கம்: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Contact Form</h2>
            <div className="w-12 h-1 bg-red-500 mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-10/12 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-900 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-10/12 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-900 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-10/12 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-900 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-10/12 p-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-900 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-2.5 rounded text-base transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* வலது பக்கம்: Google Map */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden border border-gray-200 shadow-sm mt-10 md:mt-0">
            <iframe
              title="National Profile Factory Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.822839934336!2d50.60527!3d25.95548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ff7686b249b3%3A0x6b09312b91ab4bd1!2sNational+profile+factory!5e0!3m2!1sen!2sbh!4v1719660000000!5m2!1sen!2sbh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;