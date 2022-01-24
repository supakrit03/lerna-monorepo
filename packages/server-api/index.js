const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello this is api",
  });
});

app.listen(8000, () => {
  console.log("app listen on port 8000");
});
