import Link from 'next/link'
import Head from 'next/head'

export default function WirelessNetworking() {
  return (
    <>
      <Head>
        <title>Wireless Networking — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Services / Wireless Networking</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">WIRELESS NETWORKING</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Dedicated internet for remote locations</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>High-speed, symmetrical connectivity where traditional internet doesn&apos;t reach. Our managed wireless networks bring reliable, dedicated bandwidth to rural and remote operations across Alberta.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Service Overview</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', margin: '0 0 20px 0' }}>Keltech Communications provides managed, dedicated internet service (DIA) to last-mile clients in rural locations where standard broadband connectivity is unavailable or unreliable. We specialize in bringing high-quality, dependable connectivity to organizations that can&apos;t compromise on performance.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Symmetrical Speeds</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Equal upload and download bandwidth. No throttling or asymmetrical limits — your data moves at full speed in both directions.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>24/7 Monitoring</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Round-the-clock network monitoring ensures your connectivity stays up and running. We detect and resolve issues before they impact operations.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Low Latency</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Optimized network routing means fast, responsive connections. Critical for real-time applications and mission-critical operations.</p>
            </div>

            <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Dedicated Access</h3>
              <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Your bandwidth is yours alone. No sharing, no congestion during peak hours — guaranteed performance exactly when you need it.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Who Should Use Wireless Networking</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Our wireless networking service is ideal for organizations in rural and remote regions that need robust, mission-critical internet connectivity:</p>
          <ul style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginLeft: '20px', margin: '0', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Industrial and manufacturing operations requiring real-time data transmission</li>
            <li style={{ marginBottom: '8px' }}>Oilfield and resource extraction sites with remote monitoring needs</li>
            <li style={{ marginBottom: '8px' }}>Agricultural operations and rural infrastructure management</li>
            <li style={{ marginBottom: '8px' }}>Emergency services and public safety communications</li>
            <li style={{ marginBottom: '8px' }}>Rural businesses needing reliable WAN connectivity</li>
            <li>Any organization where internet reliability is non-negotiable</li>
          </ul>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Infrastructure &amp; Technology</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>Our network infrastructure is designed for long-term reliability and scalability. We leverage the Alberta SuperNet backbone and operate tower sites across central and western Alberta with electrical utility, fiber optic, and wireless backhaul capabilities.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>This foundation allows us to deliver consistent performance and plan for future network demands, ensuring your connectivity grows with your business.</p>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Complementary Services</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Wireless networking is just one piece of your communications strategy. We also provide:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>Two-Way Radio</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Equipment, licensing, and systems</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>Equipment Rentals</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Temporary deployments and events</p>
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0', fontSize: '15px' }}>Tower Systems</p>
              <p style={{ color: 'var(--steel)', fontSize: '14px', margin: '0' }}>Co-location and RF administration</p>
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
