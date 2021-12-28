const dotenv = require("dotenv");
const express = require("express");
const notes = require("./data/notes");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const app = express();

app.use(express.json()); // To destructure our Controller
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

dotenv.config({ path: "../.env" });
connectDB();

const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

//-------DEPLOYMENT-------------

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Running ");
  });
}
//-------DEPLOYMENT-------------

app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });
app.listen(PORT, console.log(`Port Started on ${PORT}`));
