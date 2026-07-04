import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function WideAreaTowerSystem() {
  const router = useRouter()
  const { slug } = router.query

  if (slug !== 'wide-area-tower-system') {
    return <div>Page not found</div>
  }

  return (
    <>
      <Head>
        <title>Wide Area Tower System — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '20px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Services / Wide Area Tower System</div>

        <section style={{ marginBottom: '60px' }}>
          <span className="eyebrow">TOWER SYSTEMS</span>
          <h1 style={{ margin: '14px 0 30px', fontSize: '32px' }}>Wide area tower sites &amp; RF management</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '60ch' }}>Premium co-location facilities with comprehensive RF administration, specialized inspection services, and safety-certified personnel supporting communications infrastructure across Alberta.</p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Core Services</h2>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Tower Site Co-Location</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '20px' }}>We operate multiple tower co-location sites across Alberta, each equipped with:</p>
            <ul style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li>Electrical utility connections with backup power capability</li>
              <li>Fiber optic and Alberta SuperNet backbone access</li>
              <li>Wireless backhaul for remote connectivity</li>
              <li>Professional equipment mounting and RF management</li>
              <li>Secure facilities with 24/7 monitoring</li>
            </ul>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>RF Administration</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Professional RF (radio frequency) administration is critical to preventing interference and maintaining service reliability. Our team manages frequency coordination, antenna placement, and interference mitigation to ensure all equipment operates optimally.</p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Tower Inspections</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>We specialize in structural inspections of self-support tower systems, providing detailed assessments to ensure tower integrity and safety compliance for ongoing operations.</p>
          </div>
        </section>

        <section style={{ marginBottom: '80px', background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Safety &amp; Certification</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '30px' }}>At Keltech, safety is paramount. All personnel working on tower systems maintain current certifications:</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Fall Awareness &amp; Protection</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.7' }}>Current certification required for all personnel working at height. Covers fall prevention, equipment use, and rescue procedures.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>High Angle Tower Rescue</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.7' }}>Specialized rescue training ensures rapid and safe response in emergency situations. Certified rescue kits are maintained on all operations.</p>
            </div>
          </div>

          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginTop: '30px', marginBottom: '0' }}>All operations carry comprehensive insurance and maintain SECOR-accredited safety protocols across our service area.</p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Equipment &amp; Products</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '30px' }}>As a Motorola Solutions and Hytera authorized dealer, we stock and support a full range of equipment for tower systems:</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Radio Equipment</h3>
              <ul style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.7', marginLeft: '20px' }}>
                <li>Two-way radios (handhelds, mobiles)</li>
                <li>Repeater systems</li>
                <li>Antennas &amp; cabling</li>
                <li>Batteries &amp; chargers</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Control Systems</h3>
              <ul style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.7', marginLeft: '20px' }}>
                <li>Dispatch consoles</li>
                <li>SCADA &amp; telemetry systems</li>
                <li>Network management solutions</li>
                <li>System integration</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Link href="/products" className="btn btn-outline-dark">View all products</Link>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Related Services</h2>
          <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px' }}>Wide area tower systems work in concert with our other service offerings:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>
                <Link href="/services/licensing" style={{ color: 'var(--ink)' }}>Radio Licensing</Link>
              </p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Frequency coordination and compliance</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>
                <Link href="/services/wireless-networking" style={{ color: 'var(--ink)' }}>Wireless Networking</Link>
              </p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Dedicated internet services</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>Equipment Rentals</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Temporary tower &amp; site access</p>
            </div>
          </div>
          <Link href="/contact-us" className="btn btn-amber">Discuss tower solutions</Link>
        </section>
      </div>
    </>
  )
}
