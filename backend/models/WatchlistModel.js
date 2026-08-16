const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  percent: { type: String, required: true },
  isDown: { type: Boolean, default: false },
});

const WatchlistModel = mongoose.model("Watchlist", watchlistSchema);

module.exports = { WatchlistModel };
