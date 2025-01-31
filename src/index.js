import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRouter from "./routers/router.js";

dotenv.config();

const PORT = process.env.PORT;

const server = express();
server.use(cors());
server.use(express.json());

// Routers session
server.use(exampleRouter);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
