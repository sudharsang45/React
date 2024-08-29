//import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../Context";

function Navbar(){
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/developers">Developers</Link>
                </li>
                {
                    isLoggedIn ?
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link to="/developers/add">AddDevelopers</Link>
                        </li>
                        <li className="nav-link"> 
                            <Link to="/" onClick={()=>{setIsLoggedIn(false)}}>Logout</Link>
                        </li>
                    </ul>
                    :
                    <li className="nav-link">
                        <Link to="/login">Login</Link>
                    </li>
                }
            </ul>
        </nav>      
    )
}                                                       

export default Navbar;