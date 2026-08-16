import React from "react";

function Pricing() {
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-4">
          <h2 className="mb-4">Unbeatable pricing</h2>

          <p className="text-muted fs-5">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a
            href=" "
            className="text-decoration-none fw-semibold fs-5"
            style={{ color: "#387ed1" }}
          >
            See pricing →
          </a>
        </div>

        {/* Right Side */}
        <div className="col-lg-8">
          <div className="row text-center">

            {/* Item 1 */}
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
              <img
                src="media/images/pricing0.svg"
                alt=""
                style={{ width: "110px" }}
              />

              <p
                className="ms-3 text-start text-muted"
                style={{ fontSize: "14px" }}
              >
                Free account
                <br />
                opening
              </p>
            </div>

            {/* Item 2 */}
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
              <img
                src="media/images/pricing0.svg"
                alt=""
                style={{ width: "110px" }}
              />

              <p
                className="ms-3 text-start text-muted"
                style={{ fontSize: "14px" }}
              >
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            {/* Item 3 */}
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
              <img
                src="media/images/intradayTrades.svg"
                alt=""
                style={{ width: "110px" }}
              />

              <p
                className="ms-3 text-start text-muted"
                style={{ fontSize: "14px" }}
              >
                Intraday and
                <br />
                F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;