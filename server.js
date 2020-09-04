const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.static(__dirname + "/dist/pagination-angular-h2"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/pagination-angular-h2/index.html");
});

app.listen(PORT, () => {
  console.log("servidor iniciando en el puerto " + PORT);
});
