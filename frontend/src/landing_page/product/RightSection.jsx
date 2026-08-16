import React from "react";

function RightSection() {
  return (
    <div className="container py-4 px-3">
      <div className="row align-items-center p-5">
        <div className="col-lg-6 col-md-6 col-12 p-5 ">
          <div className="w-75 ps-5 ms-5">
            <h2 className="text-secondary">Console</h2>
            <p className="text-muted mt-4">
              The central dashboard for your Zerodha account. Gain insights into
              your trades and investments with in-depth reports and
              visualisations.
            </p>
            <div className="mb-3">
              <a className="text-primary text-decoration-none me-4" href=" ">
                Learn more →
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/console.png"
            alt="Market Education"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
