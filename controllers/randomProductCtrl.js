const Products = require('../models/productModel')

const categoryProducts = async (req, res) => {
    try {
        const { page } = req.body
        const category = req.params.category
        const first = category.charAt(0).toUpperCase()
        const last = category.slice(1, category.length)

        const products = await Products.find({ category: (first + last) })

        const itemsPerPage = 15
        let pageNo = page ? page : 1
        const startIndex = (itemsPerPage * pageNo) - itemsPerPage
        const endIndex = itemsPerPage * pageNo

        const result = products.slice(startIndex, endIndex)

        res.json({
            totalproducts: products.length,
            products: result,
            startingProducts: startIndex + 1,
            endProducts: endIndex,
            totalPages: Math.ceil(products.length / itemsPerPage)
        })

    } catch (error) {
        console.log(error)
    }
}

const randomproducts = async (req, res) => {
    try {
        const products = await Products.find({})
        const result = []
        for (let i = 0; i < 20; i++) {
            let num = Math.ceil(Math.random() * (products.length - 1))
            if (!result.includes(products[num])) {
                result.push(products[num])
            }
        }
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { randomproducts, categoryProducts }