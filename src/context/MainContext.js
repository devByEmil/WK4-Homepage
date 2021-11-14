import React, { useState, createContext, useContext, useMemo } from "react";

import { trainingTimes } from "@data";

const initalState = {
    trainingTimes: trainingTimes,
};

const Store = createContext();

const Provider = (props) => {
    const [data, setData] = useState(initalState);
    const contextValue = useMemo(() => {
        return { data, setData };
    }, [data]);

    return (
        <Store.Provider value={contextValue}>{props.children}</Store.Provider>
    );
};

const useStore = () => useContext(Store);

export { Provider, useStore };
