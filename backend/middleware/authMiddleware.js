const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  try {
    let token = null;

    // Check Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else {
      // Check cookies (manually parsed)
      const cookieHeader = req.headers.cookie;
      if (cookieHeader) {
        const cookies = {};
        cookieHeader.split(";").forEach((cookie) => {
          const parts = cookie.split("=");
          cookies[parts[0].trim()] = parts[1] ? parts[1].trim() : "";
        });
        token = cookies["token"];
      }
    }

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Invalid authentication token" });
    }

    // Find user
    const user = await UserModel.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found or deleted" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authMiddleware };
