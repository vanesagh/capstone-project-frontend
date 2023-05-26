import PageDescription from "../components/PageDescription";
import StoreNavBar from "../components/StoreNavBar";
import { useRouter } from "next/router";
import { useItemsSelectedContext } from "../itemsSelected-provider";
import { Grid } from "@mui/material";
import CheckoutTableComponent from "../components/CheckoutTable";
export default function Checkout() {
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
                    <Grid item md={6}>1</Grid>
                    <Grid item md={6}>
                        <CheckoutTableComponent itemsList={itemsList} setItemsList={setItemsList} />
                    </Grid>

                </Grid>
            </section>
        </>

    );
}