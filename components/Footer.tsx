export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line-dark)',
      paddingTop: '0',
      backgroundColor: 'var(--ink)',
      color: 'var(--paper)',
    }}>
      <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
        <div className="foot-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          paddingTop: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid var(--line-dark)',
        }}>
          <div className="foot-brand">
            <span className="brand-mark" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '600',
              fontSize: '18px',
              display: 'block',
              marginBottom: '12px',
            }}>KELTECH</span>
            <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: '1.6' }}>
              Two-way radio and wireless network solutions for rural and remote Alberta. Authorized Motorola Solutions and Hytera dealer based in Drayton Valley.
            </p>
          </div>
          <div className="foot-col">
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Products</h4>
            <a href="#" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Two-Way Radio</a>
            <a href="#" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Applications</a>
            <a href="#" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Accessories</a>
            <a href="#" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Rentals</a>
          </div>
          <div className="foot-col">
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</h4>
            <a href="/services/licensing" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Licensing</a>
            <a href="/services/wireless-networking" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Wireless Networking</a>
            <a href="/services/wide-area-tower-system" style={{ display: 'block', marginBottom: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontSize: '14px' }}>Wide Area Tower System</a>
          </div>
          <div className="foot-col">
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reach Us</h4>
            <p style={{ fontSize: '14px', margin: '0 0 8px 0' }}>1-800-449-5707</p>
            <p style={{ fontSize: '14px', margin: '0 0 8px 0' }}>info@keltech.ab.ca</p>
            <p style={{ fontSize: '14px', margin: '0' }}>6414 50th Ave, Drayton Valley, AB T7A 1R4</p>
          </div>
        </div>

        <div className="foot-bottom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--steel)',
        }}>
          <span>© 2026 Keltech Communications Inc.</span>
          <span>Designed by <a href="https://www.herzsolutions.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)', textDecoration: 'none' }}>Herz Solutions</a></span>
        </div>

        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid var(--line-dark)',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--steel)',
          textAlign: 'center',
        }}>
          This is an unofficial concept redesign built as a design demo — not affiliated with or published by Keltech Communications Inc.
        </div>
      </div>
    </footer>
  );
}
