import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import HomeScreen from "../screens/HomeScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import EventsScreen from "../screens/EventsScreen";
import MoreScreen from "../screens/MoreScreen";
import AboutScreen from "../screens/AboutScreen";

const MainNavigator = (props) => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/exercises" element={<ExercisesScreen />} />
                <Route path="/events" element={<EventsScreen />} />
                <Route path="/more" element={<MoreScreen />} />
                <Route path="/about" element={<AboutScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainNavigator;
