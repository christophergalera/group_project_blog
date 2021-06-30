import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box } from 'react-bulma-components';
import axios from "axios";
import { navigate } from '@reach/router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { Input, Field, Control, Label } = Form;

    const login = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/user/login", { 
            email: email, 
            password: password,
        },
        {
            withCredentials: true
        }
        )
        .then((res) => {
            console.log(res.data);
            navigate("/blog/all_posts");
        })
        .catch(err => {
            console.log(err.response);
            // setErrorMessage(err.response.data.message);
        });
    };

    return (

        <Box
            style={{
                width: 600,
                margin: 'auto'
            }}
        >


        <form onSubmit={login}>
       
        <Field >
            <Label>Email</Label>
                <Control>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Icon
                    align="left" 
                    >
                        <ion-icon name="person-circle"></ion-icon>
                    </Icon>
                </Control>
        </Field >

        <Field>
            <Label>Password</Label>
                <Control>
                    <Input 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Icon align="left">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    </Icon>
                </Control>

                
            
        </Field>
        <Button.Group>
            <Button 
            color="success" 
            type="submit"
            onClick={login}
            >Login</Button>
            </Button.Group>
            
    
        </form>

        </Box>


    );
};

export default Login;
