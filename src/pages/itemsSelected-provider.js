'use client';

import { createContext, useContext, useState } from "react";

const ItemsSelectedContext = createContext({})

export const ItemsSelectedContextProvider = ({ children }) => {
    const [color, setColor] = useState('red');
    const [itemsList, setItemsList] = useState([]);


    return (
        <ItemsSelectedContext.Provider value={{ itemsList, setItemsList }}>
            {children}
        </ItemsSelectedContext.Provider>
    )
};

export const useItemsSelectedContext = () => useContext(ItemsSelectedContext);