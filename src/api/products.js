

export const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`);
        console.log(response);
        const productsJson = await response.json();
        return productsJson.products;

    } catch (error) {
        console.log(error);
        return [];

    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`);
        const productJson = await response.json();
        return productJson.product;

    } catch (error) {
        console.log(error);
        return [];

    }
};


export const updateProduct = async product => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${product._id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        const productJson = await response.json();
        return productJson;
    } catch (error) {
        console.log(error);
        return {};

    }

};

export const createProduct = async product => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const productJson = await response.json();
        return productJson.productSaved;
    } catch (error) {
        console.log(error);
        return {}

    }
};

export const deleteProduct = async id => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`, {
            method: 'DELETE',
        });

        return response.status === 204
    } catch (error) {
        console.log(error);
        return false;

    }

};