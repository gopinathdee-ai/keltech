import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Keltech Communications — Rural Alberta Wireless Solutions</title>
        <meta name="description" content="Two-way radio and wireless network solutions for rural and remote Alberta" />
      </Head>

      <section className="page-hero" style={{ padding: '100px 0', textAlign: 'center', background: 'var(--paper)' }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--amber)' }}>WIRELESS COMMUNICATIONS</span>
          <h1 style={{ margin: '16px 0 24px', color: '#ffffff' }}>Reliable two-way radio &amp; wireless networks for rural Alberta</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '32px' }}>Authorized Motorola Solutions and Hytera dealer. Equipment, rentals, licensing, and specialized infrastructure solutions.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/products" className="btn btn-amber">Browse Products</Link>
            <Link href="/services" className="btn btn-outline-dark">Explore Services</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'var(--paper-dim)' }}>
        <div className="wrap">
          <h2 style={{ textAlign: 'center', marginBottom: '60px', color: '#ffffff' }}>What We Offer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Two-Way Radio Systems</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Analog and digital radio solutions including simplex and full-duplex repeaters, multi-site trunking, GPS, and text messaging.</p>
              <Link href="/products" style={{ color: 'var(--amber)' }}>View products →</Link>
            </div>

            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Equipment Rentals</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Short and long-term radio rentals for plant turnarounds, special events, and temporary operations.</p>
              <a href="#rentals" style={{ color: 'var(--amber)' }}>Learn about rentals →</a>
            </div>

            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Licensing &amp; Support</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Radio licensing assistance, Industry Canada compliance, and specialized communications support.</p>
              <Link href="/services/licensing" style={{ color: 'var(--amber)' }}>Licensing services →</Link>
            </div>

            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Wireless Networking</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Managed, dedicated internet connectivity for rural locations with 24/7 monitoring and low latency.</p>
              <Link href="/services/wireless-networking" style={{ color: 'var(--amber)' }}>Network services →</Link>
            </div>

            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Tower Systems</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Co-location facilities, RF administration, and specialized tower inspection services across Alberta.</p>
              <Link href="/services/wide-area-tower-system" style={{ color: 'var(--amber)' }}>Tower solutions →</Link>
            </div>

            <div style={{ backgroundColor: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', border: '1px solid var(--line-light)' }}>
              <h3 style={{ marginBottom: '16px', color: '#ffffff' }}>Installation Services</h3>
              <p style={{ color: 'var(--steel)', marginBottom: '20px', lineHeight: '1.75' }}>Professional installation for vehicles and plants, backed by technical expertise and safety standards.</p>
              <Link href="/contact-us" style={{ color: 'var(--amber)' }}>Request service →</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }} id="rentals">
        <div className="wrap">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Equipment Rentals</h2>
          <p style={{ textAlign: 'center', color: 'var(--steel)', marginBottom: '40px', maxWidth: '60ch', margin: '0 auto 40px' }}>Need temporary radio equipment? We provide short and long-term rentals for plant turnarounds, shutdowns, special events, and any temporary communications need.</p>
          <div style={{ textAlign: 'center' }}>
            <Link href="/quote" className="btn btn-amber">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'var(--paper-dim)' }}>
        <div className="wrap">
          <h2 style={{ textAlign: 'center', marginBottom: '60px', color: '#ffffff' }}>Why Choose Keltech</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Local Expertise</h3>
              <p style={{ color: 'var(--steel)', lineHeight: '1.75' }}>Based in Drayton Valley with field operations throughout central and western Alberta.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Authorized Partner</h3>
              <p style={{ color: 'var(--steel)', lineHeight: '1.75' }}>Motorola Solutions and Hytera authorized dealer with full product support.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Safety First</h3>
              <p style={{ color: 'var(--steel)', lineHeight: '1.75' }}>SECOR-accredited safety program with certified personnel on all operations.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Turnkey Solutions</h3>
              <p style={{ color: 'var(--steel)', lineHeight: '1.75' }}>From site surveys to installation and ongoing support — we handle it all.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', textAlign: 'center', background: 'var(--paper)' }}>
        <div className="wrap">
          <h2 style={{ marginBottom: '20px', color: '#ffffff' }}>Ready to discuss your communications needs?</h2>
          <p style={{ color: 'var(--steel)', marginBottom: '40px' }}>Let&apos;s talk about your project and find the right solution.</p>
          <Link href="/contact-us" className="btn btn-amber">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
