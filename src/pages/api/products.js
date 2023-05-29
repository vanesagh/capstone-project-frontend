export default function handler(req, res) {
    res.status(200).json([
        {
            _id: 1,
            name: "Babka de chocolate",
            description: "Pan trenzado relleno de chocolate",
            price: 230,
            imageUrl: "https://www.foodandwine.com/thmb/3alI1eL7tHTvNuAH9jQlHDDx2Yw=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE0116-XL-chocolate-babka-1a2e39def5f043f58caf48b97456a119.jpg"
        },
        {
            _id: 2,
            name: "Roles de canela",
            description: "Pan trenzado relleno de chocolate",
            price: 20,
            imageUrl: "https://www.savynaturalista.com/wp-content/uploads/Sugar-Free-Cinanamon-Rolls-6.jpg"
        },
    ]);

};