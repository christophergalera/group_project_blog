import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate} from '@reach/router';
import PostForm from './PostForm';

const EditPost = (props) =>{
    const [errors, setErrors] = useState({})
    const [post, setPost] = useState({blogName: "", blogBody: "",})

useEffect(() =>{
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

const submitHandler = (e) =>    {
    e.preventDefault();
    axios.put('http://localhost:8000/api/blog/'+ props.id, post)
        .then((res)=>{
            console.log(res.data);
            console.log("successfully updated")
            navigate('/blog/' + props.id);
        })
        .catch((err)=> {
            console.log('error in axios call in submitHandler. located in NewPost.js', err.response.data.errors)
            setErrors(err.response.data.errors);
        })
}

return(
    <div>
        <h1>Edit Post</h1>
        <PostForm 
            post = {post}
            setPost = {setPost }
            errors =  { errors }
            submitHandler = { submitHandler }
            buttonLabel = {'Update Post'} 
        />
    </div>
)
}

export default EditPost;