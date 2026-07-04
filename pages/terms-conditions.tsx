import Link from 'next/link'
import Head from 'next/head'

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Rental Terms & Conditions — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / Terms &amp; Conditions</div>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">RENTAL TERMS</span>
          <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Terms &amp; Conditions</h1>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>Keltech Communications rental equipment is provided under the following terms. Please review these conditions carefully before renting equipment.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Account &amp; Payment</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Rental clients are best served when a credit account is active with Keltech Communications. However, we will provide non-account clients with rentals using credit card pre-authorizations. This allows us to secure your reservation while maintaining payment flexibility for your business.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Programming &amp; Setup Fees</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Standard rental rates cover up to 8 conventional analog channels. Custom applications such as repeaters and specialized configurations will incur additional programming and setup charges. Contact our team to discuss pricing for your specific equipment and channel requirements.</p>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Renter Responsibility</h2>

          <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Liability &amp; Rental Period</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Renters assume full liability for all rental equipment from the time it departs Keltech's facility through its return. The rental period begins when equipment leaves our facility and ends upon its return. You are responsible for all shipping and delivery costs.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>Damage &amp; Maintenance</h3>
            <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Renters are responsible for all damages incurred during the rental period, including cleaning costs and charges for misuse beyond normal wear and tear. Equipment must be returned in the same condition as received.</p>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '600', margin: '0 0 20px 0' }}>Lost Equipment Policy</h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', margin: '0 0 12px 0' }}>Non-returned items will be invoiced for full replacement value upon the expected return date. This ensures Keltech can replace equipment and maintain our rental fleet for other customers.</p>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>However, if missing items are recovered in working condition within 30 days of the rental period end date, they may qualify for credit consideration. Please contact us immediately if equipment is lost or if return will be delayed.</p>
        </section>

        <section style={{ padding: '32px 0' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600', margin: '0 0 16px 0' }}>Questions About Rental Terms?</h2>
          <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', margin: '0 0 16px 0' }}>Our rental team is available to answer questions about these terms and conditions, or to discuss your specific rental requirements.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-amber" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Contact Us
            </Link>
            <Link href="/quote" className="btn btn-outline-dark" style={{ display: 'inline-block', padding: '10px 20px', border: '1px solid var(--ink)', color: 'var(--ink)', backgroundColor: 'transparent', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
              Request a Quote
            </Link>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>Keltech Communications Inc.</h3>
            <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 8px 0' }}>6414 50th Ave<br />Drayton Valley, AB T7A 1R4<br />Canada</p>
            <p style={{ margin: '0 0 4px 0' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>1-800-449-5707</a></p>
            <p style={{ margin: '0' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>info@keltech.ab.ca</a></p>
          </div>
        </section>
      </div>
    </>
  )
}
