"use strict"
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

const { PORT } = process.env;

// login1
app.get("/login", function (req, res) {
  res.send("Nachete la DEA te busca");   
});

// algo
app.get("/", function (req, res) {
  res.send("Nachete");   
});

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

