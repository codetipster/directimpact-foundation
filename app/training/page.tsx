"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

// Helper for Google Analytics Tracking
const trackGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
};

export default function DignityToIndependencePage() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [consentData, setConsentData] = useState(false);
  const [declaration, setDeclaration] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const errBoxRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));

    trackGAEvent("form_field_interaction", {
      field_name: target.name,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentData || !declaration) {
      setShowError(true);
      if (errBoxRef.current) {
        errBoxRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setShowError(false);
    setIsSubmitting(true);

    try {
      trackGAEvent("form_submission_attempt", { form_id: "application_form" });
      
      // Simulate API Submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      trackGAEvent("form_submission_success", { form_id: "application_form" });
    } catch (err) {
      console.error(err);
      trackGAEvent("form_submission_error", { form_id: "application_form" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#f9fbfd", fontFamily: "Arial, sans-serif", color: "#1a1a1a", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <header style={{ background: "linear-gradient(135deg, #771010 0%, #a81c1c 100%)", color: "#ffffff", padding: "60px 24px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f2d6d6", marginBottom: "12px" }}>
            Dignity to Independence Programme
          </p>
          <h1 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Apply for a Fully Funded Tech Career Training Place
          </h1>
          <p style={{ fontSize: "16px", color: "#f9e8e8", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto 28px" }}>
            No fees. No conditions. Open across Nigeria. Just the training, support, and pathway you deserve.
          </p>

          <button
            onClick={scrollToForm}
            style={{
              background: "#ffffff",
              color: "#a81c1c",
              border: "none",
              borderRadius: "4px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, background 0.2s"
            }}
          >
            Apply Now
          </button>

          {/* BADGES */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "20px" }}>✓ Vetted Organisation</span>
            <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "20px" }}>★ Top-Ranked</span>
            <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "20px" }}>✓ Effective Organisation 2026</span>
            <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "20px" }}>GlobalGiving Certified</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px" }}>
        
        {/* COURSES SECTION */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Available Courses</h2>
            <p style={{ fontSize: "15px", color: "#666" }}>Three sponsored pathways currently open</p>
            <p style={{ fontSize: "13px", color: "#555", maxWidth: "780px", margin: "12px auto 0", lineHeight: 1.6, background: "#edf2f7", padding: "12px 18px", borderRadius: "6px" }}>
              Self-paced online, delivered by Betapersin, DIEF&apos;s sister commercial training partner, led by a CISSP and Microsoft Identity and Access Administrator (SC-300) certified instructor with fifteen years in identity and security.
            </p>
          </div>

          {/* COURSE CARDS GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            {/* Card 1 */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#2e7d32", background: "#e8f5e9", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>Now Open</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "8px" }}>Identity and Access Management (IAM)</h3>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, marginBottom: "16px" }}>
                  A complete foundation in IAM covering concepts, tools, and real-world application. Leads to employability in one of the fastest-growing areas of cybersecurity.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", fontSize: "13px", color: "#333", lineHeight: 1.8 }}>
                  <li>✓ Full curriculum access included</li>
                  <li>✓ Fortnightly live support sessions</li>
                  <li>✓ CV rewritten by hand</li>
                  <li>✓ Unlimited mock interviews until first job secured</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#888", textDecoration: "line-through" }}>Market value: over $1,300</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#a81c1c" }}>✓ Fully Funded by DIEF</div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#fff", border: "2px solid #a81c1c", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(168,28,28,0.08)", position: "relative" }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#2e7d32", background: "#e8f5e9", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>Now Open</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "8px" }}>Identity and Access Management (IAM) Engineering</h3>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, marginBottom: "16px" }}>
                  A hands-on build, not theory and portal clicks. You engineer a live identity estate in Microsoft Entra ID and Okta: the directory, authentication protocols, Conditional Access, privileged access, entitlements, and the automation layer that ties it together. By the capstone, these labs add up to a portfolio project you can show an employer.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", fontSize: "13px", color: "#333", lineHeight: 1.8 }}>
                  <li>✓ Full curriculum access included</li>
                  <li>✓ Fortnightly live support sessions</li>
                  <li>✓ CV rewritten by hand</li>
                  <li>✓ Unlimited mock interviews until first job secured</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#888", textDecoration: "line-through" }}>Market value: over $2,500</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#a81c1c" }}>✓ Fully Funded by DIEF</div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#2e7d32", background: "#e8f5e9", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>Now Open</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "8px" }}>Governance, Risk and Compliance (GRC)</h3>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, marginBottom: "16px" }}>
                  A structured GRC programme covering frameworks, risk assessment, and compliance operations. Prepares you for roles in risk management and organisational governance.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", fontSize: "13px", color: "#333", lineHeight: 1.8 }}>
                  <li>✓ Full curriculum access included</li>
                  <li>✓ Fortnightly live support sessions</li>
                  <li>✓ CV rewritten by hand</li>
                  <li>✓ Unlimited mock interviews until first job secured</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#888", textDecoration: "line-through" }}>Market value: over $1,300</div>
                <div style={{ fontSize: "15px", fontWeight 700, color: "#a81c1c" }}>✓ Fully Funded by DIEF</div>
              </div>
            </div>

            {/* Card 4 - Coming Soon */}
            <div style={{ background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0.85 }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#475569", background: "#e2e8f0", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>Coming Soon</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "8px", color: "#475569" }}>Full Stack Engineering</h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5, marginBottom: "16px" }}>
                  End-to-end web development. Applications will open once funding is secured for this track.
                </p>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b" }}>🔒 Applications not yet open</div>
              </div>
            </div>

          </div>
        </section>

        {/* WHAT EVERY STUDENT RECEIVES */}
        <section style={{ marginBottom: "64px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "36px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, textAlign: "center", marginBottom: "28px" }}>What Every Sponsored Student Receives</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📖</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>Full Course Access</h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Complete curriculum, no fees</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📅</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>Fortnightly Support</h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Live sessions with your instructor</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>✏️</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>CV Written By Hand</h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Not a template, your story</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🎯</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>Unlimited Mock Interviews</h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Until your first job is secured</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🤝</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>We Don&apos;t Fire and Forget</h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Support continues after training</p>
            </div>
          </div>
        </section>

        {/* APPLICATION FORM CONTAINER */}
        <section ref={formRef} style={{ background: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", maxWidth: "740px", margin: "0 auto" }}>
          <div style={{ padding: "36px 32px" }}>
            <h2 style={{ fontSize: "24px", color: "#1a1a1a", marginBottom: "8px", fontWeight: 700 }}>
              Application Form
            </h2>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.5, marginBottom: "28px" }}>
              Complete all sections carefully. We read every application personally. You will hear back within 14 days.
            </p>

            {isSubmitted ? (
              <div style={{ background: "#e6f4ea", border: "1px solid #b7e1cd", padding: "28px", borderRadius: "6px", textAlign: "center" }}>
                <h3 style={{ color: "#137333", margin: "0 0 8px 0" }}>Application Submitted!</h3>
                <p style={{ color: "#3c4043", margin: 0, fontSize: "14px", lineHeight: 1.6 }}>
                  Thank you for applying. We have received your application and sent a confirmation email. Our team will review your application personally and get back to you within 14 days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* SECTION 1: Personal Details */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px" }}>
                  Personal Details
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="firstName" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      First Name <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" required onChange={handleFieldChange} style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="lastName" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Last Name <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <input type="text" id="lastName" name="lastName" required onChange={handleFieldChange} style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="email" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Email Address <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <input type="email" id="email" name="email" required onChange={handleFieldChange} style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="phone" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Phone Number <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required onChange={handleFieldChange} style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="country" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Country of Residence <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <input type="text" id="country" name="country" defaultValue="Nigeria" required onChange={handleFieldChange} style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="city" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      City <span style={{ color: "#a81c1c" }}>*</span>
                    </label>
                    <select id="city" name="city" required onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
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
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px", marginTop: "34px" }}>
                  Course Selection
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="course" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Which course are you applying for? <span style={{ color: "#a81c1c" }}>*</span>
                  </label>
                  <select id="course" name="course" required onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select a course</option>
                    <option>Identity and Access Management (IAM)</option>
                    <option>Identity and Access Management (IAM) Engineering</option>
                    <option>Governance, Risk and Compliance (GRC)</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="digitalLevel" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How would you describe your current digital skills level? <span style={{ color: "#a81c1c" }}>*</span>
                  </label>
                  <select id="digitalLevel" name="digitalLevel" required onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Beginner: I use a phone and basic apps</option>
                    <option>Intermediate: I am comfortable with computers and the internet</option>
                    <option>Advanced: I have some technical background</option>
                  </select>
                </div>

                {/* SECTION 3: Your Background */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px", marginTop: "34px" }}>
                  Your Background
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="situation" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Tell us briefly about your current situation <span style={{ color: "#a81c1c" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      What is your life like right now? Are you employed, studying, or neither?
                    </span>
                  </label>
                  <textarea id="situation" name="situation" required placeholder="Tell us a little about where you are right now..." rows={4} onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="motivation" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Why do you want to train in this field? <span style={{ color: "#a81c1c" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      Tell us what this opportunity means to you. Be honest, there are no wrong answers.
                    </span>
                  </label>
                  <textarea id="motivation" name="motivation" required placeholder="What would this change for you and your family?" rows={4} onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="commitment" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How many hours per week can you dedicate to training?
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      We want to make sure you can complete the programme successfully.
                    </span>
                  </label>
                  <select id="commitment" name="commitment" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Less than 5 hours</option>
                    <option>5 to 10 hours</option>
                    <option>10 to 15 hours</option>
                    <option>More than 15 hours</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="laptop" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have access to a laptop or desktop computer? <span style={{ color: "#a81c1c" }}>*</span>
                  </label>
                  <select id="laptop" name="laptop" required onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Yes, I have my own laptop or desktop</option>
                    <option>Yes, I have shared access to a laptop or desktop</option>
                    <option>No, I do not currently have access to a laptop or desktop</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="internet" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have reliable internet access? <span style={{ color: "#a81c1c" }}>*</span>
                  </label>
                  <select id="internet" name="internet" required onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Yes, I have reliable home or office internet</option>
                    <option>Yes, I use mobile data and it is generally stable</option>
                    <option>Partial, my connection is sometimes unreliable</option>
                    <option>No, I do not currently have reliable access</option>
                  </select>
                </div>

                {/* SECTION 4: Consent and Permissions */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px", marginTop: "34px" }}>
                  Consent and Permissions
                </p>

                <div style={{ background: "#fffdf5", border: "1px solid #e8d5a3", borderRadius: "6px", padding: "22px 24px", margin: "8px 0 16px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b48312", marginBottom: "14px" }}>
                    📋 Please read and confirm each item below
                  </p>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_data"
                      name="consent_data"
                      checked={consentData}
                      onChange={(e) => {
                        setConsentData(e.target.checked);
                        handleFieldChange(e);
                      }}
                      required
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "#a81c1c", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_data" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "#771010", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of personal data for programme delivery <span style={{ color: "#a81c1c" }}>*</span>
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to store and use the information I have provided in this application for the purposes of assessing my application, contacting me about my place, and delivering the training programme.
                      <em style={{ fontStyle: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Required to process your application.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_gg"
                      name="consent_globalgiving"
                      onChange={handleFieldChange}
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "#a81c1c", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_gg" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "#771010", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of photo and data in GlobalGiving reports
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to use my name, photograph, and anonymised progress data in reports submitted to GlobalGiving as evidence of programme delivery and impact. This may include project reports visible to donors on the GlobalGiving platform.
                      <em style={{ fontStyle: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional, but helps us demonstrate impact to the donors who fund your place.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <input
                      type="checkbox"
                      id="consent_media"
                      name="consent_media"
                      onChange={handleFieldChange}
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "#a81c1c", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_media" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "#771010", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Use of story and image in fundraising and social media
                      </strong>
                      I give Direct Impact Empowerment Foundation permission to share my story and photograph on social media, the DIEF website, and in fundraising materials. DIEF will always ask for approval before using any specific content about me.
                      <em style={{ fontStyle: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional, your story helps us fund more places like yours.
                      </em>
                    </label>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input
                      type="checkbox"
                      id="consent_shoutout"
                      name="consent_shoutout"
                      onChange={handleFieldChange}
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "#a81c1c", cursor: "pointer" }}
                    />
                    <label htmlFor="consent_shoutout" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "#771010", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        Public celebration and shout-out
                      </strong>
                      I am happy for DIEF to publicly celebrate my progress and achievements on social media when milestones are reached, such as completing the course or securing employment.
                      <em style={{ fontStyle: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "3px" }}>
                        Optional, we love celebrating our students!
                      </em>
                    </label>
                  </div>

                  <div style={{ fontSize: "12px", color: "#666", background: "rgba(255,255,255,0.65)", borderLeft: "3px solid #b48312", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: "14px", lineHeight: 1.6, overflowWrap: "anywhere", wordBreak: "break-word" }}>
                    <strong>Your privacy matters to us.</strong> DIEF will never sell or share your personal data with third parties. You can withdraw any consent at any time by emailing <strong style={{ overflowWrap: "anywhere", wordBreak: "break-all" }}>digitaltraining@directimpactempowerment.org</strong>. Only the first consent item is required to process your application.
                  </div>
                </div>

                {/* SECTION 5: Declaration */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px", marginTop: "34px" }}>
                  Declaration
                </p>

                <div style={{ background: "#fdf2f2", border: "1px solid #e0cece", borderRadius: "6px", padding: "22px 24px", margin: "8px 0 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      checked={declaration}
                      onChange={(e) => {
                        setDeclaration(e.target.checked);
                        handleFieldChange(e);
                      }}
                      required
                      style={{ width: "17px", height: "17px", flexShrink: 0, marginTop: "3px", accentColor: "#a81c1c", cursor: "pointer" }}
                    />
                    <label htmlFor="declaration" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.55, cursor: "pointer" }}>
                      <strong style={{ color: "#771010", display: "block", marginBottom: "2px", fontSize: "13px", fontWeight: 600 }}>
                        I confirm that the information I have provided is accurate and truthful. <span style={{ color: "#a81c1c" }}>*</span>
                      </strong>
                      I understand that providing false information may result in my application being withdrawn. I commit to engaging fully with the programme if I am offered a funded place.
                    </label>
                  </div>
                </div>

                <div style={{ background: "#f0f4f8", border: "1px solid #c0d0e0", borderRadius: "6px", padding: "16px 20px", marginTop: "20px" }}>
                  <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: "#1a3a5c" }}>How we process applications:</strong> Every application is read personally by our team. We do not use automated screening. We prioritise applicants who demonstrate genuine need, commitment, and the potential to benefit fully from the training. You will receive a response within 14 days.
                  </p>
                </div>

                {showError && (
                  <div ref={errBoxRef} style={{ background: "#fff0f0", border: "1px solid #f0c0c0", borderRadius: "6px", padding: "12px 16px", fontSize: "13px", color: "#a81c1c", marginTop: "14px" }}>
                    Please confirm the required consent items before submitting.
                  </div>
                )}

                <div style={{ marginTop: "28px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? "#a55" : "#a81c1c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "14px 38px",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      letterSpacing: "0.02em",
                      transition: "background 0.2s",
                    }}
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit My Application"}
                  </button>
                  <p style={{ fontSize: "12px", color: "#666", marginTop: "9px" }}>
                    You will receive a confirmation email once your application is received.
                  </p>
                </div>

              </form>
            )}
          </div>
        </section>

      </main>

      {/* FOOTER & PARTNERS */}
      <footer style={{ background: "#ffffff", borderTop: "1px solid #e2e8f0", padding: "40px 24px", marginTop: "40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          
          <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#475569", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>
            Partner Organisation & Accreditations
          </h4>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
            <span style={{ fontSize: "12px", color: "#2e7d32", fontWeight: 700 }}>✓ Vetted</span>
            <span style={{ fontSize: "12px", color: "#2e7d32", fontWeight: 700 }}>✓ Effective</span>
            <span style={{ fontSize: "12px", color: "#2e7d32", fontWeight: 700 }}>★ Top-Ranked</span>
          </div>

          <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.65, maxWidth: "680px", margin: "0 auto" }}>
            This programme is part of DIEF&apos;s <strong>Dignity to Independence Programme (DIP)</strong>. Direct Impact Empowerment Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651), independently vetted and Top-Ranked by{" "}
            <Link
              href="https://www.globalgiving.org/projects/76936"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackGAEvent("outbound_link_click", {
                  destination: "GlobalGiving",
                  url: "https://www.globalgiving.org/projects/76936",
                })
              }
              style={{ color: "#a81c1c", textDecoration: "none", fontWeight: 600 }}
            >
              GlobalGiving
            </Link>.
          </p>
        </div>
      </footer>

    </div>
  );
}