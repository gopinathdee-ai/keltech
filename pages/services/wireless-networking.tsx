import Link from 'next/link'
import Head from 'next/head'

export default function WirelessNetworking() {
  return (
    <>
      <Head>
        <title>Wireless Networking — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '20px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Services / Wireless Networking</div>

        <section style={{ marginBottom: '60px' }}>
          <span className="eyebrow">WIRELESS NETWORKING</span>
          <h1 style={{ margin: '14px 0 30px', fontSize: '32px' }}>Dedicated internet for remote locations</h1>
          <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '60ch' }}>High-speed, symmetrical connectivity where traditional internet doesn&apos;t reach. Our managed wireless networks bring reliable, dedicated bandwidth to rural and remote operations across Alberta.</p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Service Overview</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '40px' }}>Keltech Communications provides managed, dedicated internet service (DIA) to last-mile clients in rural locations where standard broadband connectivity is unavailable or unreliable. We specialize in bringing high-quality, dependable connectivity to organizations that can&apos;t compromise on performance.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Symmetrical Speeds</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Equal upload and download bandwidth. No throttling or asymmetrical limits — your data moves at full speed in both directions.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>24/7 Monitoring</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Round-the-clock network monitoring ensures your connectivity stays up and running. We detect and resolve issues before they impact operations.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Low Latency</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Optimized network routing means fast, responsive connections. Critical for real-time applications and mission-critical operations.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Dedicated Access</h3>
              <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>Your bandwidth is yours alone. No sharing, no congestion during peak hours — guaranteed performance exactly when you need it.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Who Should Use Wireless Networking</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '30px' }}>Our wireless networking service is ideal for organizations in rural and remote regions that need robust, mission-critical internet connectivity:</p>
          <ul style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.8', marginLeft: '20px', marginBottom: '40px' }}>
            <li>Industrial and manufacturing operations requiring real-time data transmission</li>
            <li>Oilfield and resource extraction sites with remote monitoring needs</li>
            <li>Agricultural operations and rural infrastructure management</li>
            <li>Emergency services and public safety communications</li>
            <li>Rural businesses needing reliable WAN connectivity</li>
            <li>Any organization where internet reliability is non-negotiable</li>
          </ul>
        </section>

        <section style={{ marginBottom: '80px', background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Infrastructure &amp; Technology</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px' }}>Our network infrastructure is designed for long-term reliability and scalability. We leverage the Alberta SuperNet backbone and operate tower sites across central and western Alberta with electrical utility, fiber optic, and wireless backhaul capabilities.</p>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75' }}>This foundation allows us to deliver consistent performance and plan for future network demands, ensuring your connectivity grows with your business.</p>
        </section>

        <section style={{ borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Complementary Services</h2>
          <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px' }}>Wireless networking is just one piece of your communications strategy. We also provide:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>Two-Way Radio</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Equipment, licensing, and systems</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>Equipment Rentals</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Temporary deployments and events</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>Tower Systems</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px' }}>Co-location and RF administration</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/services" className="btn btn-outline-dark">Explore all services</Link>
            <Link href="/contact-us" className="btn btn-amber">Request a consultation</Link>
          </div>
        </section>
      </div>
    </>
  )
}
