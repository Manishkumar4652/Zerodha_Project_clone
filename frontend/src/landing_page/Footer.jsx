import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5 border-top">
      <div className="container">
        <div className="row g-4">
          
          {/* Left Column: Logo, Copyright, Social Icons & App Buttons */}
          <div className="col-12 col-md-4 col-lg-3">
            {/* Zerodha Logo */}
            <div className="d-flex align-items-center mb-3">
              <img style={{width:"50%"}} src="media/images/logo.svg" alt="" />
            </div>

            {/* Copyright Text */}
            <p className="text-muted fs-7 mb-1" style={{ fontSize: '13px' }}>
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>
            <p className="text-muted fs-7 mb-3" style={{ fontSize: '13px' }}>
              All rights reserved.
            </p>

            {/* Social Icons - Row 1 */}
            <div className="d-flex gap-3 text-muted mb-3 fs-4">
              <a href=" " className="text-secondary text-decoration-none"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-square-facebook"></i></a>
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-square-instagram"></i></a>
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-square-linkedin"></i></a>
            </div>

            <hr className="my-2 text-muted" style={{ width: '80%' }} />

            {/* Social Icons - Row 2 */}
            <div className="d-flex gap-3 text-muted mb-4 fs-4">
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-youtube"></i></a>
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="text-secondary text-decoration-none"><i class="fa-brands fa-telegram"></i></a>
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

          {/* Column 2: Account */}
          <div className="col-6 col-md-2 col-lg-2 ms-lg-auto">
            <h5 className="fw-semibold text-dark mb-3 fs-6">Account</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><a href="#" className="text-muted text-decoration-none hover-primary">Open demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Minor demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">NRI demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">HUF demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Commodity</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Dematerialisation</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
              <li><a href="#" className="text-muted text-decoration-none">MTF</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-6 col-md-2 col-lg-2">
            <h5 className="fw-semibold text-dark mb-3 fs-6">Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><a href="#" className="text-muted text-decoration-none">Contact us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">How to file a complaint?</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Status of your complaints</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Bulletin</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Circular</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Downloads</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-6 col-md-2 col-lg-2">
            <h5 className="fw-semibold text-dark mb-3 fs-6">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Philosophy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Zerodha Cares (CSR)</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Zerodha.tech</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Open source</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Referral program</a></li>
            </ul>
          </div>

          {/* Column 5: Quick links */}
          <div className="col-6 col-md-2 col-lg-2">
            <h5 className="fw-semibold text-dark mb-3 fs-6">Quick links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Brokerage charges</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Market holidays</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Economic calendar</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Calculators</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Markets</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Sectors</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Gift Nifty</a></li>
            </ul>
          </div>
            <div className="container mt-5">

        <div className="small text-muted" style={{ lineHeight: "1.9" }}>

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            <a href="#" className="text-decoration-none ms-1">
              complaints@zerodha.com
            </a>
            , for DP related to
            <a href="#" className="text-decoration-none ms-1">
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document
            as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on
            <a href="#" className="text-decoration-none ms-1">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>

          <p>
            <a href="#" className="text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |
            <a href="#" className="text-decoration-none ms-2">
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system.
            Update your e-mail and phone number with your stock broker /
            depository participant and receive OTP directly from depository.
          </p>

          <p>
            India's largest broker based on net worth as per NSE.
            <a href="#" className="text-decoration-none ms-1">
              NSE broker factsheet
            </a>
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly
            from Exchange/Depositories on your mobile/email at the end of the
            day.
          </p>

          <p>
            Customers availing insurance advisory services offered by Ditto
            will not have access to the exchange investor grievance redressal
            forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. Fixed deposits
            are regulated by the Reserve Bank of India (RBI).
          </p>

        </div>

        <hr />

        <div className="d-flex flex-wrap justify-content-center gap-4">

          <a href="#" className="text-decoration-none text-secondary">
            NSE
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            BSE
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            MCX
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            MSEI
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Terms & Conditions
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Policies & Procedures
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Privacy Policy
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Disclosure
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            For Investor's Attention
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Investor Charter
          </a>

          <a href="#" className="text-decoration-none text-secondary">
            Sitemap
          </a>

        </div>

      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;