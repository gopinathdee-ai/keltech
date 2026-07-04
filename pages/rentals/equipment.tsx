import Link from 'next/link'
import Head from 'next/head'

export default function Equipment() {
  return (
    <>
      <Head>
        <title>Rental Equipment — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Rentals / Equipment</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">RENTAL EQUIPMENT</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Available rental equipment</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Keltech Communications offers a variety of rental equipment including mobile radios, base station systems, and portable handheld units. All equipment is fully supported with complete installation packages.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Mobile Radios</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>All Motorola Mobile radios (M1225, Maxtrack, SM120, and others) operate on 12 Volts DC power. Rental packages feature cigarette lighter adapters for seamless vehicle installation.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>During transmission, these units can draw up to 6 amps. For 24-volt systems, a step-down converter is available upon request to ensure compatibility with your vehicle's electrical system.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Base Station Radios</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>Base station systems include a 120-volt AC to 12-volt DC power supply with the radio mounted directly to it. The power supply handles minor power fluctuations found in typical facility installations.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We recommend connecting all equipment to surge protection devices or uninterruptible power supplies (UPS) for additional protection against electrical anomalies and brief outages.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Handheld &amp; Portable Radios</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>Portable packages come complete with battery chargers operating on 110 volts AC. Our 6-bank charge boxes feature 6 individual chargers mounted in a single unit for efficient multi-unit charging operations.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>External surge suppressors are mandatory for all handheld charge boxes, as these units lack built-in protection. Proper power infrastructure ensures equipment safety and reliable operation.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Power &amp; Installation</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>All rental equipment includes necessary power adapters and installation hardware. Your facility's electrical infrastructure is your responsibility — Keltech Communications cannot be held responsible for equipment damage resulting from dirty or unstable power at your site.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We recommend having a qualified electrician verify your site's power quality before installation. Contact our team if you have questions about power requirements or need recommendations for your specific situation.</p>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Ready to rent?</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Our rental team is here to help you select the right equipment for your needs and ensure a smooth rental experience from start to finish.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-amber" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Request a Quote
            </Link>
            <Link href="/contact-us" className="btn btn-outline-dark" style={{ display: 'inline-block', padding: '10px 20px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
