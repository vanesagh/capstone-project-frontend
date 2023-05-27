import PageDescription from "../components/PageDescription";
import ProductItem from "../components/ProductItem";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function AdminPage() {
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
    }
    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <PageDescription title="Productos" />
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Button
                        variant="contained"
                        size="large"
                    >
                        Agregar nuevo producto
                    </Button>
                </div>
                <section>
                    {products.map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </section>

            </main>

        </>
    );
};