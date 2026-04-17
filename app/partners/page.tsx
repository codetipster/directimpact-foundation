"use client";
import { useState } from "react";
import type { CSSProperties } from "react";

export default function PartnershipPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch('https://formspree.io/f/xwvwjrzk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSending(false);
    }
  };

  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    h1: { fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif', marginBottom: '20px' },
    heroP: { fontSize: '17px', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 },
    section: { maxWidth: '880px', margin: '0 auto', padding: '64px 24px' },
    sectionTitle: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '12px', color: '#1a1a1a' },
    sectionSub: { fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px' },
    dipGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0', margin: '40px 0 56px' },
    //dipCard: (i: number) => ({ background: ['#7B1E1E', '#9B2E2E', '#B84040', '#D05050'][i], color: '#fff', padding: '32px 24px', position: 'relative' }),
    dipNum: { fontSize: '40px', fontWeight: 700, opacity: 0.3, fontFamily: 'Georgia, serif', lineHeight: 1 },
    dipTitle: { fontSize: '16px', fontWeight: 600, margin: '8px 0 10px', lineHeight: 1.3 },
    dipDesc: { fontSize: '13px', opacity: 0.85, lineHeight: 1.6 },
    statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', margin: '40px 0' },
    statCard: { background: '#faf5f0', borderRadius: '10px', padding: '24px 20px', textAlign: 'center' },
    statNum: { fontSize: '32px', fontWeight: 700, color: '#7B1E1E', fontFamily: 'Georgia, serif' },
    statLabel: { fontSize: '13px', color: '#666', marginTop: '4px', lineHeight: 1.4 },
    partnerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', margin: '32px 0 56px' },
    //partnerCard: (color) => ({ background: '#fff', border: `2px solid ${color}`, borderRadius: '12px', padding: '28px 24px' }),
    //partnerTag: (color) => ({ display: 'inline-block', background: color + '20', color: color, fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 12px', borderRadius: '100px', marginBottom: '14px' }),
    partnerTitle: { fontSize: '17px', fontWeight: 600, marginBottom: '10px', color: '#1a1a1a' },
    partnerDesc: { fontSize: '14px', color: '#555', lineHeight: 1.65 },
    pullquote: { background: '#faf5f0', borderLeft: '4px solid #7B1E1E', borderRadius: '0 12px 12px 0', padding: '32px 40px', margin: '48px 0', fontFamily: 'Georgia, serif', fontSize: '20px', lineHeight: 1.65, color: '#2a2a2a', fontStyle: 'italic' },
    formCard: { background: '#f9f9f9', borderRadius: '12px', padding: '48px 40px', marginTop: '48px' },
    formTitle: { fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '8px' },
    formSub: { fontSize: '15px', color: '#666', marginBottom: '32px', lineHeight: 1.6 },
    formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
    label: { display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px' },
    input: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none' },
    select: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none', background: '#fff' },
    textarea: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none', minHeight: '120px', resize: 'vertical' },
    btnRed: { background: '#7B1E1E', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '100px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginTop: '16px' },
    successBox: { background: '#e8f5e9', borderRadius: '12px', padding: '32px', textAlign: 'center' },
  };


  const dip = [
    { num: '01', title: 'Crisis response', desc: 'Emergency relief. Food, water, and immediate support delivered directly.' },
    { num: '02', title: 'Stabilisation', desc: 'Medical care, mobility aids, and basic needs secured before anything else.' },
    { num: '03', title: 'Economic restart', desc: 'Seed capital, equipment, and vocational training tailored to each person.' },
    { num: '04', title: 'Sustained independence', desc: 'Regular follow-up visits, restocking, and cash flow support until self-sufficient.' },
  ];

  const partners = [
    { color: '#1D9E75', type: 'Grant makers', title: 'Fund the model at scale', desc: 'Your grant funds the full Dignity to Independence journey for multiple beneficiaries. We provide full documentation, video evidence, and impact reporting.' },
    { color: '#185FA5', type: 'Corporate partners', title: 'CSR with measurable impact', desc: 'Partner with us to fulfil your social responsibility commitments with documented, community-level outcomes across Nigeria.' },
    { color: '#7B1E1E', type: 'Individual donors', title: 'Walk alongside someone', desc: '$200 covers one complete journey from crisis to independence. $70 covers emergency relief. Every amount is tracked and reported.' },
  ];
  
  const getDipCard = (i: number): CSSProperties => ({
    background: ["#7B1E1E", "#9B2E2E", "#B84040", "#D05050"][i],
    color: "#fff",
    padding: "32px 24px",
    position: "relative",
  });

  const getPartnerCard = (color: string): CSSProperties => ({
    background: "#fff",
    border: `2px solid ${color}`,
    borderRadius: "12px",
    padding: "28px 24px",
  });

  const getPartnerTag = (color: string): CSSProperties => ({
    display: "inline-block",
    background: color + "20",
    color,
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "4px 12px",
    borderRadius: "100px",
    marginBottom: "14px",
  });

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Partner with Direct Impact</div>
        <h1 style={s.h1}>Help us reach further and walk longer alongside the people every other system has missed.</h1>
        <p style={s.heroP}>Direct Impact Empowerment Foundation is registered in Switzerland and Nigeria. We work through a four-stage model that takes people from crisis all the way to sustained independence.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.sectionTitle}>The Dignity to Independence Pathway</h2>
        <p style={s.sectionSub}>Most organisations choose between emergency relief and long-term development. We refuse that choice. Our four-stage model follows each person from the moment of crisis to a life they have built for themselves.</p>

        <div style={s.dipGrid}>
          {dip.map((d, i) => (
            <div key={d.num} style={getDipCard(i)}>
              <div style={s.dipNum}>{d.num}</div>
              <div style={s.dipTitle}>{d.title}</div>
              <div style={s.dipDesc}>{d.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={s.sectionTitle}>The numbers behind the work</h2>
        <div style={s.statsRow}>
          {[['300+', 'People reached'], ['$200', 'Cost per full journey'], ['$70', 'Emergency relief package'], ['4', 'Featured video journeys'], ['2', 'Countries registered']].map(([n, l]) => (
            <div key={l} style={s.statCard}>
              <div style={s.statNum}>{n}</div>
              <div style={s.statLabel}>{l}</div>
            </div>
          ))}
        </div>
		
		<p style={{ fontSize: '14px', color: '#888', fontStyle: 'italic', textAlign: 'center', marginTop: '-24px', marginBottom: '48px' }}>
          Every beneficiary journey is recorded internally. These four represent the stories we have chosen to share publicly in full.
        </p>

        <div style={s.pullquote}>
          &quot;We found an elderly man who had lost his kneecap in an accident. We gave him emergency cash to survive. He used it to buy coal to resell. When we heard that, we came back with three sacks of coal and the capital to trade properly. That is what we mean when we say we do not give people charity. We give them the conditions to show us who they already are.&quot;
        </div>

        <h2 style={s.sectionTitle}>Ways to partner with us</h2>
        <p style={s.sectionSub}>Whether you are a grant maker, a corporate with CSR commitments, or an individual donor, there is a meaningful way to be part of this work.</p>

        <div style={s.partnerGrid}>
          {partners.map((p) => (
            <div key={p.type} style={getPartnerCard(p.color)}>
              <div style={getPartnerTag(p.color)}>{p.type}</div>
              <div style={s.partnerTitle}>{p.title}</div>
              <div style={s.partnerDesc}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.formCard}>
          <h3 style={s.formTitle}>Get in touch</h3>
          <p style={s.formSub}>Tell us about your organisation and how you would like to partner. We will respond within three working days.</p>

          {submitted ? (
            <div style={s.successBox}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#2e7d32', marginBottom: '8px' }}>Thank you for reaching out.</p>
              <p style={{ fontSize: '15px', color: '#444' }}>We will be in touch within three working days.</p>
            </div>
          ) : (
            <div>
              <div style={s.formGrid}>
                <div>
                  <label style={s.label}>Full name</label>
                  <input style={s.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label style={s.label}>Email address</label>
                  <input style={s.input} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={s.label}>Organisation</label>
                <input style={s.input} value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="Your organisation name" />
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={s.label}>Type of partnership</label>
                <select style={s.select} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                  <option value="">Select one</option>
                  <option>Grant funding</option>
                  <option>Corporate partnership</option>
                  <option>Individual donation</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={s.label}>Message</label>
                <textarea style={s.textarea} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your interest in partnering with Direct Impact" />
              </div>
              <button style={s.btnRed} onClick={handleSubmit} disabled={sending}>
                {sending ? 'Sending...' : 'Send enquiry'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
