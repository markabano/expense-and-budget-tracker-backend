import jwt from "jsonwebtoken";
import env from "../config/env.mjs";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, env.JWT_TOKEN);
    req.user = decoded; // store deocded infor in req.user
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expire token" });
  }
};
