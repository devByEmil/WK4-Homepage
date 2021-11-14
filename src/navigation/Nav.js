import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link className="nav__start" to="/">
                <img
                    src="../assets/vfs_logo.png"
                    alt="Logo"
                    className="nav__logo"
                />
            </Link>
            <div className="nav__links">
                <Link className="nav__links__link" to="/exercises">
                    Übungen
                </Link>
                <Link className="nav__links__link" to="/events">
                    Termine
                </Link>
                <Link className="nav__links__link" to="/more">
                    Mehr
                </Link>
                <Link className="nav__links__link" to="/about">
                    Über
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
