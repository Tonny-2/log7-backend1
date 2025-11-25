import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import auth from "./router/auth.js";

dotenv.config();

const app = express();

cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })

app.use(express.json({
    limit: "100mb",
}));
app.use("/auth", auth);
app.use("/api/auth", auth);


app.get("/", (req, res) => {
    res.send("API running");
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
