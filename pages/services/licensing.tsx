import Link from 'next/link'
import Head from 'next/head'

export default function Licensing() {
  return (
    <>
      <Head>
        <title>Licensing Services — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Services / Licensing</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">LICENSING SERVICES</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Radio licensing assistance &amp; solutions</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Navigate Industry Canada requirements with confidence. We provide direct radio licensing, license application assistance, and troubleshooting for all your frequency and licensing needs.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600' }}>Services We Provide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '0' }}>
            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Direct Radio Licensing</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We handle the direct licensing of radios and frequency allocations to ensure your equipment is compliant and authorized for operation.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>License Applications</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Expert assistance with license application submissions for new channels and frequencies, including preparation and regulatory coordination.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Licensing Troubleshooting</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Facing licensing issues or interference problems? We provide diagnostics and solutions to resolve registration and operational concerns.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Industry Canada Support</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Stay compliant with current spectrum regulations and Industry Canada requirements. We keep current with regulatory changes.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>How to Get Help</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', margin: '0 0 20px 0' }}>Whether you need to resolve a licensing issue, apply for new frequencies, or simply need expert guidance on your radio licensing, our team is here to help.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0', textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.05em' }}>Email</h3>
              <p style={{ margin: '0' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--amber)', fontSize: '16px', fontWeight: '500', textDecoration: 'none' }}>info@keltech.ab.ca</a></p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0', textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.05em' }}>Phone</h3>
              <p style={{ margin: '0' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--amber)', fontSize: '16px', fontWeight: '500', textDecoration: 'none' }}>1-800-449-5707</a></p>
            </div>
          </div>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>External Resources</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>For direct regulatory inquiries and spectrum information:</p>
          <p style={{ margin: '0', marginBottom: '16px' }}><a href="https://www.ic.gc.ca/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: '500' }}>Industry Canada Spectrum Direct →</a></p>
          <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0', lineHeight: '1.6' }}>For licensing and interference issues, the regulatory authority maintains comprehensive resources on frequency allocations and licensing requirements.</p>
        </section>
      </div>
    </>
  )
}
