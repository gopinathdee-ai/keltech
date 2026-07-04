import Navigation from './Navigation';

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--line-light)',
      backgroundColor: 'var(--paper)',
    }}>
      <div style={{
        backgroundColor: 'var(--ink-soft)',
        color: 'white',
        padding: '8px 28px',
        fontSize: '12px',
        textAlign: 'center',
      }}>
        <strong>Unofficial concept redesign</strong> — created independently as a design demo. Not affiliated with, endorsed by, or published on behalf of Keltech Communications Inc.
      </div>
      <Navigation />
    </header>
  );
}
