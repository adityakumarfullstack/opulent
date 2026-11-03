import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());// Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));// Middleware to parse URL-encoded request bodies
app.use(cors()); // Allow cross-origin requests

dotenv.config();

const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//API Routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});