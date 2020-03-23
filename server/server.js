const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use("/", express.static("dist"));
app.listen(3000, () => console.log("server is listen port 3000"));

app.get("/api/history", (req, res) => {
  fs.readFile("server/db/history.json", "utf-8", (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0 }));
    } else {
      res.send(data);
    }
  });
});

app.post("/api/history", (req, res) => {
  fs.readFile("server/db/history.json", "utf-8", (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0 }));
    } else {
      let newId = Math.random();
      let oldHistory = JSON.parse(data);
      let newHistory = JSON.stringify({
        ...oldHistory,
        [newId]: req.body.newEl
      });
      fs.writeFile("server/db/history.json", newHistory, err => {
        if (err) {
          res.send(JSON.stringify({ result: 0 }));
        } else {
          res.send(JSON.stringify({ result: 1 }));
        }
      });
    }
  });
});
