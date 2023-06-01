import { Grid, Box } from "@mui/material";
import PageDescription from "@/pages/components/PageDescription";
import Image from "next/image";

export default function Product({ product }) {
    return (
        <>
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
        </>
    );
};

export async function getStaticPaths() {
    try {
        const response = await fetch(`http://localhost:3000/api/products/`);
        const products = await response.json();
        const paths = products.map((product) => {
            return { params: { id: product._id.toString() } };
        });
        console.log(paths);

        return {
            paths,
            fallback: "blocking",
        };

    } catch (error) {

        console.error(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(`http://localhost:3000/api/products/${params.id}`);
        const product = await response.json();
        return {
            props: {
                product,
            },
            revalidate: 5,
        };
    } catch (error) {
        return { notFound: true };

    }
};