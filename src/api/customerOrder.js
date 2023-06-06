export const createCustomerOrder = async customerOrder => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/checkout`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customerOrder),
        });

        const customerOrderJson = await response.json();
        return customerOrderJson.productSaved;
    } catch (error) {
        console.log(error);
        return {}

    }
};