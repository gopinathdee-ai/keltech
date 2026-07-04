'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
            fontWeight: '600',
            fontSize: '14px',
            letterSpacing: '0.05em',
            color: 'var(--paper-dim)',
          }}>KELTECH</span>
          <span className="brand-sub" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: '500',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'var(--paper-dim)',
          }}>COMMUNICATIONS</span>
        </div>
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '40px', flex: 1, marginLeft: '60px' }}>
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
            <div className="dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'var(--paper)',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '8px',
              zIndex: 10,
            }}>
              <a href="/products#handheels" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Handheels</a>
              <a href="/products#mobiles" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Mobiles</a>
              <a href="/products#repeaters" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Repeaters</a>
              <a href="/products#applications" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none' }}>Applications</a>
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
            <div className="dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'var(--paper)',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '8px',
              zIndex: 10,
            }}>
              <a href="#" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Equipment</a>
              <a href="#" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Guarantee Policy</a>
              <a href="/terms-conditions" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none' }}>Terms &amp; Conditions</a>
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
            <div className="dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'var(--paper)',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '8px',
              zIndex: 10,
            }}>
              <a href="/services/licensing" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Licensing</a>
              <a href="/services/wireless-networking" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Wireless Networking</a>
              <a href="/services/wide-area-tower-system" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none' }}>Wide Area Tower System</a>
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
            <div className="dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'var(--paper)',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '8px',
              zIndex: 10,
            }}>
              <a href="/about-us" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Our Story</a>
              <a href="/contact-us" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line-light)' }}>Get in Touch</a>
              <a href="/promotions" style={{ padding: '12px 16px', color: 'var(--ink)', textDecoration: 'none' }}>What&apos;s New</a>
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
    </nav>
  );
}
