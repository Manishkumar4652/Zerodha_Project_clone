import React from 'react';
import './Heroj.css';

function Hero() {
    return (
<section className="container charges-section">

    <div className="text-center charges-heading">
        <h2 className='hadi'>Charges</h2>
        <p className="text-muted fs-5">
            List of all charges and taxes
        </p>
    </div>

    <div className="row text-center">

        <div className="col-md-4 charge-card">
            <img src="media/images/pricing0.svg" alt="pricing0" />
            <h3>Free equity delivery</h3>
            <p>
                All equity delivery investments (NSE, BSE),
                are absolutely free — ₹ 0 brokerage.
            </p>
        </div>

        <div className="col-md-4 charge-card">
            <img src="media/images/intradayTrades.svg" alt="intradayTrades" />
            <h3>Intraday and F&amp;O trades</h3>
            <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per
                executed order on intraday trades across equity,
                currency, and commodity trades. Flat ₹20 on all
                option trades.
            </p>
        </div>

        <div className="col-md-4 charge-card">
            <img src="media/images/pricing0.svg" alt="pricing0" />
            <h3>Free direct MF</h3>
            <p>
                All direct mutual fund investments are absolutely
                free — ₹ 0 commissions &amp; DP charges.
            </p>
        </div>

    </div>
</section>
    );
}

export default Hero;