import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate} from '@reach/router';
import PostForm from './PostForm';

const EditPost = (props) =>{
    // setting state variables here.
    const [errors, setErrors] = useState({})
    const [post, setPost] = useState({blogName: "", blogBody: "",})


// automatically grab things for us.
// will get post from all posts route with axios and use props.
useEffect(() =>{
    // from route file
    axios.get('http://localhost:8000/api/blog/' + props.id)
        .then((res)=>{
            console.log(res.data);
            console.log(" successful in ,get from the server")
            setPost(res.data);
        }) 
        .catch((err) =>{
            console.log(" error in useEffect located in editpost axios call")
            console.log(err);
            navigate('/');
        });
},[]);

//submit event handler this calls from posts in routes file
const submitHandler = (e) =>{
    e.preventDefault();
    // onClick submit to post this information saved in props.
    // --props.id, post-- brings in props and our state variable above
    axios.put('http://localhost:8000/api/blog/'+ props.id, post)
        .then((res)=>{
            console.log(res.data);
            console.log("successfully updated")
            // should redirect to .get in routes to display all based on specific post id. since posts are unique in id. 
            navigate('/posts/' + props.id);
        })
        .catch((err)=> {
            // shows objects in validations that failed 
            console.log('error in axios call in submitHandler. located in NewPost.js', err.response.data.errors)
            setErrors(err.response.data.errors);
        })
}

// this is all passed down from props

return(
    <div>
        <h1>Edit Post</h1>
        <PostForm 
        // passing down from the post form 
            post = {post}
            setPost = {setPost }
            errors =  { errors }
            // submit handler is sent to PostForm
            submitHandler = { submitHandler }
            buttonLabel = {'Update Post'} 
        />
    </div>
)
}

export default EditPost;