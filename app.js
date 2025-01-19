const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views")); // Correct the views path


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about-us.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about-us.html"));
});

app.get("/case-studies.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "case-studies.html"));
});

app.get("/service.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "service.html"));
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
