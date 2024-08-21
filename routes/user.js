const express = require("express");
const Posts = require("../models/user");
const routers = express.Router();

//save routes
routers.post("/signup", (req, res) => {
  const { email } = req.body;
  Posts.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({
          error: "Email already exists"
        });
      }
      const newUser = new Posts(req.body);
      return newUser.save();
    })
    .then(() => {
      return res.status(200).json({
        success: "User signed up successfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message
      });
    });
});

//check login
routers.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    Posts.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        if (user.password !== password) {
          return res.status(401).json({ error: "Incorrect password" });
        }
        return res
          .status(200)
          .json({ success: true, message: "Login successful", user });
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  });
  
  module.exports = routers;