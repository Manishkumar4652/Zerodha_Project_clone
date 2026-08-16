import React from "react";

function RightSecondSection() {
  return (
    <div className="container py-4 px-3">
      <div className="row align-items-center p-5">
        <div className="col-lg-6 col-md-6 col-12 p-5 ">
          <div className="w-75 ps-5 ms-5">
            <h2 className="text-secondary">Kite Connect API</h2>
            <p className="text-muted mt-4">
              Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
            </p>
            <div className="mb-3">
              <a className="text-primary text-decoration-none me-4" href=" ">
                Kite Connect  →
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/teli.svg"
            alt="Market Education"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSecondSection;
