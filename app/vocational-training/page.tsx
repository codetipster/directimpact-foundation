"use client";

import Head from "next/head";
import VocationalHero from "../../components/vocational/VocationalHero";
import CoursesSection from "../../components/vocational/CoursesSection";
import VocationalRoadmap from "../../components/vocational/VocationalRoadmap";
import VocationalApplicationForm from "../../components/vocational/VocationalApplicationForm";

export default function VocationalTraining() {
  const pageStyle = {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    color: "#1a1a1a",
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 24px 80px",
  };

  return (
    <div style={pageStyle}>
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

      <VocationalHero />
      <CoursesSection />
      <VocationalRoadmap />
      <VocationalApplicationForm />
    </div>
  );
}