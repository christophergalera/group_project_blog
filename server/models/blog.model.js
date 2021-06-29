const mongoose = require('mongoose');
 
const BlogSchema = new mongoose.Schema({
    // blog name
    blogName: {
        type: String,
        required: [true, 'Blog must have a name']
    },
    // blog body
    blogBody: {
        type: String
    },
 
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'usertoken'
    // }
}, {timestamps: true});
 
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
