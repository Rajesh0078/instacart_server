const Products = require('../models/productModel')

const searchProducts = async (req, res) => {
    try {
        const { productName } = req.body
        if (productName) {
            const product = await Products.findOne({ name: productName })
            res.send(product)
        }
        else {
            res.send("product name not exist")
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { searchProducts }