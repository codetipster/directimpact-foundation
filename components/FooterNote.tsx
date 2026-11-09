import React from "react";
import Link from "next/link";

export default function FooterNote() {
  return (
    <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 52px", textAlign: "center" }}>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>
        This programme is part of DIEF&apos;s <strong>Dignity to Independence Programme (DIP)</strong>. Direct Impact Empowerment Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651), independently vetted and Top-Ranked by{" "}
        <Link href="https://www.globalgiving.org/projects/76936" target="_blank" rel="noopener noreferrer" style={{ color: "var(--crimson)", textDecoration: "none" }}>
          GlobalGiving
        </Link>.
      </p>
    </div>
  );
}