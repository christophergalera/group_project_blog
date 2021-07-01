import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bulma-components';
import { Link } from '@reach/router';



const TopNav = (props) => {
    const {postId} = props;
    
    return (




                <div
                    style={{
                        display: "flex",
                        justifyItems: "center"
                    }}
                >
                    <Breadcrumb

                    >
                        <ul>
                            <li
                                style={{ marginTop: "10px",
                            }}
                            >

                                <Link
                                to={`/blog/${postId}`}>
                                    <ion-icon name="reader-outline"></ion-icon>
                                </Link>

                            </li>
                            <li>
                                <Link to={`/blog/${postId}/`+ "edit"} >
                                    <ion-icon name="create-outline"></ion-icon>
                                </Link>


                            </li>
                            <li>
                                <Link to="">
                                    <ion-icon name="trash-outline"></ion-icon>
                                </Link>
                            </li>


                        </ul>
                    </Breadcrumb>
                </div>

                )
}

                export default TopNav;


