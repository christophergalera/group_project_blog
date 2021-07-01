import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box, Message, Columns} from 'react-bulma-components';
import axios from 'axios';
import {navigate} from '@reach/router';

const PostForm = (props) =>{
const { Input, Field, Control, Label, Help, Textarea } = Form;
const {Group} = Button;
const {post, setPost, errors, submitHandler, buttonLabel, deleteThis } = props;
    
    const inputChange =(e)=>{
        console.log("e.target.name" + e.target.name);
        console.log("e.target.value" + e.target.value);

        let newStateObject ={...post}; 
        newStateObject[e.target.name] = e.target.value; 
        setPost(newStateObject); //setting the state
    }
    

    const waitNav = () => {
        navigate("/blog/all_posts")
    }
   

    return(
        <div>
            <Columns
                centered="true"
                style={{marginTop: "13%"}}
            >
            

            <Box
                style={{
                width: 800,
                margin: 'auto'
            }}
            >
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

               <Group>
                <Field kind="group">
                        <Control>
                            <Button
                                style={{marginRight: "6px",
                                marginTop: "3px"}}
                                size="small"
                                type="submit"
                                color="success"
                            >{buttonLabel}
                            </Button>
                        </Control>
                </Field>
                    <Control>
                       <Button
                            color="danger"
                            size="small"
                            onClick={waitNav}
                            style={{marginTop: "-8.5px"}}
                        >Back
                        </Button>
                    </Control>
                </Group>
            </form>
            </Box>
        </Columns>
        </div>
    )
}

export default PostForm;