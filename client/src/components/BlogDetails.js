import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate, Link} from '@reach/router';


// this page is ONLY NEEDED if you want to view the post or content in a different "page" it will display different from the home page and give access to options like delete and edit with the option to go back as well. 

// props parameter passed
const BlogDetails = (props) => {
    // setting state variables
    // 6/29 added state for errors
    const[post, setPost] = useState({});
    /* getting blogposts and whatever is passed through props */
    // added withcredentials true for loginreg
    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/' + props.post_id, {
            withcredentials: true
        })
        // returns a promise
            .then((res) => {
                console.log(res.data);
                setPost(res.data)
                console.log("set post successfully")
            })
            .catch((err) =>{ 
                console.log('In useEffect blogdetails.js ', err)
                navigate('/login_register')
            });
    }, []);

    /* delete handler for deleting blog entries, im envisioning a site similar to oldschool reddit */
    const deleteButton = () =>{
        axios.delete('http://localhost:8000/api/blog/' + props.post_id)
            .then((res) =>{
                console.log(res.data);
                navigate('/');
                console.log("post has been deleted.")
            })
            .catch((err)=>{
                console.log(err, 'error in deleteButton located in BlogDetails.js')
            })
    }

return(
    <div>
        <h1>Post Details</h1>
        <h3>Title: {post.blogName}</h3>
        <p>Body: {post.blogBody}</p>

        {/* may want a separate div here im not sure, button section */}

        {/* button for edit */}
        <button className="" 
            onClick={() => navigate(`/blog/${post._id}/edit`)}>
                Edit Post
        </button>

        {/* back to all blog posts button */}
        <button className="">
            <Link className="" to="/all_posts">
                Return to all posts
            </Link>
            </button>

    </div>
)}
export default BlogDetails;