const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  res.send("Login form submitted. No account system is configured.");
});

app.post("/signup", (req, res) => {
  res.send("Signup form submitted. No account system is configured.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
