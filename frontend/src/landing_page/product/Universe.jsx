import React from "react";

function Universe() {
  return (
    <div className="container my-5 p-5">
      <p className="text-muted text-center mb-5 fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="# " className="text-primary text-decoration-none fw-medium">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="mb-4">The Zerodha Universe</h2>

        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Products */}
      <div className="row text-center">
        {/* Zerodha Fund House */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-4"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-4 p-2"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-fluid mb-4"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-4"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-4"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-4"
            style={{ height: "70px" }}
          />

          <p className="text-muted">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary px-5 py-3 fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
