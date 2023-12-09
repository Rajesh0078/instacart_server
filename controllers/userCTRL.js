const jwt = require("jsonwebtoken")
const User = require("../models/UserMOdel")

const authCtrl = async (req, res) => {
    try {
        const { email, password, cpassword } = req.body
        const findUser = await User.findOne({ email: email })
        if (findUser) {
            res.status(200).json({
                msg: "user already exists"
            })
        }
        else if (password !== cpassword) {
            res.status(200).json({
                msg: "password does not match"
            })
        }
        else {
            const user = await User.create(req.body)
            res.status(200).json({
                msg: "signup successfull"
            })
        }

    } catch (error) {
        console.log(error)
    }
}


const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await User.findOne({ email: email })
        if (!findUser) {
            res.status(200).json({
                msg: "User not found"
            })
        }
        else if (findUser.password !== password) {
            res.status(200).json({
                msg: "Incorrect Password"
            })
        }
        else {
            let payload = {
                user: {
                    id: findUser.id
                }
            }
            jwt.sign(payload, "jwtKey", { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err
                    return res.json({ token: token })
                }
            )
        }

    } catch (error) {
        console.log(error)
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.user.id
        let findUser = await User.findById(id)
        res.send(findUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { authCtrl, loginCtrl, getUser }