import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      // Successful login -> Redirect to the dashboard running on port 3001
      window.location.href = "http://localhost:3001";
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm p-4 border-light rounded-3 bg-white">
            <h2 className="text-center text-secondary mb-4 fw-normal">Login</h2>
            
            {error && (
              <div className="alert alert-danger py-2 text-center" role="alert" style={{ fontSize: "0.9rem" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted" style={{ fontSize: "0.85rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label text-muted" style={{ fontSize: "0.85rem" }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control py-2"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-3 fw-medium"
                disabled={loading}
                style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary text-decoration-none fw-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
