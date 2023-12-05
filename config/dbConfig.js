const mongoose = require("mongoose")


const Connection = async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected successfully")
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = Connection