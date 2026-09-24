"use client";

import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

export default function ApplicationPage() {
  // State management for form and consents
  const [consentData, setConsentData] = useState(false);
  const [declaration, setDeclaration] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Ref for auto-scrolling to error box if validation fails
  const errBoxRef = useRef<HTMLDivElement | null>(null);

  // Safe helper function for Google Analytics event tracking
  const trackGAEvent = (eventName: string, eventParams: Record<string, unknown> = {}) => {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", eventName, eventParams);
    }
  };

  // Helper for tracking form input interactions
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    trackGAEvent("form_field_interaction", {
      field_name: name,
      field_value: type === "checkbox" ? checked : value,
    });
  };

  // Form submission handler
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track submission attempt
    trackGAEvent("form_submit_attempt", {
      form_id: "appForm",
      form_name: "Application Form",
    });

    // Validation check for mandatory consents
    if (!consentData || !declaration) {
      setShowError(true);
      trackGAEvent("form_submit_error", {
        form_id: "appForm",
        error_type: "missing_required_consent",
      });
      if (errBoxRef.current) {
        errBoxRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setShowError(false);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const courseSelected = formData.get("course");
      const citySelected = formData.get("city");
      const ggConsent = formData.get("consent_globalgiving") === "on";
      const mediaConsent = formData.get("consent_media") === "on";
      const shoutoutConsent = formData.get("consent_shoutout") === "on";

      // Submit data to your backend endpoint (e.g. Next.js API Route or FormSpree/SheetDB)
      /* 
      await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });
      */

      // Track successful submission & application properties
      trackGAEvent("form_submit_success", {
        form_id: "appForm",
        course_selected: courseSelected,
        city_selected: citySelected,
        consent_globalgiving: ggConsent,
        consent_media: mediaConsent,
        consent_shoutout: shoutoutConsent,
      });

      // Track conversion event for GA Conversions / Google Ads
      trackGAEvent("conversion", {
        event_category: "Application",
        event_label: courseSelected,
      });

      setSubmitted(true);
    } catch (err: unknown) {
      const errorObj = err as Error;
      trackGAEvent("form_submit_error", {
        form_id: "appForm",
        error_type: "api_submission_failure",
        error_message: errorObj?.message || "Unknown error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a1a1a", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* ------------------- HERO SECTION ------------------- */}
      <header style={{ background: "linear-gradient(135deg, #111e2e 0%, #1a3a5c 100%)", color: "#fff", padding: "60px 24px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e2b857", marginBottom: "12px" }}>
            Dignity to Independence Programme
          </p>
          <h1 style={{ fontSize: "32px", fontWeight: 700, lineHeight: 1.25, marginBottom: "16px" }}>
            Apply for a Fully Funded Tech Career Training Place
          </h1>
          <p style={{ fontSize: "16px", color: "#d0dce8", lineHeight: 1.6, marginBottom: "28px", maxWidth: "680px", margin: "0 auto 28px" }}>
            No fees. No conditions. Open across Nigeria. Just the training, support, and pathway you deserve.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", fontSize: "12px", color: "#e0e8f0" }}>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.15)" }}>
              ✓ Vetted Organisation
            </span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.15)", color: "#f3c863" }}>
              ★ Top-Ranked
            </span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.15)" }}>
              ✓ Effective Organisation 2026
            </span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.15)" }}>
              GlobalGiving Certified
            </span>
          </div>
        </div>
      </header>

      {/* ------------------- AVAILABLE COURSES SECTION ------------------- */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "50px 24px 30px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#111e2e", marginBottom: "8px" }}>Available Courses</h2>
          <p style={{ fontSize: "15px", color: "#555", marginBottom: "12px" }}>Three sponsored pathways currently open</p>
          <p style={{ fontSize: "13px", color: "#666", maxWidth: "760px", margin: "0 auto", lineHeight: 1.6 }}>
            Self-paced online, delivered by Betapersin, DIEF&apos;s sister commercial training partner, led by a CISSP and Microsoft Identity and Access Administrator (SC-300) certified instructor with fifteen years in identity and security.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
          
          {/* Course 1: IAM */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div>
              <span style={{ background: "#e6f4ea", color: "#137333", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                Now Open
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "10px", color: "#111e2e" }}>
                Identity and Access Management (IAM)
              </h3>
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
              <div style={{ fontSize: "12px", color: "#777", textDecoration: "line-through" }}>Market value: over $1,300</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#a81c1c", marginTop: "2px" }}>✓ Fully Funded by DIEF</div>
            </div>
          </div>

          {/* Course 2: IAM Engineering */}
          <div style={{ background: "#fff", border: "2px solid #a81c1c", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <div>
              <span style={{ background: "#e6f4ea", color: "#137333", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                Now Open
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "10px", color: "#111e2e" }}>
                Identity and Access Management (IAM) Engineering
              </h3>
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
              <div style={{ fontSize: "12px", color: "#777", textDecoration: "line-through" }}>Market value: over $2,500</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#a81c1c", marginTop: "2px" }}>✓ Fully Funded by DIEF</div>
            </div>
          </div>

          {/* Course 3: GRC */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div>
              <span style={{ background: "#e6f4ea", color: "#137333", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                Now Open
              </span>
              <h3 style={{ fontSize: "18px", fontWeight 700, marginTop: "12px", marginBottom: "10px", color: "#111e2e" }}>
                Governance, Risk and Compliance (GRC)
              </h3>
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
              <div style={{ fontSize: "12px", color: "#777", textDecoration: "line-through" }}>Market value: over $1,300</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#a81c1c", marginTop: "2px" }}>✓ Fully Funded by DIEF</div>
            </div>
          </div>

          {/* Course 4: Full Stack (Coming Soon) */}
          <div style={{ background: "#f1f5f9", border: "1px dashed #cbd5e1", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0.85 }}>
            <div>
              <span style={{ background: "#fef3c7", color: "#92400e", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                Coming Soon
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "12px", marginBottom: "10px", color: "#475569" }}>
                Full Stack Engineering
              </h3>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5, marginBottom: "16px" }}>
                End-to-end web development. Applications will open once funding is secured for this track.
              </p>
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b" }}>
              🔒 Applications not yet open
            </div>
          </div>

        </div>

        {/* ------------------- WHAT EVERY SPONSORED STUDENT RECEIVES ------------------- */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "32px 24px", marginBottom: "50px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 700, textAlign: "center", marginBottom: "28px", color: "#111e2e" }}>
            What every sponsored student receives
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📖</div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 4px 0" }}>Full Course Access</h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Complete curriculum, no fees</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📅</div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 4px 0" }}>Fortnightly Support</h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Live sessions with your instructor</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>✏️</div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 4px 0" }}>CV Written By Hand</h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Not a template, your story</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🎯</div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 4px 0" }}>Unlimited Mock Interviews</h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Until your first job is secured</p>
            </div>
            <div>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🤝</div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 4px 0" }}>We Don&apos;t Fire and Forget</h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Support continues after training</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- FORM CONTAINER ------------------- */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <div>
            {submitted ? (
              <div style={{ background: "#e6f4ea", border: "1px solid #a0d0b0", borderRadius: "8px", padding: "36px 28px", textAlign: "center", margin: "34px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "normal", color: "#137333", marginBottom: "8px" }}>
                  Application received
                </h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#555" }}>
                  Thank you for applying. We have received your application and will be in touch within 14 days. We read every application personally.
                </p>
              </div>
            ) : (
              <form id="appForm" onSubmit={handleFormSubmit} style={{ padding: "34px" }}>
                {/* SECTION 1: Personal Details */}
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a81c1c", paddingBottom: "8px", borderBottom: "2px solid #f2d6d6", marginBottom: "20px", marginTop: 0 }}>
                  Personal Details
                </p>

                <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="firstName" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      First Name <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Your first name" className="fg-input" style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="lastName" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Last Name <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Your last name" className="fg-input" style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                  </div>
                </div>

                <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="email" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Email Address <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" className="fg-input" style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="phone" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Phone Number <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required placeholder="Include your country code e.g. +234" className="fg-input" style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                  </div>
                </div>

                <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="country" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      Country of Residence <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <input type="text" id="country" name="country" defaultValue="Nigeria" readOnly className="fg-input" style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", backgroundColor: "#f0f0f0", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <label htmlFor="city" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                      City <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    </label>
                    <select id="city" name="city" required className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
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
                    Which course are you applying for? <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="course" name="course" required className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select a course</option>
                    <option>Identity and Access Management (IAM)</option>
                    <option>Identity and Access Management (IAM) Engineering</option>
                    <option>Governance, Risk and Compliance (GRC)</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="digitalLevel" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How would you describe your current digital skills level? <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="digitalLevel" name="digitalLevel" required className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
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
                    Tell us briefly about your current situation <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      What is your life like right now? Are you employed, studying, or neither?
                    </span>
                  </label>
                  <textarea id="situation" name="situation" required placeholder="Tell us a little about where you are right now..." className="fg-input" rows={4} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="motivation" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Why do you want to train in this field? <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      Tell us what this opportunity means to you. Be honest, there are no wrong answers.
                    </span>
                  </label>
                  <textarea id="motivation" name="motivation" required placeholder="What would this change for you and your family?" className="fg-input" rows={4} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="commitment" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    How many hours per week can you dedicate to training?
                    <span style={{ fontWeight: "normal", color: "#666", fontSize: "12px", display: "block", marginTop: "2px" }}>
                      We want to make sure you can complete the programme successfully.
                    </span>
                  </label>
                  <select id="commitment" name="commitment" className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Less than 5 hours</option>
                    <option>5 to 10 hours</option>
                    <option>10 to 15 hours</option>
                    <option>More than 15 hours</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="laptop" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have access to a laptop or desktop computer? <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="laptop" name="laptop" required className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
                    <option value="">Select one</option>
                    <option>Yes, I have my own laptop or desktop</option>
                    <option>Yes, I have shared access to a laptop or desktop</option>
                    <option>No, I do not currently have access to a laptop or desktop</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label htmlFor="internet" style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                    Do you have reliable internet access? <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
                  </label>
                  <select id="internet" name="internet" required className="fg-input" onChange={handleFieldChange} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", boxSizing: "border-box" }}>
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
                        Use of personal data for programme delivery <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
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
                        I confirm that the information I have provided is accurate and truthful. <span style={{ color: "#a81c1c", marginLeft: "2px" }}>*</span>
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
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 52px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.65 }}>
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
            style={{ color: "#a81c1c", textDecoration: "none" }}
          >
            GlobalGiving
          </Link>.
        </p>
      </footer>
    </div>
  );
}