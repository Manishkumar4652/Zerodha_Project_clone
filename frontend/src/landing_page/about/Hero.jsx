import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="custom-container">
      <div className="row mt-5 p-5 mb-5">
        <h1 className="fs-4 text-muted text-center p-4 fw-medium">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row g-5 justify-content-center"
        style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.8" }}
      >
      
        <div className="col-12 col-md-6">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="mb-0">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <p className="mb-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="mb-4">
            <a href="# " className="text-primary text-decoration-none fw-medium">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="mb-0">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="# " className="text-primary text-decoration-none fw-medium">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="# " className="text-primary text-decoration-none fw-medium">
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href=" " className="text-primary text-decoration-none fw-medium">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
