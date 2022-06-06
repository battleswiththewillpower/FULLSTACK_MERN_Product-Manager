const NameitController = require("./../controllers/product_controller")


module.exports = (app) => {
    app.get("/api", NameitController.testApi)
    app.get("/api/products/random", NameitController.getOne)
    app.get("/api/products", NameitController.getAll)
    app.post("/api/products/create", NameitController.createOne)
    app.get("/api/products/:id", NameitController.getOne)
    app.put("/api/products/update/:id", NameitController.updateProduct)
    app.delete("/api/products/delete/:id", NameitController.deleteProduct)
}

// module.exports = (app) => {
//     app.get("/api", (req, res) => {
//         res.json({ message: "Ashley for the Win$$$$$$" }, NameitController.getOne);
//     });
// }