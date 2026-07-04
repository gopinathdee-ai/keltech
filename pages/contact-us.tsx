import Link from 'next/link'
import Head from 'next/head'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '20px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Contact Us</div>

        <div style={{ marginBottom: '80px' }}>
          <span className="eyebrow">CONTACT US</span>
          <h1 style={{ fontSize: '48px', margin: '14px 0 30px' }}>Get in touch</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '60ch' }}>Based in Drayton Valley with field operations throughout Alberta. Reach out with any questions about our products, services, or rentals.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Office</h2>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontWeight: '600', marginBottom: '8px' }}>Keltech Communications Inc.</p>
              <p style={{ color: 'var(--steel)' }}>6414 50th Ave<br />Drayton Valley, AB T7A 1R4<br />Canada</p>
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '8px' }}>Hours</h3>
            <p style={{ color: 'var(--steel)' }}>Monday – Friday<br />8:00 AM – 5:00 PM MT</p>
          </div>

          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Direct Lines</h2>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '8px' }}>Phone</p>
              <p style={{ fontSize: '20px', fontWeight: '500' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--ink)', textDecoration: 'none' }}>1-800-449-5707</a></p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '8px' }}>Email</p>
              <p style={{ fontSize: '18px', fontWeight: '500' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--ink)', textDecoration: 'none' }}>info@keltech.ab.ca</a></p>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Service Area</h2>
          <p style={{ marginBottom: '16px' }}>Our office is in Drayton Valley, but we perform field work throughout Alberta — wherever rural and remote operations need reliable communications solutions.</p>
          <p style={{ color: 'var(--steel)' }}>We specialize in custom communications for areas where stable, effective connectivity is challenging. If you&apos;re in central or western Alberta and need wireless solutions, we can help.</p>
        </div>

        <div style={{ textAlign: 'center', padding: '40px', background: 'var(--paper-dim)', borderRadius: '4px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Ready to discuss your project?</h2>
          <p style={{ color: 'var(--steel)', marginBottom: '24px' }}>Our team is ready to discuss your communications and connectivity needs.</p>
          <Link href="/quote" className="btn btn-amber" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none' }}>
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  )
}
