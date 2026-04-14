'use client';

import Link from "next/link";
import type { CSSProperties } from "react";

export default function HomepageAndAbout() {

  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    divider: { borderTop: '1px solid #e5e5e5', margin: '0' },
    section: { maxWidth: '860px', margin: '0 auto', padding: '72px 24px' },

    heroSection: { background: '#7B1E1E', color: '#fff', padding: '80px 24px', textAlign: 'center' },
    heroTag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' },
    heroH1: { fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '700px', margin: '0 auto 24px', fontFamily: 'Georgia, serif' },
    heroP: { fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 36px', lineHeight: 1.75 },

    heroBtn: { display: 'inline-block', background: '#fff', color: '#7B1E1E', fontWeight: 600, fontSize: '15px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', marginRight: '12px', marginBottom: '8px' },
    heroBtnOutline: { display: 'inline-block', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '15px', padding: '14px 40px', borderRadius: '100px', textDecoration: 'none', marginBottom: '8px' },

    dipSection: { background: '#f9f9f9', padding: '72px 24px' },
    dipInner: { maxWidth: '860px', margin: '0 auto' },
    dipTitle: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '12px' },
    dipSub: { fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px' },
    dipGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' },

    dipNum: { fontSize: '12px', fontWeight: 700, color: '#7B1E1E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' },
    dipCardTitle: { fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' },
    dipCardDesc: { fontSize: '14px', color: '#666', lineHeight: 1.6 },

    storySection: { padding: '72px 24px', background: '#fff' },
    storyInner: { maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
    storyTag: { fontSize: '12px', fontWeight: 700, color: '#7B1E1E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' },
    storyH2: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '20px', lineHeight: 1.35 },
    storyP: { fontSize: '16px', color: '#444', lineHeight: 1.8, marginBottom: '16px' },
    storyQuote: { borderLeft: '3px solid #7B1E1E', paddingLeft: '20px', fontFamily: 'Georgia, serif', fontSize: '18px', fontStyle: 'italic', color: '#2a2a2a', lineHeight: 1.65, margin: '24px 0' },
    storyBtn: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', marginTop: '8px' },

    aboutSection: { background: '#1a1a1a', color: '#fff', padding: '80px 24px' },
    aboutInner: { maxWidth: '860px', margin: '0 auto' },
    aboutTag: { fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' },
    aboutH2: { fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '32px', lineHeight: 1.3, maxWidth: '680px' },
    aboutGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '48px' },
    aboutP: { fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 },
    aboutHighlight: { fontSize: '20px', color: '#fff', fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.6, borderLeft: '3px solid #7B1E1E', paddingLeft: '24px' },

    aboutBtn: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', marginTop: '32px' },
    foundervisitBtn: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', marginTop: '32px', marginLeft: '12px' },
  };

  const dip = [
    { stage: 'Stage 01', title: 'Crisis response', desc: 'Emergency relief delivered directly. Food, water, and immediate support.' },
    { stage: 'Stage 02', title: 'Stabilisation', desc: 'Medical care and basic needs secured before anything else moves forward.' },
    { stage: 'Stage 03', title: 'Economic restart', desc: 'Seed capital, equipment, and training tailored to each person.' },
    { stage: 'Stage 04', title: 'Sustained independence', desc: 'Regular follow-up visits and support until fully self-sufficient.' },
  ];

  // ✅ FIX: moved OUTSIDE style object (this fixes build error)
  const dipCard = (i: number): CSSProperties => ({
    background: '#fff',
    borderTop: `4px solid ${['#7B1E1E', '#9B2E2E', '#B84040', '#D05050'][i]}`,
    borderRadius: '0 0 10px 10px',
    padding: '24px 20px'
  });

  return (
    <div style={s.page}>

      <div style={s.heroSection}>
        <div style={s.heroTag}>Direct Impact Empowerment Foundation</div>
        <h1 style={s.heroH1}>We go to the people every other system has missed.</h1>
        <p style={s.heroP}>
          Registered in Switzerland and Nigeria, we walk alongside vulnerable people from crisis to independence.
        </p>

        <div id="dip-pathway">
          <Link href="/donate" style={s.heroBtn}>Support our work</Link>
          <Link href="/#dip-pathway" style={s.heroBtnOutline}>See the impact</Link>
        </div>
      </div>

      <div style={s.dipSection}>
        <div style={s.dipInner}>
          <div style={s.dipTitle}>The Dignity to Independence Pathway</div>
          <p style={s.dipSub}>
            Our four-stage model follows each person from crisis to independence.
          </p>

          <div style={s.dipGrid}>
            {dip.map((d, i) => (
              <div key={d.stage} style={dipCard(i)}>
                <div style={s.dipNum}>{d.stage}</div>
                <div style={s.dipCardTitle}>{d.title}</div>
                <div style={s.dipCardDesc}>{d.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}