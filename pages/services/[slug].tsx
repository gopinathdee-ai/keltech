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

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Services / Wide Area Tower System</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">TOWER SYSTEMS</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Wide area tower sites &amp; RF management</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Premium co-location facilities with comprehensive RF administration, specialized inspection services, and safety-certified personnel supporting communications infrastructure across Alberta.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Core Services</h2>

          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Tower Site Co-Location</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>We operate multiple tower co-location sites across Alberta, each equipped with:</p>
            <ul style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginLeft: '20px', margin: '0', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Electrical utility connections with backup power capability</li>
              <li style={{ marginBottom: '4px' }}>Fiber optic and Alberta SuperNet backbone access</li>
              <li style={{ marginBottom: '4px' }}>Wireless backhaul for remote connectivity</li>
              <li style={{ marginBottom: '4px' }}>Professional equipment mounting and RF management</li>
              <li>Secure facilities with 24/7 monitoring</li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>RF Administration</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Professional RF (radio frequency) administration is critical to preventing interference and maintaining service reliability. Our team manages frequency coordination, antenna placement, and interference mitigation to ensure all equipment operates optimally.</p>
          </div>

          <div style={{ marginBottom: '0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Tower Inspections</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We specialize in structural inspections of self-support tower systems, providing detailed assessments to ensure tower integrity and safety compliance for ongoing operations.</p>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Safety &amp; Certification</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>At Keltech, safety is paramount. All personnel working on tower systems maintain current certifications:</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Fall Awareness &amp; Protection</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Current certification required for all personnel working at height. Covers fall prevention, equipment use, and rescue procedures.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>High Angle Tower Rescue</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Specialized rescue training ensures rapid and safe response in emergency situations. Certified rescue kits are maintained on all operations.</p>
            </div>
          </div>

          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>All operations carry comprehensive insurance and maintain SECOR-accredited safety protocols across our service area.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Equipment &amp; Products</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>As a Motorola Solutions and Hytera authorized dealer, we stock and support a full range of equipment for tower systems:</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Radio Equipment</h3>
              <ul style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginLeft: '20px', margin: '0', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>Two-way radios (handhelds, mobiles)</li>
                <li style={{ marginBottom: '4px' }}>Repeater systems</li>
                <li style={{ marginBottom: '4px' }}>Antennas &amp; cabling</li>
                <li>Batteries &amp; chargers</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Control Systems</h3>
              <ul style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginLeft: '20px', margin: '0', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>Dispatch consoles</li>
                <li style={{ marginBottom: '4px' }}>SCADA &amp; telemetry systems</li>
                <li style={{ marginBottom: '4px' }}>Network management solutions</li>
                <li>System integration</li>
              </ul>
            </div>
          </div>

          <div>
            <Link href="/products" className="btn btn-outline-dark">View all products</Link>
          </div>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Related Services</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Wide area tower systems work in concert with our other service offerings:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '16px' }}>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>
                <Link href="/services/licensing" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Radio Licensing</Link>
              </p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Frequency coordination and compliance</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>
                <Link href="/services/wireless-networking" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Wireless Networking</Link>
              </p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Dedicated internet services</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>Equipment Rentals</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Temporary tower &amp; site access</p>
            </div>
          </div>
          <Link href="/contact-us" className="btn btn-amber">Discuss tower solutions</Link>
        </section>
      </div>
    </>
  )
}
