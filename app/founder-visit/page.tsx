"use client";
import Link from "next/link";
import type { CSSProperties } from 'react';

export default function FounderVisit() {
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#1a1a1a', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    h1: { fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.2, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif', marginBottom: '20px' },
    heroP: { fontSize: '17px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 },
    section: { maxWidth: '860px', margin: '0 auto', padding: '64px 24px' },
    introBlock: { borderLeft: '3px solid #7B1E1E', paddingLeft: '24px', marginBottom: '56px' },
    introP: { fontSize: '18px', lineHeight: 1.85, color: '#2a2a2a', fontFamily: 'Georgia, serif', marginBottom: '16px' },
    momentsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '48px 0' },
    momentCard: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '28px 24px' },
    momentIcon: { width: '40px', height: '40px', background: '#faeaea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '20px' },
    momentTitle: { fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' },
    momentDesc: { fontSize: '14px', color: '#555', lineHeight: 1.65 },
    pullquote: { background: '#faf5f0', borderRadius: '12px', padding: '40px 48px', margin: '48px 0', fontFamily: 'Georgia, serif', fontSize: 'clamp(18px, 3vw, 22px)', fontStyle: 'italic', color: '#2a2a2a', lineHeight: 1.65, textAlign: 'center' },
    cite: { display: 'block', fontSize: '14px', fontStyle: 'normal', color: '#888', marginTop: '16px', fontFamily: 'Arial, sans-serif' },
    videoWrap: { background: '#111', borderRadius: '12px', overflow: 'hidden', margin: '48px 0', aspectRatio: '16/9', position: 'relative' },
    videoPlaceholder: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#222', minHeight: '300px', borderRadius: '12px' },
	videoIframe: { width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 },
    videoNote: { color: 'rgba(255,255,255,0.6)', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginTop: '12px' },
    dipBridge: { background: '#7B1E1E', color: '#fff', borderRadius: '12px', padding: '48px 40px', margin: '48px 0' },
    dipTitle: { fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '16px' },
    dipP: { fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', maxWidth: '600px', marginBottom: '28px' },
    dipBtn: { display: 'inline-block', background: '#fff', color: '#7B1E1E', fontWeight: 600, fontSize: '14px', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginRight: '12px', marginBottom: '8px' },
    dipBtnOutline: { display: 'inline-block', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '14px', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginBottom: '8px' },
  };

  const moments = [
    { icon: '✈', title: 'Unannounced arrival', desc: 'The founder flew in from Switzerland without advance notice to the community. What you see in the footage is real, not staged.' },
    { icon: '🤝', title: 'First meeting in person', desc: "This visit marked a milestone. The first time Femi and Reuben, who leads DIEF's ground operations in Nigeria, had ever met in person despite two years of working together." },
    { icon: '🏠', title: 'The roof she did not mention', desc: 'One beneficiary had a damaged roof but said nothing. She did not want to ask for more after everything already done. The team noticed and acted.' },
    { icon: '👴', title: 'Visiting the elderly', desc: 'The team visited an elderly man supported through illness and a woman already empowered through the programme, checking on their progress.' },
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Founder visit, Nigeria</div>
        <h1 style={s.h1}>What happens when nobody knows you are coming.</h1>
        <p style={s.heroP}>In April 2024 the founder of Direct Impact flew from Switzerland to Nigeria unannounced. This is what she found.</p>
      </div>

      <div style={s.section}>
        <div style={s.introBlock}>
          <p style={s.introP}>It was a Sunday. Nobody in the community knew she was coming. There was no preparation, no arrangement, no warning. Just a founder who needed to see with her own eyes what was happening on the ground.</p>
          <p style={s.introP}>What she found was exactly what the reports had said. And more.</p>
        </div>

        <div style={s.momentsGrid}>
          {moments.map(m => (
            <div key={m.title} style={s.momentCard}>
              <div style={s.momentIcon}>{m.icon}</div>
              <div style={s.momentTitle}>{m.title}</div>
              <div style={s.momentDesc}>{m.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.pullquote}>
          &quot;She mentioned, almost in passing, that the roof had a problem. She did not want to ask for more after everything we had already done. That is the kind of thing you only find when you show up unannounced.&quot;
          <cite style={s.cite}>Founder, Direct Impact Empowerment Foundation</cite>
        </div>

        <div style={s.videoWrap}>
          <iframe
            style={s.videoIframe}
            src="https://www.youtube.com/embed/Eao-Ncs_f4A?si=Xiu1IHgnKGW9JxWn"
            title="From Online to Real Life Meeting My Team"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={s.dipBridge}>
          <div style={s.dipTitle}>What comes next</div>
          <p style={s.dipP}>Every visit is a checkpoint in the Dignity to Independence Pathway. We do not give people support and disappear. We return every two months to make sure the progress holds and to take the next step together.</p>
          <Link href="/#dip-pathway" style={s.dipBtn}>Learn about the pathway</Link>
          <Link href="/impact" style={s.dipBtnOutline}>Read beneficiary stories</Link>
        </div>
      </div>
    </div>
  );
}

