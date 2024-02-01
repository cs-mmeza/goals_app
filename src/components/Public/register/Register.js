import React from "react";
import Credentials from "../../shared/Credentials";

const send = async (form) => {
};

function Register() {
    return ( 
        <Credentials
            send={send}
            title="Register"
            button="Sign Up"
        ></Credentials> );
}


export default Register ;