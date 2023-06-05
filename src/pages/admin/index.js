import PageDescription from "../../components/PageDescription";
import ProductItem from "../../components/ProductItem";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import AddNewProductModal from "@/modals/AddNewProductModal";
import EditProductModal from "@/modals/EditProductModal";
import { createProduct, deleteProduct, updateProduct, getProducts } from "@/api/products";

const inter = Inter({ subsets: ['latin'] })

export default function AdminPage() {
    const [editProduct, setEditProduct] = useState();
    const [istNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);



    const handleOnSubmit = async values => {
        const tempProducts = Array.from(products);
        if (!!values._id) {
            const updatedProduct = await updateProduct(values);
            const productIndex = tempProducts.findIndex(p => p._id === updatedProduct._id);
            tempProducts[productIndex] = updatedProduct;

        } else {
            const newProduct = await createProduct(values);
            tempProducts.push(newProduct);

        }
        setProducts(tempProducts);

    };

    const handleDelete = async id => {
        const isDeleted = await deleteProduct(id);
        if (isDeleted)
            setProducts(prev => prev.filter(p => p._id !== id))

    };

    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
            console.log(products);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <PageDescription title="Productos" />
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => setIsNewProjectModalVisible(true)}
                    >
                        Agregar nuevo producto
                    </Button>
                </div>
                <section>
                    {products.map((product) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            handleDelete={() => handleDelete(product._id)}
                            handleEdit={() => setEditProduct(product)}
                        />
                    ))}
                    <AddNewProductModal
                        open={istNewProjectModalVisible}
                        onClose={() => setIsNewProjectModalVisible(false)}
                        onSubmit={handleOnSubmit}
                    />
                    <EditProductModal
                        open={!!editProduct}
                        onClose={() => setEditProduct()}
                        onSubmit={handleOnSubmit}
                        product={editProduct}
                    />
                </section>
            </main>
        </>
    );
};