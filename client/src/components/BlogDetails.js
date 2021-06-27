import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate, Link} from '@reach/router';

// this page is ONLY NEEDED if you want to view the post or content in a different "page" it will display different from the home page and give access to options like delete and edit with the option to go back as well. 

// props parameter passed
const BlogDetails = (props) => {
    // setting state variables
    const[post, setPost] = useState({});
    /* getting blogposts and whatever is passed through props */
    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/' + props.post_id)
        // returns a promise
            .then((res) => {
                console.log(res.data);
                setPost(res.data)
                console.log("set post successfully")
            })
            .catch((err) =>{ 
                console.log('In useEffect blogdetails.js ', err)
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

    </div>
)

}