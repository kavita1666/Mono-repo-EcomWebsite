import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-lists">
                <li className="navbar-text"><Link to="/" >Product</Link></li>
                <li className="navbar-text"><Link to="/add" >Add Product</Link></li>
                <li className="navbar-text"><Link to="/update" >Update Product</Link></li>
                <li className="navbar-text"><Link to="/logout" >Logout</Link></li>
                <li className="navbar-text"><Link to="/profile" >Profile</Link></li>
                <li className="navbar-text"><Link to="/login" >Login</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;