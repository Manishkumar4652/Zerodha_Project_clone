import React, { useState } from 'react';

const Hero = () => {
  // Category list item open/close logic
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const categories = [
    {
      title: 'Account Opening',
      links: [
        '· Resident individual',
        '· Minor',
        '· Non Resident Indian (NRI)',
        '· Company, Partnership, HUF and LLP',
        '· Glossary',
      ],
    },
    {
      title: 'Your Zerodha Account',
      links: [
        '· Your Profile',
        '· Account modification',
        '· Client Master Report (CMR) and Depository Participant (DP)',
        '· Nomination',
        '· Transfer and conversion of securities',
      ],
    },
    {
      title: 'Kite',
      links: [
        '· IPO',
        '· Trading FAQs',
        '· Margin Trading Facility (MTF) and Margins',
        '· Charts and orders',
        '· Alerts and Nudges',
        '· General',
      ],
    },
    {
      title: 'Funds',
      links: [
        '· Add money',
        '· Withdraw money',
        '· Add bank accounts',
        '· eMandates',
      ],
    },
    {
      title: 'Console',
      links: [
        '· Portfolio',
        '· Corporate actions',
        '· Funds statement',
        '· Reports',
        '· Profile',
        '· Segments',
      ],
    },
    {
      title: 'Coin',
      links: [
        '· Mutual funds',
        '· National Pension Scheme (NPS)',
        '· Fixed Deposit (FD)',
        '· Features on Coin',
        '· Payments and Orders',
        '· General',
      ],
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Main Content Area */}
      <div className="container py-5" style={{ maxWidth: '1250px' }}>
        <div></div>
        {/* 2. Top Title & Search Section */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-semibold text-dark fs-1 mb-0" style={{ color: '#424242', fontFamily:"sans-serif" }}>
            Support Portal
          </h1>
          <button 
            className="btn btn-primary px-4 py-2 fw-medium rounded"
            style={{ backgroundColor: '#387ed1', borderColor: '#387ed1' }}
          >
            My tickets
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="mb-5">
          <div className="position-relative border-bottom p-4">
            <span className="position-absolute start-10 top-50 translate-middle-y ms-3 text-muted">
              🔍
            </span>
            <input
              type="text"
              className="form-control form-control-lg bg-white border ps-5 py-3 fs-6"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
              style={{ borderColor: '#e0e0e0', color: '#666' }}
            />
          </div>
        </div>

        {/* 3. Grid Layout: Left List + Right Sidebar */}
        <div className="row g-4">
          
          {/* Left Column: Categories List */}
          <div className="col-12 col-md-7 col-lg-8">
            <div className="d-flex flex-column gap-3">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white border rounded shadow-sm overflow-hidden">
                  <button
                    className="w-100 btn d-flex justify-content-between align-items-center p-3 text-start border-0"
                    onClick={() => toggleSection(idx)}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="text-primary fs-5">
                        <i class="fa-solid fa-square-plus"></i>
                      </span>
                      <span className="fw-medium text-dark fs-6" style={{ color: '#424242' }}>
                        {cat.title}
                      </span>
                    </div>
                    <span className="text-muted fs-6">
                      {openSection === idx ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}
                    </span>
                  </button>

                  {/* Expandable Links */}
                  {openSection === idx && (
                    <div className="px-4 pb-3 pt-2 border-top bg-white">
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
                        {cat.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a href="# " className="text-primary text-decoration-none">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar Notices & Quick Links */}
          <div className="col-12 col-md-5 col-lg-4">
            
            {/* Notices Box (Yellow Border Left) */}
            <div 
              className="p-3 rounded mb-4" 
              style={{ backgroundColor: '#fff9e6', borderLeft: '4px solid #f0a000' }}
            >
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3" style={{ fontSize: '14px' }}>
                <li className="d-flex gap-2 align-items-start">
                  <span className="text-primary">•</span>
                  <a href="# " className="text-primary text-decoration-none">
                    Surveillance measure on scrips - August 2026
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-start">
                  <span className="text-primary">•</span>
                  <a href="# " className="text-primary text-decoration-none">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white border rounded p-4">
              <h6 className="fw-semibold text-secondary mb-3 fs-6" style={{ color: '#424242' }}>
                Quick links
              </h6>
              <div className="d-flex flex-column gap-3" style={{ fontSize: '14px' }}>
                <a href="# " className="text-primary text-decoration-none">
                  1. Track account opening
                </a>
                <a href="# " className="text-primary text-decoration-none">
                  2. Track segment activation
                </a>
                <a href="# " className="text-primary text-decoration-none">
                  3. Intraday margins
                </a>
                <a href="# " className="text-primary text-decoration-none">
                  4. Kite user manual
                </a>
                <a href="# " className="text-primary text-decoration-none">
                  5. Learn how to create a ticket
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;