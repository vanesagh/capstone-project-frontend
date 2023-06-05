import { Button } from "@mui/material";
import ItemsSelectedContext from "@/context/itemsSelected-provider";
import { useContext } from "react";

export default function AddProduct2CartComponent({ product }) {
    const useItemsSelectedContext = useContext(ItemsSelectedContext);
    const { itemsList, setItemsList } = useItemsSelectedContext;

    const handleAddItem = (product) => {
        const items = itemsList;
        //console.log(product);
        setItemsList([...items, product]);

    };
    return (

        <Button
            variant="contained"
            size="large"
            onClick={() => { handleAddItem(product) }}
        >
            Agregar a mi carrito
        </Button>


    );
};