const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const postMiddleware = require('../posts/posts.middleware')



/* GET home page. */
router.post('/posts', postController.createPosts);
router.get('/posts', postController.getPosts);



module.exports = router;
