import { Metadata } from 'next'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Donate - DirectImpact Empowerment Foundation',
  description: 'Support youth empowerment and community transformation through your generous donation.',
}

export default function DonorLanding() {
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: 'Georgia, serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '72px 24px 56px', textAlign: 'center' },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' },
    h1: { fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 400, lineHeight: 1.2, marginBottom: '20px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' },
    heroP: { fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 32px', fontFamily: 'Arial, sans-serif' },
    statRow: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' },
    statNum: { fontSize: '40px', fontWeight: 700, fontFamily: 'Arial, sans-serif' },
    statLabel: { fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' },
    section: { maxWidth: '860px', margin: '0 auto', padding: '64px 24px' },
    sectionTitle: { fontSize: '28px', fontWeight: 400, marginBottom: '24px', color: '#1a1a1a' },
    introBlock: { borderLeft: '3px solid #7B1E1E', paddingLeft: '24px', marginBottom: '48px' },
    introP: { fontSize: '18px', lineHeight: 1.8, color: '#2a2a2a', fontFamily: 'Arial, sans-serif' },
    storyCard: { background: '#faf5f0', borderRadius: '12px', padding: '40px', margin: '48px 0' },
    storyP: { fontSize: '17px', lineHeight: 1.85, color: '#2a2a2a', fontFamily: 'Arial, sans-serif', marginBottom: '16px' },
    videoWrap: { background: '#111', borderRadius: '12px', overflow: 'hidden', margin: '48px 0', aspectRatio: '16/9', position: 'relative' },
    videoIframe: { width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 },
    donationGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '32px 0' },
    donationCard: { border: '2px solid #e5e5e5', borderRadius: '12px', padding: '28px 24px', textAlign: 'center', cursor: 'pointer' },
    donationCardFeatured: { border: '2px solid #7B1E1E', borderRadius: '12px', padding: '28px 24px', textAlign: 'center', cursor: 'pointer', position: 'relative' },
    featuredBadge: { position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#7B1E1E', color: '#fff', fontSize: '11px', fontFamily: 'Arial, sans-serif', fontWeight: 600, padding: '4px 14px', borderRadius: '100px', whiteSpace: 'nowrap' },
    donationAmount: { fontSize: '32px', fontWeight: 700, fontFamily: 'Arial, sans-serif', color: '#7B1E1E', marginBottom: '8px' },
    donationLabel: { fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#555', lineHeight: 1.5 },
    btnRed: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: 600, padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', marginTop: '8px' },
    btnOutline: { display: 'inline-block', background: 'transparent', color: '#7B1E1E', border: '2px solid #7B1E1E', fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: 600, padding: '14px 40px', borderRadius: '100px', textDecoration: 'none', marginTop: '8px', marginLeft: '12px' },
    divider: { borderTop: '1px solid #e5e5e5', margin: '48px 0' },
    paymentSection: { background: '#f9f9f9', borderRadius: '12px', padding: '40px', margin: '32px 0' },
    paymentTitle: { fontSize: '20px', fontWeight: 500, fontFamily: 'Arial, sans-serif', marginBottom: '16px', color: '#1a1a1a' },
    paymentP: { fontSize: '15px', fontFamily: 'Arial, sans-serif', color: '#444', lineHeight: 1.7, marginBottom: '12px' },
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Support Direct Impact</div>
        <h1 style={s.h1}>Your gift walks alongside someone all the way to independence.</h1>
        <p style={s.heroP}>Every contribution funds emergency relief, vocational training, and the seed capital that changes lives permanently.</p>
        <div style={s.statRow}>
          {[['300+', 'Lives impacted'], ['$200', 'Full DIP journey'], ['100%', 'Self-funded to date']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={s.statNum}>{n}</div>
              <div style={s.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.section}>
        <div style={s.introBlock}>
          <p style={s.introP}>We found her sitting on the ground outside her home at six in the evening. She had not eaten all day. She had lost both her children and was raising her grandchildren alone. Nobody had stopped to ask if she was okay.</p>
          <p style={{ ...s.introP, marginTop: '16px' }}>We stopped.</p>
        </div>

        <div style={s.storyCard}>
          <p style={s.storyP}>That evening we brought food, cooking oil, and emergency cash. We came back the following week with four sacks of coal and the capital to restart the trading business she had always dreamed of running. No loan. No conditions.</p>
          <p style={s.storyP}>Weeks later we returned and found that her granddaughter had been admitted to hospital. She had not told us. She did not want to place the burden on us after everything we had already done. We followed her to the hospital and paid the bill.</p>
          <p style={s.storyP}>Months later, when we went back again, she was standing. She was well. She was earning. Her grandchildren were fed.</p>
          <p style={{ ...s.storyP, color: '#7B1E1E', fontStyle: 'italic', marginBottom: 0 }}>This is not an exceptional story. This is our model.</p>
        </div>

        <div style={s.videoWrap}>
          <iframe
            style={s.videoIframe}
            src="https://www.youtube.com/embed/o-DmTojeEII"
            title="Grandmother coal business full journey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={s.divider} />

        <h2 style={s.sectionTitle}>Choose how you want to help</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#555', marginBottom: '24px' }}>Every amount makes a measurable difference. Here is what your gift does on the ground.</p>

        <div style={s.donationGrid}>
		  <div style={s.donationCard}>
            <div style={s.donationAmount}>$50</div>
            <div style={s.donationLabel}>Contribute toward a full journey. Every amount gets someone closer to independence.</div>
          </div>
          <div style={s.donationCard}>
            <div style={s.donationAmount}>$70</div>
            <div style={s.donationLabel}>Emergency relief package. Food, water, and essential support for one person in crisis.</div>
          </div>
          <div style={s.donationCardFeatured}>
            <div style={s.featuredBadge}>Most impactful</div>
            <div style={s.donationAmount}>$200</div>
            <div style={s.donationLabel}>Full Dignity to Independence journey. Emergency relief through to sustainable livelihood.</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '32px 0' }}>
          <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" style={s.btnRed}>Donate by card</a>
          <a href="/bank-details" style={s.btnOutline}>Donate by bank transfer</a>
        </div>

        <div style={s.divider} />

        <div style={s.paymentSection}>
          <h3 style={s.paymentTitle}>Bank transfer</h3>
          <p style={s.paymentP}>If you prefer to donate directly by bank transfer, our account details are available on our bank details page. We accept donations in NGN, CHF, and USD.</p>
          <a href="/bank-details" style={{ ...s.btnRed, display: 'inline-block' }}>View bank details</a>
        </div>

      </div>
    </div>
  );
}


