import { ItemsSelectedContextProvider } from "../context/itemsSelected-provider";
import { Container } from "@mui/material";

export default function Layout({ children }) {
    return (

        <ItemsSelectedContextProvider>{children}</ItemsSelectedContextProvider>




    );
}