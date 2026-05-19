"use client";

import React, { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

// ==========================================
// 1. DIGITAL EMPOWERMENT SECTION COMPONENT
// ==========================================
const pillars = [
  { icon: "🌍", title: "Open to everyone", text: "No prior experience needed. If you have the drive, we have the course." },
  { icon: "👩‍💻", title: "Built for real life", text: "Practical skills that translate directly into income and opportunity." },
  { icon: "🔒", title: "Always free", text: "No card. No catch. No hidden fees. Ever." },
  { icon: "🤝", title: "You will not do this alone", text: "We guide you through every step. If you get stuck, we are here." },
];

function DigitalEmpowermentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#faf8f5", padding: "80px 24px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "2.5px", textTransform: "uppercase", color: "#7B1E1E", marginBottom: "20px" }}>Who this is for</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "normal", color: "#1a1a1a", lineHeight: "1.25", marginBottom: "28px" }}>
          Relief gets someone through today. <br />
          <span style={{ color: "#7B1E1E" }}>Skills get them through the rest of their lives.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", borderTop: "3px solid #7B1E1E", borderRadius: "4px", padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{p.icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "#1a1a1a", marginBottom: "8px" }}>{p.title}</h3>
              <p style={{ fontSize: "15px", color: "#666", margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. MAIN TRAINING PAGE COMPONENT
// ==========================================
export default function TrainingPage() {
  const [form, setForm] = useState({ name: "", email: "", course: "", background: "" });
  const [errors, setErrors] = useState({ name: "", email: "", course: "", background: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const courses = [
    { color: "#185FA5", type: "IAM", title: "Identity and Access Management", desc: "Learn how organisations control access.", noCoding: true },
    { color: "#1D9E75", type: "GRC", title: "Governance, Risk and Compliance", desc: "Understand enterprise cybersecurity governance.", noCoding: true },
    { color: "#533AB7", type: "Full Stack", title: "Full Stack Engineering", desc: "Frontend + backend development combined." },
    { color: "#D97706", type: "Cloud", title: "Cloud Fundamentals", desc: "Master basic cloud architecture and services." },
    { color: "#C2410C", type: "Data", title: "Data Analytics", desc: "Turning raw data into actionable insights." },
    { color: "#4F46E5", type: "AI", title: "AI Prompt Engineering", desc: "Learn to build and manage AI workflows." },
  ];

  const s: Record<string, CSSProperties> = {
    page: { fontFamily: "Arial, sans-serif", background: "#fff", color: "#1a1a1a", margin: 0, padding: 0 },
    hero: { background: "#1a1a1a", color: "#fff", padding: "72px 24px 56px", textAlign: "center" },
    section: { maxWidth: "960px", margin: "0 auto", padding: "64px 24px" },
    courseGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Force 3 columns
        gap: "24px",
        margin: "32px 0 56px",
    },
    courseCardBase: { background: "#fff", borderRadius: "12px", border: "1px solid #e5e5e5", padding: "28px 24px" },
    label: { display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" },
    input: { width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: "8px", boxSizing: "border-box" },
    select: { width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: "8px", background: "#fff", boxSizing: "border-box" },
    textarea: { width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: "8px", minHeight: "100px", boxSizing: "border-box" },
    btnRed: { background: "#7B1E1E", color: "#fff", border: "none", padding: "16px 40px", borderRadius: "100px", cursor: "pointer", fontWeight: 600 },
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <h1 style={{ fontSize: "40px", fontFamily: "Georgia, serif" }}>A digital skill can change a life.</h1>
      </div>

      <DigitalEmpowermentSection />

      <div style={s.section}>
        <h2>Choose your pathway</h2>
        <div style={s.courseGrid}>
          {courses.map((c) => (
            <div key={c.title} style={{ ...s.courseCardBase, borderTop: `4px solid ${c.color}` }}>
              <div style={{ fontSize: "11px", color: c.color, fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>{c.type}</div>
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>{c.title}</div>
              <div style={{ fontSize: "14px", color: "#555" }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div id="apply-form" style={{ background: "#f9f9f9", borderRadius: "12px", padding: "40px" }}>
           {/* Form fields remain the same as your previous implementation */}
        </div>
      </div>
    </div>
  );
}