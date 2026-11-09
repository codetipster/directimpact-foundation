"use client";

import React, { CSSProperties } from "react";
import Head from "next/head";
import TrainingHero from "../../components/TrainingHero";
import CoursesSection from "../../components/CoursesSection";
import WhatYouGet from "../../components/WhatYouGet";
import ApplicationForm from "../../components/ApplicationForm";
import FooterNote from "../../components/FooterNote";

export default function SponsoredTrainingApplication() {
  const containerStyle: CSSProperties = {
    "--crimson": "#7B1E1E",
    "--crimson-dark": "#5a1515",
    "--crimson-light": "#f5eaea",
    "--gold": "#C8972A",
    "--gold-light": "#fdf6e8",
    "--navy": "#1a3a5c",
    "--navy-light": "#e8eff7",
    "--green": "#1a6b3a",
    "--green-light": "#e8f5ee",
    "--border": "#ddd",
    "--muted": "#555",
    "--radius": "8px",
    "--shadow": "0 2px 12px rgba(0,0,0,0.08)",
    backgroundColor: "#fafafa",
    color: "#1a1a1a",
    fontFamily: "Georgia, serif",
    minHeight: "100vh",
    lineHeight: 1.6,
  } as CSSProperties;

  return (
    <div style={containerStyle}>
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

      <style jsx global>{`
        .fgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 560px) {
          .fgrid {
            grid-template-columns: 1fr;
          }
        }
        .fg-input {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 10px 14px;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .fg-input:focus {
          outline: none;
          border-color: var(--crimson);
          box-shadow: 0 0 0 3px rgba(123, 30, 30, 0.1);
        }
        .fg-input[readonly] {
          background: #f5f5f5;
          color: var(--muted);
          cursor: not-allowed;
        }
        textarea.fg-input {
          resize: vertical;
          min-height: 90px;
        }
      `}</style>

      <TrainingHero />
      <CoursesSection />
      <WhatYouGet />
      <ApplicationForm />
      <FooterNote />
    </div>
  );
}