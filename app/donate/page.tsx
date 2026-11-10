"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import DonationHero from "../../components/donation/DonationHero";
import DonationStory from "../../components/donation/DonationStory";
import DonationImpact from "../../components/donation/DonationImpact";
import DonationOptions from "../../components/donation/DonationOptions";

export default function DonatePage() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCloseAndRedirect = () => {
    setShowThankYou(false);
    window.location.href = "https://www.directimpactempowerment.org/";
  };

  // Google Ads conversion tracking helper function on button clicks
  const handleDonateClick = (url: string) => {
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };

      const callback = () => {
        if (typeof url !== "undefined") {
          window.location.href = url;
        }
      };

      if (win.gtag) {
        win.gtag("event", "conversion", {
          send_to: "AW-18051879035/gaicCLmep7UdEPug559D",
          value: 1.0,
          currency: "USD",
          transaction_id: "",
          event_callback: callback,
        });
      } else {
        callback();
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("status") === "success" || params.get("success") === "true") {
        setShowThankYou(true);

        const win = window as unknown as {
          gtag?: (...args: unknown[]) => void;
          trackAdConversion?: () => void;
        };

        if (typeof win.gtag === "function") {
          win.gtag("event", "conversion", {
            send_to: "AW-18051879035/_4ofCMbc19YcEPug559D",
          });
        } else if (typeof win.trackAdConversion === "function") {
          win.trackAdConversion();
        }

        const timer = setTimeout(() => {
          handleCloseAndRedirect();
        }, 60000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  const s: Record<string, React.CSSProperties> = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#fff",
      color: "#1a1a1a",
      margin: 0,
      padding: 0,
      position: "relative",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "20px",
      overflowY: "auto",
    },
    modalCard: {
      background: "#FCFAF6",
      borderRadius: "8px",
      padding: "48px 36px 36px",
      maxWidth: "560px",
      width: "100%",
      textAlign: "center" as const,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
      position: "relative" as const,
      border: "1px solid #EAE5D9",
    },
    closeBtn: {
      position: "absolute" as const,
      top: "16px",
      right: "16px",
      background: "transparent",
      border: "none",
      fontSize: "22px",
      cursor: "pointer",
      color: "#888888",
      lineHeight: 1,
      padding: "8px",
      borderRadius: "50%",
    },
    heartCircle: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "1px solid #C8972A",
      color: "#C8972A",
      fontSize: "18px",
      marginBottom: "20px",
    },
    thankYouTitle: {
      fontFamily: "Georgia, serif",
      fontSize: "38px",
      color: "#1A2E26",
      margin: "0 0 16px",
      fontWeight: 400,
    },
    thankYouSub: {
      fontSize: "15px",
      color: "#4A4A4A",
      lineHeight: 1.6,
      margin: "0 auto 24px",
      maxWidth: "440px",
    },
    goldDivider: {
      width: "48px",
      height: "3px",
      backgroundColor: "#C8972A",
      margin: "0 auto 28px",
      borderRadius: "2px",
    },
    quoteBox: {
      background: "#FFFFFF",
      border: "1px solid #EAE5D9",
      borderRadius: "4px",
      padding: "20px 24px",
      textAlign: "left" as const,
      position: "relative" as const,
      display: "flex",
      gap: "16px",
      marginBottom: "32px",
    },
    quoteBar: {
      width: "3px",
      backgroundColor: "#C8972A",
      borderRadius: "2px",
      flexShrink: 0,
    },
    quoteText: {
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      fontSize: "15px",
      color: "#2A3B32",
      lineHeight: 1.6,
      margin: "0 0 12px",
    },
    quoteAuthor: {
      fontSize: "13px",
      color: "#777777",
      margin: 0,
    },
    stageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "8px",
      marginBottom: "32px",
      textAlign: "center" as const,
    },
    stageActive: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 700,
      color: "#1A2E26",
    },
    stageItem: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 500,
      color: "#888888",
    },
    stageLineActive: {
      width: "100%",
      height: "3px",
      backgroundColor: "#C8972A",
      marginBottom: "8px",
      borderRadius: "2px",
    },
    stageLine: {
      width: "100%",
      height: "2px",
      backgroundColor: "#E5E0D8",
      marginBottom: "8px",
      borderRadius: "2px",
    },
    seeGiftBtn: {
      display: "inline-block",
      color: "#C8972A",
      fontSize: "15px",
      fontWeight: 600,
      textDecoration: "underline",
      textUnderlineOffset: "6px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "8px 16px",
    },
    modalFooter: {
      fontSize: "11px",
      color: "#8A8A8A",
      marginTop: "28px",
      lineHeight: 1.6,
    },
    inner: {
      maxWidth: "920px",
      margin: "0 auto",
      padding: "64px 24px",
    },
    divider: {
      borderTop: "1px solid #eee",
      margin: "48px 0",
    },
    trustBar: {
      background: "#1a1a1a",
      color: "#fff",
      padding: "32px 24px",
      textAlign: "center" as const,
    },
    trustP: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.65)",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.7,
    },
  };

  return (
    <div style={s.page}>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18051879035"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18051879035');
            `,
          }}
        />
      </Head>

      {/* Thank You Modal Overlay */}
      {showThankYou && (
        <div style={s.modalOverlay}>
          <div style={s.modalCard}>
            <button 
              onClick={handleCloseAndRedirect} 
              style={s.closeBtn}
              title="Close and return to home page"
              aria-label="Close"
            >
              ✕
            </button>

            <div style={s.heartCircle}>
              <span>♡</span>
            </div>

            <h2 style={s.thankYouTitle}>Thank you.</h2>
            
            <p style={s.thankYouSub}>
              Your gift is already at work. It moves a family one stage closer to independence, not just through today.
            </p>

            <div style={s.goldDivider} />

            <div style={s.quoteBox}>
              <div style={s.quoteBar} />
              <div>
                <p style={s.quoteText}>
                  &quot;We followed her to the hospital and paid the bill. Months later, she was standing. She was well. She was earning.&quot;
                </p>
                <p style={s.quoteAuthor}>
                  This is not an exceptional story. This is our model.
                </p>
              </div>
            </div>

            <div style={s.stageGrid}>
              <div style={s.stageActive}>
                <div style={s.stageLineActive} />
                <span>Crisis response</span>
              </div>
              <div style={s.stageItem}>
                <div style={s.stageLine} />
                <span>Stabilisation</span>
              </div>
              <div style={s.stageItem}>
                <div style={s.stageLine} />
                <span>Economic restart</span>
              </div>
              <div style={s.stageItem}>
                <div style={s.stageLine} />
                <span>Independence</span>
              </div>
            </div>

            <div>
              <a
                href="https://www.globalgiving.org/projects/a-christmas-lifeline-for-220-nigerian-families/"
                target="_blank"
                rel="noopener noreferrer"
                style={s.seeGiftBtn}
              >
                See where your gift goes
              </a>
            </div>

            <div style={s.modalFooter}>
              <p style={{ margin: "0 0 4px" }}>
                Direct Impact Empowerment Foundation · CAC/IT/7420254 · CHE-415.427.651
              </p>
              <p style={{ margin: 0 }}>
                Vetted Organisation on GlobalGiving
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modularized Sections */}
      <DonationHero />

      <div style={s.inner}>
        <DonationStory />
        <div style={s.divider} />
        <DonationImpact />
        <DonationOptions onDonateClick={handleDonateClick} />
      </div>

      {/* Footer */}
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