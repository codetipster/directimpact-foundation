import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate - DirectImpact Empowerment Foundation',
  description: 'Support youth empowerment and community transformation through your generous donation.',
}

export default function BankDetails() {
  const s = {
    page: { fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', margin: 0, padding: 0 },
    hero: { background: '#7B1E1E', color: '#fff', padding: '56px 24px 48px', textAlign: 'center' as const },
    tag: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px' },
    h1: { fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 400, lineHeight: 1.3, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Georgia, serif' },
    heroP: { fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginTop: '16px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 },
    section: { maxWidth: '760px', margin: '0 auto', padding: '64px 24px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' },
    card: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '32px 28px' },
    cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f0f0f0' },
    flagBox: { width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' },
    cardTitle: { fontSize: '17px', fontWeight: 600, color: '#1a1a1a', marginBottom: '2px' },
    cardSub: { fontSize: '13px', color: '#888' },
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f5f5f5' },
    rowLabel: { fontSize: '13px', color: '#888', minWidth: '120px' },
    rowValue: { fontSize: '14px', color: '#1a1a1a', fontWeight: 500, textAlign: 'right' as const, wordBreak: 'break-all' },
    notice: { background: '#faf5f0', borderRadius: '12px', padding: '28px 32px', marginBottom: '32px' },
    noticeP: { fontSize: '15px', color: '#2a2a2a', lineHeight: 1.75, marginBottom: '8px' },
    btnRed: { display: 'inline-block', background: '#7B1E1E', color: '#fff', fontSize: '14px', fontWeight: 600, padding: '14px 32px', borderRadius: '100px', textDecoration: 'none' },
  };

  const nigeriaRows = [
    ['Bank', 'United Bank for Africa (UBA)'],
    ['Account name', 'Direct Impact Empowerment Foundation'],
    ['Account number', '1027681829'],
    ['Currency', 'NGN'],
  ];

  const swissRows = [
    ['Account name', 'Direct Impact Empowerment Foundation'],
    ['IBAN', 'CH94 83019 DIRECTIMP002'],
    ['QR-IBAN', 'CH69 30334 DIRECTIMP002'],
    ['Currency', 'CHF'],
  ];

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.tag}>Bank transfer details</div>
        <h1 style={s.h1}>Donate directly to Direct Impact Empowerment Foundation</h1>
        <p style={s.heroP}>We have accounts in both Nigeria and Switzerland. Please use whichever is most convenient for your location and currency.</p>
      </div>

      <div style={s.section}>
        <div style={s.notice}>
          <p style={s.noticeP}>Once your transfer is complete, please send a brief confirmation email to our team so we can acknowledge your gift and ensure it is properly recorded.</p>
          <p style={{ ...s.noticeP, marginBottom: 0 }}>Every donation is used directly for programme delivery. Direct Impact Empowerment Foundation is registered in both Nigeria and Switzerland.</p>
        </div>

        <div style={s.grid}>
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={{ ...s.flagBox, background: '#fef9e7' }}>🇳🇬</div>
              <div>
                <div style={s.cardTitle}>Nigeria account</div>
                <div style={s.cardSub}>For NGN transfers</div>
              </div>
            </div>
            {nigeriaRows.map(([label, value]) => (
              <div key={label} style={s.row}>
                <span style={s.rowLabel}>{label}</span>
                <span style={s.rowValue}>{value}</span>
              </div>
            ))}
          </div>

          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={{ ...s.flagBox, background: '#eaf4fb' }}>🇨🇭</div>
              <div>
                <div style={s.cardTitle}>Switzerland account</div>
                <div style={s.cardSub}>For CHF and international transfers</div>
              </div>
            </div>
            {swissRows.map(([label, value]) => (
              <div key={label} style={s.row}>
                <span style={s.rowLabel}>{label}</span>
                <span style={s.rowValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' as const }}>
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px', lineHeight: 1.7 }}>Prefer to donate by card? Use our secure Stripe payment link.</p>
          <a href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" target="_blank" style={s.btnRed}>Donate by card instead</a>
        </div>
      </div>
    </div>
  );
}



