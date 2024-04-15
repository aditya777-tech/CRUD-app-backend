const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

const PORT = process.env.PORT || 5000;

const password = encodeURIComponent("1wwe2#333aditya");
mongoose.connect("mongodb+srv://adityapanwar381:" + password + "@backenddb.umdgxze.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log("mongoose is connected");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Connection to MongoDB failed:", error);
       // Stop the server if the connection fails
    });


