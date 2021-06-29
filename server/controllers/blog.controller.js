const Blog = require('../models/blog.model');
const jwt = require('jsonwebtoken');
 
module.exports = {
    showAllBlogs: (req, res) => {
        Blog.find( { } )
            .then((allBlogs) => {
                console.log("showAllBlogs");
                res.json(allBlogs);
            })
            .catch((err) => {
                console.log("Error in showAllBlogs");
                res.status(400).json(err);
            })
    },
    
    blogDetail: (req, res) => {
        console.log("blogDetail ID: " + req.params.id);
        Blog.findById(req.params.id)
            .then((oneBlog) => {
                console.log("blogDetail");
                res.json(oneBlog);
            })
            .catch((err) => {
                console.log("Error in blogDetail");
                res.status(400).json(err);
            })
    },
  
    createBlog: (req, res) => {
        console.log(req.body);

        const blog = new Blog(req.body);
        const decodedJwt = jwt.decode(req.cookies.undertoken, {complete: true})
        
        Blog.create(req.body)
            .then((newBlog) => {
                console.log("createBlog");
                res.json(newBlog);
            })
            .catch((err) => {
                console.log("Error in createBlog");
                res.status(400).json(err);
            })
    },
 
    blogUpdate: (req, res) => {
        console.log(req.body); 
        Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedBlog) => {
                console.log("blogUpdate");
                res.json(updatedBlog);
            })
            .catch((err) => {
                console.log("Error in blogUpdate");
                res.status(400).json(err);
            })
 
    },
 
    blogDelete: (req, res) => {
        console.log("blogDelete ID: " + req.params.id);
        Blog.findByIdAndDelete(req.params.id)
            .then((deletedBlog) => {
                console.log("blogDelete");
                res.json(deletedBlog);
            })
            .catch((err) => {
                console.log("Error in blogDelete");
                res.status(400).json(err);
            });
 
    }
 
}