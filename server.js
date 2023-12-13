import express from "express";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import cors from "cors";
import NotesRoutes from "./routes/Notes.js";

dotenv.config();
Connection();
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});
