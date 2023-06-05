import { Grid, Stack, Button } from "@mui/material";
import { useRouter } from "next/router";
import AddProduct2CartComponent from "./AddProduct2Cart";
import Link from "next/link"
import EditDeleteProductComponent from "./EditDeleteProduct";

export default function ProductItem({ product, handleDelete, handleEdit }) {
    const router = useRouter();
    const path = router.pathname;
    console.log(path);
    return (
        <Grid container spacing={6} sx={{ pb: "40x" }}>
            <Grid item md={6}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100%" }}
                />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={4}>
                    <h3>{product.name}</h3>
                    <div>{product.description}</div>
                    <div>Precio: {product.price} MXP</div>

                    <>
                        {path === '/' ?
                            <>
                                <div>
                                    <Link href={`/products/${product._id}`}>
                                        mas...
                                    </Link>

                                </div><AddProduct2CartComponent product={product} />
                            </>
                            :
                            <EditDeleteProductComponent handleDelete={handleDelete} handleEdit={handleEdit} />}
                    </>

                </Stack>
            </Grid>

        </Grid>
    );
};
