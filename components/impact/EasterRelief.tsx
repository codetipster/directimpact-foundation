'use client'
import Link from "next/link";

export default function EasterRelief() {
  const styles = {
    body: { fontFamily: 'Georgia, serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' },
    heroH1: { fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.2, marginBottom: '20px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' },
    heroP: { fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 32px', fontFamily: 'Arial, sans-serif' },
    statRow: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' },
    stat: { textAlign: 'center' },
    statNumber: { fontSize: '40px', fontWeight: 700, fontFamily: 'Arial, sans-serif' },
    statLabel: { fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' },
    section: { maxWidth: '880px', margin: '0 auto', padding: '64px 24px' },
    introBlock: { borderLeft: '3px solid #7B1E1E', paddingLeft: '24px', marginBottom: '48px' },
    introP: { fontSize: '18px', lineHeight: 1.8, color: '#2a2a2a', fontFamily: 'Arial, sans-serif' },
    threeCol: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', margin: '48px 0' },
    card: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '28px 24px' },
    icon: { width: '40px', height: '40px', background: '#faeaea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' },
    cardH3: { fontSize: '16px', fontWeight: 600, fontFamily: 'Arial, sans-serif', marginBottom: '8px', color: '#1a1a1a' },
    cardP: { fontSize: '14px', lineHeight: 1.6, color: '#555', fontFamily: 'Arial, sans-serif' },
    pullquote: { background: '#faf5f0', borderRadius: '12px', padding: '40px 48px', margin: '48px 0', textAlign: 'center' },
    blockquote: { fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: 1.6, color: '#7B1E1E', fontStyle: 'italic', maxWidth: '620px', margin: '0 auto 16px' },
    cite: { fontSize: '14px', color: '#888', fontFamily: 'Arial, sans-serif', fontStyle: 'normal' },
    videoWrap: { borderRadius: '12px', overflow: 'hidden', margin: '48px 0', aspectRatio: '16/9', position: 'relative', background: '#111' },
    videoIframe: { width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 },
    pathwayBridge: { background: '#7B1E1E', color: '#fff', borderRadius: '12px', padding: '48px 40px', margin: '48px 0' },
    pathwayH2: { fontSize: '24px', fontWeight: 400, marginBottom: '16px' },
    pathwayP: { fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', fontFamily: 'Arial, sans-serif', maxWidth: '600px', marginBottom: '28px' },
    btnWhite: { display: 'inline-block', background: '#fff', color: '#7B1E1E', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 600, padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginRight: '12px', marginBottom: '8px' },
    btnOutline: { display: 'inline-block', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 600, padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', marginBottom: '8px' },
    donateBar: { background: '#faf5f0', borderRadius: '12px', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginTop: '48px' },
    donateP: { fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#2a2a2a', maxWidth: '500px', lineHeight: 1.6 },
    donateBtn: { background: '#7B1E1E', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 600, padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', whiteSpace: 'nowrap' },
  };

  return (
    <div style={styles.body}>
      <div style={styles.hero}>
        <div style={styles.tag}>Easter Emergency Relief 2026</div>
        <h1 style={styles.heroH1}>When crisis calls, DIEF shows up.</h1>
        <p style={styles.heroP}>This Easter, our team in Nigeria reached 300 people with hot meals, clean water, and the kind of presence that says: <em>you are not forgotten.</em></p>
        <div style={styles.statRow}>
          {[['300', 'People reached'], ['1 day', 'Distribution day'], ['100%', 'Self-funded']].map(([num, label]) => (
            <div key={label} style={styles.stat}>
              <div style={styles.statNumber}>{num}</div>
              <div style={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.introBlock}>
          <p style={styles.introP}>Emergency relief is not separate from our mission. It is where trust is built. For many of the people we serve, a meal shared in a moment of crisis is the first step toward something more lasting. It is how they come to know DIEF. And it is often how their journey toward lasting empowerment begins.</p>
        </div>

        <div style={styles.threeCol}>
          {[
            { title: 'Prepared with care', text: 'Hot jollof rice, protein, plantain, packed in branded DIEF containers and distributed with dignity, not haste.' },
            { title: 'Team on the ground', text: 'DIEF volunteers in uniform, bearing the Swiss-Nigeria badge, were present, organised, and accountable every step of the way.' },
            { title: 'The door we open together', text: 'Every meal, every bottle of water, is an invitation. From relief to relationship, and from relationship to the Direct Impact Pathway.' },
          ].map(({ title, text }) => (
            <div key={title} style={styles.card}>
              <div style={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7B1E1E" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h3 style={styles.cardH3}>{title}</h3>
              <p style={styles.cardP}>{text}</p>
            </div>
          ))}
        </div>

        <div style={styles.pullquote}>
          <blockquote style={styles.blockquote}>&quot;Before someone can focus on building a livelihood, their immediate needs must be met. Emergency relief is not a distraction from empowerment. It is the door we open together.&quot;</blockquote>
          <cite style={styles.cite}>Founder, Direct Impact Empowerment Foundation</cite>
        </div>

        <div style={styles.videoWrap}>
          <iframe
            style={styles.videoIframe}
            src="https://www.youtube.com/embed/7oHKMOWEsY4"
            title="Easter Emergency Relief 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={styles.pathwayBridge}>
          <h2 style={styles.pathwayH2}>What comes next</h2>
          <p style={styles.pathwayP}>Emergency relief is where many of our beneficiaries first meet DIEF. But we do not stop there. Our Direct Impact Pathway walks alongside people from crisis, through training and seed funding, to sustainable livelihoods. That is the DIEF difference.</p>
          <Link href="/#dip-pathway" style={styles.btnWhite}>Learn about the Direct Impact Pathway</Link>
          <Link href="/impact" style={styles.btnOutline}>Meet our beneficiaries</Link>
        </div>

        <div style={styles.donateBar}>
          <p style={styles.donateP}>Help us reach more people and walk with them all the way. Every contribution funds emergency relief, vocational training, and the seed capital that changes lives.</p>
         <Link href="/donate" style={styles.donateBtn}>Donate to DIEF</Link>
        </div>
      </div>
    </div>
  );
}
