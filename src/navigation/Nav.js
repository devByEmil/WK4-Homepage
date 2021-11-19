import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Nav.scss";

const Nav = (props) => {
    const location = useLocation();
    const isHomeMode = location.pathname === "/";

    return (
        <nav className={isHomeMode ? "navHome" : "nav"}>
            {!isHomeMode && (
                <Link className="nav__start" to="/">
                    <img
                        src="../assets/vfs_logo.png"
                        alt="Logo"
                        className="nav__logo"
                    />
                </Link>
            )}
            <div className={isHomeMode ? "navHome__links" : "nav__links"}>
                <Link
                    className={
                        isHomeMode ? "navHome__links__link" : "nav__links__link"
                    }
                    to="/exercises"
                >
                    Übungen
                </Link>
                <Link
                    className={
                        isHomeMode ? "navHome__links__link" : "nav__links__link"
                    }
                    to="/events"
                >
                    Termine
                </Link>
                <Link
                    className={
                        isHomeMode ? "navHome__links__link" : "nav__links__link"
                    }
                    to="/more"
                >
                    Mehr
                </Link>
                <Link
                    className={
                        isHomeMode ? "navHome__links__link" : "nav__links__link"
                    }
                    to="/about"
                >
                    Über
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
