import React from "react";

export default function DonationImpact() {
  const s = {
    sectionTitle: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "24px",
      fontFamily: "Georgia, serif",
    },
    donationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      margin: "32px 0",
    },
    donationCard: {
      border: "2px solid #e5e5e5",
      borderRadius: "12px",
      padding: "24px 16px",
      textAlign: "center" as const,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "flex-start",
    },
    donationCardFeatured: {
      border: "2px solid #7B1E1E",
      borderRadius: "12px",
      padding: "24px 16px",
      textAlign: "center" as const,
      background: "#fdf6f6",
      position: "relative" as const,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "flex-start",
    },
    featuredBadge: {
      position: "absolute" as const,
      top: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#7B1E1E",
      color: "#fff",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.5px",
      textTransform: "uppercase" as const,
      padding: "3px 10px",
      borderRadius: "100px",
      whiteSpace: "nowrap" as const,
    },
    donationAmount: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#7B1E1E",
      marginBottom: "10px",
      marginTop: "4px",
    },
    donationLabel: {
      fontSize: "13px",
      color: "#555",
      lineHeight: 1.5,
    },
  };

  return (
    <section id="choose-how-to-help">
      <h2 style={s.sectionTitle}>Choose how you want to help</h2>
      <p style={{ fontSize: "16px", color: "#555", marginBottom: "24px" }}>
        Every amount makes a measurable difference. Here is what your gift does on the ground.
      </p>

      <div style={s.donationGrid}>
        <div style={s.donationCard}>
          <div style={s.donationAmount}>$50</div>
          <div style={s.donationLabel}>
            Contribute toward a full journey. Every amount gets someone closer to independence.
          </div>
        </div>

        <div style={s.donationCardFeatured}>
          <div style={s.featuredBadge}>Most impactful</div>
          <div style={s.donationAmount}>$200</div>
          <div style={s.donationLabel}>
            Full Dignity to Independence journey. Emergency relief package through to sustainable livelihood.
          </div>
        </div>

        <div style={s.donationCard}>
          <div style={s.donationAmount}>$70</div>
          <div style={s.donationLabel}>
            Emergency relief package. Food, water, and essential support for one person in crisis.
          </div>
        </div>

        <div style={s.donationCard}>
          <div style={s.donationAmount}>$</div>
          <div style={s.donationLabel}>
            Give the amount that feels right to you. Every contribution moves someone closer to independence.
          </div>
        </div>
      </div>
    </section>
  );
}