import Breadcrumb from "../components/common/Breadcrumb";
const AboutUs = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About Us" },
  ];
return (
    <div>
      <div
        className="relative text-white py-16 px-8"
        style={{ background: "linear-gradient(135deg, #1a237e 60%, #3949ab 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Know More About</h2>
        <div className="w-12 h-1 bg-red-500 mb-8"></div>
        <div className="flex flex-col gap-5 text-gray-700 text-base leading-relaxed">
          <p>National Profile Factory is one of the leading manufacturers of cold rolled sections and related profiles suitable for the gypsum ceiling and partition works Established since 2005. Our factory is located in the Kingdom of Bahrain.</p>
          <p>We are using the latest European technology for producing the profiles. We have well-trained staff, high and sophisticated machinery and equipment to meet the local and outside requirements of our customers.</p>
          <p>We have maintained a much-disciplined method of quality control. We are using tested raw materials with international standards for the specific use of ceiling and partition systems. The finished products meet all international standards related to load carrying capacity, humidity resistance, fire rating etc.</p>
          <p>The integration of advanced research and development in the cold roll forming earned National Profile Factory its reputation as major landmark in the cold roll forming technology. Latest computer aided design method is used in the development and manufacture of a wide range of products leading to high standard of performance and reliability.</p>
          <p>National Profile Factory is mainly producing Main Channels, Furring Channels, Perimeter angles, Drywall partition sections in various thickness and length. As part of our product diversification program, we have started production of <strong>LINTEL CHANNELS, C-TRUSS CHANNEL, CORRUGATED ROOFING SHEET, CUT TO LENGTH FOR G.I AND PPGI</strong> with various thicknesses and different widths.</p>
          <p>Steel Lintel is used in wall construction to replace conventional casting of concrete lintels over door, window or similar openings.</p>
          <p>We are able to provide steel coil servicing of Galvanized Steel / Cold Rolled Steel coils of Thickness in the range of 0.37mm to 2mm and Master coil width upto 1250mm.</p>
          <p>We have further plan of expansion. We do have separate professional team for marketing our products in the Kingdom and in other GCC states.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
