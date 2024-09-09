const express = require("express");
const Posts = require("../models/subtitle"); // models import
const routee = express.Router();

// Search posts by partial movie name
routee.post("/search", (req, res) => {
  const { movie } = req.body;
  
  if (!movie) {
    return res.status(400).json({ error: "Movie name is required" });
  }

  // Use a regular expression to search for movies starting with the input letters
  const regex = new RegExp(`^${movie}`, 'i');
  Posts.find({ movie: { $regex: regex } })
    .then((posts) => {
      if (!posts || posts.length === 0) {
        return res.status(404).json({ error: "No movies found" });
      }
      return res.status(200).json({ success: true, existingPosts: posts });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
});

module.exports = routee; // export routee
