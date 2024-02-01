import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ContextAuth } from "../../memory/Auth";

function Authenticate() {

    const [auth] = useContext(ContextAuth);
    if (!auth.Authenticate){
        return <Navigate to="/access" />;
    }

    return <Outlet></Outlet>;
}

export default Authenticate;