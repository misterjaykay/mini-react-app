import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Recipe Treasure Box
        </Link>
        <div>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/home"
                className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/entry"
                className={
                window.location.pathname === "/entry"  ? "nav-link active"  : "nav-link"}
            >
                Entry
            </Link>
            </li>
        </ul>
        </div>
    </nav>
    );
}

export default Nav;
