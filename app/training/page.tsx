"use client";

import React, { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

// ==========================================
// 1. DIGITAL EMPOWERMENT SECTION COMPONENT
// ==========================================
const pillars = [
  {
    icon: "🌍",
    title: "Open to everyone",
    text: "No prior experience needed. If you have the drive, we have the course.",
  },
  {
    icon: "👩‍💻",
    title: "Built for real life",
    text: "Practical skills that translate directly into income and opportunity.",
  },
  {
    icon: "🔒",
    title: "Always free",
    text: "No card. No catch. No hidden fees. Ever.",
  },
  {
    icon: "🤝",
    title: "You will not do this alone",
    text: "We guide you through every step. If you get stuck, we are here.",
  },
  {
    icon: "🏘️",
    title: "Built for your community",
    text: "Designed for people who have been overlooked by traditional education. If the system missed you, this was made for you.",
  },
  {
    icon: "🚪",
    title: "Skills that open doors",
    text: "Every course connects to a real pathway — employment, self-employment, or further training. You leave with more than knowledge.",
  },
];

function DigitalEmpowermentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#faf8f5",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#7B1E1E",
            marginBottom: "20px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Who this is for
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "normal",
            color: "#1a1a1a",
            lineHeight: "1.25",
            marginBottom: "28px",
            maxWidth: "680px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          Relief gets someone through today.
          <br />
          <span style={{ color: "#7B1E1E" }}>
            Skills get them through the rest of their lives.
          </span>
        </h2>

        {/* Body text */}
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.75",
            color: "#444",
            marginBottom: "16px",
            maxWidth: "640px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          Alongside our emergency and humanitarian work, we equip people with
          digital skills that open real doors. People who never had access to
          formal education, technology, or career pathways.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.75",
            color: "#444",
            marginBottom: "56px",
            maxWidth: "640px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          Our learners are women returning to work, young adults who slipped
          through the system, and community members who simply never had the
          chance. Every course is free. Every skill is real. Every person who
          completes it leaves with something no one can take away.
        </p>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                borderTop: "3px solid #7B1E1E",
                borderRadius: "4px",
                padding: "28px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.35 + i * 0.1}s, transform 0.6s ease ${0.35 + i * 0.1}s`,
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "17px",
                  fontWeight: "normal",
                  color: "#1a1a1a",
                  marginBottom: "8px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#666",
                  margin: 0,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider into next section */}
        <div
          style={{
            marginTop: "64px",
            borderBottom: "1px solid #e0d8d0",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}
        />
      </div>
    </section>
  );
}

