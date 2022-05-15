const express = require("express");
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const date = format.asString("dd/MM/yyyy hh:mm:ss", new Date());

  const instaSocial = {
    username: "yashh.8",
    followers: 250,
    follows: 350,
    date,
  };
  res.json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const date = format.asString("dd/MM/yyyy hh:mm:ss", new Date());
  const facebookSocial = {
    username: "yashpurani",
    followers: 250,
    follows: 350,
    date,
  };
  res.json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const date = format.asString("dd/MM/yyyy hh:mm:ss", new Date());

  const linkedInSocial = {
    username: "yashpurani",
    followers: 500,
    follows: 350,
    date,
  };
  res.json(linkedInSocial);
});

app.get("/api/v1/:random", (req, res) => {
  res.send(req.params.random);
});
app.listen(PORT, () => console.log(`Server is Runnig at ${PORT}`));
