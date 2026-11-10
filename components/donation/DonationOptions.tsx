import React from "react";
import Image from "next/image";

interface DonationOptionsProps {
  onDonateClick: (url: string) => void;
}

export default function DonationOptions({ onDonateClick }: DonationOptionsProps) {
  const s = {
    btnRed: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      background: "#7B1E1E",
      color: "#fff",
      fontWeight: 600,
      fontSize: "15px",
      padding: "16px 40px",
      borderRadius: "100px",
      textDecoration: "none",
      marginRight: "12px",
      marginBottom: "8px",
      cursor: "pointer",
      border: "none",
    },
    btnOrange: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      background: "#B2BB1E",
      color: "#fff",
      fontWeight: 600,
      fontSize: "15px",
      padding: "16px 40px",
      borderRadius: "100px",
      textDecoration: "none",
      marginRight: "12px",
      marginBottom: "8px",
      cursor: "pointer",
      border: "none",
    },
    btnOutline: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      background: "transparent",
      color: "#7B1E1E",
      fontWeight: 600,
      fontSize: "15px",
      padding: "16px 40px",
      borderRadius: "100px",
      textDecoration: "none",
      border: "2px solid #7B1E1E",
      marginBottom: "8px",
    },
    paymentSection: {
      background: "#f9f4f4",
      borderRadius: "12px",
      padding: "32px",
    },
    paymentTitle: {
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "12px",
      color: "#1a1a1a",
    },
    paymentP: {
      fontSize: "15px",
      color: "#555",
      lineHeight: 1.7,
      marginBottom: "20px",
    },
  };

  return (
    <>
      {/* Buttons Selection Block with Conversion Tracking */}
      <div style={{ textAlign: "center", margin: "32px 0 16px" }}>
        <button
          onClick={() => onDonateClick("https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00")}
          style={s.btnRed}
        >
          <span>💳</span> Donate by card
        </button>
        
        <button
          onClick={() => onDonateClick("https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/")}
          style={s.btnOrange}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
          </svg>
          Donate via GlobalGiving
        </button>

        <button
          onClick={() => onDonateClick("/bank-details")}
          style={s.btnOutline}
        >
          <span>🏡</span> Donate by bank transfer
        </button>
      </div>

      {/* Employer Matching Callout */}
      <div style={{
        borderTop: "1px solid #e5e5e5",
        paddingTop: "1.5rem",
        marginTop: "1.5rem",
        marginBottom: "2rem"
      }}>
        <p style={{
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
          margin: "0 0 12px",
        }}>
          Verified and trusted on
        </p>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}>
          <a
            href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#f5f5f5",
              padding: "8px 14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/vetted.jpeg"
              alt="GlobalGiving Vetted Organization 2026"
              width={36}
              height={36}
              style={{ width: "36px", height: "auto" }}
              unoptimized
            />
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#333" }}>
              GlobalGiving 2026
            </span>
          </a>

          <a
            href="https://benevity.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#f5f5f5",
              padding: "8px 14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/benevity-logo.png"
              alt="Listed on Benevity"
              width={28}
              height={28}
              style={{ width: "28px", height: "auto" }}
              unoptimized
            />
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#333" }}>
              Listed on Benevity
            </span>
          </a>
        </div>

        <p style={{
          fontSize: "13px",
          color: "#111",
          fontWeight: 600,
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "650px",
          lineHeight: 1.6,
          background: "#fdf6f6",
          padding: "12px 20px",
          borderRadius: "8px",
          border: "1px dashed #7B1E1E"
        }}>
          Does your employer offer donation matching? Search{' '}
          <strong style={{ color: "#7B1E1E", fontWeight: 700 }}>Direct Impact Empowerment Foundation</strong>{' '}
          on your company&apos;s Benevity portal.
        </p>
      </div>

      {/* Bank transfer section */}
      <section style={s.paymentSection}>
        <h3 style={s.paymentTitle}>Prefer to donate by bank transfer?</h3>
        <p style={s.paymentP}>
          We have accounts in both Nigeria and Switzerland. If you prefer to donate
          directly by bank transfer, our full account details are on our bank details page.
          We accept donations in NGN, CHF, and USD.
        </p>
        <button
          onClick={() => onDonateClick("/bank-details")}
          style={s.btnRed}
        >
          <span>🏡</span> View bank details
        </button>
      </section>
    </>
  );
}