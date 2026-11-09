import React from "react";

export default function Hero() {
  return (
    <div style={{ background: "var(--crimson)", padding: "56px 24px 48px", textAlign: "center" }}>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffffff", opacity: 0.75, marginBottom: "12px" }}>
        Dignity to Independence Programme
      </p>
      <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: "normal", color: "#ffffff", lineHeight: 1.2, marginBottom: "16px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
        Apply for a Fully Funded Tech Career Training Place
      </h1>
      <p style={{ fontSize: "16px", color: "#ffffff", opacity: 0.88, maxWidth: "540px", margin: "0 auto 24px" }}>
        No fees. No conditions. Open across Nigeria. Just the training, support, and pathway you deserve.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
          ✓ Vetted Organisation
        </span>
        <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
          ★ Top-Ranked
        </span>
        <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
          ✓ Effective Organisation 2026
        </span>
        <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
          GlobalGiving Certified
        </span>
      </div>
    </div>
  );
}