import React, { useEffect, useState } from 'react';
import QuickNav from './QuickNav';
import NavBar from './NavBar';
import 'bulma/css/bulma.min.css';
import { Box, Card, Heading, Breadcrumb } from 'react-bulma-components';
import axios from "axios";
import { Link, navigate } from '@reach/router';
import EditPost from './EditPost';

const AllPosts = (props) => {
    const { Header, Content, Image, Footer } = Card;
    const [allPosts, setAllPosts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/all', {
            withCredentials: true
        }
        )
            .then((res) => {
                console.log(res.data);
                setAllPosts(res.data);
                console.log("Promise in getAllPosts successful")
            })
            .catch((err) => {
                console.log(err, 'error in getAllPosts in allPosts.js')
            })
    }, [])

    return (
        <div>
            <NavBar />
            <div
                style={{
                display: "flex",
                justifyContent: "center"
                }}>

                <div 
                    style={{
                    width: "1024px",
                    margin: 'auto',
                    height: 'auto'
                }}>
                    <Box
                        style={{
                        display: "flex",
                        flexDirection: "column"
                        }}
                    >
                        {
                            allPosts.map((post, index) => (

                                <Box className="content" key={index} >                          
                                    <h6 style={{margin: "0px"}}>
                                        {post.blogName}
                                    </h6>
                                    <p style={{fontSize: "12px"}} subtitle size={40}> 
                                        {(new Date(post.createdAt)).toLocaleDateString("en-us")}
                                    </p>

                                    <div style={{margin: "0px"}}>

                                        <p style={{margin: "0px"}} >
                                        {post.blogBody} 
                                        </p>
                                        <br />

                                    </div>
                                
                                    <div style={{marginLeft: "80%"}}>
                                        <QuickNav postId={post._id}/>
                                    </div>

                                </Box>
                            ))
                        }
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default AllPosts;