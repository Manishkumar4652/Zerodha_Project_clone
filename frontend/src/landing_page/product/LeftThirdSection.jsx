import React from "react";

function LeftThirdSection() {
  return (
    <div className="container py-3 px-3">
      <div className="row align-items-center p-5">
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/phone.svg"
            alt="Market Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-5 ">
          <div className="w-75 ps-5 ms-5">
            <h2 className="text-secondary">Varsity mobile</h2>
            <p className="text-muted mt-4">
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>
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

export default LeftThirdSection;