// ==========================================
// 2. WHAT YOU GET SECTION COMPONENT
// ==========================================
function WhatYouGetSection() {
  const wygItems = [
    { icon: "📚", title: "Full Course Access", sub: "Complete curriculum, no fees" },
    { icon: "📅", title: "Fortnightly Support", sub: "Live sessions with the founder" },
    { icon: "✍️", title: "CV Written By Hand", sub: "Not a template — your story" },
    { icon: "🎯", title: "Unlimited Mock Interviews", sub: "Until your first job is secured" },
    { icon: "🤝", title: "We Don't Fire and Forget", sub: "Support continues after training" },
    { icon: "🌍", title: "Pan-African Programme", sub: "Open across Africa as we scale" },
  ];

  return (
    <div style={{ background: "#1a3a5c", padding: "44px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "normal", color: "#fff", marginBottom: "28px" }}>
          What every sponsored student receives
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px" }}>
          {wygItems.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "2px",
                  }}
                >
                  {item.title}
                </strong>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "rgba(255, 255, 255, 0.62)" }}>
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN APPLICATION PAGE COMPONENT
// ==========================================
export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const errBoxRef = useRef<HTMLDivElement>(null);

  // Form State
  const [consentData, setConsentData] = useState(false);
  const [declaration, setDeclaration] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!consentData || !declaration) {
      setShowError(true);
      if (errBoxRef.current) {
        errBoxRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setShowError(false);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojpzkrb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was a problem submitting your application. Please email femi@directimpactempowerment.org directly.");
      }
    } catch (err) {
      alert("There was a problem submitting your application. Please email femi@directimpactempowerment.org directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", backgroundColor: "#fafafa", lineHeight: 1.6 }}>
      {/* GLOBAL INLINE STYLES FOR APPLICATION FORM FORM-GROUPS & INPUTS */}
      <style jsx global>{`
        :root {
          --crimson: #7B1E1E;
          --crimson-dark: #5a1515;
          --crimson-light: #f5eaea;
          --gold: #C8972A;
          --gold-light: #fdf6e8;
          --navy: #1a3a5c;
          --navy-light: #e8eff7;
          --green: #1a6b3a;
          --green-light: #e8f5ee;
          --border: #ddd;
          --muted: #555;
          --radius: 8px;
          --shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .fg-input {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 10px 14px;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .fg-input:focus {
          outline: none;
          border-color: var(--crimson);
          box-shadow: 0 0 0 3px rgba(123,30,30,0.1);
        }
        .fg-input[readonly] {
          background: #f5f5f5;
          color: var(--muted);
          cursor: not-allowed;
        }
        textarea.fg-input {
          resize: vertical;
          min-height: 90px;
        }
      `}</style>

      {/* HERO SECTION */}
      <div style={{ background: "var(--crimson)", padding: "56px 24px 48px", textAlign: "center" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.75, marginBottom: "12px", color: "#fff" }}>
          Dignity to Independence Programme
        </p>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: "normal", lineHeight: 1.2, marginBottom: "16px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto", color: "#fff" }}>
          Apply for a Fully Funded Tech Career Training Place
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.88, maxWidth: "540px", margin: "0 auto 24px", color: "#fff" }}>
          No fees. No conditions. Open across Africa. Just the training, support, and pathway you deserve.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px", color: "#fff" }}>
            ✓ Vetted Organisation
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px", color: "#fff" }}>
            ★ Top-Ranked
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px", color: "#fff" }}>
            ✓ Effective Organisation 2026
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px", color: "#fff" }}>
            GlobalGiving Certified
          </span>
        </div>
      </div>

      {/* DIGITAL EMPOWERMENT / WHO THIS IS FOR */}
      <DigitalEmpowermentSection />

      {/* COURSES SECTION */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px 36px" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "10px" }}>
          Available Courses
        </p>
        <h2 style={{ fontSize: "26px", fontWeight: "normal", color: "var(--navy)", marginBottom: "8px" }}>
          Two sponsored pathways currently open
        </h2>
        <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "32px", maxWidth: "600px" }}>
          Delivered online by Olufemi Adeyemo, CISSP-certified founder of DIEF and fifteen-year identity and security professional.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "20px" }}>
          
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderTop: "4px solid var(--crimson)", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow)" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "8px" }}>
              Now Open
            </p>
            <h3 style={{ fontSize: "17px", fontWeight: "normal", color: "var(--navy)", marginBottom: "8px" }}>
              Identity and Access Management (IAM)
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "14px", lineHeight: 1.55 }}>
              A complete foundation in IAM covering concepts, tools, and real-world application. Leads to employability in one of the fastest-growing areas of cybersecurity.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Full curriculum access included</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Fortnightly live support sessions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>CV rewritten by hand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Unlimited mock interviews until first job secured</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Market value: over $1,300</span>
            </div>
            <span style={{ display: "inline-block", background: "var(--green-light)", color: "var(--green)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "20px", marginTop: "12px" }}>
              ✓ Fully Funded by DIEF
            </span>
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--border)", borderTop: "4px solid var(--crimson)", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow)" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "8px" }}>
              Now Open
            </p>
            <h3 style={{ fontSize: "17px", fontWeight: "normal", color: "var(--navy)", marginBottom: "8px" }}>
              Governance, Risk and Compliance (GRC)
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "14px", lineHeight: 1.55 }}>
              A structured GRC programme covering frameworks, risk assessment, and compliance operations. Prepares you for roles in risk management and organisational governance.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Full curriculum access included</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Fortnightly live support sessions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>CV rewritten by hand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Unlimited mock interviews until first job secured</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
              <span>Market value: over $1,300</span>
            </div>
            <span style={{ display: "inline-block", background: "var(--green-light)", color: "var(--green)", fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "20px", marginTop: "12px" }}>
              ✓ Fully Funded by DIEF
            </span>
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--border)", borderTop: "4px solid var(--border)", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow)", opacity: 0.62 }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>
              Coming Soon
            </p>
            <h3 style={{ fontSize: "17px", fontWeight: "normal", color: "var(--navy)", marginBottom: "8px" }}>
              Full Stack Engineering
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "14px", lineHeight: 1.55 }}>
              End-to-end web development. Applications will open once funding is secured for this track.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
              <span style={{ width: "18px", height: "18px", background: "var(--crimson-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>🔒</span>
              <span>Applications not yet open</span>
            </div>
          </div>

        </div>
      </div>

      {/* WHAT YOU GET */}
      <WhatYouGetSection />

      {/* APPLICATION FORM OUTER */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
          
          <div style={{ background: "var(--crimson-light)", borderBottom: "1px solid #e0cece", padding: "26px 34px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "normal", color: "var(--crimson-dark)", marginBottom: "4px" }}>
              Application Form
            </h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--muted)" }}>
              Complete all sections carefully. We read every application personally. You will hear back within 14 days.
            </p>
          </div>

          <div id="formContainer">
            {submitted ? (
              <div style={{ background: "var(--green-light)", border: "1px solid #a0d0b0", borderRadius: "var(--radius)", padding: "36px 28px", textAlign: "center", margin: "34px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "normal", color: "var(--green)", marginBottom: "8px" }}>
                  Application received
                </h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "var(--muted)" }}>
                  Thank you for applying. We have received your application and will be in touch within 14 days. We read every application personally.
                </p>
              </div>
            ) : (
              <form id="appForm" onSubmit={handleSubmit} style={{ padding: "34px" }}>
                
                {/* SECTION 1: Personal Details */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--crimson)", paddingBottom: "8px", borderBottom: "2px solid var(--crimson-light)", marginBottom: "20px", marginTop: 0 }}>
                  Personal Details
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="firstName" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      First Name <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Your first name" className="fg-input" />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="lastName" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Last Name <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Your last name" className="fg-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="email" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Email Address <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" className="fg-input" />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="phone" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Phone Number <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required placeholder="Include your country code e.g. +234" className="fg-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="country" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Country of Residence <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="country" name="country" defaultValue="Nigeria" readOnly className="fg-input" />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="city" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      City <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    </label>
                    <select id="city" name="city" required className="fg-input">
                      <option value="">Select your city</option>
                      <option>Abuja</option><option>Abeokuta</option><option>Ado-Ekiti</option><option>Akure</option>
                      <option>Asaba</option><option>Awka</option><option>Bauchi</option><option>Benin City</option>
                      <option>Birnin Kebbi</option><option>Calabar</option><option>Damaturu</option><option>Dutse</option>
                      <option>Enugu</option><option>Gombe</option><option>Gusau</option><option>Ibadan</option>
                      <option>Ilorin</option><option>Jalingo</option><option>Jos</option><option>Kaduna</option>
                      <option>Kano</option><option>Katsina</option><option>Kebbi</option><option>Lagos</option>
                      <option>Lafia</option><option>Lokoja</option><option>Maiduguri</option><option>Makurdi</option>
                      <option>Minna</option><option>Nnewi</option><option>Onitsha</option><option>Osogbo</option>
                      <option>Owerri</option><option>Port Harcourt</option><option>Sokoto</option><option>Umuahia</option>
                      <option>Uyo</option><option>Warri</option><option>Yenagoa</option><option>Yola</option>
                      <option>Zaria</option><option>Other</option>
                    </select>
                  </div>
                </div>

                {/* SECTION 2: Course Selection */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--crimson)", paddingBottom: "8px", borderBottom: "2px solid var(--crimson-light)", marginBottom: "20px", marginTop: "34px" }}>
                  Course Selection
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="course" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Which course are you applying for? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="course" name="course" required className="fg-input">
                    <option value="">Select a course</option>
                    <option>Identity and Access Management (IAM)</option>
                    <option>Governance, Risk and Compliance (GRC)</option>
                    <option>Bundle — IAM and GRC combined</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="digitalLevel" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How would you describe your current digital skills level? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="digitalLevel" name="digitalLevel" required className="fg-input">
                    <option value="">Select one</option>
                    <option>Beginner — I use a phone and basic apps</option>
                    <option>Intermediate — I am comfortable with computers and the internet</option>
                    <option>Advanced — I have some technical background</option>
                  </select>
                </div>

                {/* SECTION 3: Your Background */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--crimson)", paddingBottom: "8px", borderBottom: "2px solid var(--crimson-light)", marginBottom: "20px", marginTop: "34px" }}>
                  Your Background
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="situation" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Tell us briefly about your current situation <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      What is your life like right now? Are you employed, studying, or neither?
                    </span>
                  </label>
                  <textarea id="situation" name="situation" required placeholder="Tell us a little about where you are right now..." className="fg-input" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="motivation" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Why do you want to train in this field? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      Tell us what this opportunity means to you. Be honest — there are no wrong answers.
                    </span>
                  </label>
                  <textarea id="motivation" name="motivation" required placeholder="What would this change for you and your family?" className="fg-input" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="commitment" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How many hours per week can you dedicate to training?
                    <span style={{ fontWeight: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      We want to make sure you can complete the programme successfully.
                    </span>
                  </label>
                  <select id="commitment" name="commitment" className="fg-input">
                    <option value="">Select one</option>
                    <option>Less than 5 hours</option>
                    <option>5 to 10 hours</option>
                    <option>10 to 15 hours</option>
                    <option>More than 15 hours</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="laptop" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have access to a laptop or desktop computer? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="laptop" name="laptop" required className="fg-input">
                    <option value="">Select one</option>
                    <option>Yes — I have my own laptop or desktop</option>
                    <option>Yes — I have shared access to a laptop or desktop</option>
                    <option>No — I do not currently have access to a laptop or desktop</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="internet" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have reliable internet access? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="internet" name="internet" required className="fg-input">
                    <option value="">Select one</option>
                    <option>Yes — I have reliable home or office internet</option>
                    <option>Yes — I use mobile data and it is generally stable</option>
                    <option>Partial — my connection is sometimes unreliable</option>
                    <option>No — I do not currently have reliable access</option>
                  </select>
                </div>

                {/* SECTION 4: Consent and Permissions */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--crimson)", paddingBottom: "8px", borderBottom: "2px solid var(--crimson-light)", marginBottom: "20px", marginTop: "34px" }}>
                  Consent and Permissions
                </p>

                <div style={{ background: "var(--gold-light)", border: "1px solid #e8d5a3", borderRadius: "var(--radius)", padding: "22px 24px", margin: "8px 0 16px" }}>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                    📋 Please read and confirm each item below
                  </p>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_data"
                      name="consent_data"
                      checked={consentData}
                      onChange={(e) => setConsentData(e.target.checked)}
                      required
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "var(--crimson)", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_data" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "var(--crimson-dark)", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of personal data for programme delivery <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to store and use the information I have provided in this application for the purposes of assessing my application, contacting me about my place, and delivering the training programme.
                      <em style={{ fontStyle: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Required to process your application.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_gg"
                      name="consent_globalgiving"
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "var(--crimson)", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_gg" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "var(--crimson-dark)", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of photo and data in GlobalGiving reports
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to use my name, photograph, and anonymised progress data in reports submitted to GlobalGiving as evidence of programme delivery and impact. This may include project reports visible to donors on the GlobalGiving platform.
                      <em style={{ fontStyle: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional — but helps us demonstrate impact to the donors who fund your place.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_media"
                      name="consent_media"
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "var(--crimson)", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_media" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "var(--crimson-dark)", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of story and image in fundraising and social media
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to share my story and photograph on social media, the DIEF website, and in fundraising materials. DIEF will always ask for approval before using any specific content about me.
                      <em style={{ fontStyle: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional — your story helps us fund more places like yours.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input
                      type="checkbox"
                      id="consent_shoutout"
                      name="consent_shoutout"
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "var(--crimson)", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_shoutout" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "var(--crimson-dark)", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Public celebration and shout-out
                      </strong>
                      I am happy for DIEF to publicly celebrate my progress and achievements on social media when milestones are reached — such as completing the course or securing employment.
                      <em style={{ fontStyle: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional — we love celebrating our students!
                      </em>
                    </label>
                  </div>

                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", background: "rgba(255,255,255,0.65)", borderLeft: "3px solid var(--gold)", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: "14px", lineHeight: 1.6 }}>
                    <strong>Your privacy matters to us.</strong> DIEF will never sell or share your personal data with third parties. You can withdraw any consent at any time by emailing <strong>femi@directimpactempowerment.org</strong>. Only the first consent item is required to process your application.
                  </div>
                </div>

                {/* SECTION 5: Declaration */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--crimson)", paddingBottom: "8px", borderBottom: "2px solid var(--crimson-light)", marginBottom: "20px", marginTop: "34px" }}>
                  Declaration
                </p>

                <div style={{ background: "var(--crimson-light)", border: "1px solid #e0cece", borderRadius: "var(--radius)", padding: "22px 24px", margin: "8px 0 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      checked={declaration}
                      onChange={(e) => setDeclaration(e.target.checked)}
                      required
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "var(--crimson)", cursor: "pointer" }}
                    />
                    <label htmlFor="declaration" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "var(--crimson-dark)", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        I confirm that the information I have provided is accurate and truthful. <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                      </strong>
                      I understand that providing false information may result in my application being withdrawn. I commit to engaging fully with the programme if I am offered a funded place.
                    </label>
                  </div>
                </div>

                <div style={{ background: "var(--navy-light)", border: "1px solid #c0d0e0", borderRadius: "var(--radius)", padding: "16px 20px", marginTop: "20px" }}>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: "#1a3a5c" }}>How we process applications:</strong> Every application is read personally by Olufemi Adeyemo. We do not use automated screening. We prioritise applicants who demonstrate genuine need, commitment, and the potential to benefit fully from the training. You will receive a response within 14 days.
                  </p>
                </div>

                {showError && (
                  <div ref={errBoxRef} style={{ background: "#fff0f0", border: "1px solid #f0c0c0", borderRadius: "6px", padding: "12px 16px", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--crimson)", marginTop: "14px" }}>
                    Please confirm the required consent items before submitting.
                  </div>
                )}

                <div style={{ marginTop: "28px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? "#a55" : "var(--crimson)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "var(--radius)",
                      padding: "14px 38px",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      letterSpacing: "0.02em",
                      transition: "background 0.2s",
                    }}
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit My Application"}
                  </button>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", marginTop: "9px" }}>
                    You will receive a confirmation email once your application is received.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 52px", textAlign: "center" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>
          This programme is part of DIEF’s <strong>Dignity to Independence Programme (DIP)</strong>. Direct Impact Empowerment Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651), independently vetted and Top-Ranked by{" "}
          <a href="https://www.globalgiving.org/projects/76936" target="_blank" rel="noopener noreferrer" style={{ color: "var(--crimson)", textDecoration: "none" }}>
            GlobalGiving
          </a>.
        </p>
      </div>
    </div>
  );
}