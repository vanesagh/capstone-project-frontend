import { Button } from "@mui/material";

export default function EditDeleteProductComponent({ handleDelete, handleEdit }) {
    return (
        <>
            <Button
                variant="contained"
                size="large"
                color="warning"
                onClick={handleEdit}
            >
                Editar
            </Button>
            <Button
                variant="contained"
                size="large"
                color="error"
                onClick={handleDelete}
            >
                Eliminar
            </Button>
        </>
    );


};