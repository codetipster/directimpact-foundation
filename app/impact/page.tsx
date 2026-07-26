"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState<"all" | "video" | "community">("all");

  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    h1: { fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif', marginBottom: '20px' },
    heroP: { fontSize: '17px', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 },
    section: { maxWidth: '880px', margin: '0 auto', padding: '64px 24px' },
    sectionTitle: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '12px', color: '#1a1a1a' },
    sectionSub: { fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '640px' },
    
    // Stats Grid
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', margin: '40px 0 56px' },
    statCard: { background: '#faf5f0', borderRadius: '12px', padding: '28px 20px', textAlign: 'center', border: '1px solid #f0e6dd' },
    statNum: { fontSize: '36px', fontWeight: 700, color: '#7B1E1E', fontFamily: 'Georgia, serif' },
    statLabel: { fontSize: '14px', fontWeight: 600, color: '#2a2a2a', marginTop: '6px' },
    statSub: { fontSize: '12px', color: '#666', marginTop: '4px', lineHeight: 1.4 },

    // Pathway Breakdown
    pathwayGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', margin: '32px 0 56px' },
    pathwayCard: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '28px', transition: 'transform 0.2s, boxShadow 0.2s' },
    pathwayStep: { fontSize: '12px', fontWeight: 700, color: '#7B1E1E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' },
    pathwayTitle: { fontSize: '18px', fontWeight: 600, fontFamily: 'Georgia, serif', marginBottom: '10px' },
    pathwayDesc: { fontSize: '14px', color: '#555', lineHeight: 1.65 },

    // Filter Buttons
    tabRow: { display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' },
    tabBtn: { padding: '10px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', border: 'none', transition: 'all 0.2s' },
    
    // Stories Grid
    storyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '32px 0 56px' },
    storyCard: { background: '#f9f9f9', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' },
    storyBody: { padding: '24px' },
    storyBadge: { display: 'inline-block', background: '#7B1E1E15', color: '#7B1E1E', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px', marginBottom: '12px' },
    storyTitle: { fontSize: '18px', fontWeight: 600, fontFamily: 'Georgia, serif', marginBottom: '8px' },
    storyDesc: { fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '16px' },
    storyMeta: { fontSize: '12px', color: '#888', borderTop: '1px solid #eee', paddingTop: '12px' },

    // Accountability Box
    accBox: { background: '#faf5f0', borderLeft: '4px solid #7B1E1E', borderRadius: '0 12px 12px 0', padding: '36px 32px', margin: '48px 0' },
    accTitle: { fontSize: '20px', fontWeight: 600, fontFamily: 'Georgia, serif', marginBottom: '12px', color: '#1a1a1a' },
    accText: { fontSize: '15px', color: '#444', lineHeight: 1.7 },

    // CTA Card
    ctaCard: { background: '#7B1E1E', color: '#fff', borderRadius: '16px', padding: '48px 32px', textAlign: 'center', marginTop: '64px' },
    ctaTitle: { fontSize: '28px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '14px' },
    ctaP: { fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 },
    ctaBtnRow: { display: 'flex', gap: '16px', justifyCenter: 'center', flexWrap: 'wrap', justifyContent: 'center' },
    btnWhite: { background: '#fff', color: '#7B1E1E', padding: '14px 32px', borderRadius: '100px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' },
    btnOutline: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', padding: '12px 32px', borderRadius: '100px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' },
  };

  const metrics = [
    { num: '300+', label: 'People Directly Reached', sub: 'Across crisis & economic stages' },
    { num: '$200', label: 'Full Journey Cost', sub: 'Crisis response to independence' },
    { num: '100%', label: 'Directly Tracked', sub: 'No middle layers or proxy estimates' },
    { num: '2', label: 'Registered Jurisdictions', sub: 'Switzerland & Nigeria' },
  ];

  const pathwaySteps = [
    { step: 'Stage 01', title: 'Crisis Response', desc: 'Providing immediate food, clean water, and emergency medical relief within hours of identification.' },
    { step: 'Stage 02', title: 'Stabilisation', desc: 'Securing essential medical care, mobility aids, and safe living conditions to establish a baseline of safety.' },
    { step: 'Stage 03', title: 'Economic Restart', desc: 'Delivering tailored vocational training, seed capital, trade equipment, and inventory grants.' },
    { step: 'Stage 04', title: 'Sustained Independence', desc: 'Conducting ongoing cash flow checks, business restocking, and mentorship until full self-sufficiency.' },
  ];

  const stories = [
    {
      category: 'video',
      tag: 'Video Journey',
      title: 'Baba\u2019s Coal Trade Restart',
      desc: 'After losing his kneecap in an accident, an elderly father used emergency relief cash to trade coal. We returned with 3 sacks of coal and full trading capital to establish his shop.',
      outcome: 'Self-sufficient trader in Ibadan',
    },
    {
      category: 'community',
      tag: 'Community Lifeline',
      title: 'Christmas Relief Package',
      desc: 'Delivered direct food and emergency packages to over 220 families facing extreme hardship across underserved communities in Nigeria.',
      outcome: '220+ households cushioned against inflation',
    },
    {
      category: 'video',
      tag: 'Vocational Training',
      title: 'Tailoring & Digital Skills',
      desc: 'Equipped young mothers and youth with functional sewing machinery and basic computer literacy to generate independent household income.',
      outcome: '12 small business startups launched',
    },
  ];

  const filteredStories = activeTab === 'all' 
    ? stories 
    : stories.filter(s => s.category === activeTab);

  return (
    <div style={s.page}>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.tag}>Our Proven Impact</div>
        <h1 style={s.h1}>Documented transformation from moment of crisis to sustained independence.</h1>
        <p style={s.heroP}>
          We measure success not by how many hand-outs we distribute, but by how many lives transition permanently off emergency relief and into dignity.
        </p>
      </div>

      <div style={s.section}>
        {/* Key Metrics */}
        <h2 style={s.sectionTitle}>Impact at a Glance</h2>
        <p style={s.sectionSub}>
          Clear numbers behind every intervention. We maintain full financial and operational line-of-sight on every Swiss Franc and Nigerian Naira spent.
        </p>

        <div style={s.statsGrid}>
          {metrics.map((m) => (
            <div key={m.label} style={s.statCard}>
              <div style={s.statNum}>{m.num}</div>
              <div style={s.statLabel}>{m.label}</div>
              <div style={s.statSub}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Pathway Section */}
        <h2 style={s.sectionTitle}>How We Measure Progress</h2>
        <p style={s.sectionSub}>
          Our Dignity to Independence Pathway guarantees that beneficiaries do not get stuck in a cycle of dependency.
        </p>

        <div style={s.pathwayGrid}>
          {pathwaySteps.map((p) => (
            <div key={p.step} style={s.pathwayCard}>
              <div style={s.pathwayStep}>{p.step}</div>
              <div style={s.pathwayTitle}>{p.title}</div>
              <div style={s.pathwayDesc}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Story / Evidence Filter */}
        <h2 style={s.sectionTitle}>Real Stories, Verified Outcomes</h2>
        <p style={s.sectionSub}>
          Every story we publish is a real individual filmed and documented with informed consent.
        </p>

        <div style={s.tabRow}>
          <button 
            style={{ 
              ...s.tabBtn, 
              background: activeTab === 'all' ? '#7B1E1E' : '#f0f0f0', 
              color: activeTab === 'all' ? '#fff' : '#444' 
            }}
            onClick={() => setActiveTab('all')}
          >
            All Outcomes
          </button>
          <button 
            style={{ 
              ...s.tabBtn, 
              background: activeTab === 'video' ? '#7B1E1E' : '#f0f0f0', 
              color: activeTab === 'video' ? '#fff' : '#444' 
            }}
            onClick={() => setActiveTab('video')}
          >
            Video Journeys
          </button>
          <button 
            style={{ 
              ...s.tabBtn, 
              background: activeTab === 'community' ? '#7B1E1E' : '#f0f0f0', 
              color: activeTab === 'community' ? '#fff' : '#444' 
            }}
            onClick={() => setActiveTab('community')}
          >
            Community Relief
          </button>
        </div>

        <div style={s.storyGrid}>
          {filteredStories.map((st) => (
            <div key={st.title} style={s.storyCard}>
              <div style={s.storyBody}>
                <span style={s.storyBadge}>{st.tag}</span>
                <h3 style={s.storyTitle}>{st.title}</h3>
                <p style={s.storyDesc}>{st.desc}</p>
                <div style={s.storyMeta}>
                  <strong>Outcome:</strong> {st.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability Banner */}
        <div style={s.accBox}>
          <h3 style={s.accTitle}>Third-Party Vetted & Accountable</h3>
          <p style={s.accText}>
            Direct Impact Empowerment Foundation holds GlobalGiving&apos;s <strong>Vetted Organisation</strong>, <strong>Top-Ranked Organisation</strong>, and <strong>Effective Organisation</strong> badges. Our financial records are prepared under the oversight of ACCA-certified accounting standards, giving our global donors complete confidence.
          </p>
        </div>

        {/* Call To Action */}
        <div style={s.ctaCard}>
          <h2 style={s.ctaTitle}>Be Part of the Next Journey</h2>
          <p style={s.ctaP}>
            A single $200 contribution funds the entire 4-stage pathway for one person, taking them from crisis to a sustainable income.
          </p>
          <div style={s.ctaBtnRow}>
            <Link href="/donate" style={s.btnWhite}>
              DONATE $200 NOW
            </Link>
            <Link href="/partners" style={s.btnOutline}>
              BECOME A PARTNER
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}