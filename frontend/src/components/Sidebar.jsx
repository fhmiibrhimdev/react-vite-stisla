import React from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";

export default function Sidebar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-secondary navbar-expand-lg">
            <div className="container">
                <ul className="navbar-nav">
                    <li
                        className={`nav-item ${
                            location.pathname === "/" ? "active" : ""
                        }`}
                    >
                        <NavLink href="/" className="nav-link">
                            <i className="far fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li
                        className={`nav-item ${
                            location.pathname === "/about" ? "active" : ""
                        }`}
                    >
                        <NavLink href="/about" className="nav-link">
                            <i className="far fa-exclamation"></i>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li
                        className={`nav-item ${
                            location.pathname === "/contact" ? "active" : ""
                        }`}
                    >
                        <NavLink href="/contact" className="nav-link">
                            <i className="far fa-phone"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
