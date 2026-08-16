import React from "react";

function LeftSection() {
  return (
    <div className="container py-4 px-3">
      <div className="row align-items-center border-top p-5">
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/kite.png"
            alt="Market Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-5 ">
        <div className="w-75 ps-5 ms-5">
          <h2 className="text-secondary">Kite</h2>
          <p className="text-muted mt-4">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div className="mb-3">
            <a className="text-primary text-decoration-none me-4" href=" ">Try demo →</a>
            <a className="text-primary text-decoration-none me-4"  href=" ">Learn more →</a>
          </div>
            {/* App Store Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-2">
              {/* Google Play Button Placeholder */}
              <a href="# " style={{width:"50%"}}>
                    <img src="media/images/googlePlayBadge.svg" alt="" />
              </a>

              {/* App Store Button Placeholder */}
              <a href="# " style={{width:"50%"}}>
                    <img src="media/images/appstoreBadge.svg" alt="" />
              </a>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
