"use client";
import { useState } from "react";

export default function TrainingSection() {
  const [form, setForm] = useState({ name: '', email: '', course: '', background: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch('https://formspree.io/f/mojpzkrb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSending(false);
    }
  };

  const s = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#1a1a1a', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    h1: { fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif', marginBottom: '20px' },
    heroP: { fontSize: '17px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 },
    freeTag: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontSize: '13px', fontWeight: 600, padding: '8px 20px', borderRadius: '100px', marginTop: '24px' },
    section: { maxWidth: '880px', margin: '0 auto', padding: '64px 24px' },
    sectionTitle: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '12px', color: '#1a1a1a' },
    sectionSub: { fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px' },
    courseGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', margin: '32px 0 56px' },
    courseCard: (color) => ({ background: '#fff', borderTop: `4px solid ${color}`, borderRadius: '0 0 12px 12px', border: '1px solid #e5e5e5', borderTop: `4px solid ${color}`, padding: '28px 24px' }),
    courseTag: (color) => ({ display: 'inline-block', background: color + '15', color: color, fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 12px', borderRadius: '100px', marginBottom: '12px' }),
    courseTitle: { fontSize: '17px', fontWeight: 600, color: '#1a1a1a', marginBottom: '10px' },
    courseDesc: { fontSize: '14px', color: '#555', lineHeight: 1.65, marginBottom: '16px' },
    noCoding: { display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px' },
    storyBlock: { background: '#1a1a1a', color: '#fff', borderRadius: '12px', padding: '48px 40px', margin: '48px 0' },
    storyQ: { fontSize: '22px', fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px', color: 'rgba(255,255,255,0.9)' },
    storyP: { fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 },
    storyBtn: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginTop: '24px' },
    formCard: { background: '#f9f9f9', borderRadius: '12px', padding: '48px 40px', marginTop: '48px' },
    formTitle: { fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '8px' },
    formSub: { fontSize: '15px', color: '#666', marginBottom: '32px', lineHeight: 1.6 },
    label: { display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px' },
    input: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none', marginBottom: '16px' },
    select: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none', background: '#fff', marginBottom: '16px' },
    textarea: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Arial, sans-serif', outline: 'none', minHeight: '100px', resize: 'vertical', marginBottom: '16px' },
    btnRed: { background: '#7B1E1E', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '100px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' },
    successBox: { background: '#e8f5e9', borderRadius: '12px', padding: '32px', textAlign: 'center' },
  };

  const courses = [
    { color: '#185FA5', type: 'IAM', title: 'Identity and Access Management', desc: 'Learn how organisations control who has access to what. No coding required. High demand. Beginner friendly.', noCoding: true },
    { color: '#1D9E75', type: 'GRC', title: 'Governance, Risk and Compliance', desc: 'Understand how organisations manage risk and meet regulatory requirements. A gateway into enterprise cybersecurity.', noCoding: true },
    { color: '#7B1E1E', type: 'Engineering', title: 'Software Engineering', desc: 'Build real technical skills from the ground up. For those ready to go deeper into the technical side of cybersecurity.' },
    { color: '#533AB7', type: 'Full Stack', title: 'Full Stack Engineering', desc: 'Frontend and backend development combined. Build complete applications and open the door to a full engineering career.' },
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Free technology training</div>
        <h1 style={s.h1}>A digital skill can change the entire trajectory of a life.</h1>
        <p style={s.heroP}>Direct Impact offers free cybersecurity and technology courses through betapersin.com. No card. No catch. No coding required to get started.</p>
        <a href="https://betapersin.com" style={s.freeTag}>Start with Module 1 free at betapersin.com</a>
      </div>

      <div style={s.section}>
        <h2 style={s.sectionTitle}>Choose your pathway</h2>
        <p style={s.sectionSub}>Cybersecurity is a mile wide. Not every path requires coding. Here are the four pathways available to you right now.</p>

        <div style={s.courseGrid}>
          {courses.map(c => (
            <div key={c.type} style={s.courseCard(c.color)}>
              <div style={s.courseTag(c.color)}>{c.type}</div>
              <div style={s.courseTitle}>{c.title}</div>
              <div style={s.courseDesc}>{c.desc}</div>
              {c.noCoding && <div style={s.noCoding}>No coding required</div>}
            </div>
          ))}
        </div>

        <div style={s.storyBlock}>
          <div style={s.storyQ}>&quot;I started as a cleaner. Today I hold a CISSP qualification, one of the most respected certifications in global cybersecurity.&quot;</div>
          <p style={s.storyP}>The founder of Direct Impact built a career in technology from scratch. The training at betapersin.com is built on the same belief: that where you start does not determine where you end up. You just need the right path and someone to show it to you.</p>
          <a href="https://betapersin.com" style={s.storyBtn}>Go to betapersin.com</a>
        </div>

        <div style={s.formCard}>
          <h3 style={s.formTitle}>Apply for a funded place</h3>
          <p style={s.formSub}>Direct Impact has a limited number of fully funded training places available. If cost is a barrier, apply here and we will be in touch.</p>
          {submitted ? (
            <div style={s.successBox}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#2e7d32', marginBottom: '8px' }}>Application received.</p>
              <p style={{ fontSize: '15px', color: '#444' }}>We will review your application and be in touch within five working days.</p>
            </div>
          ) : (
            <div>
              <label style={s.label}>Full name</label>
              <input style={s.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              <label style={s.label}>Email address</label>
              <input style={s.input} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
              <label style={s.label}>Which course interests you?</label>
              <select style={s.select} value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                <option value="">Select a course</option>
                <option>Identity and Access Management (IAM)</option>
                <option>Governance Risk and Compliance (GRC)</option>
                <option>Software Engineering</option>
                <option>Full Stack Engineering</option>
              </select>
              <label style={s.label}>Tell us briefly about your background</label>
              <textarea style={s.textarea} value={form.background} onChange={e => setForm({ ...form, background: e.target.value })} placeholder=&quot;A few sentences about where you are now and why you want to learn&quot; />
              <button style={s.btnRed} onClick={handleSubmit} disabled={sending}>{sending ? 'Sending...' : 'Submit application'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

