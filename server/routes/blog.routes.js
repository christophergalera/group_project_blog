const BlogController = require('../controllers/blog.controller');
 const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
    app.post('/api/blog', BlogController.createBlog);
    app.get('/api/blog/all', BlogController.showAllBlogs);
    app.get('/api/blog/:id',   BlogController.blogDetail);
    app.put('/api/blog/:id',   BlogController.blogUpdate);
    app.delete('/api/blog/:id',  BlogController.blogDelete);
}