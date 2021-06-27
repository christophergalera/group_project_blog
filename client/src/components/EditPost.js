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
    axios.get('http://localhost:8000/api/posts/' + props.id)
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


}