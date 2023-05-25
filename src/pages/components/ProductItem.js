import { Button, Grid, Stack } from "@mui/material";

export default function ProductItem({ product }) {
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
                    <div>Precio: {product.price}</div>
                    <Button
                        variant="contained"
                        size="large"
                    >
                        Agregar a mi carrito
                    </Button>


                </Stack>
            </Grid>

        </Grid>
    );
};
