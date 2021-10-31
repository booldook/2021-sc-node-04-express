const express = require("express");
const app = express();
require("./modules/server-init")(app, 3500);

app.use("/", express.static("./public"));

app.get("/", (req, res) => {
  res.send("Root");
});

app.get("/login", (req, res) => {
  res.send("GET");
});

app.post("/login", (req, res) => {
  res.send("POST");
});

app.use((req, res) => {
  res.status(404).send("<h1>File Not Found</h1>");
});

/* app.get()
app.post()
app.put()
app.delete()
app.use() */

// CRUD
