const Products = require('../models/productModel')
const User = require('../models/UserMOdel')

const cartValue = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email: email })
        if (user) {
            const value = await user.cart
            res.send(value)
        }
    } catch (error) {
        console.log(error)
    }
}

const CartCtrl = async (req, res) => {
    try {
        const { id, userId } = req.body
        if (id && userId) {
            const product = await Products.findById(id)
            const user = await User.findByIdAndUpdate(userId, { $addToSet: { cart: product } })
            res.send("Product Added")
        } else if (!userId) {
            res.send("please login")
        }

    } catch (error) {
        console.log(error)
    }
}

const removeProduct = async (req, res) => {
    try {
        const { id, userId } = req.body
        if (!userId) {
            res.send("please login")
        }
        if (!id) {
            res.send("invalid product")
        }
        if (id && userId) {
            const product = await Products.findById(id)
            const user = await User.updateOne({ _id: userId }, { $pull: { cart: product } })
            res.send("Product Removed")
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = { CartCtrl, removeProduct, cartValue }