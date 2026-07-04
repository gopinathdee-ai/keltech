import Link from 'next/link'
import Head from 'next/head'

const PRODUCTS = {
  handhelds: [
    { id: 'cp200d', name: 'CP200d', badge: 'MOTOROLA', desc: 'Simple, affordable entry-level portable that connects your workforce efficiently.' },
    { id: 'xpr6550', name: 'XPR6550', badge: 'MOTOROLA / MOTOTRBO', desc: 'Digital MOTOTRBO portable with GPS, IP-linked wide-area coverage and an extensive data application ecosystem.' },
    { id: 'apx1000', name: 'APX1000', badge: 'MOTOROLA / P25', desc: 'Compact P25 portable with the full look and feel of the APX family, built for durable government and public works use.' },
    { id: 'apx4000', name: 'APX4000', badge: 'MOTOROLA / P25', desc: 'The smallest P25 Phase 2 TDMA-capable portable in the APX line, built for demanding field conditions.' },
    { id: 'mtx4550', name: 'MTX4550', badge: 'MOTOROLA / INTRINSICALLY SAFE', desc: 'CSA-certified intrinsically safe handheld, purpose-built for hazardous-location work such as oilfield and industrial sites.' },
    { id: 'ht1250', name: 'HT1250', badge: 'LEGACY', desc: 'No longer manufactured. Accessories and replacement parts remain available through Keltech.', legacy: true },
  ],
  mobiles: [
    { id: 'apx4500', name: 'APX4500', badge: 'MOTOROLA / P25', desc: 'Mission-critical mobile radio built for commercial and public-safety vehicle installations.' },
    { id: 'cm300', name: 'CM300', badge: 'LEGACY', desc: 'No longer manufactured. Accessories and replacement parts remain available through Keltech.', legacy: true },
  ],
  repeaters: [
    { id: 'p25dvrs', name: 'P25 DVRS', badge: 'MOTOROLA / P25', desc: 'Digital Vehicular Repeater System — small, rugged and self-contained for rapid, temporary coverage extension.' },
  ],
  applications: [
    { id: 'mc1000', name: 'MC1000', badge: 'MOTOROLA / DISPATCH', desc: 'Compact, cost-effective deskset console allowing remote control of radio functions from a desktop.' },
    { id: 'ace1000', name: 'ACE1000', badge: 'MOTOROLA / SCADA', desc: 'Versatile remote terminal unit built to deliver timely, reliable SCADA and telemetry communications.' },
    { id: 'ace3600', name: 'ACE3600', badge: 'MOTOROLA / SCADA', desc: 'Remote terminal unit combining the local processing power of a PLC with SCADA-grade communications.' },
    { id: 'minitor6', name: 'MINITOR VI', badge: 'MOTOROLA / PAGING', desc: 'Two-tone voice pager purpose-built for fire departments and other emergency response organizations.' },
  ],
}

export default function Products() {
  return (
    <>
      <Head>
        <title>Products — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div style={{ padding: '20px 0', marginBottom: '0' }} className="crumb">Home / Products</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">CATALOG</span>
          <h1 style={{ fontSize: '32px', margin: '12px 0 16px' }}>Two-way radio, applications &amp; accessories</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Authorized Motorola dealer. Every product below is quote-only — pricing and availability are confirmed directly with our team, not sold online.</p>
        </section>
      </div>

      {Object.entries(PRODUCTS).map(([category, products]) => (
        <section key={category} id={category} style={{ borderBottom: '1px solid var(--line-light)', padding: '28px 0' }}>
          <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: '600', margin: '0 0 4px 0' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <span style={{ color: 'var(--steel)', fontSize: '13px' }}>{products.length} {products.length === 1 ? 'model' : 'models'}</span>

            <p style={{ color: 'var(--steel)', marginTop: '8px', marginBottom: '16px', fontSize: '14px', lineHeight: '1.6', margin: '8px 0 16px 0' }}>
              {category === 'handhelds' && 'Portable two-way radios, from entry-level analog to P25 digital and intrinsically safe variants for hazardous environments.'}
              {category === 'mobiles' && 'Vehicle and fixed-mount radios for fleet, dispatch and plant communications.'}
              {category === 'repeaters' && 'Fixed and vehicular repeater systems for extending coverage across sites and mobile response units.'}
              {category === 'applications' && 'Dispatch, SCADA/telemetry and paging systems that tie a two-way network into day-to-day operations.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {products.map((product) => (
                <div key={product.id} style={{ background: 'var(--paper-dim)', padding: '20px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
                  {product.legacy && (
                    <div style={{ background: 'var(--rust)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: '600', marginBottom: '10px', display: 'inline-block' }}>
                      LEGACY — PARTS &amp; ACCESSORIES ONLY
                    </div>
                  )}
                  <span style={{ color: 'var(--amber)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                    {product.badge}
                  </span>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px', margin: '0 0 10px 0', fontWeight: '600' }}>{product.name}</h3>
                  <p style={{ color: 'var(--ink)', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>{product.desc}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link href={`/products/${product.id}`} style={{ color: 'var(--amber)', fontSize: '13px', fontWeight: '500' }}>
                      View details →
                    </Link>
                    <Link href={`/quote?product=${product.name}`} className="btn" style={{ background: 'var(--amber)', color: 'var(--ink)', padding: '6px 12px', borderRadius: '3px', fontSize: '13px', fontWeight: '500' }}>
                      Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
