const router = require("express").Router()

const login = require("../controllers/auth/login")
const register = require("../controllers/auth/register")
const {isAuthenticated, isAuthenticatedMiddleware} = require("../controllers/auth/isauthenticated")

router.post("/register", register)
router.post("/login", login)
router.get("/login", isAuthenticated)


module.exports = router