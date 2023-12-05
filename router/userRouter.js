const { authCtrl, loginCtrl, getUser } = require("../controllers/userCTRL")
const jwtMiddleware = require("../middleares/jwtMiddleware")

const router = require("express").Router()

router.post("/signup", authCtrl)
router.post("/login", loginCtrl)
router.get("/getuser", jwtMiddleware, getUser)

module.exports = router