import React, { useEffect, useState } from 'react';
import { Navbar, Button, Field, Columns } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import {navigate, Link} from '@reach/router';


const NavBar = () => {
    const waitFunction = () => {
            navigate("/blog/new_post")
    }
    return (

        <Columns
            centered="true"
        >     
            <Button 
                style={{
                    height: "20px",
                }}
                size="small"
                onClick={waitFunction}
            >New Post
            </Button>
       </Columns>
    )




}
export default NavBar;





