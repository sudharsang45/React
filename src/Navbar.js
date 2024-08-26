//import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/developers">Developers</Link>
                </li>
                <li>
                    <Link to="/developers/add">AddDevelopers</Link>
                </li>
            </ul>
        </nav>
    )
}                                                       

export default Navbar;