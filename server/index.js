require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/auth").then(() => {
  console.log("Connected to mongodb!");
});

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.use("/", router);

// Server Setup
const port = process.env.port || 3001;
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server listening on:", port);
});
