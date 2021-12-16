const express = require("express");
const notes = require("./data/notes");
const cors = require("cors");

const connectDB = require("./config/db");

const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();

app.use(express.json()); // To destructure our Controller
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is Running ");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });
app.listen(PORT, console.log(`Port Started on ${PORT}`));
