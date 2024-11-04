import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import UserChats from "../models/userChats.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    await UserChats.create({ userId: savedUser._id });
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: age,
    });

    const { password: _, ...others } = savedUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(201)
      .json({ message: "User created successfully", user: others });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: age,
    });

    const { password: _, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "User logged in successfully", ...others });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logOut = async (req, res) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "User logged out successfully" });
};
