import React from "react";

export default function CoursesSection() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px 36px" }}>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "10px" }}>
        Available Courses
      </p>
      <h2 style={{ fontSize: "26px", fontWeight: "normal", color: "var(--navy)", marginBottom: "8px" }}>
        Three sponsored pathways currently open
      </h2>
      <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "32px", maxWidth: "720px" }}>
        Self-paced online, delivered by Betapersin, DIEF&apos;s sister commercial training partner, led by a CISSP and Microsoft Identity and Access Administrator <span style={{ whiteSpace: "nowrap" }}>(SC-300)</span> certified instructor with fifteen years in identity and security.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        {/* IAM Block */}
        <div style={{ borderTop: "3px solid var(--crimson)", paddingTop: "24px" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "8px" }}>
            Now Open
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: "normal", color: "var(--navy)", marginBottom: "12px" }}>
            Identity and Access Management (IAM)
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6, maxWidth: "780px" }}>
            A complete foundation in IAM covering concepts, tools, and real-world application. Leads to employability in one of the fastest-growing areas of cybersecurity.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Full curriculum access included</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Fortnightly live support sessions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>CV rewritten by hand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Unlimited mock interviews until first job secured</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Market value: over $1,300</span>
            </div>
          </div>
          <span style={{ display: "inline-block", background: "var(--green-light)", color: "var(--green)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
            ✓ Fully Funded by DIEF
          </span>
        </div>

        {/* IAM Engineering Block */}
        <div style={{ borderTop: "3px solid var(--crimson)", paddingTop: "24px" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "8px" }}>
            Now Open
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: "normal", color: "var(--navy)", marginBottom: "12px" }}>
            Identity and Access Management (IAM) Engineering
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6, maxWidth: "780px" }}>
            A hands-on build, not theory and portal clicks. You engineer a live identity estate in Microsoft Entra ID and Okta: the directory, authentication protocols, Conditional Access, privileged access, entitlements, and the automation layer that ties it together. By the capstone, these labs add up to a portfolio project you can show an employer.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Full curriculum access included</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Fortnightly live support sessions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>CV rewritten by hand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Unlimited mock interviews until first job secured</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Market value: over $2,500</span>
            </div>
          </div>
          <span style={{ display: "inline-block", background: "var(--green-light)", color: "var(--green)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
            ✓ Fully Funded by DIEF
          </span>
        </div>

        {/* GRC Block */}
        <div style={{ borderTop: "3px solid var(--crimson)", paddingTop: "24px" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "8px" }}>
            Now Open
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: "normal", color: "var(--navy)", marginBottom: "12px" }}>
            Governance, Risk and Compliance (GRC)
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6, maxWidth: "780px" }}>
            A structured GRC programme covering frameworks, risk assessment, and compliance operations. Prepares you for roles in risk management and organisational governance.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Full curriculum access included</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Fortnightly live support sessions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>CV rewritten by hand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Unlimited mock interviews until first job secured</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--crimson)", flexShrink: 0 }}>✓</span>
              <span>Market value: over $1,300</span>
            </div>
          </div>
          <span style={{ display: "inline-block", background: "var(--green-light)", color: "var(--green)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px" }}>
            ✓ Fully Funded by DIEF
          </span>
        </div>

        {/* Full Stack Block (Coming Soon) */}
        <div style={{ borderTop: "3px solid var(--border)", paddingTop: "24px", opacity: 0.65 }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>
            Coming Soon
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: "normal", color: "var(--navy)", marginBottom: "12px" }}>
            Full Stack Engineering
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6, maxWidth: "780px" }}>
            End-to-end web development. Applications will open once funding is secured for this track.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--muted)" }}>
            <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", flexShrink: 0 }}>🔒</span>
            <span>Applications not yet open</span>
          </div>
        </div>
      </div>
    </div>
  );
}