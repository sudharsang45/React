//import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/developers">Developers</Link>
                </li>
                <li className="nav-link">
                    <Link to="/developers/add">AddDevelopers</Link>
                </li>
            </ul>
        </nav>      
    )
}                                                       

export default Navbar;