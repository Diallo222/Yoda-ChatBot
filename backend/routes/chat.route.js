import express from "express";

import { createChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/createChat", createChat);

export default router;