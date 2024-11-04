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
      .send({ chatId: savedChat._id, message: "Chat created successfully" });
  } catch (error) {
    console.error("Error creating chat:", error);
    res.status(500).send({ message: "Failed to create chat", error });
  }
};
