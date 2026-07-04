import Head from 'next/head'

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '30px 28px' }}>
        <div className="crumb" style={{ marginBottom: '40px' }}>Home / Terms &amp; Conditions</div>

        <section style={{ marginBottom: '60px' }}>
          <span className="eyebrow">LEGAL</span>
          <h1 style={{ margin: '14px 0 30px', fontSize: '32px' }}>Terms &amp; Conditions</h1>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>About This Website</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', letterSpacing: '0.3px', marginBottom: '24px' }}>This website is an <strong>unofficial concept redesign</strong> created independently as a design demonstration. It is not affiliated with, endorsed by, or published on behalf of Keltech Communications Inc. This is a design concept and prototype, not a live production website.</p>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', letterSpacing: '0.3px' }}>All product names, logos, and trademarks mentioned on this site belong to their respective owners, including but not limited to Motorola Solutions, Hytera, and Keltech Communications Inc.</p>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Attributions &amp; Credits</h2>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Icon Attribution</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '8px' }}>The favicon and radio icons used throughout this site are provided by Flaticon.</p>
            <p style={{ margin: '0' }}><a href="https://www.flaticon.com/free-icons/radio" title="radio icons" style={{ color: 'var(--amber)', textDecoration: 'none' }}>Radio icons created by Iconic Panda - Flaticon</a></p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Design &amp; Development</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '8px' }}>Design and development by <a href="https://www.herzsolutions.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)', textDecoration: 'none' }}>Herz Solutions</a>.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Fonts</h3>
            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '8px' }}>Typefaces used on this site are served via Google Fonts:</p>
            <ul style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginLeft: '20px' }}>
              <li><strong>Space Grotesk</strong> — Display headings</li>
              <li><strong>IBM Plex Sans</strong> — Body text and interface</li>
              <li><strong>IBM Plex Mono</strong> — Code and technical content</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Disclaimer</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', letterSpacing: '0.3px' }}>This is a concept demonstration website. Information presented here is for design purposes only. The quote form and other interactive features are non-functional by design and do not collect, store, or transmit any data. For actual product inquiries and quotes, please contact Keltech Communications directly using the contact information provided.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Contact</h2>
          <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.75', marginBottom: '20px' }}>For questions about this website or to contact Keltech Communications:</p>
          <div style={{ background: 'var(--paper-dim)', padding: '24px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 12px 0', fontWeight: '600' }}>Keltech Communications Inc.</p>
            <p style={{ margin: '0 0 8px 0', color: 'var(--steel)' }}>6414 50th Ave<br />Drayton Valley, AB T7A 1R4<br />Canada</p>
            <p style={{ margin: '0 0 4px 0' }}><a href="tel:1-800-449-5707" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: '500' }}>☎ 1-800-449-5707</a></p>
            <p style={{ margin: '0' }}><a href="mailto:info@keltech.ab.ca" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: '500' }}>✉ info@keltech.ab.ca</a></p>
          </div>
        </section>
      </div>
    </>
  )
}
