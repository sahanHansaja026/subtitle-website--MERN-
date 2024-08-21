const express = require("express");
const Posts = require("../models/subtitle");
const multer = require("multer");
const path = require("path");

const router = express.Router();

//upload subtitle
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, path.join(__dirname, "../client/src/uploads")); // for images
    } else if (file.fieldname === "subtitle") {
      cb(null, path.join(__dirname, "../client/src/subtitles")); // for subtitles
    } else {
      cb(new Error("Invalid fieldname"), null);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/post/save",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "subtitle", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        phone,
        movie,
        year,
        category,
        summery,
      } = req.body;

      if (
        !first_name ||
        !last_name ||
        !email ||
        !phone ||
        !movie ||
        !year ||
        !category ||
        !summery
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const imagePath = req.files["image"]
        ? req.files["image"][0].filename
        : null;
      const subtitlePath = req.files["subtitle"]
        ? req.files["subtitle"][0].filename
        : null;

      const newPost = new Posts({
        first_name,
        last_name,
        email,
        phone,
        movie,
        year,
        category,
        summery,
        image: imagePath,
        subtitle: subtitlePath,
      });

      await newPost.save();
      return res.status(200).json({ success: "Post saved successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
);
// get posts
router.get("/posts", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const startIndex = (page - 1) * limit;

    const posts = await Posts.find().sort({ _id: -1 }).skip(startIndex).limit(limit).exec(); // Sort by _id in descending order to get the latest posts first
    const totalPosts = await Posts.countDocuments();

    return res.status(200).json({
      success: true,
      existingPosts: posts,
      totalPosts,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});


// get a specific post by ID
router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Posts.findById(postId).exec();
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// update post
router.put("/post/update/:id", async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.status(200).json({ success: "Post updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
