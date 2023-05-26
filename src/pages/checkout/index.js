import PageDescription from "../components/PageDescription";
import StoreNavBar from "../components/StoreNavBar";
import { useRouter } from "next/router";

export default function Checkout() {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <section>

            <PageDescription title="Pedido"></PageDescription>
        </section>
    );
}