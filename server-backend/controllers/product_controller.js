// otion 1
const Product = require("./../models/products_model");

// // option 2
// const { Nameit } = require("./../models/name_model");
// const handleResponse = (results, res)=> res.json(results)


module.exports.testApi = (req, res) =>{
    res.json("backend it")
}

module.exports.getOne = (req, res) =>{
    Product.findOne({_id : req.params.id})
        .then(newOne => res.json(newOne))
        .catch(err=> res.json(err))

}

//get all
module.exports.getAll = (req, res) =>{
    Product.find()
        .then(all => res.json(all))
        .catch(err=> res.json(err))
}

//create one
module.exports.createOne = (req, res) =>{
    const products = req.body
    Product.create(products)
        .then(products => res.json(products))
        .catch(err=> res.json(err))

}
// // create another version
// module.exports.createTwo = (req, res) =>{
//     const products = new Product(req.body)
//     products.save()
//         .then(products => res.json(products))
//         .catch(err=> res.json(err))

// }

// update information --- combo of getOne & create
module.exports.updateProduct = (req, res) =>{
    console.log(req)
    Product.findOneAndUpdate(
        //get the criteria
        {_id: req.params.id},
        //update the values
        req.body,
        //options
        {new: true, runValidators: true}
    )
    //pass in as response for .then so it wont confuse it with the other functions
        .then(response => res.json(response))
        .catch(err => res.json(err))

}

// delete it
module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}
