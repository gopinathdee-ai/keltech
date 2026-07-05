'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav className="wrap" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 28px',
      height: '76px',
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="brand" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span className="brand-mark" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            fontSize: '18px',
            letterSpacing: '0.05em',
            color: 'var(--paper-dim)',
          }}>KELTECH</span>
          <span className="brand-sub" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: '600',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--paper-dim)',
          }}>COMMUNICATIONS</span>
        </div>
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '40px', flex: 1, justifyContent: 'center' }}>
        <div className="nav-item" style={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}>
          <Link href="/products" style={{
            textDecoration: 'none',
            color: 'var(--paper-dim)',
            fontWeight: '500',
          }}>
            Products
          </Link>
          {activeDropdown === 'products' && (
            <div className="dropdown"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
              style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#1a242d',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '0',
              zIndex: 10,
            }}>
              <a href="/products#handhelds" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Handhelds</a>
              <a href="/products#mobiles" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Mobiles</a>
              <a href="/products#repeaters" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Repeaters</a>
              <a href="/products#applications" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Applications</a>
            </div>
          )}
        </div>

        <div className="nav-item" style={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('rentals')}
          onMouseLeave={handleMouseLeave}>
          <Link href="#rentals" style={{
            textDecoration: 'none',
            color: 'var(--paper-dim)',
            fontWeight: '500',
          }}>
            Rentals
          </Link>
          {activeDropdown === 'rentals' && (
            <div className="dropdown"
              onMouseEnter={() => handleMouseEnter('rentals')}
              onMouseLeave={handleMouseLeave}
              style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#1a242d',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '0',
              zIndex: 10,
            }}>
              <a href="/rentals/equipment" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Equipment</a>
              <a href="/rentals/guarantee-policy" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Guarantee Policy</a>
              <a href="/terms-conditions" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Terms &amp; Conditions</a>
            </div>
          )}
        </div>

        <div className="nav-item" style={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}>
          <Link href="/services" style={{
            textDecoration: 'none',
            color: 'var(--paper-dim)',
            fontWeight: '500',
          }}>
            Services
          </Link>
          {activeDropdown === 'services' && (
            <div className="dropdown"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
              style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#1a242d',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '0',
              zIndex: 10,
            }}>
              <a href="/services/licensing" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Licensing</a>
              <a href="/services/wireless-networking" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Wireless Networking</a>
              <a href="/services/wide-area-tower-system" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Wide Area Tower System</a>
            </div>
          )}
        </div>

        <div className="nav-item" style={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}>
          <Link href="/about-us" style={{
            textDecoration: 'none',
            color: 'var(--paper-dim)',
            fontWeight: '500',
          }}>
            About Us
          </Link>
          {activeDropdown === 'about' && (
            <div className="dropdown"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
              style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#1a242d',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '0',
              zIndex: 10,
            }}>
              <a href="/about-us" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Our Story</a>
              <a href="/contact-us" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>Get in Touch</a>
              <a href="/promotions" style={{ padding: '12px 16px', color: 'var(--paper-dim)', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--paper-dim)'; }}>What&apos;s New</a>
            </div>
          )}
        </div>
      </div>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span className="nav-phone" style={{ fontSize: '14px', color: 'var(--paper-dim)' }}>☎ 1-800-449-5707</span>
        <Link href="/quote" className="btn btn-amber" style={{
          padding: '10px 20px',
          backgroundColor: 'var(--amber)',
          color: 'var(--ink)',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '14px',
          display: 'inline-block',
        }}>
          Request a Quote
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          color: 'var(--paper-dim)',
          fontSize: '24px',
        }}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: '113px',
          left: '0',
          right: '0',
          backgroundColor: 'var(--ink)',
          borderBottom: '1px solid var(--line-dark)',
          zIndex: 40,
          padding: '16px 28px',
        }}>
          <Link href="/products" style={{ display: 'block', padding: '12px 0', color: 'var(--paper-dim)', textDecoration: 'none' }}>Products</Link>
          <Link href="#rentals" style={{ display: 'block', padding: '12px 0', color: 'var(--paper-dim)', textDecoration: 'none' }}>Rentals</Link>
          <Link href="/services" style={{ display: 'block', padding: '12px 0', color: 'var(--paper-dim)', textDecoration: 'none' }}>Services</Link>
          <Link href="/about-us" style={{ display: 'block', padding: '12px 0', color: 'var(--paper-dim)', textDecoration: 'none' }}>About Us</Link>
          <Link href="/quote" style={{ display: 'block', padding: '12px 0', marginTop: '8px', color: 'var(--paper-dim)', textDecoration: 'none', fontWeight: '500' }}>Request a Quote</Link>
        </div>
      )}
    </nav>
  );
}
