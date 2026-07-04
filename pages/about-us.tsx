import Link from 'next/link'
import Head from 'next/head'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 28px' }}>
        <div className="crumb" style={{ padding: '20px 0', marginBottom: '0' }}>Home / About Us</div>

        <section id="story" style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <div style={{ marginBottom: '20px' }}>
            <span className="eyebrow">OUR STORY</span>
            <h1 style={{ margin: '12px 0 16px', fontSize: '32px' }}>Locally owned in Drayton Valley since 1994</h1>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink)' }}>
              <p style={{ marginBottom: '16px' }}>Keltech Communications Inc. is a locally owned and operated communications company based in Drayton Valley, AB. The office is home base, but <strong>a great deal of field work is performed throughout Alberta</strong> — wherever rural and remote operations need reliable communications.</p>
              <p style={{ marginBottom: '16px' }}>Keltech operates <strong>conventional repeaters at multiple sites across central and western Alberta</strong>, alongside a newer <strong>wide-area Digital MotoTRBO Trunking System</strong> that extends seamless, secure two-way coverage across an even larger area of central-west Alberta — without switching channels.</p>
              <p style={{ margin: '0' }}>That digital trunking system relies on internet connectivity, which pairs with another line of business: in <strong>2003, Keltech became the first ISP to connect directly to Alberta SuperNet</strong> at Benalto. That connection became the model for a growing number of sites Keltech now owns and manages across the province, bringing wireless internet to rural and remote businesses that otherwise had no connectivity.</p>
            </div>

            <div style={{ paddingLeft: '20px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--amber)' }}></div>

                <div style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '13px', color: 'var(--amber)' }}>1994</span>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--steel)', margin: '4px 0 0 0' }}>Keltech Communications founded in Drayton Valley, AB.</p>
                </div>

                <div style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '13px', color: 'var(--amber)' }}>2003</span>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--steel)', margin: '4px 0 0 0' }}>First ISP to connect directly to Alberta SuperNet, at Benalto — later expanded to multiple sites provincewide.</p>
                </div>

                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '13px', color: 'var(--amber)' }}>TODAY</span>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--steel)', margin: '4px 0 0 0' }}>Conventional repeater network plus a wide-area Digital MotoTRBO Trunking System across central-west Alberta. SECOR-accredited safety program.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '32px 0', marginBottom: '0', borderBottom: '1px solid var(--line-light)' }}>
          <span className="eyebrow">PARTNERS &amp; BRANDS</span>
          <h2 style={{ margin: '12px 0 20px', fontSize: '20px', fontWeight: '600' }}>Authorized dealer &amp; technology partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', alignItems: 'center' }}>
            <div style={{ background: '#fff', padding: '16px', borderRadius: '4px', aspectRatio: '2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-light)' }}>
              <span style={{ color: 'var(--steel)', fontSize: '12px', textAlign: 'center' }}>MOTOROLA SOLUTIONS LOGO</span>
            </div>
            <div style={{ background: '#fff', padding: '16px', borderRadius: '4px', aspectRatio: '2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-light)' }}>
              <span style={{ color: 'var(--steel)', fontSize: '12px', textAlign: 'center' }}>HYTERA LOGO</span>
            </div>
            <div style={{ background: '#fff', padding: '16px', borderRadius: '4px', aspectRatio: '2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-light)' }}>
              <span style={{ color: 'var(--steel)', fontSize: '12px', textAlign: 'center' }}>MOTOTRBO LOGO</span>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '32px 0' }}>
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Safety &amp; Accreditation</h2>
            <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>Keltech Communications Inc. recognizes the importance of safety in all industries and has a fully developed and implemented Safety Program, with SECOR accreditation.</p>
          </div>
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>Authorized Dealers</h2>
            <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', margin: '0' }}>As Motorola Solutions and Hytera authorized dealers, we sell and support their top quality products, providing solutions for industries across central and western Alberta.</p>
          </div>
        </section>
      </div>
    </>
  )
}
