const Post = require('./posts.model');
module.exports.createPost = async function (blog) {
  const newcreateBlog = Post.create(blog)
  return newCreateBlog;
}

module.exports.getPosts = async function () {
  return Post.find({});
}