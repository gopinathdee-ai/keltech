import Link from 'next/link'
import Head from 'next/head'

export default function Promotions() {
  return (
    <>
      <Head>
        <title>What's New — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / What's New</div>

        <div style={{ textAlign: 'center', padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>PROMOTIONS</span>
          <h1 style={{ fontSize: '32px', margin: '12px 0 16px' }}>Current Offers</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Check back regularly for seasonal promotions and special offers on products and services.</p>
        </div>

        <div style={{ textAlign: 'center', padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>No active promotions at this time.</p>
          <p style={{ color: 'var(--steel)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.6', margin: '0 0 16px 0' }}>Contact our team to discuss current pricing and availability for your project.</p>
          <Link href="/contact-us" className="btn btn-amber" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
            Contact Us
          </Link>
        </div>

        <div style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Stay Updated</h2>
          <p style={{ color: 'var(--steel)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.6' }}>For the latest updates on promotions and new offerings, reach out to our sales team or request a quote.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Link href="/quote" className="btn btn-amber" style={{ display: 'block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', textAlign: 'center', fontWeight: '500', fontSize: '14px' }}>
              Request a Quote
            </Link>
            <Link href="/contact-us" className="btn btn-outline-dark" style={{ display: 'block', padding: '10px 20px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', textAlign: 'center', fontWeight: '500', fontSize: '14px' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
