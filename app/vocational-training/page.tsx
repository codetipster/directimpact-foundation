"use client";
import { useState } from "react";
import Image from 'next/image';

export default function VocationalTraining() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', age: '', motivation: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.location.trim()) newErrors.location = "State / location is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    if (!form.motivation.trim()) newErrors.motivation = "Motivation statement is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mvzypywn', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Formspree validation error:", errorData);
        alert('Formspree rejected the application.');
      }
    } catch (error) {
      console.error("Network connectivity crash:", error);
      alert('Something went wrong. Please check your network connection.');
    }
    setLoading(false);
  };

  const s: Record<string, React.CSSProperties> = {
    page: { fontFamily: "'Segoe UI', Arial, sans-serif", color: '#1a1a1a', maxWidth: '860px', margin: '0 auto', padding: '0 24px 80px' },
    hero: { background: '#7B1E1E', borderRadius: '0 0 16px 16px', padding: '64px 48px', color: '#fff', marginBottom: '64px', textAlign: 'center' },
    heroTag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    heroH1: { fontSize: '36px', fontWeight: 700, margin: '0 0 20px', lineHeight: 1.3 },
    heroP: { fontSize: '17px', lineHeight: 1.8, color: '#f0dada', maxWidth: '580px', margin: '0 auto' },
    imagePlaceholder: { position: 'relative', overflow: 'hidden', width: '100%', height: '320px', background: '#f5eeee', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '64px' },
    sectionLabel: { fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#7B1E1E', marginBottom: '12px' },
    sectionH2: { fontSize: '28px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 16px' },
    sectionP: { fontSize: '16px', lineHeight: 1.8, color: '#444', marginBottom: '16px' },
    statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', margin: '48px 0' },
    statCard: { background: '#fdf6f6', border: '1px solid #e8c8c8', borderRadius: '12px', padding: '28px 20px', textAlign: 'center' },
    statNumber: { fontSize: '36px', fontWeight: 700, color: '#7B1E1E', lineHeight: 1, marginBottom: '8px' },
    statLabel: { fontSize: '13px', color: '#666', lineHeight: 1.4 },
    whatYouLearnGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', margin: '32px 0 64px' },
    learnCard: { background: '#fff', border: '1px solid #e4e4e4', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    learnIcon: { fontSize: '28px', marginBottom: '12px' },
    learnTitle: { fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' },
    learnDesc: { fontSize: '14px', color: '#666', lineHeight: 1.6 },
    roadmapBanner: { background: '#1a1a1a', borderRadius: '12px', padding: '40px', color: '#fff', marginBottom: '64px', textAlign: 'center' },
    roadmapH3: { fontSize: '22px', fontWeight: 700, marginBottom: '12px' },
    roadmapP: { fontSize: '15px', color: '#bbb', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 24px' },
    donateBtn: { display: 'inline-block', background: '#7B1E1E', color: '#fff', padding: '14px 32px', borderRadius: '100px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' },
    formCard: { background: '#f9f9f9', borderRadius: '12px', padding: '48px 40px' },
    formTitle: { fontSize: '24px', fontWeight: 700, marginBottom: '8px' },
    formSub: { fontSize: '15px', color: '#666', marginBottom: '32px', lineHeight: 1.6 },
    label: { display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px' },
    input: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', outline: 'none', marginBottom: '16px', boxSizing: 'border-box' },
    inputError: { borderColor: '#D32F2F', marginBottom: '4px' },
    textarea: { width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', outline: 'none', minHeight: '100px', resize: 'vertical', marginBottom: '16px', boxSizing: 'border-box' },
    textareaError: { borderColor: '#D32F2F', marginBottom: '4px' },
    errorText: { display: 'block', color: '#D32F2F', fontSize: '13px', fontWeight: 500, marginBottom: '16px' },
    btnRed: { background: '#7B1E1E', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '100px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginTop: '8px' },
    successBox: { background: '#e8f5e9', borderRadius: '12px', padding: '32px', textAlign: 'center' },
  };

  // UPDATED SKILLS ARRAY
  const skills = [
    { icon: "🧵", title: "Machine sewing", desc: "Industrial and domestic sewing machine operation from beginner to confident use." },
    { icon: "✂️", title: "Cutting and pattern work", desc: "How to measure, cut fabric accurately, and follow patterns to produce quality garments." },
    { icon: "👗", title: "Garment construction", desc: "Build complete garments from start to finish, learning professional finishing techniques." },
    { icon: "💼", title: "Running a small business", desc: "Pricing your work, finding customers, and managing a simple tailoring business." },
    { icon: "🔍", title: "Quality checking and finishing", desc: "How to inspect your work, press and finish garments professionally, and deliver results that meet customer standards." },
    { icon: "🤝", title: "Business launch support", desc: "Guided mentorship for your first three months trading, from finding your first customers to pricing, feedback, and growing with confidence." },
  ];

  return (
    <div style={s.page}>
      {/* Hero, Image, Programme, and Stats sections remain same as your provided code */}
      <div style={s.hero}>
        <div style={s.heroTag}>Vocational Training</div>
        <h1 style={s.heroH1}>A skill in your hands is a livelihood for life.</h1>
        <p style={s.heroP}>DIEF&apos;s vocational training programme will equip young Nigerians with professional sewing and tailoring skills.</p>
      </div>

      <div style={s.imagePlaceholder}>
         <Image src="/tailor.jpg" alt="tailor-img" fill className="object-cover" />
      </div>

      {/* What You Will Learn Section */}
      <div style={{ marginBottom: '64px' }}>
        <div style={s.sectionLabel}>What You Will Learn</div>
        <h2 style={s.sectionH2}>From beginner to business-ready.</h2>
        <div style={s.whatYouLearnGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={s.learnCard}>
              <div style={s.learnIcon}>{skill.icon}</div>
              <div style={s.learnTitle}>{skill.title}</div>
              <div style={s.learnDesc}>{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap and Form sections follow here... */}
    </div>
  );
}