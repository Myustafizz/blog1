const postService = require('./posts.services');
module.exports.createPosts = async function(req, res, next) {
    const blog = req.body;
    const createdBlog = await postService.createPost(blog);
    return res.json(createdBlog);
  }


  module.exports.getPosts = async function (req, res) {
    const posts = await postService.getPosts();
    return res.json(posts);
}
