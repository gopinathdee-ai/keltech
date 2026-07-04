import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const PRODUCTS: any = {
  cp200d: { name: 'CP200d', brand: 'Motorola', cat: 'Handheals', legacy: false, desc: 'Simple and affordable entry-level portable two-way radio built to connect your workforce efficiently. A straightforward choice for basic voice communication where advanced data features aren\'t required.', specs: { 'Type': 'Analog / limited digital portable', 'Category': 'Two-Way Radio — Handheals', 'Typical use': 'General workforce voice comms', 'Availability': 'Quote only, through Keltech' } },
  xpr6550: { name: 'XPR6550', brand: 'Motorola / MOTOTRBO', cat: 'Handheals', legacy: false, desc: 'Digital MOTOTRBO portable with GPS location tracking and IP-repeater linking, enabling continuous wide-area coverage across multiple sites without changing channels.', specs: { 'Type': 'Digital (MOTOTRBO) portable', 'Category': 'Two-Way Radio — Handheals', 'GPS': 'Standard whip with GPS antenna', 'Battery': 'IMPRES Li-ion 1500mAh, submersible', 'Warranty': '2-year standard + 1-year extended (Canada)' } },
  apx4500: { name: 'APX4500', brand: 'Motorola / P25', cat: 'Mobiles', legacy: false, desc: 'Mission-critical mobile radio built for vehicle installations in commercial and public-safety fleets, bringing together the full APX feature set in a mobile form factor.', specs: { 'Type': 'P25 digital mobile', 'Category': 'Two-Way Radio — Mobiles', 'Typical use': 'Fleet / vehicle installation', 'Availability': 'Quote only, through Keltech' } },
}

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = PRODUCTS[id as string]

  if (!product) {
    return (
      <>
        <Head>
          <title>Product Not Found — Keltech Communications</title>
        </Head>
        <div style={{ maxWidth: '920px', margin: '0 auto', padding: '60px 28px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '12px' }}>Product not found</h1>
          <p style={{ color: 'var(--steel)', marginBottom: '20px' }}>This is a demo catalog with a limited product set. Try browsing the full list.</p>
          <Link href="/products" className="btn btn-amber" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none' }}>
            Back to Products
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} — Keltech Communications</title>
      </Head>

      <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto', padding: '30px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Products / {product.cat} / {product.name}</div>

        <section className="detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '40px 0' }}>
          <div className="detail-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '200px', height: '200px' }}>
              <rect x="30" y="10" width="40" height="80" rx="4" fill="none" stroke="#E8A23D" strokeWidth="1.5" />
              <rect x="38" y="18" width="24" height="14" rx="1" fill="none" stroke="#E8A23D" strokeWidth="1" />
              <circle cx="50" cy="60" r="10" fill="none" stroke="#5B7480" strokeWidth="1" />
              <line x1="50" y1="10" x2="50" y2="2" stroke="#E8A23D" strokeWidth="1.5" />
              <circle cx="50" cy="2" r="1.5" fill="#E8A23D" />
            </svg>
          </div>

          <div className="detail-copy">
            {product.legacy && (
              <div style={{ background: 'var(--rust)', color: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', marginBottom: '16px', display: 'inline-block' }}>
                DISCONTINUED — PARTS &amp; ACCESSORIES ONLY
              </div>
            )}
            <span style={{ color: 'var(--amber)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
              {product.brand.toUpperCase()}
            </span>
            <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>{product.name}</h1>
            <p className="desc" style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '30px' }}>{product.desc}</p>

            <div className="spec-list" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid var(--line-light)' }}>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="spec-row" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '20px', padding: '12px 0', borderBottom: '1px solid var(--line-light)' }}>
                  <span className="k" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--steel)' }}>{key}</span>
                  <span className="v" style={{ fontSize: '14px', color: 'var(--ink)' }}>{String(value)}</span>
                </div>
              ))}
            </div>

            <div className="detail-ctas" style={{ display: 'flex', gap: '12px' }}>
              <Link href={`/quote?product=${product.name}`} className="btn btn-amber" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500' }}>
                Request a Quote
              </Link>
              <Link href={`/products#${product.cat.toLowerCase()}`} className="btn btn-outline-dark" style={{ display: 'inline-block', padding: '12px 24px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', fontWeight: '500' }}>
                Back to {product.cat}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
