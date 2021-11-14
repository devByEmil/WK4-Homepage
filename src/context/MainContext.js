import React, { useState, createContext, useContext } from "react";

const initalState = [];

const Store = createContext();

const Provider = (props) => {
    const [data, setData] = useState(initalState);
    const contextValue = useMemo(() => [data, setData]);

    return (
        <Store.Provider value={contextValue}>{props.children}</Store.Provider>
    );
};

const useStore = () => useContext(Store);

export { Provider, useStore };
