import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-5"
          />

          <h1 className="mt-3">Invest in everything</h1>

          <p className="mt-3 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary px-4 py-2 mt-3 mb-5"
            style={{ width: "220px", textDecoration: "none" }}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;