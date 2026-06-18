import React from 'react';
import Image from 'next/image';

export default function HomePageAndAbout() {
  const s: Record<string, React.CSSProperties> = {
    page: {
      fontFamily: 'Arial, sans-serif',
      background: '#fff',
      color: '#1a1a1a',
      margin: 0,
      padding: 0,
    },
    heroSection: {
      background: '#7B1E1E',
      color: '#fff',
      padding: '80px 24px',
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
      marginBottom: '24px',
    },
    heroH1: {
      fontSize: 'clamp(28px, 5vw, 50px)',
      fontWeight: 400,
      lineHeight: 1.2,
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'Georgia, serif',
      marginBottom: '24px',
    },
    heroP: {
      fontSize: '18px',
      color: 'rgba(255,255,255,0.85)',
      maxWidth: '580px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.75,
      marginBottom: '36px',
    },
    heroBtn: {
      display: 'inline-block',
      background: '#fff',
      color: '#7B1E1E',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 40px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '8px',
    },
    heroBtnOutline: {
      display: 'inline-block',
      background: 'transparent',
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 40px',
      borderRadius: '100px',
      textDecoration: 'none',
      border: '2px solid rgba(255,255,255,0.5)',
      marginBottom: '8px',
    },
    dipSection: {
      background: '#f9f4f4',
      padding: '72px 24px',
    },
    dipInner: {
      maxWidth: '880px',
      margin: '0 auto',
    },
    dipLabel: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '12px',
      textAlign: 'center' as const,
    },
    dipTitle: {
      fontSize: 'clamp(22px, 3vw, 34px)',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '16px',
      textAlign: 'center' as const,
      lineHeight: 1.3,
    },
    dipSub: {
      fontSize: '17px',
      color: '#555',
      maxWidth: '600px',
      margin: '0 auto 48px',
      lineHeight: 1.75,
      textAlign: 'center' as const,
    },
    dipGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
    },
    dipCard: {
      background: '#fff',
      borderRadius: '12px',
      padding: '28px 24px',
      borderTop: '4px solid #7B1E1E',
    },
    dipStage: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '8px',
    },
    dipCardTitle: {
      fontSize: '17px',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '10px',
    },
    dipCardDesc: {
      fontSize: '14px',
      color: '#666',
      lineHeight: 1.7,
    },
    statsSection: {
      background: '#7B1E1E',
      padding: '56px 24px 48px 24px',
    },
    statsInner: {
      maxWidth: '880px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '32px',
      textAlign: 'center' as const,
    },
    statNumber: {
      fontSize: '42px',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1,
      marginBottom: '8px',
    },
    statLabel: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 1.5,
    },
    badgesBar: {
      backgroundColor: '#F5F0EA',
      padding: '1.2rem 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap' as const,
      borderTop: '2px solid #e8ddd4',
      borderBottom: '1px solid #e8ddd4',
    },
    badgesTextRed: {
      fontSize: '14px',
      color: '#7B1E1E',
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.4,
    },
    badgeLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
    },
    badgeTitle: {
      fontSize: '13px',
      fontWeight: 600,
      color: '#3a3a2a',
      margin: 0,
    },
    badgeSubtitle: {
      fontSize: '11px',
      color: '#777',
      margin: 0,
    },
    badgeDivider: {
      width: '1px',
      height: '32px',
      background: '#dcd3ca',
    },
    badgeFootnote: {
      fontSize: '12px',
      color: '#8a8279',
      margin: 0,
      fontWeight: 500,
    },
    storySection: {
      padding: '72px 24px',
    },
    storyInner: {
      maxWidth: '860px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '64px',
      alignItems: 'center',
    },
    storyLabel: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '12px',
    },
    storyH2: {
      fontSize: 'clamp(22px, 3vw, 32px)',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '24px',
      lineHeight: 1.3,
    },
    storyP: {
      fontSize: '16px',
      color: '#444',
      lineHeight: 1.85,
      marginBottom: '16px',
    },
    storyQuote: {
      borderLeft: '3px solid #7B1E1E',
      paddingLeft: '20px',
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      fontStyle: 'italic' as const,
      color: '#2a2a2a',
      lineHeight: 1.65,
      margin: '24px 0',
    },
    storyBtn: {
      display: 'inline-block',
      background: '#7B1E1E',
      color: '#fff',
      fontWeight: 600,
      fontSize: '14px',
      padding: '14px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginTop: '8px',
    },
    storyVideoBox: {
      background: '#000',
      borderRadius: '12px',
      aspectRatio: '16/9' as const,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    selfFundedSection: {
      background: '#1a1a1a',
      color: '#fff',
      padding: '80px 24px',
    },
    selfFundedInner: {
      maxWidth: '860px',
      margin: '0 auto',
    },
    selfFundedTag: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
      marginBottom: '16px',
    },
    selfFundedH2: {
      fontSize: 'clamp(24px, 4vw, 38px)',
      fontWeight: 400,
      fontFamily: 'Georgia, serif',
      marginBottom: '32px',
      lineHeight: 1.3,
      maxWidth: '680px',
    },
    selfFundedGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      marginTop: '48px',
    },
    selfFundedP: {
      fontSize: '16px',
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 1.85,
      marginBottom: '16px',
    },
    selfFundedHighlight: {
      fontSize: '20px',
      color: '#fff',
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic' as const,
      lineHeight: 1.6,
      borderLeft: '3px solid #7B1E1E',
      paddingLeft: '24px',
    },
    selfFundedBtn: {
      display: 'inline-block',
      background: '#7B1E1E',
      color: '#fff',
      fontWeight: 600,
      fontSize: '14px',
      padding: '14px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginTop: '32px',
    },
    ctaSection: {
      background: '#f9f4f4',
      padding: '72px 24px',
      textAlign: 'center' as const,
    },
    ctaH2: {
      fontSize: 'clamp(22px, 3vw, 34px)',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '16px',
    },
    ctaP: {
      fontSize: '17px',
      color: '#555',
      maxWidth: '520px',
      margin: '0 auto 32px',
      lineHeight: 1.75,
    },
    ctaBtn: {
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
    ctaBtnOutline: {
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
  };

  const dipStages = [
    { stage: 'Stage 01', title: 'Crisis response', desc: 'Emergency relief delivered directly. Food, money and immediate support for people in crisis.' },
    { stage: 'Stage 02', title: 'Stabilisation', desc: 'Medical care and basic needs secured before anything else moves forward.' },
    { stage: 'Stage 03', title: 'Economic restart', desc: 'Seed capital, equipment and training tailored to each person and their circumstances.' },
    { stage: 'Stage 04', title: 'Sustained independence', desc: 'Regular follow-up visits and ongoing support until the person is fully self-sufficient.' },
  ];

  const stats = [
    { number: '300+', label: 'People reached to date' },
    { number: '$70', label: 'Emergency relief package' },
    { number: '$200', label: 'Full DIP journey per person' },
    { number: '2', label: 'Countries registered' },
  ];

  return (
    <div style={s.page}>
      <section style={s.heroSection}>
        <div style={s.heroTag}>Direct Impact Empowerment Foundation</div>
        <h1 style={s.heroH1}>We go to the people every other system has missed.</h1>
        <p style={s.heroP}>
          Registered in Switzerland and Nigeria, we walk alongside vulnerable people
          from the moment of crisis all the way to sustained independence.
          Not charity. A pathway.
        </p>
        <div>
          <a href="/donate" style={s.heroBtn}>Support our work</a>
          <a href="/impact" style={s.heroBtnOutline}>See the impact</a>
        </div>
      </section>

      <section style={s.dipSection}>
        <div style={s.dipInner}>
          <div style={s.dipLabel}>Our model</div>
          <h2 style={s.dipTitle}>The Dignity to Independence Pathway</h2>
          <p style={s.dipSub}>
            Most organisations choose between emergency relief and long-term development.
            We refuse that choice. Our four-stage model does both.
          </p>
          <div style={s.dipGrid}>
            {dipStages.map((item) => (
              <div key={item.stage} style={s.dipCard}>
                <div style={s.dipStage}>{item.stage}</div>
                <h3 style={s.dipCardTitle}>{item.title}</h3>
                <p style={s.dipCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={s.statsSection}>
        <div style={s.statsInner}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={s.statNumber}>{stat.number}</div>
              <div style={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Verification Badges Section */}
      <div style={s.badgesBar}>
        <p style={s.badgesTextRed}>
          Trusted and verified<br />on:
        </p>

        <a
          href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/"
          target="_blank"
          rel="noopener noreferrer"
          style={s.badgeLink}
        >
          <Image
            src="/images/globalgiving-vetted-2026.png"
            alt="GlobalGiving Vetted Organization 2026"
            width={40}
            height={40}
            style={{ width: '40px', height: 'auto', objectFit: 'contain' }}
          />
          <div>
            <p style={s.badgeTitle}>GlobalGiving 2026</p>
            <p style={s.badgeSubtitle}>Vetted organization</p>
          </div>
        </a>

        <div style={s.badgeDivider} />

        <a
          href="https://benevity.com"
          target="_blank"
          rel="noopener noreferrer"
          style={s.badgeLink}
        >
          <Image
            src="/images/benevity-logo.png"
            alt="Listed on Benevity"
            width={40}
            height={40}
            style={{ width: '40px', height: 'auto', objectFit: 'contain' }}
          />
          <div>
            <p style={{ ...s.badgeTitle, color: '#1a6e3c' }}>Listed on Benevity</p>
            <p style={s.badgeSubtitle}>Corporate giving portal</p>
          </div>
        </a>

        <div style={s.badgeDivider} />

        <p style={s.badgeFootnote}>
          Registered in Nigeria and Switzerland
        </p>
      </div>

      <section style={s.storySection}>
        <div style={s.storyInner}>
          <div>
            <div style={s.storyLabel}>A story that stayed with us</div>
            <h2 style={s.storyH2}>She had not eaten all day. Nobody had stopped to ask.</h2>
            <p style={s.storyP}>
              We found a grandmother sitting on the ground at six in the evening.
              She had lost both her children and was raising her grandchildren alone.
              We stopped. We brought food, cooking oil, and capital to restart her life.
            </p>
            <div style={s.storyQuote}>
              &quot;Months later she was standing. She was well. She was earning.&quot;
            </div>
            <a href="/impact" style={s.storyBtn}>Read more stories</a>
          </div>
          <div style={s.storyVideoBox}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iwCeWtDPlTw"
              title="Grandmother case study"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section style={s.selfFundedSection}>
        <div style={s.selfFundedInner}>
          <div style={s.selfFundedTag}>About us</div>
          <h2 style={s.selfFundedH2}>
            We are self-funded. Not out of choice, but out of default.
          </h2>
          <div style={s.selfFundedGrid}>
            <div>
              <p style={s.selfFundedP}>
                Looking away has always been the most difficult thing to do. And so,
                before we helped a single person, we invested in doing this properly.
                Formal NGO training for our CEO. Registrations in two countries.
                A hospital billing arrangement so that nobody we find goes untreated.
              </p>
              <p style={s.selfFundedP}>
                Three years of self-funding. Hard years. Years that continue.
                But every year has produced people who are no longer where we found them.
              </p>
              <a href="/our-story" style={s.selfFundedBtn}>Our full story</a>
            </div>
            <div>
              <div style={s.selfFundedHighlight}>
                &quot;If you have ever found it hard to look away, you already understand why we exist.&quot;
              </div>
              <p style={{ ...s.selfFundedP, marginTop: '24px', fontSize: '14px' }}>
                Founder, Direct Impact Empowerment Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={s.ctaSection}>
        <h2 style={s.ctaH2}>Every $200 funds one person&apos;s full journey</h2>
        <p style={s.ctaP}>
          From the day we find them to the day they are standing on their own.
          No donation is too small. Every contribution moves someone one step closer.
        </p>
        <div>
          <a href="/donate" style={s.ctaBtn}>Donate now</a>
          <a href="/partners" style={s.ctaBtnOutline}>Partner with us</a>
        </div>
      </section>
    </div>
  );
}