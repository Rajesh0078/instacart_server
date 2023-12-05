const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: String
    },
    pincode: {
        required: true,
        type: Number
    },
    password: {
        required: true,
        type: String
    },
    cpassword: {
        required: true,
        type: String
    },
    cart: [

    ]

})

module.exports = mongoose.model("User", userSchema, "user")