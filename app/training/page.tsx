"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentData, setConsentData] = useState(false);
  const [declaration, setDeclaration] = useState(false);
  const [showError, setShowError] = useState(false);
  const errBoxRef = useRef<HTMLDivElement | null>(null);

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

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // --- GOOGLE ANALYTICS 4 & IMPORTED GOOGLE ADS TRACKING ---
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "training_form_submitted", {
            event_category: "Form Submission",
            event_label: (formData.get("course") as string) || "General Application",
          });
        }

        setSubmitted(true);
      } else {
        alert("There was a problem submitting your application. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "var(--radius)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          {submitted ? (
            <div
              style={{
                background: "var(--green-light)",
                border: "1px solid #a0d0b0",
                borderRadius: "var(--radius)",
                padding: "36px 28px",
                textAlign: "center",
                margin: "34px",
              }}
            >
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

              <div className="fgrid">
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

              <div className="fgrid">
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

              <div className="fgrid">
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
                  <option>Identity and Access Management (IAM) Engineering</option>
                  <option>Governance, Risk and Compliance (GRC)</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                <label htmlFor="digitalLevel" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                  How would you describe your current digital skills level? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                </label>
                <select id="digitalLevel" name="digitalLevel" required className="fg-input">
                  <option value="">Select one</option>
                  <option>Beginner: I use a phone and basic apps</option>
                  <option>Intermediate: I am comfortable with computers and the internet</option>
                  <option>Advanced: I have some technical background</option>
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
                    Tell us what this opportunity means to you. Be honest, there are no wrong answers.
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
                  <option>Yes, I have my own laptop or desktop</option>
                  <option>Yes, I have shared access to a laptop or desktop</option>
                  <option>No, I do not currently have access to a laptop or desktop</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                <label htmlFor="internet" style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>
                  Do you have reliable internet access? <span style={{ color: "var(--crimson)", marginLeft: "2px" }}>*</span>
                </label>
                <select id="internet" name="internet" required className="fg-input">
                  <option value="">Select one</option>
                  <option>Yes, I have reliable home or office internet</option>
                  <option>Yes, I use mobile data and it is generally stable</option>
                  <option>Partial, my connection is sometimes unreliable</option>
                  <option>No, I do not currently have reliable access</option>
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
                      Optional, but helps us demonstrate impact to the donors who fund your place.
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
                      Optional, your story helps us fund more places like yours.
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
                    I am happy for DIEF to publicly celebrate my progress and achievements on social media when milestones are reached, such as completing the course or securing employment.
                    <em style={{ fontStyle: "normal", color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "3px" }}>
                      Optional, we love celebrating our students!
                    </em>
                  </label>
                </div>

                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "var(--muted)", background: "rgba(255,255,255,0.65)", borderLeft: "3px solid var(--gold)", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: "14px", lineHeight: 1.6, overflowWrap: "anywhere", wordBreak: "break-word" }}>
                  <strong>Your privacy matters to us.</strong> DIEF will never sell or share your personal data with third parties. You can withdraw any consent at any time by emailing <strong style={{ overflowWrap: "anywhere", wordBreak: "break-all" }}>digitaltraining@directimpactempowerment.org</strong>. Only the first consent item is required to process your application.
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
                  <strong style={{ color: "#1a3a5c" }}>How we process applications:</strong> Every application is read personally by our team. We do not use automated screening. We prioritise applicants who demonstrate genuine need, commitment, and the potential to benefit fully from the training. You will receive a response within 14 days.
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

      {/* FOOTER */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 52px", textAlign: "center" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>
          This programme is part of DIEF&apos;s <strong>Dignity to Independence Programme (DIP)</strong>. Direct Impact Empowerment Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651), independently vetted and Top-Ranked by{" "}
          <Link href="https://www.globalgiving.org/projects/76936" target="_blank" rel="noopener noreferrer" style={{ color: "var(--crimson)", textDecoration: "none" }}>
            GlobalGiving
          </Link>.
        </p>
      </div>
    </div>
  );
}