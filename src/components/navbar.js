import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Tambahkan CSS untuk styling

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-item" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/quotes" className="nav-item" activeClassName="active">
                Quotes
            </NavLink>
            <NavLink to="/about" className="nav-item" activeClassName="active">
                About
            </NavLink>
        </nav>
    );
}
