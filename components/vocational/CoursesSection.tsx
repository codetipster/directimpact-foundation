import React from "react";

export default function CoursesSection() {
  const s = {
    sectionLabel: {
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase" as const,
      color: "#7B1E1E",
      marginBottom: "12px",
    },
    sectionH2: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#1a1a1a",
      margin: "0 0 16px",
    },
    sectionP: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#444",
      marginBottom: "16px",
    },
    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "24px",
      margin: "48px 0",
    },
    statCard: {
      background: "#fdf6f6",
      border: "1px solid #e8c8c8",
      borderRadius: "12px",
      padding: "28px 20px",
      textAlign: "center" as const,
    },
    statNumber: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#7B1E1E",
      lineHeight: 1,
      marginBottom: "8px",
    },
    statLabel: {
      fontSize: "13px",
      color: "#666",
      lineHeight: 1.4,
    },
    whatYouLearnGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      margin: "32px 0 64px",
    },
    learnCard: {
      background: "#fff",
      border: "1px solid #e4e4e4",
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    },
    learnIcon: {
      fontSize: "28px",
      marginBottom: "12px",
    },
    learnTitle: {
      fontSize: "16px",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "8px",
    },
    learnDesc: {
      fontSize: "14px",
      color: "#666",
      lineHeight: 1.6,
    },
  };

  const skills = [
    { icon: '🧵', title: 'Machine sewing', desc: 'Industrial and domestic sewing machine operation from beginner to confident use.' },
    { icon: '✂️', title: 'Cutting and pattern work', desc: 'How to measure, cut fabric accurately, and follow patterns to produce quality garments.' },
    { icon: '👗', title: 'Garment construction', desc: 'Build complete garments from start to finish, learning professional finishing techniques.' },
    { icon: '💼', title: 'Running a small business', desc: 'Pricing your work, finding customers, and managing a simple tailoring business.' },
    { icon: '🔍', title: 'Quality checking and finishing', desc: 'How to inspect your work, press and finish garments professionally, and deliver results that meet customer standards.' },
    { icon: '🤝', title: 'Business launch support', desc: 'Guided mentorship for your first three months trading, from finding your first customers to pricing, feedback, and growing with confidence.' },
  ];

  return (
    <>
      <div style={{ marginBottom: "64px" }}>
        <div style={s.sectionLabel}>The Programme</div>
        <h2 style={s.sectionH2}>Practical skills. Real independence.</h2>
        <p style={s.sectionP}>
          This programme has been on DIEF&apos;s roadmap from the beginning. We know exactly
          what it will take to deliver it: a training space, industrial sewing machines,
          and qualified trainers. We have costed it. We are ready to build it the moment
          the funding is in place.
        </p>
        <p style={s.sectionP}>
          Participants will learn professional sewing and tailoring over a structured
          programme, leaving with a marketable skill, a certificate, and the support to
          start earning. This is part of our Dignity to Independence Programme &mdash; the same
          model that has already walked hundreds of people from crisis to independence.
        </p>

        <div style={s.statsRow}>
          <div style={s.statCard}>
            <div style={s.statNumber}>500</div>
            <div style={s.statLabel}>Young people to be trained over 5 years</div>
          </div>
          <div style={s.statCard}>
            <div style={s.statNumber}>0</div>
            <div style={s.statLabel}>Cost to participants. Fully funded training.</div>
          </div>
          <div style={s.statCard}>
            <div style={s.statNumber}>1</div>
            <div style={s.statLabel}>Skill that can generate income for a lifetime</div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "64px" }}>
        <div style={s.sectionLabel}>What You Will Learn</div>
        <h2 style={s.sectionH2}>From beginner to business-ready.</h2>
        <div style={s.whatYouLearnGrid}>
          {skills.map(({ icon, title, desc }) => (
            <div key={title} style={s.learnCard}>
              <div style={s.learnIcon}>{icon}</div>
              <div style={s.learnTitle}>{title}</div>
              <div style={s.learnDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}