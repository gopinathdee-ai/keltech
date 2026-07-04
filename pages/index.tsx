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
              <Link href="/services" className="btn btn-outline">View Services</Link>
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
