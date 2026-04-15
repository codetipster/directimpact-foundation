"use client";

import { useState } from "react";
import EasterRelief from "../../components/impact/EasterRelief";
import EmergencyRelief from "../../components/impact/EmergencyRelief";;
import type { CSSProperties } from "react";

export default function ImpactStories() {
  const [active, setActive] = useState<number | null>(null);

  const s: Record<string, CSSProperties> = {
    page: { fontFamily: "Arial, sans-serif", background: "#fff", color: "#1a1a1a", margin: 0, padding: 0 },
    hero: { background: "#7B1E1E", color: "#fff", padding: "72px 24px 56px", textAlign: "center" as const },
    tag: { display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "6px 16px", borderRadius: "100px", marginBottom: "20px" },
    h1: { fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.2, maxWidth: "680px", marginLeft: "auto", marginRight: "auto", fontFamily: "Georgia, serif", marginBottom: "20px" },
    heroP: { fontSize: "17px", color: "rgba(255,255,255,0.85)", maxWidth: "560px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.75 },
    section: { maxWidth: "900px", margin: "0 auto", padding: "64px 24px" },
    storiesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", margin: "48px 0" },

    card: { background: "#fff", borderRadius: "12px", padding: "28px 24px", cursor: "pointer", transition: "border 0.2s" },
    stageBadge: { display: "inline-block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", padding: "4px 12px", borderRadius: "100px", marginBottom: "14px" },

    cardTitle: { fontSize: "17px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px", lineHeight: 1.3 },
    cardSub: { fontSize: "14px", color: "#888", marginBottom: "12px" },
    cardP: { fontSize: "14px", color: "#555", lineHeight: 1.65, marginBottom: "16px" },
    readMore: { fontSize: "14px", fontWeight: 600, color: "#7B1E1E", cursor: "pointer" },

    expanded: { background: "#faf5f0", borderRadius: "12px", padding: "40px", margin: "8px 0 32px", gridColumn: "1 / -1" },
    expandedTitle: { fontSize: "22px", fontWeight: 400, fontFamily: "Georgia, serif", marginBottom: "16px", color: "#1a1a1a" },
    expandedP: { fontSize: "16px", color: "#2a2a2a", lineHeight: 1.85, marginBottom: "16px", fontFamily: "Georgia, serif" },

    videoWrap: { borderRadius: "10px", overflow: "hidden", margin: "24px 0", aspectRatio: "16/9", position: "relative", background: "#111" },
    videoIframe: { width: "100%", height: "100%", border: "none", position: "absolute", top: 0, left: 0 },

    closeBtn: { background: "transparent", border: "1px solid #ddd", borderRadius: "100px", padding: "8px 20px", fontSize: "13px", cursor: "pointer", marginTop: "16px", fontFamily: "Arial, sans-serif" },

    dipBadgeRow: { display: "flex", gap: "8px", flexWrap: "wrap", margin: "16px 0" },
    dipBadge: { padding: "6px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 600 },
  };

  const dipStages = ["Crisis response", "Stabilisation", "Economic restart", "Sustained independence"];


  const stories = [
    {
      id: 1,
      stage: 'Stage 4 complete',
      title: 'The grandmother who restarted her business',
      sub: 'Coal trading, Nigeria',
      preview: 'Found sitting on the ground having not eaten all day. Raised her grandchildren alone after losing both children. Nobody had stopped.',
      activeStages: [0,1,2,3],
      full: [
        'We found her during an unannounced community visit. She was sitting on the ground outside her home at six in the evening. She had not eaten all day. She had lost both her children and was raising her grandchildren alone.',
        'We brought food, cooking oil, and emergency cash that evening. The following week we came back with four sacks of coal and the capital to restart the trading business she had always dreamed of running. No loan. No conditions.',
        'A few weeks later on a regular follow-up visit, we discovered her granddaughter had been admitted to hospital. She had not told us. She did not want to place the burden on us after everything we had already done. We followed her to the hospital and paid the bill.',
        'Months later she was standing, earning, and her grandchildren were fed. This is not an exceptional story. This is our model.',
      ],
      videoId: 'o-DmTojeEII',
    },
    {
      id: 2,
      stage: 'Stage 4 complete',
      title: 'The woman whose sight was restored',
      sub: 'Pepper blending business, Nigeria',
      preview: 'She mentioned her eyes almost in passing. She did not think she was worth making a fuss about. We disagreed.',
      activeStages: [0,1,2,3],
      full: [
        'During a community visit we almost missed her entirely. She mentioned her eyes were troubling her almost as an afterthought. When we looked closer we realised she was in serious pain and losing her sight.',
        'She had no money for medication. She had no one who had thought to help.',
        'We arranged and funded her eye surgery and covered her ongoing medication through our standing hospital arrangement. Her sight was restored.',
        'We came back with a pepper blending machine and the capital to start a business. She is running that business today. She mentioned her situation almost as an afterthought. She did not think she was worth making a fuss about. We disagreed.',
      ],
      videoId: 'EknV0VSUmQg',
    },
    {
      id: 3,
      stage: 'Stage 4 complete',
      title: 'The man who bought coal',
      sub: 'Coal trading, Nigeria',
      preview: 'He lost his kneecap in an accident and had no means of livelihood. We gave him emergency cash to survive. He used it to buy coal to resell.',
      activeStages: [0,1,2,3],
      full: [
        'We found him through someone we had already helped. He was elderly and had lost his kneecap in an accident. No income. No mobility aid. No way forward.',
        'We gave him emergency relief, then returned two months later with a quad walking stick brought from the United Kingdom, because that level of mobility aid was not available locally.',
        'We gave him some cash to manage day to day. He used it to buy coal to resell. An elderly man with no kneecap, given money to survive, chose instead to build something.',
        'When we heard that, we went back with three sacks of coal and the capital to trade properly. The last time our team visited in February 2026, he was standing in his compound in a full traditional outfit, walking with his stick, working.',
      ],
      videoId: 'rIozP9B03vo',
    },
    {
      id: 4,
      stage: 'Referral story',
      title: 'The referral that crossed a border',
      sub: 'Cross-border reach, Cameroon',
      preview: 'One of our beneficiaries told someone else about us. That person was in Cameroon. Trust travels further than you plan for.',
      activeStages: [0,1,2],
      full: [
        'One of our beneficiaries told someone else about Direct Impact. That person was in Cameroon.',
        'She found a way to reach us. We found a way to help her.',
        'This was not planned. It was not a programme expansion. It was what happens when trust travels further than your intended reach.',
        'We include this story not as a statistic but as a signal. The model works beyond the communities where we built it.',
      ],
      videoId: null,
    },
  ];

  return (
    <>
      <div style={s.page}>
        <div style={s.hero}>
          <div style={s.tag}>Impact stories</div>
          <h1 style={s.h1}>Every story here began with someone being seen.</h1>
          <p style={s.heroP}>
            These are not exceptional cases. They are what happens when an organisation refuses to walk past and refuses to stop halfway through.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.storiesGrid}>
            {stories.map((story) => (
              <div key={story.id}>
                <div
                  style={{
                    ...s.card,
                    border: active === story.id ? "2px solid #7B1E1E" : "1px solid #e5e5e5",
                  }}
                  onClick={() => setActive(active === story.id ? null : story.id)}
                >
                  <div
                    style={{
                      ...s.stageBadge,
                      background: story.id === 4 ? "#faeaea" : "#f0f0f0",
                      color: story.id === 4 ? "#7B1E1E" : "#555",
                    }}
                  >
                    {story.stage}
                  </div>

                  <div style={s.cardTitle}>{story.title}</div>
                  <div style={s.cardSub}>{story.sub}</div>
                  <p style={s.cardP}>{story.preview}</p>

                  <div style={s.dipBadgeRow}>
                    {dipStages.map((stage, i) => {
                      const isActive = story.activeStages.includes(i);
                      return (
                        <span
                          key={stage}
                          style={{
                            ...s.dipBadge,
                            background: isActive ? "#7B1E1E" : "#f0f0f0",
                            color: isActive ? "#fff" : "#888",
                          }}
                        >
                          {stage}
                        </span>
                      );
                    })}
                  </div>

                  <div style={s.readMore}>{active === story.id ? "Close story" : "Read full story"}</div>
                </div>

                {active === story.id && (
                  <div style={s.expanded}>
                    <div style={s.expandedTitle}>{story.title}</div>

                    {story.full.map((p, i) => (
                      <p key={i} style={s.expandedP}>
                        {p}
                      </p>
                    ))}

                    {story.videoId && (
                      <div style={s.videoWrap}>
                        <iframe
                          style={s.videoIframe}
                          src={`https://www.youtube.com/embed/${story.videoId}`}
                          title={story.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    <button style={s.closeBtn} onClick={() => setActive(null)}>
                      Close story
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <EasterRelief />
	  <EmergencyRelief />
    </>
  );
}