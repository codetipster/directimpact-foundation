"use client";
import { useState } from "react";
import Image from 'next/image';

export default function BecomeAVolunteer() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', skills: '', motivation: '', availability: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch('YOUR_FORMSPREE_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const s: Record<string, React.CSSProperties> = {
    page: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      color: '#1a1a1a',
      maxWidth: '860px',
      margin: '0 auto',
      padding: '0 24px 80px',
    },
    hero: {
      background: '#7B1E1E',
      borderRadius: '0 0 16px 16px',
      padding: '64px 48px',
      color: '#fff',
      marginBottom: '64px',
      textAlign: 'center' as const,
    },
    heroTag: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      padding: '6px 16px',
      borderRadius: '100px',
      marginBottom: '20px',
    },
    heroH1: {
      fontSize: '38px',
      fontWeight: 700,
      margin: '0 0 20px',
      lineHeight: 1.3,
    },
    heroP: {
      fontSize: '17px',
      lineHeight: 1.8,
      color: '#f0dada',
      maxWidth: '580px',
      margin: '0 auto',
    },
    teamPhoto: {
	  position: 'relative',
	  overflow: 'hidden',
      width: '100%',
      height: '380px',
      background: '#f5eeee',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '64px',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    placeholderText: {
      fontSize: '14px',
      color: '#a07070',
      fontStyle: 'italic' as const,
    },
    sectionLabel: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '12px',
    },
    sectionH2: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#1a1a1a',
      margin: '0 0 16px',
    },
    sectionP: {
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#444',
      marginBottom: '16px',
    },
    standout: {
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#2a2a2a',
      marginBottom: '16px',
      fontWeight: 600,
    },
    cardsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      margin: '32px 0 64px',
    },
    card: {
      background: '#fff',
      border: '1px solid #e4e4e4',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    },
    cardIcon: {
      fontSize: '28px',
      marginBottom: '12px',
    },
    cardTitle: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '8px',
    },
    cardDesc: {
      fontSize: '14px',
      color: '#666',
      lineHeight: 1.6,
    },
    formCard: {
      background: '#f9f9f9',
      borderRadius: '12px',
      padding: '48px 40px',
    },
    formTitle: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '8px',
    },
    formSub: {
      fontSize: '15px',
      color: '#666',
      marginBottom: '32px',
      lineHeight: 1.6,
    },
    label: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: '#444',
      marginBottom: '6px',
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '15px',
      fontFamily: 'Arial, sans-serif',
      outline: 'none',
      marginBottom: '16px',
      boxSizing: 'border-box' as const,
    },
    select: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '15px',
      fontFamily: 'Arial, sans-serif',
      outline: 'none',
      background: '#fff',
      marginBottom: '16px',
      boxSizing: 'border-box' as const,
    },
    textarea: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '15px',
      fontFamily: 'Arial, sans-serif',
      outline: 'none',
      minHeight: '100px',
      resize: 'vertical' as const,
      marginBottom: '16px',
      boxSizing: 'border-box' as const,
    },
    btnRed: {
      background: '#7B1E1E',
      color: '#fff',
      border: 'none',
      padding: '16px 40px',
      borderRadius: '100px',
      fontSize: '15px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    successBox: {
      background: '#e8f5e9',
      borderRadius: '12px',
      padding: '32px',
      textAlign: 'center' as const,
    },
  };

  const roles = [
    { icon: '🏥', title: 'Healthcare', desc: 'Doctors, nurses, and health workers supporting our beneficiaries and hospital partnership.' },
    { icon: '📚', title: 'Education and training', desc: 'Trainers and teachers who can support our skills and vocational programmes.' },
    { icon: '💻', title: 'Technology', desc: 'Developers, designers, and digital professionals helping us grow our reach.' },
    { icon: '📣', title: 'Communications', desc: 'Writers, social media managers, and storytellers helping us share our work.' },
    { icon: '💰', title: 'Fundraising', desc: 'People who can help us identify and secure funding to grow the programme.' },
    { icon: '🤝', title: 'Community outreach', desc: 'Ground-level volunteers in Nigeria supporting our team with direct community work.' },
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.heroTag}>Volunteering</div>
        <h1 style={s.heroH1}>Join the DIEF Family</h1>
        <p style={s.heroP}>
          Volunteering with DIEF is not about showing up once and moving on. It is about
          walking alongside people who are rebuilding their lives, and being part of
          something that takes that responsibility seriously.
        </p>
      </div>

      <div style={s.teamPhoto}>
        <Image
			src="/team-img.jpeg"
			alt="team-img"
            fill
			className="object-cover"
		  />
      </div>

      <div style={{ marginBottom: '64px' }}>
        <div style={s.sectionLabel}>Who we are looking for</div>
        <h2 style={s.sectionH2}>People who show up consistently.</h2>
        <p style={s.sectionP}>
          We are a small, committed team working across Switzerland and Nigeria. Whether
          you are based in Nigeria and want to support on the ground, or you are in the
          diaspora and want to contribute your skills remotely, there is a place for you here.
        </p>
        <p style={s.sectionP}>
          Skills in healthcare, education, social work, administration, fundraising,
          communications, or technology are always welcome. But more than anything, we
          are looking for people who show up consistently.
        </p>

        <div style={s.cardsRow}>
          {roles.map(({ icon, title, desc }) => (
            <div key={title} style={s.card}>
              <div style={s.cardIcon}>{icon}</div>
              <div style={s.cardTitle}>{title}</div>
              <div style={s.cardDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.formCard}>
        {submitted ? (
          <div style={s.successBox}>
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Thank you for reaching out.</h3>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7 }}>
              We review every application personally and will be in touch with you soon.
            </p>
          </div>
        ) : (
          <>
            <div style={s.formTitle}>Tell us about yourself</div>
            <div style={s.formSub}>
              Fill in the form below and we will review your application and get back
              to you personally.
            </div>

            <label style={s.label}>Full name</label>
            <input style={s.input} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />

            <label style={s.label}>Email address</label>
            <input style={s.input} name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />

            <label style={s.label}>Phone number</label>
            <input style={s.input} name="phone" value={form.phone} onChange={handleChange} placeholder="+234 or +41..." />

            <label style={s.label}>Where are you based?</label>
            <input style={s.input} name="location" value={form.location} onChange={handleChange} placeholder="City and country" />

            <label style={s.label}>What skills or experience can you bring?</label>
            <textarea style={s.textarea} name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. nursing, teaching, social media, fundraising, software development..." />

            <label style={s.label}>How much time can you offer?</label>
            <select style={s.select} name="availability" value={form.availability} onChange={handleChange}>
              <option value="">Select availability</option>
              <option value="A few hours per week">A few hours per week</option>
              <option value="One day per week">One day per week</option>
              <option value="Part time">Part time</option>
              <option value="Full time">Full time</option>
              <option value="Project basis only">Project basis only</option>
            </select>

            <label style={s.label}>Why do you want to volunteer with DIEF?</label>
            <textarea style={s.textarea} name="motivation" value={form.motivation} onChange={handleChange} placeholder="Tell us what draws you to this work" />

            <button style={s.btnRed} onClick={handleSubmit} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit my application'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
