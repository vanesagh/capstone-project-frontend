import { Button } from "@mui/material";
import { useItemsSelectedContext } from "@/pages/context/itemsSelected-provider";


export default function AddProduct2CartComponent({ product }) {
    const { itemsList, setItemsList } = useItemsSelectedContext();

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