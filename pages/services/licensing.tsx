import Link from 'next/link'
import Head from 'next/head'

export default function Licensing() {
  return (
    <>
      <Head>
        <title>Licensing Services — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '30px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Services / Licensing</div>

        <section style={{ marginBottom: '60px' }}>
          <span className="eyebrow">LICENSING SERVICES</span>
          <h1 style={{ margin: '14px 0 30px', fontSize: '32px' }}>Radio licensing assistance &amp; solutions</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '60ch' }}>Navigate Industry Canada requirements with confidence. We provide direct radio licensing, license application assistance, and troubleshooting for all your frequency and licensing needs.</p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Services We Provide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Direct Radio Licensing</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>We handle the direct licensing of radios and frequency allocations to ensure your equipment is compliant and authorized for operation.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>License Applications</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Expert assistance with license application submissions for new channels and frequencies, including preparation and regulatory coordination.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Licensing Troubleshooting</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Facing licensing issues or interference problems? We provide diagnostics and solutions to resolve registration and operational concerns.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Industry Canada Support</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Stay compliant with current spectrum regulations and Industry Canada requirements. We keep current with regulatory changes.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '80px', background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>How to Get Help</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px' }}>Whether you need to resolve a licensing issue, apply for new frequencies, or simply need expert guidance on your radio licensing, our team is here to help.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Email</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '8px' }}>Send your licensing inquiry to:</p>
              <p style={{ margin: '0' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--amber)' }}>info@keltech.ab.ca</a></p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Phone</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '8px' }}>Call during business hours (Mon–Fri, 8 AM–5 PM MT):</p>
              <p style={{ margin: '0' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--amber)' }}>1-800-449-5707</a></p>
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>External Resources</h2>
          <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75', marginBottom: '20px' }}>For direct regulatory inquiries and spectrum information:</p>
          <p style={{ margin: '0' }}><a href="https://www.ic.gc.ca/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)' }}>Industry Canada Spectrum Direct →</a></p>
          <p style={{ color: 'var(--steel)', fontSize: '14px', marginTop: '12px' }}>For licensing and interference issues, the regulatory authority maintains comprehensive resources on frequency allocations and licensing requirements.</p>
        </section>
      </div>
    </>
  )
}
