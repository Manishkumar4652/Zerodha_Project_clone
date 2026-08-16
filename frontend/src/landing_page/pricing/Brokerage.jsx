import React from 'react';

const Brokerage = () => {
  return (
    <div className="container py-5 my-4">
      {/* Heading */}
      <h2 className="fw-normal text-dark mb-5 fs-3" style={{ color: '#424242' }}>
        Charges explained
      </h2>

      {/* 2-Column Grid Content */}
      <div className="row g-5" style={{ color: '#666', fontSize: '13px', lineHeight: '1.7' }}>
        
        {/* Left Column */}
        <div className="col-12 col-md-6">
          {/* Securities/Commodities transaction tax */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Securities/Commodities transaction tax
            </h5>
            <p className="mb-2">
              Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="mb-0">
              When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
            </p>
          </div>

          {/* Transaction/Turnover Charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Transaction/Turnover Charges
            </h5>
            <p className="mb-2">
              Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
            </p>
            <p className="mb-2">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="mb-2">
              BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="mb-2">
              BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
            </p>
            <p className="mb-0">
              BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
            </p>
          </div>

          {/* Call & trade */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Call & trade
            </h5>
            <p className="mb-0">
              Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
            </p>
          </div>

          {/* Stamp charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Stamp charges
            </h5>
            <p className="mb-0">
              Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6">
          {/* GST */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              GST
            </h5>
            <p className="mb-0">
              Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
            </p>
          </div>

          {/* SEBI Charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              SEBI Charges
            </h5>
            <p className="mb-0">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
            </p>
          </div>

          {/* DP (Depository participant) charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              DP (Depository participant) charges
            </h5>
            <p className="mb-2">
              ₹15.34 per scrip (€3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
            </p>
            <p className="mb-2">
              Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="mb-0">
              Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
            </p>
          </div>

          {/* Pledging charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Pledging charges
            </h5>
            <p className="mb-0">
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>

          {/* AMC (Account maintenance charges) */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              AMC (Account maintenance charges)
            </h5>
            <p className="mb-2">
              Free for the first year on all new resident individual accounts.
            </p>
            <p className="mb-2">
              For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.{' '}
              <a href="# " className="text-primary text-decoration-none">Click here</a>
            </p>
            <p className="mb-0">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).{' '}
              <a href="# " className="text-primary text-decoration-none">Click here</a>
            </p>
          </div>

          {/* Corporate action order charges */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark fs-6 mb-2">
              Corporate action order charges
            </h5>
            <p className="mb-0">
              ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brokerage;