import React from 'react';

export default function DonorLanding() {
  const s: Record<string, React.CSSProperties> = {
    page: {
      fontFamily: 'Arial, sans-serif',
      background: '#fff',
      color: '#1a1a1a',
      margin: 0,
      padding: 0,
    },
    hero: {
      background: '#7B1E1E',
      color: '#fff',
      padding: '72px 24px 56px',
      textAlign: 'center' as const,
    },
    heroTag: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      padding: '6px 16px',
      borderRadius: '100px',
      marginBottom: '20px',
    },
    heroH1: {
      fontSize: 'clamp(26px, 4vw, 44px)',
      fontWeight: 400,
      lineHeight: 1.2,
      maxWidth: '680px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'Georgia, serif',
      marginBottom: '20px',
    },
    heroP: {
      fontSize: '17px',
      color: 'rgba(255,255,255,0.85)',
      maxWidth: '560px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.75,
    },
    inner: {
      maxWidth: '860px',
      margin: '0 auto',
      padding: '64px 24px',
    },
    sectionTitle: {
      fontSize: '26px',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '24px',
      fontFamily: 'Georgia, serif',
    },
    divider: {
      borderTop: '1px solid #eee',
      margin: '48px 0',
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center',
      marginBottom: '48px',
    },
    storyP: {
      fontSize: '16px',
      color: '#333',
      lineHeight: 1.85,
      marginBottom: '16px',
    },
    videoWrap: {
      position: 'relative' as const,
      paddingBottom: '56.25%',
      height: 0,
      borderRadius: '12px',
      overflow: 'hidden',
    },
    videoIframe: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0,
    },
    donationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      margin: '32px 0',
    },
    donationCard: {
      border: '2px solid #e5e5e5',
      borderRadius: '12px',
      padding: '28px 24px',
      textAlign: 'center' as const,
    },
    donationCardFeatured: {
      border: '2px solid #7B1E1E',
      borderRadius: '12px',
      padding: '28px 24px',
      textAlign: 'center' as const,
      background: '#fdf6f6',
      position: 'relative' as const,
    },
    featuredBadge: {
      position: 'absolute' as const,
      top: '-14px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#7B1E1E',
      color: '#fff',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '1px',
      textTransform: 'uppercase' as const,
      padding: '4px 14px',
      borderRadius: '100px',
      whiteSpace: 'nowrap' as const,
    },
    donationAmount: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#7B1E1E',
      marginBottom: '12px',
    },
    donationLabel: {
      fontSize: '14px',
      color: '#555',
      lineHeight: 1.6,
    },
    btnRed: {
      display: 'inline-block',
      background: '#7B1E1E',
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 40px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '8px',
    },
    btnOutline: {
      display: 'inline-block',
      background: 'transparent',
      color: '#7B1E1E',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 40px',
      borderRadius: '100px',
      textDecoration: 'none',
      border: '2px solid #7B1E1E',
      marginBottom: '8px',
    },
    paymentSection: {
      background: '#f9f4f4',
      borderRadius: '12px',
      padding: '32px',
    },
    paymentTitle: {
      fontSize: '18px',
      fontWeight: 700,
      marginBottom: '12px',
      color: '#1a1a1a',
    },
    paymentP: {
      fontSize: '15px',
      color: '#555',
      lineHeight: 1.7,
      marginBottom: '20px',
    },
    trustBar: {
      background: '#1a1a1a',
      color: '#fff',
      padding: '32px 24px',
      textAlign: 'center' as const,
    },
    trustP: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.65)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.7,
    },
  };

  return (
    <div style={s.page}>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroTag}>Support our work</div>
        <h1 style={s.heroH1}>Your donation walks with someone from crisis to independence.</h1>
        <p style={s.heroP}>
          Every amount goes directly to the people we find in Nigeria&apos;s most vulnerable communities.
          No overhead. No waste. Direct impact.
        </p>
      </section>

      <div style={s.inner}>

        {/* Story */}
        <section style={s.storyGrid}>
          <div>
            <h2 style={s.sectionTitle}>This is who you are helping</h2>
            <p style={s.storyP}>
              We found a grandmother sitting on the ground at six in the evening.
              She had not eaten all day. She had lost both her children and was raising
              her grandchildren alone. Nobody had stopped to ask if she was okay.
            </p>
            <p style={s.storyP}>
              We stopped. We brought food, cooking oil, and capital to restart her life.
              Weeks later we returned and found her granddaughter had been admitted to
              hospital. She had not told us &mdash; she did not want to place the burden on us.
              We followed her to the hospital and paid the bill.
            </p>
            <p style={s.storyP}>
              Months later, when we went back again, she was standing. She was well.
              She was earning. Her grandchildren were fed.
            </p>
            <p style={{ ...s.storyP, color: '#7B1E1E', fontStyle: 'italic' }}>
              This is not an exceptional story. This is our model.
            </p>
          </div>
          <div style={s.videoWrap}>
            <iframe
              style={s.videoIframe}
              src="https://www.youtube.com/embed/iwCeWtDPlTw"
              title="Grandmother full journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <div style={s.divider} />

        {/* Donation amounts */}
        <section id="choose-how-to-help">
          <h2 style={s.sectionTitle}>Choose how you want to help</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>
            Every amount makes a measurable difference. Here is what your gift does on the ground.
          </p>

          <div style={s.donationGrid}>
            <div style={s.donationCard}>
              <div style={s.donationAmount}>$50</div>
              <div style={s.donationLabel}>
                Contribute toward a full journey. Every amount gets someone closer to independence.
              </div>
            </div>
            <div style={s.donationCardFeatured}>
              <div style={s.featuredBadge}>Most impactful</div>
              <div style={s.donationAmount}>$200</div>
              <div style={s.donationLabel}>
                Full Dignity to Independence journey. Emergency relief through to sustainable livelihood.
              </div>
            </div>
            <div style={s.donationCard}>
              <div style={s.donationAmount}>$70</div>
              <div style={s.donationLabel}>
                Emergency relief package. Food, water, and essential support for one person in crisis.
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '32px 0' }}>
            <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" rel="noopener noreferrer" style={s.btnRed}>Donate by card</a>
            <a href="/bank-details" style={s.btnOutline}>Donate by bank transfer</a>
          </div>
        </section>

        <div style={s.divider} />

        {/* Bank transfer */}
        <section style={s.paymentSection}>
          <h3 style={s.paymentTitle}>Prefer to donate by bank transfer?</h3>
          <p style={s.paymentP}>
            We have accounts in both Nigeria and Switzerland. If you prefer to donate
            directly by bank transfer, our full account details are on our bank details page.
            We accept donations in NGN, CHF, and USD.
          </p>
          <a href="/bank-details" style={s.btnRed}>View bank details</a>
        </section>

      </div>

      {/* Trust bar */}
      <footer style={s.trustBar}>
        <p style={s.trustP}>
          Direct Impact Empowerment Foundation is registered in Nigeria and Switzerland.
          Every donation is used directly for programme delivery. We have been entirely
          self-funded since 2023 &mdash; your support changes that.
        </p>
      </footer>

    </div>
  );
}