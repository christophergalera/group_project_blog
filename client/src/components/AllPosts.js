import React, {useState} from 'react';
import axios from "axios";
import {Link} from '@reach/router';


const AllPosts = (props) => {


    const [allPosts, setAllPosts] = useState([]);


    const getAllPosts = (e) =>{
        axios.get('http://localhost:8000/api/blog/all',{ 
            withCredentials: true
            }
            )
            .then((res)=>{
                console.log(res.data);
                setAllPosts(res.data);
                console.log("Promise in getAllPosts successful")
            })
            .catch((err) => {
                console.log(err, 'error in getAllPosts in allPosts.js')
            })
    }


    return(
        <div>
            <h1 className=""> TITLE GOES HERE </h1>

            <button className=" " onClick={ (e) => getAllPosts(e)}> Get Posts </button>

            <Link to="/blog/new_post" >
                <button className=""> ADD_POST_BUTON </button>
            </Link>

            {
                allPosts.map((post, index) => (
                    <div className="all" key={ index} >
                    <Link to={`/blog/${post._id}`}>
                        <h3>{ post.blogBody } <br/>
                        <p>added on: { (new Date(post.createdAt)).toLocaleDateString("en-us")}</p> </h3>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllPosts;