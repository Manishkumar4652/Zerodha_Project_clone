import React from "react";

const Team = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <h2 className="text-center fw-semibold text-secondary mb-5 fs-2">
        People
      </h2>

      <div className="row align-items-center justify-content-center g-4">
        {/* Left Side: Profile Image & Details */}
        <div className="col-12 col-md-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle mb-3 img-fluid"
            style={{ width: "280px", height: "280px", objectFit: "cover" }}
          />
          <h4 className="fw-semibold text-dark mb-1 fs-4">Nithin Kamath</h4>
          <p className="text-muted fs-6 mb-0">Founder, CEO</p>
        </div>

        {/* Right Side: Bio Text */}
        <div className="col-12 col-md-6">
          <p
            className="text-secondary fs-6 leading-relaxed mb-3"
            style={{ color: "#4a4a4a", lineHeight: "1.7" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            className="text-secondary fs-6 leading-relaxed mb-3"
            style={{ color: "#4a4a4a", lineHeight: "1.7" }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p
            className="text-secondary fs-6 leading-relaxed mb-4"
            style={{ color: "#4a4a4a", lineHeight: "1.7" }}
          >
            Playing basketball is his zen.
          </p>

          {/* Social Links */}
          <div className="fs-6 fw-medium">
            <span className="text-muted">Connect on </span>
            <a href="# " className="text-primary text-decoration-none">
              Homepage
            </a>
            <span className="text-muted"> / </span>
            <a href="# " className="text-primary text-decoration-none">
              TradingQnA
            </a>
            <span className="text-muted"> / </span>
            <a href="# " className="text-primary text-decoration-none">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
