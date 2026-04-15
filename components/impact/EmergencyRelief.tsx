'use client'
import Link from "next/link";
import type { CSSProperties } from 'react';

export default function EmergencyRelief() {
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' },
    h1: { fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.2, marginBottom: '20px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif' },
    heroP: { fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
    statRow: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '48px' },
    statNum: { fontSize: '40px', fontWeight: 700, fontFamily: 'Georgia, serif' },
    statLabel: { fontSize: '13px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' },
    section: { maxWidth: '880px', margin: '0 auto', padding: '64px 24px' },
    introBlock: { borderLeft: '3px solid #7B1E1E', paddingLeft: '24px', marginBottom: '64px' },
    introP: { fontSize: '18px', lineHeight: 1.85, color: '#2a2a2a', fontFamily: 'Georgia, serif', marginBottom: '16px' },
    growthStrip: { background: '#1a1a1a', borderRadius: '12px', padding: '40px', margin: '0 0 64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0' },
    growthYear: { fontSize: '13px', fontWeight: 700, color: '#7B1E1E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' },
    growthNum: { fontSize: '36px', fontWeight: 700, color: '#fff', fontFamily: 'Georgia, serif', marginBottom: '6px' },
    growthDesc: { fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 },
    eventSection: { marginBottom: '80px' },
    eventHeader: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' },
    eventTitle: { fontSize: '24px', fontWeight: 400, fontFamily: 'Georgia, serif', color: '#1a1a1a' },
    eventP: { fontSize: '16px', lineHeight: 1.85, color: '#444', fontFamily: 'Georgia, serif', marginBottom: '16px', maxWidth: '720px' },
    eventHighlight: { background: '#faf5f0', borderLeft: '3px solid #7B1E1E', padding: '16px 24px', borderRadius: '0 8px 8px 0', marginBottom: '24px', fontFamily: 'Georgia, serif', fontSize: '16px', fontStyle: 'italic', color: '#2a2a2a' },
    videoWrap: { borderRadius: '12px', overflow: 'hidden', margin: '32px 0', aspectRatio: '16/9', position: 'relative', background: '#111' },
    videoIframe: { width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 },
    divider: { borderTop: '1px solid #e5e5e5', margin: '0 0 80px' },
    pathwayBridge: { background: '#7B1E1E', color: '#fff', borderRadius: '12px', padding: '48px 40px', margin: '48px 0' },
    pathwayH2: { fontSize: '24px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '16px' },
    pathwayP: { fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', maxWidth: '600px', marginBottom: '28px' },
    btnWhite: { display: 'inline-block', background: '#fff', color: '#7B1E1E', fontSize: '14px', fontWeight: 600, padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginRight: '12px', marginBottom: '8px' },
    btnOutline: { display: 'inline-block', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 600, padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginBottom: '8px' },
    donateBar: { background: '#faf5f0', borderRadius: '12px', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginTop: '48px' },
    donateP: { fontSize: '16px', color: '#2a2a2a', maxWidth: '500px', lineHeight: 1.6 },
    donateBtn: { background: '#7B1E1E', color: '#fff', fontSize: '14px', fontWeight: 600, padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', whiteSpace: 'nowrap' },
  };
  
   const growthItem = (i: number): CSSProperties => ({
    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
    padding: '0 32px 0 0',
    marginRight: i < 3 ? '32px' : 0,
  });

  const eventYear = (color: string): CSSProperties => ({
    background: color,
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    padding: '6px 16px',
    borderRadius: '100px',
    fontFamily: 'Arial, sans-serif',
  });

  const growth = [
    { year: '2023', num: '16', desc: 'One person. No branding. Children helped carry supplies in a wheelbarrow. This is where it started.' },
    { year: '2024', desc: 'First branded items. First DIEF t-shirt. The operation was taking shape.', num: '50' },
    { year: '2025', desc: 'Full branding. Full team in uniform. The same heart with a far bigger reach.', num: '120' },
    { year: '2026', desc: 'Easter Emergency Relief. 300 people reached in a single day.', num: '300' },
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Emergency Relief</div>
        <h1 style={s.h1}>Every year without fail, we show up.</h1>
        <p style={s.heroP}>Since 2023 Direct Impact has conducted emergency outreach operations across Nigerian communities. Unannounced. Self-funded. Growing every single year.</p>
        <div style={s.statRow}>
          {[['486+', 'People reached across all operations'], ['4', 'Outreach events'], ['100%', 'Self-funded']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={s.statNum}>{n}</div>
              <div style={s.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.section}>
        <div style={s.introBlock}>
          <p style={s.introP}>Emergency relief is not where our story ends. It is where trust begins. For many of the people we serve, a meal or a food parcel delivered in a moment of crisis is the first time anyone from outside their immediate circle has stopped to help. It is how they come to know DIEF. And it is often how their journey toward lasting empowerment begins.</p>
          <p style={s.introP}>What you are about to see is three years of consistent commitment. Watch how it grew.</p>
        </div>

        <div style={s.growthStrip}>
          {growth.map((g, i) => (
            <div key={g.year} style={growthItem(i)}>
              <div style={s.growthYear}>{g.year}</div>
              <div style={s.growthNum}>{g.num}</div>
              <div style={s.growthDesc}>{g.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.eventSection}>
          <div style={s.eventHeader}>
            <div style={eventYear('#444')}>Christmas 2023, 2024 and 2025</div>
            <div style={s.eventTitle}>Christmas Through the Years</div>
          </div>
          <p style={s.eventP}>In 2023 it was one person, no branded materials, and children from the neighbourhood helping carry supplies in a wheelbarrow. Sixteen families received food parcels. It was not polished. It was real.</p>
          <p style={s.eventP}>By 2024 we had grown to 50 families. The vegetable oil was branded. One team member wore a DIEF t-shirt. The operation was taking shape.</p>
          <p style={s.eventP}>In 2025 we reached 120 families. Everyone on the team wore branded uniforms. Every item was branded. The same heart. A far bigger reach.</p>
          <div style={s.eventHighlight}>
            &quot;In 2023 we did not even have a branded t-shirt. The children in the area helped us load supplies into a wheelbarrow. That is where Direct Impact started. We show you that footage without apology because it is proof that everything you see today was built from nothing, year by year, entirely with our own resources.&quot;
          </div>
          <div style={s.videoWrap}>
            <iframe
              style={s.videoIframe}
              src="https://www.youtube.com/embed/2uhL7l6nbTk"
              title="Christmas Through the Years 2023 to 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={s.divider} />

        <div style={s.eventSection}>
          <div style={s.eventHeader}>
            <div style={eventYear('#7B1E1E')}>Easter 2026</div>
            <div style={s.eventTitle}>Easter Emergency Relief</div>
          </div>
          <p style={s.eventP}>This Easter our team in Nigeria reached 300 people with hot meals, clean water, and the kind of presence that says you are not forgotten. Hot jollof rice, protein, plantain, packed in branded DIEF containers and distributed with dignity across the community in a single day.</p>
          <div style={s.eventHighlight}>
            &quot;Every food pack carried our name and our promise. Every bottle of water was handed over by a volunteer in a DIEF uniform, because how you show up matters as much as what you bring.&quot;
          </div>
          <div style={s.videoWrap}>
            <iframe
              style={s.videoIframe}
              src="https://www.youtube.com/embed/7oHKMOWEsY4"
              title="Easter Emergency Relief 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={s.pathwayBridge}>
          <h2 style={s.pathwayH2}>Emergency relief is where the journey begins</h2>
          <p style={s.pathwayP}>Every person we reach through emergency relief is a potential entry point into the Dignity to Independence Pathway. We do not give people food and disappear. We come back. We assess. We walk alongside them all the way to sustained independence.</p>
          <Link href="/#dip-pathway" style={s.btnWhite}>Learn about the Direct Impact Pathway</Link>
          <Link href="/impact" style={s.btnOutline}>Meet our beneficiaries</Link>
        </div>

        <div style={s.donateBar}>
          <p style={s.donateP}>Help us reach more people next Christmas, next Easter, and every time in between. Every contribution funds emergency relief and the journey that follows.</p>
          <Link href="/donate" style={s.donateBtn}>Donate to DIEF</Link>
        </div>
      </div>
    </div>
  );
}

