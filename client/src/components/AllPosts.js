/* 
************************************************************************************************************************

Everything here is a proposal not really set in stone, routes were intentionally left blank i can add them in if youd like but since its a group project i wanted to make sure everyone has their area to shine in. with that said; THIS IS AN EXTREMELY BASIC set of instructions. This will display all posts by mapping through them similar to how Kevin Udink showed us in MERN. I tried to leave decent comments so my heiroglyphics can be deciphered. 

************************************************************************************************************************
*/

import React, {useState} from 'react';
import axios from "axios";
import {Link, navigate} from '@reach/router';
import io from 'socket.io-client';

// props isnt explicitly used but  i passed it in just in case it'd to use it later
const AllPosts = (props) => {

// setting allPosts into state.
    const [allPosts, setAllPosts] = useState([]);
    const [socket] = useState(() =>io(":8000"));

// method for axios call/fetch getting all posts will want to pull this from a route
    const getAllPosts = () =>{
        // axios is allowing us to access our database 
        axios.get('http://localhost:8000/api/blog',{ 
            withCredentials: true
            }
            )
        // has to return a promise
            .then((res)=>{
                console.log(res.data);
                setAllPosts(res.data);
                console.log("Promise in getAllPosts successful")
            })
            .catch((err) => {
                console.log(err, 'error in getAllPosts in allPosts.js')
            })
    }

        // this is a socket for home page buttons
    useEffect(() => {
        console.log("socket.io useEffect")
        socket.on("connect", () => { console.log("connected to socket");
        console.log(socket.id);
        });
        // have to turn on websocket
        socket.on("added", (data)=>{
            console.log("added");
            console.log(data);
            setAllPosts((currentValue) => [data, ...currentValue]);
        });
        // allows for listening of the deleted id to delete without refresh
        socket.on('deleted', (deletedPostId) => {
            setAllPosts((currentAllPostValue) => {
                let filteredArray = currentAllPostValue.filter((onePost) => {
                    return onePost._id !== deletedPostId;
                });
                // new value to be set in state for posts
                return filteredArray;
            }); 
        })
        // IMPORTANT clean up, shutting down socket
        return () => socket.disconnect();
    }, []);
    
    // delet post function
    const deletePost = (postId) =>{
        //added credentials so user has to be logged in to delete
        axios.delete('http://localhost:8000/api/blog/' + postId,{
            withCredentials: true
        })
    
        .then((res) =>{ 
            console.log(res.data)
            console.log("object deleted")
            // sockit has to emit to be heard
            socket.emit("delete_post", postId);
            // our posts are saved into an array in state, filtering through the array
            let filteredArray = allPosts.filter((onePost) => {
                return onePost._id !== postId;
            });
            setAllPosts(filteredArray)
        })
        .catch((err) => {
            console.log(err, "error in deletePost in AllPosts.js")
        })
    }

    return(
        //loops through posts using map
        //classnames are intentionally left blank
        <div>
            <h1 className=""> TITLE GOES HERE </h1>

        {/* button to get all posts using onClick events */}
            <button className=" " onClick={ (e) => getAllPosts(e)}> TEXT_HERE </button>

        {/* this will call from the routes to create a new post */}
            <Link to="" >
                <button className=""> ADD_POST_BUTON </button>
            </Link>

        {/* mapping through to display all entries */}
            {
                allPosts.map((post, index) => (
                    <div className="all" key={ index} >
                        <Link to={`/blog/${post._id}`}>
                            {post.blogName}
                        </Link>
                        <div>
                            <button className="editButton" onClick={() => navigate(`/posts/${post._id}/edit`)}>Edit Post</button>
                            <button className="deleteBtn" onClick={() => deletePost(post._id) }>Delete</button>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default AllPosts;

// seemed like a better way to do that and implement the socket io connectivity

// <h3>{ post.PARAMETERS_FROM_MODELS } <br/>
//                         {/* this will display the date added or updated depending on how you wire it */}
//                         <p>added on: { (new Date(post.PARAMETERS_FROM_MODELS)).toLocaleDateString("en-us")}</p> </h3>