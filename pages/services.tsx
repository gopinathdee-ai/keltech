import Link from 'next/link'
import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '30px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Services</div>

        <section style={{ marginBottom: '60px' }}>
          <span className="eyebrow">WHAT WE OFFER</span>
          <h1 style={{ margin: '14px 0 30px', fontSize: '32px' }}>Professional communications services for rural Alberta</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '60ch' }}>As a Motorola Solutions authorized dealer, we provide comprehensive wireless communications solutions — from equipment and licensing to specialized infrastructure and networking services.</p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Two-Way Radio Systems</h2>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>Analog and digital radio solutions including simplex and full-duplex repeaters, multi-site trunking systems, GPS tracking, and text messaging capabilities.</p>
              <Link href="/products" style={{ color: 'var(--amber)' }}>Browse products →</Link>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Equipment Rentals</h2>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>Short and long-term radio rentals perfect for plant turnarounds, shutdowns, special events, and temporary operations.</p>
              <a href="#rentals" style={{ color: 'var(--amber)' }}>Learn about rentals →</a>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Installation Services</h2>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>Professional installation of two-way radio and cellular equipment for vehicles and plants, backed by technical expertise and safety standards.</p>
              <Link href="/contact-us" style={{ color: 'var(--amber)' }}>Request installation →</Link>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Specialized Systems</h2>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>Paging systems, oilfield remote control and alarms, SCADA telemetry, and wireless networking solutions with dedicated internet access.</p>
              <Link href="/contact-us" style={{ color: 'var(--amber)' }}>Discuss your needs →</Link>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Our Service Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                <Link href="/services/licensing" style={{ color: 'var(--ink)' }}>Licensing</Link>
              </h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.6' }}>Radio licensing assistance, license applications, and Industry Canada compliance support.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                <Link href="/services/wireless-networking" style={{ color: 'var(--ink)' }}>Wireless Networking</Link>
              </h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.6' }}>Managed, dedicated internet connectivity for rural and remote locations with 24/7 monitoring.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                <Link href="/services/wide-area-tower-system" style={{ color: 'var(--ink)' }}>Wide Area Tower System</Link>
              </h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.6' }}>Tower co-location, RF administration, and specialized tower inspection services across Alberta.</p>
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Why Choose Keltech</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Local Expertise</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75' }}>Based in Drayton Valley with field operations throughout central and western Alberta. We understand rural communications challenges.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Authorized Partner</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75' }}>Motorola Solutions and Hytera authorized dealer. Access to cutting-edge equipment and manufacturer support.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Safety First</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75' }}>SECOR-accredited safety program. Certified personnel with fall protection and tower rescue training on all operations.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Turnkey Solutions</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75' }}>From site surveys and path studies to installation and ongoing support — we handle it all with quality and reliability in mind.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
