"use client";

import React, { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

// ==========================================
// 1. DIGITAL EMPOWERMENT SECTION
// ==========================================
const pillars = [
  { icon: "🌍", title: "Open to everyone", text: "No prior experience needed. If you have the drive, we have the course." },
  { icon: "👩‍💻", title: "Built for real life", text: "Practical skills that translate directly into income and opportunity." },
  { icon: "🔒", title: "Always free", text: "No card. No catch. No hidden fees. Ever." },
  { icon: "🤝", title: "You will not do this alone", text: "We guide you through every step. If you get stuck, we are here." },
  { icon: "🏘️", title: "Built for your community", text: "Designed for people who have been overlooked by traditional education." },
  { icon: "🚪", title: "Skills that open doors", text: "Every course connects to a real pathway — employment or further training." },
];

function DigitalEmpowermentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#faf8f5", padding: "80px 24px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "2.5px", textTransform: "uppercase", color: "#7B1E1E", marginBottom: "20px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>Who this is for</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "normal", color: "#1a1a1a", lineHeight: "1.25", marginBottom: "28px" }}>
          Relief gets someone through today. <br />
          <span style={{ color: "#7B1E1E" }}>Skills get them through the rest of their lives.</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginTop: "40px" }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", borderTop: "3px solid #7B1E1E", borderRadius: "4px", padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s` }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{p.icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "#1a1a1a", marginBottom: "8px" }}>{p.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#666", margin: 0 }}>{p.text}</p>
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

  const handleSubmit = async () => {
    const newErrors = { name: "", email: "", course: "", background: "" };
    let isValid = true;
    if (!form.name.trim()) { newErrors.name = "name required"; isValid = false; }
    if (!form.email.trim()) { newErrors.email = "email required"; isValid = false; }
    if (!form.course) { newErrors.course = "please select a course"; isValid = false; }
    if (!form.background.trim()) { newErrors.background = "please write a brief history"; isValid = false; }
    setErrors(newErrors);
    if (!isValid) return;
    
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mojpzkrb", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch (err) { console.error(err); setSending(false); }
  };

  // Styles object
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: "Arial, sans-serif", background: "#fff", color: "#1a1a1a", margin: 0, padding: 0 },
    hero: { background: "#1a1a1a", color: "#fff", padding: "72px 24px 56px", textAlign: "center" },
    section: { maxWidth: "880px", margin: "0 auto", padding: "64px 24px" },
    input: { width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "16px" },
    btnRed: { background: "#7B1E1E", color: "#fff", border: "none", padding: "16px 40px", borderRadius: "100px", cursor: "pointer", fontWeight: 600 }
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontFamily: "Georgia, serif" }}>A digital skill can change the trajectory of a life.</h1>
        <a href="#apply-form" style={{ display: "inline-block", background: "#7B1E1E", color: "#fff", padding: "12px 24px", borderRadius: "100px", marginTop: "24px", textDecoration: "none" }}>Apply for a funded place</a>
      </div>

      <DigitalEmpowermentSection />

      <div style={s.section}>
        <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif" }}>Choose your pathway</h2>
        {/* Course content here... */}
        
        <div id="apply-form" style={{ background: "#f9f9f9", borderRadius: "12px", padding: "48px 40px", marginTop: "48px" }}>
          {submitted ? (
            <div style={{ background: "#e8f5e9", padding: "32px", textAlign: "center" }}>Application received.</div>
          ) : (
            <div>
              <label>Full name</label>
              <input style={s.input} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your name" />
              <label>Email address</label>
              <input style={s.input} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
              <button style={s.btnRed} onClick={handleSubmit} disabled={sending}>{sending ? "Sending..." : "Submit application"}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}