import React from "react";
import Image from "next/image";

export default function VocationalHero() {
  const s = {
    hero: {
      background: "#7B1E1E",
      borderRadius: "0 0 16px 16px",
      padding: "64px 48px",
      color: "#fff",
      marginBottom: "64px",
      textAlign: "center" as const,
    },
    heroTag: {
      display: "inline-block",
      background: "rgba(255,255,255,0.15)",
      color: "#fff",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase" as const,
      padding: "6px 16px",
      borderRadius: "100px",
      marginBottom: "20px",
    },
    heroH1: {
      fontSize: "36px",
      fontWeight: 700,
      margin: "0 0 20px",
      lineHeight: 1.3,
    },
    heroP: {
      fontSize: "17px",
      lineHeight: 1.8,
      color: "#f0dada",
      maxWidth: "580px",
      margin: "0 auto",
    },
    imagePlaceholder: {
      position: "relative" as const,
      overflow: "hidden",
      width: "100%",
      height: "320px",
      background: "#f5eeee",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "64px",
    },
  };

  return (
    <>
      <div style={s.hero}>
        <div style={s.heroTag}>Vocational Training</div>
        <h1 style={s.heroH1}>A skill in your hands is a livelihood for life.</h1>
        <p style={s.heroP}>
          DIEF&apos;s vocational training programme will equip young Nigerians with professional
          sewing and tailoring skills, and the business knowledge to turn that skill into
          a sustainable income.
        </p>
      </div>

      <div style={s.imagePlaceholder}>
        <Image
          src="/tailor.jpg"
          alt="tailor-img"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}