import React from "react";

function LeftSecondSection() {
  return (
    <div className="container py-4 px-3">
      <div className="row align-items-center p-5">
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/coin.png"
            alt="Market Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-5 ">
          <div className="w-75 ps-5 ms-5">
            <h2 className="text-secondary">Coin</h2>
            <p className="text-muted mt-4">
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account. Enjoy the investment experience on
              your Android and iOS devices.
            </p>
            <div className="mb-3">
              <a className="text-primary text-decoration-none me-4" href=" ">
                Coin  →
              </a>
            </div>
            {/* App Store Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-2">
              {/* Google Play Button Placeholder */}
              <a href="# " style={{ width: "50%" }}>
                <img src="media/images/googlePlayBadge.svg" alt="" />
              </a>

              {/* App Store Button Placeholder */}
              <a href="# " style={{ width: "50%" }}>
                <img src="media/images/appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSecondSection;
