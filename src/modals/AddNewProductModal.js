import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import ProductForm from "@/forms/ProductForm";

export default function AddNewProductModal({ open, onClose, onSubmit }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Agregar producto...
            </DialogTitle>
            <DialogContent>
                <ProductForm onSubmit={onSubmit} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form='product-form'
                >
                    Borrar formulario
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    form='product-form'
                    onClick={onClose}
                >
                    Agregar producto
                </Button>

            </DialogActions>

        </Dialog>
    );
};