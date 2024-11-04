import express from "express";

import { login, register, logOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logOut);

export default router;
