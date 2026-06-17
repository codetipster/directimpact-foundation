import React from 'react';

export default function DonorLanding() {
  const s: Record<string, React.CSSProperties> = {
    // ... (keep all previous styles the same, update only btnOrange)
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
    // ... rest of your styles
  };

  return (
    <div style={s.page}>
      {/* ... Hero and Story sections remain the same ... */}

      {/* Donation Buttons */}
      <div style={{ textAlign: 'center', margin: '32px 0' }}>
        <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" rel="noopener noreferrer" style={s.btnRed}>
          {/* ... icon ... */}
          Donate by card
        </a>

        {/* GlobalGiving Button with updated color */}
        <a href="https://www.globalgiving.org/donate/105967/direct-impact-empowerment-foundation/" target="_blank" rel="noopener noreferrer" style={s.btnOrange}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
          </svg>
          Donate via GlobalGiving
        </a>

        {/* ... remaining sections ... */}
      </div>

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
            // Troubleshooting tip: if image breaks, ensure file exists in /public 
            // and extension (jpeg/jpg/png) matches exactly.
            onError={(e) => { e.currentTarget.style.display = 'none'; console.error("Badge image not found"); }}
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