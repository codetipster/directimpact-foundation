import React from "react";

export default function VocationalRoadmap() {
  const s = {
    roadmapBanner: {
      background: "#1a1a1a",
      borderRadius: "12px",
      padding: "40px",
      color: "#fff",
      marginBottom: "64px",
      textAlign: "center" as const,
    },
    roadmapH3: {
      fontSize: "22px",
      fontWeight: 700,
      marginBottom: "12px",
    },
    roadmapP: {
      fontSize: "15px",
      color: "#bbb",
      lineHeight: 1.7,
      maxWidth: "560px",
      margin: "0 auto 24px",
    },
    donateBtn: {
      display: "inline-block",
      background: "#7B1E1E",
      color: "#fff",
      padding: "14px 32px",
      borderRadius: "100px",
      fontWeight: 600,
      fontSize: "15px",
      textDecoration: "none",
    },
  };

  return (
    <>
      <div style={s.roadmapBanner}>
        <h3 style={s.roadmapH3}>Help us open the doors.</h3>
        <p style={s.roadmapP}>
          This programme is fully planned and costed. What is missing is the funding to
          secure premises and equipment. Every contribution brings us closer to the day
          we open the doors to our first cohort.
        </p>
        <a href="/donate#choose-how-to-help" style={s.donateBtn}>Fund this programme</a>
      </div>

      <div style={{ background: "#f0f7ff", borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" as const }}>
        <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#185FA5", marginBottom: "12px" }}>Also available</div>
        <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#1a1a1a" }}>Prefer digital skills?</h3>
        <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
          We also offer free cybersecurity and technology courses online through betapersin.com.
          No coding required to get started. Open to anyone across Africa.
        </p>
        <a href="/training" style={{ display: "inline-block", background: "#185FA5", color: "#fff", padding: "14px 32px", borderRadius: "100px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
          Explore digital training
        </a>
      </div>
    </>
  );
}