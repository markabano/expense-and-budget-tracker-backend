import express from "express";
import { register, login } from "../controllers/auth.controller.mjs";
import { registerSchema, loginSchema } from "../schemas/auth.schema.mjs";
import { verifyToken } from "../middleware/auth.middleware.mjs";
import { z } from "zod";

const router = express.Router();

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.errors });
  }
};

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "protected route", user: req.user });
});

export default router;
