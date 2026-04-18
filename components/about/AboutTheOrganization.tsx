'use client';

import type { CSSProperties } from "react";

export function AboutOrganization() {
  const s: Record<string, CSSProperties> = {
    section: { padding: '80px 24px', backgroundColor: '#fff', color: '#1a1a1a' },
    container: { maxWidth: '860px', margin: '0 auto' },
    label: { fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#7B1E1E', marginBottom: '16px', display: 'block', textAlign: 'center' },
    title: { fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, fontFamily: 'Georgia, serif', marginBottom: '32px', textAlign: 'center', lineHeight: 1.2 },
    introCard: { backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '16px', marginBottom: '64px', borderLeft: '4px solid #7B1E1E' },
    bodyText: { fontSize: '18px', lineHeight: 1.8, color: '#444', marginBottom: '24px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '64px' },
    box: { padding: '40px', borderRadius: '12px', height: '100%' },
    boxTitle: { fontSize: '24px', fontWeight: 600, marginBottom: '16px', fontFamily: 'Georgia, serif' },
  };

  return (
    <section style={s.section}>
      <div style={s.container}>
        <span style={s.label}>The Foundation</span>
        <h2 style={s.title}>{`Our Institutional Story`}</h2>

        <div style={s.introCard}>
          <p style={s.bodyText}>
            {`Founded in 2024, the Direct Impact Empowerment Foundation is a dual-registered NGO operating from Switzerland and Nigeria. We were established to bridge the gap between global resources and the world's most vulnerable, forgotten communities.`}
          </p>
          <p style={s.bodyText}>
            {`What sets us apart is our commitment to governance and direct action. Before launching our first project, we invested heavily in formal NGO management structures to ensure that every franc and naira is utilized with absolute transparency and maximum efficiency.`}
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h3 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>{`Built on Integrity`}</h3>
          <p style={{ ...s.bodyText, maxWidth: '700px', margin: '0 auto' }}>
            {`Currently self-funded, we have already touched lives through emergency surgeries, food relief, and economic empowerment. We don't just provide aid; we build pathways to independence.`}
          </p>
        </div>

        <div style={s.grid}>
          {/* Mission */}
          <div style={{ ...s.box, backgroundColor: '#7B1E1E', color: '#fff' }}>
            <h3 style={s.boxTitle}>{`Our Mission`}</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
              {`To empower at least 500 youth every five years through specialist training, business incubation, and micro-credit access—equipping them with the tools to build thriving careers and inclusive communities.`}
            </p>
          </div>

          {/* Vision */}
          <div style={{ ...s.box, backgroundColor: '#1a1a1a', color: '#fff' }}>
            <h3 style={s.boxTitle}>{`Our Vision`}</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
              {`A future where every young person has the opportunity to lead a meaningful life, free from poverty, contributing to a prosperous society where no one is left behind.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}