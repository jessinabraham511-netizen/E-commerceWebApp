import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">New Season Collection</p>
        <h1>Everything You Need, In One Store</h1>
        <p>
          Discover quality products across electronics, fashion, home, and
          accessories. Build your cart and start shopping in seconds.
        </p>
        <Link to="/products" className="cta">
          Browse Products
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
