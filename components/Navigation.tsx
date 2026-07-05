'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
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

  const toggleMobileItem = (item: string) => {
    setExpandedMobileItem(expandedMobileItem === item ? null : item);
  };

  return (
    <>
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

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => {
          setExpandedMobileItem(null);
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--paper-dim)',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '8px',
          zIndex: 100,
        }}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div
        className="mobile-menu-overlay"
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 40,
        }}
      />
    )}

    {/* Mobile Menu */}
    {mobileMenuOpen && (
    <div
      className="mobile-menu"
      style={{
        position: 'fixed',
        top: '145px',
        left: 0,
        right: 0,
        backgroundColor: 'var(--ink)',
        borderBottom: '1px solid var(--line-dark)',
        maxHeight: 'calc(100vh - 145px)',
        overflowY: 'auto',
        zIndex: 50,
      }}
    >
      {/* Products */}
      <div className="mobile-menu-item">
        <button
          onClick={() => toggleMobileItem('products')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid var(--line-dark)',
            color: 'var(--paper-dim)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Products
          <span style={{ transform: expandedMobileItem === 'products' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
        </button>
        {expandedMobileItem === 'products' && (
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Link href="/products#handhelds" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Handhelds</Link>
            <Link href="/products#mobiles" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Mobiles</Link>
            <Link href="/products#repeaters" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Repeaters</Link>
            <Link href="/products#applications" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none' }}>Applications</Link>
          </div>
        )}
      </div>

      {/* Rentals */}
      <div className="mobile-menu-item">
        <button
          onClick={() => toggleMobileItem('rentals')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid var(--line-dark)',
            color: 'var(--paper-dim)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Rentals
          <span style={{ transform: expandedMobileItem === 'rentals' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
        </button>
        {expandedMobileItem === 'rentals' && (
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Link href="/rentals/equipment" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Equipment</Link>
            <Link href="/rentals/guarantee-policy" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Guarantee Policy</Link>
            <Link href="/terms-conditions" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        )}
      </div>

      {/* Services */}
      <div className="mobile-menu-item">
        <button
          onClick={() => toggleMobileItem('services')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid var(--line-dark)',
            color: 'var(--paper-dim)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Services
          <span style={{ transform: expandedMobileItem === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
        </button>
        {expandedMobileItem === 'services' && (
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Link href="/services/licensing" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Licensing</Link>
            <Link href="/services/wireless-networking" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Wireless Networking</Link>
            <Link href="/services/wide-area-tower-system" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none' }}>Wide Area Tower System</Link>
          </div>
        )}
      </div>

      {/* About Us */}
      <div className="mobile-menu-item">
        <button
          onClick={() => toggleMobileItem('about')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid var(--line-dark)',
            color: 'var(--paper-dim)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          About Us
          <span style={{ transform: expandedMobileItem === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
        </button>
        {expandedMobileItem === 'about' && (
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Our Story</Link>
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid var(--line-dark)' }}>Get in Touch</Link>
            <Link href="/promotions" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 20px 12px 40px', color: 'var(--paper-dim)', fontSize: '13px', textDecoration: 'none' }}>What&apos;s New</Link>
          </div>
        )}
      </div>
    </div>
    )}
    </>
  );
}
