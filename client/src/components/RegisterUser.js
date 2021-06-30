import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box } from 'react-bulma-components';
import axios from "axios";

const Register = props => {
    const { Input, Field, Control, Label } = Form;
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

  // using a single state object to hold all form data
    const [ user, setUser ] = useState({
        username: "",
        email: "", 
        password: "", 
        confirmPassword: "",
    })

  // using a single function to update the state object
  //    we can use the input's name attribute as the key in to the object
    const handleChange = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        })
    }

    const register = e => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/user/register", 
            user       
            )
            .then(res => {
                console.log(res.data);

            setUser({
                username: "", 
                email: "", 
                password: "", 
                confirmPassword: "",
            })

            setConfirmReg("Thank you for Registering, you can now log in!");
            setErrs({}); 
            })
            .catch((err) => {
                console.log(err);
                setErrs(err.response.data.errors);
            });
        };

        return (

            <Box style={{
                width: 600,
                margin: 'auto'
            }}>

            <form 
            
            onSubmit={register}>
                
            
            


                    <Field>
                    <Label>Username</Label>
                    {
                        ! errs.username ?
                        <Control>
                        <Input
                        type="text"
                        name="username"
                        value={user.username}
                        placeholder="username"
                        onChange={(e) => handleChange(e)}
                        />

                        <Icon align="left">
                            <ion-icon name="person-circle-outline"></ion-icon>                        </Icon>
                        </Control>

                        : 
                        <Control>
                        <Input
                        color="danger"
                        type="text"
                        name="username"
                        value={user.username}
                        placeholder="username"
                        onChange={(e) => handleChange(e)}
                        />
                        <Icon align="left">
                            <ion-icon name="person-circle-outline"></ion-icon>                        </Icon>
                        <Form.Help color="danger">{ errs.username.message }</Form.Help>
                        </Control>


                    }
                    </Field>



                    <Field>
                    <Label>Email</Label>
                    {
                        ! errs.email ?
                        <Control>
                        <Input
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="email"
                        onChange={ handleChange }
                        />

                        <Icon align="left">
                            <ion-icon name="mail-outline"></ion-icon>                        
                        </Icon>
                        </Control>

                        : 
                        <Control>
                        <Input
                        color="danger"
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="email"
                        onChange={ handleChange }
                        />
                        <Icon align="left">
                            <ion-icon name="mail-outline"></ion-icon>
                        </Icon>
                        <Form.Help color="danger">{ errs.email.message }</Form.Help>
                        </Control>


                    }
                    </Field>


                    <Field>
                    <Label>Password</Label>
                    {
                        ! errs.password ?
                        <Control>
                        <Input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="password"
                        onChange={ handleChange }
                        />

                        <Icon align="left">
                            <ion-icon name="lock-closed-outline"></ion-icon>                        
                        </Icon>
                        </Control>

                        : 
                        <Control>
                        <Input
                        color="danger"
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="password"
                        onChange={ handleChange }
                        />
                        <Icon align="left">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </Icon>
                        <Form.Help color="danger">{ errs.password.message }</Form.Help>
                        </Control>


                    }
                    </Field>



                    <Field>
                    <Label>Confirm Password</Label>
                    {
                        ! errs.confirmPassword ?
                        <Control>
                        <Input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        placeholder="password"
                        onChange={ handleChange }
                        />

                        <Icon align="left">
                            <ion-icon name="lock-closed-outline"></ion-icon>                        
                        </Icon>
                        </Control>

                        : 
                        <Control>
                        <Input
                        color="danger"
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        placeholder="password"
                        />
                        <Icon align="left">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </Icon>
                        <Form.Help color="danger">{ errs.confirmPassword.message }</Form.Help>
                        </Control>


                    }
                    </Field>


                    <Field kind="group">
                        <Control>
                            <Button
                                type="submit"
                                color="success"
                            >Register
                            </Button>
                            
                        </Control>
                        {
                            confirmReg ? 
                            <h4 style={{color: "green", marginTop: "10px"}}>{confirmReg}</h4>
                            : null
                        }
                    </Field>



            </form>
            </Box>

        );
};

export default Register;
