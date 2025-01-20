const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const userModel = require("./models/user.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // Serve index.html
});

app.get("/index.html", async (req, res) => {
  try {
    const users = await userModel.find();
    res.sendFile(path.join(__dirname, "views", "index.html")); 
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Error fetching users");
  }
});

app.get("/about-us.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about-us.html"));  // Serve about-us.html
});

app.get("/case-studies.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "case-studies.html")); // Serve case-studies.html
});

app.get("/service.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "service.html")); // Serve service.html
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html")); // Serve contact.html
});

// Handle form submission
app.post("/users", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const userCreated = await userModel.create({ name, email, message });
    // console.log("User Created: ", userCreated);
    res.redirect("/index.html");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error saving user");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
