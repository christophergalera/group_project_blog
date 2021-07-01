import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, ButtonGroup, Modal } from 'react-bulma-components';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import EditPost from './EditPost';



const QuickNav = (props) => {
    const {postId} = props;

    const deleteButton = () =>{
        axios.delete('http://localhost:8000/api/blog/' + postId)
            .then((res) =>{
                console.log(res.data);
                window.location.reload();
                console.log("post has been deleted.")
            })
            .catch((err)=>{
                console.log(err, 'error in deleteButton located in BlogDetails.js')
            })
    }
    
    return (


                <div>
                    <Breadcrumb>
                        <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            margin: "0px 0px 0px 35px"

                    }}
                        >
                            <Link to={`/blog/new_post`}>
                            <li><ion-icon name="add-outline"></ion-icon></li>
                            </Link>

                            <Link to={`/blog/${postId}`}>
                            <li><ion-icon name="reader-outline"></ion-icon></li>
                            </Link>

                            {/* <Link to={`/blog/${postId}/`+ "edit"}>
                            <li><ion-icon name="create-outline"></ion-icon></li>
                            </Link> */}


                            
                            <Link to="">
                            <li><ion-icon
                            onClick = {deleteButton}
                            name="trash-outline"></ion-icon></li>
                            </Link>
                            

                        </ul>
                    </Breadcrumb>
                </div>

                )
}

                export default QuickNav;


