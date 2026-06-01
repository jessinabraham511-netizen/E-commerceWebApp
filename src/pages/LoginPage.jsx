import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to={isAdmin ? "/admin" : "/products"} replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(result.user.role === "admin" ? "/admin" : "/products");
  };

  return (
    <section className="auth-card">
      <h2>Login</h2>
      <p className="auth-subtitle">Sign in to shop or manage the store.</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        {error && <p className="form-error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <div className="demo-credentials">
        <p><strong>Admin:</strong> admin@shop.com / admin123</p>
        <p><strong>User:</strong> user@shop.com / user123</p>
      </div>
    </section>
  );
}

export default LoginPage;
