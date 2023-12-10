const paymentInit = require("../controllers/stripeCtrl")

const stripeRouter = require("express").Router()

stripeRouter.post('/checkout-session', paymentInit)

module.exports = stripeRouter