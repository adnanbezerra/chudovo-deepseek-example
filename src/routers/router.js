import { Router } from "express";
import { ai } from "../shared/ai";

const exampleRouter = Router();

exampleRouter.get("/example", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: "Message is required" });
    }

    const response = await ai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant.",
            },
            {
                role: "user",
                content: message,
            },
        ],
        model: "deepseek-chat",
        stream: false,
    })

    res.json(response.data.choices[0].message.content);
});

export default exampleRouter;
