import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button, Box, Columns } from 'react-bulma-components';import { Link } from '@reach/router';
import Login from '../components/Login';
import RegisterUser from '../components/RegisterUser';

const LoginReg = (props) => {
    const { user, setUser} = props;
    const [reg, setReg] = useState(true);

    const changeHandler = (e) => {
        e.preventDefault();
        setReg(!reg);
    }

    return (
        
        <Columns
            centered="true"
            style={{marginTop: "14%"}}

        
        >
        


                {
                    reg === true ?
                    <div>
                        <Login user={user} setUser={setUser} />
                        <p
                            style={{
                                textAlign: "center",
                                marginTop: "15px"

                        }}
                            onClick={changeHandler}
                        >sign up</p>

                    </div>
                    :   <div>
                        <RegisterUser />
                        <p
                            style={{
                                textAlign: "center",
                                marginTop: "15px"
                        }}
                            onClick={changeHandler}
                        >login</p>
                        </div>
                        

                }
               
                
        

        
        </Columns>

    )
}

export default LoginReg;
