const bodyParser = require("body-parser")
const express = require("express")
require("dotenv").config()
const port = process.env.PORT || 8080
const cors = require("cors")
const Connection = require("./config/dbConfig")
const router = require("./router/userRouter")
const productRouter = require("./router/productRouter")
const app = express()

Connection()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/api', router)
app.use('/api', productRouter)

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})