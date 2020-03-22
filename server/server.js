const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use("/", express.static("dist"));
app.listen(3000, () => console.log("server is listen port 3000"));

app.get("/api/history", (req, res) => {
  fs.readFile("server/db/history.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0 }));
    } else {
      res.send(data);
    }
  });
});
