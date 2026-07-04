import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Keltech Communications — Rural Alberta Wireless Solutions</title>
        <meta name="description" content="Two-way radio and wireless network solutions for rural and remote Alberta" />
      </Head>

      <section className="hero">
        <svg className="hero-topo" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#5B7480" strokeOpacity="0.35" strokeWidth="1">
            <path d="M-50,120 C 200,60 400,180 650,110 S 1100,40 1260,120"/>
            <path d="M-50,190 C 220,140 420,240 660,180 S 1080,110 1260,190"/>
            <path d="M-50,260 C 240,220 440,300 670,250 S 1060,190 1260,260"/>
            <path d="M-50,330 C 260,300 460,360 680,320 S 1040,270 1260,330"/>
            <path d="M-50,400 C 280,380 480,420 690,390 S 1020,350 1260,400"/>
          </g>
        </svg>

        <svg className="hero-rings" viewBox="0 0 640 640" aria-hidden="true">
          <circle className="ring-pulse r1" cx="320" cy="320" r="300"/>
          <circle className="ring-pulse r2" cx="320" cy="320" r="300"/>
          <circle className="ring-pulse r3" cx="320" cy="320" r="300"/>
          <circle cx="320" cy="320" r="230" opacity="0.25"/>
          <circle cx="320" cy="320" r="160" opacity="0.35"/>
          <circle cx="320" cy="320" r="90" opacity="0.45"/>
        </svg>

        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">DRAYTON VALLEY, AB · EST. 1994</span>
            <h1>Custom communications for the parts of Alberta that <em>don't have a signal.</em></h1>
            <p className="lede">Keltech Communications designs, licenses and maintains two-way radio, wireless networking and tower infrastructure for rural and remote operations across the province.</p>
            <div className="hero-ctas">
              <Link href="/quote" className="btn btn-amber">Request a Quote</Link>
              <a href="#services" className="btn btn-outline">View Services</a>
            </div>
            <div className="hero-facts">
              <div className="hero-fact"><span className="num">1994</span><span className="lab">Operating in Drayton Valley since</span></div>
              <div className="hero-fact"><span className="num">2003</span><span className="lab">First ISP on Alberta SuperNet, Benalto</span></div>
              <div className="hero-fact"><span className="num">SECOR</span><span className="lab">Accredited safety program</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <span className="tower-badge tb1">TOWER SITE MGMT</span>
            <span className="tower-badge tb2">DRAYTON VALLEY, AB</span>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">SERVICES</span>
              <h2>Three ways we keep a site connected</h2>
            </div>
            <p>Licensing, network build, and the tower infrastructure underneath it — handled as one job, not handed off between vendors.</p>
          </div>
          <div className="services-grid">
            <div className="svc-card">
              <span className="svc-tag">SERVICE / LICENSING</span>
              <h3>Licensing</h3>
              <p>Radio frequency licensing handled end to end, so your two-way and SCADA systems are compliant and interference-free from day one.</p>
              <Link href="/services/licensing" className="svc-link">Learn about licensing <span className="arrow">→</span></Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag">SERVICE / NETWORKING</span>
              <h3>Wireless Networking</h3>
              <p>Local and last-mile wireless networking, including managed dedicated internet access and multi-site VLAN connectivity for remote operations.</p>
              <Link href="/services/wireless-networking" className="svc-link">Learn about networking <span className="arrow">→</span></Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag">SERVICE / TOWER SYSTEM</span>
              <h3>Wide Area Tower System</h3>
              <p>Tower site management across Alberta — electrical, fiber and SuperNet backhaul, RF interference administration, and self-support tower inspections.</p>
              <Link href="/services/wide-area-tower-system" className="svc-link">Learn about tower services <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="story">
        <div className="wrap story">
          <div className="story-copy">
            <span className="eyebrow">OUR STORY</span>
            <h2 style={{ margin: '14px 0 22px', fontSize: 'clamp(24px,2.8vw,32px)', maxWidth: '18ch' }}>Locally owned in Drayton Valley since 1994</h2>
            <p>Keltech Communications Inc. is a locally owned and operated communications company based in Drayton Valley, AB. The office is home base, but <strong>a great deal of field work is performed throughout Alberta</strong> — wherever rural and remote operations need reliable communications.</p>
            <p>Keltech operates <strong>conventional repeaters at multiple sites across central and western Alberta</strong>, alongside a newer <strong>wide-area Digital MotoTRBO Trunking System</strong> that extends seamless, secure two-way coverage across an even larger area of central-west Alberta — without switching channels.</p>
            <p>That digital trunking system relies on internet connectivity, which pairs with another line of business: in <strong>2003, Keltech became the first ISP to connect directly to Alberta SuperNet</strong> at Benalto. That connection became the model for a growing number of sites Keltech now owns and manages across the province, bringing wireless internet to rural and remote businesses that otherwise had no connectivity.</p>
          </div>
          <div className="story-timeline">
            <div className="story-milestone">
              <span className="yr">1994</span>
              <span className="desc">Keltech Communications founded in Drayton Valley, AB.</span>
            </div>
            <div className="story-milestone">
              <span className="yr">2003</span>
              <span className="desc">First ISP to connect directly to Alberta SuperNet, at Benalto — later expanded to multiple sites provincewide.</span>
            </div>
            <div className="story-milestone">
              <span className="yr">TODAY</span>
              <span className="desc">Conventional repeater network plus a wide-area Digital MotoTRBO Trunking System across central-west Alberta. SECOR-accredited safety program.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility" id="about">
        <div className="wrap">
          <div className="cred-grid">
            <div className="cred-item"><span className="num">1994</span><span className="lab">Founded in Drayton Valley, AB</span></div>
            <div className="cred-item"><span className="num">SECOR</span><span className="lab">Accredited safety program</span></div>
            <div className="cred-item"><span className="num">2</span><span className="lab">Authorized brands — Motorola &amp; Hytera</span></div>
            <div className="cred-item"><span className="num">AB</span><span className="lab">Field work performed provincewide</span></div>
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="wrap coverage">
          <div className="coverage-copy">
            <span className="eyebrow">SERVICE AREA</span>
            <h2>Based in Drayton Valley, working across Alberta</h2>
            <p>Our office is in Drayton Valley, but the majority of our field work happens on-site throughout the province — wherever rural and remote operations need reliable communications.</p>
            <Link href="/quote" className="btn btn-amber">Request a Quote</Link>
          </div>
          <div className="coverage-map">
            <svg viewBox="0 0 400 300" width="100%" height="100%" aria-hidden="true">
              <rect width="400" height="300" fill="#E4E1D4"/>
              <g fill="none" stroke="#5B7480" strokeOpacity="0.4" strokeWidth="1">
                <path d="M-10,40 C 90,10 190,70 310,30 S 420,20 430,40"/>
                <path d="M-10,90 C 100,60 200,120 320,80 S 420,70 430,90"/>
                <path d="M-10,140 C 110,110 210,170 330,130 S 420,120 430,140"/>
                <path d="M-10,190 C 120,160 220,220 340,180 S 420,170 430,190"/>
                <path d="M-10,240 C 130,210 230,270 350,230 S 420,220 430,240"/>
              </g>
              <circle cx="140" cy="150" r="4" fill="#C1531B"/>
              <text x="150" y="154" fontFamily="IBM Plex Mono" fontSize="9" fill="#5B7480">DRAYTON VALLEY (HQ)</text>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}
