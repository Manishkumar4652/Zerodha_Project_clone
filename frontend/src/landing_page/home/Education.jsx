import React from "react";

function Education() {
  return (
    <div className="container p-5 py-5">
      <div className="row align-items-center">

        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-12 mt-5 p-4">
          <h2 className="text-secondary">
            Free and open market education
          </h2>

          <p className="text-muted mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="# " className="me-5 text-decoration-none">
            Varsity →
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="# " className="text-decoration-none">
            TradingQ&A →
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;