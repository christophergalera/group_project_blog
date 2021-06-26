const Blog = require('../models/blog.model');
const jwt = require('jsonwebtoken');

module.exports.createBlog = (request, response) => {
    const { blogName, blogBody} = request.body;
    // const decodedJwt = jwt.decode(request.cookies.usertoken,{complete: true});
    // const userId = decodedJwt.payload.user_Id
    Blog.create({
        blogName,
        blogBody
        // createdBy: userId 
    })
    .then(blog=> response.json(blog))
    .catch(err=> response.json(err))
}

module.exports.showAllBlogs = (request, response) => {
    Blog.find({createdBy: userId })
    .then(res=> response.json(res))
    .catch(err=> response.json(err))
}

module.exports.blogDetail = (request, response) => {
    Blog.findOne({_id: request.params.id})
    .then(blog=> response.json(blog))
    .catch(err=> response.json(err))
}

module.exports.blogUpdate = (request, response) => {
    Blog.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(updateBlog=> response.json(updateBlog))
    .catch(err=> response.json(err))
}

module.exports.blogDelete = (request, response) => {
    Blog.deleteOne({_id: request.params.id})
    .then(deleteConfirmation=> response.json(deleteConfirmation))
    .catch(err=> response.json(err))
}