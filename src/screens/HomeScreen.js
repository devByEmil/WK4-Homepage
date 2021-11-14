import React from "react";

import "./HomeScreen.scss";

const HomeScreen = (props) => {
    return (
        <div className="home">
            <img
                className="home__logo"
                src="../assets/vfs_logo.png"
                alt="Logo"
            />
            <table className="home__table"></table>
        </div>
    );
};

export default HomeScreen;
