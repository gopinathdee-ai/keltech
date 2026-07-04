import Navigation from './Navigation';

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--line-dark)',
      backgroundColor: 'var(--ink)',
    }}>
      <div style={{
        backgroundColor: 'var(--ink-soft)',
        color: 'var(--steel)',
        padding: '8px 28px',
        fontSize: '11.5px',
        letterSpacing: '0.02em',
        fontFamily: 'var(--font-mono)',
        textAlign: 'center',
      }}>
        <strong style={{ color: 'var(--amber-dim)' }}>Unofficial concept redesign</strong> — created independently as a design demo. Not affiliated with, endorsed by, or published on behalf of Keltech Communications Inc.
      </div>
      <Navigation />
    </header>
  );
}
