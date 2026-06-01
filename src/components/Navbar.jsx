import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { itemsCount } = useCart();
  const { user, isAdmin, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        ShopSphere
      </Link>
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart ({itemsCount})
        </NavLink>
        {isAdmin && (
          <NavLink to="/admin" className="nav-link">
            Admin
          </NavLink>
        )}
        {isAuthenticated ? (
          <>
            <span className="nav-user">Hi, {user.name}</span>
            <button type="button" className="nav-button secondary" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
