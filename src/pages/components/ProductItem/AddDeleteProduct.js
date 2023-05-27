import { Button } from "@mui/material";

export default function AddDeleteProducComponent() {
    return (
        <>
            <Button
                variant="contained"
                size="large"

                color="warning"
            >
                Editar
            </Button>
            <Button
                variant="contained"
                size="large"

                color="error"
            >
                Eliminar
            </Button>
        </>
    );


};