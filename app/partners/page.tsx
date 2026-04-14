"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function PartnershipPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    type: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/xwvwjrzk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSending(false);
    }
  };

  const s: Record<string, CSSProperties> = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#fff",
      color: "#1a1a1a",
      margin: 0,
      padding: 0,
    },
    hero: {
      background: "#7B1E1E",
      color: "#fff",
      padding: "72px 24px 56px",
      textAlign: "center",
    },
    tag: {
      display: "inline-block",
      background: "rgba(255,255,255,0.15)",
      color: "#fff",
      fontSize: "12px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "6px 16px",
      borderRadius: "100px",
      marginBottom: "20px",
    },
    h1: {
      fontSize: "clamp(26px, 4vw, 44px)",
      fontWeight: 400,
      lineHeight: 1.2,
      maxWidth: "680px",
      margin: "0 auto 20px",
      fontFamily: "Georgia, serif",
    },
    heroP: {
      fontSize: "17px",
      color: "rgba(255,255,255,0.85)",
      maxWidth: "560px",
      margin: "0 auto",
      lineHeight: 1.75,
    },
    section: {
      maxWidth: "880px",
      margin: "0 auto",
      padding: "64px 24px",
    },
    sectionTitle: {
      fontSize: "26px",
      fontWeight: 400,
      fontFamily: "Georgia, serif",
      marginBottom: "12px",
    },
    sectionSub: {
      fontSize: "16px",
      color: "#555",
      lineHeight: 1.7,
      marginBottom: "40px",
      maxWidth: "620px",
    },
    dipGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      margin: "40px 0 56px",
    },
    dipCard: {
      color: "#fff",
      padding: "32px 24px",
      position: "relative",
    },
    dipNum: {
      fontSize: "40px",
      fontWeight: 700,
      opacity: 0.3,
      fontFamily: "Georgia, serif",
    },
    dipTitle: {
      fontSize: "16px",
      fontWeight: 600,
      margin: "8px 0 10px",
    },
    dipDesc: {
      fontSize: "13px",
      opacity: 0.85,
      lineHeight: 1.6,
    },
    formCard: {
      background: "#f9f9f9",
      borderRadius: "12px",
      padding: "48px 40px",
      marginTop: "48px",
    },
    formTitle: {
      fontSize: "22px",
      fontWeight: 400,
      fontFamily: "Georgia, serif",
      marginBottom: "8px",
    },
    formSub: {
      fontSize: "15px",
      color: "#666",
      marginBottom: "32px",
      lineHeight: 1.6,
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: 600,
      color: "#444",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
    },
    select: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      background: "#fff",
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      minHeight: "120px",
      fontSize: "15px",
    },
    btnRed: {
      background: "#7B1E1E",
      color: "#fff",
      border: "none",
      padding: "16px 40px",
      borderRadius: "100px",
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "16px",
    },
    successBox: {
      background: "#e8f5e9",
      borderRadius: "12px",
      padding: "32px",
      textAlign: "center",
    },
  };

  const colors = ["#7B1E1E", "#9B2E2E", "#B84040", "#D05050"];

  const dip = [
    { num: "01", title: "Crisis response", desc: "Emergency relief delivered directly." },
    { num: "02", title: "Stabilisation", desc: "Medical care and essentials secured." },
    { num: "03", title: "Economic restart", desc: "Capital and training tailored." },
    { num: "04", title: "Independence", desc: "Follow-up until self-sufficient." },
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Partner with Direct Impact</div>
        <h1 style={s.h1}>Help us reach further</h1>
        <p style={s.heroP}>We move people from crisis to independence.</p>
      </div>

      <div style={s.section}>
        <div style={s.dipGrid}>
          {dip.map((d, i) => (
            <div key={d.num} style={{ ...s.dipCard, background: colors[i] }}>
              <div style={s.dipNum}>{d.num}</div>
              <div style={s.dipTitle}>{d.title}</div>
              <div style={s.dipDesc}>{d.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.formCard}>
          <h3 style={s.formTitle}>Get in touch</h3>
          <p style={s.formSub}>
            Tell us about your organisation and how you would like to partner.
          </p>

          {submitted ? (
            <div style={s.successBox}>
              <p>Thank you for reaching out.</p>
              <p>We will be in touch within three working days.</p>
            </div>
          ) : (
            <>
              <div style={s.formGrid}>
                <div>
                  <label style={s.label}>Full name</label>
                  <input
                    style={s.input}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label style={s.label}>Email address</label>
                  <input
                    style={s.input}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div style={{ marginTop: "16px" }}>
                <label style={s.label}>Organisation</label>
                <input
                  style={s.input}
                  value={form.org}
                  onChange={(e) =>
                    setForm({ ...form, org: e.target.value })
                  }
                />
              </div>

              <div style={{ marginTop: "16px" }}>
                <label style={s.label}>Type of partnership</label>
                <select
                  style={s.select}
                  value={form.type}
                  onChange={(e) =>
                    setForm({ ...form, type: e.target.value })
                  }
                >
                  <option value="">Select one</option>
                  <option value="Grant funding">Grant funding</option>
                  <option value="Corporate partnership">
                    Corporate partnership
                  </option>
                  <option value="Individual donation">
                    Individual donation
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ marginTop: "16px" }}>
                <label style={s.label}>Message</label>
                <textarea
                  style={s.textarea}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <button
                style={s.btnRed}
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send enquiry"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}