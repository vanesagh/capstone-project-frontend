import PageDescription from "../components/PageDescription";
import StoreNavBar from "../components/StoreNavBar";
import { useRouter } from "next/router";
import ItemsSelectedContext from "../context/itemsSelected-provider";
import { Grid } from "@mui/material";
import CheckoutTableComponent from "../components/CheckoutTable";
import CustomerOrderForm from "@/forms/CustomerOrderForm";
import { useContext } from "react";


export default function Checkout() {
    const useItemsSelectedContext = () => useContext(ItemsSelectedContext);
    const { itemsList, setItemsList } = useItemsSelectedContext();
    //console.log(itemsList);
    const router = useRouter();
    console.log(router.pathname);
    return (
        <>
            <section>
                <PageDescription title="Pedido" />
            </section>
            <section>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <h2>Datos del cliente</h2>
                        <CustomerOrderForm itemsList={itemsList} setItemsList={setItemsList} />
                    </Grid>
                    <Grid item md={6}>
                        <h2>Detalle orden</h2>
                        <CheckoutTableComponent itemsList={itemsList} setItemsList={setItemsList} />
                    </Grid>

                </Grid>
            </section>
        </>

    );
}