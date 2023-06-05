import { useState } from "react";
import ItemsSelectedContext from "../context/itemsSelected-provider";

const ItemsSelectedContextProvider = ({ children }) => {
    const [itemsList, setItemsList] = useState([]);


    return (
        <ItemsSelectedContext.Provider value={{ itemsList, setItemsList }}>
            {children}
        </ItemsSelectedContext.Provider>
    )
};

export default function Layout({ children }) {
    return (

        <ItemsSelectedContextProvider>{children}</ItemsSelectedContextProvider>




    );
}