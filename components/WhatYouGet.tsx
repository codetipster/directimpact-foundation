import React from "react";

export default function WhatYouGet() {
  return (
    <div style={{ background: "var(--navy)", padding: "44px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "normal", color: "#fff", marginBottom: "28px" }}>
          What every sponsored student receives
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>📖</div>
            <div>
              <strong style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>Full Course Access</strong>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>Complete curriculum, no fees</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>📅</div>
            <div>
              <strong style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>Fortnightly Support</strong>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>Live sessions with your instructor</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>✏️</div>
            <div>
              <strong style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>CV Written By Hand</strong>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>Not a template, your story</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>🎯</div>
            <div>
              <strong style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>Unlimited Mock Interviews</strong>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>Until your first job is secured</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>🤝</div>
            <div>
              <strong style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>We Don&apos;t Fire and Forget</strong>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>Support continues after training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}