export default async function handler(req, res) {
    const response = await fetch("http://localhost:3000/api/products/");
    const products = await response.json();

    const { id } = req.query;

    const match = products.find((product) => product._id == id);

    res.status(200).json(match);
};