import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div>
            <div className="container p-5 mt-5 py-5">
                <div className="row justify-content-center text-center">
                    <h1 className="mt-3 fs-2 text-secondary">Open a Zerodha account</h1>

                    <p className="mt-3 text-muted">
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>

                    <Link
                        to="/signup"
                        className="btn btn-primary px-4 py-2 mt-3 mb-5"
                        style={{ width: "220px", textDecoration: "none" }}>
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;