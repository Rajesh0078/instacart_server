const { searchProducts } = require("../controllers/searchCTRL")

const searchRouter = require("express").Router()

searchRouter.post("/search", searchProducts)

module.exports = searchRouter