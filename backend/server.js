import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors()); // Allow cross-origin requests

dotenv.config();

const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});