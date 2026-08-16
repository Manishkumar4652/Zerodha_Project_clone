import React from 'react';

function Kite() {
    return (
        <div
            className="p-4 my-4 mb-5 py-5"
            style={{ backgroundColor: '#f4f8fc', borderRadius: '4px' }}
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Side: Logo + Title */}
                    <div className="col-md-4 col-lg-3 mb-3 mb-md-0 d-flex align-items-center justify-content-md-start justify-content-center">
                        {/* Red Kite Icon SVG */}
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="#e14b33"
                            className="me-2"
                        >
                            <polygon points="12,2 2,22 12,17 22,22" />
                        </svg>

                        <h3 className="fw-bold mb-0 text-dark fs-4">
                            Kite Connect
                        </h3>
                    </div>

                    {/* Right Side: Description + Link */}
                    <div className="col-md-8 col-lg-9 text-center text-md-start">
                        <p className="text-muted mb-0 fs-6 style={{ color: '#666' }}">
                            Need more? Build your own trading and investing experience with Kite Connect,
                            simple HTTP APIs to place orders, stream market data, manage your account,
                            and more.{' '}
                            <a
                                href="#explore"
                                className="text-primary text-decoration-none fw-semibold ms-1"
                            >
                                Explore &rarr;
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Kite;