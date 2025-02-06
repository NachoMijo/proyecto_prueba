"use strict"
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

const { PORT } = process.env;

// algo
app.get("/", function (req, res) {
  res.send("Nachete");   
});

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

