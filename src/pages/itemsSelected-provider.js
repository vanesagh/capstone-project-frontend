'use client';

import { createContext, useContext, useState } from "react";

const ItemsSelectedContext = createContext({})

export const ItemsSelectedContextProvider = ({ children }) => {
    const [itemsList, setItemsList] = useState([]);


    return (
        <ItemsSelectedContext.Provider value={{ itemsList, setItemsList }}>
            {children}
        </ItemsSelectedContext.Provider>
    )
};

export default useItemsSelectedContext = () => useContext(ItemsSelectedContext);