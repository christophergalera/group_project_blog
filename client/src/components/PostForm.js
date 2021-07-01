import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box, Message} from 'react-bulma-components';
import {navigate} from '@reach/router';

const PostForm = (props) =>{
const { Input, Field, Control, Label, Help, Textarea } = Form;
const {post, setPost, errors, submitHandler, buttonLabel } = props;
    
    const inputChange =(e)=>{
        console.log("e.target.name" + e.target.name);
        console.log("e.target.value" + e.target.value);

        let newStateObject ={...post}; 
        newStateObject[e.target.name] = e.target.value; 
        setPost(newStateObject); //setting the state
    }
   

    return(
        <div>
            <Box>
            <form onSubmit={submitHandler}>
                <Field>
                    <Label>Blog Name</Label>
                    {
                        ! errors.blogName ?
                        <Control>
                        <Input 
                            placeholder="blog name"
                            type='text' 
                            name='blogName' 
                            value={post.blogName} 
                            onChange={(e) => inputChange(e)} 
                        />
                        </Control>

                        : 
                            <Control>
                            <Input 
                                placeholder="blog name"
                                type='text'
                                color='danger'
                                name='blogName' 
                                value={post.blogName} 
                                onChange={(e) => inputChange(e)} 
                            />
                            <Help color="danger">{errors.blogPost.message}</Help>
                            </Control>
                    }
                </Field>
                
                <Field>
                    <Label>Blog Body </Label>
                    {
                        ! errors.blogBody ?
                        <Control>
                        <Textarea 
                            name='blogBody'
                            placeholder={`${post.blogBody}`} 
                            value={post.blogBody} 
                            onChange={(e) => inputChange(e)} 
                        />
                        </Control>
                        :
                            <Control>
                            <Textarea
                                placeholder={`${post.blogBody}`}
                                color="danger"
                                name='blogBody' 
                                value={post.blogBody} 
                                onChange={(e) => inputChange(e)} 
                            />
                            <Help>{errors.blogBody.message}</Help>
                            </Control>
                    }

                </Field>

                <Field kind="group">
                        <Control>
                            <Button
                                type="submit"
                                color="success"
                                onClick={ () => navigate("/all_posts")}
                            >{buttonLabel}
                            </Button>
                        </Control>
                </Field>
            </form>
            </Box>

        </div>
    )
}

export default PostForm;