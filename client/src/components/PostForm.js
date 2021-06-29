import React from 'react';
import {navigate} from '@reach/router';

const PostForm = (props) =>{
    //props will be passed down to child components if you dont you will not get your validation errors.
    // props allow for passing things in between files 
const {post, setPost, errors, submitHandler, buttonLabel } = props;
    
    //this works for all keys inside of the state object
    const inputChange =(e)=>{
        console.log("e.target.name" + e.target.name);
        console.log("e.target.value" + e.target.value);
        // updating the state of our object with the information given above usting the spread operator
        let newStateObject ={...post}; // get a copy of current state
        newStateObject[e.target.name] = e.target.value; // new posts this.state.
        setPost(newStateObject); //setting the state
    }
    // make sure your input matches the names of your keys
    // use dot operator to reference, vs code will sometimes give suggestions


    return(
        <div>
            {/* {submit handler is passed from EditPost.js} */}
            <form onSubmit={submitHandler}>
                <div>
                    <label>Blog Name</label>
                    {/* shows an error if their is one */}
                    {
                        errors.blogName ? 
                            <p className="validationErrors">{errors.blogPost.message}</p>
                            : null
                    }
                    <input type='text' name='blogName' value={post.blogName} onChange={(e) => inputChange(e)} />
                </div>
                    
                <div>
                    <label>Blog Body </label>
                    
                    {
                        errors.blogBody ? 
                            <p className="validationErrors">{errors.blogBody.message}</p>
                            : null
                    }
                    <input type='text' name='blogBody' value={post.blogBody } onChange={(e) => inputChange(e)} />
                </div>
                
                {/* submit btton*/}
                <button>{ buttonLabel }</button>
                {/* we have to use the anonymous function below to wait for the onclick event */}
                <button onClick={ () => navigate("/all_posts")} className="cancelBtn">Cancel</button>
            </form>
        </div>
    )
}

export default PostForm;