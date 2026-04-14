'use client'
import Link from "next/link";
import type { CSSProperties } from 'react';

export default function HomepageAndAbout() {
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    divider: { borderTop: '1px solid #e5e5e5', margin: '0' },
    section: { maxWidth: '860px', margin: '0 auto', padding: '72px 24px' },

    heroSection: { background: '#7B1E1E', color: '#fff', padding: '80px 24px', textAlign: 'center' },
    heroTag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' },
    heroH1: { fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif', marginBottom: '24px' },
    heroP: { fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75, marginBottom: '36px' },
    heroBtn: { display: 'inline-block', background: '#fff', color: '#7B1E1E', fontWeight: 600, fontSize: '15px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', marginRight: '12px', marginBottom: '8px' },
    heroBtnOutline: { display: 'inline-block', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '15px', padding: '14px 40px', borderRadius: '100px', textDecoration: 'none', marginBottom: '8px' },

    dipSection: { background: '#f9f9f9', padding: '72px 24px' },
    dipInner: { maxWidth: '860px', margin: '0 auto' },
    dipTitle: { fontSize: '26px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '12px', color: '#1a1a1a' },
    dipSub: { fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px' },
    dipGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' },
    dipCard: (i) => ({ background: '#fff', borderTop: `4px solid ${['#7B1E1E','#9B2E2E','#B84040','#D05050'][i]}`, borderRadius: '0 0 10px 10px', padding: '24px 20px' }),
    dipNum: { fontSize: '12px', fontWeight: 700, color: '#7B1E1E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' },
    dipCardTitle: { fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' },
    dipCardDesc: { fontSize: '14px', color: '#666', lineHeight: 1.6 },

    storySection: { padding: '72px 24px', background: '#fff' },
    storyInner: { maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
    storyText: {},
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

  return (
    <div style={s.page}>

      <div style={s.heroSection}>
        <div style={s.heroTag}>Direct Impact Empowerment Foundation</div>
        <h1 style={s.heroH1}>We go to the people every other system has missed.</h1>
        <p style={s.heroP}>Registered in Switzerland and Nigeria, we walk alongside vulnerable people from the moment of crisis all the way to sustained independence. Not charity. A model.</p>
        <div id="dip-pathway">
          <Link href="/donate" style={s.heroBtn}>Support our work</Link>
          <Link href="/#dip-pathway" style={s.heroBtnOutline}>See the impact</Link>
        </div>
      </div>

      <div style={s.dipSection}>
        <div style={s.dipInner}>
          <div style={s.dipTitle}>The Dignity to Independence Pathway</div>
          <p style={s.dipSub}>Most organisations choose between emergency relief and long-term development. We refuse that choice. Our four-stage model follows each person all the way through.</p>
          <div style={s.dipGrid}>
            {dip.map((d, i) => (
              <div key={d.stage} style={s.dipCard(i)}>
                <div style={s.dipNum}>{d.stage}</div>
                <div style={s.dipCardTitle}>{d.title}</div>
                <div style={s.dipCardDesc}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.storySection}>
        <div style={s.storyInner}>
          <div style={s.storyText}>
            <div style={s.storyTag}>From the ground</div>
            <h2 style={s.storyH2}>She was sitting on the ground when we found her.</h2>
            <p style={s.storyP}>She had not eaten all day. She had lost both her children and was raising her grandchildren alone. Nobody had stopped.</p>
            <div style={s.storyQuote}>&quot;We gave her food that evening. We came back a week later with coal stock and the capital to restart her business. No loan. No conditions.&quot;</div>
            <p style={s.storyP}>Months later she was standing, earning, and her grandchildren were fed. This is not an exceptional story. This is our model.</p>
            <Link href="/impact" style={s.storyBtn}>Read more stories</Link>
          </div>
          <div style={{ background: '#faf5f0', borderRadius: '12px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[['$70', 'Emergency relief package for one person'], ['$200', 'Full Dignity to Independence journey'], ['300+', 'People reached to date'], ['2', 'Countries registered']].map(([n, l]) => (
              <div key={l} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '20px' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: '#7B1E1E', fontFamily: 'Georgia, serif' }}>{n}</div>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.aboutSection} id="about">
        <div style={s.aboutInner}>
          <div style={s.aboutTag}>About Direct Impact</div>
          <h2 style={s.aboutH2}>We are self-funded. Not out of choice, but out of default.</h2>
          <div style={s.aboutGrid}>
            <div>
              <p style={s.aboutP}>Looking away has always been the most difficult thing to do. And so, year after year, we have found ourselves deeper in the trenches of humanity, walking alongside people that every other system has left behind.</p>
              <p style={{ ...s.aboutP, marginTop: '16px' }}>Before we helped a single person, we invested in formal NGO management training for our in-country CEO. We registered in two countries. We built the governance structures first. Because we refused to let this be the blind leading the blind.</p>
            </div>
            <div>
              <div style={s.aboutHighlight}>&quot;If you have ever found it hard to look away, you already understand why we exist.&quot;</div>
              <p style={{ ...s.aboutP, marginTop: '24px' }}>We look forward to the day when the weight of this work is shared. Until that day, we will keep going.</p>
            </div>
          </div>
          <Link href="/donate" style={s.heroBtn}>Support our work</Link>
          <Link href="/#dip-pathway" style={s.heroBtnOutline}>See the impact</Link>
        </div>
      </div>

    </div>
  );
}
