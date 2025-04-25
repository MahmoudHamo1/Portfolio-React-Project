const express = require("express");
const { randomMathal, randomTen } = require("./handler");

const app = express();

//allow outside access to server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/amthal/random", (req, res) => {
  res.json(randomMathal());
});

app.get("/amthal/ten", (req, res) => {
  res.json(randomTen());
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server started on PORT " + PORT);
});
