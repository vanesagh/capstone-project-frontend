import PageDescription from "../components/PageDescription";
import ProductItem from "../components/ProductItem";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import AddNewProductModal from "@/modals/AddNewProductModal";
import EditProductModal from "@/modals/EditProductModal";

const inter = Inter({ subsets: ['latin'] })

export default function AdminPage() {
    const [editProduct, setEditProduct] = useState();
    const [istNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/products");
            const responseJson = await response.json();
            setProducts(responseJson);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnSubmit = values => {
        const tempProducts = Array.from(products);
        if (!!values._id) {
            const productIndex = tempProducts.findIndex(p => p._id === values._id);
            tempProducts[productIndex] = values;
        } else {
            tempProducts.push({
                ...values,
                _id: products.length + 1,
            });
        }
        setProducts(tempProducts);

    };

    const handleDelete = id =>
        setProducts(prev => prev.filter(p => p._id !== id));
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