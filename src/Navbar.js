//import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item nav-link active">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to="/developers">Developers</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to="/developers/add">AddDevelopers</Link>
                </li>
            </ul>
        </nav>      
    )
}                                                       

export default Navbar;