"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  org: string;
  type: string;
  message: string;
};

type Partner = {
  color: string;
  type: string;
  title: string;
  desc: string;
};

export default function PartnershipPage() {
  const [form, setForm] = useState<FormState>({
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

  const colors = ["#7B1E1E", "#9B2E2E", "#B84040", "#D05050"];

  const dip = [
    { num: "01", title: "Crisis response", desc: "Emergency relief delivered directly." },
    { num: "02", title: "Stabilisation", desc: "Medical care and essentials secured." },
    { num: "03", title: "Economic restart", desc: "Capital and training tailored." },
    { num: "04", title: "Independence", desc: "Follow-up until self-sufficient." },
  ];

  const partners: Partner[] = [
    {
      color: "#1D9E75",
      type: "Grant makers",
      title: "Fund the model at scale",
      desc: "Your grant funds the full journey with reporting and documentation.",
    },
    {
      color: "#185FA5",
      type: "Corporate partners",
      title: "CSR with measurable impact",
      desc: "Structured impact across communities.",
    },
    {
      color: "#7B1E1E",
      type: "Individual donors",
      title: "Walk alongside someone",
      desc: "Support people from crisis to independence.",
    },
  ];

  const s: Record<string, any> = {
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
    },

    dipGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      margin: "40px 0 56px",
    },

    dipCard: {
      color: "#fff",
      padding: "32px 24px",
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

    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "20px",
      margin: "40px 0",
    },

    statCard: {
      background: "#faf5f0",
      borderRadius: "10px",
      padding: "24px 20px",
      textAlign: "center",
    },

    statNum: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#7B1E1E",
      fontFamily: "Georgia, serif",
    },

    statLabel: {
      fontSize: "13px",
      color: "#666",
      marginTop: "4px",
    },

    partnerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      margin: "32px 0 56px",
    },

    partnerCard: (color: string) => ({
      background: "#fff",
      border: `2px solid ${color}`,
      borderRadius: "12px",
      padding: "28px 24px",
    }),

    partnerTag: (color: string) => ({
      display: "inline-block",
      background: color + "20",
      color: color,
      fontSize: "11px",
      fontWeight: 600,
      padding: "4px 12px",
      borderRadius: "100px",
      marginBottom: "14px",
    }),

    partnerTitle: {
      fontSize: "17px",
      fontWeight: 600,
      marginBottom: "10px",
    },

    partnerDesc: {
      fontSize: "14px",
      color: "#555",
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
    },

    formSub: {
      fontSize: "15px",
      color: "#666",
      marginBottom: "32px",
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
      marginBottom: "6px",
    },

    input: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },

    select: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#fff",
    },

    textarea: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      minHeight: "120px",
    },

    btnRed: {
      background: "#7B1E1E",
      color: "#fff",
      border: "none",
      padding: "16px 40px",
      borderRadius: "100px",
      marginTop: "16px",
      cursor: "pointer",
    },

    successBox: {
      background: "#e8f5e9",
      padding: "32px",
      borderRadius: "12px",
      textAlign: "center",
    },
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Partner with Direct Impact</div>
        <h1 style={s.h1}>
          Help us reach further and walk longer alongside people others miss.
        </h1>
        <p style={s.heroP}>
          We move people from crisis to sustained independence through a structured model.
        </p>
      </div>

      <div style={s.section}>
        <h2 style={s.sectionTitle}>The Pathway</h2>

        <div style={s.dipGrid}>
          {dip.map((d, i) => (
            <div key={d.num} style={{ ...s.dipCard, background: colors[i] }}>
              <div style={s.dipNum}>{d.num}</div>
              <div style={s.dipTitle}>{d.title}</div>
              <div style={s.dipDesc}>{d.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={s.sectionTitle}>Ways to partner</h2>

        <div style={s.partnerGrid}>
          {partners.map((p) => (
            <div key={p.type} style={s.partnerCard(p.color)}>
              <div style={s.partnerTag(p.color)}>{p.type}</div>
              <div style={s.partnerTitle}>{p.title}</div>
              <div style={s.partnerDesc}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.formCard}>
          <h3 style={s.formTitle}>Get in touch</h3>
          <p style={s.formSub}>
            Tell us about your organisation.
          </p>

          {submitted ? (
            <div style={s.successBox}>
              <p>Thank you for reaching out.</p>
              <p>We will respond within 3 working days.</p>
            </div>
          ) : (
            <>
              <div style={s.formGrid}>
                <div>
                  <label style={s.label}>Name</label>
                  <input style={s.input} value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>

                <div>
                  <label style={s.label}>Email</label>
                  <input style={s.input} value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={s.label}>Organisation</label>
                <input style={s.input} value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })} />
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={s.label}>Type</label>
                <select style={s.select} value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option value="">Select</option>
                  <option>Grant funding</option>
                  <option>Corporate</option>
                  <option>Individual</option>
                </select>
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={s.label}>Message</label>
                <textarea style={s.textarea} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>

              <button style={s.btnRed} onClick={handleSubmit} disabled={sending}>
                {sending ? "Sending..." : "Send enquiry"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}