import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config/env.mjs";
import { User } from "../models/index.model.mjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isEmailExist = await User.findOne({ where: { email } });
    if (isEmailExist)
      return res.status(400).json({ message: "Email already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ message: "Email does not exists" });

    const isPassMatch = await bcrypt.compare(password, user.password);

    if (!isPassMatch)
      return res.status(400).json({ message: "Wrong Password" });

    const token = jwt.sign({ id: user.id, email: user.email }, env.JWT_TOKEN, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login Success", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
