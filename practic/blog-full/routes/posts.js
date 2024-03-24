const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new post
router.post('/', async (req, res) => {
    const post = req.body;
    try {
        const newPost = await Post.create(post);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
