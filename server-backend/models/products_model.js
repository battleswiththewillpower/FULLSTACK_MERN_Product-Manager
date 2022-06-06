const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // if left blank will give error
        required: [true, "title is required"],
        // set a minium length
        minLength: [2, "title must be least 2 characters"]

    },

    price: {
        type: Number,
        // if left blank will give error
        required: [true, "Price is required"],
        // set a minium length
        minLength: [1, "Price must be added!"]
    }, 

    description: {
        type: String,
        // if left blank will give error
        required: [true, "Description is required"],
        // set a minium length
        minLength: [5, "Description must be least 5 characters"]
    }


}, {timestamps: true})



module.exports = mongoose.model('Product', ProductSchema);
// const Joke = mongoose.model("Joke",jokeSchema)
// //option 1
// module.exports = Joke;

// //option 2
// module.exports.Nameit = monogoose.model("Nameit",nameThisSchema)