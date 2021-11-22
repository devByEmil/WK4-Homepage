import React from "react";

import "./HomeScreen.scss";
import logo from "../assets/vfs_logo.png";
import { useStore } from "@context";

const HomeScreen = (props) => {
    const { data } = useStore();

    return (
        <div className="home">
            <img className="home__logo" src={logo} alt="Logo" />
            <table className="home__table">
                <tbody>
                    {data.trainingTimes.map((item, index) => {
                        return (
                            <tr className="home__table__row" key={index}>
                                <td className="home__table__data">
                                    {item.day}
                                </td>
                                <td className="home__table__data">
                                    {item.starttime
                                        ? `${item.starttime}-${item.endtime} (${item.type})`
                                        : "Kein Training"}
                                </td>
                                <td className="home__table__data">
                                    {item.location}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeScreen;
