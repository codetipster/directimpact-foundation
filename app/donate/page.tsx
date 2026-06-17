"use client";

import React from 'react';

export default function DonorLanding() {
  const s: Record<string, React.CSSProperties> = {
    // Fallback/existing layout container styles
    page: {
      padding: '24px',
      fontFamily: 'system-ui, sans-serif',
    },
    badgeContainer: {
      marginTop: '40px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },
    btnRed: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: '#DC2626', // Standard crisp red
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '12px',
    },
    // Your updated official GlobalGiving button styling
    btnOrange: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: '#E37F1C', // Official GlobalGiving orange
      color: '#fff',
      fontWeight: 600,
      fontSize: '15px',
      padding: '16px 32px',
      borderRadius: '100px',
      textDecoration: 'none',
      marginRight: '12px',
      marginBottom: '12px',
    },
  };

  return (
    <div style={s.page}>
      {/* ... Keep your existing Hero and Story sections here ... */}

      {/* Donation Buttons */}
      <div style={{ textAlign: 'center', margin: '32px 0' }}>
        <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" rel="noopener noreferrer" style={s.btnRed}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          Donate by card
        </a>

        {/* GlobalGiving Button */}
        <a href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/" target="_blank" rel="noopener noreferrer" style={s.btnOrange}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
          </svg>
          Donate via GlobalGiving
        </a>
      </div>

      {/* ... Keep any remaining lower content sections here ... */}

      {/* Badge Section */}
      <div style={s.badgeContainer}>
        <a 
          href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <img
            src="/Globalgivingbadge.jpeg"
            alt="GlobalGiving Vetted Organization 2026"
            style={{ width: '70px', height: 'auto', display: 'block' }}
            onError={(e) => { 
              e.currentTarget.style.display = 'none'; 
              console.error("Badge image not found in public folder"); 
            }}
          />
        </a>
        <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: '1.5' }}>
          DIEF is a GlobalGiving Vetted Organization 2026.<br/>
          Your donation is secure and independently verified.
        </p>
      </div>
    </div>
  );
}