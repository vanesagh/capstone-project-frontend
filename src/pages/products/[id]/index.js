import { Grid, Box } from "@mui/material";
import PageDescription from "@/components/PageDescription";
import StoreNavBar from "@/components/StoreNavBar";
import ItemsSelectedContext from "@/context/itemsSelected-provider";
import { useContext } from "react";
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

import Image from "next/image";
import { getProduct, getProducts } from "@/api/products";

const inter = Inter({ subsets: ['latin'] });

function Product({ product }) {
    const useItemsSelectedContext = useContext(ItemsSelectedContext);
    const { itemsList } = useItemsSelectedContext;
    //console.log(itemsList);


    return (

        <>
            <StoreNavBar itemsList={itemsList} />
            <main className={`${styles.main} ${inter.className}`}>

                <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"

                >
                    <PageDescription
                        title={product.name}
                    />
                    <Box>
                        <img
                            src={product.imageUrl}
                            width={400}
                            height={400}
                            alt="Image product"
                        />
                    </Box>
                    <Box>
                        <h2>Descripción</h2>
                    </Box>
                    <Box>
                        <span>{product.description}</span>
                    </Box>
                    <Box>
                        <p>Precio: {product.price} MXP</p>
                    </Box>
                </Grid>
            </main >

        </>



    );
};

export async function getStaticPaths() {
    try {
        const products = await getProducts();
        const paths = products.map((product) => {
            return { params: { id: product._id.toString() } };
        });
        console.log(paths);

        return {
            paths,
            fallback: false,
        };

    } catch (error) {

        console.error(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const product = await getProduct(params.id);

        return {
            props: {
                product,
            },
            revalidate: 1,
        };
    } catch (error) {
        return { notFound: true };

    }
};

export default Product;