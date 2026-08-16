import React from "react";

function Stats() {
  return (
    <div className="stats-container container py-5 p-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-5">
          <h3 className="mb-5">Trust with confidence</h3>

          <div className="mb-5">
            <h4 className="text-muted">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India's largest broker,
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="text-muted">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push
              notifications. High quality apps that you use at your pace, the
              way you like.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="text-muted">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h4 className="text-muted">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-7 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
          />

          <div className="mt-4">
            <a href=" " className="me-5 text-decoration-none">
              Explore our products →
            </a>

            <a href=" " className="text-decoration-none">
              Try Kite demo →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;