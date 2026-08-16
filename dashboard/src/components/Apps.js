import React, { useState } from "react";
import axios from "axios";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const Apps = () => {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchPrice = async (e) => {
    e.preventDefault();
    if (!symbol.trim()) {
      setError("Please enter a stock symbol.");
      return;
    }

    setLoading(true);
    setError("");
    setStockData(null);

    const token = getCookie("token");
    if (!token) {
      setError("Session expired. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/api/market-data/stock-price`, {
        params: { symbol: symbol.toUpperCase() },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStockData(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch stock price. Please verify your symbol and Alpha Vantage API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "40px auto",
      padding: "24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#fff",
      border: "1px solid #e0e0e0",
      borderRadius: "4px"
    }}>
      <h2 style={{ fontSize: "1.3rem", fontWeight: "500", color: "#333", marginBottom: "8px" }}>
        Alpha Vantage API Verification
      </h2>
      <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "24px" }}>
        Verify that the Alpha Vantage API configuration is functioning correctly by querying real-time market data.
      </p>

      {error && (
        <div style={{
          backgroundColor: "#fde8e8",
          color: "#e53e3e",
          padding: "10px 14px",
          borderRadius: "4px",
          fontSize: "0.85rem",
          marginBottom: "16px",
          border: "1px solid #fbd5d5"
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleFetchPrice} style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Stock Symbol (e.g. AAPL, IBM)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "0.9rem",
            outline: "none"
          }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#387ed1",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            fontWeight: "500",
            cursor: "pointer"
          }}
        >
          {loading ? "Checking..." : "Check Price"}
        </button>
      </form>

      {stockData && (
        <div style={{
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: "4px",
          padding: "20px"
        }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
            Quote for {stockData.symbol}
          </h3>
          
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", color: "#374151" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Current Price</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "bold" }}>${Number(stockData.price).toFixed(2)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Previous Close</td>
                <td style={{ padding: "8px 0", textAlign: "right" }}>${Number(stockData.previousClose).toFixed(2)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Open</td>
                <td style={{ padding: "8px 0", textAlign: "right" }}>${Number(stockData.open).toFixed(2)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Day Range</td>
                <td style={{ padding: "8px 0", textAlign: "right" }}>
                  ${Number(stockData.low).toFixed(2)} - ${Number(stockData.high).toFixed(2)}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Change</td>
                <td style={{ 
                  padding: "8px 0", 
                  textAlign: "right", 
                  color: Number(stockData.change) >= 0 ? "#10b981" : "#ef4444",
                  fontWeight: "500"
                }}>
                  {Number(stockData.change) >= 0 ? "+" : ""}{Number(stockData.change).toFixed(2)} ({stockData.changePercent})
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", color: "#6b7280" }}>Volume</td>
                <td style={{ padding: "8px 0", textAlign: "right" }}>{Number(stockData.volume).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Apps;
