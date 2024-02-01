import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "../../shared/Credentials";
import { ContextAuth } from "../../../memory/Auth";

function Access() {

    const navegate = useNavigate(); 

    const [auth, sendAuth] = useContext(ContextAuth);
    const send = async (form) => {
        // const token = await access(form);
        sendAuth({ type: 'place', token: 'token' });
        navegate('/list');
    };

    return ( 
        <Credentials
            send={send}
            title="Sign In"
            button="Log In"
        ></Credentials> );
}

export default Access;
