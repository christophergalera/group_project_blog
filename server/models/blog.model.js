const mongoose = require('mongoose');
 
const BlogSchema = new mongoose.Schema({
    // blog name
    blogName: {
        type: String,
        required: [true, 'Post must have a name']
    },
    // blog body
    blogBody: {
        type: String,
        required: [true, 'Body of post cannot be empty!']
    },
 
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'usertoken'
    // }
}, {timestamps: true});
 
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
