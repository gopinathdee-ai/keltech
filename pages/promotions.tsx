import Link from 'next/link'
import Head from 'next/head'

export default function Promotions() {
  return (
    <>
      <Head>
        <title>What's New — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '20px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / What's New</div>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>PROMOTIONS</span>
          <h1 style={{ fontSize: '48px', margin: '14px 0 30px' }}>Current Offers</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)' }}>Check back regularly for seasonal promotions and special offers on products and services.</p>
        </div>

        <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: 'var(--steel)', fontSize: '16px', marginBottom: '16px' }}>No active promotions at this time.</p>
          <p style={{ color: 'var(--steel)', marginBottom: '24px' }}>Contact our team to discuss current pricing and availability for your project.</p>
          <Link href="/contact-us" className="btn btn-amber" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Stay Updated</h2>
          <p style={{ color: 'var(--steel)', marginBottom: '20px' }}>For the latest updates on promotions and new offerings, reach out to our sales team or request a quote.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <Link href="/quote" className="btn btn-amber" style={{ display: 'block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', textAlign: 'center' }}>
              Request a Quote
            </Link>
            <Link href="/contact-us" className="btn btn-outline-dark" style={{ display: 'block', padding: '12px 24px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', textAlign: 'center' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
