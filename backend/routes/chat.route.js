import express from "express";

import {
  createChat,
  getAllChats,
  getSingleChat,
} from "../controllers/chat.controller.js";

const router = express.Router();

// Route to create a chat
router.post("/createChat", createChat);

// Route to get all chats for a user by userId
router.get("/getAllChats/:userId", getAllChats);

// Route to get a single chat by chatId and userId
router.get("/getSingleChat/:userId/:chatId", getSingleChat);

export default router;
