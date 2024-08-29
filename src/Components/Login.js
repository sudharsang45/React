import React, { useContext } from "react";
import AuthContext from "../Context";
import { useNavigate } from 'react-router-dom';

function Login() {
    const {setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    return(
        <div style={{margin:"2em"}}>
            <button type="button"   className="btn btn-outline-success btn-lg"     onClick={() => {
                setIsLoggedIn(true);
                navigate("/");
            }}>
                Login
            </button>
        </div>
    )
}

export default Login;