const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./models/UserModel");
const { authMiddleware } = require("./middleware/authMiddleware");

const { HoldingsModel } = require("./models/HoldingModel");
const { OrdersModel } = require("./models/OrdersModel");
const { PositionsModel } = require("./models/PositionModel");
const { WatchlistModel } = require("./models/WatchlistModel");

const app = express();
app.use(cors());
app.use(express.json());

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 3002;
const dbUrl = process.env.MONGO_URL;

// GET all holdings (protected)
app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching holdings", error: err.message });
  }
});

// GET all positions (protected)
app.get("/allPositions", authMiddleware, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching positions", error: err.message });
  }
});

// POST new order (protected)
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: "Error saving order", error: err.message });
  }
});

// GET all watchlist (protected)
app.get("/allWatchlist", authMiddleware, async (req, res) => {
  try {
    const allWatchlist = await WatchlistModel.find({});
    res.json(allWatchlist);
  } catch (err) {
    res.status(500).json({ message: "Error fetching watchlist", error: err.message });
  }
});

// ================= AUTHENTICATION ROUTES =================

// POST /api/auth/signup
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error during signup", error: err.message });
  }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error during login", error: err.message });
  }
});

// GET /api/auth/me
app.get("/api/auth/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

// POST /api/auth/logout
app.post("/api/auth/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

// ================= MARKET DATA ROUTES (ALPHA VANTAGE) =================

// GET /api/market-data/stock-price
app.get("/api/market-data/stock-price", authMiddleware, async (req, res) => {
  const { symbol } = req.query;
  if (!symbol) {
    return res.status(400).json({ message: "Stock symbol is required" });
  }

  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    return res.status(500).json({ message: "Alpha Vantage API key not configured on server" });
  }

  try {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data["Error Message"]) {
      return res.status(400).json({ message: "Alpha Vantage API error: " + data["Error Message"] });
    }

    if (data["Note"]) {
      return res.status(429).json({ message: "Alpha Vantage rate limit reached: " + data["Note"] });
    }

    const quote = data["Global Quote"];
    if (!quote || Object.keys(quote).length === 0) {
      return res.status(404).json({ message: "No data found for symbol: " + symbol });
    }

    res.json({
      symbol: quote["01. symbol"],
      open: quote["02. open"],
      high: quote["03. high"],
      low: quote["04. low"],
      price: quote["05. price"],
      volume: quote["06. volume"],
      latestTradingDay: quote["07. latest trading day"],
      previousClose: quote["08. previous close"],
      change: quote["09. change"],
      changePercent: quote["10. change percent"],
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch stock data", error: err.message });
  }
});



// DB connect + server start
async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connection failed:", err);
  }
}

main();
