// 1. imort all dependeinces
const express = require("express");
const cors = require('cors')
const app = express();
const port = 8000;



// 2.1 config express, cors, mongoose
require("./configs/mongoose.config")
app.use(cors())


// 2.2 config express //needed for post method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. routes & logic

const AllMyRoutes = require("./routes/product_routes.js");
AllMyRoutes(app);


// 4. listen to the port
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));