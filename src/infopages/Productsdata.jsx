export const BASE = "https://nationalprofile.com/assets/img";

export const products = {
  "false-ceiling-suspension-system": {
    title: "False Ceiling Suspension System (FC)",
    intro:
      "The furring system is easy to assemble and is mostly used for the areas that need to be smooth Ceiling with gypsum sheets without joints and where services to be concealed.",
    subProfiles: [
      {
        name: "Furring Channel (FC)",
        desc: "Galvanized lightweight steel section for use in a False ceiling system as well as wall lining installation.",
        img: `${BASE}/products/furring-channel.png`,
        diagram: `${BASE}/products/furring-channel-diagram.png`,
        specs: [
          "Galvanized Steel to......... Quality Coating",
          "Type G40 - Z120gm/m2",
          "Up to G90 - Z275gm/m2",
          "ASTM A653",
          "ASTM A370",
        ],
        table: {
          headers: ["Code", "Thickness/t (MM)", "A", "B", "C", "D", "Length (LM)", "Pack (Pcs/Pack)"],
          rows: [
            ["22 FC 28", "0.37", "66", "35", "22.5", "11", "3.0", "25"],
            // mela rows screenshot la kaata mudila, full table irundha kuduthal
          ],
        },
      },
      {
        name: "Wall Angle (WA)",
        desc: "Galvanized lightweight steel section to be used around the perimeter of the False ceiling.",
        img: `${BASE}/products/wall-angle.png`,
        diagram: `${BASE}/products/wall-angle-diagram.png`,
        specs: [
          "Galvanized Steel to......... Quality Coating",
          "Type G40 - Z120gm/m2",
          "Up to G90 - Z275gm/m2",
          "ASTM A653",
          "ASTM A370",
        ],
        table: {
          headers: ["Code", "Thickness/t (MM)", "A", "B", "Length (LM)", "Pack (Pcs/Pack)"],
          rows: [
            ["25 WA 28", "0.37", "25", "25", "3.0", "50"],
            ["25 WA 27", "0.40", "25", "25", "3.0", "50"],
            ["25 WA 26", "0.45", "25", "25", "3.0", "50"],
            ["25 WA 25", "0.50", "25", "25", "3.0", "50"],
          ],
        },
      },
    ],
    note: [
      "1 - The actual thickness may differ from the thickness specified by a maximum of +/- 0.02mm",
      "2 - Other sizes & thicknesses are also available as per Customer request.",
    ],
  },
};