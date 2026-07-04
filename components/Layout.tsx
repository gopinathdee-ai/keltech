import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <div className="demo-badge" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'var(--rust)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '600',
        zIndex: 999,
      }}>
        DEMO CONCEPT — NOT LIVE
      </div>
    </div>
  );
}
