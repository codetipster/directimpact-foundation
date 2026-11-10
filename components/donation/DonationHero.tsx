import React from "react";
import Image from "next/image";

export default function DonationHero() {
  const s = {
    hero: {
      background: "#7B1E1E",
      color: "#fff",
      padding: "72px 24px 56px",
      textAlign: "center" as const,
    },
    heroTag: {
      display: "inline-block",
      background: "rgba(255,255,255,0.15)",
      color: "#fff",
      fontSize: "12px",
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      padding: "6px 16px",
      borderRadius: "100px",
      marginBottom: "20px",
    },
    heroH1: {
      fontSize: "clamp(26px, 4vw, 44px)",
      fontWeight: 400,
      lineHeight: 1.2,
      maxWidth: "680px",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Georgia, serif",
      marginBottom: "20px",
    },
    heroP: {
      fontSize: "17px",
      color: "rgba(255,255,255,0.85)",
      maxWidth: "560px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.75,
    },
    trustStrip: {
      background: "#FDF6F6",
      borderBottom: "1px solid #E5E5E5",
      padding: "20px 24px",
    },
    trustStripInner: {
      maxWidth: "860px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "32px",
      flexWrap: "wrap" as const,
    },
    trustLabel: {
      fontSize: "14px",
      fontWeight: 700,
      color: "#7B1E1E",
      margin: 0,
    },
    badgeGroup: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap" as const,
    },
    trustBadgeItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
    },
    trustBadgeText: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#333",
    },
  };

  return (
    <>
      <section style={s.hero}>
        <div style={s.heroTag}>Support our work</div>
        <h1 style={s.heroH1}>Your donation walks with someone from crisis to independence.</h1>
        <p style={s.heroP}>
          Every amount goes directly to the people we find in Nigeria&apos;s most vulnerable communities.
          No overhead. No waste. Direct impact.
        </p>
      </section>

      <div style={s.trustStrip}>
        <div style={s.trustStripInner}>
          <p style={s.trustLabel}>Trusted and verified on:</p>
          <div style={s.badgeGroup}>
            <a 
              href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={s.trustBadgeItem}
            >
              <Image
                src="/Globalgivingbadge.jpeg"
                alt="GlobalGiving Vetted Organization 2026"
                width={28}
                height={28}
                style={{ width: "28px", height: "auto", display: "block" }}
                unoptimized
              />
              <span style={s.trustBadgeText}>GlobalGiving 2026</span>
            </a>
            <div style={{ width: "1px", height: "24px", background: "#E5E5E5" }} />
            <a 
              href="https://benevity.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={s.trustBadgeItem}
            >
              <Image
                src="/benevity-logo.png"
                alt="Listed on Benevity"
                width={24}
                height={24}
                style={{ width: "24px", height: "auto", display: "block" }}
                unoptimized
              />
              <span style={s.trustBadgeText}>Listed on Benevity</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}