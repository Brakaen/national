import React from 'react';

const OurGoal = () => {
  return (
    <section style={{ background: "#f0f4ff", padding: "80px 48px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "64px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://nationalprofile.com/assets/img/our-goal.png"
            alt="Our Goal"
            style={{ width: "100%", maxWidth: "420px", objectFit: "contain" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ color: "#ef4444", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}></p>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "12px" }}>Our Goal</h2>
          <div style={{ width: "60px", height: "4px", background: "#ef4444", marginBottom: "20px", borderRadius: "2px" }} />
          <p style={{ color: "#4b5563", lineHeight: 1.9, marginBottom: "28px" }}>
            National Profile Factory complies with requirements of the ISO 9001 Revision 2015
            and covers the manufacturing, supply, sales and marketing of Cold rolled profile of
            False ceiling Suspension System, Drywall Partition System, GI Lintel, Roofing Sheet,
            Cut to length and C-Truss Channel and wire clips used in false ceiling suspension.
          </p>
         
          <button style={{
            background: "#ef4444", color: "white", border: "none",
            padding: "12px 32px", borderRadius: "999px",
            fontWeight: "600", fontSize: "1rem", cursor: "pointer",
          }}>
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurGoal;