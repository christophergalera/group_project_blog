import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box, Columns } from 'react-bulma-components';
import axios from "axios";
import {navigate, Link} from '@reach/router';


const BlogDetails = (props) => {
    const {Group} = Button;
    const[post, setPost] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/' + props.post_id)
            .then((res) => {
                console.log(res.data);
                setPost(res.data)
                console.log("set post successfully")
            })
            .catch((err) =>{ 
                console.log('In useEffect blogdetails.js ', err)
            });
    }, []);



return(
        <Columns
            centered="true"
            style={{marginTop: "14%"}}
        >
        <Box
            className="content"
            style={{
            width: 800,
            margin: 'auto'
            }}
        >

            <h6 style={{margin: "0px"}}>
            {post.blogName}
            </h6>
            <br />

            <div style={{margin: "0px"}}>

            <p style={{margin: "0px"}} >
            {post.blogBody} 
            </p>
            <br />
            </div>
            
            
            <Group>
                <Button 
                color="success"
                size="small"
                type="submit"
                onClick={() => navigate(`/blog/${post._id}/edit`
                )}>
                    Edit Post
                </Button>


                <Button
                size="small"
                onClick={() => navigate(`/blog/all_posts`
                )}>
                    Return to All Posts
                </Button>
            </Group>

        </Box>
        </Columns>

)}
export default BlogDetails;