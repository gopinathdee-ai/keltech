import Link from 'next/link'
import Head from 'next/head'

export default function GuaranteePolicy() {
  return (
    <>
      <Head>
        <title>Rental Guarantee Policy — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Rentals / Guarantee Policy</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">RENTAL GUARANTEE POLICY</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Equipment rental terms &amp; guarantees</h1>
          <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: '1.6', margin: '0' }}>Our rental guarantee policy ensures reliable equipment availability while maintaining fair terms for all customers. Review our key requirements and cancellation terms below.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Booking &amp; Confirmation</h2>

          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Advance Notice</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>We recommend providing as much advance notice as possible when requesting rental equipment, especially during busy periods such as spring shutdowns and seasonal peaks. Early notice helps us guarantee availability and secure the right equipment for your needs.</p>
          </div>

          <div style={{ marginBottom: '0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Confirmation Timeline</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Keltech Communications requires a minimum of 24 to 48 hours in order to confirm availability of rental equipment and guarantee your reservation. A signed Rental Order Request Form is necessary to secure equipment and lock in your rental dates.</p>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Cancellation &amp; Changes</h2>

          <div style={{ marginBottom: '0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Cancellation Notice</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>A 30-day notice of cancellation is required on all orders prior to the date the rental is required on site. This advance notice allows us to release equipment for other customers and manage our rental inventory efficiently.</p>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Orders cancelled within 30 days of the rental start date may incur full rental charges at Keltech Communications' discretion. Contact us as soon as possible if you need to modify or cancel your reservation.</p>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Rental Terms</h2>

          <div style={{ marginBottom: '0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Minimum Rental Period</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>The shortest guaranteed rental period is one month. Standard rental rates apply for this minimum term, with volume discounts available for longer deployments. Contact our sales team to discuss pricing for your specific rental duration and equipment needs.</p>
          </div>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Questions About Our Policy?</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Our rental team is here to answer any questions about our guarantee policy, rental terms, or equipment availability. Reach out with your specific rental requirements.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/contact-us" className="btn btn-amber" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Contact Our Team
            </Link>
            <Link href="/quote" className="btn btn-outline-dark" style={{ display: 'inline-block', padding: '10px 20px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
