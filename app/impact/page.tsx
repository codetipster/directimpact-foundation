"use client";

import React from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurImpactPage() {
  const s: Record<string, CSSProperties> = {
    page: { fontFamily: "Arial, sans-serif", background: "#fff", color: "#1a1a1a", margin: 0, padding: 0 },

    // Hero
    heroSection: { background: "#7B1E1E", color: "#fff", padding: "80px 24px", textAlign: "center" },
    heroTag: {
      display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff",
      fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase",
      padding: "6px 16px", borderRadius: "100px", marginBottom: "24px",
    },
    heroH1: {
      fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.2,
      maxWidth: "700px", marginLeft: "auto", marginRight: "auto",
      fontFamily: "Georgia, serif", marginBottom: "20px",
    },
    heroP: {
      fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.85)",
      maxWidth: "580px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.75,
    },

    section: { maxWidth: "960px", margin: "0 auto", padding: "72px 24px" },
    sectionTag: {
      fontSize: "12px", fontWeight: 700, color: "#7B1E1E", textTransform: "uppercase",
      letterSpacing: "0.08em", marginBottom: "12px", textAlign: "center",
    },
    sectionTitle: {
      fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 400, fontFamily: "Georgia, serif",
      textAlign: "center", marginBottom: "48px", color: "#1a1a1a",
    },
    subSectionTitle: {
      fontSize: "20px", fontWeight: 600, fontFamily: "Georgia, serif",
      marginBottom: "24px", color: "#1a1a1a", borderBottom: "2px solid #7B1E1E15",
      paddingBottom: "8px",
    },

    // Video Stories Grid (3 items row)
    videoGrid: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px",
      marginBottom: "56px",
    },

    // Photo Stories Grid (2 items row)
    photoGrid: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px",
    },

    card: {
      border: "1px solid #eee", borderRadius: "14px", overflow: "hidden", background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column",
    },
    videoIframeWrap: {
      width: "100%", aspectRatio: "16 / 9", background: "#000", overflow: "hidden",
    },
    videoIframe: {
      width: "100%", height: "100%", border: "none", display: "block",
    },
    cardImageWrap: {
      width: "100%", aspectRatio: "16 / 9", background: "#f2ede9", overflow: "hidden", position: "relative",
    },
    cardImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    cardBody: { padding: "20px 22px 24px", display: "flex", flexDirection: "column", flexGrow: 1 },
    cardStage: {
      display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#7B1E1E",
      textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px",
    },
    cardName: { fontSize: "18px", fontWeight: 700, fontFamily: "Georgia, serif", marginBottom: "10px", color: "#1a1a1a" },
    cardText: { fontSize: "14.5px", color: "#444", lineHeight: 1.7, flexGrow: 1 },

    // Financial transparency
    trustSection: { background: "#f9f4f1", padding: "72px 24px" },
    trustInner: { maxWidth: "780px", margin: "0 auto" },
    statsRow: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "16px", marginBottom: "40px",
    },
    statCard: { background: "#fff", borderRadius: "12px", padding: "20px", textAlign: "center" },
    statNumber: { fontSize: "26px", fontWeight: 700, color: "#7B1E1E", fontFamily: "Georgia, serif" },
    statLabel: { fontSize: "13px", color: "#666", marginTop: "4px" },
    trustItem: { display: "flex", gap: "14px", marginBottom: "22px", alignItems: "flex-start" },
    trustDot: {
      width: "8px", height: "8px", borderRadius: "50%", background: "#7B1E1E",
      marginTop: "7px", flexShrink: 0,
    },
    trustText: { fontSize: "15px", color: "#333", lineHeight: 1.7 },
    forwardNote: {
      marginTop: "28px", fontSize: "14px", color: "#666", lineHeight: 1.7,
      borderTop: "1px solid #e5ddd6", paddingTop: "24px",
    },

    // CTA
    ctaBlock: { textAlign: "center", padding: "64px 24px" },
    ctaBtn: {
      display: "inline-block", background: "#7B1E1E", color: "#fff", fontWeight: 600,
      fontSize: "15px", padding: "16px 40px", borderRadius: "100px", textDecoration: "none",
      marginTop: "16px",
    },
  };

  const videoStories = [
    {
      name: "An elderly man, restored",
      stage: "Crisis to Livelihood",
      text: "After losing his kneecap in an accident, we gave him emergency cash to survive. He used it to buy coal to resell. When we heard, we came back with three sacks of coal and the capital to trade properly, the conditions to show us who he already was.",
      videoId: "https:X_b-mH6ExI8",
    },
    {
      name: "A grandmother, provided for",
      stage: "Sustained Independence",
      text: "Raising her grandchildren alone, she now runs a coal business built from the same model: relief first, then the capital and conditions to stand on her own.",
      videoId: "A0Pi8BNYuwE",
    },
    {
      name: "A pepper blending business, restarted",
      stage: "Economic Restart",
      text: "Supported through eye surgery, she moved from crisis into her own pepper blending trade, a small business she now runs and grows on her own terms.",
      videoId: "OmFWL_bqfGE",
    },
  ];

  const photoStories = [
    {
      name: "Romoke",
      stage: "Economic Restart",
      text: "Empowered as a vendor in July 2023, Romoke has supplied every Christmas distribution since, turning early support into a lasting trade relationship with DIEF.",
      image: "/Romoke-story.png",
    },
    {
      name: "A sponsored trainee",
      stage: "Skills to Employment",
      text: '"I have learnt so much over these past weeks. The number of interviews I have had is incredible. I was actually offered a role, which was very encouraging, but unfortunately I could not accept it because of the distance. I am still very optimistic, and I am grateful for the sponsorship."',
      image: "/digital-training.png",
    },
  ];

  return (
    <div style={s.page}>
      {/* HERO */}
      <div style={s.heroSection}>
        <div style={s.heroTag}>Our Impact</div>
        <h1 style={s.heroH1}>Real people. Real numbers. Real accountability.</h1>
        <p style={s.heroP}>
          Every story below is a real beneficiary of the Dignity to Independence Programme,
          shared with their consent. Every figure below is checked against our GlobalGiving
          reporting and our accounts.
        </p>
      </div>

      {/* SUCCESS STORIES */}
      <div style={s.section}>
        <div style={s.sectionTag}>Success Stories</div>
        <div style={s.sectionTitle}>From crisis to independence</div>

        {/* 1. VIDEO JOURNEYS (3 Cards in one row) */}
        <div style={s.subSectionTitle}>Video Journeys</div>
        <div style={s.videoGrid}>
          {videoStories.map((story, i) => (
            <div key={i} style={s.card}>
              <div style={s.videoIframeWrap}>
                <iframe
                  style={s.videoIframe}
                  src={`https://www.youtube.com/embed/${story.videoId}`}
                  title={story.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div style={s.cardBody}>
                <div style={s.cardStage}>{story.stage}</div>
                <div style={s.cardName}>{story.name}</div>
                <p style={s.cardText}>{story.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. COMMUNITY & TRAINEE STORIES (2 Cards in one row) */}
        <div style={s.subSectionTitle}>Community & Trainee Stories</div>
        <div style={s.photoGrid}>
          {photoStories.map((story, i) => (
            <div key={i} style={s.card}>
              <div style={s.cardImageWrap}>
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={s.cardBody}>
                <div style={s.cardStage}>{story.stage}</div>
                <div style={s.cardName}>{story.name}</div>
                <p style={s.cardText}>{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINANCIAL TRANSPARENCY */}
      <div style={s.trustSection}>
        <div style={s.trustInner}>
          <div style={s.sectionTag}>Financial Transparency</div>
          <div style={s.sectionTitle}>Where every dollar goes</div>

          <div style={s.statsRow}>
            <div style={s.statCard}>
              <div style={s.statNumber}>$200</div>
              <div style={s.statLabel}>Funds one person&apos;s full journey, crisis to independence</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNumber}>$70</div>
              <div style={s.statLabel}>Funds one emergency relief package</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNumber}>2</div>
              <div style={s.statLabel}>Registered jurisdictions: Nigeria and Switzerland</div>
            </div>
          </div>

          <div style={s.trustItem}>
            <div style={s.trustDot} />
            <div style={s.trustText}>
              <strong>Dual registration.</strong> Direct Impact Empowerment Foundation is
              registered in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651).
            </div>
          </div>
          <div style={s.trustItem}>
            <div style={s.trustDot} />
            <div style={s.trustText}>
              <strong>Independently vetted.</strong> We hold GlobalGiving&apos;s Vetted Organisation,
              Top-Ranked Organisation, and Effective Organisation badges, third-party verification
              of how funds are used and tracked.
            </div>
          </div>
          <div style={s.trustItem}>
            <div style={s.trustDot} />
            <div style={s.trustText}>
              <strong>Named accountability.</strong> Ayodele Ajanaku, an ACCA-certified accountant,
              serves as our accountant.
            </div>
          </div>
          <div style={s.trustItem}>
            <div style={s.trustDot} />
            <div style={s.trustText}>
              <strong>Live reporting today.</strong> Every project on GlobalGiving carries its own
              public updates and reporting, view our current campaigns directly on our{" "}
              <Link href="/globalgiving" style={{ color: "#7B1E1E", fontWeight: 600 }}>
                GlobalGiving page
              </Link>.
            </div>
          </div>

          <div style={s.forwardNote}>
            As we grow, we are working toward formal annual financial reporting and additional
            certifications, including ZEWO in Switzerland. Every donation today is already tracked
            and reported through GlobalGiving&apos;s independent verification.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={s.ctaBlock}>
        <p style={{ fontSize: "16px", color: "#555" }}>Want to be part of the next story?</p>
        <Link href="/partners" style={s.ctaBtn}>
          See how you can partner with us
        </Link>
      </div>
    </div>
  );
}