const express = require('express');

const {
    getAllBlogsController,
    createBlogController,
    updateBlogController,
    getBlogByIdController,
    deleteBlogController,
    userBlogControlller,
} = require("../controllers/blogController");

const router = express.Router();

//get
router.get('/all-blog', getAllBlogsController)

// post
router.post('/create-blog', createBlogController)

//put
router.put('/update-blog/:id', updateBlogController)

//Get single blog
router.get('/get-blog/:id',getBlogByIdController)

//delete
router.delete('/delete-blog/:id', deleteBlogController)


//get user blog
router.get('/user-blog/:id', userBlogControlller)


module.exports = router;