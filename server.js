import express from "express";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import cors from "cors";
import NotesRoutes from "./routes/Notes.js";
const { connection } = require("./config/db.js");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/notes", NotesRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Home",
  });
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (e) {
    console.log("Not Connected to Database");
  }
  console.log(`Server is running at port ${process.env.port}`);
});
