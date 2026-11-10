import React from "react";

export default function DonationStory() {
  const s = {
    sectionTitle: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "24px",
      fontFamily: "Georgia, serif",
    },
    storyGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "48px",
      alignItems: "center",
      marginBottom: "48px",
    },
    storyP: {
      fontSize: "16px",
      color: "#333",
      lineHeight: 1.85,
      marginBottom: "16px",
    },
    videoWrap: {
      position: "relative" as const,
      paddingBottom: "56.25%",
      height: 0,
      borderRadius: "12px",
      overflow: "hidden",
    },
    videoIframe: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0,
    },
  };

  return (
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
          hospital. She had not told us, she did not want to place the burden on us.
          We followed her to the hospital and paid the bill.
        </p>
        <p style={s.storyP}>
          Months later, when we went back again, she was standing. She was well.
          She was earning. Her grandchildren were fed.
        </p>
        <p style={{ ...s.storyP, color: "#7B1E1E", fontStyle: "italic" }}>
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
  );
}