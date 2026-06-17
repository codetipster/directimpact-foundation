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
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: '#7B1E1E',
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '12px',
    },
    btnOrange: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: '#F26522',
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '12px',
    },
    btnOutline: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: 'transparent',
      color: '#7B1E1E',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      border: '2px solid #7B1E1E',
      marginBottom: '12px',
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
    badgeContainer: {
      borderTop: '1px solid #e5e5e5',
      paddingTop: '1.5rem',
      marginTop: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
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
            {/* Donate By Card Button with ATM Card SVG Icon */}
            <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" rel="noopener noreferrer" style={s.btnRed}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Donate by card
            </a>

            {/* GlobalGiving Gateway Button */}
            <a href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/" target="_blank" rel="noopener noreferrer" style={s.btnOrange}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
              </svg>
              Donate via GlobalGiving
            </a>

            {/* Donate By Bank Transfer with Home/Bank SVG Icon */}
            <a href="/bank-details" style={s.btnOutline}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Donate by bank transfer
            </a>
          </div>
        </section>

        <div style={s.divider} />

        {/* Bank transfer section */}
        <section style={s.paymentSection}>
          <h3 style={s.paymentTitle}>Prefer to donate by bank transfer?</h3>
          <p style={s.paymentP}>
            We have accounts in both Nigeria and Switzerland. If you prefer to donate
            directly by bank transfer, our full account details are on our bank details page.
            We accept donations in NGN, CHF, and USD.
          </p>
          <a href="/bank-details" style={s.btnRed}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            View bank details
          </a>

          {/* Transformed GlobalGiving Vetted Badge Segment */}
          <div style={s.badgeContainer}>
            <a 
              href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <img
                src="/Globalgivingbadge.jpeg"
                alt="GlobalGiving Vetted Organization 2026"
                style={{ width: '70px', height: 'auto', display: 'block' }}
              />
            </a>
            <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: '1.5' }}>
              DIEF is a GlobalGiving Vetted Organization 2026.<br/>
              Your donation is secure and independently verified.
            </p>
          </div>
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