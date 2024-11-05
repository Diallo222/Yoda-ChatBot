import Chat from "../models/chat.js";
import UserChats from "../models/userChats.js";

export const createChat = async (req, res) => {
  const { userId, text } = req.body;

  if (!userId || !text) {
    return res.status(400).send({ message: "userId and text are required." });
  }

  try {
    const newChat = new Chat({
      userId,
      title: text.substring(0, 40),
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    await UserChats.findOneAndUpdate(
      { userId },
      {
        $push: {
          chats: {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        },
      },
      { upsert: true, new: true }
    );

    res
      .status(201)
      .send({ message: "Chat created successfully", chat: savedChat });
  } catch (error) {
    res.status(500).send({ message: "Failed to create chat", error });
  }
};

export const getAllChats = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).send({ message: "userId is required." });
  }

  try {
    const userChats = await UserChats.findOne({ userId });
    if (!userChats) {
      return res.status(404).send({ message: "User not found." });
    }

    res
      .status(200)
      .send({ message: "Chats fetched successfully", chats: userChats.chats });
  } catch (error) {
    res.status(500).send({ message: "Failed to get chats", error });
  }
};

export const getSingleChat = async (req, res) => {
  const { userId, chatId } = req.params;

  if (!userId || !chatId) {
    return res.status(400).send({ message: "userId and chatId are required." });
  }

  try {
    const userChats = await UserChats.findOne({ userId });
    if (!userChats) {
      return res.status(404).send({ message: "User not found." });
    }

    const chat = userChats.chats.find((chat) => chat._id.toString() === chatId);

    if (!chat) {
      return res.status(404).send({ message: "Chat not found." });
    }

    res.status(200).send({ message: "Chat fetched successfully", chat });
  } catch (error) {
    res.status(500).send({ message: "Failed to get chat", error });
  }
};
