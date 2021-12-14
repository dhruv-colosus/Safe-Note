const express = require("express");
const res = require("express/lib/response");
const notes = require("./data/notes");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

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

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
app.listen(PORT, console.log(`Port Started on ${PORT}`));
