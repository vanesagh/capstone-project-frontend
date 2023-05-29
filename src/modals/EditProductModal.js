import ProductForm from "@/forms/ProductForm";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
export default function EditProductModal({ open, onClose, onSubmit, product }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Modificar producto...
            </DialogTitle>
            <DialogContent>
                <ProductForm
                    editValues={product}
                    onSubmit={onSubmit}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    form='product-form'
                    onClick={onClose}
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    form='product-form'
                    onClick={onClose}
                >
                    Actualizar producto
                </Button>


            </DialogActions>


        </Dialog>
    );

};