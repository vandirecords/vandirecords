export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <span className="brand-logo" aria-hidden />
          <span className="brand-title vhs">Vandi Records</span>
          <span className="brand-title vhs" data-text="Vandi Records">Vandi Records</span>

        </div>
        <nav aria-label="Main">
          <a href="/" style={{ marginRight: 16 }}>Home</a>
          <a href="/music" style={{ marginRight: 16 }}>Music</a>
          <a href="/shop"  style={{ marginRight: 16 }}>Shop</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="top-strip" />
    </header>
  );
}
