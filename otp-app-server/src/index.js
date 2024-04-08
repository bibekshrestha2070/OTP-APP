import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";
const app = express();
var corsOptions = {
    origin: ["https://otp-app-client.vercel.app", "http://127.0.0.1:5174"]
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;
app.use(express.json());


app.get("/", async (req, res) => {
    res.json({ message: "Welcome Back!" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log("server running on localhost:5000");
});