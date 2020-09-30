const express = require("express");
var cors = require("cors");
var { movies } = require("./data.json");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.get("/", (req, res, next) => {
  return res.status(200).json({ msg: "welcome to api app!" });
});

app.get("/movies", (req, res, next) => {
  return res.status(200).json({ msg: "successfully retrieved", data: { movies } });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
