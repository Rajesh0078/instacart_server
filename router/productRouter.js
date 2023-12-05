const { CartCtrl, removeProduct, cartValue } = require("../controllers/cartCtrl")
const { randomproducts, categoryProducts, } = require("../controllers/randomProductCtrl")

const productRouter = require("express").Router()

productRouter.get('/randomproducts', randomproducts)
productRouter.post('/products/:category', categoryProducts)
productRouter.post('/cart', CartCtrl)
productRouter.post('/cartremove', removeProduct)
productRouter.post('/cartvalue', cartValue)



module.exports = productRouter