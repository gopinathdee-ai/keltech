import Link from 'next/link'
import Head from 'next/head'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Contact Us</div>

        <div style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">CONTACT US</span>
          <h1 style={{ fontSize: '32px', margin: '12px 0 16px' }}>Get in touch</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Based in Drayton Valley with field operations throughout Alberta. Reach out with any questions about our products, services, or rentals.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600' }}>Office</h2>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0' }}>Keltech Communications Inc.</p>
              <p style={{ color: 'var(--steel)', fontSize: '15px', margin: '0', lineHeight: '1.6' }}>6414 50th Ave<br />Drayton Valley, AB T7A 1R4<br />Canada</p>
            </div>
            <h3 style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '4px', margin: '0 0 4px 0' }}>Hours</h3>
            <p style={{ color: 'var(--steel)', fontSize: '15px', margin: '0', lineHeight: '1.6' }}>Monday – Friday<br />8:00 AM – 5:00 PM MT</p>
          </div>

          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600' }}>Direct Lines</h2>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '4px', margin: '0 0 4px 0' }}>Phone</p>
              <p style={{ fontSize: '16px', fontWeight: '500', margin: '0' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--ink)', textDecoration: 'none' }}>1-800-449-5707</a></p>
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)', marginBottom: '4px', margin: '0 0 4px 0' }}>Email</p>
              <p style={{ fontSize: '16px', fontWeight: '500', margin: '0' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--ink)', textDecoration: 'none' }}>info@keltech.ab.ca</a></p>
            </div>
          </div>
        </div>

        <div style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Service Area</h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>Our office is in Drayton Valley, but we perform field work throughout Alberta — wherever rural and remote operations need reliable communications solutions.</p>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We specialize in custom communications for areas where stable, effective connectivity is challenging. If you&apos;re in central or western Alberta and need wireless solutions, we can help.</p>
        </div>

        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Ready to discuss your project?</h2>
          <p style={{ color: 'var(--steel)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.6' }}>Our team is ready to discuss your communications and connectivity needs.</p>
          <Link href="/quote" className="btn btn-amber" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  )
}
